import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Compass, Zap, Heart, Shield, Leaf, Ear, Mountain, Layers, Check, ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Bioescalada.";

const WHATSAPP_DATA_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Quero%20saber%20quando%20e%20onde%20ser%C3%A1%20a%20pr%C3%B3xima%20viv%C3%AAncia%20de%20Bioescalada.";

const heroImg = "/bioescalada/hero.jpg";
const ctaImg  = "/bioescalada/cta.jpg";

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
  { key: "Quer um desafio que seja real", text: "Não só na cabeça — algo que você possa sentir no corpo, nos braços, na respiração suspensa antes do próximo movimento." },
  { key: "Sente que tem um limite interno por superar", text: "Medo, travamento, a voz que diz que você não consegue. Quer olhar para isso de frente — literalmente." },
  { key: "Nunca escalou na vida", text: "Não precisa ter experiência. A proposta começa do zero — do seu zero, seja ele onde for." },
  { key: "Busca autoconhecimento fora de uma sala", text: "Na natureza, com o corpo em movimento, longe da rotina que já sabe de cor." },
  { key: "Quer se sentir presente de verdade", text: "Corpo, mente e natureza em contato ao mesmo tempo — sem espaço para o piloto automático." },
];

const benefits = [
  { icon: Compass, title: "Autoconhecimento pelo corpo", desc: "A escalada revela como você lida com o medo, com o esforço, com a incerteza — muito antes de qualquer análise racional." },
  { icon: Zap,     title: "Energia desbloqueada",         desc: "A bioenergética libera o que estava travado antes mesmo de você chegar na parede. O corpo chega mais disponível, mais vivo." },
  { icon: Heart,   title: "Confiança que fica",           desc: "Superar um desafio físico real deixa uma marca diferente. É uma prova que você dá a si mesmo — e que carrega de volta para a vida." },
  { icon: Shield,  title: "Resiliência emocional",        desc: "Aprender a lidar com o momento em que o corpo treme e você continua — isso muda o jeito de encarar tudo o que vem depois." },
  { icon: Leaf,    title: "Conexão com a natureza",       desc: "Estar na rocha, no mato, no vento — faz parte da cura. A natureza regula o que nenhuma sala consegue." },
];

const included = [
  "Trilha sensorial conduzida na natureza",
  "Preparação corporal pela bioenergética",
  "Sua primeira escalada na rocha, guiada do zero",
  "Meditação ativa para liberar o que estava travado",
  "Dinâmicas de grupo em ambiente seguro e com sigilo",
  "Roda de integração ao final",
  "Todos os equipamentos de escalada",
  "Seguro aventura",
  "Grupo reduzido — para manter a vivência acolhedora",
];

const faqs = [
  { q: "Nunca escalei. Posso ir?", a: "Pode. A proposta começa do zero — do seu zero, seja ele onde for. Tudo é guiado, com suporte técnico. Você não precisa saber nada antes." },
  { q: "Tenho medo de altura.", a: "A maioria das pessoas que vem tem. Faz parte. As vias iniciantes começam baixas, e cada passo é seu. Nenhum é obrigatório. O medo não é problema — ele é parte do material." },
  { q: "Não estou em forma.", a: "Não é sobre performance atlética. As vias são iniciantes, o ritmo é o seu. O que pede esforço é estar presente — não estar forte." },
  { q: "Não me sinto à vontade com estranhos.", a: "O grupo é pequeno e cada exercício é um convite. Você não precisa fazer nada que não queira. A intimidade aparece no ritmo de cada um, em um espaço com acordo de sigilo." },
  { q: "Não tenho tempo para isso.", a: "É um dia. E o que volta com você desse dia entra em tudo o que vem depois — no trabalho, nas relações, no jeito de respirar." },
  { q: "O que eu levo?", a: "Roupa confortável para movimento, tênis fechado, água, lanche, repelente e protetor solar. Equipamento de escalada a gente leva." },
  { q: "E se chover?", a: "Se a previsão inviabilizar a segurança, remarcamos. A segurança vem antes." },
];

function FaqItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  const btnId   = `faq-btn-${id}`;
  return (
    <div className="border-t border-border/40">
      <button
        id={btnId}
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-serif text-base md:text-lg font-semibold text-foreground leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 text-terracotta transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="pb-5 text-sm font-sans text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.847L0 24l6.344-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.002-1.371l-.358-.213-3.768.892.952-3.67-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

const Bioescalada = () => {
  const heroRef         = useRef<HTMLImageElement>(null);
  const heroContentRef  = useRef<HTMLDivElement>(null);
  const forWhomRef      = useReveal(0.05);
  const methodRef       = useReveal();
  const includedRef     = useReveal();
  const benefitsRef     = useReveal();
  const quoteRef        = useReveal();
  const facilitatorsRef = useReveal(0.08);
  const faqRef          = useReveal(0.05);
  const detailsRef      = useReveal(0.08);

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
        <title>Bioescalada | Sahaj Landell</title>
        <meta name="description" content="Bioenergética e escalada na natureza. Um dia inteiro pra encontrar, no corpo, o que a mente já cansou de tentar resolver." />
        <meta property="og:title" content="Bioescalada | Sahaj Landell" />
        <meta property="og:description" content="Bioenergética e escalada na natureza. Um dia inteiro pra encontrar, no corpo, o que a mente já cansou de tentar resolver." />
        <meta property="og:url" content="https://sahajlandell.com.br/bioescalada" />
        <meta property="og:image" content="https://sahajlandell.com.br/bioescalada/hero.jpg" />
        <link rel="preload" as="image" href="/bioescalada/hero.webp" type="image/webp" />
      </Helmet>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <picture>
          <source type="image/webp" srcSet="/bioescalada/hero.webp" />
          <img
            ref={heroRef}
            src={heroImg}
            alt="Pessoa escalando rocha na natureza durante vivência Bioescalada"
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
            style={{ objectPosition: "center 30%", transformOrigin: "center center", transition: "transform 8s ease-out" }}
          />
        </picture>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.4) 55%, transparent 100%)" }} />

        <div
          ref={heroContentRef}
          className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-cream leading-tight max-w-2xl">
            O desafio lá fora libera o que estava preso aqui dentro.
          </h1>
          <p className="mt-4 text-sm md:text-base font-sans text-cream/70 leading-relaxed max-w-lg">
            Bioenergética e escalada na natureza. Um dia inteiro pra encontrar, no corpo, o que a mente já cansou de tentar resolver.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 self-start rounded-full bg-primary px-8 py-4 text-sm font-sans font-medium text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
          >
            <WhatsAppIcon />
            Quero participar →
          </a>
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
              Para quem quer sentir, na pele, o que é superar um limite de verdade.
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
            <div className="border-t border-border/50 pt-7 pb-10">
              <p className="text-sm font-sans text-muted-foreground/60 italic leading-relaxed max-w-sm">
                Não precisa ter experiência em escalada. Só precisa estar disposto a aparecer.
              </p>
            </div>
          </div>

          <div className="pb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-sans font-medium text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
            >
              <WhatsAppIcon />
              Quero participar →
            </a>
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
                text: "Exercícios que acessam o corpo antes da mente. Liberam bloqueios, abrem o sistema nervoso para o que vem a seguir. Você chega na parede mais vivo, mais presente.",
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

      {/* ── O QUE ESTÁ INCLUÍDO ── */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={includedRef} className="max-w-4xl mx-auto reveal-section">
          <div className="mb-10">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
              <span className="block w-8 h-px bg-terracotta" />
              O que está incluído
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-foreground leading-snug max-w-xl">
              Tudo que você precisa para a vivência. A gente cuida do resto.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {included.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-t border-border/40 py-4"
                style={{ opacity: 0, animation: "bio-slide 0.5s ease forwards", animationDelay: `${i * 70}ms` }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "hsl(var(--terracotta)/0.1)" }}>
                  <Check size={11} className="text-terracotta" strokeWidth={2.5} />
                </div>
                <p className="text-sm font-sans text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-sans font-medium text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
            >
              <WhatsAppIcon />
              Quero participar →
            </a>
          </div>
        </div>
      </section>

      {/* Wave → warm-brown */}
      <div className="relative bg-background leading-none -mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--warm-brown))" }}>
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── O QUE PODE MUDAR ── */}
      <section className="bg-warm-brown pt-20 pb-0 px-8 md:px-16 lg:px-24">
        <div ref={benefitsRef} className="max-w-5xl mx-auto reveal-section">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">
            <div className="md:sticky md:top-24">
              <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/50">
                <span className="block w-8 h-px bg-cream/40" />
                O que pode mudar
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-cream leading-snug">
                O que acontece quando você se desafia de verdade.
              </h2>
              <p className="mt-4 text-sm font-sans text-cream/50 leading-relaxed">
                Não são promessas. São os movimentos naturais de quem escolheu aparecer para si mesmo.
              </p>
            </div>

            <div>
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 border-t border-cream/10 py-7"
                  style={{ opacity: 0, animation: "bio-slide 0.5s ease forwards", animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "hsl(var(--terracotta)/0.12)" }}
                  >
                    <b.icon className="w-4 h-4 text-terracotta" />
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-lg font-semibold text-cream leading-snug">{b.title}</p>
                    <p className="mt-1.5 text-sm font-sans text-cream/55 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-cream/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGEM GRUPO RODA ── */}
      <div className="w-full overflow-hidden h-[250px] md:h-[450px]">
        <picture>
          <source type="image/webp" srcSet="/bioescalada/grupo-roda.webp" />
          <img
            src="/bioescalada/grupo-roda.jpg"
            alt="Grupo em roda durante vivência Bioescalada na natureza"
            loading="lazy"
            decoding="async"
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
        </picture>
      </div>

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

      {/* Wave → background */}
      <div className="relative leading-none -mb-px" style={{ background: "hsl(var(--primary))" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── OS FACILITADORES ── */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={facilitatorsRef} className="max-w-5xl mx-auto reveal-section">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
              <span className="block w-8 h-px bg-terracotta" />
              Os facilitadores
              <span className="block w-8 h-px bg-terracotta" />
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-foreground leading-snug">
              Quem vai estar com você nesse dia.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Sahaj */}
            <div
              className="flex flex-col gap-5 rounded-2xl overflow-hidden"
              style={{ background: "hsl(var(--cream-dark)/0.4)", opacity: 0, animation: "bio-slide 0.55s ease forwards" }}
            >
              <div className="w-full aspect-[3/4] rounded-2xl" style={{ background: "hsl(var(--warm-brown)/0.4)" }} aria-label="Foto de Sahaj Landell" role="img">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-cream/30 text-sm font-sans">foto em breve</span>
                </div>
              </div>
              <div className="px-8 pb-8 flex flex-col gap-4">
                <div>
                  <p className="font-serif text-xl font-semibold text-foreground leading-snug">Sahaj Landell</p>
                  <p className="mt-1 text-xs font-sans font-medium tracking-[0.15em] uppercase text-terracotta">Psicólogo e terapeuta corporal</p>
                </div>
                <span className="block w-10 h-px bg-border" />
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">Atende desde 2006. Mais de 18 anos integrando psicoterapia, bioenergética, terapias corporais e contato com a natureza. Trabalha com o corpo como porta de entrada — pelo movimento, pela respiração, pelo que aparece quando a mente para de comandar.</p>
              </div>
            </div>

            {/* Gustavo */}
            <div
              className="flex flex-col gap-5 rounded-2xl overflow-hidden"
              style={{ background: "hsl(var(--cream-dark)/0.4)", opacity: 0, animation: "bio-slide 0.55s ease forwards", animationDelay: "150ms" }}
            >
              <picture>
                <source type="image/webp" srcSet="/bioescalada/facilitador-gustavo.webp" />
                <img
                  src="/bioescalada/facilitador-gustavo.jpg"
                  alt="Gustavo Mattei, guia de natureza e instrutor de escalada"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </picture>
              <div className="px-8 pb-8 flex flex-col gap-4">
                <div>
                  <p className="font-serif text-xl font-semibold text-foreground leading-snug">Gustavo Mattei</p>
                  <p className="mt-1 text-xs font-sans font-medium tracking-[0.15em] uppercase text-terracotta">Guia de natureza e instrutor de escalada</p>
                </div>
                <span className="block w-10 h-px bg-border" />
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">Idealizador do Projeto Liquen. Formado em Ecologia Profunda, Ecopsicologia, Educação Experiencial ao Ar Livre (FEAL), técnicas Leave No Trace, condução de turismo de aventura, primeiros socorros em ambientes naturais e técnicas verticais. Conduz com segurança técnica, escuta atenta e clareza.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PERGUNTAS FREQUENTES ── */}
      <section className="bg-background pb-20 px-8 md:px-16 lg:px-24">
        <div ref={faqRef} className="max-w-3xl mx-auto reveal-section">
          <div className="mb-10">
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
              <span className="block w-8 h-px bg-terracotta" />
              Perguntas frequentes
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-foreground leading-snug">
              O que costuma aparecer antes de dizer sim.
            </h2>
          </div>

          <div>
            {faqs.map((item, i) => (
              <FaqItem key={i} id={String(i)} q={item.q} a={item.a} />
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Wave → warm-brown */}
      <div className="relative bg-background leading-none -mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--warm-brown))" }}>
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── DETALHES PRÁTICOS + INVESTIMENTO ── */}
      <section className="bg-warm-brown py-20 px-8 md:px-16 lg:px-24">
        <div ref={detailsRef} className="max-w-4xl mx-auto reveal-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            <div>
              <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/50">
                <span className="block w-8 h-px bg-cream/40" />
                Detalhes práticos
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-cream leading-snug">
                Como funciona na prática.
              </h2>
              <div className="mt-8 flex flex-col gap-0">
                {[
                  { label: "Duração", value: "Dia inteiro" },
                  { label: "Vagas", value: "Limitadas, para manter o grupo acolhedor" },
                  { label: "Próxima data e local", value: "Abrimos novas turmas ao longo do ano." },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col gap-1 border-t border-cream/10 py-4">
                    <span className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-cream/40">{d.label}</span>
                    <span className="text-sm font-sans text-cream/70 leading-relaxed">{d.value}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_DATA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-cream/20 px-7 py-3.5 text-sm font-sans font-medium text-cream/80 transition-colors hover:bg-cream/5 active:scale-[0.97]"
              >
                <WhatsAppIcon />
                Quero saber a próxima data →
              </a>
            </div>

            <div>
              <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-cream/50">
                <span className="block w-8 h-px bg-cream/40" />
                Investimento
              </span>
              <div className="mt-8 p-8 rounded-2xl flex flex-col gap-4" style={{ background: "hsl(var(--cream)/0.05)", border: "1px solid hsl(var(--cream)/0.12)" }}>
                <div>
                  <p className="text-3xl md:text-4xl font-serif font-semibold text-cream">R$ 280</p>
                  <p className="mt-1 text-sm font-sans text-cream/50">à vista no pix</p>
                </div>
                <span className="block w-10 h-px bg-cream/20" />
                <div>
                  <p className="text-lg font-serif font-semibold text-cream/70">ou 12x de R$ 28</p>
                  <p className="mt-0.5 text-xs font-sans text-cream/40">no cartão</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-sans font-medium text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
                >
                  <WhatsAppIcon />
                  Quero participar →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wave → foreground (para CTA dark) */}
      <div className="relative leading-none -mb-px" style={{ background: "hsl(var(--warm-brown))" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--foreground))" }}>
          <path d="M0,35 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden h-[70vh] md:h-[80vh] bg-foreground">
        <picture>
          <source type="image/webp" srcSet="/bioescalada/cta.webp" />
          <img
            src={ctaImg}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </picture>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.7) 35%, hsl(var(--foreground)/0.1) 70%, transparent 100%)" }} />

        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-20">
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-cream leading-tight max-w-xl">
            O próximo passo é descobrir quando e onde acontece.
          </p>
          <p className="mt-4 text-sm font-sans text-cream/60 leading-relaxed max-w-sm">
            As vivências acontecem regularmente. Entre em contato para saber a próxima data e o local.
          </p>
          <a
            href={WHATSAPP_DATA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-sans font-medium text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
          >
            <WhatsAppIcon />
            Me conta quando é a próxima →
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
