import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStart Solutions",
    content: "As automações da Loomie economizaram 20h por semana da minha equipe. O retorno sobre o investimento foi positivo em menos de 2 meses!",
    rating: 5,
  },
  {
    name: "Marina Costa",
    role: "Diretora Comercial, EduConnect",
    content: "Nunca mais perdemos um lead. O follow-up automático aumentou nossa conversão em 45%. Simplesmente transformador.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Founder, AgriTech Brasil",
    content: "Implementação rápida, assessoria excelente e resultados imediatos. Nossa operação está 100% automatizada agora.",
    rating: 5,
  },
];

const stats = [
  { value: "15+", label: "Empresas Atendidas" },
  { value: "95%", label: "Satisfação dos Clientes" },
  { value: "20h", label: "Economia/Semana" },
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Resultados{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              comprovados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas que já transformaram suas operações com a Loomie
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card border-border">
              <p className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
