const heroImage = "https://sahajlandell.com.br/wp-content/uploads/2024/09/DSC02541-1-scaled.jpg";
const tagline = "Você não precisa passar por isso sem apoio";
const headline = "Reconecte-se consigo — e volte a sentir prazer em viver";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20primeiro%20atendimento.";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with Ken Burns */}
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-zoom-slow"
        style={{ transformOrigin: "center center", objectPosition: "65% 30%" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/30 to-foreground/90 md:bg-gradient-to-br md:from-foreground/65 md:via-foreground/40 md:to-foreground/10" />
      {/* Navbar readability — top strip */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-foreground/60 to-transparent" />

      {/* Content — fundo no mobile, centro no desktop */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-20 md:justify-center md:pb-0 px-6 md:px-16 lg:px-28 max-w-5xl">
        {/* Tagline */}
        <div className="hidden md:flex items-center gap-3 mb-4 md:mb-6 opacity-0 animate-fade-up">
          <span className="block h-px w-8 bg-cream/60" />
          <span className="text-[10px] md:text-sm font-sans tracking-[0.14em] md:tracking-[0.18em] uppercase text-cream/80">
            {tagline}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl md:text-5xl lg:text-[4.25rem] font-semibold leading-[1.1] text-cream max-w-3xl opacity-0 animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {headline}
        </h1>

        {/* CTA */}
        <div
          className="mt-8 md:mt-10 flex flex-col gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2.5 rounded-full bg-primary px-7 md:px-9 py-3.5 md:py-4 text-sm font-sans font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.847L0 24l6.344-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.002-1.371l-.358-.213-3.768.892.952-3.67-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Quero dar o primeiro passo
          </a>
          <span className="inline-flex items-center gap-2 text-xs font-sans text-cream/80 tracking-wide">
            <span className="block h-px w-5 bg-cream/50" />
            Uma conversa inicial, sem compromisso
          </span>
        </div>
      </div>

      {/* Scroll indicator — só desktop */}
      <div className="hidden md:flex absolute bottom-20 right-8 md:right-16 lg:right-28 z-10 flex-col items-center gap-2 opacity-60">
        <span className="text-cream text-[10px] font-sans tracking-[0.2em] uppercase rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="h-10 w-px bg-cream/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-cream animate-[slide_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Wave bottom */}

      <div className="absolute bottom-0 left-0 w-full z-10 leading-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ fill: "hsl(var(--primary))" }}>
          <path d="M0,70 C320,20 800,90 1440,45 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
