import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Zap } from "lucide-react";

export const Trust = () => {
  const trustPoints = [
    {
      icon: Heart,
      title: "Uma interface que sua equipe vai amar usar",
      description: "Desenhamos uma interface limpa e um onboarding focado em resultados rápidos, garantindo a adoção que outros CRMs falham em entregar.",
    },
    {
      icon: Shield,
      title: "Segurança Zero Trust e 100% de Acordo com a LGPD",
      description: "Levamos seus dados a sério. Nossa arquitetura Zero Trust verifica tudo e nossos processos são desenhados para a privacidade desde o início, garantindo sua conformidade.",
    },
    {
      icon: Zap,
      title: "Flexibilidade Radical",
      description: "Seu processo é único. Seu CRM também deveria ser. O Loomie se molda às suas regras de negócio, com campos customizáveis e pipelines que se adaptam à sua operação — e não o contrário.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Construído para o Crescimento.
            </h2>
            <p className="text-xl text-muted-foreground">
              Sério, Seguro e Confiável.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 mx-auto">
                    <point.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-center text-lg">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
