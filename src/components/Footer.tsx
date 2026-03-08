import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const footerLinks = [
  { label: "Cloud", to: "/cloud" },
  { label: "Automações", to: "/automacoes" },
  { label: "Partners", to: "/partners" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUpItem} className="space-y-4">
            <p className="font-display text-xl font-bold text-foreground">
              Loomie<span className="text-gradient-primary">CRM</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Unifique canais, automatize processos e escale receita recorrente — tudo em uma plataforma.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUpItem} className="space-y-4">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Navegação</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUpItem} className="space-y-4">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Comece agora</p>
            <a
              href="https://crm.loomiecrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Acessar plataforma
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <div className="section-divider mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Loomie CRM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
