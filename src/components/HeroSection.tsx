import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail } from "lucide-react";

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
  const headline = "A Nova Estratégia.";
  const words = headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-line opacity-20" />
      <div className="absolute inset-0 radial-fade" />

      {/* Orbiting icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {orbitIcons.map(({ Icon, delay, speed }, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center ${speed}`}
              style={{ animationDelay: `${delay}s` }}
            >
              <div className="glass-panel p-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-24">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-start text-left gap-8">
          <motion.h1
            variants={wordStagger}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-foreground"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed"
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
            <button className="btn-sharp bg-secondary text-secondary-foreground">
              Assistir demo
            </button>
          </motion.div>
        </div>

        {/* Right: Isometric glass blocks visualization */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative w-full max-w-lg aspect-square"
        >
          {/* Layered isometric glass blocks */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Base platform */}
            <div className="absolute w-[85%] h-[20%] bottom-[15%] glass-panel glow-border-primary transform rotate-[-5deg] skew-x-[-5deg]" />
            {/* Mid blocks */}
            <div className="absolute w-[55%] h-[35%] bottom-[28%] right-[15%] glass-panel border border-primary/20 transform rotate-[-3deg]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            </div>
            <div className="absolute w-[30%] h-[25%] bottom-[30%] left-[12%] glass-panel transform rotate-[2deg]">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/30 rounded-b-xl" />
            </div>
            {/* Top blocks */}
            <div className="absolute w-[40%] h-[30%] top-[18%] right-[20%] glass-panel glow-border-primary transform rotate-[-2deg]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 to-transparent" />
            </div>
            <div className="absolute w-[25%] h-[20%] top-[15%] left-[18%] glass-panel border border-primary/15 transform rotate-[3deg]" />
            <div className="absolute w-[20%] h-[15%] top-[25%] right-[12%] glass-panel transform rotate-[-4deg]">
              <div className="absolute inset-0 bg-primary/5" />
            </div>
            {/* Accent glow orbs */}
            <div className="absolute w-3 h-3 rounded-full bg-primary/60 top-[30%] right-[30%] animate-pulse-glow blur-[2px]" />
            <div className="absolute w-2 h-2 rounded-full bg-primary/40 bottom-[35%] left-[25%] animate-pulse-glow blur-[1px]" style={{ animationDelay: '1.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
