import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CloudSection from "@/components/CloudSection";
import AutomacoesSection from "@/components/AutomacoesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CloudSection />
      <AutomacoesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
