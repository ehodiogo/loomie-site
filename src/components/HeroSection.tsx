import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RotateCcw, DollarSign, UserX, AlertTriangle, RefreshCw, ArrowDownCircle, Clock, XCircle } from "lucide-react";
import { wordStagger, wordReveal, blurUp, fadeUpItem, staggerContainer, ease } from "@/lib/animations";

const painPoints = [
  { icon: RotateCcw, text: "O faturamento reseta todo mês" },
  { icon: UserX, text: "Precisa caçar novos clientes" },
  { icon: DollarSign, text: "Ticket único, sem recorrência" },
  { icon: AlertTriangle, text: "Zero previsibilidade financeira" },
];

/* ── Animated cycle items for the right-side visual ── */
const cycleSteps = [
  { icon: Clock, label: "Dia 1º", sub: "Novo mês começa" },
  { icon: UserX, label: "Prospecção", sub: "Caçar clientes" },
  { icon: DollarSign, label: "Fechar Deal", sub: "Ticket único" },
  { icon: XCircle, label: "Entrega", sub: "Projeto finalizado" },
  { icon: RefreshCw, label: "Reset", sub: "Volta ao zero" },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-15" />
      <div className="absolute inset-0 radial-fade" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left: Text content ── */}
          <div className="flex-1 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: ease.smooth }}
            >
              <span className="section-badge">Para Desenvolvedores & Automadores</span>
            </motion.div>

            <motion.h1
              variants={wordStagger}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-foreground"
            >
              {["Pare", "de", "vender", '"Setups".'].map((word, i) => (
                <motion.span key={i} variants={wordReveal} className="inline-block mr-3 md:mr-4">
                  {word}
                </motion.span>
              ))}
              <br />
              {["Comece", "a", "construir", "seu"].map((word, i) => (
                <motion.span key={`b-${i}`} variants={wordReveal} className="inline-block mr-3 md:mr-4">
                  {word}
                </motion.span>
              ))}
              <motion.span variants={wordReveal} className="inline-block mr-3 md:mr-4 text-primary">
                Patrimônio de MRR.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={blurUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed"
            >
              Transforme seus workflows de <span className="text-foreground font-semibold">n8n</span>,{" "}
              <span className="text-foreground font-semibold">Python</span> e{" "}
              <span className="text-foreground font-semibold">APIs</span> em produtos Micro-SaaS escaláveis com a infraestrutura da Loomie.
            </motion.p>

            <motion.div
              variants={staggerContainer(0.1, 0.6)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3 w-full max-w-md"
            >
              {painPoints.map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  variants={fadeUpItem}
                  className="glass-panel p-3 flex items-center gap-2"
                >
                  <Icon className="w-4 h-4 text-destructive/70 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground font-medium leading-tight">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6, ease: ease.smooth }}
              className="flex gap-4 flex-wrap"
            >
              <a href="https://crm.loomiecrm.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Iniciar Integração — Gratuito
              </a>
              <button className="btn-secondary">
                Ver a matemática ↓
              </button>
            </motion.div>
          </div>

          {/* ── Right: Animated "Reset Cycle" visual ── */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-md aspect-square relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: ease.smooth }}
          >
            {/* Outer rotating dashed ring */}
            <motion.div
              className="absolute inset-4 rounded-full border border-dashed border-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner glowing ring */}
            <motion.div
              className="absolute inset-12 rounded-full"
              style={{
                border: "1px solid hsl(var(--primary) / 0.15)",
                boxShadow: "0 0 40px hsl(var(--glow-primary) / 0.06), inset 0 0 40px hsl(var(--glow-primary) / 0.03)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Cycle step nodes placed in a circle */}
            {cycleSteps.map(({ icon: Icon, label, sub }, i) => {
              const angle = (i / cycleSteps.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 42; // % from center
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;

              return (
                <motion.div
                  key={label}
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: ease.bounce }}
                >
                  <motion.div
                    className="glass-panel p-3 relative"
                    animate={{
                      boxShadow: [
                        "0 0 0px hsl(var(--glow-primary) / 0)",
                        "0 0 20px hsl(var(--glow-primary) / 0.15)",
                        "0 0 0px hsl(var(--glow-primary) / 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-[10px] font-semibold text-foreground whitespace-nowrap">{label}</span>
                  <span className="text-[9px] text-muted-foreground whitespace-nowrap">{sub}</span>
                </motion.div>
              );
            })}

            {/* Center "reset" pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-20 h-20 rounded-full"
                style={{ background: "hsl(var(--destructive) / 0.06)" }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="glass-panel p-4 z-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="w-6 h-6 text-destructive/60" />
              </motion.div>
            </div>

            {/* Connecting lines (arcs between nodes) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {cycleSteps.map((_, i) => {
                const a1 = (i / cycleSteps.length) * Math.PI * 2 - Math.PI / 2;
                const a2 = ((i + 1) / cycleSteps.length) * Math.PI * 2 - Math.PI / 2;
                const r = 42;
                const x1 = 50 + Math.cos(a1) * r;
                const y1 = 50 + Math.sin(a1) * r;
                const x2 = 50 + Math.cos(a2) * r;
                const y2 = 50 + Math.sin(a2) * r;

                return (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="hsl(var(--border))"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  />
                );
              })}
            </svg>

            {/* Animated orbital dot */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: "50%",
                  top: "8%",
                  transform: "translate(-50%, -50%)",
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 8px hsl(var(--glow-primary) / 0.6)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
