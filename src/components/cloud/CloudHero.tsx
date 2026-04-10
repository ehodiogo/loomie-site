import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Instagram, Mail, Globe, MessageSquare } from "lucide-react";
import { wordStagger, wordReveal, blurUp, ease } from "@/lib/animations";
import { Marquee } from "@/components/ui/3d-testimonials";

const channels = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-400" },
  { name: "Instagram", icon: Instagram, color: "text-pink-400" },
  { name: "Widget", icon: Globe, color: "text-sky-400" },
  { name: "Email", icon: Mail, color: "text-amber-400" },
];

const leads = [
  { name: "Ana Costa", channel: 0, msg: "Quero saber mais sobre o plano Pro" },
  { name: "Carlos Mendes", channel: 1, msg: "Vi o anúncio, podem me ajudar?" },
  { name: "Fernanda Lima", channel: 2, msg: "Preciso de um orçamento urgente" },
  { name: "Rafael Souza", channel: 3, msg: "Gostaria de agendar uma demo" },
  { name: "Juliana Alves", channel: 0, msg: "Vocês atendem empresa grande?" },
  { name: "Pedro Martins", channel: 1, msg: "Quanto custa a integração?" },
  { name: "Mariana Rocha", channel: 2, msg: "Estou comparando com outro CRM" },
  { name: "Lucas Ferreira", channel: 3, msg: "Preciso migrar meus dados" },
  { name: "Beatriz Santos", channel: 0, msg: "Tem teste grátis disponível?" },
  { name: "Thiago Oliveira", channel: 1, msg: "Quero automatizar meu funil" },
  { name: "Camila Dias", channel: 2, msg: "Funciona com API oficial?" },
  { name: "Bruno Nunes", channel: 3, msg: "Preciso de suporte técnico" },
];

function LeadCard({ name, channel, msg }: { name: string; channel: number; msg: string }) {
  const ch = channels[channel];
  const Icon = ch.icon;
  return (
    <div className="glass-panel p-4 w-[220px] flex flex-col gap-2 shrink-0">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-primary">Novo lead</span>
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
      <p className="text-sm font-medium text-foreground truncate">{name}</p>
      <div className="flex items-center gap-1.5">
        <Icon className={`w-3.5 h-3.5 ${ch.color}`} />
        <span className="text-xs text-muted-foreground">{ch.name}</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 italic">"{msg}"</p>
    </div>
  );
}

const col1 = leads.slice(0, 4);
const col2 = leads.slice(4, 8);
const col3 = leads.slice(8, 12);

const CloudHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-12" />
      <div className="absolute inset-0 radial-fade" />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 items-center">
          {/* Left Column */}
          <div>
            <motion.span
              variants={blurUp}
              initial="hidden"
              animate="visible"
              className="section-badge mb-6 inline-block"
            >
              Cansado de perder leads no caos do WhatsApp?
            </motion.span>

            <motion.h1
              variants={wordStagger}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] text-foreground mb-6"
            >
              {"O CRM que escala com a sua inteligência, foque apenas nos seus resultados.".split(" ").map((word, i) => (
                <motion.span key={i} variants={wordReveal} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={blurUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8"
            >
              Gerencie vendas, automatize fluxos e centralize sua operação em uma única plataforma desenhada para o seu fluxo de trabalho. Do primeiro "Oi" ao fechamento, a Loomie Cloud coloca a gestão da sua equipe no piloto automático.
            </motion.p>

            <div className="flex flex-row gap-2 sm:gap-4 items-center">
              <motion.a
                href="https://crm.loomiecrm.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: ease.smooth }}
                className="btn-primary text-xs sm:text-base px-4 py-2.5 sm:px-7 sm:py-3.5"
              >
                Teste grátis agora
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
              <motion.a
                href="https://w.app/eawt9o"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: ease.smooth }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-base font-semibold bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Falar com especialista
              </motion.a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Implementação estratégica para novos parceiros</p>
          </div>

          {/* Right Column — Lead Marquee Kanban */}
          <motion.div
            className="relative h-[500px] lg:h-[550px] overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: ease.smooth }}
            style={{ perspective: "400px" }}
          >
            <div
              className="flex gap-4 h-full items-center justify-center"
              style={{ transform: "rotateY(-8deg) rotateX(2deg)" }}
            >
              <Marquee vertical pauseOnHover className="[--duration:22s] h-full" repeat={3}>
                {col1.map((l, i) => (
                  <LeadCard key={i} {...l} />
                ))}
              </Marquee>
              <Marquee vertical pauseOnHover reverse className="[--duration:26s] h-full" repeat={3}>
                {col2.map((l, i) => (
                  <LeadCard key={i} {...l} />
                ))}
              </Marquee>
              <Marquee vertical pauseOnHover className="[--duration:30s] h-full" repeat={3}>
                {col3.map((l, i) => (
                  <LeadCard key={i} {...l} />
                ))}
              </Marquee>
            </div>

            {/* Gradient masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudHero;
