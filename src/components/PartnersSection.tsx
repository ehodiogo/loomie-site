import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, TrendingUp, Store, ArrowRight, Percent, Users, ShieldCheck } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const highlights = [
  { icon: Percent, label: "Comissão recorrente de até 16% sobre a carteira ativa" },
  { icon: Store, label: "Publique automações no Marketplace e ganhe por assinatura" },
  { icon: ShieldCheck, label: "Proteção de IP — seus prompts e fluxos criptografados" },
];

const benefits = [
  {
    icon: Store,
    title: "Distribua no Marketplace",
    desc: "Publique sua automação como um produto 'As a Service'. Alcance uma base de usuários que já busca soluções prontas — sem prospecção.",
  },
  {
    icon: Percent,
    title: "Comissão Recorrente",
    desc: "Além do valor da automação, receba uma comissão mensal de até 16% com base na sua carteira de clientes ativos. Quanto mais retém, mais ganha.",
  },
  {
    icon: Users,
    title: "Gestão de Carteira",
    desc: "Acompanhe em tempo real quantos clientes ativos sua automação atende. Dashboard dedicado com MRR, churn e projeção de receita.",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-25" />

      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <span className="section-badge mb-4 inline-block">Growth Partners</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight text-foreground mt-4">
            Monetize suas automações e construa receita recorrente.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Distribua seus fluxos no marketplace, receba pelo uso e ganhe comissão mensal sobre toda a sua carteira de clientes ativos.
          </p>
        </motion.div>

        {/* Highlights */}
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

        {/* Benefits */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map(({ icon: Icon, title, desc }, i) => (
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

        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center"
        >
          <Link to="/partners" className="btn-primary">
            Tornar-se Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
