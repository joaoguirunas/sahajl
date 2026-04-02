import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Psicoterapia",
    subtitle: "Atendimento Individual",
    desc: "Para quem sente que algo precisa mudar — mas ainda não sabe o quê. Um espaço seguro para se ouvir, entender seus padrões e voltar a se sentir inteiro.",
    to: "/psicoterapia-individual",
    num: "01",
  },
  {
    title: "Despertar do Movimento",
    subtitle: "Grupo de Psicoterapia",
    desc: "Quando o outro se torna espelho. Um grupo onde histórias, corpos e emoções se movem juntos — e o que estava preso começa a se soltar.",
    to: "/psicoterapia-grupo",
    num: "02",
  },
  {
    title: "Terapia Bioenergética",
    subtitle: "Trabalho Corporal",
    desc: "Para quem vive no automático, sente o corpo travado ou perdeu o contato com o próprio prazer. A bioenergética trabalha onde as palavras não chegam — no corpo, onde a emoção realmente mora.",
    to: "/terapia-corporal-bioenergetica",
    num: "03",
  },
  {
    title: "Bioescalada",
    subtitle: "Superar limites reais",
    desc: "A escalada é uma metáfora da vida. Cada movimento revela como você enfrenta desafios, lida com o medo e encontra seu próprio caminho para seguir em frente.",
    to: "/bioescalada",
    num: "04",
  },
  {
    title: "Regenera",
    subtitle: "Grupo Terapêutico Masculino",
    desc: "Para o homem que sente que algo nele quer mudar. Um grupo onde vulnerabilidade não é fraqueza — é o começo da transformação.",
    to: "/regenera",
    num: "05",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal("animate-fade-up");

  return (
    <section className="relative bg-background pt-16 pb-28 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-5xl mx-auto opacity-0">

        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.22em] uppercase text-terracotta">
              <span className="block w-8 h-px bg-terracotta" />
              Caminhos de Cuidado
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
              Como posso<br className="hidden sm:block" /> te acompanhar
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-sans max-w-[240px] leading-relaxed sm:text-right sm:pb-1">
            Cada caminho é único. Encontre o que ressoa com o que você está vivendo agora.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Cards 0–1 */}
          {services.slice(0, 2).map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card px-7 pt-7 pb-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-lg"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative z-10">
                <h4 className="text-xl font-serif font-semibold text-foreground leading-snug transition-colors duration-300 group-hover:text-primary">
                  {s.title}
                </h4>
                {s.subtitle && (
                  <p className="mt-1 text-xs font-sans text-muted-foreground/70 tracking-wide uppercase">
                    {s.subtitle}
                  </p>
                )}
                <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="relative z-10 mt-8 flex items-center justify-end">
                <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-muted-foreground transition-all duration-300 group-hover:text-terracotta group-hover:gap-2">
                  Saiba mais
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}

          {/* Card 2 — Terapia Bioenergética */}
          <Link
            key={services[2].title}
            to={services[2].to}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card px-7 pt-7 pb-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-lg"
            style={{ animationDelay: "160ms" }}
          >
            <div className="relative z-10">
              <h4 className="text-xl font-serif font-semibold text-foreground leading-snug transition-colors duration-300 group-hover:text-primary">
                {services[2].title}
              </h4>
              {services[2].subtitle && (
                <p className="mt-1 text-xs font-sans text-muted-foreground/70 tracking-wide uppercase">
                  {services[2].subtitle}
                </p>
              )}
              <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed">
                {services[2].desc}
              </p>
            </div>
            <div className="relative z-10 mt-8 flex items-center justify-end">
              <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-muted-foreground transition-all duration-300 group-hover:text-terracotta group-hover:gap-2">
                Saiba mais
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          {/* Cards 3–4 */}
          {services.slice(3).map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card px-7 pt-7 pb-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-lg"
              style={{ animationDelay: `${(i + 3) * 80}ms` }}
            >
              <div className="relative z-10">
                <h4 className="text-xl font-serif font-semibold text-foreground leading-snug transition-colors duration-300 group-hover:text-primary">
                  {s.title}
                </h4>
                {s.subtitle && (
                  <p className="mt-1 text-xs font-sans text-muted-foreground/70 tracking-wide uppercase">
                    {s.subtitle}
                  </p>
                )}
                <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="relative z-10 mt-8 flex items-center justify-end">
                <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-muted-foreground transition-all duration-300 group-hover:text-terracotta group-hover:gap-2">
                  Saiba mais
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20primeiro%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            Marcar uma conversa
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Wave to Testimonials */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-12 md:h-16" style={{ fill: "hsl(var(--warm-brown))" }}>
          <path d="M0,35 C480,0 960,70 1440,30 L1440,70 L0,70 Z" />
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
