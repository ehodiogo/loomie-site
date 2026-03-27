import Header from "@/components/Header";
import WaitlistModal from "@/components/WaitlistModal";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight, CheckCircle2, Handshake, TrendingUp, ShieldCheck, BarChart3,
  Gauge, Clock, DollarSign, Blocks, Settings, LayoutGrid, CalendarDays,
  Rocket, Star, Crown, ArrowUpRight, ChevronRight,
  Code2, KeyRound, Lock, Store, Workflow, Terminal, ShoppingBag, RefreshCcw
} from "lucide-react";
import {
  wordStagger, wordReveal, blurUp, slideFromLeft, slideFromRight,
  staggerContainer, fadeUpItem, scaleItem, maskReveal, viewport, ease
} from "@/lib/animations";
import { Globe } from "@/components/ui/globe";
import useParallax from "@/hooks/use-parallax";

/* ── Data ── */
const benefits = [
  {
    icon: ShieldCheck,
    title: "Transparência para o Cliente",
    desc: "Entregue dashboards de ROI e volume de leads qualificados diretamente no CRM. Mostre o valor real do seu trabalho de marketing com dados confiáveis.",
  },
  {
    icon: TrendingUp,
    title: "Foco em High-Ticket",
    desc: "Pare de vender 'funcionalidades' e comece a vender 'estratégia de crescimento.' Posicione-se como consultor de alto valor, não revendedor de ferramenta.",
  },
  {
    icon: Handshake,
    title: "Suporte Técnico Dedicado",
    desc: "A Loomie atua como seu suporte Level 2 — cuidando de bugs, atualizações e infraestrutura para que você foque 100% em estratégia e vendas.",
  },
  {
    icon: BarChart3,
    title: "Decisões Baseadas em Dados",
    desc: "Métricas avançadas com visão Kanban e detecção de gargalos. Decisões baseadas em dados, não em achismos.",
  },
];

const stats = [
  { value: 32, suffix: "%", label: "Aumento na produtividade de vendas" },
  { value: 45, suffix: "%", label: "Redução no tempo de resposta a leads" },
  { value: 20, suffix: "%", label: "Crescimento médio de receita em 6 meses" },
];

const scaleFeatures = [
  {
    icon: Blocks,
    title: "Processos Únicos",
    desc: "Cada negócio é diferente. Nossa plataforma se adapta aos fluxos de trabalho exclusivos dos seus clientes — nunca o contrário.",
  },
  {
    icon: Settings,
    title: "Flexibilidade Total",
    desc: "Configure pipelines, automações e relatórios para qualquer metodologia de vendas ou segmento da indústria.",
  },
  {
    icon: LayoutGrid,
    title: "Organização Visual",
    desc: "Quadros Kanban, visualizações de calendário e workflows drag-and-drop mantêm as equipes dos seus clientes alinhadas e produtivas.",
  },
];

const plans = [
  {
    name: "Essential",
    desc: "Para equipes pequenas e negócios em validação",
    price: "R$ 169,90",
    features: ["5 Usuários Incluídos", "10.000 Contatos", "10 Pipelines", "Open API (100k req/dia)", "Node n8n Nativo", "Backup Diário (30 dias)"],
    popular: false,
  },
  {
    name: "Scale",
    desc: "O motor para empresas e agências em crescimento",
    price: "R$ 299,90",
    features: ["10 Usuários Incluídos", "50.000 Contatos", "20 Pipelines", "Open API (250k req/dia)", "Node n8n Nativo", "Backup Diário (60 dias)"],
    popular: true,
  },
  {
    name: "Pro",
    desc: "Para operações de alta performance",
    price: "R$ 599,90",
    features: ["25 Usuários Incluídos", "300.000 Contatos", "Pipelines Ilimitados", "Open API (500k req/dia)", "Node n8n Nativo", "Backup Diário (180 dias)"],
    popular: false,
  },
];

