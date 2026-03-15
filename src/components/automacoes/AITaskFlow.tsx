import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CoreSpinLoader } from "@/components/ui/core-spin-loader";
import { CheckCircle2, Mail, Users, BarChart3, MessageCircle, Zap } from "lucide-react";

const completedTasks = [
  { icon: Mail, label: "E-mails de follow-up enviados", detail: "12 leads contactados" },
  { icon: Users, label: "Leads qualificados automaticamente", detail: "8 novos leads classificados" },
  { icon: BarChart3, label: "Relatório de performance gerado", detail: "Dashboard atualizado" },
  { icon: MessageCircle, label: "Respostas automáticas no WhatsApp", detail: "34 mensagens respondidas" },
  { icon: Zap, label: "Fluxos de automação otimizados", detail: "3 fluxos melhorados" },
];

export function AITaskFlow() {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsProcessing(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isProcessing) {
      const resetTimer = setTimeout(() => setIsProcessing(true), 8000);
      return () => clearTimeout(resetTimer);
    }
  }, [isProcessing]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        {isProcessing ? (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <p className="text-center text-sm font-semibold text-foreground mb-4 font-display">
              Agente IA processando...
            </p>
            <CoreSpinLoader />
          </motion.div>
        ) : (
          <motion.div
            key="completed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="space-y-3">
              {completedTasks.map(({ icon: Icon, label, detail }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="glass-panel p-4 rounded-xl flex items-start gap-3 glow-border-primary"
                  style={{ transformOrigin: "top center" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-foreground truncate">{label}</p>
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
