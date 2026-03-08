import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, ShieldCheck } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport, ease } from "@/lib/animations";

const benefits = [
  {
    icon: TrendingUp,
    title: "Venda mais",
    desc: "Com funis personalizados e lembretes automáticos.",
  },
  {
    icon: Target,
    title: "Gerencie melhor",
    desc: "Saiba exatamente quem é seu melhor vendedor e onde o gargalo está acontecendo.",
  },
  {
    icon: ShieldCheck,
    title: "Automatize com segurança",
    desc: "Use nossa infraestrutura 100% Cloud e integrações nativas para ganhar escala sem aumentar o custo fixo.",
  },
];

const CloudCopy = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-20" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={blurUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Seu negócio não pode depender da{" "}
              <span className="text-gradient-primary">memória da sua equipe.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Você sente que leads estão "escorrendo pelas mãos"? Que o atendimento no WhatsApp é uma caixa preta onde você não sabe o que está sendo dito?
            </p>
            <p className="text-foreground text-lg font-semibold mt-4">
              O Loomie Cloud foi desenhado para empresários que cansaram do amadorismo.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUpItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="card-elevated text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
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
            <motion.a
              href="https://crm.loomiecrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Quero escalar meu atendimento agora
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudCopy;
