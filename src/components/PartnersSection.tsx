import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Blocks, BadgeCheck, ArrowUpRight, ArrowRight, Handshake, ShieldCheck, BarChart3 } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, cardHover, viewport } from "@/lib/animations";

const partners = [
  { name: "IntegraPay", category: "Pagamentos", arr: "R$ 2.4M", badge: "Active" },
  { name: "ChatBot Pro", category: "Atendimento", arr: "R$ 1.8M", badge: "Active" },
  { name: "DataSync", category: "Analytics", arr: "R$ 960K", badge: "Growing" },
  { name: "FormBuilder", category: "Captação", arr: "R$ 1.2M", badge: "Active" },
  { name: "MailForce", category: "Email Marketing", arr: "R$ 780K", badge: "New" },
  { name: "APIConnect", category: "Integrações", arr: "R$ 540K", badge: "Growing" },
];

const highlights = [
  { icon: TrendingUp, label: "Comissão recorrente de até 6%" },
  { icon: ShieldCheck, label: "Suporte técnico dedicado Level 2" },
  { icon: BarChart3, label: "Dashboards de ROI para seus clientes" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-28 lg:py-36 overflow-hidden">
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
          <span className="section-badge mb-4 inline-block">Growth Partners</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight text-foreground mt-4">
            Construa receita recorrente no ecossistema.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Transforme sua agência em consultoria estratégica de vendas. Nós cuidamos da tecnologia — você foca na estratégia.
          </p>
        </motion.div>

        {/* Highlights row */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap justify-center gap-6 mb-16"
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

        {/* Partner grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeUpItem}
              whileHover={cardHover}
              className="card-elevated cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Blocks className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-foreground">{partner.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                {partner.category}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-primary" />
                  <span className="font-mono text-sm text-foreground">{partner.arr} ARR</span>
                </div>
                <span className="flex items-center gap-1 text-xs font-mono text-primary">
                  <BadgeCheck className="w-3 h-3" />
                  {partner.badge}
                </span>
              </div>
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
            Tornar-se Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
