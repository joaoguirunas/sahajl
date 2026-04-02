import { useScrollReveal } from "@/hooks/useScrollReveal";

const BannerQuote = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative bg-primary pt-16 pb-24 px-8 md:px-16 overflow-hidden">

      {/* Aspas decorativas de fundo */}
      <span
        className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-[12rem] md:text-[16rem] leading-none text-primary-foreground/5 pointer-events-none select-none"
        aria-hidden
      >
        "
      </span>

      <div ref={ref} className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-8">

        {/* Frase principal — grande e em destaque */}
        <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground leading-snug">
          Você não precisa ter<br className="hidden md:block" /> tudo resolvido para começar.
        </p>

        {/* Separador */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <span className="flex-1 h-px bg-primary-foreground/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30" />
          <span className="flex-1 h-px bg-primary-foreground/20" />
        </div>

        {/* Frase complementar — menor, mais suave */}
        <p className="text-lg md:text-xl font-serif italic text-primary-foreground/70 leading-relaxed max-w-xl">
          Estou aqui para escutar o que ainda não<br className="hidden md:block" /> teve espaço para ser dito.
        </p>

      </div>

      {/* Wave to About */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" style={{ fill: "hsl(var(--background))" }}>
          <path d="M0,30 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>
    </section>
  );
};

export default BannerQuote;
