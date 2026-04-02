import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Compass, Zap, Heart, Shield, Leaf, Ear, Mountain, Layers } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Bioescalada.";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2022-06-17-at-17.15.59.jpeg";
const ctaImg  = "https://sahajlandell.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2022-06-17-at-17.15.59.jpeg";

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
  { key: "Quer um desafio que seja real", text: "não só na cabeça — algo que você possa sentir no corpo, nos braços, na respiração suspensa antes do próximo movimento." },
  { key: "Sente que tem um limite interno por superar", text: "medo, travamento, a voz que diz que você não consegue. Quer olhar para isso de frente — literalmente." },
  { key: "Nunca escalou na vida", text: "não precisa ter experiência. A proposta começa do zero — do seu zero, seja ele onde for." },
  { key: "Busca autoconhecimento fora de uma sala", text: "na natureza, com o corpo em movimento, longe da rotina que já sabe de cor." },
  { key: "Quer se sentir presente de verdade", text: "corpo, mente e natureza em contato ao mesmo tempo — sem espaço para o piloto automático." },
];

const benefits = [
  {
    icon: Compass,
    title: "Autoconhecimento pelo corpo",
    desc: "A escalada revela como você lida com o medo, com o esforço, com a incerteza — muito antes de qualquer análise racional.",
  },
  {
    icon: Zap,
    title: "Energia desbloqueada",
    desc: "A bioenergética libera o que estava travado antes mesmo de você chegar na parede. O corpo chega mais disponível, mais vivo.",
  },
  {
    icon: Heart,
    title: "Confiança que fica",
    desc: "Superar um desafio físico real deixa uma marca diferente. É uma prova que você dá a si mesmo — e que carrega de volta para a vida.",
  },
  {
    icon: Shield,
    title: "Resiliência emocional",
    desc: "Aprender a lidar com o momento em que o corpo treme e você continua — isso muda o jeito de encarar tudo o que vem depois.",
  },
  {
    icon: Leaf,
    title: "Conexão com a natureza",
    desc: "Estar na rocha, no mato, no vento — faz parte da cura. A natureza regula o que nenhuma sala consegue.",
  },
];

