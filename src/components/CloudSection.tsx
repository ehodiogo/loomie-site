import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, BarChart3, Kanban, Radio, Webhook, ShieldCheck } from "lucide-react";
import { slideFromLeft, staggerContainer, fadeUpItem, scaleItem, viewport } from "@/lib/animations";

const metrics = [
  { label: "WhatsApp API Oficial", value: "WA", icon: MessageSquare },
  { label: "Canais Conectados", value: "Multi", icon: Radio },
  { label: "Pipelines Customizáveis", value: "Kanban", icon: Kanban },
  { label: "Dashboards em Tempo Real", value: "Live", icon: BarChart3 },
];

const features = [
  {
    icon: Radio,
    title: "Atendimento Omnichannel",
    desc: "WhatsApp (API Oficial), Instagram, e-mail e chat web em uma única caixa de entrada. Sem trocar de aba, sem perder contexto.",
  },
  {
    icon: Kanban,
    title: "Pipelines & Funis Visuais",
    desc: "Arraste leads entre etapas do funil com quadros Kanban. Visualize gargalos, priorize oportunidades e feche mais rápido.",
  },
  {
    icon: BarChart3,
    title: "Métricas que Vendem",
    desc: "Tempo de resposta, taxa de conversão, volume por canal. Dados concretos para provar ROI e justificar o valor do seu serviço.",
  },
  {
    icon: Webhook,
    title: "Webhooks & n8n Nativo",
    desc: "Conecte automações externas via Webhook. Integração nativa com n8n para criar fluxos ilimitados sem limite de complexidade.",
  },
  {
    icon: ShieldCheck,
    title: "Workspaces Isolados",
    desc: "Cada cliente opera em ambiente separado. Credenciais, dados e conversas nunca se misturam entre contas.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Respostas Rápidas",
    desc: "Configure fluxos de atendimento automatizado com gatilhos inteligentes. Reduza o tempo de primeira resposta para segundos.",
  },
];

const CloudSection = () => {
  return (
    <section id="cloud" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-40" />

      <div className="relative container mx-auto px-6">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <span className="section-badge mb-4 inline-block">Loomie Cloud</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight text-foreground mt-4">
            O CRM que escala seu atendimento e prova seu valor.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Pipelines visuais, WhatsApp API Oficial, múltiplos canais e dashboards de performance — tudo o que seu cliente precisa ver para nunca cancelar.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              variants={scaleItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card-elevated"
            >
              <Icon className="w-5 h-5 text-primary mb-4" />
              <p className="font-mono text-2xl md:text-3xl font-bold text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card-elevated group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Link to="/cloud" className="btn-secondary">
            Conhecer o Loomie Cloud
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudSection;
