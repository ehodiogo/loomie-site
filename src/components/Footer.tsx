import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              loomie
            </div>
            <p className="text-muted-foreground text-sm">
              Implementamos um CRM poderoso e criamos automações com IA para que você venda mais.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/automacoes" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Automações
                </Link>
              </li>
              <li>
                <a href="/#porque" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Por que a Loomie?
                </a>
              </li>
              <li>
                <a href="/#implementacao" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Implementação
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#duvidas" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/5555996720480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Loomie. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
