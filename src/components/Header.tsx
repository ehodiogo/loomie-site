import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel-strong"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-foreground">
          Loomie<span className="text-gradient-primary">CRM</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Cloud", "Automações", "Partners"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground tracking-wider uppercase transition-colors duration-300 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-sharp bg-primary text-primary-foreground glow-primary"
        >
          Login
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
