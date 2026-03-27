import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";
import CloudHero from "@/components/cloud/CloudHero";
import CloudFeatures from "@/components/cloud/CloudFeatures";
import CloudCopy from "@/components/cloud/CloudCopy";
import CloudProcess from "@/components/cloud/CloudProcess";
import CloudPricing from "@/components/cloud/CloudPricing";
import CloudFAQ from "@/components/cloud/CloudFAQ";
import CloudCTA from "@/components/cloud/CloudCTA";
import CloudExtension from "@/components/cloud/CloudExtension";
import CloudTestimonials from "@/components/cloud/CloudTestimonials";

const Cloud = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CloudHero />
      <div className="section-divider" />
      <CloudFeatures />
      <div className="section-divider" />
      <CloudExtension />
      <div className="section-divider" />
      <CloudCopy />
      <div className="section-divider" />
      <CloudTestimonials />
      <div className="section-divider" />
      <CloudProcess />
      <div className="section-divider" />
      <CloudPricing />
      <div className="section-divider" />
      <CloudCTA />
      <div className="section-divider" />
      <CloudFAQ />
      <Footer />
    </div>
  );
};

export default Cloud;
