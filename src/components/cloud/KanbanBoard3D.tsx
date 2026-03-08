import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useCallback, Suspense, forwardRef } from "react";
import * as THREE from "three";

const COLUMNS = [
  { label: "LEAD IN", x: -2.7, color: new THREE.Color("#0EA5E9") },
  { label: "QUALIFY", x: -0.9, color: new THREE.Color("#06B6D4") },
  { label: "CONTACT", x: 0.9, color: new THREE.Color("#14B8A6") },
  { label: "PROPOSAL", x: 2.7, color: new THREE.Color("#22D3EE") },
];

const COL_W = 1.5;
const COL_H = 4.0;
const COL_D = 0.3;
const CUBE_SIZE = 0.38;

/* ── Helper: wireframe edges for a box ── */
function GlowEdges({ w, h, d, color, intensity = 0.8, opacity = 0.6, radius = 0.012 }: {
  w: number; h: number; d: number; color: THREE.Color; intensity?: number; opacity?: number; radius?: number;
}) {
  const hw = w / 2, hh = h / 2, hd = d / 2;

  const edges = useMemo(() => {
    // 12 edges of a box
    const segs: { pos: [number, number, number]; rot: [number, number, number]; len: number }[] = [
      // Top face
      { pos: [0, hh, hd], rot: [0, 0, 0], len: w },
      { pos: [0, hh, -hd], rot: [0, 0, 0], len: w },
      { pos: [hw, hh, 0], rot: [0, Math.PI / 2, 0], len: d },
      { pos: [-hw, hh, 0], rot: [0, Math.PI / 2, 0], len: d },
      // Bottom face
      { pos: [0, -hh, hd], rot: [0, 0, 0], len: w },
      { pos: [0, -hh, -hd], rot: [0, 0, 0], len: w },
      { pos: [hw, -hh, 0], rot: [0, Math.PI / 2, 0], len: d },
      { pos: [-hw, -hh, 0], rot: [0, Math.PI / 2, 0], len: d },
      // Verticals
      { pos: [hw, 0, hd], rot: [Math.PI / 2, 0, 0], len: h },
      { pos: [-hw, 0, hd], rot: [Math.PI / 2, 0, 0], len: h },
      { pos: [hw, 0, -hd], rot: [Math.PI / 2, 0, 0], len: h },
      { pos: [-hw, 0, -hd], rot: [Math.PI / 2, 0, 0], len: h },
    ];
    return segs;
  }, [w, h, d, hw, hh, hd]);

  return (
    <group>
      {edges.map((e, i) => (
        <mesh key={i} position={e.pos} rotation={e.rot}>
          <cylinderGeometry args={[radius, radius, e.len, 6]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={intensity}
            transparent
            opacity={opacity}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Lead cube — glass block with glowing edges ── */
const LeadCube = forwardRef<THREE.Group, {
  startPos: [number, number, number];
  targetCol: number;
  delay: number;
  onLanded: () => void;
  cardIndex: number;
}>(({ startPos, targetCol, delay, onLanded, cardIndex }, _fRef) => {
  const ref = useRef<THREE.Group>(null);
  const glassRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const phaseRef = useRef<"wait" | "fall" | "settle" | "move" | "done">("wait");
  const elapsed = useRef(0);
  const moveTarget = useRef<number | null>(null);
  const currentCol = useRef(targetCol);
  const stackY = useRef(0);
  const hasLanded = useRef(false);
  const settleWait = useRef(1.8 + Math.random() * 1.5);
  const rotSpeed = useRef((Math.random() - 0.5) * 4);

  const colX = COLUMNS[targetCol].x;
  const colColor = COLUMNS[targetCol].color;

  useFrame((_, delta) => {
    if (!ref.current) return;
    elapsed.current += delta;
    const phase = phaseRef.current;

    if (phase === "wait") {
      if (elapsed.current > delay) {
        phaseRef.current = "fall";
        elapsed.current = 0;
      }
      ref.current.position.set(startPos[0], startPos[1], startPos[2]);
      ref.current.visible = false;
      return;
    }

    ref.current.visible = true;

    if (phase === "fall") {
      const t = Math.min(elapsed.current / 1.0, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const baseY = -COL_H / 2 + CUBE_SIZE / 2 + 0.15;
      const slotY = baseY + cardIndex * (CUBE_SIZE + 0.08);
      stackY.current = slotY;

      ref.current.position.x = THREE.MathUtils.lerp(startPos[0], colX, ease);
      ref.current.position.y = THREE.MathUtils.lerp(startPos[1], slotY, ease);
      ref.current.position.z = THREE.MathUtils.lerp(startPos[2], 0.1, ease);

      // Spin while falling
      ref.current.rotation.y += rotSpeed.current * delta * (1 - ease);
      ref.current.rotation.x += rotSpeed.current * 0.5 * delta * (1 - ease);
      // Settle rotation
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0, ease * 0.1);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, 0, ease * 0.05);

      if (t >= 1 && !hasLanded.current) {
        hasLanded.current = true;
        phaseRef.current = "settle";
        elapsed.current = 0;
        onLanded();
      }
    }

    if (phase === "settle") {
      const bounce = Math.sin(elapsed.current * 14) * 0.015 * Math.max(0, 1 - elapsed.current * 4);
      ref.current.position.y = stackY.current + bounce;
      // Slowly straighten
      ref.current.rotation.x *= 0.97;
      ref.current.rotation.y *= 0.97;

      if (elapsed.current > settleWait.current) {
        const nextCol = Math.min(currentCol.current + 1, COLUMNS.length - 1);
        if (nextCol !== currentCol.current) {
          moveTarget.current = nextCol;
          phaseRef.current = "move";
          elapsed.current = 0;
        } else {
          phaseRef.current = "done";
        }
      }
    }

    if (phase === "move" && moveTarget.current !== null) {
      const t = Math.min(elapsed.current / 0.6, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const fromX = COLUMNS[currentCol.current].x;
      const toX = COLUMNS[moveTarget.current].x;

      ref.current.position.x = THREE.MathUtils.lerp(fromX, toX, ease);
      ref.current.position.y = stackY.current + Math.sin(t * Math.PI) * 0.7;
      // Slight spin during transfer
      ref.current.rotation.y = Math.sin(t * Math.PI) * 0.3;

      if (t >= 1) {
        currentCol.current = moveTarget.current;
        moveTarget.current = null;
        phaseRef.current = "settle";
        elapsed.current = 0;
        settleWait.current = 1.5 + Math.random() * 1.5;
      }
    }

    if (phase === "done") {
      ref.current.rotation.x *= 0.99;
      ref.current.rotation.y *= 0.99;
    }
  });

  return (
    <group ref={ref} visible={false}>
      {/* Glass body */}
      <mesh>
        <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
        <meshPhysicalMaterial
          ref={glassRef}
          color="#B0E0FF"
          transparent
          opacity={0.08}
          roughness={0.02}
          metalness={0.05}
          transmission={0.95}
          thickness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.02}
          ior={1.45}
          side={THREE.DoubleSide}
          envMapIntensity={2}
        />
      </mesh>
      {/* Glowing wireframe edges */}
      <GlowEdges w={CUBE_SIZE} h={CUBE_SIZE} d={CUBE_SIZE} color={colColor} intensity={1.2} opacity={0.7} radius={0.008} />
    </group>
  );
});
LeadCube.displayName = "LeadCube";

/* ── Glass column — wireframe edges style ── */
const GlassColumn = forwardRef<THREE.Group, { x: number; label: string; color: THREE.Color }>(
  ({ x, color }, _ref) => {
    const pulseRef = useRef(0);

    useFrame(({ clock }) => {
      pulseRef.current = 0.5 + Math.sin(clock.getElapsedTime() * 1.2 + x) * 0.3;
    });

    return (
      <group position={[x, 0, 0]}>
        {/* Ultra-thin glass body */}
        <mesh>
          <boxGeometry args={[COL_W, COL_H, COL_D]} />
          <meshPhysicalMaterial
            color="#D0EDFF"
            transparent
            opacity={0.03}
            roughness={0.01}
            metalness={0}
            transmission={0.97}
            thickness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.01}
            ior={1.4}
            side={THREE.DoubleSide}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Luminescent wireframe edges */}
        <GlowEdges w={COL_W} h={COL_H} d={COL_D} color={color} intensity={0.6} opacity={0.45} radius={0.01} />

        {/* Inner horizontal shelf lines */}
        {[0.3, -0.5, -1.3].map((yy, i) => (
          <mesh key={i} position={[0, yy, COL_D / 2]}>
            <boxGeometry args={[COL_W - 0.15, 0.005, 0.005]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.2} />
          </mesh>
        ))}
      </group>
    );
  }
);
GlassColumn.displayName = "GlassColumn";

/* ── Floating bokeh particles ── */
const Particles = forwardRef<THREE.Points>((_, _fRef) => {
  const count = 30;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = Math.random() * 7 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i) - 0.003;
      pos.setY(i, y < -2 ? 5.5 : y);
      pos.setX(i, pos.getX(i) + Math.sin(clock.getElapsedTime() * 0.3 + i * 0.7) * 0.001);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#7DD3FC" size={0.04} transparent opacity={0.25} sizeAttenuation />
    </points>
  );
});
Particles.displayName = "Particles";

/* ── Main Scene ── */
function KanbanScene() {
  const [cycle, setCycle] = useState(0);

  const leads = useMemo(() => {
    const batch = [];
    for (let i = 0; i < 12; i++) {
      const col = i % COLUMNS.length;
      const slotInCol = Math.floor(i / COLUMNS.length);
      batch.push({
        id: `${cycle}-${i}`,
        startPos: [
          (Math.random() - 0.5) * 3,
          4.5 + Math.random() * 2,
          (Math.random() - 0.5) * 1.5,
        ] as [number, number, number],
        targetCol: col,
        delay: i * 0.3 + Math.random() * 0.15,
        cardIndex: slotInCol,
      });
    }
    return batch;
  }, [cycle]);

  const landedCount = useRef(0);

  const handleLanded = useCallback(() => {
    landedCount.current++;
    if (landedCount.current >= 12) {
      setTimeout(() => {
        landedCount.current = 0;
        setCycle((c) => c + 1);
      }, 5000);
    }
  }, []);

  return (
    <>
      {/* Clean, bright lighting — white background feel */}
      <ambientLight intensity={1.2} color="#F0F9FF" />
      <directionalLight position={[-4, 6, 8]} intensity={0.8} color="#E0F2FE" />
      <directionalLight position={[5, 3, -4]} intensity={0.4} color="#BAE6FD" />
      {/* Accent blue from below-left (global light direction) */}
      <pointLight position={[-4, -4, 5]} intensity={2.5} color="#0EA5E9" distance={16} decay={2} />
      <pointLight position={[0, 6, 3]} intensity={1} color="#38BDF8" distance={10} decay={2} />
      {/* Warm subtle accent */}
      <pointLight position={[4, 2, 4]} intensity={0.5} color="#7DD3FC" distance={8} decay={2} />

      <Particles />

      {COLUMNS.map((col) => (
        <GlassColumn key={col.label} x={col.x} label={col.label} color={col.color} />
      ))}

      {leads.map((lead) => (
        <LeadCube
          key={lead.id}
          startPos={lead.startPos}
          targetCol={lead.targetCol}
          delay={lead.delay}
          onLanded={handleLanded}
          cardIndex={lead.cardIndex}
        />
      ))}
    </>
  );
}

/* ── Exported Component ── */
const KanbanBoard3D = () => {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 44 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <KanbanScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default KanbanBoard3D;
