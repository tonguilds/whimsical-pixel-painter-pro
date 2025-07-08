import HeroSection from "@/components/HeroSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AboutProjectSection from "@/components/AboutProjectSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import InvestmentSection from "@/components/InvestmentSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-manrope">
      <HeroSection />
      <VisionMissionSection />
      <AboutProjectSection />
      <BusinessModelSection />
      <InvestmentSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default Index;
