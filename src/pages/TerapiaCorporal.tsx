import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Zap, HeartPulse, Wind, Waves, Activity, Layers } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20Terapia%20Bioenerg%C3%A9tica.";

const heroImg = "/bio-hero.jpg";
const methodImg =
  "https://sahajlandell.com.br/wp-content/uploads/2024/12/DSC03111-scaled.jpg";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const forWhom = [
  { key: "Vive no automático", text: "e sente que perdeu o fio de contato com você mesmo." },
  { key: "Corpo tenso ou adormecido", text: "algo pesado que está lá — mas não sabe de onde vem." },
  { key: "Ansiedade sem nome", text: "sente angústia sem conseguir nomear o que acontece dentro de você." },
  { key: "Longe do prazer", text: "perdeu o contato com a leveza, a alegria ou o próprio desejo." },
  { key: "Padrões que sempre se repetem", text: "situações mudam, a reação é a mesma — como se uma parte de você ainda vivesse no passado." },
];

const benefits = [
  {
    icon: Zap,
    title: "Mais energia e vitalidade",
    desc: "Ao liberar emoções presas, você para de gastar energia para segurá-las — e ela volta para a vida.",
  },
  {
    icon: HeartPulse,
    title: "Alívio da ansiedade e depressão",
    desc: "O corpo regula o sistema nervoso de dentro para fora. Quanto mais presente, menos refém do futuro ou do passado.",
  },
  {
    icon: Waves,
    title: "Reconexão com o prazer",
    desc: "Restaurar o fluxo de energia significa também restaurar a capacidade de sentir alegria, prazer e desejo.",
  },
  {
    icon: Wind,
    title: "Respiração e presença",
    desc: "A respiração é a porta de entrada. Aprender a respirar profundamente é aprender a habitar o próprio corpo.",
  },
];

