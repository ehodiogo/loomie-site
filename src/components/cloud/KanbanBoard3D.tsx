import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useRef, useMemo, useState, useCallback, Suspense, forwardRef } from "react";
import * as THREE from "three";

const COLUMNS = [
  { label: "LEAD IN", x: -2.7, color: "#0EA5E9" },
  { label: "QUALIFY", x: -0.9, color: "#06B6D4" },
  { label: "CONTACT", x: 0.9, color: "#14B8A6" },
  { label: "PROPOSAL", x: 2.7, color: "#22D3EE" },
];

const COLUMN_WIDTH = 1.5;
const COLUMN_HEIGHT = 3.8;
const CARD_HEIGHT = 0.28;
const CARD_WIDTH = 1.1;
const CARD_DEPTH = 0.06;

/* ── Lead card — translucent blue glass ── */
const LeadCard = forwardRef<THREE.Group, {
  startPos: [number, number, number];
  targetCol: number;
  delay: number;
  onLanded: () => void;
  cardIndex: number;
}>(({ startPos, targetCol, delay, onLanded, cardIndex }, _fRef) => {
  const ref = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const phaseRef = useRef<"wait" | "fall" | "settle" | "move" | "done">("wait");
  const elapsed = useRef(0);
  const moveTarget = useRef<number | null>(null);
  const currentCol = useRef(targetCol);
  const stackY = useRef(0);
  const hasLanded = useRef(false);
  const settleWait = useRef(1.8 + Math.random() * 1.5);

  const colX = COLUMNS[targetCol].x;

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
      const t = Math.min(elapsed.current / 0.9, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const baseY = -COLUMN_HEIGHT / 2 + CARD_HEIGHT / 2 + 0.2;
      const slotY = baseY + cardIndex * (CARD_HEIGHT + 0.1);
      stackY.current = slotY;

      ref.current.position.x = THREE.MathUtils.lerp(startPos[0], colX, ease);
      ref.current.position.y = THREE.MathUtils.lerp(startPos[1], slotY, ease);
      ref.current.position.z = THREE.MathUtils.lerp(startPos[2], 0.12, ease);

      if (matRef.current) {
        matRef.current.emissiveIntensity = THREE.MathUtils.lerp(1.5, 0.2, ease);
        matRef.current.opacity = THREE.MathUtils.lerp(0.15, 0.25, ease);
      }

      if (t >= 1 && !hasLanded.current) {
        hasLanded.current = true;
        phaseRef.current = "settle";
        elapsed.current = 0;
        onLanded();
      }
    }

    if (phase === "settle") {
      const bounce = Math.sin(elapsed.current * 14) * 0.02 * Math.max(0, 1 - elapsed.current * 4);
      ref.current.position.y = stackY.current + bounce;

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
      const t = Math.min(elapsed.current / 0.5, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const fromX = COLUMNS[currentCol.current].x;
      const toX = COLUMNS[moveTarget.current].x;

      ref.current.position.x = THREE.MathUtils.lerp(fromX, toX, ease);
      ref.current.position.y = stackY.current + Math.sin(t * Math.PI) * 0.6;

      if (matRef.current) {
        matRef.current.emissiveIntensity = 0.2 + Math.sin(t * Math.PI) * 0.8;
      }

      if (t >= 1) {
        currentCol.current = moveTarget.current;
        moveTarget.current = null;
        phaseRef.current = "settle";
        elapsed.current = 0;
        settleWait.current = 1.5 + Math.random() * 1.5;
      }
    }
  });

  return (
    <group ref={ref} visible={false}>
      <RoundedBox args={[CARD_WIDTH, CARD_HEIGHT, CARD_DEPTH]} radius={0.05} smoothness={4}>
        <meshPhysicalMaterial
          ref={matRef}
          color="#38BDF8"
          emissive="#0EA5E9"
          emissiveIntensity={0.2}
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.1}
          transmission={0.6}
          thickness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
      {/* Inner detail lines */}
      <mesh position={[0, 0.02, CARD_DEPTH / 2 + 0.002]}>
        <planeGeometry args={[CARD_WIDTH * 0.6, 0.025]} />
        <meshBasicMaterial color="#7DD3FC" transparent opacity={0.3} />
      </mesh>
      <mesh position={[-0.1, -0.05, CARD_DEPTH / 2 + 0.002]}>
        <planeGeometry args={[CARD_WIDTH * 0.35, 0.02]} />
        <meshBasicMaterial color="#7DD3FC" transparent opacity={0.15} />
      </mesh>
    </group>
  );
});
LeadCard.displayName = "LeadCard";

