import { motion } from "framer-motion";
import { Database, Users, Zap, BarChart3 } from "lucide-react";
import { slideFromLeft, staggerContainer, fadeUpItem, scaleItem, viewport, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";

const metrics = [
  { label: "Leads Unificados", value: "12.4K", icon: Users },
  { label: "Taxa de Conversão", value: "34.8%", icon: BarChart3 },
  { label: "Tempo de Resposta", value: "< 2min", icon: Zap },
  { label: "Integrações Ativas", value: "48", icon: Database },
];

const CloudSection = () => {
  const { ref: gridRef, y: gridY } = useParallax({ speed: -0.05 });

  return (
    <section id="cloud" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-40" />

      <div className="relative container mx-auto px-6">
        {/* Header — slides from left */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <span className="section-badge mb-4">Módulo 01</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight text-foreground mt-4">
            O núcleo da sua operação comercial.
          </h2>
        </motion.div>

        {/* Metrics — staggered scale-in */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              variants={scaleItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card-elevated"
            >
              <Icon className="w-5 h-5 text-primary mb-4" />
              <p className="font-mono text-2xl md:text-3xl font-bold text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Glass block grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer(0.06, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-3 gap-3 max-w-3xl"
          style={{ transform: `translateY(${gridY}px)` }}
        >
          {[
            { col: "col-span-2", h: "h-32", accent: true },
            { col: "col-span-1", h: "h-32", accent: false },
            { col: "col-span-1", h: "h-24", accent: false },
            { col: "col-span-1", h: "h-24", accent: true },
            { col: "col-span-1", h: "h-24", accent: false },
          ].map((block, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className={`${block.col} ${block.h} ${
                block.accent ? "glow-border-primary" : "glass-panel"
              } flex items-end p-4 rounded-2xl`}
            >
              <span className="font-mono text-xs text-muted-foreground">
                block_{String(i).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mt-32" />
    </section>
  );
};

export default CloudSection;
