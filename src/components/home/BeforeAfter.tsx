import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

const beforeItems = [
  "Horas perdidas atualizando planilhas",
  "Oportunidades perdidas por falta de follow-up",
  "Erros manuais que custam dinheiro",
  "Dificuldade para saber o que está funcionando",
];

const afterItems = [
  "Processos que rodam sozinhos 24/7",
  "Cada lead é nutrido no momento certo",
  "Operação padronizada e com mitigação de falhas",
  "Decisões baseadas em dados reais",
];

export const BeforeAfter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-destructive/5 border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-destructive/20 p-2 rounded-lg">
                <X className="text-destructive" size={24} />
              </div>
              <h3 className="text-2xl font-bold">ANTES</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="text-destructive mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-success/5 border-success/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-success/20 p-2 rounded-lg">
                <Check className="text-success" size={24} />
              </div>
              <h3 className="text-2xl font-bold">DEPOIS</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-success mt-1 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="xl" className="animate-pulse-glow" asChild>
            <a href="https://wa.me/5555996720480?text=Olá,%20tenho%20interesse%20em%20uma%20automação%20para%20minha%20empresa">
              Automatizar Minha Empresa Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
