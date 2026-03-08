import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Instagram, Mail, BarChart3, Filter, Settings, ArrowRight, CheckCircle2, Layers, GitMerge, Users } from "lucide-react";
import { wordStagger, wordReveal, blurUp, slideFromLeft, slideFromRight, staggerContainer, fadeUpItem, scaleItem, viewport, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";

const channels = [
  { icon: Instagram, label: "Instagram", desc: "DMs e comentários centralizados" },
  { icon: MessageCircle, label: "WhatsApp", desc: "Conversas em tempo real" },
  { icon: Mail, label: "E-mail", desc: "Inbox unificado e rastreável" },
];

const features = [
  {
    icon: BarChart3,
    title: "Métricas & Análise de Gargalos",
    desc: "Identifique exatamente onde sua operação trava. Dashboards em tempo real mostram os gargalos operacionais para que você tome decisões baseadas em dados, não em achismos.",
  },
  {
    icon: Filter,
    title: "Funis Visuais de Venda",
    desc: "Visualize cada etapa do seu processo comercial com funis personalizáveis. Saiba exatamente onde cada lead está e o que precisa acontecer para avançá-lo.",
  },
  {
    icon: Settings,
    title: "CRM 100% Configurável",
    desc: "Configure campos, etapas, automações e fluxos do seu jeito. O Loomie Cloud se adapta ao seu processo — não o contrário.",
  },
];

const plans = [
  {
    name: "Essencial",
    desc: "Para equipes pequenas e negócios em validação",
    monthly: 169.90,
    annual: 141.58,
    features: ["5 Usuários Incluídos", "10.000 Contatos", "10 Pipelines", "API Aberta (100k req/dia)", "Nó Nativo n8n", "Backup Diário (Retenção 30d)"],
    popular: false,
  },
  {
    name: "Scale",
    desc: "O motor para empresas e agências em escala",
    monthly: 299.90,
    annual: 249.92,
    features: ["10 Usuários Incluídos", "50.000 Contatos", "20 Pipelines", "API Aberta (250k req/dia)", "Nó Nativo n8n", "Backup Diário (Retenção 60d)"],
    popular: true,
  },
  {
    name: "Pro",
    desc: "Para operações de alta performance",
    monthly: 599.90,
    annual: 499.92,
    features: ["25 Usuários Incluídos", "300.000 Contatos", "Pipelines Ilimitados", "API Aberta (500k req/dia)", "Nó Nativo n8n", "Backup Diário (Retenção 180d)"],
    popular: false,
  },
];

const Cloud = () => {
  useLenis();
  const { ref: channelsRef, y: channelsY } = useParallax({ speed: -0.05 });
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
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
              {"Otimize seu negócio com o CRM que se adapta a você.".split(" ").map((word, i) => (
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
              Crie seu processo, conecte qualquer app e cresça sua equipe sem medo da fatura. Tudo centralizado em uma plataforma inteligente.
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
              Inicie seu teste grátis
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Channels Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-30" />
        <div
          ref={channelsRef}
          className="relative container mx-auto px-6"
          style={{ transform: `translateY(${channelsY}px)` }}
        >
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Todos os canais. <span className="text-gradient-primary">Um só lugar.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conecte Instagram, WhatsApp e E-mail para que cada conversa, lead e oportunidade convirja em uma única central de atendimento.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {channels.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={scaleItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="card-elevated text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Convergence node */}
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 flex justify-center"
          >
            <div className="glass-panel glow-border-primary px-8 py-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-sm text-foreground">inbox_unificado</span>
              <span className="text-muted-foreground text-xs">— converge aqui</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Features Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="relative container mx-auto px-6">
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Feito para <span className="text-gradient-primary">sua operação.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Métricas, funis e configurações que se moldam ao seu negócio.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUpItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="card-elevated group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Pricing Section ═══ */}
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
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
          >
            {plans.map(({ name, desc, monthly, annual, features: feats, popular }) => {
              const price = isAnnual ? annual : monthly;
              return (
                <motion.div
                  key={name}
                  variants={fadeUpItem}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className={`card-elevated relative flex flex-col ${popular ? "glow-border-primary md:-mt-4 md:mb-[-16px] md:py-10" : ""}`}
                >
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
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

      <div className="section-divider" />

      {/* CTA Section */}
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
              Inicie seu teste grátis
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {["Sem cartão de crédito", "Setup em 5 minutos", "Suporte incluso"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cloud;
