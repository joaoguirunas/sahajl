import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Users, Flame, Sprout, Heart, Wind, Compass } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20tenho%20interesse%20no%20grupo%20Regenera.";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/10/20240907_113413-scaled.jpg";
const ctaImg  = "https://sahajlandell.com.br/wp-content/uploads/2024/10/20240907_113413-scaled.jpg";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const forWhom = [
  { key: "Carrega em silêncio", text: "raiva, cansaço, medo, insegurança — emoções que você aprendeu a engolir porque não havia espaço para sentir." },
  { key: "Relações que ficam na superfície", text: "vínculos que existem, mas sem profundidade real. Falta algo que você não consegue nomear." },
  { key: "Padrões que se repetem", text: "jeitos de reagir, de se fechar, de se perder — que aparecem com pessoas diferentes mas sempre da mesma forma." },
  { key: "Sente que a masculinidade que aprendeu pesa", text: "e que há outras formas de ser homem, mas ainda não sabe quais são ou como acessá-las." },
  { key: "Busca pertencimento real", text: "um espaço onde não precise fingir que está bem, que sabe de tudo, que não precisa de nada." },
];

const benefits = [
  {
    icon: Users,
    title: "Círculo de escuta genuína",
    desc: "Um espaço onde o que você sente tem lugar — sem julgamento, sem competição, com presença real de outros homens.",
  },
  {
    icon: Heart,
    title: "Conexão com o que você sente",
    desc: "Reconhecer emoções que ficaram escondidas, nomeá-las e aprender a atravessá-las sem ser dominado por elas.",
  },
  {
    icon: Flame,
    title: "Vitalidade e prazer de existir",
    desc: "Reconectar com o que te anima — o desejo, a alegria, a energia que existe quando você para de apenas cumprir.",
  },
  {
    icon: Sprout,
    title: "Novos modos de ser homem",
    desc: "Desconstruir o que não serve mais e criar, junto com outros, formas mais livres e autênticas de existir.",
  },
  {
    icon: Compass,
    title: "Direção e clareza interior",
    desc: "Entender o que realmente importa para você — além do que foi ensinado que deveria importar.",
  },
];

