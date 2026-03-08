import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useCallback, Suspense, forwardRef } from "react";
import * as THREE from "three";

/* ── Column config matching Blender: positions [0,4,8,12] scaled to Three.js ── */
const COLUMNS = [
  { label: "LEAD IN", x: -4.5, color: new THREE.Color("#0D6EFD") },
  { label: "CONTATO", x: -1.5, color: new THREE.Color("#0EA5E9") },
  { label: "NEGOCIAÇÃO", x: 1.5, color: new THREE.Color("#06B6D4") },
  { label: "FECHADO", x: 4.5, color: new THREE.Color("#14B8A6") },
];

const COL_W = 2.2;
const COL_H = 5.5;
const COL_D = 0.4;
const CUBE_SIZE = 0.55;
const NUM_LEADS = 6;

/* ── Glowing wireframe edges ── */
function GlowEdges({
  w, h, d, color, intensity = 0.8, opacity = 0.6, radius = 0.012,
}: {
  w: number; h: number; d: number; color: THREE.Color;
  intensity?: number; opacity?: number; radius?: number;
}) {
  const hw = w / 2, hh = h / 2, hd = d / 2;

  const edges = useMemo(() => [
    // Top
    { pos: [0, hh, hd] as const, rot: [0, 0, 0] as const, len: w },
    { pos: [0, hh, -hd] as const, rot: [0, 0, 0] as const, len: w },
    { pos: [hw, hh, 0] as const, rot: [0, Math.PI / 2, 0] as const, len: d },
    { pos: [-hw, hh, 0] as const, rot: [0, Math.PI / 2, 0] as const, len: d },
    // Bottom
    { pos: [0, -hh, hd] as const, rot: [0, 0, 0] as const, len: w },
    { pos: [0, -hh, -hd] as const, rot: [0, 0, 0] as const, len: w },
    { pos: [hw, -hh, 0] as const, rot: [0, Math.PI / 2, 0] as const, len: d },
    { pos: [-hw, -hh, 0] as const, rot: [0, Math.PI / 2, 0] as const, len: d },
    // Verticals
    { pos: [hw, 0, hd] as const, rot: [Math.PI / 2, 0, 0] as const, len: h },
    { pos: [-hw, 0, hd] as const, rot: [Math.PI / 2, 0, 0] as const, len: h },
    { pos: [hw, 0, -hd] as const, rot: [Math.PI / 2, 0, 0] as const, len: h },
    { pos: [-hw, 0, -hd] as const, rot: [Math.PI / 2, 0, 0] as const, len: h },
  ], [w, h, d, hw, hh, hd]);

  return (
    <group>
      {edges.map((e, i) => (
        <mesh key={i} position={e.pos as [number, number, number]} rotation={e.rot as [number, number, number]}>
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

/* ── Lead Cube — beveled glass block with emission ── */
const LeadCube = forwardRef<THREE.Group, {
  index: number;
  cycle: number;
  onLanded: () => void;
}>(({ index, cycle, onLanded }, _fRef) => {
  const ref = useRef<THREE.Group>(null);
  const phaseRef = useRef<"wait" | "fall" | "settle" | "move1" | "wait2" | "move2" | "done">("wait");
  const elapsed = useRef(0);
  const hasLanded = useRef(false);
  const currentCol = useRef(0);

  // Blender-style: staggered start, drop from high
  const startZ = 10 + index * 2.5;
  const dropDelay = 0.5 + index * 0.4;
  const stackY = -COL_H / 2 + CUBE_SIZE / 2 + 0.2 + index * (CUBE_SIZE + 0.12);
  const rotSpeed = (Math.random() - 0.5) * 5;

  // Reset on cycle change
  useMemo(() => {
    phaseRef.current = "wait";
    elapsed.current = 0;
    hasLanded.current = false;
    currentCol.current = 0;
  }, [cycle]);

  const colColor = COLUMNS[0].color;

  useFrame((_, delta) => {
    if (!ref.current) return;
    elapsed.current += delta;
    const phase = phaseRef.current;

    if (phase === "wait") {
      ref.current.visible = false;
      ref.current.position.set(COLUMNS[0].x, startZ, 0.1);
      if (elapsed.current > dropDelay) {
        phaseRef.current = "fall";
        elapsed.current = 0;
      }
      return;
    }

    ref.current.visible = true;

    if (phase === "fall") {
      const dur = 0.9;
      const t = Math.min(elapsed.current / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);

      ref.current.position.x = COLUMNS[0].x;
      ref.current.position.y = THREE.MathUtils.lerp(startZ, stackY, ease);
      ref.current.position.z = 0.1;

      // Tumble while falling
      ref.current.rotation.x += rotSpeed * delta * (1 - ease);
      ref.current.rotation.z += rotSpeed * 0.6 * delta * (1 - ease);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0, ease * 0.15);
      ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, 0, ease * 0.15);

      if (t >= 1 && !hasLanded.current) {
        hasLanded.current = true;
        phaseRef.current = "settle";
        elapsed.current = 0;
        ref.current.rotation.set(0, 0, 0);
        onLanded();
      }
    }

    if (phase === "settle") {
      // Bounce settle
      const bounce = Math.sin(elapsed.current * 16) * 0.02 * Math.max(0, 1 - elapsed.current * 3);
      ref.current.position.y = stackY + bounce;

      if (elapsed.current > 1.5 + Math.random() * 0.5) {
        phaseRef.current = "move1";
        elapsed.current = 0;
      }
    }

    if (phase === "move1") {
      const dur = 0.7;
      const t = Math.min(elapsed.current / dur, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const fromX = COLUMNS[0].x;
      const toX = COLUMNS[1].x;
      ref.current.position.x = THREE.MathUtils.lerp(fromX, toX, ease);
      ref.current.position.y = stackY + Math.sin(t * Math.PI) * 0.9;
      ref.current.rotation.y = Math.sin(t * Math.PI) * 0.4;

      if (t >= 1) {
        currentCol.current = 1;
        ref.current.rotation.y = 0;
        // Even leads advance to col 3
        if (index % 2 === 0) {
          phaseRef.current = "wait2";
          elapsed.current = 0;
        } else {
          phaseRef.current = "done";
        }
      }
    }

    if (phase === "wait2") {
      ref.current.position.y = stackY;
      if (elapsed.current > 1.8 + Math.random() * 0.8) {
        phaseRef.current = "move2";
        elapsed.current = 0;
      }
    }

    if (phase === "move2") {
      const dur = 0.7;
      const t = Math.min(elapsed.current / dur, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const fromX = COLUMNS[1].x;
      const toX = COLUMNS[2].x;
      ref.current.position.x = THREE.MathUtils.lerp(fromX, toX, ease);
      ref.current.position.y = stackY + Math.sin(t * Math.PI) * 0.9;
      ref.current.rotation.y = Math.sin(t * Math.PI) * 0.4;

      if (t >= 1) {
        currentCol.current = 2;
        ref.current.rotation.y = 0;
        phaseRef.current = "done";
      }
    }

    if (phase === "done") {
      // Gentle idle float
      ref.current.position.y = stackY + Math.sin(elapsed.current * 0.8 + index) * 0.02;
    }
  });

  return (
    <group ref={ref} visible={false}>
      {/* Glass body with bevel effect */}
      <mesh>
        <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
        <meshPhysicalMaterial
          color="#0D6EFD"
          transparent
          opacity={0.12}
          roughness={0.1}
          metalness={0.05}
          transmission={0.9}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.05}
          ior={1.45}
          side={THREE.DoubleSide}
          envMapIntensity={2}
        />
      </mesh>
      {/* Inner glow core */}
      <mesh>
        <boxGeometry args={[CUBE_SIZE * 0.6, CUBE_SIZE * 0.6, CUBE_SIZE * 0.6]} />
        <meshStandardMaterial
          color="#0D6EFD"
          emissive="#0D6EFD"
          emissiveIntensity={5.0}
          transparent
          opacity={0.15}
          toneMapped={false}
        />
      </mesh>
      {/* Glowing wireframe edges */}
      <GlowEdges
        w={CUBE_SIZE} h={CUBE_SIZE} d={CUBE_SIZE}
        color={colColor} intensity={2.0} opacity={0.85} radius={0.01}
      />
    </group>
  );
});
LeadCube.displayName = "LeadCube";

/* ── Glass Column — wireframe pillar ── */
const GlassColumn = forwardRef<THREE.Group, { x: number; label: string; color: THREE.Color }>(
  ({ x, color }, _ref) => {
    return (
      <group position={[x, 0, 0]}>
        {/* Ultra-thin glass body */}
        <mesh>
          <boxGeometry args={[COL_W, COL_H, COL_D]} />
          <meshPhysicalMaterial
            color="#0A4A8A"
            transparent
            opacity={0.04}
            roughness={0.05}
            metalness={0}
            transmission={0.95}
            thickness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.02}
            ior={1.4}
            side={THREE.DoubleSide}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Luminescent wireframe edges */}
        <GlowEdges w={COL_W} h={COL_H} d={COL_D} color={color} intensity={0.5} opacity={0.4} radius={0.012} />

        {/* Inner shelf lines */}
        {[1.0, 0, -1.0, -2.0].map((yy, i) => (
          <mesh key={i} position={[0, yy, COL_D / 2]}>
            <boxGeometry args={[COL_W - 0.2, 0.004, 0.004]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.18}
            />
          </mesh>
        ))}
      </group>
    );
  }
);
GlassColumn.displayName = "GlassColumn";

/* ── Floating particles ── */
function Particles() {
  const count = 40;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = Math.random() * 9 - 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i) - 0.004;
      pos.setY(i, y < -3 ? 7 : y);
      pos.setX(i, pos.getX(i) + Math.sin(clock.getElapsedTime() * 0.2 + i * 0.5) * 0.001);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#38BDF8" size={0.05} transparent opacity={0.2} sizeAttenuation />
    </points>
  );
}

