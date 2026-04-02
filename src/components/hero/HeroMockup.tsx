import { motion } from "framer-motion";
import { ease, viewport } from "@/lib/animations";
import { Users, MessageSquare, TrendingUp, BarChart3, GripVertical } from "lucide-react";

const kanbanColumns = [
  {
    title: "Novos Leads",
    color: "bg-primary/20 border-primary/30",
    cards: [
      { name: "TechFlow LTDA", value: "R$ 1.200/mês", tag: "WhatsApp" },
      { name: "AutoBot Solutions", value: "R$ 800/mês", tag: "API" },
    ],
  },
  {
    title: "Em Negociação",
    color: "bg-accent/20 border-accent/30",
    cards: [
      { name: "DataSync Corp", value: "R$ 2.500/mês", tag: "n8n" },
    ],
  },
  {
    title: "Fechamento",
    color: "bg-primary/30 border-primary/40",
    cards: [
      { name: "CloudDev SA", value: "R$ 3.000/mês", tag: "Webhook" },
    ],
  },
];

const stats = [
  { icon: Users, label: "Leads", value: "247" },
  { icon: MessageSquare, label: "Mensagens", value: "1.8k" },
  { icon: TrendingUp, label: "Conversão", value: "34%" },
  { icon: BarChart3, label: "Pipeline", value: "R$ 42k" },
];

const HeroMockup = () => {
  return (
    <motion.div
      className="flex-1 w-full max-w-lg lg:max-w-xl relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.8, delay: 0.3, ease: ease.smooth }}
    >
      {/* Decorative glow */}
      <div className="absolute -inset-8 rounded-3xl opacity-30 blur-3xl bg-primary/20 pointer-events-none" />

      {/* Main Dashboard Card */}
      <motion.div
        className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-3 py-0.5 rounded-md bg-background/50 text-[10px] text-muted-foreground font-mono">
              crm.loomiecrm.com/kanbans
            </div>
          </div>
        </div>

        {/* Kanban Content */}
        <div className="p-3">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {stats.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                className="rounded-lg border border-border/30 bg-background/50 p-2 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              >
                <Icon className="w-3 h-3 text-primary mx-auto mb-1" />
                <div className="text-[11px] font-bold text-foreground">{value}</div>
                <div className="text-[8px] text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-3 gap-2">
            {kanbanColumns.map((col, ci) => (
              <motion.div
                key={col.title}
                className={`rounded-lg border p-2 ${col.color}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.8 + ci * 0.15, duration: 0.5 }}
              >
                <div className="text-[9px] font-semibold text-foreground mb-2 flex items-center gap-1">
                  <GripVertical className="w-2.5 h-2.5 text-muted-foreground" />
                  {col.title}
                  <span className="ml-auto text-[8px] text-muted-foreground">{col.cards.length}</span>
                </div>
                <div className="space-y-1.5">
                  {col.cards.map((card, i) => (
                    <motion.div
                      key={card.name}
                      className="rounded-md bg-background/70 border border-border/20 p-1.5"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ delay: 1 + ci * 0.15 + i * 0.1, duration: 0.4 }}
                    >
                      <div className="text-[9px] font-medium text-foreground truncate">{card.name}</div>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="text-[8px] text-primary font-semibold">{card.value}</span>
                        <span className="text-[7px] px-1 py-0.5 rounded bg-primary/10 text-primary">{card.tag}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Secondary floating card - Home Dashboard */}
      <motion.div
        className="absolute -bottom-6 -left-6 w-[55%] rounded-xl border border-border/50 bg-card/90 backdrop-blur-sm shadow-xl overflow-hidden"
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 1.2, ease: ease.smooth }}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-border/30 bg-muted/30">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-destructive/50" />
            <div className="w-2 h-2 rounded-full bg-accent/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
          </div>
          <span className="text-[8px] text-muted-foreground font-mono mx-auto">crm.loomiecrm.com/home</span>
        </div>
        <div className="p-2 space-y-1.5">
          <div className="text-[9px] font-semibold text-foreground">Visão Geral</div>
          {/* Mini chart bars */}
          <div className="flex items-end gap-1 h-8">
            {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-primary/40"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={viewport}
                transition={{ delay: 1.4 + i * 0.05, duration: 0.4 }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[7px] text-muted-foreground">
            <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroMockup;
