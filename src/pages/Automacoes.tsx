import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";
import { motion } from "framer-motion";
import { Bot, Clock, MessageCircle, Zap, ArrowRight, CheckCircle2, Settings, GitMerge, BarChart3, Users, Cpu, Workflow } from "lucide-react";
import useParallax from "@/hooks/use-parallax";

const benefits = [
  {
    icon: Clock,
    stat: "15h/semana",
    title: "Economia de tempo",
    desc: "Elimine até 15 horas semanais de tarefas manuais repetitivas que drenam a produtividade da sua equipe.",
  },
  {
    icon: MessageCircle,
    stat: "0 leads",
    title: "Zero leads perdidos",
    desc: "Follow-up automático inteligente garante que nenhuma oportunidade escape. Cada lead recebe atenção no momento certo.",
  },
  {
    icon: Zap,
    stat: "24/7",
    title: "Respostas instantâneas",
    desc: "Seus clientes recebem respostas imediatas a qualquer hora do dia, mantendo o engajamento e a satisfação sempre altos.",
  },
];

const processSteps = [
  { icon: BarChart3, label: "Análise do Processo", desc: "Mapeamos sua operação de venda para identificar oportunidades de automação." },
  { icon: Settings, label: "Automação Personalizada", desc: "Criamos fluxos sob medida que se conectam perfeitamente ao seu negócio." },
  { icon: GitMerge, label: "Integração Total", desc: "Conectamos com seus processos e ferramentas já existentes, sem interrupções." },
  { icon: Users, label: "Acompanhamento Contínuo", desc: "Monitoramos e otimizamos suas automações para máxima performance." },
];

const Automacoes = () => {
  useLenis();
  const { ref: heroRef, y: heroY } = useParallax({ speed: 0.12 });
  const { ref: benefitsRef, y: benefitsY } = useParallax({ speed: -0.06 });
  const { ref: processRef, y: processY } = useParallax({ speed: 0.05 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-line opacity-15" />
        <div className="absolute inset-0 radial-fade" />

        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[Bot, Cpu, Workflow, Zap, GitMerge, Settings].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute glass-panel p-3 opacity-30"
              style={{ left: `${68 + (i % 3) * 11}%`, top: `${12 + i * 14}%` }}
              animate={{
                opacity: [0.15, 0.4, 0.15],
                y: [0, -12, 0],
              }}
              transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            >
              <Icon className="text-primary" size={18} />
            </motion.div>
          ))}
        </div>

        <div
          ref={heroRef}
          className="relative z-10 container mx-auto px-6 pt-32 pb-20"
          style={{ transform: `translateY(${heroY}px)` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs tracking-widest uppercase mb-6">
              Loomie Automações
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-foreground mb-6">
              Automações com IA que trabalham
              <span className="text-gradient-primary"> por você.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              Deixe a Inteligência Artificial cuidar das tarefas repetitivas enquanto você foca no crescimento do seu negócio. Automações 24/7, sem esforço manual.
            </p>
            <motion.a
              href="https://crm.loomiecrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-sharp bg-primary text-primary-foreground glow-primary inline-flex items-center gap-2"
            >
              Quero automatizar meu negócio
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-40" />
        <div
          ref={benefitsRef}
          className="relative container mx-auto px-6"
          style={{ transform: `translateY(${benefitsY}px)` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              O que você ganha com <span className="text-gradient-primary">nossas automações.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Resultados reais que impactam diretamente a produtividade e a receita do seu negócio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map(({ icon: Icon, stat, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-panel p-8 group hover:glow-border-primary transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-mono text-2xl font-bold text-gradient-primary mb-2">{stat}</p>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-28 overflow-hidden">
        <div
          ref={processRef}
          className="relative container mx-auto px-6"
          style={{ transform: `translateY(${processY}px)` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Automação <span className="text-gradient-primary">sob medida.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Criamos automações personalizadas para sua empresa, com acompanhamento contínuo e integração com processos já existentes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-panel p-6 relative group hover:glow-border-primary transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-primary/60">0{i + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 max-w-3xl mx-auto glass-panel glow-border-primary p-8 text-center"
          >
            <Bot className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-foreground font-display text-lg font-semibold mb-2">
              Automação feita para o seu negócio
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
              Não oferecemos soluções genéricas. Cada automação é desenhada e configurada especificamente para se conectar perfeitamente com a realidade da sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-60" />
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel glow-border-primary p-12 md:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Pare de perder tempo com tarefas manuais.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Fale com nosso time e descubra como a IA pode revolucionar sua operação comercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://crm.loomiecrm.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-sharp bg-primary text-primary-foreground glow-primary inline-flex items-center justify-center gap-2"
              >
                Quero automatizar agora
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {["Sem código necessário", "Integração em 48h", "Suporte dedicado"].map((item) => (
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

export default Automacoes;
