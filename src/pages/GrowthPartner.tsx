import Navbar from "@/components/NavbarGrowth";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import DataSection from "@/components/DataSection";
import LoomiePlans from "@/components/LoomiePlans";
import PartnershipTiers from "@/components/PartnershipTiers";
import VisualOrganization from "@/components/VisualOrganization";
import Footer from "@/components/FooterGrowth";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <DataSection />
      <VisualOrganization />
      <LoomiePlans />
      <PartnershipTiers />
      <Footer />
    </div>
  );
};

export default Index;
