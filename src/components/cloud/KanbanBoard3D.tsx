import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import { useRef, useMemo, useState, useCallback, Suspense } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════════════
   CONFIG — tweak these to adjust the scene
   ═══════════════════════════════════════════════ */
const NEON_COLOR = "#00d4ff";
const NEON_DIM = "#0088bb";
const LEAD_COLOR = "#0d6efd";
const GLASS_TINT = "#c8e8ff";

const COL_POSITIONS = [-3.6, -1.2, 1.2, 3.6];
const COL_W = 1.6;
const COL_H = 4.0;
const COL_D = 0.6;

const N_LEADS = 8;
const LEAD_CUBE = 0.42;
const CARD_SCALE: [number, number, number] = [1.4, 0.18, 0.55]; // x,y,z when "card"

const SPEED_MULT = 1.0; // global speed multiplier

/* ═══════════════════════════════════════════════
   MATERIALS (reusable instances)
   ═══════════════════════════════════════════════ */
const glassProps = {
  color: GLASS_TINT,
  transparent: true,
  opacity: 0.08,
  roughness: 0.1,
  metalness: 0,
  transmission: 0.9,
  thickness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0.05,
  ior: 1.45,
  envMapIntensity: 1.5,
  side: THREE.DoubleSide as THREE.Side,
} as const;

const leadGlassProps = {
  color: LEAD_COLOR,
  transparent: true,
  opacity: 0.15,
  roughness: 0.1,
  metalness: 0,
  transmission: 0.85,
  thickness: 0.4,
  clearcoat: 1,
  clearcoatRoughness: 0.08,
  ior: 1.4,
  emissive: LEAD_COLOR,
  emissiveIntensity: 0.3,
  envMapIntensity: 1.2,
  side: THREE.DoubleSide as THREE.Side,
} as const;

/* ═══════════════════════════════════════════════
   COLUMN — glass box + neon edges
   ═══════════════════════════════════════════════ */
