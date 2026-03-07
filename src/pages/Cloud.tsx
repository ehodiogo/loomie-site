import Header from "@/components/Header";
import CloudSection from "@/components/CloudSection";
import Footer from "@/components/Footer";

const Cloud = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <CloudSection />
      </div>
      <Footer />
    </div>
  );
};

export default Cloud;
