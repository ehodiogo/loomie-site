import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useMemo, useState, useCallback, Suspense } from "react";
import * as THREE from "three";

const COLUMNS = [
  { label: "LEAD IN", x: -3.6, color: "#0EA5E9" },
  { label: "QUALIFY", x: -1.2, color: "#06B6D4" },
  { label: "CONTACT", x: 1.2, color: "#14B8A6" },
  { label: "PROPOSAL", x: 3.6, color: "#F59E0B" },
];

const COLUMN_WIDTH = 2.0;
const COLUMN_HEIGHT = 4.5;
const CARD_HEIGHT = 0.35;
const CARD_WIDTH = 1.5;
const CARD_DEPTH = 0.08;
const MAX_CARDS_PER_COL = 6;

/* ── Glowing lead card ── */
function LeadCard({
  startPos,
  targetCol,
  delay,
  onLanded,
  cardIndex,
}: {
  startPos: [number, number, number];
  targetCol: number;
  delay: number;
  onLanded: (col: number) => void;
  cardIndex: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const [phase, setPhase] = useState<"wait" | "fall" | "settle" | "move" | "done">("wait");
  const elapsed = useRef(0);
  const moveTarget = useRef<number | null>(null);
  const currentCol = useRef(targetCol);
  const stackY = useRef(0);

  const colX = COLUMNS[targetCol].x;
  const colColor = COLUMNS[targetCol].color;

  useFrame((_, delta) => {
    if (!ref.current) return;
    elapsed.current += delta;

    if (phase === "wait") {
      if (elapsed.current > delay) {
        setPhase("fall");
        elapsed.current = 0;
      }
      ref.current.position.set(startPos[0], startPos[1], startPos[2]);
      ref.current.visible = false;
      return;
    }

    ref.current.visible = true;

    if (phase === "fall") {
      const t = Math.min(elapsed.current / 0.8, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const baseY = -COLUMN_HEIGHT / 2 + CARD_HEIGHT / 2 + 0.15;
      const slotY = baseY + cardIndex * (CARD_HEIGHT + 0.12);
      stackY.current = slotY;

      ref.current.position.x = THREE.MathUtils.lerp(startPos[0], colX, ease);
      ref.current.position.y = THREE.MathUtils.lerp(startPos[1], slotY, ease);
      ref.current.position.z = THREE.MathUtils.lerp(startPos[2], 0.15, ease);

      if (matRef.current) {
        matRef.current.emissiveIntensity = THREE.MathUtils.lerp(2, 0.3, ease);
      }

      if (t >= 1) {
        setPhase("settle");
        elapsed.current = 0;
        onLanded(targetCol);
      }
    }

    if (phase === "settle") {
      // Bounce micro
      const bounce = Math.sin(elapsed.current * 12) * 0.03 * Math.max(0, 1 - elapsed.current * 3);
      ref.current.position.y = stackY.current + bounce;

      if (elapsed.current > 1.5 + Math.random() * 2) {
        // Move to next column
        const nextCol = Math.min(currentCol.current + 1, COLUMNS.length - 1);
        if (nextCol !== currentCol.current) {
          moveTarget.current = nextCol;
          setPhase("move");
          elapsed.current = 0;
        } else {
          setPhase("done");
        }
      }
    }

    if (phase === "move" && moveTarget.current !== null) {
      const t = Math.min(elapsed.current / 0.6, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const fromX = COLUMNS[currentCol.current].x;
      const toX = COLUMNS[moveTarget.current].x;

      ref.current.position.x = THREE.MathUtils.lerp(fromX, toX, ease);
      // Arc up during move
      ref.current.position.y = stackY.current + Math.sin(t * Math.PI) * 0.8;

      if (matRef.current) {
        matRef.current.emissiveIntensity = 0.3 + Math.sin(t * Math.PI) * 1.2;
      }

      if (t >= 1) {
        currentCol.current = moveTarget.current;
        moveTarget.current = null;
        setPhase("settle");
        elapsed.current = 0;
      }
    }
  });

  return (
    <mesh ref={ref} visible={false}>
      <RoundedBox args={[CARD_WIDTH, CARD_HEIGHT, CARD_DEPTH]} radius={0.06} smoothness={4}>
        <meshStandardMaterial
          ref={matRef}
          color={colColor}
          emissive={colColor}
          emissiveIntensity={2}
          transparent
          opacity={0.85}
          roughness={0.2}
          metalness={0.1}
        />
      </RoundedBox>
      {/* Small inner detail line */}
      <mesh position={[0, 0, CARD_DEPTH / 2 + 0.001]}>
        <planeGeometry args={[CARD_WIDTH * 0.7, 0.04]} />
        <meshBasicMaterial color="white" transparent opacity={0.4} />
      </mesh>
      <mesh position={[-0.15, -0.08, CARD_DEPTH / 2 + 0.001]}>
        <planeGeometry args={[CARD_WIDTH * 0.4, 0.03]} />
        <meshBasicMaterial color="white" transparent opacity={0.2} />
      </mesh>
    </mesh>
  );
}

/* ── Glass column ── */
function GlassColumn({ x, label, color }: { x: number; label: string; color: string }) {
  return (
    <group position={[x, 0, 0]}>
      {/* Column body — transparent glass */}
      <RoundedBox args={[COLUMN_WIDTH, COLUMN_HEIGHT, 0.3]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.06}
          roughness={0.1}
          metalness={0}
          transmission={0.9}
          thickness={0.5}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      {/* Column border glow */}
      <RoundedBox args={[COLUMN_WIDTH + 0.02, COLUMN_HEIGHT + 0.02, 0.28]} radius={0.16} smoothness={4} position={[0, 0, -0.01]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      {/* Label */}
      <Text
        position={[0, COLUMN_HEIGHT / 2 + 0.35, 0]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/dm-mono.woff"
        letterSpacing={0.08}
      >
        {label}
      </Text>
    </group>
  );
}

/* ── Glowing portal at top ── */
function Portal() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * 0.3;
  });

  return (
    <group position={[0, 4.5, 0]}>
      <mesh ref={ref}>
        <torusGeometry args={[1.8, 0.06, 16, 64]} />
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={1.5} transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 6]}>
        <torusGeometry args={[1.4, 0.04, 16, 64]} />
        <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={1.2} transparent opacity={0.4} />
      </mesh>
      {/* Central glow */}
      <pointLight color="#0EA5E9" intensity={8} distance={6} decay={2} />
      <pointLight color="#F59E0B" intensity={3} distance={4} decay={2} />
    </group>
  );
}

