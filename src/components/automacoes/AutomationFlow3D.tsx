import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

/* ── Layout: Central trigger + 3 action nodes ── */
const TRIGGER = { x: -3, y: 0, w: 1.8, h: 1.8, d: 0.25, label: "Gatilho" };
const ACTIONS = [
  { x: 3.5, y: 2.8, w: 1.4, h: 1.4, d: 0.25, label: "WhatsApp" },
  { x: 3.5, y: 0, w: 1.4, h: 1.4, d: 0.25, label: "CRM" },
  { x: 3.5, y: -2.8, w: 1.4, h: 1.4, d: 0.25, label: "Email" },
];
const ALL_NODES = [TRIGGER, ...ACTIONS];

const PACKET_COUNT = 24;
const PACKET_SIZE = 0.28;

const pathColor = new THREE.Color("#1A6CB5");
const packetColor = new THREE.Color("#0EA5E9");

/* ── Wireframe edges helper ── */
function GlowEdges({ w, h, d, color, intensity = 0.6, opacity = 0.5, radius = 0.01 }: {
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
            color={color}
            emissive={color}
            emissiveIntensity={intensity}
            transparent opacity={opacity}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Glass node (trigger or action) ── */
function GlassNode({ x, y, w, h, d, color }: {
  x: number; y: number; w: number; h: number; d: number; color: THREE.Color;
}) {
  return (
    <group position={[x, y, 0]}>
      <mesh>
        <boxGeometry args={[w, h, d]} />
        <meshPhysicalMaterial
          color="#0A4A8A"
          transparent opacity={0.05}
          roughness={0.05} metalness={0}
          transmission={0.95} thickness={0.3}
          clearcoat={1} clearcoatRoughness={0.02}
          ior={1.4} side={THREE.DoubleSide}
          envMapIntensity={1.5}
        />
      </mesh>
      <GlowEdges w={w} h={h} d={d} color={color} intensity={0.5} opacity={0.4} radius={0.012} />
    </group>
  );
}

/* ── Connection lines (trigger → actions) ── */
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    linesRef.current.children.forEach((child, i) => {
      const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 0.3 + Math.sin(clock.getElapsedTime() * 2 + i * 1.5) * 0.2;
      }
    });
  });

  return (
    <group ref={linesRef}>
      {ACTIONS.map((action, i) => {
        const dx = action.x - TRIGGER.x;
        const dy = action.y - TRIGGER.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const mx = (TRIGGER.x + action.x) / 2;
        const my = (TRIGGER.y + action.y) / 2;

        return (
          <mesh key={i} position={[mx, my, 0]} rotation={[0, 0, angle]}>
            <boxGeometry args={[len, 0.02, 0.02]} />
            <meshStandardMaterial
              color={packetColor}
              emissive={packetColor}
              emissiveIntensity={0.3}
              transparent opacity={0.25}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Data packet — spawns at trigger, flies to a random action, fades out ── */
function DataPacket({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const phaseRef = useRef<"wait" | "pop" | "travel" | "fade" | "reset">("wait");

  const config = useMemo(() => {
    const startDelay = (index / PACKET_COUNT) * 4 + Math.random() * 1.5;
    const target = ACTIONS[index % 3];
    const travelDuration = 0.5 + Math.random() * 0.4;
    const ox = (Math.random() - 0.5) * 0.3;
    const oy = (Math.random() - 0.5) * 0.3;
    return { startDelay, target, travelDuration, ox, oy };
  }, [index]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    elapsed.current += delta;
    const phase = phaseRef.current;

    if (phase === "wait") {
      ref.current.visible = false;
      ref.current.scale.set(0, 0, 0);
      ref.current.position.set(
        TRIGGER.x + (Math.random() - 0.5) * 0.4,
        TRIGGER.y + (Math.random() - 0.5) * 0.4,
        0.2
      );
      if (elapsed.current > config.startDelay) {
        phaseRef.current = "pop";
        elapsed.current = 0;
      }
      return;
    }

    ref.current.visible = true;

    if (phase === "pop") {
      const t = Math.min(elapsed.current / 0.15, 1);
      const s = t * (2 - t); // ease out
      ref.current.scale.set(s, s, s);
      if (t >= 1) {
        phaseRef.current = "travel";
        elapsed.current = 0;
      }
    }

    if (phase === "travel") {
      const t = Math.min(elapsed.current / config.travelDuration, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const sx = TRIGGER.x;
      const sy = TRIGGER.y;
      const tx = config.target.x + config.ox;
      const ty = config.target.y + config.oy;

      ref.current.position.x = THREE.MathUtils.lerp(sx, tx, ease);
      ref.current.position.y = THREE.MathUtils.lerp(sy, ty, ease);
      // Arc upward
      ref.current.position.z = 0.2 + Math.sin(t * Math.PI) * 0.5;
      // Spin
      ref.current.rotation.y += delta * 4;
      ref.current.rotation.x += delta * 2;

      if (t >= 1) {
        phaseRef.current = "fade";
        elapsed.current = 0;
      }
    }

    if (phase === "fade") {
      const t = Math.min(elapsed.current / 0.2, 1);
      const s = 1 - t;
      ref.current.scale.set(s, s, s);
      if (t >= 1) {
        phaseRef.current = "reset";
        elapsed.current = 0;
      }
    }

    if (phase === "reset") {
      ref.current.visible = false;
      // Restart with a short random delay
      if (elapsed.current > 0.3 + Math.random() * 1.5) {
        phaseRef.current = "wait";
        elapsed.current = 0;
        // Re-randomize target
        config.target = ACTIONS[Math.floor(Math.random() * 3)];
        config.ox = (Math.random() - 0.5) * 0.3;
        config.oy = (Math.random() - 0.5) * 0.3;
        config.travelDuration = 0.5 + Math.random() * 0.4;
        config.startDelay = 0.1 + Math.random() * 0.5;
      }
    }
  });

  return (
    <group ref={ref} visible={false}>
      <mesh>
        <boxGeometry args={[PACKET_SIZE, PACKET_SIZE, PACKET_SIZE]} />
        <meshPhysicalMaterial
          color="#0EA5E9"
          transparent opacity={0.1}
          roughness={0.05}
          transmission={0.9} thickness={0.4}
          clearcoat={1} ior={1.45}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Inner glow */}
      <mesh>
        <boxGeometry args={[PACKET_SIZE * 0.5, PACKET_SIZE * 0.5, PACKET_SIZE * 0.5]} />
        <meshStandardMaterial
          color="#0EA5E9"
          emissive="#0EA5E9"
          emissiveIntensity={8.0}
          transparent opacity={0.2}
          toneMapped={false}
        />
      </mesh>
      <GlowEdges
        w={PACKET_SIZE} h={PACKET_SIZE} d={PACKET_SIZE}
        color={packetColor} intensity={2.5} opacity={0.9} radius={0.006}
      />
    </group>
  );
}

/* ── Floating particles ── */
function Particles() {
  const count = 30;
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      pos.setY(i, pos.getY(i) + Math.sin(clock.getElapsedTime() * 0.3 + i) * 0.002);
      pos.setX(i, pos.getX(i) + Math.cos(clock.getElapsedTime() * 0.2 + i * 0.7) * 0.001);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#38BDF8" size={0.04} transparent opacity={0.2} sizeAttenuation />
    </points>
  );
}

/* ── Scene ── */
function AutomationScene() {
  return (
    <>
      <ambientLight intensity={0.5} color="#E0F2FE" />
      <directionalLight position={[-4, 6, 8]} intensity={0.6} color="#E0F2FE" />
      <pointLight position={[-4, 0, 5]} intensity={4} color="#0D6EFD" distance={16} decay={2} />
      <pointLight position={[4, 3, 5]} intensity={3} color="#0EA5E9" distance={14} decay={2} />
      <pointLight position={[4, -3, 5]} intensity={3} color="#06B6D4" distance={14} decay={2} />
      <pointLight position={[0, 0, -4]} intensity={1.5} color="#7DD3FC" distance={12} decay={2} />

      <Particles />
      <ConnectionLines />

      {ALL_NODES.map((node, i) => (
        <GlassNode
          key={i}
          x={node.x} y={node.y}
          w={node.w} h={node.h} d={node.d}
          color={i === 0 ? new THREE.Color("#0D6EFD") : pathColor}
        />
      ))}

      {Array.from({ length: PACKET_COUNT }).map((_, i) => (
        <DataPacket key={i} index={i} />
      ))}
    </>
  );
}

/* ── Exported Component ── */
const AutomationFlow3D = () => {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[650px] rounded-3xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 44 }}
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
          <AutomationScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AutomationFlow3D;