/* ── Glass column — luminescent blue edges ── */
const GlassColumn = forwardRef<THREE.Group, { x: number; label: string; color: string }>(
  ({ x, label, color }, _ref) => {
    const edgeRef = useRef<THREE.MeshStandardMaterial>(null);

    useFrame(({ clock }) => {
      if (!edgeRef.current) return;
      edgeRef.current.emissiveIntensity = 0.12 + Math.sin(clock.getElapsedTime() * 1.5 + x) * 0.06;
    });

    return (
      <group position={[x, 0, 0]}>
        {/* Column body — nearly invisible glass */}
        <RoundedBox args={[COLUMN_WIDTH, COLUMN_HEIGHT, 0.25]} radius={0.12} smoothness={4}>
          <meshPhysicalMaterial
            color="#E0F2FE"
            transparent
            opacity={0.04}
            roughness={0.05}
            metalness={0}
            transmission={0.95}
            thickness={0.4}
            clearcoat={1}
            clearcoatRoughness={0.05}
            side={THREE.DoubleSide}
          />
        </RoundedBox>

        {/* Luminescent edge border */}
        <RoundedBox args={[COLUMN_WIDTH + 0.03, COLUMN_HEIGHT + 0.03, 0.23]} radius={0.13} smoothness={4} position={[0, 0, -0.005]}>
          <meshStandardMaterial
            ref={edgeRef}
            color={color}
            emissive={color}
            emissiveIntensity={0.12}
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </RoundedBox>

        {/* Top edge glow line */}
        <mesh position={[0, COLUMN_HEIGHT / 2, 0.13]}>
          <boxGeometry args={[COLUMN_WIDTH - 0.1, 0.015, 0.015]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.4} />
        </mesh>

        {/* Bottom edge glow line */}
        <mesh position={[0, -COLUMN_HEIGHT / 2, 0.13]}>
          <boxGeometry args={[COLUMN_WIDTH - 0.1, 0.015, 0.015]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} transparent opacity={0.25} />
        </mesh>

        {/* Label — simple mesh text alternative */}
        <mesh position={[0, COLUMN_HEIGHT / 2 + 0.3, 0]}>
          <planeGeometry args={[COLUMN_WIDTH * 0.8, 0.18]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    );
  }
);
GlassColumn.displayName = "GlassColumn";

/* ── Subtle particle drift ── */
const Particles = forwardRef<THREE.Points>((_, _fRef) => {
  const count = 40;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = Math.random() * 7 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i) - 0.005;
      pos.setY(i, y < -2 ? 5.5 : y);
      pos.setX(i, pos.getX(i) + Math.sin(clock.getElapsedTime() * 0.5 + i) * 0.001);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#7DD3FC" size={0.02} transparent opacity={0.3} sizeAttenuation />
    </points>
  );
});
Particles.displayName = "Particles";

/* ── Main Scene ── */
function KanbanScene() {
  const [cycle, setCycle] = useState(0);

  const leads = useMemo(() => {
    const batch = [];
    for (let i = 0; i < 8; i++) {
      const col = i % COLUMNS.length;
      const slotInCol = Math.floor(i / COLUMNS.length);
      batch.push({
        id: `${cycle}-${i}`,
        startPos: [(Math.random() - 0.5) * 1.5, 4 + Math.random() * 1.5, -0.5] as [number, number, number],
        targetCol: col,
        delay: i * 0.35 + Math.random() * 0.2,
        cardIndex: slotInCol,
      });
    }
    return batch;
  }, [cycle]);

  const landedCount = useRef(0);

  const handleLanded = useCallback(() => {
    landedCount.current++;
    if (landedCount.current >= 8) {
      setTimeout(() => {
        landedCount.current = 0;
        setCycle((c) => c + 1);
      }, 6000);
    }
  }, []);

  return (
    <>
      {/* Soft ambient — matches light site background */}
      <ambientLight intensity={0.6} color="#E0F2FE" />
      <directionalLight position={[-3, 4, 5]} intensity={0.4} color="#BAE6FD" />
      {/* Subtle blue fill from below-left (matching site's global light direction) */}
      <pointLight position={[-3, -3, 4]} intensity={1.5} color="#0EA5E9" distance={12} decay={2} />
      <pointLight position={[0, 5, 2]} intensity={0.8} color="#38BDF8" distance={8} decay={2} />

      <Particles />

      {COLUMNS.map((col) => (
        <GlassColumn key={col.label} x={col.x} label={col.label} color={col.color} />
      ))}

      {leads.map((lead) => (
        <LeadCard
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
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
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
