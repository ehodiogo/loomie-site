import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useCallback, Suspense } from "react";
import * as THREE from "three";

/* ── Config ── */
const COL_X = [-4.8, -1.6, 1.6, 4.8];
const COL_SIZE = { w: 2.4, h: 4.8, d: 0.35 };
const CUBE = 0.52;
const N_LEADS = 12;
const CHAOS_X = -8.5;
const OUT_X = 8.5;

const neonCyan = new THREE.Color("#00CCFF");
const neonDim = new THREE.Color("#0077AA");
const leadBlue = new THREE.Color("#0D66FF");

/* ── Wireframe edges ── */
function GlowEdges({ w, h, d, color, intensity = 0.8, opacity = 0.6, r = 0.008 }: {
  w: number; h: number; d: number; color: THREE.Color;
  intensity?: number; opacity?: number; r?: number;
}) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const edges = useMemo(() => [
    { p: [0, hh, hd], ro: [0, 0, 0], l: w },
    { p: [0, hh, -hd], ro: [0, 0, 0], l: w },
    { p: [hw, hh, 0], ro: [0, Math.PI / 2, 0], l: d },
    { p: [-hw, hh, 0], ro: [0, Math.PI / 2, 0], l: d },
    { p: [0, -hh, hd], ro: [0, 0, 0], l: w },
    { p: [0, -hh, -hd], ro: [0, 0, 0], l: w },
    { p: [hw, -hh, 0], ro: [0, Math.PI / 2, 0], l: d },
    { p: [-hw, -hh, 0], ro: [0, Math.PI / 2, 0], l: d },
    { p: [hw, 0, hd], ro: [Math.PI / 2, 0, 0], l: h },
    { p: [-hw, 0, hd], ro: [Math.PI / 2, 0, 0], l: h },
    { p: [hw, 0, -hd], ro: [Math.PI / 2, 0, 0], l: h },
    { p: [-hw, 0, -hd], ro: [Math.PI / 2, 0, 0], l: h },
  ], [w, h, d, hw, hh, hd]);

  return (
    <group>
      {edges.map((e, i) => (
        <mesh key={i} position={e.p as [number, number, number]} rotation={e.ro as [number, number, number]}>
          <cylinderGeometry args={[r, r, e.l, 6]} />
          <meshStandardMaterial
            color={color} emissive={color} emissiveIntensity={intensity}
            transparent opacity={opacity} toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Connection tubes between columns + chaos→col0 + col3→output ── */
function Tubes() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.children.forEach((c, i) => {
      const m = (c as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (m) m.emissiveIntensity = 0.35 + Math.sin(clock.getElapsedTime() * 2.5 + i * 1.8) * 0.25;
    });
  });

  const segs: { fx: number; tx: number; y: number }[] = [];
  for (let i = 0; i < COL_X.length - 1; i++) {
    segs.push({ fx: COL_X[i], tx: COL_X[i + 1], y: COL_SIZE.h * 0.28 });
    segs.push({ fx: COL_X[i], tx: COL_X[i + 1], y: -COL_SIZE.h * 0.28 });
  }
  segs.push({ fx: CHAOS_X, tx: COL_X[0], y: 0 });
  segs.push({ fx: COL_X[3], tx: OUT_X, y: 0 });

  return (
    <group ref={ref}>
      {segs.map((s, i) => {
        const mx = (s.fx + s.tx) / 2;
        const len = Math.abs(s.tx - s.fx);
        return (
          <mesh key={i} position={[mx, s.y, 0]}>
            <boxGeometry args={[len, 0.022, 0.022]} />
            <meshStandardMaterial
              color={neonCyan} emissive={neonCyan} emissiveIntensity={0.35}
              transparent opacity={0.28} toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Kanban column ── */
function Column({ x, color }: { x: number; color: THREE.Color }) {
  return (
    <group position={[x, 0, 0]}>
      {/* Glass body */}
      <mesh>
        <boxGeometry args={[COL_SIZE.w, COL_SIZE.h, COL_SIZE.d]} />
        <meshPhysicalMaterial
          color="#E0F0FF" transparent opacity={0.04}
          roughness={0.01} metalness={0}
          transmission={0.96} thickness={0.4}
          clearcoat={1} clearcoatRoughness={0.01}
          ior={1.5} side={THREE.DoubleSide} envMapIntensity={2}
        />
      </mesh>
      {/* Neon wireframe */}
      <GlowEdges w={COL_SIZE.w} h={COL_SIZE.h} d={COL_SIZE.d} color={color} intensity={0.7} opacity={0.5} r={0.012} />
      {/* Shelf lines */}
      {[-1.0, 0, 1.0].map((yy, i) => (
        <mesh key={i} position={[0, yy, COL_SIZE.d / 2 + 0.005]}>
          <boxGeometry args={[COL_SIZE.w - 0.2, 0.003, 0.003]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Chaos icosphere (input) ── */
function ChaosInput() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.08) * 0.15;
  });

  return (
    <group position={[CHAOS_X, 0, 0]}>
      {/* Glass ico */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshPhysicalMaterial
          color="#C0E8FF" transparent opacity={0.05}
          roughness={0.01} transmission={0.95} thickness={0.3}
          wireframe side={THREE.DoubleSide}
        />
      </mesh>
      {/* Neon wireframe overlay */}
      <mesh rotation={meshRef.current?.rotation}>
        <icosahedronGeometry args={[1.82, 2]} />
        <meshStandardMaterial
          color={neonCyan} emissive={neonCyan} emissiveIntensity={1.2}
          transparent opacity={0.22} wireframe toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ── Structured output cylinder ── */
function OutputStructured() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.05;
  });

  return (
    <group position={[OUT_X, 0, 0]}>
      <mesh ref={ref} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.2, 1.2, 3.5, 24, 1, true]} />
        <meshPhysicalMaterial
          color="#C0E8FF" transparent opacity={0.05}
          roughness={0.01} transmission={0.95} thickness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Neon ring edges */}
      {[-1.75, 0, 1.75].map((yOff, i) => (
        <mesh key={i} position={[0, yOff, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.012, 8, 32]} />
          <meshStandardMaterial
            color={neonCyan} emissive={neonCyan} emissiveIntensity={1.0}
            transparent opacity={0.5} toneMapped={false}
          />
        </mesh>
      ))}
      {/* Vertical neon lines */}
      {[0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3].map((angle, i) => (
        <mesh key={`v${i}`} position={[Math.cos(angle) * 1.2, 0, Math.sin(angle) * 1.2]}>
          <cylinderGeometry args={[0.008, 0.008, 3.5, 4]} />
          <meshStandardMaterial
            color={neonDim} emissive={neonDim} emissiveIntensity={0.5}
            transparent opacity={0.3} toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Lead cube — traverses chaos → 4 columns → output ── */
function LeadCube({ index, cycle, onDone }: { index: number; cycle: number; onDone: () => void }) {
  const ref = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const phase = useRef(0); // 0=wait, 1..5=segments, 6=done
  const done = useRef(false);
  const spin = useRef((Math.random() - 0.5) * 3);

  const cfg = useMemo(() => {
    const delay = (index / N_LEADS) * 2.5 + Math.random() * 0.8;
    const wp = [
      { x: CHAOS_X + (Math.random() - 0.5) * 1.2, y: (Math.random() - 0.5) * 2 },
      { x: COL_X[0] + (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 1.5 },
      { x: COL_X[1] + (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 1.5 },
      { x: COL_X[2] + (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 1.5 },
      { x: COL_X[3] + (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 1.5 },
      { x: OUT_X + (Math.random() - 0.5) * 0.3, y: (Math.random() - 0.5) * 1.8 },
    ];
    const dur = wp.slice(1).map(() => 0.55 + Math.random() * 0.5);
    const wait = wp.slice(1).map(() => 0.3 + Math.random() * 1.0);
    return { delay, wp, dur, wait };
  }, [index, cycle]);

  useMemo(() => { phase.current = 0; elapsed.current = 0; done.current = false; }, [cycle]);

  useFrame((_, dt) => {
    if (!ref.current) return;
    elapsed.current += dt;
    const p = phase.current;

    if (p === 0) {
      ref.current.visible = false;
      ref.current.position.set(cfg.wp[0].x, cfg.wp[0].y, 0.15);
      if (elapsed.current > cfg.delay) { phase.current = 1; elapsed.current = 0; }
      return;
    }

    ref.current.visible = true;
    const seg = p - 1;

    if (seg < cfg.dur.length) {
      if (elapsed.current < cfg.wait[seg]) {
        // Idle with subtle bob
        ref.current.position.x = cfg.wp[seg].x;
        ref.current.position.y = cfg.wp[seg].y + Math.sin(elapsed.current * 3 + index) * 0.025;
        ref.current.rotation.x *= 0.97; ref.current.rotation.y *= 0.97;
        return;
      }

      const mt = elapsed.current - cfg.wait[seg];
      const t = Math.min(mt / cfg.dur[seg], 1);
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const from = cfg.wp[seg], to = cfg.wp[seg + 1];
      ref.current.position.x = THREE.MathUtils.lerp(from.x, to.x, e);
      ref.current.position.y = THREE.MathUtils.lerp(from.y, to.y, e);
      ref.current.position.z = 0.15 + Math.sin(t * Math.PI) * 0.55;
      ref.current.rotation.y += spin.current * dt * (1 - e * 0.6);
      ref.current.rotation.x += spin.current * 0.3 * dt * (1 - e * 0.6);

      if (t >= 1) { phase.current = p + 1; elapsed.current = 0; ref.current.rotation.set(0, 0, 0); }
    } else {
      if (!done.current) { done.current = true; onDone(); }
      ref.current.position.y = cfg.wp[cfg.wp.length - 1].y + Math.sin(elapsed.current * 0.7 + index) * 0.02;
    }
  });

  return (
    <group ref={ref} visible={false}>
      {/* Glass body */}
      <mesh>
        <boxGeometry args={[CUBE, CUBE, CUBE]} />
        <meshPhysicalMaterial
          color="#B0E0FF" transparent opacity={0.08}
          roughness={0.1} transmission={0.9} thickness={0.5}
          clearcoat={1} clearcoatRoughness={0.02} ior={1.45}
          side={THREE.DoubleSide} envMapIntensity={2}
        />
      </mesh>
      {/* Luminescent inner core */}
      <mesh>
        <boxGeometry args={[CUBE * 0.45, CUBE * 0.45, CUBE * 0.45]} />
        <meshStandardMaterial
          color="#0066FF" emissive="#0066FF" emissiveIntensity={5}
          transparent opacity={0.2} toneMapped={false}
        />
      </mesh>
      {/* Neon wireframe */}
      <GlowEdges w={CUBE} h={CUBE} d={CUBE} color={leadBlue} intensity={2} opacity={0.85} r={0.007} />
    </group>
  );
}

/* ── Particles ── */
function Particles() {
  const count = 45;
  const pRef = useRef<THREE.Points>(null);
  const pos = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 22;
      a[i * 3 + 1] = (Math.random() - 0.5) * 10;
      a[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return a;
  }, []);

  useFrame(({ clock }) => {
    if (!pRef.current) return;
    const p = pRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = p.getY(i) - 0.003;
      p.setY(i, y < -5 ? 5 : y);
      p.setX(i, p.getX(i) + Math.sin(clock.getElapsedTime() * 0.2 + i * 0.6) * 0.001);
    }
    p.needsUpdate = true;
  });

  return (
    <points ref={pRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#38BDF8" size={0.04} transparent opacity={0.18} sizeAttenuation />
    </points>
  );
}

/* ── Ground ── */
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -COL_SIZE.h / 2 - 0.05, 0]}>
      <planeGeometry args={[28, 12]} />
      <meshStandardMaterial color="#060E1A" roughness={0.1} metalness={0.7} transparent opacity={0.22} />
    </mesh>
  );
}

/* ── Scene ── */
function Scene() {
  const [cycle, setCycle] = useState(0);
  const doneN = useRef(0);

  const onDone = useCallback(() => {
    doneN.current++;
    if (doneN.current >= N_LEADS) {
      setTimeout(() => { doneN.current = 0; setCycle(c => c + 1); }, 4500);
    }
  }, []);

  return (
    <>
      {/* Lighting — soft area + blue sun accent */}
      <ambientLight intensity={0.45} color="#E0F2FE" />
      <directionalLight position={[-5, 8, 10]} intensity={0.55} color="#F0F9FF" />
      <directionalLight position={[0, 10, 0]} intensity={0.25} color="#0077FF" />
      {/* Neon accent point lights */}
      <pointLight position={[-8, 0, 6]} intensity={4} color="#0088FF" distance={18} decay={2} />
      <pointLight position={[0, -3, 6]} intensity={3} color="#00CCFF" distance={16} decay={2} />
      <pointLight position={[8, 0, 6]} intensity={3} color="#0EA5E9" distance={16} decay={2} />
      <pointLight position={[0, 5, 4]} intensity={1.8} color="#38BDF8" distance={14} decay={2} />

      <Particles />
      <Ground />
      <Tubes />
      <ChaosInput />
      <OutputStructured />

      {COL_X.map((x, i) => (
        <Column key={i} x={x} color={i === 0 ? neonCyan : neonDim} />
      ))}

      {Array.from({ length: N_LEADS }).map((_, i) => (
        <LeadCube key={`${cycle}-${i}`} index={i} cycle={cycle} onDone={onDone} />
      ))}
    </>
  );
}

/* ── Export ── */
const KanbanBoard3D = () => (
  <div className="w-full h-full min-h-[500px] lg:min-h-[650px] rounded-3xl overflow-hidden">
    <Canvas
      camera={{ position: [0, 1.5, 12], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.4 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default KanbanBoard3D;
