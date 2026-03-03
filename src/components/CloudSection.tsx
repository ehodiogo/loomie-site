import { motion } from "framer-motion";
import { Database, Users, Zap, BarChart3 } from "lucide-react";

const metrics = [
  { label: "Leads Unificados", value: "12.4K", icon: Users },
  { label: "Taxa de Conversão", value: "34.8%", icon: BarChart3 },
  { label: "Tempo de Resposta", value: "< 2min", icon: Zap },
  { label: "Integrações Ativas", value: "48", icon: Database },
];

const gridBlocks = [
  { col: "col-span-2", h: "h-32", accent: true },
  { col: "col-span-1", h: "h-32", accent: false },
  { col: "col-span-1", h: "h-24", accent: false },
  { col: "col-span-1", h: "h-24", accent: true },
  { col: "col-span-1", h: "h-24", accent: false },
];

const CloudSection = () => {
  return (
    <section id="cloud" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-50" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            // Loomie Cloud
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            O núcleo da sua operação comercial.
          </h2>
        </motion.div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel p-6 group hover:glow-border-primary transition-all duration-500"
            >
              <Icon className="w-5 h-5 text-primary mb-4" />
              <p className="font-mono text-2xl md:text-3xl font-bold text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Physics-inspired data grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-3 max-w-3xl"
        >
          {gridBlocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${block.col} ${block.h} ${
                block.accent ? "glow-border-primary" : "glass-panel"
              } flex items-end p-4`}
            >
              <span className="font-mono text-xs text-muted-foreground">
                block_{String(i).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CloudSection;
