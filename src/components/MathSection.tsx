import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { XCircle, CheckCircle2, TrendingUp, TrendingDown } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport, ease } from "@/lib/animations";

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 2, inView = false) {
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, target, duration, motionVal]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return display;
}

/* ── Counter component ── */
function AnimatedValue({
  prefix = "",
  value,
  suffix = "",
  inView,
  className,
}: {
  prefix?: string;
  value: number;
  suffix?: string;
  inView: boolean;
  className?: string;
}) {
  const count = useCounter(value, 2.2, inView);
  return (
    <span className={className}>
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

const MathSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="math" ref={sectionRef} className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-30" />

      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="section-badge mb-4 inline-block">The Math</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-foreground mt-4">
            A Matemática da{" "}
            <span className="text-gradient-primary">Escala Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            O que constrói patrimônio sólido não é o ticket alto de um setup único — é o{" "}
            <span className="text-foreground font-semibold">MRR acumulado</span>.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* ── Freelancer Card ── */}
          <motion.div variants={fadeUpItem} className="glass-panel p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/40" />

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5, ease: ease.bounce }}
              >
                <XCircle className="w-7 h-7 text-destructive/70" />
              </motion.div>
              <h3 className="font-display text-lg font-bold text-foreground">Modelo Freelancer</h3>
            </div>

            <div className="space-y-5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Ticket</span>
                <div className="text-right">
                  <AnimatedValue prefix="R$ " value={5000} inView={isInView} className="font-mono text-lg font-bold text-foreground" />
                  <p className="text-xs text-muted-foreground/70">Único</p>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Volume</span>
                <div className="text-right">
                  <AnimatedValue value={1} suffix=" cliente" inView={isInView} className="font-mono text-lg font-bold text-foreground" />
                  <p className="text-xs text-muted-foreground/70">Exige foco total</p>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Retenção</span>
                <div className="text-right">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                    className="font-mono text-lg font-bold text-destructive/70"
                  >
                    Nula
                  </motion.span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.4 }}
                className="h-px bg-border origin-left"
              />

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-destructive/60" />
                  <span className="text-sm font-semibold text-muted-foreground">Resultado</span>
                </div>
                <div className="text-right">
                  <AnimatedValue prefix="R$ " value={5000} inView={isInView} className="font-mono text-xl font-bold text-foreground" />
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2 }}
                    className="text-xs text-destructive/60 font-medium mt-0.5"
                  >
                    O ciclo recomeça do zero ↻
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Loomie Card ── */}
          <motion.div variants={fadeUpItem} className="glass-panel p-8 glow-border-primary relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60" />

            {/* Subtle animated glow */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
              style={{ background: "hsl(var(--glow-primary) / 0.08)" }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: 90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5, ease: ease.bounce }}
              >
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-bold text-foreground">Modelo Loomie (Micro-SaaS)</h3>
            </div>

            <div className="relative space-y-5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Ticket</span>
                <div className="text-right">
                  <AnimatedValue prefix="R$ " value={300} suffix="/mês" inView={isInView} className="font-mono text-lg font-bold text-gradient-primary" />
                  <p className="text-xs text-muted-foreground/70">Assinatura</p>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Volume</span>
                <div className="text-right">
                  <AnimatedValue value={50} suffix=" clientes" inView={isInView} className="font-mono text-lg font-bold text-gradient-primary" />
                  <p className="text-xs text-muted-foreground/70">Escala via infraestrutura</p>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Retenção</span>
                <div className="text-right">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                    className="font-mono text-lg font-bold text-primary"
                  >
                    Alta
                  </motion.span>
                  <p className="text-xs text-muted-foreground/70">Depende da automação diária</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.4 }}
                className="h-px bg-primary/20 origin-left"
              />

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">Resultado</span>
                </div>
                <div className="text-right">
                  <AnimatedValue prefix="R$ " value={15000} suffix=" MRR" inView={isInView} className="font-mono text-xl font-bold text-gradient-primary" />
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2 }}
                    className="text-xs text-primary/70 font-medium mt-0.5"
                  >
                    Previsível e acumulativo ↑
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Bottom highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.4, duration: 0.6, ease: ease.smooth }}
              className="relative mt-6 pt-5 border-t border-primary/10 text-center"
            >
              <motion.p
                className="font-mono text-3xl font-bold text-gradient-primary"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 2.5, duration: 0.5, ease: ease.bounce }}
              >
                3x mais receita
              </motion.p>
              <p className="text-xs text-muted-foreground mt-1">com código centralizado e esforço diluído</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MathSection;
