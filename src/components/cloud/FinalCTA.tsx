import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Sua empresa está pronta para a{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              verdadeira liberdade
            </span>
            ?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teste a plataforma completa do Loomie <strong>Crescimento</strong> por 14 dias. 
            Sinta a flexibilidade de um CRM adaptável e o poder de uma automação sem limites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="cta" size="xl" className="group text-lg px-12" asChild>
              <a href="https://wa.me/5555996720480?text=Olá,%20quero%20meu%20teste%20grátis%20de%2014%20dias%20no%20Loomie%20Cloud">
                Quero meu Teste Grátis de 14 Dias
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-success" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-success" />
              <span>Sem burocracia</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-success" />
              <span>Cancele a qualquer momento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
