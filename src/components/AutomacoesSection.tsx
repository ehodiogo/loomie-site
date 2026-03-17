import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { slideFromRight, staggerContainer, fadeUpItem, lineDraw, viewport, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";

const nodes = [
  { label: "Lead Capturado", x: 0, y: 0 },
  { label: "Qualificação IA", x: 1, y: 1 },
  { label: "Distribuição", x: 2, y: 0 },
  { label: "Follow-up Auto", x: 3, y: 1 },
  { label: "Conversão", x: 4, y: 0 },
];

const AutomacoesSection = () => {
  const { ref: statsRef, y: statsY } = useParallax({ speed: -0.04 });

  return (
    <section id="automações" className="relative py-32 overflow-hidden">
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-scan-line" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header — slides from right (opposite to Cloud) */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20 md:text-right md:ml-auto md:max-w-2xl"
        >
          
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight text-foreground mt-4">
            Raio-X da sua eficiência.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg md:ml-auto">
            Cada processo mapeado, cada gargalo eliminado. Visualize o fluxo completo da sua operação.
          </p>
        </motion.div>

        {/* Flow visualization with stagger */}
        <div className="relative max-w-4xl mx-auto">
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
                  stroke="hsl(199 89% 48% / 0.2)"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  variants={lineDraw}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: ease.inOut }}
                />
              );
            })}
          </svg>

          <motion.div
            variants={staggerContainer(0.12, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-5 gap-4 relative z-10"
          >
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                variants={fadeUpItem}
                className={`${node.y === 1 ? "mt-16" : ""}`}
              >
                <div className="card-elevated !p-4 glow-border-primary group">
                  <div className="w-2 h-2 bg-primary rounded-full mb-3 animate-pulse-glow" />
                  <p className="font-mono text-xs text-foreground">{node.label}</p>
                  <ArrowRight className="w-3 h-3 text-muted-foreground mt-2 group-hover:text-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={staggerContainer(0.15, 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap gap-12 mt-20 justify-center"
          style={{ transform: `translateY(${statsY}px)` }}
        >
          {[
            { stat: "97%", desc: "Processos automatizados" },
            { stat: "3.2x", desc: "Aumento em produtividade" },
            { stat: "< 30s", desc: "Tempo de execução médio" },
          ].map(({ stat, desc }) => (
            <motion.div key={desc} variants={fadeUpItem} className="text-center">
              <p className="font-mono text-3xl md:text-4xl font-bold text-gradient-primary">{stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mt-32" />
    </section>
  );
};

export default AutomacoesSection;
