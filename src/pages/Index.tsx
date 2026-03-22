import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BannerQuote from "@/components/BannerQuote";
import AboutSection from "@/components/AboutSection";
import TransformationsSection from "@/components/TransformationsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BannerQuote />
      <div id="sobre">
        <AboutSection />
      </div>
      <TransformationsSection />
      <div id="servicos">
        <ServicesSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
