import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { UseCases } from "@/components/home/UseCases";
import { Comparison } from "@/components/home/Comparison";
import { Implementation } from "@/components/home/Implementation";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <BeforeAfter />
      <UseCases />
      <Comparison />
      <Implementation />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
