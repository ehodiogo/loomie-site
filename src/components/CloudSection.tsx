import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Database, Users, Zap, BarChart3, ArrowRight, Layers, GitMerge, Shield } from "lucide-react";
import { slideFromLeft, staggerContainer, fadeUpItem, scaleItem, viewport, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";

const metrics = [
  { label: "Leads Unificados", value: "12.4K", icon: Users },
  { label: "Taxa de Conversão", value: "34.8%", icon: BarChart3 },
  { label: "Tempo de Resposta", value: "< 2min", icon: Zap },
  { label: "Integrações Ativas", value: "48", icon: Database },
];

const features = [
  {
    icon: Layers,
    title: "Pipelines Visuais",
    desc: "Organize sua operação com quadros Kanban e pipelines customizáveis para cada etapa do funil.",
  },
  {
    icon: GitMerge,
    title: "Integrações Nativas",
    desc: "Conecte com WhatsApp, e-mail, redes sociais e mais de 40 ferramentas em um só lugar.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    desc: "Backup diário automático, criptografia e controle de acesso por equipe e nível.",
  },
];

const CloudSection = () => {
  const { ref: gridRef, y: gridY } = useParallax({ speed: -0.05 });

  return (
    <section id="cloud" className="relative py-28 lg:py-36 overflow-hidden">
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
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight text-foreground mt-4">
            O núcleo da sua operação comercial.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Centralize leads, gerencie pipelines e tome decisões baseadas em dados — tudo em uma plataforma intuitiva.
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
            Explorar o Cloud
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudSection;
