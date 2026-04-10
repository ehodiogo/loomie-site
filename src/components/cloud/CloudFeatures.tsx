import { motion } from "framer-motion";
import { MessageCircle, BarChart3, Filter, BookOpen, Eye, Zap } from "lucide-react";
import { slideFromLeft, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const features = [
  {
    icon: MessageCircle,
    title: "Omnichannel de Verdade",
    desc: "Conecte WhatsApp (API Oficial e Não-Oficial), Instagram, Telegram, E-mail e Web Widget. Tudo em uma única tela de atendimento.",
  },
  {
    icon: Filter,
    title: "Gestão de Pipelines (Kanban)",
    desc: "Visualize seu processo de vendas de ponta a ponta. Organize tarefas, use tags personalizadas e nunca mais esqueça de um follow-up.",
  },
  {
    icon: BarChart3,
    title: "Dashboards de Performance",
    desc: "Acompanhe em tempo real a métrica dos vendedores: tempo de atendimento, taxa de conversão e ticket médio. O que não é medido, não é gerenciado.",
  },
  {
    icon: BookOpen,
    title: "Base de Conhecimento Integrada",
    desc: "Treine sua IA e equipe com informações centralizadas para automações muito mais inteligentes e assertivas.",
  },
  {
    icon: Eye,
    title: "Visibilidade Restrita e Controle de Equipe",
    desc: "Perfeito para gestores. Configure o que cada vendedor pode ver, garantindo a segurança dos dados e o foco nos próprios leads.",
  },
  {
    icon: Zap,
    title: "Gatilhos Automáticos",
    desc: "Crie ações inteligentes que trabalham por você 24/7, desde o primeiro contato até o fechamento.",
  },
];

const CloudFeatures = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-30" />
      <div className="relative container mx-auto px-6">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">Funcionalidades</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
            Tudo que você precisa. <span className="text-gradient-primary">Um só lugar.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conecte todos os seus canais, gerencie sua equipe e automatize processos em uma plataforma completa.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card-elevated group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-3">{title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CloudFeatures;
