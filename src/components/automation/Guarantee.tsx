import { Card } from "@/components/ui/card";
import { Check, Clock, HeadphonesIcon, Rocket, Shield } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de Resultados",
    description: "Se não economizar pelo menos 10h/semana em 60 dias, devolvemos seu investimento.",
  },
  {
    icon: Rocket,
    title: "Implementação Rápida",
    description: "Sistema funcionando em até 7 dias úteis. Começamos com quick wins imediatos.",
  },
  {
    icon: HeadphonesIcon,
    title: "Assessoria Dedicada",
    description: "Equipe exclusiva via WhatsApp, disponível em horário comercial.",
  },
  {
    icon: Clock,
    title: "Atualizações Incluídas",
    description: "Melhorias e novas funcionalidades sem custo adicional no primeiro ano.",
  },
];

export const Guarantee = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossa{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              garantia para você
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Investimento seguro com resultados garantidos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-hero bg-clip-text text-transparent mb-4 inline-block">
                  <Icon size={40} />
                </div>
                <h3 className="text-lg font-bold mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 max-w-3xl mx-auto bg-success/5 border-success/20">
          <div className="flex items-start gap-4">
            <Check className="text-success mt-1 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-bold mb-3">Garantia de Satisfação de 60 Dias</h3>
              <p className="text-muted-foreground mb-4">
                Estamos tão confiantes nos resultados que oferecemos uma garantia incondicional: 
                se você não economizar pelo menos 10 horas por semana com nossas automações nos 
                primeiros 60 dias, devolvemos 100% do seu investimento.
              </p>
              <p className="font-semibold text-success">
                Sem letras miúdas. Sem burocracias. Seu sucesso é nossa prioridade.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
