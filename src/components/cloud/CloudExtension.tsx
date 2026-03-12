import { motion } from "framer-motion";
import { Chrome, Search, UserPlus, ArrowRight, Puzzle } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const features = [
  {
    icon: Search,
    title: "Busca Inteligente",
    desc: "Encontre contatos e informações relevantes direto do navegador, sem sair da página que está visitando.",
  },
  {
    icon: UserPlus,
    title: "Cadastro Rápido",
    desc: "Salve novos leads no CRM com um clique. Dados preenchidos automaticamente a partir do contexto da página.",
  },
  {
    icon: Puzzle,
    title: "Integração Total",
    desc: "Sincroniza em tempo real com o Loomie Cloud. Todos os contatos ficam disponíveis no pipeline instantaneamente.",
  },
];

const CloudExtension = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-20" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <span className="section-badge mb-4 inline-block">Extensão Chrome</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-6 mt-4">
              Capture leads de{" "}
              <span className="text-gradient-primary">qualquer lugar da web.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Com a extensão do Chrome da Loomie, você transforma qualquer navegação em uma oportunidade de negócio. Busque, cadastre e organize contatos sem sair do site que está acessando.
            </p>
          </motion.div>

          {/* Browser mockup + features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Browser mockup */}
            <motion.div
              variants={blurUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative"
            >
              <div className="glass-panel rounded-2xl overflow-hidden p-1">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-muted/30 rounded-lg px-4 py-1.5 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary/40" />
                      <span className="font-mono text-xs text-muted-foreground">linkedin.com/leads</span>
                    </div>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 min-h-[280px] relative">
                  {/* Fake page content */}
                  <div className="space-y-3 opacity-30">
                    <div className="h-4 bg-muted/40 rounded w-3/4" />
                    <div className="h-3 bg-muted/30 rounded w-full" />
                    <div className="h-3 bg-muted/30 rounded w-5/6" />
                    <div className="h-8 bg-muted/20 rounded w-full mt-4" />
                    <div className="h-3 bg-muted/30 rounded w-2/3" />
                    <div className="h-3 bg-muted/30 rounded w-4/5" />
                  </div>

                  {/* Extension popup */}
                  <motion.div
                    className="absolute top-4 right-4 w-56 glow-border-primary rounded-xl p-4 z-10"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Chrome className="w-4 h-4 text-primary" />
                      <span className="font-display text-xs font-bold text-foreground">Loomie Extension</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted/20 rounded-lg px-3 py-2 flex items-center gap-2">
                        <Search className="w-3 h-3 text-muted-foreground" />
                        <span className="font-mono text-[10px] text-muted-foreground">Buscar contato...</span>
                      </div>
                      <div className="bg-primary/10 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <UserPlus className="w-3 h-3 text-primary" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-foreground">João Silva</p>
                            <p className="text-[8px] text-muted-foreground">Salvar no CRM →</p>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className="w-full h-1 bg-primary/20 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewport}
                        transition={{ delay: 0.8 }}
                      >
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={viewport}
                          transition={{ delay: 1, duration: 1.5 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right — Features */}
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-6"
            >
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUpItem}
                  whileHover={{ x: 4, transition: { duration: 0.3 } }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.a
                href="https://crm.loomiecrm.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUpItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex mt-4"
              >
                Instalar extensão grátis
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudExtension;
