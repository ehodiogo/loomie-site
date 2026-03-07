import { motion } from "framer-motion";
import { TrendingUp, Blocks, BadgeCheck, ArrowUpRight } from "lucide-react";
import useParallax from "@/hooks/use-parallax";

const partners = [
  { name: "IntegraPay", category: "Pagamentos", arr: "R$ 2.4M", badge: "Active" },
  { name: "ChatBot Pro", category: "Atendimento", arr: "R$ 1.8M", badge: "Active" },
  { name: "DataSync", category: "Analytics", arr: "R$ 960K", badge: "Growing" },
  { name: "FormBuilder", category: "Captação", arr: "R$ 1.2M", badge: "Active" },
  { name: "MailForce", category: "Email Marketing", arr: "R$ 780K", badge: "New" },
  { name: "APIConnect", category: "Integrações", arr: "R$ 540K", badge: "Growing" },
];

const PartnersSection = () => {
  const { ref: headerRef, y: headerY } = useParallax({ speed: 0.08 });

  return (
    <section id="partners" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-30" />

      <div className="relative container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
          style={{ transform: `translateY(${headerY}px)` }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs tracking-widest uppercase mb-4">
            Módulo 03
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight text-foreground">
            Construa receita recorrente no ecossistema.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-panel p-6 group hover:glow-border-primary transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Blocks className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-foreground">{partner.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="btn-sharp bg-primary text-primary-foreground glow-primary">
            Tornar-se Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
