import transformationsImg from "@/assets/transformations.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  "Reconecte-se com o Prazer e a Alegria de Viver.",
  "Fortaleça Sua Autoconfiança e Seu Valor Próprio.",
  "Libere Bloqueios Emocionais e Energéticos.",
  "Integre Corpo, Mente e Emoções.",
  "Melhore Suas Relações Interpessoais.",
  "Reduza Estresse, Ansiedade e Sintomas Depressivos.",
  "Desenvolva Resiliência Emocional.",
  "Descubra Novas Formas de Viver e Amar.",
  "Reconheça e Expresse Suas Emoções de Forma Saudável.",
];

const TransformationsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-cream-dark py-24 px-8 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start opacity-0">
        <div>
          <img
            src={transformationsImg}
            alt="Transformação pessoal"
            className="rounded-lg shadow-lg w-full object-cover aspect-[3/4] max-w-md"
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
            Vivencie Suas Transformações
          </h3>
          <p className="mt-4 text-base text-muted-foreground font-sans leading-relaxed">
            Explore um novo caminho de autoconhecimento, onde cada etapa é uma oportunidade
            de se reconectar consigo mesmo.
          </p>
          <ul className="mt-8 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
