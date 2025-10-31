import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Essencial",
      subtitle: "Para equipes pequenas e negócios em validação",
      price: isAnnual ? 141.58 : 169.90,
      originalPrice: isAnnual ? 169.90 : null,
      popular: false,
      features: [
        "5 Usuários Inclusos",
        "10.000 Contatos",
        "10 Pipelines",
        "API Aberta (100k req/dia)",
        "Nó Nativo n8n",
        "Backup Diário (Retenção 30d)",
      ],
    },
    {
      name: "Scale",
      subtitle: "O motor para empresas e agências em escala",
      price: isAnnual ? 249.92 : 299.90,
      originalPrice: isAnnual ? 299.90 : null,
      popular: true,
      features: [
        "10 Usuários Inclusos",
        "50.000 Contatos",
        "20 Pipelines",
        "API Aberta (250k req/dia)",
        "Nó Nativo n8n",
        "Backup Diário (Retenção 60d)",
      ],
    },
    {
      name: "Pro",
      subtitle: "Para operações de alta performance",
      price: isAnnual ? 499.92 : 599.90,
      originalPrice: isAnnual ? 599.90 : null,
      popular: false,
      features: [
        "25 Usuários Inclusos",
        "300.000 Contatos",
        "Pipelines Ilimitados",
        "API Aberta (500k req/dia)",
        "Nó Nativo n8n",
        "Backup Diário (Retenção 180d)",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Planos transparentes para um{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                crescimento sustentável
              </span>
            </h2>
          </div>

          {/* Toggle Annual/Monthly */}
          <div className="flex justify-center items-center gap-4">
            <span className={`font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Faturamento Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-success' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-8' : ''
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Faturamento Anual
            </span>
            {isAnnual && (
              <Badge variant="default" className="bg-success">
                2 meses grátis
              </Badge>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? 'border-2 border-primary shadow-glow-primary scale-105'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">
                    {plan.subtitle}
                  </CardDescription>
                  <div className="mt-6">
                    {plan.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        R$ {plan.originalPrice.toFixed(2)}
                      </p>
                    )}
                    <p className="text-5xl font-bold">
                      R$ {plan.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">/mês</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="text-success shrink-0 mt-0.5" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "cta" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="https://wa.me/5555996720480?text=Olá,%20quero%20iniciar%20meu%20teste%20grátis%20de%2014%20dias%20no%20Loomie%20Cloud">
                      Iniciar Teste Grátis
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
