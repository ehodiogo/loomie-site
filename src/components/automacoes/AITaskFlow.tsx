import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AILoader } from "@/components/ui/ai-loader";
import { CheckCircle2, Mail, Users, BarChart3, MessageCircle, Zap } from "lucide-react";

const loadingSteps = [
  "Analisando funil de vendas...",
  "Enviando mensagens para clientes...",
  "Qualificando novos leads...",
  "Gerando relatório de performance...",
  "Respondendo WhatsApp automaticamente...",
  "Otimizando fluxos de automação...",
];

const completedTasks = [
  { icon: Mail, label: "E-mails de follow-up enviados", detail: "12 leads contactados" },
  { icon: Users, label: "Leads qualificados automaticamente", detail: "8 novos leads classificados" },
  { icon: BarChart3, label: "Relatório de performance gerado", detail: "Dashboard atualizado" },
  { icon: MessageCircle, label: "Respostas automáticas no WhatsApp", detail: "34 mensagens respondidas" },
  { icon: Zap, label: "Fluxos de automação otimizados", detail: "3 fluxos melhorados" },
];

export function AITaskFlow() {
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [stepIndex, setStepIndex] = useState(0);
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cycle through loading steps, then switch to done
  useEffect(() => {
    if (phase !== "loading") return;

    if (stepIndex < loadingSteps.length - 1) {
      const t = setTimeout(() => setStepIndex((i) => i + 1), 1200);
      return () => clearTimeout(t);
    } else {
      // Last step shown, wait a beat then reveal results
      const t = setTimeout(() => setPhase("done"), 1400);
      return () => clearTimeout(t);
    }
  }, [phase, stepIndex]);

  // After showing results, reset cycle
  useEffect(() => {
    if (phase !== "done") return;
    cycleRef.current = setTimeout(() => {
      setStepIndex(0);
      setPhase("loading");
    }, 8000);
    return () => { if (cycleRef.current) clearTimeout(cycleRef.current); };
  }, [phase]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        {phase === "loading" ? (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center"
          >
            <AILoader size={120} text="Processando" />

            {/* Dynamic status message */}
            <div className="mt-6 h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stepIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-muted-foreground text-center"
                >
                  {loadingSteps[stepIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
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
