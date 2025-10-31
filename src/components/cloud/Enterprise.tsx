import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Server, Lock, Crown } from "lucide-react";

export const Enterprise = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-card">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow-primary">
                    <Crown className="text-white" size={40} />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Loomie Private Server
                  </span>
                  <br />
                  Serviço Premium
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Para empresas que necessitam de <strong>100% de soberania de dados</strong> e 
                  controle total sobre a infraestrutura. O Loomie Private Server é hospedado 
                  diretamente no seu servidor, atendendo regulamentações específicas e 
                  necessidades extremas de segurança.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="text-center space-y-3 p-4 rounded-lg bg-background/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold text-primary">Soberania Total</p>
                  <p className="text-sm text-muted-foreground">Dados na sua infraestrutura, controle absoluto</p>
                </div>
                <div className="text-center space-y-3 p-4 rounded-lg bg-background/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Server className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold text-primary">Customização Ilimitada</p>
                  <p className="text-sm text-muted-foreground">Adaptado 100% às suas necessidades</p>
                </div>
                <div className="text-center space-y-3 p-4 rounded-lg bg-background/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Lock className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold text-primary">Segurança Máxima</p>
                  <p className="text-sm text-muted-foreground">Conformidade com regulamentações específicas</p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="cta" size="xl" asChild>
                  <a href="https://wa.me/5555996720480?text=Olá,%20preciso%20de%20um%20orçamento%20para%20o%20Loomie%20Private%20Server">
                    Solicitar Orçamento Personalizado
                  </a>
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground pt-4">
                Entre em contato com nossos especialistas para um orçamento personalizado baseado nas suas necessidades específicas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
