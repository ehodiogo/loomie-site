import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, ShieldCheck, Store, Key, ArrowRight, TrendingUp, Lock, Cpu } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const highlights = [
  { icon: Store, label: "Publique no Marketplace e ganhe por recorrência" },
  { icon: Lock, label: "Prompts e agentes criptografados (IP Shield)" },
  { icon: Key, label: "Gestão de credenciais Zero-Trust por cliente" },
];

const steps = [
  {
    icon: Code2,
    title: "Desenvolva seu Fluxo",
    desc: "Crie automações no n8n, Make ou qualquer ferramenta. Exponha via Webhook — sua lógica nunca sai do seu servidor.",
  },
  {
    icon: Cpu,
    title: "Publique como Produto",
    desc: "Transforme seu workflow em um Micro-SaaS listado no marketplace. Interface, billing e onboarding já estão prontos.",
  },
  {
    icon: TrendingUp,
    title: "Escale por Recorrência",
    desc: "Cada novo assinante gera MRR automático. Sem suporte técnico, sem calls de setup — o Loomie gerencia tudo.",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-25" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <span className="section-badge mb-4 inline-block">Developer Marketplace</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight text-foreground mt-4">
            Venda suas automações por recorrência.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Transforme seus melhores workflows em produtos SaaS. Distribuição, billing e proteção de IP — tudo integrado.
          </p>
        </motion.div>

        {/* Highlights row */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUpItem}
              className="flex items-center gap-3 glass-panel px-5 py-3"
            >
              <Icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card-elevated group relative"
            >
              <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/50">
                0{i + 1}
              </span>
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
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center"
        >
          <Link to="/partners" className="btn-primary">
            Explorar o Marketplace
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
