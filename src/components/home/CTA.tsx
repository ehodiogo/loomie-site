import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Gift } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur-lg border-primary/20 shadow-glow-primary">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-cta px-4 py-2 rounded-full mb-4">
              <Gift className="text-secondary-foreground" size={20} />
              <span className="font-semibold text-secondary-foreground">
                Oferta Limitada - Primeiras 5 empresas
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para transformar sua operação?
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como a Loomie pode revolucionar 
              sua forma de trabalhar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="cta" size="xl" className="group animate-pulse-glow" asChild>
                <a href="https://wa.me/5555996720480?text=Olá,%20tenho%20interesse%20em%20uma%20automação%20para%20minha%20empresa">
                  Agendar Demonstração Gratuita
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
              <Clock size={16} />
              <span>Demonstração de 30 minutos • Sem compromisso</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
