import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Bot, Clock, MessageCircle, Zap, ArrowRight, CheckCircle2, Settings, GitMerge, BarChart3, Users } from "lucide-react";
import { wordStagger, wordReveal, blurUp, slideFromLeft, slideFromRight, staggerContainer, fadeUpItem, scaleItem, viewport, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";
import { useRef, useState } from "react";

const benefits = [
  {
    icon: Clock,
    stat: "15h/semana",
    title: "Economia de tempo",
    desc: "Elimine até 15 horas semanais de tarefas manuais repetitivas que drenam a produtividade da sua equipe.",
    clipIdle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    clipHover: "polygon(4% 4%, 96% 0%, 100% 96%, 0% 100%)",
  },
  {
    icon: MessageCircle,
    stat: "0 leads",
    title: "Zero leads perdidos",
    desc: "Follow-up automático inteligente garante que nenhuma oportunidade escape. Cada lead recebe atenção no momento certo.",
    clipIdle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    clipHover: "polygon(0% 4%, 96% 4%, 100% 100%, 4% 96%)",
  },
  {
    icon: Zap,
    stat: "24/7",
    title: "Respostas instantâneas",
    desc: "Seus clientes recebem respostas imediatas a qualquer hora do dia, mantendo o engajamento e a satisfação sempre altos.",
    clipIdle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    clipHover: "polygon(4% 0%, 100% 4%, 96% 100%, 0% 96%)",
  },
];

const processSteps = [
  { icon: BarChart3, label: "Análise do Processo", desc: "Mapeamos sua operação de venda para identificar oportunidades de automação." },
  { icon: Settings, label: "Automação Personalizada", desc: "Criamos fluxos sob medida que se conectam perfeitamente ao seu negócio." },
  { icon: GitMerge, label: "Integração Total", desc: "Conectamos com seus processos e ferramentas já existentes, sem interrupções." },
  { icon: Users, label: "Acompanhamento Contínuo", desc: "Monitoramos e otimizamos suas automações para máxima performance." },
];

/* ── Interactive clip-path card ── */
const ClipCard = ({ children, className = "", index = 0 }: { children: React.ReactNode; className?: string; index?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const shapes = [
    { idle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", hover: "polygon(3% 0%, 100% 3%, 97% 100%, 0% 97%)" },
    { idle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", hover: "polygon(0% 3%, 97% 0%, 100% 97%, 3% 100%)" },
    { idle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", hover: "polygon(3% 3%, 97% 0%, 100% 100%, 0% 97%)" },
    { idle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", hover: "polygon(0% 0%, 100% 3%, 97% 97%, 3% 100%)" },
  ];

  const shape = shapes[index % shapes.length];

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        clipPath: hovered ? shape.hover : shape.idle,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Diagonal clip-path section divider ── */
const ClipDivider = ({ direction = "left" }: { direction?: "left" | "right" }) => (
  <div className="relative h-24 -my-12 z-10">
    <div
      className="absolute inset-0"
      style={{
        clipPath: direction === "left"
          ? "polygon(0 0, 100% 40%, 100% 100%, 0 60%)"
          : "polygon(0 40%, 100% 0, 100% 60%, 0 100%)",
        background: "linear-gradient(90deg, hsl(var(--glow-primary) / 0.06), hsl(var(--glow-cyan) / 0.04))",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        clipPath: direction === "left"
          ? "polygon(0 20%, 100% 50%, 100% 52%, 0 22%)"
          : "polygon(0 50%, 100% 20%, 100% 22%, 0 52%)",
        background: "linear-gradient(90deg, hsl(var(--glow-primary) / 0.15), hsl(var(--glow-cyan) / 0.1))",
      }}
    />
  </div>
);

/* ── Floating geometric clip shapes ── */
const FloatingShape = ({ className, clipPath, delay = 0 }: { className: string; clipPath: string; delay?: number }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    style={{ clipPath }}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      scale: [1, 1.03, 1],
    }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

/* ── Tilt card with mouse tracking ── */
const TiltClipCard = ({ children, className = "", clipPath }: { children: React.ReactNode; className?: string; clipPath: string }) => {
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
      style={{ rotateX, rotateY, clipPath, perspective: 800, transformStyle: "preserve-3d" }}
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

      {/* ═══ Hero with clip-path geometry ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-line opacity-12" />
        <div className="absolute inset-0 radial-fade" />

        {/* Floating geometric shapes */}
        <FloatingShape
          className="w-64 h-64 top-20 -right-16 bg-primary/[0.04]"
          clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
          delay={0}
        />
        <FloatingShape
          className="w-48 h-48 bottom-32 -left-12 bg-accent/[0.03]"
          clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
          delay={1.5}
        />
        <FloatingShape
          className="w-32 h-32 top-40 left-1/4 bg-primary/[0.03]"
          clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          delay={3}
        />

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
                {"Automações com IA que trabalham por você.".split(" ").map((word, i) => (
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
                Deixe a Inteligência Artificial cuidar das tarefas repetitivas enquanto você foca no crescimento do seu negócio. Automações 24/7, sem esforço manual.
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
                Quero automatizar meu negócio
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Right — Interactive clip-path showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: ease.smooth }}
            >
              <div className="relative grid grid-cols-2 gap-4">
                {/* Main large shape */}
                <TiltClipCard
                  clipPath="polygon(8% 0%, 100% 0%, 100% 92%, 0% 100%)"
                  className="col-span-2 glass-panel p-8 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">STATUS</p>
                      <p className="font-display text-foreground font-bold">Fluxo Ativo</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[85, 92, 78, 95, 88, 91, 97].map((v, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-primary/20 overflow-hidden"
                        style={{ height: 60 }}
                      >
                        <motion.div
                          className="w-full bg-primary/40 rounded-sm"
                          initial={{ height: 0 }}
                          animate={{ height: `${v}%` }}
                          transition={{ delay: 1 + i * 0.1, duration: 0.8, ease: ease.smooth }}
                          style={{ marginTop: `${100 - v}%` }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </TiltClipCard>

                {/* Bottom left */}
                <TiltClipCard
                  clipPath="polygon(0% 8%, 92% 0%, 100% 100%, 0% 100%)"
                  className="glass-panel p-6 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <p className="font-mono text-2xl font-bold text-gradient-primary">847</p>
                  <p className="text-xs text-muted-foreground mt-1">Mensagens enviadas hoje</p>
                </TiltClipCard>

                {/* Bottom right */}
                <TiltClipCard
                  clipPath="polygon(8% 0%, 100% 0%, 100% 100%, 0% 92%)"
                  className="glass-panel p-6 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-mono text-2xl font-bold text-gradient-primary">99.2%</p>
                  <p className="text-xs text-muted-foreground mt-1">Uptime da automação</p>
                </TiltClipCard>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-panel px-5 py-3 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs text-foreground">fluxo_ativo</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ClipDivider direction="left" />

      {/* ═══ Benefits Section ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-30" />

        {/* Decorative clipped background shape */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            clipPath: "polygon(0% 20%, 60% 0%, 100% 35%, 100% 80%, 40% 100%, 0% 65%)",
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
          }}
        />

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
              O que você ganha com <span className="text-gradient-primary">nossas automações.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Resultados reais que impactam diretamente a produtividade e a receita do seu negócio.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {benefits.map(({ icon: Icon, stat, title, desc, clipIdle, clipHover }, i) => (
              <motion.div key={title} variants={scaleItem}>
                <ClipCard index={i} className="card-elevated group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-mono text-2xl font-bold text-gradient-primary mb-2">{stat}</p>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </ClipCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ClipDivider direction="right" />

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
              Automação <span className="text-gradient-primary">sob medida.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Criamos automações personalizadas para sua empresa, com acompanhamento contínuo e integração com processos já existentes.
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
                <ClipCard
                  index={i}
                  className="card-elevated relative group h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-primary/50">0{i + 1}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">{label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </ClipCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlight box with clip-path */}
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-16 max-w-3xl mx-auto"
          >
            <TiltClipCard
              clipPath="polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)"
              className="glass-panel glow-border-primary p-8 text-center cursor-pointer"
            >
              <Bot className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-foreground font-display text-lg font-semibold mb-2">
                Automação feita para o seu negócio
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
                Não oferecemos soluções genéricas. Cada automação é desenhada e configurada especificamente para se conectar perfeitamente com a realidade da sua empresa.
              </p>
            </TiltClipCard>
          </motion.div>
        </div>
      </section>

      <ClipDivider direction="left" />

      {/* ═══ CTA Section ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-50" />

        {/* Decorative clipped shapes */}
        <FloatingShape
          className="w-80 h-80 -top-20 -right-20 bg-primary/[0.03]"
          clipPath="polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
          delay={2}
        />

        <div className="relative container mx-auto px-6">
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <TiltClipCard
              clipPath="polygon(1% 0%, 100% 2%, 99% 100%, 0% 98%)"
              className="glass-panel glow-border-primary p-12 md:p-16 text-center max-w-3xl mx-auto cursor-pointer"
            >
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Pare de perder tempo com tarefas manuais.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                Fale com nosso time e descubra como a IA pode revolucionar sua operação comercial.
              </p>
              <motion.a
                href="https://crm.loomiecrm.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                Quero automatizar agora
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {["Sem código necessário", "Integração em 48h", "Suporte dedicado"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </TiltClipCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automacoes;