const tiersData = {
  loomie: [
    { name: "START", range: "0–10 clientes ativos", commission: "3%", rate: 0.03, icon: Rocket, popular: false },
    { name: "SCALE", range: "11–25 clientes ativos", commission: "5%", rate: 0.05, icon: Star, popular: true },
    { name: "PRO", range: "+26 clientes ativos", commission: "6%", rate: 0.06, icon: Crown, popular: false },
  ],
  partner: [
    { name: "START", range: "0–10 clientes ativos", commission: "7%", rate: 0.07, icon: Rocket, popular: false },
    { name: "SCALE", range: "11–25 clientes ativos", commission: "12%", rate: 0.12, icon: Star, popular: true },
    { name: "PRO", range: "+26 clientes ativos", commission: "16%", rate: 0.16, icon: Crown, popular: false },
  ],
};

/* ── Animated Counter ── */
const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  return (
    <motion.span
      className="font-mono text-5xl md:text-6xl font-bold text-gradient-primary"
      onViewportEnter={() => {
        animate(count, target, { duration: 2, ease: [0, 0, 0.2, 1] });
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {display}{suffix}
    </motion.span>
  );
};

/* ── Earnings Calculator ── */
const EarningsCalculator = ({ supportMode }: { supportMode: "loomie" | "partner" }) => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [clients, setClients] = useState(15);

  const planPrices = [169.9, 299.9, 599.9];
  const planNames = ["Essential", "Scale", "Pro"];

  const tiers = tiersData[supportMode];

  const getCommissionRate = (c: number) => {
    if (c <= 10) return tiers[0].rate;
    if (c <= 25) return tiers[1].rate;
    return tiers[2].rate;
  };

  const rate = getCommissionRate(clients);
  const earnings = Math.round(planPrices[selectedPlan] * clients * rate);
  const tierName = clients <= 10 ? "START" : clients <= 25 ? "SCALE" : "PRO";

  return (
    <div className="space-y-8">
      <div className="flex gap-3 justify-center flex-wrap">
        {planNames.map((name, i) => (
          <button
            key={name}
            onClick={() => setSelectedPlan(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedPlan === i
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {name}
            <span className="ml-2 font-mono text-xs opacity-70">R$ {planPrices[i].toFixed(2).replace(".", ",")}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-muted-foreground">Número de clientes</span>
          <span className="font-mono text-lg font-bold text-foreground">{clients}</span>
        </div>
        <input
          type="range"
          min={1}
          max={50}
          value={clients}
          onChange={(e) => setClients(Number(e.target.value))}
          className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
        />
        <div className="flex justify-between text-xs font-mono text-muted-foreground">
          <span>1</span>
          <span>50</span>
        </div>
      </div>

      <div className="glass-panel glow-border-primary p-8 text-center">
        <p className="text-sm text-muted-foreground mb-1">Ganhos mensais estimados</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={`${earnings}-${supportMode}`}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="font-mono text-4xl font-bold text-gradient-primary mb-2"
          >
            R$ {earnings.toLocaleString("pt-BR")}
          </motion.p>
        </AnimatePresence>
        <p className="text-xs text-muted-foreground">
          {clients} clientes • Plano {planNames[selectedPlan]} • Tier{" "}
          <span className="text-primary font-semibold">{tierName}</span> ({(rate * 100).toFixed(0)}%)
        </p>
      </div>
    </div>
  );
};

/* ── Commission Section with Toggle ── */
const CommissionSection = () => {
  const [supportMode, setSupportMode] = useState<"loomie" | "partner">("partner");
  const tiers = tiersData[supportMode];

  return (
    <>
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="glass-panel p-1.5 inline-flex gap-1 rounded-full">
          <button
            onClick={() => setSupportMode("loomie")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              supportMode === "loomie"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Loomie cuida do suporte
          </button>
          <button
            onClick={() => setSupportMode("partner")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              supportMode === "partner"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Você cuida do suporte
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={supportMode}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.25 }}
          className="text-center text-sm text-muted-foreground mb-10 max-w-lg mx-auto"
        >
          {supportMode === "loomie"
            ? "A Loomie cuida do suporte Tier 1 e treinamento dos seus clientes. Você foca em vendas e estratégia."
            : "Você assume o suporte Tier 1 e treinamento, e recebe comissões significativamente maiores."}
        </motion.p>
      </AnimatePresence>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Tiers */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={supportMode}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {tiers.map(({ name, range, commission, icon: Icon, popular }) => (
                <div
                  key={name}
                  className={`card-elevated flex items-center gap-5 ${popular ? "glow-border-primary" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-mono text-base font-bold text-foreground">{name}</h3>
                      {popular && <span className="section-badge text-[9px] py-0.5 px-2">Popular</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{range}</p>
                  </div>
                  <span className="font-mono text-2xl font-bold text-gradient-primary">{commission}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="text-xs text-muted-foreground text-center mt-4">
            * Taxa de reserva de infraestrutura de R$ 475,00 para partners com 0 clientes ativos.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="card-elevated"
        >
          <div className="flex items-center gap-3 mb-6">
            <Gauge className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-bold text-foreground">Calculadora de Ganhos</h3>
          </div>
          <EarningsCalculator supportMode={supportMode} />
        </motion.div>
      </div>
    </>
  );
};


const Partners = () => {
  useLenis();
  const { ref: statsRef, y: statsY } = useParallax({ speed: -0.03 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-line opacity-12" />
        <div className="absolute inset-0 radial-fade" />

        {/* Globe — full right side, absolute */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: ease.smooth }}
          className="hidden lg:block absolute top-0 bottom-0 right-0 w-[55%]"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Globe className="relative inset-auto w-full max-w-[700px]" />
          </div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-xl lg:max-w-[45%]">
            <motion.span
              variants={blurUp}
              initial="hidden"
              animate="visible"
              className="section-badge mb-6 inline-block"
            >
              Growth Partner
            </motion.span>

            <motion.h1
              variants={wordStagger}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.92] text-foreground mb-6"
            >
              {"Venda estratégia de alto valor. Nós cuidamos da tecnologia.".split(" ").map((word, i) => (
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
              Transforme sua agência de revendedora de ferramentas em consultoria estratégica de vendas high-ticket. Foque no que importa — nós cuidamos da infraestrutura.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: ease.smooth }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setWaitlistOpen(true)}
                className="btn-primary"
              >
                Entrar na lista de espera
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#benefits" className="btn-secondary">
                Ver Benefícios
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Benefits ═══ */}
      <section id="benefits" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-30" />
        <div className="relative container mx-auto px-6">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <span className="section-badge mb-4 inline-block">Por que ser Partner?</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
              Tudo para entregar <span className="text-gradient-primary">excelência em consultoria.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {benefits.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUpItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="card-elevated group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Stats ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div
          ref={statsRef}
          className="relative container mx-auto px-6"
          style={{ transform: `translateY(${statsY}px)` }}
        >
          <motion.div
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map(({ value, suffix, label }) => (
              <motion.div
                key={label}
                variants={scaleItem}
                className="text-center"
              >
                <AnimatedCounter target={value} suffix={suffix} />
                <p className="text-sm text-muted-foreground mt-3 max-w-[200px] mx-auto">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Built for Scale ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="relative container mx-auto px-6">
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <span className="section-badge mb-4 inline-block">Escalabilidade</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
              Construído para <span className="text-gradient-primary">escalar.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma plataforma que cresce com você e seus clientes.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {scaleFeatures.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUpItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="card-elevated group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Developers — Sell Automations ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-20" />
        {/* Floating code icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Code2, Terminal, Workflow, KeyRound, Lock].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute glass-panel p-2.5"
              style={{ right: `${8 + (i % 3) * 12}%`, top: `${8 + i * 16}%` }}
              animate={{
                opacity: [0.06, 0.2, 0.06],
                y: [0, -10, 0],
                rotate: [0, i % 2 === 0 ? 3 : -3, 0],
              }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            >
              <Icon className="text-primary" size={16} />
            </motion.div>
          ))}
        </div>

        <div className="relative container mx-auto px-6">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <span className="section-badge mb-4 inline-block">Para Desenvolvedores</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
              Venda suas automações <span className="text-gradient-primary">por recorrência.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Crie, publique e monetize automações no marketplace da Loomie. Defina seu preço e ganhe receita recorrente a cada cliente que utilizar.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                icon: Terminal,
                title: "API Completa do CRM",
                desc: "Faça qualquer tarefa dentro do CRM utilizando apenas a API. Crie, leia, atualize e delete — controle total via endpoints RESTful.",
                badge: "Full Access",
              },
              {
                icon: KeyRound,
                title: "Gerenciamento de Chaves",
                desc: "Não se preocupe em cobrar ou com vazamento de dados. A Loomie gerencia as chaves do seu cliente com total transparência de gastos — segurança zero-trust.",
                badge: "Zero-Trust",
              },
              {
                icon: Lock,
                title: "Prompt Criptografado",
                desc: "O prompt do seu agente é criptografado de ponta a ponta. Seu cliente utiliza a automação mas nunca terá acesso ao prompt ou à lógica proprietária.",
                badge: "E2E Encrypted",
              },
              {
                icon: Store,
                title: "Marketplace Integrado",
                desc: "Estipule o preço do seu projeto, publique no marketplace e distribua para milhares de clientes em poucos cliques. Receita recorrente automática.",
                badge: "Monetize",
              },
              {
                icon: Workflow,
                title: "Nó da Comunidade n8n",
                desc: "Integração nativa com n8n através do nó da comunidade Loomie. Conecte seus workflows com o ecossistema completo de automação.",
                badge: "n8n Native",
              },
              {
                icon: RefreshCcw,
                title: "Receita Recorrente",
                desc: "Cada automação vendida gera receita mensal passiva. Quanto mais clientes assinam, maior seu faturamento — sem esforço adicional.",
                badge: "Passive Income",
              },
            ].map(({ icon: Icon, title, desc, badge }) => (
              <motion.div
                key={title}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-elevated group relative"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Dev CTA */}
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 text-center"
          >
            <a
              href="https://crm.loomiecrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Começar a Vender Automações
              <Code2 className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Plans ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 radial-fade opacity-20" />
        <div className="relative container mx-auto px-6">
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <span className="section-badge mb-4 inline-block">Planos Loomie</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
              Planos que seus clientes <span className="text-gradient-primary">vão assinar.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quanto maior o plano, maior o valor entregue — e sua comissão.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {plans.map(({ name, desc, price, features, popular }) => (
              <motion.div
                key={name}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`card-elevated relative ${popular ? "glow-border-primary" : ""}`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="section-badge text-[10px]">Mais Popular</span>
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{name}</h3>
                <p className="text-xs text-muted-foreground mb-5">{desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-mono text-3xl font-bold text-foreground">{price}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <div className="space-y-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ Commission Tiers + Calculator ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="relative container mx-auto px-6">
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-10"
          >
            <span className="section-badge mb-4 inline-block">Comissões</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
              Cresça sua comissão <span className="text-gradient-primary">conforme escala.</span>
            </h2>
          </motion.div>

          {/* Toggle */}
          <CommissionSection />
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ CTA ═══ */}
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
              Pronto para se tornar um Growth Partner?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Junte-se ao ecossistema Loomie e comece a gerar receita recorrente com consultoria de alto valor.
            </p>
            <motion.a
              href="https://crm.loomiecrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Iniciar Parceria
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {["Onboarding assistido", "Materiais de vendas inclusos", "Suporte técnico dedicado"].map((item) => (
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

export default Partners;
