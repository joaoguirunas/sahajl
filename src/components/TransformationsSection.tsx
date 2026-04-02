import { useEffect, useRef, useState, useCallback } from "react";
import { Sun, Star, Unlock, HeartPulse, Heart, Waves, Sprout, MessageCircle } from "lucide-react";

const transformationsImg = "https://sahajlandell.com.br/wp-content/uploads/2024/09/DSC03129-2-scaled.jpg";

const items = [
  { icon: Sun,           label: "Prazer e Alegria de Viver",     phrase: "Reconecte-se com o que você ama" },
  { icon: Star,          label: "Autoconfiança e Valor Próprio", phrase: "Fortaleça quem você é" },
  { icon: Unlock,        label: "Bloqueios Emocionais",          phrase: "Libere e energize seu corpo" },
  { icon: HeartPulse,    label: "Corpo, Mente e Emoções",        phrase: "Integre suas dimensões" },
  { icon: Heart,         label: "Relações Interpessoais",        phrase: "Mais autenticidade nos vínculos" },
  { icon: Waves,         label: "Estresse e Ansiedade",          phrase: "Reduza sintomas depressivos" },
  { icon: Sprout,        label: "Resiliência Emocional",         phrase: "Desenvolva auto-regulação" },
  { icon: MessageCircle, label: "Expressão Emocional",           phrase: "Reconheça e expresse o que sente" },
];

const SLIDE_INTERVAL = 2800;

const TransformationsSection = () => {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll to card (mobile)
  const scrollToCard = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActiveCard(index);
  }, []);

  // Auto-scroll (mobile)
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveCard((prev) => {
        const next = (prev + 1) % items.length;
        scrollToCard(next);
        return next;
      });
    }, SLIDE_INTERVAL);
  }, [scrollToCard]);

  useEffect(() => {
    if (visible) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [visible, startTimer]);

  // Touch handlers (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = false;
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    if (Math.abs(e.touches[0].clientX - touchStartX.current) > 5) isDragging.current = true;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (!isDragging.current) return;
    const next = diff < -40
      ? Math.min(activeCard + 1, items.length - 1)
      : diff > 40
      ? Math.max(activeCard - 1, 0)
      : activeCard;
    scrollToCard(next);
    startTimer();
  };

  return (
    <section ref={sectionRef} className="relative bg-cream-dark overflow-hidden">

      {/* Wave entrada */}
      <div className="absolute top-0 left-0 w-full leading-none z-10">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" style={{ fill: "hsl(var(--background))" }}>
          <path d="M0,0 C360,70 1080,0 1440,50 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
        <img src={transformationsImg} alt="Transformação pessoal" className="w-full h-full object-cover object-top animate-zoom-slow" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div
          className="absolute bottom-0 left-0 px-16 lg:px-24 pb-10 max-w-2xl"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s" }}
        >
          <span className="text-xs font-sans tracking-widest uppercase text-cream/70">O que pode mudar</span>
          <h3 className="mt-2 text-5xl font-semibold text-cream leading-tight">Vivencie Suas<br />Transformações</h3>
          <p className="mt-3 text-base text-cream/75 font-sans leading-relaxed max-w-lg">
            Explore um novo caminho de autoconhecimento, onde cada etapa é uma oportunidade de se reconectar consigo mesmo.
          </p>
        </div>
      </div>

      <div className="hidden md:block px-16 lg:px-24 pt-10 pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-3">
          {items.map(({ icon: Icon, label, phrase }, i) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl bg-background/70 px-4 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ease ${0.3 + i * 0.07}s, transform 0.5s ease ${0.3 + i * 0.07}s` }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                style={{ animation: `float 3.5s ease-in-out ${i * 0.25}s infinite` }}
              >
                <Icon size={17} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-sans font-semibold text-foreground leading-snug">{label}</p>
                <p className="text-xs font-sans text-muted-foreground mt-0.5">{phrase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
          <img src={transformationsImg} alt="Transformação pessoal" className="w-full h-full object-cover object-top animate-zoom-slow" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
          <div className="absolute top-16 left-6 z-20" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}>
            <span className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-cream drop-shadow-md">
              <span className="block h-px w-6 bg-cream/70" />
              O que pode mudar
            </span>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 px-6 pb-8"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}
          >
            <h3 className="text-3xl font-semibold text-cream leading-tight">Vivencie Suas<br />Transformações</h3>
            <p className="mt-2 text-sm text-cream/60 font-sans leading-relaxed">Cada etapa é uma oportunidade de se reconectar consigo mesmo.</p>
          </div>
        </div>

        <div className="bg-foreground pt-6 pb-10" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden px-6 gap-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {items.map(({ icon: Icon, label, phrase }, i) => (
              <div
                key={label}
                className="flex-shrink-0 w-[calc(100%-48px)] rounded-2xl bg-cream/5 border border-cream/10 px-6 py-6 flex items-start gap-4"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center"
                  style={{ animation: activeCard === i ? `float 3s ease-in-out infinite` : "none" }}
                >
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="pt-0.5">
                  <p className="text-base font-serif font-semibold text-cream leading-snug">{label}</p>
                  <p className="text-sm font-sans text-cream/50 mt-1.5 leading-relaxed">{phrase}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 px-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { scrollToCard(i); startTimer(); }}
                  className="rounded-full transition-all duration-400"
                  style={{
                    width: activeCard === i ? "20px" : "5px",
                    height: "5px",
                    backgroundColor: activeCard === i ? "hsl(var(--primary))" : "hsl(var(--cream) / 0.2)",
                  }}
                />
              ))}
            </div>
            <span className="text-xs font-sans text-cream/30 tabular-nums">{activeCard + 1} / {items.length}</span>
          </div>

          <div className="mt-4 mx-6 h-px bg-cream/10 rounded-full overflow-hidden">
            <div key={activeCard} className="h-full bg-primary/50 rounded-full" style={{ animation: `progress ${SLIDE_INTERVAL}ms linear forwards` }} />
          </div>
        </div>
      </div>

      {/* Wave saída */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" style={{ fill: "hsl(var(--background))" }}>
          <path d="M0,50 C480,10 960,60 1440,20 L1440,70 L0,70 Z" />
        </svg>
      </div>

      <style>{`
        @keyframes progress { from { width: 0% } to { width: 100% } }
      `}</style>
    </section>
  );
};

export default TransformationsSection;
