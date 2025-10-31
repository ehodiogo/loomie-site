import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Gift, Shield } from "lucide-react";
import { useState } from "react";

export const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Cria mensagem para WhatsApp
    const message = `Olá! Vim através da Landing Page de Automações.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
Mensagem: ${formData.message}

Quero garantir minha vaga`;

    const whatsappUrl = `https://wa.me/5555996720480?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp!",
      description: "Você será atendido em instantes.",
    });

    // Limpa o formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id="formulario" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur-lg border-primary/20 shadow-glow-primary">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-cta px-4 py-2 rounded-full mb-4">
                <Gift size={20} className="text-secondary-foreground" />
                <span className="font-semibold text-secondary-foreground">
                  3 meses gratuitos Loomie Cloud - Últimas 3 Vagas
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Garanta sua vaga
              </h2>
              <p className="text-muted-foreground text-lg">
                Preencha o formulário e receba uma proposta personalizada em até 24h
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="João Silva"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="joao@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp *</Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(55) 99999-9999"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Conte-nos sobre seus principais desafios (opcional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ex: Perdemos muitos leads por falta de follow-up..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full group animate-pulse-glow"
              >
                Automatizar minha empresa agora
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-success" />
                  <span>Seus dados estão seguros</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Resposta em até 24h</span>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
