import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blurUp, viewport } from "@/lib/animations";
import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Carla Mendes",
    body: "O Loomie Cloud mudou completamente nosso atendimento. Triplicamos as conversões em 2 meses!",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    role: "CEO, Agência Digital",
    metric: "+200%",
    metricLabel: "conversões",
  },
  {
    name: "Rafael Oliveira",
    body: "Finalmente consigo ver o que minha equipe está fazendo no WhatsApp. Transparência total.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    role: "Diretor Comercial",
    metric: "100%",
    metricLabel: "visibilidade",
  },
  {
    name: "Juliana Santos",
    body: "A automação dos funis é incrível. Nossos leads não escapam mais!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Gerente de Vendas",
    metric: "-40%",
    metricLabel: "leads perdidos",
  },
  {
    name: "Pedro Almeida",
    body: "Extensão do Chrome facilitou demais a prospecção. Salvo contatos direto no CRM.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    role: "SDR Senior",
    metric: "3x",
    metricLabel: "produtividade",
  },
  {
    name: "Mariana Costa",
    body: "Dashboard de performance nos ajudou a identificar gargalos que nem sabíamos que existiam.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    role: "Head de Operações",
    metric: "-60%",
    metricLabel: "tempo resposta",
  },
  {
    name: "Lucas Ferreira",
    body: "O suporte é excepcional e a implementação foi super rápida. Recomendo demais!",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    role: "Fundador, StartupX",
    metric: "24h",
    metricLabel: "implementação",
  },
];

const INTERVAL = 5000;

const CloudTestimonials = () => {
  const [active, setActive] = useState(0);
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    progress.set(0);
    const controls = animate(progress, 1, {
      duration: INTERVAL / 1000,
      ease: "linear",
    });

    const timer = setTimeout(next, INTERVAL);
    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, [active, next, progress]);

  const t = testimonials[active];

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

        {/* Testimonial Stage */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: 10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-8 md:p-12"
              style={{ perspective: "800px" }}
            >
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
                {/* Avatar + Info */}
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  >
                    <Avatar className="h-20 w-20 ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
                      <AvatarImage src={t.img} alt={t.name} />
                      <AvatarFallback className="text-xl">{t.name[0]}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="flex flex-col justify-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/90 leading-relaxed italic"
                  >
                    "{t.body}"
                  </motion.p>
                </div>

                {/* Metric */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
                  className="flex flex-col items-center justify-center glass-panel px-6 py-4 min-w-[100px]"
                >
                  <span className="text-2xl md:text-3xl font-extrabold text-primary font-mono">
                    {t.metric}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {t.metricLabel}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="glass-panel p-2 hover:bg-primary/10 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <button
                onClick={next}
                className="glass-panel p-2 hover:bg-primary/10 transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Dots + Progress */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>
              <div className="w-16 h-1 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudTestimonials;
