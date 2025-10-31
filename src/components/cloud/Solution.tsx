import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Link2, DollarSign } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: Sparkles,
      title: "FLEXIBILIDADE TOTAL",
      description: "Crie pipelines, campos e etapas que se adaptam 100% ao seu processo de vendas. O software se molda a você, não o contrário.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Link2,
      title: "CONECTIVIDADE RADICAL",
      description: "A API é aberta em todos os planos. Use nosso nó nativo n8n para orquestrar automações com qualquer aplicação, sem restrições. A liberdade de conectar é total.",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: DollarSign,
      title: "PREÇO FIXO E JUSTO",
      description: "Sem 'taxa por usuário'. Nossos planos incluem pacotes generosos de usuários por um valor fixo, permitindo que você cresça sua equipe sem medo.",
      gradient: "from-success to-success",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Loomie Cloud:{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Liberdade para Crescer
              </span>{" "}
              do Seu Jeito.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 hover:shadow-glow transition-all duration-300 overflow-hidden group">
                <div className={`h-1 bg-gradient-to-r ${solution.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${solution.gradient} text-white p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                      <solution.icon size={24} />
                    </div>
                    <CardTitle className="text-lg font-bold">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