/* ── Ground plane with subtle reflection ── */
function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -COL_H / 2 - 0.01, 0]}>
      <planeGeometry args={[20, 10]} />
      <meshStandardMaterial
        color="#030B1A"
        roughness={0.2}
        metalness={0.6}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

/* ── Main Scene ── */
function KanbanScene() {
  const [cycle, setCycle] = useState(0);
  const landedCount = useRef(0);

  const handleLanded = useCallback(() => {
    landedCount.current++;
    if (landedCount.current >= NUM_LEADS) {
      setTimeout(() => {
        landedCount.current = 0;
        setCycle((c) => c + 1);
      }, 6000);
    }
  }, []);

  return (
    <>
      {/* Lighting matching Blender: area light from top-front + ambient */}
      <ambientLight intensity={0.6} color="#E0F2FE" />
      <directionalLight position={[-5, 8, 8]} intensity={0.7} color="#E0F2FE" />
      <directionalLight position={[6, 4, -3]} intensity={0.3} color="#BAE6FD" />

      {/* Blue accent lights — neon glow feel */}
      <pointLight position={[-5, -3, 6]} intensity={4} color="#0D6EFD" distance={18} decay={2} />
      <pointLight position={[5, -3, 6]} intensity={3} color="#0EA5E9" distance={16} decay={2} />
      <pointLight position={[0, 8, 4]} intensity={2} color="#38BDF8" distance={14} decay={2} />
      {/* Warm accent from behind */}
      <pointLight position={[0, 2, -5]} intensity={1.5} color="#7DD3FC" distance={12} decay={2} />

      <Particles />
      <GroundPlane />

      {COLUMNS.map((col) => (
        <GlassColumn key={col.label} x={col.x} label={col.label} color={col.color} />
      ))}

      {Array.from({ length: NUM_LEADS }).map((_, i) => (
        <LeadCube key={`${cycle}-${i}`} index={i} cycle={cycle} onLanded={handleLanded} />
      ))}
    </>
  );
}

/* ── Exported Component ── */
const KanbanBoard3D = () => {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[650px] rounded-3xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 1, 9], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.3,
        }}
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
