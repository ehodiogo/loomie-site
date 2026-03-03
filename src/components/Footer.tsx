const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm font-bold text-foreground">
          Loomie<span className="text-gradient-primary">CRM</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Loomie CRM. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
