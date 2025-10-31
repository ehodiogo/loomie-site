import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Loomie Cloud", href: "/loomie-cloud" },
    { name: "Documentação", href: "/documentacao" },
    { name: "Automações", href: "/automacoes" },
    { name: "Por que a Loomie?", href: "/#porque" },
    { name: "Implementação", href: "/#implementacao" },
    { name: "Dúvidas", href: "/#duvidas" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              loomie
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="hero" size="default" className="shadow-glow" asChild>
              <a href="/loomie-cloud">
                Loomie Cloud
              </a>
            </Button>
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="cta" size="lg" asChild>
              <a href="https://crm.loomiecrm.com" rel="noopener noreferrer">
                Login
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Button variant="hero" size="default" className="w-full shadow-glow" asChild>
              <a href="/loomie-cloud" onClick={() => setIsOpen(false)}>
                Loomie Cloud
              </a>
            </Button>
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a href="https://crm.loomiecrm.com" rel="noopener noreferrer">
                Login
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
