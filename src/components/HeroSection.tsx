import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RotateCcw, DollarSign, UserX, AlertTriangle } from "lucide-react";
import { wordStagger, wordReveal, blurUp, fadeUpItem, staggerContainer, ease } from "@/lib/animations";

const painPoints = [
  { icon: RotateCcw, text: "O faturamento reseta todo mês" },
  { icon: UserX, text: "Precisa caçar novos clientes" },
  { icon: DollarSign, text: "Ticket único, sem recorrência" },
  { icon: AlertTriangle, text: "Zero previsibilidade financeira" },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-15" />
      <div className="absolute inset-0 radial-fade" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: ease.smooth }}
          >
            <span className="section-badge">Para Desenvolvedores & Automadores</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={wordStagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-foreground"
          >
            {["O", "Placar", "Zerado."].map((word, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block mr-3 md:mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            variants={blurUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Todo dia 1º, você precisa caçar novos clientes. O faturamento não acumula — ele apenas{" "}
            <span className="text-foreground font-semibold">reseta</span>.
          </motion.p>

          {/* Pain points grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.6)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl"
          >
            {painPoints.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                variants={fadeUpItem}
                className="glass-panel p-4 flex flex-col items-center gap-2 text-center"
              >
                <Icon className="w-5 h-5 text-destructive/70" />
                <span className="text-xs text-muted-foreground font-medium leading-tight">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6, ease: ease.smooth }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <a href="https://crm.loomiecrm.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Iniciar Integração — Gratuito
            </a>
            <button className="btn-secondary">
              Ver a matemática ↓
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
