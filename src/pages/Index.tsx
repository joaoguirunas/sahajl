import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BannerQuote from "@/components/BannerQuote";
import AboutSection from "@/components/AboutSection";
import TransformationsSection from "@/components/TransformationsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sahaj Landell | Psicólogo e Terapeuta Corporal em Florianópolis</title>
        <meta name="description" content="Psicólogo com 19 anos de experiência, especialista em psicoterapia individual, terapia bioenergética e processos grupais. Atendimento em Florianópolis." />
        <meta property="og:title" content="Sahaj Landell | Psicólogo e Terapeuta Corporal em Florianópolis" />
        <meta property="og:description" content="Psicólogo com 19 anos de experiência, especialista em psicoterapia individual, terapia bioenergética e processos grupais. Atendimento em Florianópolis." />
        <meta property="og:url" content="https://sahajlandell.com.br" />
      </Helmet>
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
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
