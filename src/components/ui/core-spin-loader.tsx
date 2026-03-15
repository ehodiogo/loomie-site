'use client'

import React, { useState, useEffect } from 'react'

export function CoreSpinLoader() {
  const [loadingText, setLoadingText] = useState('Inicializando')

  useEffect(() => {
    const states = ['Carregando...', 'Buscando Dados..', 'Sincronizando...', 'Processando..', 'Otimizando...']
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % states.length
      setLoadingText(states[i])
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-8">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Base Glow */}
        <div className="absolute inset-0 rounded-full blur-xl animate-pulse bg-primary/15" />
        {/* Outer Dashed Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-[spin_10s_linear_infinite]" />
        {/* Main Arc */}
        <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-primary shadow-[0_0_6px_hsl(var(--primary)/0.5)] animate-[spin_2s_linear_infinite]" />
        {/* Reverse Arc */}
        <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-accent shadow-[0_0_6px_hsl(var(--accent)/0.4)] animate-[spin_3s_linear_infinite_reverse]" />
        {/* Inner Fast Ring */}
        <div className="absolute inset-5 rounded-full border border-transparent border-l-primary/60 animate-[spin_1s_ease-in-out_infinite]" />
        {/* Orbital Dot */}
        <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_4px_hsl(var(--primary)/0.9)]" />
        </div>
        {/* Center Core */}
        <div className="absolute w-2 h-2 rounded-full animate-pulse bg-primary shadow-[0_0_6px_hsl(var(--primary)/0.6)]" />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1 h-8 justify-center">
        <span
          key={loadingText}
          className="text-[10px] font-medium tracking-[0.3em] uppercase text-primary animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          {loadingText}
        </span>
      </div>
    </div>
  )
}
