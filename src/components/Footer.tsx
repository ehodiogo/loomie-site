import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { staggerContainer, fadeUpItem, viewport } from "@/lib/animations";

const footerLinks = [
  { label: "Cloud", to: "/cloud" },
  { label: "Automações", to: "/automacoes" },
  { label: "Partners", to: "/partners" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/loomiecrm", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/loomiecrm", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/loomiecrm", label: "Facebook" },
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
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUpItem} className="space-y-4">
            <p className="font-display text-xl font-bold text-foreground">
              Loomie<span className="text-gradient-primary">CRM</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Unifique canais, automatize processos e escale receita recorrente — tudo em uma plataforma.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
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

          {/* Dados da empresa */}
          <motion.div variants={fadeUpItem} className="space-y-4">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Empresa</p>
            <div className="flex flex-col gap-1.5 text-xs text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground/80">Loomie Tecnologia da Informação Ltda</p>
              <p>CNPJ: 63.101.386/0001-48</p>
              <p>R. Pais Leme, 215 — Conj. 1713</p>
              <p>Pinheiros, São Paulo — SP, 05424-150</p>
            </div>
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
