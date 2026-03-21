import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { blurUp, staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const freelancerModel = {
  title: "Modelo de Projetos (Freelancer)",
  icon: XCircle,
  accent: "destructive",
  rows: [
    { label: "Ticket", value: "R$ 5.000", note: "Único" },
    { label: "Volume", value: "1 cliente", note: "Exige foco total" },
    { label: "Retenção", value: "Nula", note: "" },
    { label: "Resultado", value: "R$ 5.000", note: "O ciclo recomeça do zero" },
  ],
};

const loomieModel = {
  title: "Modelo Loomie (Micro-SaaS)",
  icon: CheckCircle2,
  accent: "primary",
  rows: [
    { label: "Ticket", value: "R$ 300/mês", note: "Assinatura" },
    { label: "Volume", value: "50 clientes", note: "Escala via infraestrutura" },
    { label: "Retenção", value: "Alta", note: "Depende da automação diária" },
    { label: "Resultado", value: "R$ 15.000 MRR", note: "Previsível e acumulativo" },
  ],
};

const MathSection = () => {
  return (
    <section id="math" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-30" />

      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="section-badge mb-4 inline-block">The Math</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-foreground mt-4">
            A Matemática da{" "}
            <span className="text-gradient-primary">Escala Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            O que constrói patrimônio sólido não é o ticket alto de um setup único — é o <span className="text-foreground font-semibold">MRR acumulado</span>.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Freelancer Card */}
          <motion.div variants={fadeUpItem} className="glass-panel p-8 border-destructive/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/40" />
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-destructive/70" />
              <h3 className="font-display text-lg font-bold text-foreground">{freelancerModel.title}</h3>
            </div>
            <div className="space-y-4">
              {freelancerModel.rows.map(({ label, value, note }) => (
                <div key={label} className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <div className="text-right">
                    <span className="font-mono text-sm font-bold text-foreground">{value}</span>
                    {note && <p className="text-xs text-muted-foreground/70">{note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Loomie Card */}
          <motion.div variants={fadeUpItem} className="glass-panel p-8 glow-border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60" />
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">{loomieModel.title}</h3>
            </div>
            <div className="space-y-4">
              {loomieModel.rows.map(({ label, value, note }) => (
                <div key={label} className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <div className="text-right">
                    <span className="font-mono text-sm font-bold text-gradient-primary">{value}</span>
                    {note && <p className="text-xs text-muted-foreground/70">{note}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-primary/10 text-center">
              <p className="font-mono text-2xl font-bold text-gradient-primary">3x mais receita</p>
              <p className="text-xs text-muted-foreground mt-1">com código centralizado e esforço diluído</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MathSection;
