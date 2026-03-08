import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useCallback, Suspense } from "react";
import * as THREE from "three";

/* ── Config ── */
const COL_POSITIONS = [-4.8, -1.6, 1.6, 4.8];
const COL_LABELS = ["NOVOS LEADS", "CONTATO", "NEGOCIAÇÃO", "FECHADO"];
const COL_SIZE = { w: 2.4, h: 4.8, d: 0.35 };
const CUBE_SIZE = 0.5;
const NUM_LEADS = 20;
const CHAOS_X = -8.5;
const OUTPUT_X = 8.5;

const neonBlue = new THREE.Color("#00CCFF");
const neonDim = new THREE.Color("#0077AA");
const glassBodyColor = "#B0E0FF";

/* ── Wireframe edges ── */
function GlowEdges({ w, h, d, color, intensity = 0.8, opacity = 0.6, radius = 0.008 }: {
  w: number; h: number; d: number; color: THREE.Color;
  intensity?: number; opacity?: number; radius?: number;
}) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const edges = useMemo(() => [
    { pos: [0, hh, hd], rot: [0, 0, 0], len: w },
    { pos: [0, hh, -hd], rot: [0, 0, 0], len: w },
    { pos: [hw, hh, 0], rot: [0, Math.PI / 2, 0], len: d },
    { pos: [-hw, hh, 0], rot: [0, Math.PI / 2, 0], len: d },
    { pos: [0, -hh, hd], rot: [0, 0, 0], len: w },
    { pos: [0, -hh, -hd], rot: [0, 0, 0], len: w },
    { pos: [hw, -hh, 0], rot: [0, Math.PI / 2, 0], len: d },
    { pos: [-hw, -hh, 0], rot: [0, Math.PI / 2, 0], len: d },
    { pos: [hw, 0, hd], rot: [Math.PI / 2, 0, 0], len: h },
    { pos: [-hw, 0, hd], rot: [Math.PI / 2, 0, 0], len: h },
    { pos: [hw, 0, -hd], rot: [Math.PI / 2, 0, 0], len: h },
    { pos: [-hw, 0, -hd], rot: [Math.PI / 2, 0, 0], len: h },
  ], [w, h, d, hw, hh, hd]);

  return (
    <group>
      {edges.map((e, i) => (
        <mesh key={i} position={e.pos as [number, number, number]} rotation={e.rot as [number, number, number]}>
          <cylinderGeometry args={[radius, radius, e.len, 6]} />
          <meshStandardMaterial
            color={color} emissive={color} emissiveIntensity={intensity}
            transparent opacity={opacity} toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Connection tubes between columns ── */
function ConnectionTubes() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, i) => {
      const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (mat) mat.emissiveIntensity = 0.4 + Math.sin(clock.getElapsedTime() * 2.5 + i * 2) * 0.3;
    });
  });

  const tubes: { from: number; to: number; y: number }[] = [];
  for (let i = 0; i < COL_POSITIONS.length - 1; i++) {
    tubes.push({ from: COL_POSITIONS[i], to: COL_POSITIONS[i + 1], y: COL_SIZE.h * 0.3 });
    tubes.push({ from: COL_POSITIONS[i], to: COL_POSITIONS[i + 1], y: -COL_SIZE.h * 0.3 });
  }
  // Chaos → first col
  tubes.push({ from: CHAOS_X, to: COL_POSITIONS[0], y: 0 });
  // Last col → output
  tubes.push({ from: COL_POSITIONS[3], to: OUTPUT_X, y: 0 });

  return (
    <group ref={ref}>
      {tubes.map((t, i) => {
        const mx = (t.from + t.to) / 2;
        const len = Math.abs(t.to - t.from);
        return (
          <mesh key={i} position={[mx, t.y, 0]}>
            <boxGeometry args={[len, 0.025, 0.025]} />
            <meshStandardMaterial
              color={neonBlue} emissive={neonBlue} emissiveIntensity={0.4}
              transparent opacity={0.3} toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Kanban column ── */
function KanbanColumn({ x, color }: { x: number; color: THREE.Color }) {
  return (
    <group position={[x, 0, 0]}>
      <mesh>
        <boxGeometry args={[COL_SIZE.w, COL_SIZE.h, COL_SIZE.d]} />
        <meshPhysicalMaterial
          color={glassBodyColor} transparent opacity={0.04}
          roughness={0.01} metalness={0} transmission={0.96}
          thickness={0.4} clearcoat={1} clearcoatRoughness={0.01}
          ior={1.5} side={THREE.DoubleSide} envMapIntensity={2}
        />
      </mesh>
      <GlowEdges w={COL_SIZE.w} h={COL_SIZE.h} d={COL_SIZE.d} color={color} intensity={0.7} opacity={0.5} radius={0.012} />
      {/* Shelf lines */}
      {[-0.8, 0.2, 1.2].map((yy, i) => (
        <mesh key={i} position={[0, yy, COL_SIZE.d / 2 + 0.005]}>
          <boxGeometry args={[COL_SIZE.w - 0.2, 0.003, 0.003]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Chaos sphere (input) ── */
function ChaosSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
  });

  return (
    <group position={[CHAOS_X, 0, 0]}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshPhysicalMaterial
          color="#B0E0FF" transparent opacity={0.06}
          roughness={0.01} transmission={0.95} thickness={0.3}
          wireframe side={THREE.DoubleSide}
        />
      </mesh>
      {/* Neon wireframe overlay */}
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.82, 1]} />
        <meshStandardMaterial
          color={neonBlue} emissive={neonBlue} emissiveIntensity={1.5}
          transparent opacity={0.25} wireframe toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ── Structured output stack ── */
function OutputStack() {
  return (
    <group position={[OUTPUT_X, 0, 0]}>
      {Array.from({ length: 8 }).map((_, i) => {
        const y = (i - 3.5) * (CUBE_SIZE + 0.12);
        return (
          <group key={i} position={[0, y, 0]}>
            <mesh>
              <boxGeometry args={[CUBE_SIZE * 1.3, CUBE_SIZE, CUBE_SIZE]} />
              <meshPhysicalMaterial
                color={glassBodyColor} transparent opacity={0.06}
                roughness={0.01} transmission={0.95} thickness={0.4}
                clearcoat={1} ior={1.45} side={THREE.DoubleSide}
              />
            </mesh>
            <GlowEdges
              w={CUBE_SIZE * 1.3} h={CUBE_SIZE} d={CUBE_SIZE}
              color={neonDim} intensity={0.6} opacity={0.4} radius={0.006}
            />
          </group>
        );
      })}
    </group>
  );
}

/* ── Lead cube — full pipeline traversal ── */
function LeadCube({ index, cycle, onDone }: { index: number; cycle: number; onDone: () => void }) {
  const ref = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const phaseRef = useRef(0); // 0=wait, 1..6=path segments, 7=done
  const hasDone = useRef(false);
  const rotSpeed = useRef((Math.random() - 0.5) * 4);

  const config = useMemo(() => {
    const delay = (index / NUM_LEADS) * 3 + Math.random() * 1;
    // Path: chaos → col0 → col1 → col2 → col3 → output
    const waypoints = [
      { x: CHAOS_X + (Math.random() - 0.5) * 1.5, y: (Math.random() - 0.5) * 2.5 },
      { x: COL_POSITIONS[0] + (Math.random() - 0.5) * 0.6, y: (Math.random() - 0.5) * 1.5 },
      { x: COL_POSITIONS[1] + (Math.random() - 0.5) * 0.6, y: (Math.random() - 0.5) * 1.5 },
      { x: COL_POSITIONS[2] + (Math.random() - 0.5) * 0.6, y: (Math.random() - 0.5) * 1.5 },
      { x: COL_POSITIONS[3] + (Math.random() - 0.5) * 0.6, y: (Math.random() - 0.5) * 1.5 },
      { x: OUTPUT_X + (Math.random() - 0.5) * 0.3, y: (Math.random() - 0.5) * 2.5 },
    ];
    const durations = waypoints.slice(1).map(() => 0.6 + Math.random() * 0.5);
    const waits = waypoints.slice(1).map(() => 0.4 + Math.random() * 0.8);
    return { delay, waypoints, durations, waits };
  }, [index, cycle]);

  useMemo(() => {
    phaseRef.current = 0;
    elapsed.current = 0;
    hasDone.current = false;
  }, [cycle]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    elapsed.current += delta;
    const p = phaseRef.current;

    // Phase 0: wait
    if (p === 0) {
      ref.current.visible = false;
      ref.current.position.set(config.waypoints[0].x, config.waypoints[0].y, 0.15);
      if (elapsed.current > config.delay) {
        phaseRef.current = 1;
        elapsed.current = 0;
      }
      return;
    }

    ref.current.visible = true;

    // Phases 1-5: move between waypoints
    const segIndex = p - 1; // 0..4
    if (segIndex < config.durations.length) {
      const isWaiting = elapsed.current < config.waits[segIndex];
      if (isWaiting) {
        // Idle at current waypoint
        const wp = config.waypoints[segIndex];
        ref.current.position.x = wp.x;
        ref.current.position.y = wp.y + Math.sin(elapsed.current * 3 + index) * 0.03;
        ref.current.rotation.x *= 0.98;
        ref.current.rotation.y *= 0.98;
        return;
      }

      const moveTime = elapsed.current - config.waits[segIndex];
      const dur = config.durations[segIndex];
      const t = Math.min(moveTime / dur, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const from = config.waypoints[segIndex];
      const to = config.waypoints[segIndex + 1];

      ref.current.position.x = THREE.MathUtils.lerp(from.x, to.x, ease);
      ref.current.position.y = THREE.MathUtils.lerp(from.y, to.y, ease);
      ref.current.position.z = 0.15 + Math.sin(t * Math.PI) * 0.6;

      ref.current.rotation.y += rotSpeed.current * delta * (1 - ease * 0.5);
      ref.current.rotation.x += rotSpeed.current * 0.3 * delta * (1 - ease * 0.5);

      if (t >= 1) {
        phaseRef.current = p + 1;
        elapsed.current = 0;
        ref.current.rotation.set(0, 0, 0);
      }
    } else {
      // Done
      if (!hasDone.current) {
        hasDone.current = true;
        onDone();
      }
      // Gentle idle
      const wp = config.waypoints[config.waypoints.length - 1];
      ref.current.position.x = wp.x;
      ref.current.position.y = wp.y + Math.sin(elapsed.current * 0.8 + index) * 0.02;
    }
  });

  return (
    <group ref={ref} visible={false}>
      <mesh>
        <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
        <meshPhysicalMaterial
          color="#B0E0FF" transparent opacity={0.08}
          roughness={0.01} transmission={0.95} thickness={0.5}
          clearcoat={1} clearcoatRoughness={0.02} ior={1.5}
          side={THREE.DoubleSide} envMapIntensity={2}
        />
      </mesh>
      {/* Inner emission core */}
      <mesh>
        <boxGeometry args={[CUBE_SIZE * 0.5, CUBE_SIZE * 0.5, CUBE_SIZE * 0.5]} />
        <meshStandardMaterial
          color="#00CCFF" emissive="#00CCFF" emissiveIntensity={6}
          transparent opacity={0.18} toneMapped={false}
        />
      </mesh>
      <GlowEdges
        w={CUBE_SIZE} h={CUBE_SIZE} d={CUBE_SIZE}
        color={neonBlue} intensity={2} opacity={0.85} radius={0.007}
      />
    </group>
  );
}

/* ── Particles ── */
function Particles() {
  const count = 50;
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i) - 0.003;
      pos.setY(i, y < -5 ? 5 : y);
      pos.setX(i, pos.getX(i) + Math.sin(clock.getElapsedTime() * 0.2 + i * 0.6) * 0.001);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#38BDF8" size={0.04} transparent opacity={0.18} sizeAttenuation />
    </points>
  );
}

/* ── Ground plane ── */
function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -COL_SIZE.h / 2 - 0.05, 0]}>
      <planeGeometry args={[28, 12]} />
      <meshStandardMaterial
        color="#040E1A" roughness={0.1} metalness={0.7}
        transparent opacity={0.25}
      />
    </mesh>
  );
}

/* ── Scene ── */
function KanbanScene() {
  const [cycle, setCycle] = useState(0);
  const doneCount = useRef(0);

  const handleDone = useCallback(() => {
    doneCount.current++;
    if (doneCount.current >= NUM_LEADS) {
      setTimeout(() => {
        doneCount.current = 0;
        setCycle(c => c + 1);
      }, 4000);
    }
  }, []);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} color="#E0F2FE" />
      <directionalLight position={[-5, 8, 10]} intensity={0.6} color="#F0F9FF" />
      <directionalLight position={[8, 4, -5]} intensity={0.3} color="#BAE6FD" />
      {/* Neon accent lights */}
      <pointLight position={[-8, 0, 6]} intensity={4} color="#0088FF" distance={18} decay={2} />
      <pointLight position={[0, -3, 6]} intensity={3} color="#00CCFF" distance={16} decay={2} />
      <pointLight position={[8, 0, 6]} intensity={3} color="#0EA5E9" distance={16} decay={2} />
      <pointLight position={[0, 5, 4]} intensity={2} color="#38BDF8" distance={14} decay={2} />
      {/* Sun-like blue tint */}
      <directionalLight position={[0, 10, 0]} intensity={0.3} color="#0077FF" />

      <Particles />
      <GroundPlane />
      <ConnectionTubes />
      <ChaosSphere />
      <OutputStack />

      {COL_POSITIONS.map((x, i) => (
        <KanbanColumn key={i} x={x} color={i === 0 ? neonBlue : neonDim} />
      ))}

      {Array.from({ length: NUM_LEADS }).map((_, i) => (
        <LeadCube key={`${cycle}-${i}`} index={i} cycle={cycle} onDone={handleDone} />
      ))}
    </>
  );
}

/* ── Export ── */
const KanbanBoard3D = () => {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[650px] rounded-3xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 1.5, 12], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
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
