import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CloudSection from "@/components/CloudSection";
import AutomacoesSection from "@/components/AutomacoesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="section-divider" />
      <CloudSection />
      <div className="section-divider" />
      <AutomacoesSection />
      <div className="section-divider" />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
