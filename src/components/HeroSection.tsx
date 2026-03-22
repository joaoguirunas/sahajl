import { useState, useEffect } from "react";
import heroSurf from "@/assets/hero-surf.jpg";
import heroMeditation from "@/assets/hero-surf-2.jpg";

const slides = [
  {
    image: heroSurf,
    tagline: "Psicoterapia é respiro da alma e do corpo",
    headline: "Desbloqueie seu potencial criativo e viva uma vida mais prazerosa e integrada",
  },
  {
    image: heroMeditation,
    tagline: "Psicoterapia é respiro da alma e do corpo",
    headline: "Resgate sua curiosidade e alegria na Vida",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ola!%20Estive%20em%20seu%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho.";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16 lg:px-24 max-w-5xl">
        <span className="mb-4 inline-block w-fit rounded-sm bg-foreground/30 px-5 py-2 text-sm font-sans tracking-wide text-cream backdrop-blur-sm opacity-0 animate-fade-up">
          {slide.tagline}
        </span>
        <h1
          key={current}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-cream max-w-3xl opacity-0 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          {slide.headline}
        </h1>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block w-fit rounded-sm bg-primary px-8 py-4 text-sm font-sans font-medium tracking-wide text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97] opacity-0 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          Agende uma entrevista
        </a>

        <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full border border-cream/60 transition-colors ${
                current === i ? "bg-cream" : "bg-transparent"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
