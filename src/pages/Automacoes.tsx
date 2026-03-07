import Header from "@/components/Header";
import AutomacoesSection from "@/components/AutomacoesSection";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";

const Automacoes = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <AutomacoesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Automacoes;
