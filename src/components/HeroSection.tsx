import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import heroPrisma from "@/assets/hero-prisma.png";

const orbitIcons = [
  { Icon: MessageCircle, delay: 0, speed: "animate-orbit" },
  { Icon: Instagram, delay: 4, speed: "animate-orbit-slow" },
  { Icon: Mail, delay: 8, speed: "animate-orbit-fast" },
];

const wordStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => {
  const headline = "Sua operação, em um único fôlego.";
  const words = headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid + radial */}
      <div className="absolute inset-0 grid-line opacity-30" />
      <div className="absolute inset-0 radial-fade" />

      {/* Orbiting icons around hero */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {orbitIcons.map(({ Icon, delay, speed }, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center ${speed}`}
              style={{ animationDelay: `${delay}s` }}
            >
              <div className="glass-panel p-3 rounded-sm">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-12 pt-24">
        {/* Prisma Hero */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <img
            src={heroPrisma}
            alt="Prisma de Convergência"
            className="w-full h-full object-contain animate-float"
          />
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>

        {/* Headline with word stagger */}
        <motion.h1
          variants={wordStagger}
          initial="hidden"
          animate="visible"
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={wordReveal} className="inline-block mr-3">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Unifique canais, automatize processos e escale receita recorrente — tudo em uma plataforma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-4"
        >
          <button className="btn-sharp bg-primary text-primary-foreground glow-primary">
            Começar agora
          </button>
          <button className="btn-sharp glass-panel text-foreground">
            Assistir demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
