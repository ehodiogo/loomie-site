import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const CloudHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Otimize seu negócio com o{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              CRM que se adapta a você.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Crie seu processo, conecte qualquer app e cresça sua equipe sem medo da fatura.
          </p>

          <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
            Nossa API é <strong>100% aberta</strong> em todos os planos. Use nosso nó nativo n8n para 
            automatizar com qualquer aplicação. A flexibilidade que seu processo de vendas exige, 
            por um preço fixo e justo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="cta" size="xl" className="group text-lg px-12 shadow-glow" asChild>
              <a href="#pricing">
                Iniciar Teste Grátis de 14 Dias
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="text-lg px-12" asChild>
              <a href="#features">
                Conhecer a Plataforma
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Check size={16} className="text-success" />
            Não requer cartão de crédito. Liberdade total para testar.
          </p>

          {/* Visual Placeholder for GIF/Video */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-cta blur-3xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12">
              <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-8">
                    <div className="space-y-2">
                      <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p className="text-sm font-medium">Funil Customizável</p>
                    </div>
                    <div className="text-4xl animate-pulse">→</div>
                    <div className="space-y-2">
                      <div className="w-24 h-24 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🔗</span>
                      </div>
                      <p className="text-sm font-medium">Integração n8n</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    [Espaço para GIF/Vídeo demonstrativo]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
