import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layers, RefreshCw, BarChart3 } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: Monitor,
    title: 'Frontend para seu cliente',
    desc: 'Disponibilize uma interface profissional para seus clientes acessarem suas automações.',
    gradient: 'from-primary/80 to-accent/60',
  },
  {
    id: 2,
    icon: Layers,
    title: 'Centralize suas ferramentas',
    desc: 'Desenvolva muito mais rápido com tudo em um só lugar.',
    gradient: 'from-accent/70 to-primary/50',
  },
  {
    id: 3,
    icon: RefreshCw,
    title: 'Venda com recorrência',
    desc: 'Transforme suas automações em produtos com receita mensal previsível.',
    gradient: 'from-primary/60 to-primary/90',
  },
  {
    id: 4,
    icon: BarChart3,
    title: 'Métricas para seu cliente',
    desc: 'Entregue dashboards e relatórios que agregam valor ao seu produto.',
    gradient: 'from-accent/50 to-primary/70',
  },
];

const HeroBenefitsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex-1 w-full max-w-xl lg:max-w-none"
    >
      <div className="flex flex-row h-[420px] md:h-[480px] gap-2 rounded-2xl overflow-hidden">
        {benefits.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                flex: isActive ? 4 : 1,
                transition: 'flex 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }} />

              {/* Icon centered when collapsed */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: isActive ? 0 : 1 }}
              >
                <Icon className="w-6 h-6 text-primary-foreground/80" />
              </div>

              {/* Content when expanded */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/60 font-mono-metric text-xs tracking-wider uppercase">
                    0{item.id}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/75 text-sm leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeroBenefitsAccordion;
