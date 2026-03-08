import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { wordStagger, wordReveal, blurUp, ease } from "@/lib/animations";
import { lazy, Suspense } from "react";

const KanbanBoard3D = lazy(() => import("@/components/cloud/KanbanBoard3D"));

const CloudHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-12" />
      <div className="absolute inset-0 radial-fade" />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column — 60% */}
          <div>
            <motion.span
              variants={blurUp}
              initial="hidden"
              animate="visible"
              className="section-badge mb-6 inline-block"
            >
              Cansado de perder leads no caos do WhatsApp?
            </motion.span>

            <motion.h1
              variants={wordStagger}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] text-foreground mb-6"
            >
              {"Centralize, Automatize e Escale suas Vendas no Zap com o Loomie Cloud.".split(" ").map((word, i) => (
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
              O CRM completo com WhatsApp API Oficial que organiza seu fluxo de atendimento e faz sua equipe vender mais em uma única plataforma.
            </motion.p>

            <motion.a
              href="https://crm.loomiecrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: ease.smooth }}
              className="btn-primary text-base"
            >
              Teste grátis por 7 dias
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Right Column — 40% — 3D Kanban */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: ease.smooth }}
          >
            <Suspense
              fallback={
                <div className="w-full min-h-[400px] lg:min-h-[500px] rounded-3xl flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <KanbanBoard3D />
            </Suspense>

            {/* Floating stat badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-panel px-5 py-3 z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-foreground">pipeline_ativo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudHero;