/* ── Light beams from portal to columns ── */
function LightBeams() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.08 + Math.sin(clock.getElapsedTime() * 2 + i) * 0.04;
    });
  });

  return (
    <group ref={ref}>
      {COLUMNS.map((col, i) => {
        const startY = 3.5;
        const endY = COLUMN_HEIGHT / 2;
        const midY = (startY + endY) / 2;
        const height = startY - endY;

        return (
          <mesh key={i} position={[col.x * 0.3, midY + 0.5, 0]}>
            <cylinderGeometry args={[0.01, 0.15, height, 8]} />
            <meshStandardMaterial
              color={col.color}
              emissive={col.color}
              emissiveIntensity={0.8}
              transparent
              opacity={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Particle field ── */
function Particles() {
  const count = 60;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = Math.random() * 8 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i) - 0.01;
      pos.setY(i, y < -2 ? 6 : y);
      pos.setX(i, pos.getX(i) + Math.sin(clock.getElapsedTime() + i) * 0.002);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#0EA5E9" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/* ── Main Scene ── */
function KanbanScene() {
  const [cycle, setCycle] = useState(0);

  // Generate a batch of leads each cycle
  const leads = useMemo(() => {
    const batch = [];
    const cardsPerBatch = 8;
    for (let i = 0; i < cardsPerBatch; i++) {
      const col = i % COLUMNS.length;
      const slotInCol = Math.floor(i / COLUMNS.length);
      batch.push({
        id: `${cycle}-${i}`,
        startPos: [(Math.random() - 0.5) * 2, 5 + Math.random() * 2, -1] as [number, number, number],
        targetCol: col,
        delay: i * 0.4 + Math.random() * 0.3,
        cardIndex: slotInCol,
      });
    }
    return batch;
  }, [cycle]);

  const landedCount = useRef(0);

  const handleLanded = useCallback(() => {
    landedCount.current++;
    // Reset cycle after all leads have moved through
    if (landedCount.current >= 8) {
      setTimeout(() => {
        landedCount.current = 0;
        setCycle((c) => c + 1);
      }, 5000);
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#e0f2fe" />
      <pointLight position={[0, -2, 3]} intensity={2} color="#0EA5E9" distance={10} decay={2} />

      <Portal />
      <LightBeams />
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
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(210 30% 8%) 0%, hsl(200 40% 12%) 100%)" }}>
      <Canvas
        camera={{ position: [0, 1, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <KanbanScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default KanbanBoard3D;
