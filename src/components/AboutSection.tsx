import { Link } from "react-router-dom";
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
            Eu já estive onde você está
          </h2>
          <p className="mt-2 text-sm font-sans text-primary italic">
            Sahaj — do sânscrito: aquilo que é natural, sem esforço, autêntico.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground font-sans max-w-lg">
            Também já me perdi. Já senti que algo dentro de mim precisava ser ouvido e não sabia por onde começar. Foi essa jornada que me trouxe até você.
          </p>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-5xl font-serif font-bold text-primary">19</span>
            <span className="text-sm font-sans text-muted-foreground">Anos de experiência</span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground font-sans max-w-lg">
            Psicólogo, pai de duas meninas, viajante de mais de 20 países. Atuo com atendimentos individuais e em grupo, integrando corpo, mente e emoção em um espaço de escuta genuína — presencial e online.
          </p>
          <div className="mt-6 rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4">
            <p className="text-sm font-sans text-foreground leading-relaxed italic">
              "O que não é integrado vira sintoma. O que não é dito vira silêncio que pesa. O que não é acolhido vira ausência de si. É disso que cuidamos aqui."
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["Atendimento Presencial", "Atendimento Online", "Terapia em Grupo", "Conexão com a Natureza"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-sans text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              )
            )}
          </div>
          <Link
            to="/quem-sou"
            className="mt-8 inline-flex items-center gap-2 text-sm font-sans font-medium
              text-primary-foreground bg-primary border border-primary px-6 py-3 rounded-full
              w-full justify-center md:w-auto
              hover:shadow-md hover:gap-3 transition-all duration-300"
          >
            Me conheça melhor
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