function Column({ x }: { x: number }) {
  return (
    <group position={[x, 0, 0]}>
      <mesh>
        <boxGeometry args={[COL_W, COL_H, COL_D]} />
        <meshPhysicalMaterial {...glassProps} />
        <Edges
          threshold={15}
          scale={1}
          renderOrder={1}
        >
          <meshBasicMaterial color={NEON_COLOR} toneMapped={false} transparent opacity={0.7} />
        </Edges>
      </mesh>
      {/* Shelf dividers */}
      {[-0.8, 0, 0.8].map((y, i) => (
        <mesh key={i} position={[0, y, COL_D / 2 + 0.003]}>
          <planeGeometry args={[COL_W * 0.85, 0.004]} />
          <meshBasicMaterial color={NEON_DIM} toneMapped={false} transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

/* ═══════════════════════════════════════════════
   CURVED TUBES — connecting column bases
   ═══════════════════════════════════════════════ */
function ConnectionTube({ from, to }: { from: number; to: number }) {
  const curve = useMemo(() => {
    const mid = (from + to) / 2;
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(from, -COL_H / 2 + 0.1, 0),
      new THREE.Vector3(mid, -COL_H / 2 - 0.6, 0.15),
      new THREE.Vector3(to, -COL_H / 2 + 0.1, 0),
    ]);
  }, [from, to]);

  const tubeGeo = useMemo(() => new THREE.TubeGeometry(curve, 24, 0.04, 8, false), [curve]);

  return (
    <group>
      {/* Glass tube */}
      <mesh geometry={tubeGeo}>
        <meshPhysicalMaterial {...glassProps} opacity={0.06} />
      </mesh>
      {/* Neon core */}
      <mesh geometry={new THREE.TubeGeometry(curve, 24, 0.012, 6, false)}>
        <meshBasicMaterial color={NEON_DIM} toneMapped={false} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════
   LEAD CUBE — morphs cube ↔ card as it travels
   ═══════════════════════════════════════════════ */
function LeadCube({ index, cycle, onDone }: { index: number; cycle: number; onDone: () => void }) {
  const ref = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const elapsed = useRef(0);
  const phase = useRef(0); // 0=wait, 1..4=column segments, 5=exit, 6=done
  const done = useRef(false);
  const spin = useRef((Math.random() - 0.5) * 2.5);

  // Waypoints: start off-screen left, then each column, then off-screen right
  const cfg = useMemo(() => {
    const delay = (index / N_LEADS) * 3.5 + Math.random() * 1.5;
    const startX = COL_POSITIONS[0] - 3;
    const endX = COL_POSITIONS[3] + 3;
    const wp = [
      { x: startX, y: (Math.random() - 0.5) * 1.5 },
      ...COL_POSITIONS.map(cx => ({ x: cx, y: (Math.random() - 0.5) * 1.2 })),
      { x: endX, y: (Math.random() - 0.5) * 1.0 },
    ];
    // flight duration per segment
    const dur = wp.slice(1).map(() => (0.5 + Math.random() * 0.4) / SPEED_MULT);
    // idle time at each column
    const wait = wp.slice(1).map((_, i) => i === 0 || i === wp.length - 2 ? 0.1 : (0.6 + Math.random() * 1.2) / SPEED_MULT);
    return { delay, wp, dur, wait };
  }, [index, cycle]);

  // Reset on cycle change
  useMemo(() => { phase.current = 0; elapsed.current = 0; done.current = false; }, [cycle]);

  useFrame((_, dt) => {
    if (!ref.current || !meshRef.current) return;
    elapsed.current += dt;
    const p = phase.current;

    // Phase 0: waiting to spawn
    if (p === 0) {
      ref.current.visible = false;
      ref.current.position.set(cfg.wp[0].x, cfg.wp[0].y, 0);
      if (elapsed.current > cfg.delay) { phase.current = 1; elapsed.current = 0; }
      return;
    }

    ref.current.visible = true;
    const seg = p - 1;

    if (seg < cfg.dur.length) {
      const waitT = cfg.wait[seg];
      const isIdle = elapsed.current < waitT;

      if (isIdle) {
        // Idle at column — morph to CARD shape
        const morphT = Math.min(elapsed.current / Math.max(waitT * 0.3, 0.15), 1);
        const e = morphT * morphT * (3 - 2 * morphT); // smoothstep
        meshRef.current.scale.set(
          THREE.MathUtils.lerp(1, CARD_SCALE[0], e),
          THREE.MathUtils.lerp(1, CARD_SCALE[1], e),
          THREE.MathUtils.lerp(1, CARD_SCALE[2], e),
        );
        ref.current.position.x = cfg.wp[seg].x;
        ref.current.position.y = cfg.wp[seg].y + Math.sin(elapsed.current * 2.5 + index) * 0.015;
        ref.current.position.z = 0;
        ref.current.rotation.x *= 0.92;
        ref.current.rotation.y *= 0.92;
        ref.current.rotation.z *= 0.92;
        return;
      }

      // Flying — morph back to CUBE shape
      const mt = elapsed.current - waitT;
      const t = Math.min(mt / cfg.dur[seg], 1);
      const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      // Morph back to cube in first 30% of flight
      const cubeMorph = Math.min(mt / (cfg.dur[seg] * 0.3), 1);
      const cm = cubeMorph * cubeMorph * (3 - 2 * cubeMorph);
      meshRef.current.scale.set(
        THREE.MathUtils.lerp(CARD_SCALE[0], 1, cm),
        THREE.MathUtils.lerp(CARD_SCALE[1], 1, cm),
        THREE.MathUtils.lerp(CARD_SCALE[2], 1, cm),
      );

      const from = cfg.wp[seg];
      const to = cfg.wp[seg + 1];
      ref.current.position.x = THREE.MathUtils.lerp(from.x, to.x, easeT);
      ref.current.position.y = THREE.MathUtils.lerp(from.y, to.y, easeT);
      // Arc in the air (Z axis = up)
      ref.current.position.z = Math.sin(easeT * Math.PI) * 1.4;

      // Tumble while flying
      ref.current.rotation.y += spin.current * dt * (1 - easeT * 0.5);
      ref.current.rotation.x += spin.current * 0.4 * dt;

      if (t >= 1) {
        phase.current = p + 1;
        elapsed.current = 0;
        ref.current.rotation.set(0, 0, 0);
      }
    } else {
      // Done
      if (!done.current) { done.current = true; onDone(); }
      ref.current.visible = false;
    }
  });

  return (
    <group ref={ref} visible={false}>
      <mesh ref={meshRef}>
        <boxGeometry args={[LEAD_CUBE, LEAD_CUBE, LEAD_CUBE]} />
        <meshPhysicalMaterial {...leadGlassProps} />
        <Edges threshold={15}>
          <meshBasicMaterial color={LEAD_COLOR} toneMapped={false} transparent opacity={0.9} />
        </Edges>
      </mesh>
      {/* Inner luminescent core */}
      <mesh scale={0.35}>
        <boxGeometry args={[LEAD_CUBE, LEAD_CUBE, LEAD_CUBE]} />
        <meshBasicMaterial color={LEAD_COLOR} toneMapped={false} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════
   PARTICLES — ambient dust
   ═══════════════════════════════════════════════ */
function Particles() {
  const count = 35;
  const ref = useRef<THREE.Points>(null);
  const pos = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 14;
      a[i * 3 + 1] = (Math.random() - 0.5) * 8;
      a[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return a;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const p = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = p.getY(i) - 0.002;
      p.setY(i, y < -4 ? 4 : y);
      p.setX(i, p.getX(i) + Math.sin(clock.getElapsedTime() * 0.15 + i * 0.7) * 0.0008);
    }
    p.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
      </bufferGeometry>
      <pointsMaterial color={NEON_DIM} size={0.035} transparent opacity={0.2} sizeAttenuation />
    </points>
  );
}

/* ═══════════════════════════════════════════════
   GROUND PLANE — subtle reflective surface
   ═══════════════════════════════════════════════ */
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -COL_H / 2 - 0.08, 0]}>
      <planeGeometry args={[20, 10]} />
      <meshStandardMaterial color="#0a1628" roughness={0.15} metalness={0.6} transparent opacity={0.25} />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════
   POSTPROCESSING — Bloom + DepthOfField
   ═══════════════════════════════════════════════ */
function Effects() {
  const { camera } = useThree();
  return (
    <EffectComposer multisampling={0}>
      <DepthOfField
        focusDistance={0}
        focalLength={0.055}
        bokehScale={4}
        target={[0, 0, 0]}
      />
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        intensity={0.6}
        mipmapBlur
      />
    </EffectComposer>
  );
}

/* ═══════════════════════════════════════════════
   SCENE — orchestrates everything
   ═══════════════════════════════════════════════ */
function Scene() {
  const [cycle, setCycle] = useState(0);
  const doneN = useRef(0);

  const onDone = useCallback(() => {
    doneN.current++;
    if (doneN.current >= N_LEADS) {
      setTimeout(() => { doneN.current = 0; setCycle(c => c + 1); }, 3000);
    }
  }, []);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} color="#dde8f8" />
      <directionalLight position={[-4, 8, 6]} intensity={0.6} color="#e8f0ff" />
      <directionalLight position={[2, 6, -3]} intensity={0.25} color="#003399" />
      <pointLight position={[0, -2, 5]} intensity={3} color={NEON_COLOR} distance={14} decay={2} />
      <pointLight position={[-5, 1, 4]} intensity={2} color="#0066cc" distance={12} decay={2} />
      <pointLight position={[5, 1, 4]} intensity={2} color="#0099ff" distance={12} decay={2} />

      <Environment preset="city" environmentIntensity={0.3} />

      <Particles />
      <Ground />

      {/* Connection tubes between columns */}
      {COL_POSITIONS.slice(0, -1).map((x, i) => (
        <ConnectionTube key={i} from={x} to={COL_POSITIONS[i + 1]} />
      ))}

      {/* Kanban columns */}
      {COL_POSITIONS.map((x, i) => (
        <Column key={i} x={x} />
      ))}

      {/* Lead cubes */}
      {Array.from({ length: N_LEADS }).map((_, i) => (
        <LeadCube key={`${cycle}-${i}`} index={i} cycle={cycle} onDone={onDone} />
      ))}

      <Effects />
    </>
  );
}

/* ═══════════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════════ */
const KanbanBoard3D = () => (
  <div className="w-full h-full min-h-[500px] lg:min-h-[650px] rounded-3xl overflow-hidden">
    <Canvas
      camera={{ position: [0, 3, 10], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.3,
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default KanbanBoard3D;
