import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layers, RefreshCw, BarChart3 } from 'lucide-react';
import heroFrontend from '@/assets/hero-frontend.jpg';
import heroCentralize from '@/assets/hero-centralize.jpg';
import heroRecorrencia from '@/assets/hero-recorrencia.jpg';
import heroMetricas from '@/assets/hero-metricas.jpg';

const benefits = [
  {
    id: 1,
    icon: Monitor,
    title: 'Frontend para seu cliente',
    desc: 'Disponibilize uma interface profissional para seus clientes acessarem suas automações.',
    image: heroFrontend,
  },
  {
    id: 2,
    icon: Layers,
    title: 'Centralize suas ferramentas',
    desc: 'Desenvolva muito mais rápido com tudo em um só lugar.',
    image: heroCentralize,
  },
  {
    id: 3,
    icon: RefreshCw,
    title: 'Venda com recorrência',
    desc: 'Transforme suas automações em produtos com receita mensal previsível.',
    image: heroRecorrencia,
  },
  {
    id: 4,
    icon: BarChart3,
    title: 'Métricas para seu cliente',
    desc: 'Entregue dashboards e relatórios que agregam valor ao seu produto.',
    image: heroMetricas,
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
              {/* Background image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }} />

              {/* Icon centered when collapsed */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: isActive ? 0 : 1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white/90" />
                </div>
              </div>

              {/* Content when expanded */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/50 font-mono-metric text-xs tracking-wider uppercase">
                    0{item.id}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">
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
