import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AutomationHero } from "@/components/automation/AutomationHero";
import { AutomationFeatures } from "@/components/automation/AutomationFeatures";
import { ROICalculator } from "@/components/automation/ROICalculator";
import { SocialProof } from "@/components/automation/SocialProof";
import { LeadForm } from "@/components/automation/LeadForm";
import { FAQ } from "@/components/home/FAQ";

const Automations = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AutomationHero />
      <AutomationFeatures />
      <SocialProof />
      <ROICalculator />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Automations;
