import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Sparkles } from "lucide-react";
import automationHero from "@/assets/automation-hero.jpg";

export const AutomationHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="flex flex-wrap gap-3">
              <span className="bg-gradient-cta text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <Sparkles size={16} />
                Assine agora e ganhe 3 meses de Loomie Cloud
              </span>
              <span className="bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 border border-destructive/20">
                <Clock size={16} />
                Restam apenas 3 vagas
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Automações com IA que{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                trabalham por você
              </span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Deixe a Inteligência Artificial cuidar das tarefas repetitivas enquanto você 
              foca no crescimento do seu negócio. Automações 24/7 sem esforço manual.
            </p>

            <Card className="p-6 bg-gradient-card border-primary/20">
              <h3 className="font-bold mb-4 text-lg">O que você ganha com nossas automações:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={20} />
                  <span><strong>Economia de até 15h/semana</strong> em tarefas manuais</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={20} />
                  <span><strong>Zero leads perdidos</strong> com follow-up automático inteligente</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={20} />
                  <span><strong>Respostas instantâneas</strong> aos seus clientes 24/7</span>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group animate-pulse-glow" asChild>
                <a href="#formulario">
                  Garantir Minha Vaga
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#como-funciona">Ver Como Funciona</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>3 empresas implementadas esta semana</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20 rounded-full"></div>
            <img
              src={automationHero}
              alt="Automações com IA"
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
