import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Acho que o mais bonito do auxilio que venho recebendo são as leituras das entrelinhas dos comportamentos distorcidos que estão nas camadas mais profundas. Tão em paz comigo, eu só tenho que agradecer profundamente o trabalho e a dedicação do Sahaj.",
    name: "Mariana Morais",
    role: "Arquiteta",
    photo: "https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-13-at-22.21.24-e1726601251211.jpeg",
  },
  {
    text: "Sou grata por tudo que fez para me ajudar a crescer como pessoa. Por ajudar a encontrar a força para superar as dificuldades. Tenho um carinho muito especial por você Sahaj.",
    name: "Andreia",
    role: "Empresária",
    photo: "https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-18.22.08.jpeg",
  },
  {
    text: "O Sahaj consegue reunir uma gama de habilidades muito difíceis de se achar. O conhecimento técnico da psicologia, as técnicas da bioenergética e uma experiência longa de vida pessoal e profissional. É impossível não se transformar numa pessoa melhor.",
    name: "Daniel Santiago",
    role: "Empresário",
    photo: "https://sahajlandell.com.br/wp-content/uploads/2024/09/file-1-e1726602308204.jpg",
  },
  {
    text: "Encontrei um auxílio muito generoso de um profissional fortemente equipado para me acolher, desafiar, e ajudar no processo, que é o enfrentamento de mim mesma.",
    name: "Mariana",
    role: "Atriz e Roteirista",
    photo: "https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-22.27.06-e1726598454558.jpeg",
  },
  {
    text: "Sinto que o acompanhamento terapêutico contemplou as minhas necessidades, e contribuiu pro meu desenvolvimento como homem, como ser humano. Em um ambiente seguro e de confiança, trabalhando o autoconhecimento.",
    name: "Arthur B Linhares",
    role: "Relações Internacionais",
    photo: "https://sahajlandell.com.br/wp-content/uploads/2024/09/Screenshot-2024-07-08-at-10.50.15.png",
  },
  {
    text: "Eu só consegui olhar para o meu processo porque senti segurança com quem está me guiando. Um vínculo baseado em cuidado, acolhimento e sensibilidade, que me rege pra lidar com minhas questões.",
    name: "Eduarda Azevedo",
    role: "Psicóloga",
    photo: "https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-14-at-12.40.36-e1726601135461.jpeg",
  },
];

const INTERVAL = 5000;

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX = useRef<number | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (indexOrFn: number | ((prev: number) => number)) => {
    setFading(true);
    setTimeout(() => {
      setActive((prev) => {
        const next = typeof indexOrFn === "function" ? indexOrFn(prev) : indexOrFn;
        return (next + testimonials.length) % testimonials.length;
      });
      setFading(false);
    }, 280);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo((prev) => prev + 1);
    }, INTERVAL);
  };

  useEffect(() => {
    if (!paused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  const handleSelect = (i: number) => {
    if (i === active) return;
    goTo(i);
    if (!paused) startTimer();
  };

  const handleClick = () => {
    setPaused((p) => !p);
  };

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    dragStartX.current = null;
    if (Math.abs(diff) < 30) {
      handleClick();
      return;
    }
    goTo((prev) => prev + (diff < 0 ? 1 : -1));
    if (!paused) startTimer();
  };

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX.current;
    dragStartX.current = null;
    if (Math.abs(diff) < 30) return;
    goTo((prev) => prev + (diff < 0 ? 1 : -1));
    if (!paused) startTimer();
  };

  const t = testimonials[active];

  return (
    <section ref={sectionRef} id="depoimentos" className="relative bg-warm-brown py-10 md:py-16 px-8 md:px-16 lg:px-24 overflow-hidden">

      <div
        className="max-w-4xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Header */}
        <div className="mb-6 md:mb-10 text-center">
          <span className="text-xs font-sans tracking-[0.22em] uppercase text-cream/60">
            Histórias reais
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-serif font-semibold text-cream leading-tight">
            O que acontece quando você se permite
          </h2>
        </div>

        {/* Draggable testimonial area */}
        <div
          className="relative min-h-[160px] md:min-h-[220px] flex flex-col items-center justify-center text-center select-none"
          style={{ cursor: paused ? "play" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Large decorative quote */}
          <span
            className="absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-[8rem] leading-none text-cream/8 pointer-events-none"
            aria-hidden
          >
            "
          </span>

          <div
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(8px)" : "translateY(0)",
              transition: "opacity 0.28s ease, transform 0.28s ease",
            }}
          >
            <p className="text-base md:text-xl lg:text-2xl font-serif italic text-cream leading-relaxed max-w-2xl mx-auto">
              {t.text}
            </p>
            <div className="mt-5 md:mt-8 flex items-center justify-center gap-3 md:flex-col md:gap-2">
              <img
                src={t.photo}
                alt={t.name}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-cream/30 shadow-md flex-shrink-0"
              />
              <div className="text-left md:text-center">
                <p className="text-sm font-sans font-semibold text-cream">{t.name}</p>
                <p className="text-xs font-sans text-cream/55">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Pause indicator */}
          {paused && (
            <div className="absolute top-0 right-0 flex items-center gap-1.5 text-cream/40 text-xs font-sans">
              <span className="w-2 h-2 rounded-full border border-cream/40 flex items-center justify-center">
                <span className="w-0.5 h-2 bg-cream/40 rounded-full mr-px" />
                <span className="w-0.5 h-2 bg-cream/40 rounded-full" />
              </span>
              pausado
            </div>
          )}
        </div>

        {/* Dot navigation */}
        <div className="mt-6 md:mt-12 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-label={`Depoimento ${i + 1}`}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width: active === i ? "24px" : "6px",
                height: "6px",
                backgroundColor: active === i ? "hsl(var(--cream))" : "hsl(var(--cream) / 0.3)",
              }}
            />
          ))}
        </div>

        {/* Progress bar — pauses when paused */}
        <div className="mt-6 w-32 h-px bg-cream/15 mx-auto rounded-full overflow-hidden">
          {!paused && (
            <div
              key={active}
              className="h-full bg-cream/50 rounded-full"
              style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
            />
          )}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
