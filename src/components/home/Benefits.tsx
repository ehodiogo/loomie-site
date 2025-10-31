import { Card } from "@/components/ui/card";
import { Bot, TrendingUp, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Leads sem se perder",
    description: "Captura automática de contatos que chegam pelo WhatsApp, Instagram e e-mail. Chega de planilhas!",
    color: "text-primary",
  },
  {
    icon: Bot,
    title: "Automações com IA",
    description: "Enviamos mensagens de boas-vindas, agendamos follow-ups e qualificamos leads para você.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "CRM Inteligente",
    description: "Tenha uma visão 360 do seu funil de vendas, saiba exatamente onde cada lead está e tome decisões estratégicas.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Trabalho em equipe",
    description: "Centralize a comunicação e as tarefas de sua equipe, garanta que todos os leads sejam atendidos e melhore sua produtividade.",
    color: "text-primary",
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Sua empresa merece operar no{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              piloto automático
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todas as ferramentas que você precisa para escalar suas vendas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <div className={`${benefit.color} mb-4`}>
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
