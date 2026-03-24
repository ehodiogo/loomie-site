import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Webhook, Terminal, ShieldCheck, ArrowRight, Server, Workflow, Lock } from "lucide-react";
import { slideFromLeft, staggerContainer, fadeUpItem, scaleItem, viewport } from "@/lib/animations";

const metrics = [
  { label: "API Oficial WhatsApp", value: "WA", icon: Terminal },
  { label: "Webhooks Ilimitados", value: "∞", icon: Webhook },
  { label: "Uptime Garantido", value: "99.9%", icon: Server },
  { label: "n8n Nativo", value: "Built-in", icon: Workflow },
];

const features = [
  {
    icon: Terminal,
    title: "Front-end como Serviço",
    desc: "Seu cliente interage com pipelines, painéis e formulários prontos. Você só entrega o payload via Webhook — sem construir UI.",
  },
  {
    icon: Workflow,
    title: "WhatsApp API + n8n",
    desc: "Conecte seus fluxos n8n à API Oficial do WhatsApp. Atendimento omnichannel com a lógica que você já domina.",
  },
  {
    icon: Lock,
    title: "Isolamento de Ambiente",
    desc: "Cada cliente opera em workspace isolado. Seus workflows, credenciais e dados nunca se misturam entre contas.",
  },
];

const CloudSection = () => {
  return (
    <section id="cloud" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-40" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <span className="section-badge mb-4 inline-block">Loomie Cloud</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight text-foreground mt-4">
            A infraestrutura que transforma seu script em produto.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Plugue seus workflows via Webhook. Nós entregamos a interface enterprise, o WhatsApp API e a gestão de usuários. Seu código roda no seu servidor — nós cuidamos do resto.
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

        {/* Features row */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6 mb-16"
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

        {/* CTA */}
        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Link to="/cloud" className="btn-secondary">
            Ver Documentação do Cloud
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudSection;
