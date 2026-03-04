import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PriceAnnouncement from "@/components/PriceAnnouncement";
import DemoSection from "@/components/DemoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <LanguageSwitcher />
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <PriceAnnouncement />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
