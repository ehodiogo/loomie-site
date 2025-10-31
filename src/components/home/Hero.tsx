import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-crm.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="bg-gradient-cta text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Adquira uma automação e ganha 3 meses de Loomie Cloud!
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Menos tarefas,{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">Mais tempo,
            </span>{" "}
              Mais resultados.
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Implementamos um CRM poderoso e criamos automações com IA para que você venda mais, 
              perca menos tempo com tarefas repetitivas e nunca mais esqueça um cliente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="https://wa.me/5555996720480?text=Olá,%20tenho%20interesse%20em%20uma%20automação%20para%20minha%20empresa">
                  Agendar Demonstração Gratuita
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#beneficios">Ver Como Funciona</a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-success" size={20} />
                <span className="text-sm">Implementação em 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-success" size={20} />
                <span className="text-sm">Assessoria dedicada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-success" size={20} />
                <span className="text-sm">100% customizável</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-cta blur-3xl opacity-20 rounded-full"></div>
            <img src={heroImage} alt="Loomie CRM Dashboard" className="relative rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>;
};