import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PriceAnnouncement from "@/components/PriceAnnouncement";
import DemoSection from "@/components/DemoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <PriceAnnouncement />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
