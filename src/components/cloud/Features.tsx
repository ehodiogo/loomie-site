import { Check } from "lucide-react";

export const Features = () => {
  const features = [
    "API Aberta em Todos os Planos",
    "Nó Nativo n8n para Automação Ilimitada",
    "Pipelines de Vendas 100% Flexíveis",
    "Pacotes Generosos de Usuários (sem taxa por usuário)",
    "Limites de API justos para escalar sua operação",
    "Backups Diários Automáticos",
    "Integração Omnicanal (WhatsApp, Telegram, etc.)",
    "Gestão e Agendamento de Tarefas",
    "Domínios Personalizados",
    "Assessoria Humanizada",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              A Caixa de Ferramentas Completa para sua{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Liberdade
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Check className="text-white" size={20} />
                </div>
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
