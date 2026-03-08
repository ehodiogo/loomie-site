import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Mail, Phone, Globe, Send, AtSign, Radio, Wifi, Share2, Rss, Bell } from "lucide-react";
import { wordStagger, wordReveal, blurUp, ease } from "@/lib/animations";
import useParallax from "@/hooks/use-parallax";

/* Icons that orbit behind the glass composition */
const orbitingIcons = [
  { Icon: Phone, duration: 14, delay: 0, rx: 140, ry: 120, size: 17 },
  { Icon: Globe, duration: 18, delay: 1.5, rx: 160, ry: 140, size: 20 },
  { Icon: Send, duration: 12, delay: 3, rx: 120, ry: 110, size: 15 },
  { Icon: AtSign, duration: 16, delay: 4.5, rx: 150, ry: 130, size: 19 },
  { Icon: Radio, duration: 20, delay: 2, rx: 130, ry: 115, size: 14 },
  { Icon: Wifi, duration: 15, delay: 5, rx: 155, ry: 145, size: 15 },
  { Icon: Share2, duration: 13, delay: 6, rx: 135, ry: 120, size: 17 },
  { Icon: Rss, duration: 17, delay: 7, rx: 145, ry: 125, size: 13 },
  { Icon: Bell, duration: 19, delay: 3.5, rx: 170, ry: 150, size: 15 },
  { Icon: MessageCircle, duration: 11, delay: 8, rx: 125, ry: 110, size: 12 },
  { Icon: Instagram, duration: 16, delay: 1, rx: 150, ry: 135, size: 14 },
  { Icon: Mail, duration: 14, delay: 5.5, rx: 140, ry: 120, size: 14 },
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

      {/* ── Orbiting icons layer (z-[2], behind glass blocks at z-[3]) ── */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
        {/* Anchor orbit to the right-side glass composition area only */}
        <div
          className="absolute"
          style={{ left: "75%", top: "50%", width: 0, height: 0 }}
        >
          {orbitingIcons.map(({ Icon, duration, delay, rx, ry, size }, i) => (
            <motion.div
              key={i}
              className="absolute glass-panel p-2.5"
              style={{
                left: 0,
                top: 0,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.08, 0.35, 0.08],
                x: [
                  Math.cos(0) * rx,
                  Math.cos(Math.PI * 0.5) * rx,
                  Math.cos(Math.PI) * rx,
                  Math.cos(Math.PI * 1.5) * rx,
                  Math.cos(Math.PI * 2) * rx,
                ],
                y: [
                  Math.sin(0) * ry,
                  Math.sin(Math.PI * 0.5) * ry,
                  Math.sin(Math.PI) * ry,
                  Math.sin(Math.PI * 1.5) * ry,
                  Math.sin(Math.PI * 2) * ry,
                ],
                rotate: [0, 90, 180, 270, 360],
                scale: [0.85, 1.05, 0.85, 1.05, 0.85],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Icon className="text-primary" size={size} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-28">
        {/* Left: Text */}
        <div
          ref={parallaxRef}
          className="flex-1 flex flex-col items-start text-left gap-8 z-10"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
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

          <motion.p
            variants={blurUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed"
          >
            Unifique canais, automatize processos e escale receita recorrente — tudo em uma plataforma.
          </motion.p>

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

        {/* Right: Isometric glass composition (z-3, icons pass behind this) */}
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