const Regenera = () => {
  const heroRef    = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const forWhomRef = useReveal(0.05);
  const methodRef  = useReveal();
  const benefitsRef = useReveal();
  const quoteRef   = useReveal();

  useEffect(() => {
    const img = heroRef.current;
    const content = heroContentRef.current;
    if (!img || !content) return;
    setTimeout(() => {
      img.classList.add("regen-zoom");
      content.classList.add("regen-content-in");
    }, 80);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Regenera | Grupo Terapêutico para Homens — Sahaj Landell</title>
        <meta name="description" content="Grupo de saúde emocional masculina que integra corpo, movimento e escuta genuína. Um espaço para homens se reconectarem com o que sentem, de verdade." />
        <meta property="og:title" content="Regenera | Grupo Terapêutico para Homens — Sahaj Landell" />
        <meta property="og:description" content="Grupo de saúde emocional masculina que integra corpo, movimento e escuta genuína. Um espaço para homens se reconectarem com o que sentem, de verdade." />
        <meta property="og:url" content="https://sahajlandell.com.br/regenera" />
      </Helmet>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <img
          ref={heroRef}
          src={heroImg}
          alt="Regenera — Grupo Terapêutico Masculino"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 30%", transformOrigin: "center center", transition: "transform 8s ease-out" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.3) 60%, transparent 100%)" }} />

        <div
          ref={heroContentRef}
          className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-14 md:pb-20"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-cream leading-tight max-w-2xl">
            Um círculo de homens.<br className="hidden md:block" /> Um espaço para ser<br className="hidden md:block" /> inteiro de verdade.
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="bg-background">
        <div ref={forWhomRef} className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 pt-16 pb-4 reveal-section">

          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
              <span className="block w-8 h-px bg-terracotta" />
              Para quem é
            </span>
            <h2 className="mt-4 text-2xl md:text-4xl font-serif font-semibold text-foreground leading-snug max-w-2xl">
              Para o homem que sente que<br className="hidden md:block" /> algo nele quer mudar.
            </h2>
          </div>

          <div>
            {forWhom.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 md:gap-10 border-t border-border/50 py-6 md:py-7"
                style={{ opacity: 0, animation: "regen-slide 0.5s ease forwards", animationDelay: `${i * 90}ms` }}
              >
                <span className="font-serif text-xs font-medium text-terracotta/50 flex-shrink-0 mt-1 w-5 text-right leading-none" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="font-serif text-lg md:text-xl font-semibold text-foreground/80 leading-snug group-hover:text-foreground transition-colors duration-300">
                    {item.key}
                  </p>
                  <p className="mt-1.5 text-sm font-sans text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-border/50 pt-7 pb-16">
              <p className="text-sm font-sans text-muted-foreground/60 italic leading-relaxed max-w-sm">
                Não precisa ter certeza. Só precisa sentir que chegou a hora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave → warm-brown */}
      <div className="relative bg-background leading-none -mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--warm-brown))" }}>
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── A ABORDAGEM ── */}
      <section className="relative bg-warm-brown py-20 px-8 md:px-16 lg:px-24 overflow-hidden">

        <div ref={methodRef} className="relative max-w-5xl mx-auto reveal-section">

          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/40">
              <span className="block w-8 h-px bg-cream/30" />
              A abordagem
              <span className="block w-8 h-px bg-cream/30" />
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-serif font-semibold text-cream leading-snug">
              Vulnerabilidade não é fraqueza —<br className="hidden md:block" /> é o começo da transformação.
            </h2>
          </div>

          {/* Dois pilares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 rounded-2xl overflow-hidden mb-16">
            {[
              {
                label: "O círculo",
                title: "Seguro e sem julgamento",
                text: "Um espaço mensal onde homens de diferentes histórias se encontram para falar com honestidade — sem competição, sem precisar fingir que está tudo bem.",
              },
              {
                label: "A integração",
                title: "Corpo, emoção e presença",
                text: "Além da fala, utilizo bioenergética, meditações ativas e dinâmicas corporais — porque a mudança real acontece quando o corpo também participa.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="bg-cream/5 px-8 py-8 md:py-10 flex flex-col gap-4"
                style={{ opacity: 0, animation: "regen-slide 0.55s ease forwards", animationDelay: `${i * 150}ms` }}
              >
                <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-terracotta/80">{p.label}</span>
                <p className="text-xl md:text-2xl font-serif font-semibold text-cream leading-snug">{p.title}</p>
                <span className="block w-10 h-px bg-cream/20" />
                <p className="text-sm font-sans text-cream/60 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Como funciona */}
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/30">Como funciona</span>
          </div>

          <div className="relative">
            {/* Desktop connectors */}
            <div className="hidden md:block absolute" style={{ top: "32px", left: "calc(16.67% + 36px)", right: "calc(50% + 36px)", height: "1px", background: "hsl(var(--cream)/0.1)", overflow: "hidden" }}>
              <div className="absolute inset-0 h-full w-full" style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--terracotta)/0.8) 50%, transparent 100%)", animation: "regen-sweep 2.2s ease-in-out infinite" }} />
            </div>
            <div className="hidden md:block absolute" style={{ top: "32px", left: "calc(50% + 36px)", right: "calc(16.67% + 36px)", height: "1px", background: "hsl(var(--cream)/0.1)", overflow: "hidden" }}>
              <div className="absolute inset-0 h-full w-full" style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--terracotta)/0.8) 50%, transparent 100%)", animation: "regen-sweep 2.2s ease-in-out 1.1s infinite" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {[
                { Icon: Users, title: "Encontro", text: "Um grupo mensal de homens, coordenado por Sahaj em Florianópolis — presencial, em círculo, com presença real." },
                { Icon: Wind, title: "Movimento", text: "Fala, corpo e emoção integrados — para acessar o que a mente ainda não alcança e o coração já sente." },
                { Icon: Flame, title: "Transformação", text: "Com o tempo, os padrões mudam. A forma de sentir muda. O jeito de se relacionar muda — por dentro primeiro." },
              ].map(({ Icon, title, text }, i) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center gap-4"
                  style={{ opacity: 0, animation: "regen-slide 0.5s ease forwards", animationDelay: `${i * 140 + 250}ms` }}
                >
                  {i > 0 && (
                    <div className="md:hidden w-px h-8 -mt-6 mb-2 relative overflow-hidden" style={{ background: "hsl(var(--cream)/0.1)" }}>
                      <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--terracotta)/0.7), transparent)", animation: `regen-sweep-v 2s ease-in-out ${i * 0.6}s infinite` }} />
                    </div>
                  )}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--warm-brown))", border: "1px solid hsl(var(--cream)/0.18)", animation: `regen-float 4s ease-in-out ${i * 1.4}s infinite` }}
                  >
                    <Icon size={20} strokeWidth={1.5} className="text-cream/75" />
                  </div>
                  <div>
                    <p className="text-base font-serif font-semibold text-cream mb-2">{title}</p>
                    <p className="text-sm font-sans text-cream/55 leading-relaxed max-w-[220px] mx-auto">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave → background */}
      <div className="relative leading-none -mb-px" style={{ background: "hsl(var(--warm-brown))" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
          <path d="M0,40 C480,0 960,60 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── O QUE PODE MUDAR ── */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={benefitsRef} className="max-w-5xl mx-auto reveal-section">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">

            <div className="md:sticky md:top-24">
              <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
                <span className="block w-8 h-px bg-terracotta" />
                O que pode mudar
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-foreground leading-snug">
                Quando você para de carregar sozinho, tudo ao redor se reorganiza.
              </h2>
              <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed">
                Não são promessas. São os movimentos que acontecem quando um homem finalmente se permite ser visto.
              </p>
            </div>

            <div>
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 border-t border-border/40 py-7"
                  style={{ opacity: 0, animation: "regen-slide 0.5s ease forwards", animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "hsl(var(--terracotta)/0.08)" }}
                  >
                    <b.icon className="w-4 h-4 text-terracotta" />
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-lg font-semibold text-foreground leading-snug">{b.title}</p>
                    <p className="mt-1.5 text-sm font-sans text-muted-foreground leading-relaxed">{b.desc}</p>
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
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[12rem] md:text-[16rem] leading-none text-primary-foreground/5 pointer-events-none select-none"
          style={{ animation: "regen-float 6s ease-in-out infinite" }}
          aria-hidden
        >"</span>

        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--primary-foreground)/0.04) 0%, transparent 70%)", animation: "regen-breathe 5s ease-in-out infinite" }} />

        <div ref={quoteRef} className="relative max-w-2xl mx-auto text-center reveal-section">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-primary-foreground leading-relaxed">
            "Não se nasce homem: torna-se homem."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="flex-1 h-px max-w-[80px]" style={{ background: "hsl(var(--primary-foreground)/0.2)", animation: "regen-expand 3s ease-in-out infinite alternate" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--primary-foreground)/0.4)", animation: "regen-breathe 3s ease-in-out infinite" }} />
            <span className="flex-1 h-px max-w-[80px]" style={{ background: "hsl(var(--primary-foreground)/0.2)", animation: "regen-expand 3s ease-in-out infinite alternate-reverse" }} />
          </div>
          <p className="mt-5 text-sm font-sans text-primary-foreground/50">Simone de Beauvoir</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden h-[70vh] md:h-[80vh] bg-foreground">
        <img
          src={ctaImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.7) 35%, hsl(var(--foreground)/0.1) 70%, transparent 100%)" }} />

        <div className="absolute top-0 left-0 w-full leading-none z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--primary))" }}>
            <path d="M0,35 C480,0 960,60 1440,30 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-20">
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-cream leading-tight max-w-xl">
            Pronto para entrar no círculo?
          </p>
          <p className="mt-4 text-sm font-sans text-cream/60 leading-relaxed max-w-sm">
            Uma conversa inicial, sem compromisso. Para entender se o Regenera é o seu momento.
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
            Quero entrar no grupo
          </a>
        </div>
      </section>

      <FooterSection />

      <style>{`
        @keyframes regen-slide {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes regen-breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.3); }
        }
        @keyframes regen-expand {
          0%   { max-width: 60px; opacity: 0.15; }
          100% { max-width: 90px; opacity: 0.35; }
        }
        @keyframes regen-sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes regen-sweep-v {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes regen-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
        .reveal-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .regen-zoom { transform: scale(1.06); }
        .regen-content-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </div>
  );
};

export default Regenera;
