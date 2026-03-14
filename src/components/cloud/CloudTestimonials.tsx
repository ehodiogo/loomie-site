import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/3d-testimonials";
import { blurUp, viewport } from "@/lib/animations";

const testimonials = [
  {
    name: "Carla Mendes",
    username: "@carla.mendes",
    body: "O Loomie Cloud mudou completamente nosso atendimento. Triplicamos as conversões em 2 meses!",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    role: "CEO, Agência Digital",
  },
  {
    name: "Rafael Oliveira",
    username: "@rafael.oli",
    body: "Finalmente consigo ver o que minha equipe está fazendo no WhatsApp. Transparência total.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    role: "Diretor Comercial",
  },
  {
    name: "Juliana Santos",
    username: "@ju.santos",
    body: "A automação dos funis é incrível. Nossos leads não escapam mais!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Gerente de Vendas",
  },
  {
    name: "Pedro Almeida",
    username: "@pedro.alm",
    body: "Extensão do Chrome facilitou demais a prospecção. Salvo contatos direto no CRM.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    role: "SDR Senior",
  },
  {
    name: "Mariana Costa",
    username: "@mari.costa",
    body: "Dashboard de performance nos ajudou a identificar gargalos que nem sabíamos que existiam.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    role: "Head de Operações",
  },
  {
    name: "Lucas Ferreira",
    username: "@lucas.fer",
    body: "O suporte é excepcional e a implementação foi super rápida. Recomendo!",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    role: "Fundador, StartupX",
  },
  {
    name: "Beatriz Lima",
    username: "@bea.lima",
    body: "Melhor CRM para WhatsApp que já usei. A integração omnichannel é perfeita.",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    role: "Coordenadora de CS",
  },
  {
    name: "Thiago Rocha",
    username: "@thiago.r",
    body: "A base de conhecimento para IA reduziu nosso tempo de resposta em 60%.",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    role: "CTO, TechBrasil",
  },
  {
    name: "Amanda Souza",
    username: "@amanda.sz",
    body: "Gestão de pipelines no Kanban é intuitiva e visual. Toda equipe adotou rápido.",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    role: "Líder de Vendas",
  },
];

function TestimonialCard({
  img,
  name,
  username,
  body,
  role,
}: (typeof testimonials)[number]) {
  return (
    <Card className="w-72 shrink-0 border-border/50 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {name}
            </p>
            <p className="text-xs text-muted-foreground truncate">{role}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </CardContent>
    </Card>
  );
}

const CloudTestimonials = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-20" />
      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-4 mb-4">
            Quem usa, <span className="text-gradient-primary">recomenda.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Veja o que nossos clientes dizem sobre o Loomie Cloud.
          </p>
        </motion.div>
      </div>

      <div className="relative h-[500px] w-full overflow-hidden [perspective:300px]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "translateX(-100px) rotateY(-10deg)" }}
        >
          <Marquee pauseOnHover vertical className="[--duration:25s]">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.username} {...t} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
            {testimonials.slice(3, 6).map((t) => (
              <TestimonialCard key={t.username} {...t} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:28s]">
            {testimonials.slice(6, 9).map((t) => (
              <TestimonialCard key={t.username} {...t} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:32s]">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.username + "-dup"} {...t} />
            ))}
          </Marquee>
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default CloudTestimonials;
