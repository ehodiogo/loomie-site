import { motion } from "framer-motion";
import { Shield, Monitor, Store, KeyRound } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const features = [
  {
    icon: Shield,
    title: "Proteção de IP (IP Shield)",
    desc: "Sua lógica, seus prompts e seus nós do n8n rodam no seu servidor. O Loomie consome apenas o payload via Webhook. O cliente final nunca toca na \"caixa preta\" do seu workflow.",
  },
  {
    icon: Monitor,
    title: "Interface Plug-and-Play",
    desc: "Entregue uma experiência Enterprise. O cliente loga no Loomie, insere dados, aciona a automação e visualiza os resultados em pipelines intuitivos — sem nunca ver uma tela de código.",
  },
  {
    icon: Store,
    title: "Marketplace Integrado",
    desc: "Publique sua automação como um produto \"As a Service\" direto no nosso ecossistema. Alcance uma base ativa de usuários que já buscam por soluções prontas.",
  },
  {
    icon: KeyRound,
    title: "Gestão Segura de API Keys",
    desc: "Centralize credenciais de clientes e tokens de integração de forma nativa e segura no CRM. Reduza o churn causado por falhas de autenticação.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="section-badge mb-4 inline-block">Features Estratégicas</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-foreground mt-4">
            Tudo que você precisa para escalar de{" "}
            <span className="text-gradient-primary">1 para 100</span> clientes.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
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
      </div>
    </section>
  );
};

export default FeaturesSection;
