import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail, Phone, Globe, Send, AtSign, Radio, Wifi, Share2, Rss, Bell } from "lucide-react";
import useParallax from "@/hooks/use-parallax";

const orbitIcons = [
  { Icon: MessageCircle, delay: 0, speed: "animate-orbit" },
  { Icon: Instagram, delay: 4, speed: "animate-orbit-slow" },
  { Icon: Mail, delay: 8, speed: "animate-orbit-fast" },
];

const floatingIcons = [
  { Icon: Phone, x: "85%", y: "18%", size: 18, delay: 0, duration: 6 },
  { Icon: Globe, x: "90%", y: "35%", size: 22, delay: 1.2, duration: 7 },
  { Icon: Send, x: "78%", y: "55%", size: 16, delay: 0.5, duration: 5.5 },
  { Icon: AtSign, x: "92%", y: "65%", size: 20, delay: 2, duration: 6.5 },
  { Icon: Radio, x: "82%", y: "78%", size: 14, delay: 0.8, duration: 7.5 },
  { Icon: Wifi, x: "88%", y: "45%", size: 16, delay: 1.5, duration: 5 },
  { Icon: Share2, x: "75%", y: "30%", size: 18, delay: 3, duration: 6 },
  { Icon: Rss, x: "95%", y: "50%", size: 14, delay: 2.5, duration: 8 },
  { Icon: Bell, x: "80%", y: "85%", size: 16, delay: 1, duration: 5.5 },
  { Icon: MessageCircle, x: "70%", y: "68%", size: 12, delay: 3.5, duration: 7 },
  { Icon: Instagram, x: "93%", y: "22%", size: 14, delay: 0.3, duration: 6.5 },
  { Icon: Mail, x: "72%", y: "42%", size: 15, delay: 2.2, duration: 5.8 },
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
  const { ref: parallaxRef, y: parallaxY } = useParallax({ speed: 0.15 });
  const { ref: blocksRef, y: blocksY } = useParallax({ speed: -0.1 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-line opacity-20" />
      <div className="absolute inset-0 radial-fade" />

      {/* Floating convergence icons — behind the blocks */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {floatingIcons.map(({ Icon, x, y, size, delay, duration }, i) => (
          <motion.div
            key={i}
            className="absolute glass-panel p-2.5 opacity-40"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.15, 0.45, 0.15],
              y: [0, -12, 0],
              x: [0, i % 2 === 0 ? -6 : 6, 0],
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="text-primary" size={size} />
          </motion.div>
        ))}
      </div>

      {/* Orbiting icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
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
        {/* Left: Text content with parallax */}
        <div
          ref={parallaxRef}
          className="flex-1 flex flex-col items-start text-left gap-8"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
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

        {/* Right: Isometric glass blocks with parallax */}
        <motion.div
          ref={blocksRef}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative w-full max-w-lg aspect-square z-[3]"
          style={{ transform: `translateY(${blocksY}px)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[85%] h-[20%] bottom-[15%] glass-panel glow-border-primary transform rotate-[-5deg] skew-x-[-5deg]" />
            <div className="absolute w-[55%] h-[35%] bottom-[28%] right-[15%] glass-panel border border-primary/20 transform rotate-[-3deg]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            </div>
            <div className="absolute w-[30%] h-[25%] bottom-[30%] left-[12%] glass-panel transform rotate-[2deg]">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/30 rounded-b-xl" />
            </div>
            <div className="absolute w-[40%] h-[30%] top-[18%] right-[20%] glass-panel glow-border-primary transform rotate-[-2deg]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 to-transparent" />
            </div>
            <div className="absolute w-[25%] h-[20%] top-[15%] left-[18%] glass-panel border border-primary/15 transform rotate-[3deg]" />
            <div className="absolute w-[20%] h-[15%] top-[25%] right-[12%] glass-panel transform rotate-[-4deg]">
              <div className="absolute inset-0 bg-primary/5" />
            </div>
            <div className="absolute w-3 h-3 rounded-full bg-primary/60 top-[30%] right-[30%] animate-pulse-glow blur-[2px]" />
            <div className="absolute w-2 h-2 rounded-full bg-primary/40 bottom-[35%] left-[25%] animate-pulse-glow blur-[1px]" style={{ animationDelay: '1.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
