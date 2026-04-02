import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ola!%20Estive%20em%20seu%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho.";

const img1 = "/sobre-hero.jpg";
const img2 = "/sahaj-berimbau-2.jpg";
const img3 = "/sahaj-berimbau-3.jpg";
const img4 = "/sahaj-portrait.jpg";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const QuemSou = () => {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const sec1Ref = useReveal();
  const credRef = useReveal(0.08);
  const sec2Ref = useReveal(0.06);
  const sec3Ref = useReveal(0.06);
  const sec4Ref = useReveal(0.06);

  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;
    setTimeout(() => img.classList.add("hero-zoom"), 80);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Quem Sou | Sahaj Landell — Psicólogo e Terapeuta</title>
        <meta name="description" content="Conheça Sahaj Landell: psicólogo com 19 anos de experiência, capoeirista, viajante por mais de 20 países. Uma abordagem que integra escuta, corpo e movimento." />
        <meta property="og:title" content="Quem Sou | Sahaj Landell — Psicólogo e Terapeuta" />
        <meta property="og:description" content="Conheça Sahaj Landell: psicólogo com 19 anos de experiência, capoeirista, viajante por mais de 20 países. Uma abordagem que integra escuta, corpo e movimento." />
        <meta property="og:url" content="https://sahajlandell.com.br/quem-sou" />
      </Helmet>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[75vh] md:h-screen w-full overflow-hidden">
        <img
          ref={heroImgRef}
          src={img1}
          alt="Sahaj Landell"
          className="h-full w-full object-cover"
          style={{ objectPosition: "55% 40%", transformOrigin: "center center", transition: "transform 10s ease-out" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.5) 45%, hsl(var(--foreground)/0.1) 100%)" }} />

        <div className="absolute bottom-0 left-0 px-8 md:px-16 lg:px-24 pb-14 md:pb-20">
          <p className="text-xs font-sans tracking-[0.22em] uppercase text-cream/40 mb-4">Sobre mim</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-cream leading-none">
            Eu danço.
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
            <path d="M0,30 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="bg-background pt-24 pb-32 px-8 md:px-16 lg:px-24">
        <div ref={sec1Ref} className="max-w-6xl mx-auto reveal-section">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

            {/* Left: image composition */}
            <div className="relative">
              {/* Main tall image */}
              <img
                src="/sahaj-berimbau-praia.jpg"
                alt="Sahaj com berimbau na praia"
                className="w-full rounded-2xl object-cover"
                style={{ aspectRatio: "3/4", objectPosition: "60% center" }}
              />
              {/* Floating portrait */}
              <div
                className="absolute -bottom-8 -right-6 md:-right-10 w-[42%] rounded-xl overflow-hidden shadow-2xl"
                style={{ border: "4px solid hsl(var(--background))" }}
              >
                <img
                  src="/sahaj-berimbau-close.jpg"
                  alt="Sahaj com berimbau"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "center 15%" }}
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="space-y-6 text-base font-sans text-muted-foreground leading-relaxed md:pl-4">
              <p className="text-xl md:text-2xl font-serif text-foreground leading-snug">
                Danço na capoeira, que me ensinou que força e beleza não se opõem.
              </p>
              <p>
                Danço nas ruas de mais de 20 países que percorri, onde aprendi que cada cultura tem seu próprio ritmo, e que escutar esse ritmo é a forma mais honesta de encontrar o outro. Danço na clínica, onde o corpo de quem chega até mim também carrega uma coreografia — de dores, de histórias, de padrões que se repetem à espera de uma nova música.
              </p>
              <p className="text-foreground font-semibold font-sans text-base border-l-2 border-terracotta pl-5 py-1">
                A dança não é metáfora. É método. É presença. É a forma como eu entendo a vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENCIAIS ── */}
      <section className="bg-background pb-24 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div ref={credRef} className="max-w-6xl mx-auto reveal-section">

          {/* Números grandes */}
          <div className="grid grid-cols-3 gap-px bg-border/30 border border-border/30 rounded-2xl overflow-hidden mb-16">
            {[
              { num: "19", label: "anos de\npsicologia" },
              { num: "20+", label: "países\nvividos" },
              { num: "48", label: "anos em\nmovimento" },
            ].map(({ num, label }) => (
              <div key={num} className="bg-background px-4 py-8 md:py-10 flex flex-col items-center text-center">
                <span className="text-4xl md:text-6xl font-serif font-semibold text-foreground leading-none">{num}</span>
                <span className="mt-2 text-xs font-sans tracking-widest uppercase text-muted-foreground whitespace-pre-line leading-relaxed">{label}</span>
              </div>
            ))}
          </div>

          {/* Texto em duas colunas */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div className="space-y-5 text-base font-sans text-muted-foreground leading-relaxed">
              <p>
                Sou psicólogo especialista em Psicologia Institucional, pai de duas filhas — uma de 8 e outra de 20 anos. Por mais de uma década, trabalhei com políticas públicas e na garantia de direitos de crianças e adolescentes.
              </p>
              <p>
                Aprendi nesse tempo que o sofrimento humano nunca é só individual — ele dança junto com a história, com a política, com tudo que nos foi dado carregar sem escolha.
              </p>
            </div>
            <div className="space-y-5 text-base font-sans text-muted-foreground leading-relaxed">
              <p>
                Na clínica, integro escuta, corpo, movimento e natureza. Não acredito numa psicologia que ignora o que pulsa. Não acredito numa cura que não passa pelo corpo.
              </p>
              <p className="text-foreground font-serif italic text-lg">
                Tenho 48 anos e sigo me movendo — porque parar nunca foi uma opção.
              </p>
            </div>
          </div>

          {/* Frase final */}
          <div className="mt-16 pt-10 border-t border-border/40">
            <p className="text-3xl md:text-5xl font-serif italic text-foreground/80 leading-snug max-w-2xl">
              Minha vida é uma dança.<br />E é nela que eu cuido.
            </p>
          </div>

        </div>
      </section>

      {/* ── PARA QUEM É — parte 1 ── */}
      <section className="relative overflow-hidden" style={{ background: "hsl(var(--foreground))" }}>

        <div className="absolute top-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
            <path d="M0,30 C480,60 960,0 1440,35 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
            <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>

        <div ref={sec2Ref} className="relative max-w-3xl mx-auto px-8 md:px-16 pt-24 pb-24 reveal-section">
          <p className="text-2xl md:text-3xl font-serif text-cream leading-snug mb-10">
            Se você chegou até aqui, talvez algo em você já esteja pedindo movimento.
          </p>

          <div className="space-y-5 text-base font-sans text-cream/60 leading-relaxed">
            <p>
              Pode ser uma dor que você aprendeu a carregar em silêncio. Uma exaustão que virou paisagem. Uma versão de si mesmo que ficou pelo caminho — enterrada sob responsabilidades, expectativas, histórias que não eram suas mas que você abraçou como se fossem.
            </p>
            <p className="text-cream/80 font-medium">
              Seja o que for — estou aqui.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É — parte 2 ── */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={sec3Ref} className="max-w-5xl mx-auto reveal-section">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-start">

            {/* Left: image */}
            <div className="relative">
              <img
                src="/sahaj-capoeira-cta.jpg"
                alt="Sahaj em movimento na praia"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4", objectPosition: "55% 35%" }}
              />
              {/* Edge dissolve overlays */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(var(--background)) 0%, transparent 25%)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(var(--background)) 0%, transparent 20%)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 20%)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 20%)" }} />
            </div>

            {/* Right: statements */}
            <div>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-10 max-w-sm">
                E se o meu trabalho ressoa com você, é porque esse cuidado também tem um destino.
              </p>
              <div className="space-y-8">
                {[
                  "Para o homem que cresceu acreditando que sentir era fraqueza, e que agora, em algum lugar fundo, suspeita que foi enganado.",
                  "Para a mulher que sempre cuidou de todo mundo e que mal se lembra como é ser cuidada.",
                  "Para quem vive na cabeça e sente saudade do próprio corpo.",
                  "Para quem chegou no limite e precisa de alguém que saiba estar presente sem pressa de resolver.",
                ].map((item, i) => (
                  <p key={i} className="text-lg md:text-xl font-serif text-foreground/75 leading-snug border-l-2 border-terracotta/30 pl-6 hover:border-terracotta/70 hover:text-foreground transition-all duration-300">
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-10 text-sm font-sans text-muted-foreground italic leading-relaxed">
                Às vezes o primeiro passo é perceber que você já está em movimento.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={sec4Ref} className="relative overflow-hidden reveal-section h-[75vh] md:h-[85vh]" style={{ background: "hsl(var(--background))" }}>
        <img
          src="/sahaj-passarela.jpg"
          alt="Sahaj Landell na passarela"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        {/* Gradiente lateral: escuro à esquerda, transparente à direita */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.75) 35%, hsl(var(--foreground)/0.2) 65%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--foreground)/0.6) 0%, transparent 40%)" }} />

        {/* Wave topo — conecta com bg */}
        <div className="absolute top-0 left-0 w-full leading-none z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14" style={{ fill: "hsl(var(--background))" }}>
            <path d="M0,35 C480,0 960,60 1440,30 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* Texto à esquerda */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-md">
            <p className="text-2xl md:text-4xl font-serif font-semibold text-cream leading-snug">
              Se fez sentido o que você leu, talvez seja hora de a gente conversar.
            </p>
            <p className="mt-4 text-sm font-sans text-cream/60 leading-relaxed">
              Sem roteiro, sem pressa. Só presença.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-sans font-medium text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.847L0 24l6.344-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.002-1.371l-.358-.213-3.768.892.952-3.67-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Agendar uma conversa
            </a>
          </div>
        </div>
      </section>

      <FooterSection />

      <style>{`
        .reveal-section { opacity: 0; transform: translateY(24px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-section.is-visible { opacity: 1; transform: translateY(0); }
        .hero-zoom { transform: scale(1.06); }
      `}</style>
    </div>
  );
};

export default QuemSou;
