import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CloudHero } from "@/components/cloud/CloudHero";
import { Problem } from "@/components/cloud/Problem";
import { Solution } from "@/components/cloud/Solution";
import { Trust } from "@/components/cloud/Trust";
import { Pricing } from "@/components/cloud/Pricing";
import { Features } from "@/components/cloud/Features";
import { Testimonials } from "@/components/cloud/Testimonials";
import { Enterprise } from "@/components/cloud/Enterprise";
import { FinalCTA } from "@/components/cloud/FinalCTA";

const LoomieCloud = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CloudHero />
      <Problem />
      <Solution />
      <Trust />
      <Pricing />
      <Features />
      <Testimonials />
      <Enterprise />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default LoomieCloud;
