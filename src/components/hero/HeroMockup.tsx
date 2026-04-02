import { motion } from "framer-motion";
import { ease, viewport } from "@/lib/animations";
import mockupDashboard from "@/assets/mockup-dashboard.jpg";
import mockupWorkflow from "@/assets/mockup-workflow.jpg";

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

      {/* Main card */}
      <motion.div
        className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-background/50 text-[10px] text-muted-foreground font-mono">
              app.loomie.com.br/pipeline
            </div>
          </div>
        </div>

        {/* Primary image */}
        <img
          src={mockupDashboard}
          alt="Loomie Cloud CRM Dashboard"
          className="w-full h-auto"
          width={1280}
          height={800}
        />
      </motion.div>

      {/* Secondary floating card */}
      <motion.div
        className="absolute -bottom-6 -left-6 w-[55%] rounded-xl border border-border/50 bg-card/90 backdrop-blur-sm shadow-xl overflow-hidden"
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.8, ease: ease.smooth }}
      >
        {/* Mini browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30 bg-muted/30">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-destructive/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-[8px] text-muted-foreground font-mono">workflow.loomie.com.br</span>
          </div>
        </div>
        <img
          src={mockupWorkflow}
          alt="Loomie Workflow Automation"
          className="w-full h-auto"
          loading="lazy"
          width={1280}
          height={800}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroMockup;
