import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Mail, Phone, Globe, Send, AtSign, Radio, Wifi, Share2, Rss, Bell } from "lucide-react";
import { wordStagger, wordReveal, blurUp, staggerContainer, scaleItem, ease, viewport } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";

const floatingIcons = [
  { Icon: Phone, x: "82%", y: "15%", size: 17, delay: 0, duration: 7 },
  { Icon: Globe, x: "90%", y: "28%", size: 20, delay: 1.2, duration: 8 },
  { Icon: Send, x: "75%", y: "48%", size: 15, delay: 0.5, duration: 6 },
  { Icon: AtSign, x: "93%", y: "58%", size: 19, delay: 2, duration: 7.5 },
  { Icon: Radio, x: "80%", y: "72%", size: 14, delay: 0.8, duration: 8.5 },
  { Icon: Wifi, x: "88%", y: "40%", size: 15, delay: 1.5, duration: 5.5 },
  { Icon: Share2, x: "72%", y: "25%", size: 17, delay: 3, duration: 6.5 },
  { Icon: Rss, x: "95%", y: "45%", size: 13, delay: 2.5, duration: 9 },
  { Icon: Bell, x: "78%", y: "82%", size: 15, delay: 1, duration: 6 },
  { Icon: MessageCircle, x: "68%", y: "62%", size: 12, delay: 3.5, duration: 7.5 },
  { Icon: Instagram, x: "92%", y: "18%", size: 14, delay: 0.3, duration: 7 },
  { Icon: Mail, x: "70%", y: "38%", size: 14, delay: 2.2, duration: 6.2 },
];

const orbitIcons = [
  { Icon: MessageCircle, delay: 0, speed: "animate-orbit" },
  { Icon: Instagram, delay: 5, speed: "animate-orbit-slow" },
  { Icon: Mail, delay: 10, speed: "animate-orbit-fast" },
];

const HeroSection = () => {
  const headline = "A Nova Estratégia.";
  const words = headline.split(" ");
  const { ref: parallaxRef, y: parallaxY } = useParallax({ speed: 0.12 });
  const { ref: blocksRef, y: blocksY } = useParallax({ speed: -0.08 });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-line opacity-15" />
      <div className="absolute inset-0 radial-fade" />

      {/* Floating convergence icons */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {floatingIcons.map(({ Icon, x, y, size, delay, duration }, i) => (
          <motion.div
            key={i}
            className="absolute glass-panel p-2.5"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0.1, 0.35, 0.1],
              y: [0, -14, 0],
              x: [0, i % 2 === 0 ? -8 : 8, 0],
              scale: [0.92, 1, 0.92],
            }}
            transition={{
              duration,
              delay: delay + 0.5,
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
        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
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

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-28">
        {/* Left: Text */}
        <div
          ref={parallaxRef}
          className="flex-1 flex flex-col items-start text-left gap-8"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          {/* Headline with word stagger */}
          <motion.h1
            variants={wordStagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.92] text-foreground"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with blur reveal */}
          <motion.p
            variants={blurUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed"
          >
            Unifique canais, automatize processos e escale receita recorrente — tudo em uma plataforma.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6, ease: ease.smooth }}
            className="flex gap-4"
          >
            <a href="https://crm.loomiecrm.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Começar agora
            </a>
            <button className="btn-secondary">
              Assistir demo
            </button>
          </motion.div>
        </div>

        {/* Right: Isometric glass composition */}
        <motion.div
          ref={blocksRef}
          initial={{ scale: 0.8, opacity: 0, rotate: -3 }}
          animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 1.4, ease: ease.smooth, delay: 0.3 }}
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
