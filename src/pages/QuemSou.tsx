import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-quem-sou.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ola!%20Estive%20em%20seu%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho.";

const faqs = [
  {
    q: "O que é psicoterapia?",
    a: "A psicoterapia é um processo de autoconhecimento e cura emocional, conduzido por um profissional qualificado, que utiliza técnicas e abordagens específicas para ajudar o indivíduo a compreender e transformar padrões de pensamento, comportamento e emoção.",
  },
  {
    q: "Como funciona o atendimento online?",
    a: "O atendimento online acontece por videochamada em plataforma segura, com a mesma qualidade e confidencialidade do atendimento presencial. Você precisa apenas de um espaço privado, conexão à internet e um dispositivo com câmera.",
  },
  {
    q: "Qual a duração de cada sessão?",
    a: "Cada sessão tem duração de aproximadamente 50 minutos. A frequência é geralmente semanal, podendo ser ajustada conforme a necessidade de cada pessoa.",
  },
  {
    q: "O que é Análise Bioenergética?",
    a: "É uma abordagem psicoterapêutica que integra corpo e mente, entendendo que nossas emoções e experiências ficam registradas no corpo. Através de exercícios corporais e trabalho emocional, promove a liberação de tensões e o resgate da vitalidade.",
  },
];

const QuemSou = () => {
  const bioRef = useScrollReveal();
  const faqRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img src={heroImg} alt="Quem sou" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 flex h-full flex-col justify-end px-8 md:px-16 lg:px-24 pb-12">
          <nav className="text-sm font-sans text-cream/70 mb-4">
            <Link to="/" className="hover:text-cream transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-cream">Quem Sou</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-semibold text-cream leading-[1.1]">
            Quem Sou
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={bioRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center opacity-0">
          <div>
            <img
              src={aboutPhoto}
              alt="Sahaj Landell"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <span className="text-sm font-sans tracking-widest uppercase text-muted-foreground">
              Conheça minha história
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Eu sou Sahaj Landell
            </h2>
            <p className="mt-2 text-lg font-serif text-primary">
              Psicólogo • CRP 12/08254
            </p>
            <div className="mt-6 space-y-4 text-base font-sans text-muted-foreground leading-relaxed">
              <p>
                Psicólogo, pai de duas meninas e um profissional com 18 anos de experiência dedicados
                à compreensão profunda das relações humanas. Minha jornada pessoal e profissional me
                levou a mais de 20 países, onde explorei culturas diversas, ampliando minha visão sobre
                as complexidades e belezas da condição humana.
              </p>
              <p>
                Sou Terapeuta Corporal Bioenergético e Analista Reichiano, com formação em Psicologia
                Clínica pela UFSC. Minha prática integra corpo, mente e emoções, oferecendo um
                acompanhamento terapêutico profundo e humanizado.
              </p>
              <p>
                Acredito que a saúde emocional é buscar o equilíbrio em constantes desequilíbrios que
                a Vida apresenta. Isso é crescimento!
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-sm bg-primary px-8 py-4 text-sm font-sans font-medium tracking-wide text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
            >
              Agende uma entrevista
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark py-20 px-8 md:px-16 lg:px-24">
        <div ref={faqRef} className="max-w-3xl mx-auto opacity-0">
          <h2 className="text-3xl font-semibold text-foreground text-center">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-foreground/10">
                <AccordionTrigger className="text-left font-sans text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default QuemSou;
