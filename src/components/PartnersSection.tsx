import { motion } from "framer-motion";
import { TrendingUp, Blocks, BadgeCheck, ArrowUpRight } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, cardHover, viewport } from "@/lib/animations";

const partners = [
  { name: "IntegraPay", category: "Pagamentos", arr: "R$ 2.4M", badge: "Active" },
  { name: "ChatBot Pro", category: "Atendimento", arr: "R$ 1.8M", badge: "Active" },
  { name: "DataSync", category: "Analytics", arr: "R$ 960K", badge: "Growing" },
  { name: "FormBuilder", category: "Captação", arr: "R$ 1.2M", badge: "Active" },
  { name: "MailForce", category: "Email Marketing", arr: "R$ 780K", badge: "New" },
  { name: "APIConnect", category: "Integrações", arr: "R$ 540K", badge: "Growing" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-25" />

      <div className="relative container mx-auto px-6">
        {/* Header — center-aligned blur-up */}
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20 text-center"
        >
          <span className="section-badge mb-4">Módulo 03</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight text-foreground mt-4">
            Construa receita recorrente no ecossistema.
          </h2>
        </motion.div>

        {/* Partner grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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

        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 text-center"
        >
          <a href="https://crm.loomiecrm.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Tornar-se Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