const Bioescalada = () => {
  const heroRef        = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const forWhomRef     = useReveal(0.05);
  const methodRef      = useReveal();
  const benefitsRef    = useReveal();
  const quoteRef       = useReveal();

  useEffect(() => {
    const img     = heroRef.current;
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
        <title>Bioescalada | Terapia, Bioenergética e Escalada na Natureza — Sahaj Landell</title>
        <meta name="description" content="Processo único que une escalada em rocha, bioenergética e natureza. Autoconhecimento pelo corpo, superação de limites internos e reconexão com o presente." />
        <meta property="og:title" content="Bioescalada | Terapia, Bioenergética e Escalada na Natureza — Sahaj Landell" />
        <meta property="og:description" content="Processo único que une escalada em rocha, bioenergética e natureza. Autoconhecimento pelo corpo, superação de limites internos e reconexão com o presente." />
        <meta property="og:url" content="https://sahajlandell.com.br/bioescalada" />
      </Helmet>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <img
          ref={heroRef}
          src={heroImg}
          alt="Bioescalada"
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
            O desafio lá fora<br className="hidden md:block" /> libera o que estava<br className="hidden md:block" /> preso aqui dentro.
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
              Para quem quer sentir,<br className="hidden md:block" /> na pele, o que é superar<br className="hidden md:block" /> um limite de verdade.
            </h2>
          </div>

          <div>
            {forWhom.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 md:gap-10 border-t border-border/50 py-6 md:py-7"
                style={{ opacity: 0, animation: "bio-slide 0.5s ease forwards", animationDelay: `${i * 90}ms` }}
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
                Não precisa ter experiência em escalada. Só precisa estar disposto a aparecer.
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

      {/* ── A VIVÊNCIA ── */}
      <section className="relative bg-warm-brown py-20 px-8 md:px-16 lg:px-24 overflow-hidden">

        <div ref={methodRef} className="relative max-w-5xl mx-auto reveal-section">

          {/* Título centrado */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/40">
              <span className="block w-8 h-px bg-cream/30" />
              A vivência
              <span className="block w-8 h-px bg-cream/30" />
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-serif font-semibold text-cream leading-snug">
              Bioenergética e escalada —<br className="hidden md:block" /> dois caminhos, uma só jornada.
            </h2>
            <p className="mt-4 text-sm font-sans text-cream/50 max-w-lg mx-auto leading-relaxed">
              Uma criação de Sahaj Landell e Gustavo Mattei — escalador e facilitador de vivências na natureza.
            </p>
          </div>

          {/* Dois pilares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 rounded-2xl overflow-hidden mb-16">
            {[
              {
                label: "Por dentro",
                title: "Bioenergética",
                text: "Exercícios que acessam o corpo antes da mente — liberando bloqueios, abrindo o sistema nervoso para o que vem a seguir. Você chega na parede mais vivo, mais presente.",
              },
              {
                label: "Por fora",
                title: "Escalada na natureza",
                text: "Trilha e escalada em vias iniciantes. Sem experiência necessária. A rocha não julga — ela só responde ao que você traz. E isso, por si só, já ensina muito.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="bg-cream/5 px-8 py-8 md:py-10 flex flex-col gap-4"
                style={{ opacity: 0, animation: "bio-slide 0.55s ease forwards", animationDelay: `${i * 150}ms` }}
              >
                <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-terracotta/80">{p.label}</span>
                <p className="text-xl md:text-2xl font-serif font-semibold text-cream leading-snug">{p.title}</p>
                <span className="block w-10 h-px bg-cream/20" />
                <p className="text-sm font-sans text-cream/60 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Como é o dia */}
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/30">Como é o dia</span>
          </div>

          <div className="relative">
            {/* Desktop connectors */}
            <div className="hidden md:block absolute" style={{ top: "32px", left: "calc(16.67% + 36px)", right: "calc(50% + 36px)", height: "1px", background: "hsl(var(--cream)/0.1)", overflow: "hidden" }}>
              <div className="absolute inset-0 h-full w-full" style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--terracotta)/0.8) 50%, transparent 100%)", animation: "bio-sweep 2.2s ease-in-out infinite" }} />
            </div>
            <div className="hidden md:block absolute" style={{ top: "32px", left: "calc(50% + 36px)", right: "calc(16.67% + 36px)", height: "1px", background: "hsl(var(--cream)/0.1)", overflow: "hidden" }}>
              <div className="absolute inset-0 h-full w-full" style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--terracotta)/0.8) 50%, transparent 100%)", animation: "bio-sweep 2.2s ease-in-out 1.1s infinite" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {[
                { Icon: Ear,      title: "Preparação", text: "Exercícios de bioenergética para acessar o corpo, soltar tensões e chegar presente para o que vem." },
                { Icon: Mountain, title: "Movimento",   text: "Trilha e escalada em vias iniciantes, com suporte total. Cada passo é seu — nenhum é obrigatório." },
                { Icon: Layers,   title: "Integração",  text: "Roda de encerramento para processar o que surgiu. O que o corpo viveu, a mente leva para casa." },
              ].map(({ Icon, title, text }, i) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center gap-4"
                  style={{ opacity: 0, animation: "bio-slide 0.5s ease forwards", animationDelay: `${i * 140 + 250}ms` }}
                >
                  {i > 0 && (
                    <div className="md:hidden w-px h-8 -mt-6 mb-2 relative overflow-hidden" style={{ background: "hsl(var(--cream)/0.1)" }}>
                      <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--terracotta)/0.7), transparent)", animation: `bio-sweep-v 2s ease-in-out ${i * 0.6}s infinite` }} />
                    </div>
                  )}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--warm-brown))", border: "1px solid hsl(var(--cream)/0.18)", animation: `bio-float 4s ease-in-out ${i * 1.4}s infinite` }}
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
                O que acontece quando você se desafia de verdade.
              </h2>
              <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed">
                Não são promessas. São os movimentos naturais de quem escolheu aparecer para si mesmo.
              </p>
            </div>

            <div>
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 border-t border-border/40 py-7"
                  style={{ opacity: 0, animation: "bio-slide 0.5s ease forwards", animationDelay: `${i * 100}ms` }}
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
          className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[12rem] md:text-[16rem] leading-none text-primary-foreground/5 pointer-events-none select-none animate-float"
          aria-hidden
        >"</span>

        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--primary-foreground)/0.04) 0%, transparent 70%)", animation: "bio-breathe 5s ease-in-out infinite" }} />

        <div ref={quoteRef} className="relative max-w-2xl mx-auto text-center reveal-section">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-primary-foreground leading-relaxed">
            "A montanha mais desafiadora de escalar não é aquela que se encontra na sua frente, mas aquela que carregamos dentro."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="flex-1 h-px max-w-[80px]" style={{ background: "hsl(var(--primary-foreground)/0.2)", animation: "bio-expand 3s ease-in-out infinite alternate" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--primary-foreground)/0.4)", animation: "bio-breathe 3s ease-in-out infinite" }} />
            <span className="flex-1 h-px max-w-[80px]" style={{ background: "hsl(var(--primary-foreground)/0.2)", animation: "bio-expand 3s ease-in-out infinite alternate-reverse" }} />
          </div>
          <p className="mt-5 text-sm font-sans text-primary-foreground/50">Sahaj Landell</p>
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
            Toda subida começa com um passo que parece impossível.
          </p>
          <p className="mt-4 text-sm font-sans text-cream/60 leading-relaxed max-w-sm">
            Uma conversa inicial, sem compromisso. Só para entender se faz sentido para o seu momento.
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
            Quero participar
          </a>
        </div>
      </section>

      <FooterSection />

      <style>{`
        @keyframes bio-slide {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes bio-breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.3); }
        }
        @keyframes bio-expand {
          0%   { max-width: 60px; opacity: 0.15; }
          100% { max-width: 90px; opacity: 0.35; }
        }
        @keyframes bio-sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes bio-sweep-v {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes bio-float {
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
        .hero-zoom { transform: scale(1.06); }
        .hero-content-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </div>
  );
};

export default Bioescalada;
