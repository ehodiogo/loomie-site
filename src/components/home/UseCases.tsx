import { Card } from "@/components/ui/card";
import { Megaphone, Briefcase, MessageSquare, Settings } from "lucide-react";

const useCases = [
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Conecte formulários e redes sociais para nutrir leads automaticamente.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Briefcase,
    title: "Comercial",
    description: "Automatize o funil de vendas e organize seus contatos no CRM.",
    gradient: "from-secondary to-secondary-glow",
  },
  {
    icon: MessageSquare,
    title: "Atendimento 24/7",
    description: "Automatize seu WhatsApp para responder aos clientes a qualquer momento.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Settings,
    title: "Processos Internos",
    description: "Automatize tarefas administrativas, relatórios e comunicação entre departamentos.",
    gradient: "from-primary to-secondary",
  },
];

export const UseCases = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Automações para cada área do seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções personalizadas que se adaptam às suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-br ${useCase.gradient} text-white border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-2`}
              >
                <Icon size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-white/90">{useCase.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
