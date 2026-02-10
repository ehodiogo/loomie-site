const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-bold">
            Loomie<span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Loomie Growth Partner. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
