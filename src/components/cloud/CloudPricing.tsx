import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const plans = [
  {
    name: "Essencial",
    desc: "Para equipes pequenas e negócios em validação",
    monthly: 169.90,
    annual: 141.58,
    features: ["2 Canais", "5 Usuários Incluídos", "10.000 Contatos", "10 Pipelines", "API Aberta (100k req/dia)", "Nó Nativo n8n", "Backup Diário (Retenção 30d)"],
    popular: false,
  },
  {
    name: "Scale",
    desc: "O motor para empresas e agências em escala",
    monthly: 299.90,
    annual: 249.92,
    features: ["3 Canais", "10 Usuários Incluídos", "50.000 Contatos", "20 Pipelines", "API Aberta (250k req/dia)", "Nó Nativo n8n", "Backup Diário (Retenção 60d)"],
    popular: true,
  },
  {
    name: "Pro",
    desc: "Para operações de alta performance",
    monthly: 599.90,
    annual: 499.92,
    features: ["5 Canais", "25 Usuários Incluídos", "300.000 Contatos", "Pipelines Ilimitados", "API Aberta (500k req/dia)", "Nó Nativo n8n", "Backup Diário (Retenção 180d)"],
    popular: false,
  },
];

const CloudPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-20" />
      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <span className="section-badge mb-4 inline-block">Preços</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
            Escolha o plano ideal <span className="text-gradient-primary">para sua operação.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Comece grátis e escale conforme sua equipe cresce.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Faturamento Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-primary" : "bg-secondary"
              }`}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
                animate={{ left: isAnnual ? "calc(100% - 24px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Faturamento Anual
            </span>
            <AnimatePresence>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: -8 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -8 }}
                  className="section-badge text-[10px] py-1 px-3"
                >
                  2 meses grátis
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center pt-6"
        >
          {plans.map(({ name, desc, monthly, annual, features: feats, popular }) => {
            const price = isAnnual ? annual : monthly;
            return (
              <motion.div
                key={name}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`card-elevated relative flex flex-col overflow-visible ${popular ? "glow-border-primary ring-1 ring-primary/30 md:scale-105 md:py-8" : ""}`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="section-badge text-[10px]">Mais Popular</span>
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{name}</h3>
                <p className="text-xs text-muted-foreground mb-5">{desc}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  {isAnnual && (
                    <span className="text-sm text-muted-foreground line-through mr-1">
                      R$ {monthly.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-3xl font-bold text-foreground"
                    >
                      R$ {price.toFixed(2).replace(".", ",")}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>

                <div className="space-y-3 flex-1">
                  {feats.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://crm.loomiecrm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 w-full text-center py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 inline-block ${
                    popular
                      ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  Iniciar Teste Grátis
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CloudPricing;
