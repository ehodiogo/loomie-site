import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Delay to show banner after page load for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-card border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="hidden sm:block mt-1">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">
                  Este site utiliza cookies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Utilizamos cookies para melhorar sua experiência, analisar o
                  uso do site e personalizar conteúdo. Ao continuar navegando,
                  você concorda com nossa{" "}
                  <Link
                    to="/politica-de-privacidade"
                    className="text-primary hover:underline font-medium"
                  >
                    Política de Privacidade
                  </Link>{" "}
                  e{" "}
                  <Link
                    to="/termos-de-uso"
                    className="text-primary hover:underline font-medium"
                  >
                    Termos de Uso
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReject}
                className="flex-1 md:flex-none"
              >
                Recusar
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="flex-1 md:flex-none"
              >
                Aceitar
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="hidden md:flex"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
