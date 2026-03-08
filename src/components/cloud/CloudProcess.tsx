import { motion } from "framer-motion";
import { Crosshair, PenTool, GraduationCap, LineChart } from "lucide-react";
import { slideFromLeft, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const steps = [
  {
    icon: Crosshair,
    step: "01",
    title: "Reunião Estratégica",
    desc: "Alinhamos os objetivos do seu negócio com as capacidades do Loomie.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Análise e Design de Funis",
    desc: "Mapeamos seu processo de vendas atual e criamos pipelines personalizados para sua realidade.",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Treinamento Hands-on",
    desc: "Capacitamos sua equipe para utilizar 100% do potencial da ferramenta desde o primeiro dia.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Otimização de Resultados",
    desc: "Acompanhamos os primeiros dados para ajustar processos e maximizar seu ROI.",
  },
];

const CloudProcess = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">Implementação</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
            O caminho para o <span className="text-gradient-primary">sucesso.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não apenas entregamos o software, nós construímos a sua máquina de vendas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-elevated relative group"
            >
              {/* Step number */}
              <span className="font-mono text-5xl font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                {step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CloudProcess;
