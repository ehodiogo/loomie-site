import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Bot, Clock, MessageCircle, MessageSquare, Zap, ArrowRight, CheckCircle2, Settings, GitMerge, BarChart3, Users } from "lucide-react";
import { wordStagger, wordReveal, blurUp, slideFromLeft, slideFromRight, staggerContainer, fadeUpItem, scaleItem, viewport, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";
import { useRef } from "react";
import { AITaskFlow } from "@/components/automacoes/AITaskFlow";

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

/* ── Tilt card with mouse tracking ── */
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, perspective: 800, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Automacoes = () => {
  useLenis();
  const { ref: benefitsRef, y: benefitsY } = useParallax({ speed: -0.04 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-line opacity-12" />
        <div className="absolute inset-0 radial-fade" />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <motion.span
                variants={blurUp}
                initial="hidden"
                animate="visible"
                className="section-badge mb-6 inline-block"
              >
                Loomie Automações
              </motion.span>

              <motion.h1
                variants={wordStagger}
                initial="hidden"
                animate="visible"
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] text-foreground mb-6"
              >
                {"Automações com IA que trabalham por você."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      variants={wordReveal}
                      className="inline-block mr-3"
                    >
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
                Deixe a Inteligência Artificial cuidar das tarefas repetitivas
                enquanto você foca no crescimento do seu negócio. Automações
                24/7, sem esforço manual.
              </motion.p>

              <motion.a
                href="https://wa.me/555596720480?text=Ol%C3%A1%2C%20preciso%20de%20um%20CRM%20para%20escalar%20as%20minhas%20vendas!"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: ease.smooth }}
                className="btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                Quero automatizar meu negócio
              </motion.a>
            </div>

            {/* Right — AI Task Flow */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: ease.smooth }}
            >
              <AITaskFlow />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Benefits Section ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-30" />

        <div
          ref={benefitsRef}
          className="relative container mx-auto px-6"
          style={{ transform: `translateY(${benefitsY}px)` }}
        >
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              O que você ganha com{" "}
              <span className="text-gradient-primary">nossas automações.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Resultados reais que impactam diretamente a produtividade e a
              receita do seu negócio.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {benefits.map(({ icon: Icon, stat, title, desc }) => (
              <motion.div key={title} variants={scaleItem}>
                <div className="card-elevated group h-full">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <p className="font-mono text-xl sm:text-2xl font-bold text-gradient-primary mb-1 sm:mb-2">
                    {stat}
                  </p>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-3">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Process Section ═══ */}
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
              Automação{" "}
              <span className="text-gradient-primary">sob medida.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Criamos automações personalizadas para sua empresa, com
              acompanhamento contínuo e integração com processos já existentes.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {processSteps.map(({ icon: Icon, label, desc }, i) => (
              <motion.div key={label} variants={fadeUpItem}>
                <div className="card-elevated relative group h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-primary/50">
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2">
                    {label}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlight box */}
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-16 max-w-3xl mx-auto"
          >
            <TiltCard className="glass-panel glow-border-primary p-8 rounded-2xl text-center cursor-pointer">
              <Bot className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-foreground font-display text-lg font-semibold mb-2">
                Automação feita para o seu negócio
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
                Não oferecemos soluções genéricas. Cada automação é desenhada e
                configurada especificamente para se conectar perfeitamente com a
                realidade da sua empresa.
              </p>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ CTA Section ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-50" />

        <div className="relative container mx-auto px-6">
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <TiltCard className="glass-panel glow-border-primary p-12 md:p-16 rounded-2xl text-center max-w-3xl mx-auto cursor-pointer">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Pare de perder tempo com tarefas manuais.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                Fale com nosso time e descubra como a IA pode revolucionar sua
                operação comercial.
              </p>
              <motion.a
                href="https://wa.me/555596720480?text=Ol%C3%A1%2C%20preciso%20de%20um%20CRM%20para%20escalar%20as%20minhas%20vendas!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                Quero automatizar agora
              </motion.a>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {[
                  "Sem código necessário",
                  "Projeto personalizado",
                  "Suporte dedicado",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automacoes;
