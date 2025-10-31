import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "A API aberta e o nó n8n são os diferenciais. Conectamos nosso financeiro, ERP e suporte. O Loomie virou o cérebro da nossa operação, não apenas um app de vendas.",
      author: "Carlos A.",
      role: "Diretor de TI",
      focus: "Flexibilidade/n8n",
    },
    {
      text: "Migramos de outro CRM. Nossa fatura caiu 70% e agora temos mais usuários. Finalmente um preço justo que apoia nosso crescimento sustentável.",
      author: "Juliana M.",
      role: "CEO",
      focus: "Custo/Crescimento",
    },
    {
      text: "A equipe inteira adotou o Loomie em uma semana. A interface é limpa e finalmente temos visibilidade de todas as nossas vendas. A assessoria foi incrível no processo.",
      author: "Marcos R.",
      role: "Gerente Comercial",
      focus: "UX/Adoção",
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Veja quem trocou as "jaulas" pela{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                liberdade de crescer
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
