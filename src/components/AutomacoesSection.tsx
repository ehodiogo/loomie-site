import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const nodes = [
  { label: "Lead Capturado", x: 0, y: 0 },
  { label: "Qualificação IA", x: 1, y: 1 },
  { label: "Distribuição", x: 2, y: 0 },
  { label: "Follow-up Auto", x: 3, y: 1 },
  { label: "Conversão", x: 4, y: 0 },
];

const AutomacoesSection = () => {
  return (
    <section id="automações" className="relative py-32 overflow-hidden">
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
            // Automações
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Raio-X da sua eficiência.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Cada processo mapeado, cada gargalo eliminado. Visualize o fluxo completo da sua operação.
          </p>
        </motion.div>

        {/* X-ray flow visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
            {nodes.slice(0, -1).map((node, i) => {
              const next = nodes[i + 1];
              const x1 = node.x * 180 + 80;
              const y1 = node.y * 80 + 60;
              const x2 = next.x * 180 + 80;
              const y2 = next.y * 80 + 60;
              return (
                <motion.line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="hsl(239 84% 67% / 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`${node.y === 1 ? "mt-16" : ""}`}
              >
                <div className="glass-panel p-4 glow-border-primary group hover:bg-secondary/50 transition-all duration-300">
                  <div className="w-2 h-2 bg-accent rounded-full mb-3 animate-pulse-glow" />
                  <p className="font-mono text-xs text-foreground">{node.label}</p>
                  <ArrowRight className="w-3 h-3 text-muted-foreground mt-2 group-hover:text-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 mt-20 justify-center">
          {[
            { stat: "97%", desc: "Processos automatizados" },
            { stat: "3.2x", desc: "Aumento em produtividade" },
            { stat: "< 30s", desc: "Tempo de execução médio" },
          ].map(({ stat, desc }, i) => (
            <motion.div
              key={desc}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="text-center"
            >
              <p className="font-mono text-3xl md:text-4xl font-bold text-gradient-primary">{stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomacoesSection;
