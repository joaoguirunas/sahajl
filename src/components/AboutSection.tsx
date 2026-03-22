import { useScrollReveal } from "@/hooks/useScrollReveal";

const aboutPhoto = "https://sahajlandell.com.br/wp-content/uploads/2024/07/DSC02578-scaled-e1720906908279.jpg";

const AboutSection = () => {
  const leftRef = useScrollReveal("animate-slide-left");
  const rightRef = useScrollReveal("animate-slide-right");

  return (
    <section className="bg-background py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div ref={leftRef} className="opacity-0">
          <img
            src={aboutPhoto}
            alt="Sahaj Landell"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
          />
        </div>

        <div ref={rightRef} className="opacity-0">
          <span className="text-sm font-sans tracking-widest uppercase text-muted-foreground">
            Que bom que você chegou!
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Eu sou Sahaj Landell
          </h2>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-5xl font-serif font-bold text-primary">18</span>
            <span className="text-sm font-sans text-muted-foreground">Anos de experiência</span>
          </div>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground font-sans max-w-lg">
            Psicólogo, pai de duas meninas e um profissional com 18 anos de experiência dedicados
            à compreensão profunda das relações humanas. Minha jornada pessoal e profissional me
            levou a mais de 20 países, onde explorei culturas diversas, ampliando minha visão sobre
            as complexidades e belezas da condição humana. Especialista em Psicologia Institucional, atuo com atendimentos individuais e em grupo, tanto presencial quanto online, integrando práticas que vão além do consultório tradicional.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["Atendimento Presencial", "Atendimento on-line", "Desenvolvimento de coletividades", "Conexão com a natureza"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-sans text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              )
            )}
          </div>
          <p className="mt-8 text-sm font-sans font-medium text-muted-foreground tracking-wide">
            Sahaj Landell
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