const TerapiaCorporal = () => {
  const heroRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const forWhomRef = useReveal(0.05);
  const methodRef = useReveal();
  const benefitsRef = useReveal();
  const quoteRef = useReveal();


  useEffect(() => {
    const img = heroRef.current;
    const content = heroContentRef.current;
    if (!img || !content) return;
    setTimeout(() => {
      img.classList.add("hero-zoom");
      content.classList.add("hero-content-in");
    }, 80);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Terapia Corporal Bioenergética | Sahaj Landell</title>
        <meta name="description" content="Abordagem terapêutica que integra corpo e emoção pela bioenergética. Libere padrões presos, reduza a ansiedade e reconecte com sua vitalidade em Florianópolis." />
        <meta property="og:title" content="Terapia Corporal Bioenergética | Sahaj Landell" />
        <meta property="og:description" content="Abordagem terapêutica que integra corpo e emoção pela bioenergética. Libere padrões presos, reduza a ansiedade e reconecte com sua vitalidade em Florianópolis." />
        <meta property="og:url" content="https://sahajlandell.com.br/terapia-corporal-bioenergetica" />
      </Helmet>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <img
          ref={heroRef}
          src={heroImg}
          alt="Terapia Bioenergética"
          className="h-full w-full object-cover bio-hero-img"
          style={{ transformOrigin: "center center", transition: "transform 8s ease-out" }}
        />
        {/* gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.3) 60%, transparent 100%)" }} />

        <div
          ref={heroContentRef}
          className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-14 md:pb-20"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-cream leading-tight max-w-2xl">
            Antes de virar tensão,<br className="hidden md:block" /> era dor. Antes de ser dor,<br className="hidden md:block" /> era vida tentando passar.
          </h1>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="bg-background">
        <div ref={forWhomRef} className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 pt-16 pb-4 reveal-section">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
              <span className="block w-8 h-px bg-terracotta" />
              Para quem é
            </span>
            <h2 className="mt-4 text-2xl md:text-4xl font-serif font-semibold text-foreground leading-snug max-w-2xl">
              Você se reconhece<br className="hidden md:block" /> em alguma dessas frases?
            </h2>
          </div>

          {/* Items — editorial rows */}
          <div>
            {forWhom.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 md:gap-10 border-t border-border/50 py-6 md:py-7"
                style={{
                  opacity: 0,
                  animation: "slideInRow 0.5s ease forwards",
                  animationDelay: `${i * 90}ms`,
                }}
              >
                {/* Number — subtle terracotta */}
                <span
                  className="font-serif text-xs font-medium text-terracotta/50 flex-shrink-0 mt-1 w-5 text-right leading-none"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Text */}
                <div className="flex-1">
                  <p className="font-serif text-lg md:text-xl font-semibold text-foreground/80 leading-snug group-hover:text-foreground transition-colors duration-300">
                    {item.key}
                  </p>
                  <p className="mt-1.5 text-sm font-sans text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div className="border-t border-border/50 pt-7 pb-16">
              <p className="text-sm font-sans text-muted-foreground/60 italic leading-relaxed max-w-sm">
                Não precisa nomear o que sente. Só precisa perceber que algo não está bem — e que isso pode mudar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave to method */}
      <div className="relative bg-background leading-none -mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--warm-brown))" }}>
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── O QUE É A BIOENERGÉTICA ── */}
      <section className="relative bg-warm-brown py-20 px-8 md:px-16 lg:px-24 overflow-hidden">

        <div ref={methodRef} className="relative max-w-5xl mx-auto reveal-section">

          {/* ── Título centrado ── */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/40">
              <span className="block w-8 h-px bg-cream/30" />
              A abordagem
              <span className="block w-8 h-px bg-cream/30" />
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-serif font-semibold text-cream leading-snug">
              Onde as palavras não chegam,<br className="hidden md:block" /> o corpo fala.
            </h2>
          </div>

          {/* ── Conceito: dois fundadores ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 rounded-2xl overflow-hidden mb-16">
            {[
              {
                name: "Wilhelm Reich",
                label: "A origem",
                text: "Percebeu que emoções não processadas não desaparecem — elas se instalam no corpo como tensão muscular crônica. Chamou isso de couraça caracterológica: camadas de proteção que o corpo constrói para sobreviver à dor.",
              },
              {
                name: "Alexander Lowen",
                label: "A bioenergética",
                text: "Desenvolveu esse trabalho criando um método que usa movimento, respiração e contato com o próprio corpo para desfazer essas armaduras e restaurar o fluxo natural de energia. Bioenergética significa energia da vida.",
              },
            ].map((f, i) => (
              <div
                key={f.name}
                className="bg-cream/5 px-8 py-8 md:py-10 flex flex-col gap-4"
                style={{
                  opacity: 0,
                  animation: "slideInRow 0.55s ease forwards",
                  animationDelay: `${i * 150}ms`,
                }}
              >
                <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-terracotta/80">{f.label}</span>
                <p className="text-xl md:text-2xl font-serif font-semibold text-cream leading-snug">{f.name}</p>
                <span className="block w-10 h-px bg-cream/20" />
                <p className="text-sm font-sans text-cream/60 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>

          {/* ── Como funciona: 3 passos em fluxo visual ── */}
          <div className="text-center mb-10">
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/30">Como funciona</span>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">

            {/* Connecting line — animated draw + traveling dot */}
            <div
              className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px overflow-visible"
              aria-hidden
            >
              {/* track */}
              <div className="absolute inset-0 bg-cream/[0.08]" />
              {/* animated draw */}
              <div className="line-draw absolute inset-0 bg-gradient-to-r from-terracotta/50 via-cream/25 to-terracotta/50" />
              {/* traveling dot */}
              <div className="line-dot absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full" style={{ background: "hsl(var(--terracotta))", boxShadow: "0 0 8px 2px hsl(var(--terracotta)/0.5)" }} />
            </div>

            {[
              { Icon: Wind,     title: "Respiração",  text: "A respiração consciente ativa o sistema nervoso e abre o corpo para sentir o que estava bloqueado." },
              { Icon: Activity, title: "Movimento",   text: "Exercícios sincronizados com a respiração permitem que a emoção se mova e saia do lugar onde estava presa." },
              { Icon: Layers,   title: "Integração",  text: "O que foi sentido é integrado com presença. Não catarse — transformação real e duradoura." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-4"
                style={{
                  opacity: 0,
                  animation: "slideInRow 0.5s ease forwards",
                  animationDelay: `${i * 140 + 250}ms`,
                }}
              >
                {/* Circle with icon */}
                <div
                  className="step-icon relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
                  style={{ background: "hsl(var(--warm-brown))", border: "1px solid hsl(var(--cream)/0.18)" }}
                >
                  <item.Icon className="w-6 h-6 text-cream/70" strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-base font-serif font-semibold text-cream mb-2">{item.title}</p>
                  <p className="text-sm font-sans text-cream/55 leading-relaxed max-w-[220px] mx-auto">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave back to background */}
      <div className="relative leading-none -mb-px" style={{ background: "hsl(var(--warm-brown))" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
          <path d="M0,40 C480,0 960,60 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── BENEFÍCIOS ── */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={benefitsRef} className="max-w-5xl mx-auto reveal-section">

          {/* Asymmetric layout: sticky label left + items right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">

            {/* Left — sticky anchor */}
            <div className="md:sticky md:top-24">
              <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
                <span className="block w-8 h-px bg-terracotta" />
                O que pode mudar
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-foreground leading-snug">
                Quando o corpo se solta, tudo ao redor muda também.
              </h2>
              <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed">
                Não são promessas. São os movimentos naturais que acontecem quando a emoção encontra passagem.
              </p>
            </div>

            {/* Right — benefit rows */}
            <div>
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 border-t border-border/40 py-7"
                  style={{
                    opacity: 0,
                    animation: "slideInRow 0.5s ease forwards",
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "hsl(var(--terracotta)/0.08)" }}>
                    <b.icon className="w-4 h-4 text-terracotta" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="font-serif text-lg font-semibold text-foreground leading-snug group-hover:text-foreground transition-colors duration-200">
                      {b.title}
                    </p>
                    <p className="mt-1.5 text-sm font-sans text-muted-foreground leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-border/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="relative bg-primary py-20 px-8 md:px-16 overflow-hidden">
        {/* Decorative quote mark — floating */}
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[12rem] md:text-[16rem] leading-none text-primary-foreground/5 pointer-events-none select-none animate-float"
          aria-hidden
        >
          "
        </span>

        {/* Soft radial glow behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--primary-foreground)/0.04) 0%, transparent 70%)",
            animation: "breathe 5s ease-in-out infinite",
          }}
        />

        <div ref={quoteRef} className="relative max-w-2xl mx-auto text-center reveal-section">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-primary-foreground leading-relaxed">
            "O corpo não mente. Ele guarda a história que você ainda não contou — e espera que alguém o escute."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className="flex-1 h-px max-w-[80px]"
              style={{ background: "hsl(var(--primary-foreground)/0.2)", animation: "expand 3s ease-in-out infinite alternate" }}
            />
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "hsl(var(--primary-foreground)/0.4)", animation: "breathe 3s ease-in-out infinite" }}
            />
            <span
              className="flex-1 h-px max-w-[80px]"
              style={{ background: "hsl(var(--primary-foreground)/0.2)", animation: "expand 3s ease-in-out infinite alternate-reverse" }}
            />
          </div>
          <p className="mt-5 text-sm font-sans text-primary-foreground/50">Alexander Lowen</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden h-[70vh] md:h-[80vh] bg-foreground">
        {/* Background image — full visible */}
        <img
          src={methodImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />

        {/* Gradient: dark at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.5) 35%, transparent 65%)",
          }}
        />

        {/* Wave top — connects from primary section above */}
        <div className="absolute top-0 left-0 w-full leading-none z-10">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" style={{ fill: "hsl(var(--primary))" }}>
            <path d="M0,35 C480,0 960,70 1440,30 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* Content anchored bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-20">
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-cream leading-tight max-w-xl">
            Pronto para ouvir o que seu corpo tem a dizer?
          </p>
          <p className="mt-4 text-sm font-sans text-cream/60 leading-relaxed max-w-sm">
            Uma conversa inicial, sem compromisso. Apenas para entender se faz sentido para o seu momento.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-sans font-medium text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.847L0 24l6.344-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.002-1.371l-.358-.213-3.768.892.952-3.67-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Quero conversar sobre isso
          </a>
        </div>
      </section>

      <FooterSection />

      <style>{`
        /* Hero image — mobile focuses on person (right side), desktop shows full scene */
        .bio-hero-img { object-position: 72% 40%; }
        @media (min-width: 768px) { .bio-hero-img { object-position: center center; } }

        .reveal-section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-zoom {
          transform: scale(1.06);
        }
        .hero-content-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.3); }
        }
        @keyframes expand {
          0%   { max-width: 60px; opacity: 0.15; }
          100% { max-width: 90px; opacity: 0.35; }
        }
        @keyframes slideInRow {
          to { opacity: 1; transform: translateX(0); }
        }

        /* ── Connecting line animation ── */
        .line-draw {
          transform: scaleX(0);
          transform-origin: left center;
        }
        .reveal-section.is-visible .line-draw {
          animation: lineDraw 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
        @keyframes lineDraw {
          to { transform: scaleX(1); }
        }

        /* traveling dot — starts after line finishes drawing */
        .line-dot {
          left: 0%;
          opacity: 0;
        }
        .reveal-section.is-visible .line-dot {
          animation: dotTravel 3s ease-in-out 1.9s infinite;
        }
        @keyframes dotTravel {
          0%   { left: 0%;   opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        /* icon circles breathe gently when visible */
        .reveal-section.is-visible .step-icon {
          animation: iconGlow 4s ease-in-out infinite;
        }
        @keyframes iconGlow {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--terracotta) / 0); }
          50%       { box-shadow: 0 0 0 7px hsl(var(--terracotta) / 0.12); }
        }
      `}</style>
    </div>
  );
};

export default TerapiaCorporal;
