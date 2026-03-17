import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, MessageCircle, Zap } from "lucide-react";
import { slideFromRight, staggerContainer, fadeUpItem, scaleItem, viewport, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";

const benefits = [
  { icon: Clock, stat: "15h/semana", title: "Economia de tempo", desc: "Elimine tarefas manuais repetitivas que drenam a produtividade da sua equipe." },
  { icon: MessageCircle, stat: "0 leads", title: "Zero leads perdidos", desc: "Follow-up automático garante que nenhuma oportunidade escape do seu funil." },
  { icon: Zap, stat: "24/7", title: "Respostas instantâneas", desc: "Seus clientes recebem respostas imediatas a qualquer hora, mantendo o engajamento alto." },
];

const stats = [
  { stat: "97%", desc: "Processos automatizados" },
  { stat: "3.2x", desc: "Aumento em produtividade" },
  { stat: "< 30s", desc: "Tempo de execução médio" },
];

const AutomacoesSection = () => {
  const { ref: statsRef, y: statsY } = useParallax({ speed: -0.04 });

  return (
    <section id="automações" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-scan-line" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 md:text-right md:ml-auto md:max-w-2xl"
        >
          <span className="section-badge mb-4 inline-block">Loomie Automações</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight text-foreground mt-4">
            Raio-X da sua eficiência.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg md:ml-auto">
            Deixe a IA cuidar das tarefas repetitivas enquanto você foca no crescimento. Automações 24/7, sem esforço manual.
          </p>
        </motion.div>

        {/* Benefits cards */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map(({ icon: Icon, stat, title, desc }) => (
            <motion.div key={title} variants={scaleItem}>
              <div className="card-elevated group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-mono text-2xl font-bold text-gradient-primary mb-2">{stat}</p>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap gap-12 mb-16 justify-center"
          style={{ transform: `translateY(${statsY}px)` }}
        >
          {stats.map(({ stat: s, desc }) => (
            <motion.div key={desc} variants={fadeUpItem} className="text-center">
              <p className="font-mono text-3xl md:text-4xl font-bold text-gradient-primary">{s}</p>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="md:text-right"
        >
          <Link to="/automacoes" className="btn-secondary">
            Ver automações
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomacoesSection;
