import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "Acho que o mais bonito do auxilio que venho recebendo são as leituras das entrelinhas dos comportamentos distorcidos que estão nas camadas mais profundas. Eu nunca achei que pudesse estar quase ...rs. Tão em paz comigo, eu só tenho que agradecer profundamente o trabalho e a dedicação do Sahaj.",
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
    text: "O Sahaj consegue reunir uma gama de habilidades muito difíceis de se achar. O conhecimento técnico da psicologia, as técnicas da bioenergética e uma experiência longa de vida pessoal e profissional. É impossível não se transformar numa pessoa melhor e mais próspera na vida durante e depois das sessões com ele.",
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
    text: "Num momento de grandes mudanças e de movimentos significativos, na minha vida. Sinto que o acompanhamento terapêutico contemplou as minhas necessidades, e contribuiu pro meu desenvolvimento como homem, como ser humano. Em um ambiente seguro e de confiança, estivemos reunidos presencialmente e virtualmente, trabalhando o autoconhecimento.",
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

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-warm-brown py-24 px-8 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-4xl mx-auto text-center opacity-0">
        <span className="text-sm font-sans tracking-widest uppercase text-cream/60">
          Depoimentos Autênticos
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-cream">
          Palavras de Quem Sentiu
        </h2>

        <div className="mt-12 min-h-[200px] flex flex-col items-center justify-center">
          <img
            src={t.photo}
            alt={t.name}
            className="w-20 h-20 rounded-full object-cover shadow-lg mb-6 border-2 border-cream/20"
          />
          <p
            key={current}
            className="text-base md:text-lg font-sans text-cream/90 leading-relaxed max-w-2xl mx-auto italic animate-fade-in"
          >
            {t.text}
          </p>
          <div className="mt-8">
            <p className="text-sm font-sans font-semibold text-cream">{t.name}</p>
            <p className="text-xs font-sans text-cream/60">{t.role}</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="h-10 w-10 rounded-full border border-cream/30 flex items-center justify-center text-cream/70 hover:bg-cream/10 transition-colors active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  current === i ? "w-6 bg-primary" : "w-2 bg-cream/30"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="h-10 w-10 rounded-full border border-cream/30 flex items-center justify-center text-cream/70 hover:bg-cream/10 transition-colors active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
