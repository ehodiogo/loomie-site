import { motion } from "framer-motion";
import { ArrowRight, Layers, GitMerge, Users, BarChart3, Settings } from "lucide-react";
import { wordStagger, wordReveal, blurUp, ease } from "@/lib/animations";

const CloudHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-12" />
      <div className="absolute inset-0 radial-fade" />

      {/* Decorative breathing icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Layers, GitMerge, Users, BarChart3, Settings].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute glass-panel p-3"
            style={{ left: `${70 + (i % 3) * 10}%`, top: `${15 + i * 15}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -10, 0],
              scale: [0.95, 1, 0.95],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          >
            <Icon className="text-primary" size={18} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.span
            variants={blurUp}
            initial="hidden"
            animate="visible"
            className="section-badge mb-6 inline-block"
          >
            Loomie Cloud
          </motion.span>

          <motion.h1
            variants={wordStagger}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.92] text-foreground mb-6"
          >
            {"Pare de perder vendas por falta de organização.".split(" ").map((word, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={blurUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8"
          >
            O CRM completo para quem busca automação real, gestão de processos e controle total da equipe em um só lugar.
          </motion.p>

          <motion.a
            href="https://crm.loomiecrm.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: ease.smooth }}
            className="btn-primary"
          >
            Quero escalar meu atendimento agora
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CloudHero;
