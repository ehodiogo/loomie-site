import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { blurUp, viewport } from "@/lib/animations";

const CloudCTA = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-50" />
      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="glass-panel glow-border-primary p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Pronto para transformar sua operação?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Comece agora com o Loomie Cloud e veja resultados em dias, não meses.
          </p>
          <motion.a
            href="https://crm.loomiecrm.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            Quero escalar meu atendimento agora
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Teste gratuito", "Setup em 5 minutos", "Suporte incluso"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudCTA;
