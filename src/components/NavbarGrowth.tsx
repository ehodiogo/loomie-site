import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Benefits", href: "#value" },
  { label: "Data", href: "#data" },
  { label: "Tiers", href: "#tiers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <p className="font-display text-xl font-bold">
          Loomie<span className="text-primary">.</span>
        </p>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button variant="hero" size="sm" onClick={() => scrollTo("#tiers")}>
            Start Partnership
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 px-4 pb-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {l.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="w-full"
            onClick={() => scrollTo("#tiers")}
          >
            Start Partnership
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
