import { motion } from "framer-motion";
import { useState } from "react";
import { RotateCcw, DollarSign, UserX, AlertTriangle } from "lucide-react";
import HeroBenefitsAccordion from "./hero/HeroBenefitsAccordion";
import { wordStagger, wordReveal, blurUp, fadeUpItem, staggerContainer, ease, viewport } from "@/lib/animations";
import WaitlistModal from "./WaitlistModal";

const painPoints = [
  { icon: RotateCcw, text: "O faturamento reseta todo mês" },
  { icon: UserX, text: "Precisa caçar novos clientes" },
  { icon: DollarSign, text: "Ticket único, sem recorrência" },
  { icon: AlertTriangle, text: "Zero previsibilidade financeira" },
];

const HeroSection = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  return (
    <>
    <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-15" />
      <div className="absolute inset-0 radial-fade" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left: Text content ── */}
          <div className="flex-1 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: ease.smooth }}
            >
              <span className="section-badge">Para Desenvolvedores & Automadores</span>
            </motion.div>

            <motion.h1
              variants={wordStagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
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
              whileInView="visible"
              viewport={viewport}
              className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed"
            >
              Transforme seus workflows de <span className="text-foreground font-semibold">n8n</span>,{" "}
              <span className="text-foreground font-semibold">Python</span> e{" "}
              <span className="text-foreground font-semibold">APIs</span> em produtos Micro-SaaS escaláveis com a infraestrutura da Loomie.
            </motion.p>

            <motion.div
              variants={staggerContainer(0.1, 0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 1, duration: 0.6, ease: ease.smooth }}
              className="flex gap-4 flex-wrap"
            >
              <button onClick={() => setWaitlistOpen(true)} className="btn-primary">
                Entrar para lista de espera
              </button>
              <button className="btn-secondary">
                Ver a matemática ↓
              </button>
            </motion.div>
          </div>

          {/* ── Right: Benefits Accordion ── */}
          <HeroBenefitsAccordion />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
