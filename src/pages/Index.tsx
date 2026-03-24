import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PivotSection from "@/components/PivotSection";
import FeaturesSection from "@/components/FeaturesSection";
import MathSection from "@/components/MathSection";
import CloudSection from "@/components/CloudSection";
import PartnersSection from "@/components/PartnersSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="section-divider" />
      <PivotSection />
      <div className="section-divider" />
      <FeaturesSection />
      <div className="section-divider" />
      <MathSection />
      <div className="section-divider" />
      <CloudSection />
      <div className="section-divider" />
      <PartnersSection />
      <div className="section-divider" />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
