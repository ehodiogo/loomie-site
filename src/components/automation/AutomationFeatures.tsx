import { Card } from "@/components/ui/card";
import { Bot, MessageSquare, Target, TrendingUp, Users, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Resposta Automática Inteligente",
    description: "IA que entende o contexto e responde seus clientes com naturalidade no WhatsApp, Instagram e e-mail.",
    metric: "Até 90% das mensagens respondidas automaticamente",
  },
  {
    icon: Target,
    title: "Qualificação Automática de Leads",
    description: "A IA analisa e classifica seus leads automaticamente, priorizando os mais quentes para sua equipe.",
    metric: "3x mais leads qualificados por dia",
  },
  {
    icon: Zap,
    title: "Follow-up que Nunca Falha",
    description: "Sistema inteligente que lembra de cada cliente no momento certo, com mensagens personalizadas.",
    metric: "40% mais conversões por follow-up",
  },
  {
    icon: Bot,
    title: "Agendamento Automático",
    description: "Clientes agendam reuniões direto pelo chat, sem intervenção manual. Integração com Google Calendar.",
    metric: "Economize 10h/semana em agendamentos",
  },
  {
    icon: TrendingUp,
    title: "Nutrição de Leads com IA",
    description: "Sequências de mensagens automáticas e personalizadas que educam e preparam o lead para compra.",
    metric: "Aumento de 60% na taxa de conversão",
  },
  {
    icon: Users,
    title: "Distribuição Inteligente",
    description: "Leads são automaticamente distribuídos para o vendedor certo, no momento certo.",
    metric: "Redução de 70% no tempo de primeira resposta",
  },
];

export const AutomationFeatures = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Automações que{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              realmente funcionam
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada automação foi projetada para resolver um problema real do seu dia a dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <div className="bg-gradient-hero bg-clip-text text-transparent mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-success">{feature.metric}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
