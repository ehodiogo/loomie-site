import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Webhook, BookOpen } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";
import WaitlistModal from "./WaitlistModal";

const badges = [
  { icon: BookOpen, text: "Documentação pronta" },
  { icon: Terminal, text: "Endpoints REST abertos" },
  { icon: Webhook, text: "Suporte nativo a webhooks" },
];

const FinalCTASection = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  return (
    <>
    <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-40" />

      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
            Pare de entregar a sua lógica.{" "}
            <span className="text-gradient-primary">Comece a construir o seu ativo.</span>
          </h2>

          <motion.div
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {badges.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                variants={fadeUpItem}
                className="flex items-center gap-2 glass-panel px-4 py-2"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-muted-foreground mt-6 max-w-lg mx-auto"
          >
            Transforme sua melhor automação em um Micro-SaaS hoje.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <button onClick={() => setWaitlistOpen(true)} className="btn-primary text-base px-10 py-4">
              Entrar para lista de espera
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default FinalCTASection;
