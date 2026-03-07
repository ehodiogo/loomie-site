import Header from "@/components/Header";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";

const Partners = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <PartnersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
