import { motion } from "framer-motion";
import { Webhook, Code2, Package, ArrowRight } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const steps = [
  { icon: Code2, label: "Você escreve a lógica", desc: "n8n, Python, APIs — no seu servidor." },
  { icon: Webhook, label: "Plugue via Webhook", desc: "Conecte endpoints REST ao Loomie." },
  { icon: Package, label: "Nós entregamos o produto", desc: "Interface corporativa, gestão de usuários e billing." },
];

const PivotSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-30" />

      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="section-badge mb-4 inline-block">The Pivot</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-foreground mt-4">
            Sua Lógica no Back-end.{" "}
            <span className="text-gradient-primary">Nossa Infraestrutura</span> no Front-end.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            O Loomie atua como uma camada de infraestrutura ("Micro-SaaS as a Service"). Basta plugar seus fluxos via Webhook, e nós transformamos seu script em um produto de software pronto para o mercado.
          </p>
        </motion.div>

        {/* Flow steps */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col md:flex-row items-stretch gap-4 max-w-4xl mx-auto"
        >
          {steps.map(({ icon: Icon, label, desc }, i) => (
            <motion.div key={label} variants={fadeUpItem} className="flex-1 flex items-center gap-4">
              <div className="card-elevated flex-1 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-mono text-xs text-muted-foreground mb-1">Passo {i + 1}</p>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{label}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-primary/40 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PivotSection;
