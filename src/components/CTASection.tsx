import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20primeiro%20atendimento.";

const ctaImage = "/cta-bg.jpg";

const CTASection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: "85vh" }}>
      {/* Background image — Ken Burns */}
      <img
        src={ctaImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center animate-zoom-slow"
      />

      {/* Gradient overlay — transparent at top, dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

      {/* Wave top — from warm-brown (Testimonials) */}
      <div className="absolute top-0 left-0 w-full leading-none z-10">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" style={{ fill: "hsl(var(--warm-brown))" }}>
          <path d="M0,0 C360,70 1080,0 1440,50 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Wave bottom — into foreground (Footer) */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" style={{ fill: "hsl(var(--foreground))" }}>
          <path d="M0,40 C360,0 1080,70 1440,30 L1440,70 L0,70 Z" />
        </svg>
      </div>

      {/* Content anchored at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-20">
        <div className="max-w-xl">

          <span className="flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase text-cream/90 mb-5" style={reveal(0)}>
            <span className="block h-px w-8 bg-cream/40" />
            Você chegou até aqui
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-cream leading-snug" style={reveal(150)}>
            E o caminho<br />começa com um passo.
          </h2>

          <p className="mt-4 text-sm font-sans text-cream/55 leading-relaxed max-w-sm" style={reveal(300)}>
            Não precisa saber para onde vai —<br />só precisa começar a andar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4" style={reveal(450)}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-9 py-4 text-sm font-sans font-medium text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:scale-[1.03] transition-all active:scale-[0.97]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.847L0 24l6.344-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.002-1.371l-.358-.213-3.768.892.952-3.67-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Quero dar esse passo
            </a>
            <span className="self-center text-xs font-sans text-cream/35 tracking-wide">
              Uma conversa inicial, sem compromisso
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
