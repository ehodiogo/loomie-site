import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, Lock, TrendingUp } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: XCircle,
      title: "Processos Rígidos",
      subtitle: "Flexibilidade",
      description: "O funil é engessado e não se adapta à sua realidade. Você é forçado a mudar seu processo para caber no software.",
      color: "text-destructive",
    },
    {
      icon: Lock,
      title: "O 'Jardim Murado'",
      subtitle: "Conectividade",
      description: "A API é limitada ou vendida como um 'add-on' caríssimo, te prendendo a um único ecossistema.",
      color: "text-destructive",
    },
    {
      icon: TrendingUp,
      title: "O 'Imposto sobre Crescimento'",
      subtitle: "Custo",
      description: "Você contrata um novo vendedor e sua fatura dispara. Seu sucesso é punido com um custo imprevisível.",
      color: "text-destructive",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Seu CRM atual é uma <span className="text-destructive">jaula</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`${problem.color} bg-destructive/10 p-3 rounded-lg`}>
                      <problem.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{problem.subtitle}</p>
                      <CardTitle className="text-xl">{problem.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
