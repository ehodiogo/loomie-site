import { Card } from "@/components/ui/card";
import { Search, Wrench, GraduationCap } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Diagnóstico e alinhamento",
    description: "Entendemos seus processos e dores, definindo o escopo do projeto.",
  },
  {
    number: "2",
    icon: Wrench,
    title: "Implementação",
    description: "Montamos o CRM e criamos as automações personalizadas.",
  },
  {
    number: "3",
    icon: GraduationCap,
    title: "Treinamento e assessoria completa",
    description: "Preparamos você e sua equipe para dominar a ferramenta e oferecemos assessoria contínua.",
  },
];

export const Implementation = () => {
  return (
    <section id="implementacao" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossa metodologia em{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              3 Passos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente para transformar sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow-primary">
                  {step.number}
                </div>
                <Icon className="text-primary mb-4 mt-4" size={40} />
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
