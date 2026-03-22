import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/12/DSC02648-scaled.jpg";
const aboutPhoto = "https://sahajlandell.com.br/wp-content/uploads/2024/07/DSC02578-scaled-e1720906908279.jpg";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ola!%20Estive%20em%20seu%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho.";

const faqs = [
  {
    q: "Psicoterapia é para todas as pessoas?",
    a: "Sim, não existe qualquer restrição. Todas as pessoas, homens, mulheres, LGBTQA+ de todas as idades podem se beneficiar da psicoterapia individual.",
  },
  {
    q: "O que é a Bioenergética?",
    a: "A Terapia Bioenergética é uma abordagem desenvolvida a partir das ideias de Wilhelm Reich e sistematizada por Alexander Lowen. Seu fundamento principal é a compreensão de que as emoções estão intrinsecamente ligadas ao corpo. A terapia visa restaurar a dinâmica energética corporal, permitindo que as pessoas fluam com a vida, enfrentando seus altos e baixos de maneira mais integrada. Por meio de exercícios corporais adaptados às necessidades da pessoa e de técnicas respiratórias, a Bioenergética busca aumentar a energia vital do corpo, mobilizar as couraças psicossomáticas e encorajar a expressão de emoções e sensações.",
  },
  {
    q: "O que são as Meditações Ativas",
    a: "Meditar é silenciar a mente, conectar com o momento presente. Vivemos em um mundo que nos convida a todo momento a sair da presença. As meditações ativas de Osho são práticas que utilizam movimento, expressão e silêncio para ajudar as pessoas a liberar tensões e se conectar consigo mesmas. A ideia central é que, em vez de simplesmente sentar e meditar, você pode usar o corpo para liberar energia e emoções.",
  },
  {
    q: "Qual a importância de uma escuta qualificada no processo terapêutico?",
    a: "A escuta qualificada é fundamental no processo terapêutico por várias razões. Validação emocional, quando o terapeuta escuta de forma atenta e empática, o cliente se sente valorizado e compreendido. Criação de vínculo, a escuta ativa fortalece a aliança terapêutica. Identificação de padrões, o terapeuta pode perceber padrões de comportamento ou pensamentos que o cliente pode não notar. Promoção da autorreflexão e maior autonomia.",
  },
  {
    q: "O que é Psicoterapia e quais as diferenças entre a Psicoterapia On-line e Presencial?",
    a: "A psicoterapia é um processo terapêutico que envolve a interação entre um profissional de saúde mental e um cliente, com o objetivo de tratar questões emocionais, comportamentais ou psicológicas. Todos os aspectos são possíveis e viáveis de serem garantidos de forma on-line ou presencial. Presencialmente, a relação terapêutica acontece na fisicalidade, traz as diferentes dimensões que compõem esse encontro.",
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
              Me conheça melhor
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Sahaj Landell
            </h2>
            <div className="mt-6 space-y-4 text-base font-sans text-muted-foreground leading-relaxed">
              <p>
                Sou pai de uma menina de 6 anos e outra de 19. Psicólogo, com 47 anos, venho me dedicando à compreensão dos laços humanos e ao trabalho para diminuir as desigualdades sociais. Minha jornada pessoal e profissional me levou a explorar mais de 20 países, sempre em busca de conexões profundas e significativas com diferentes culturas e histórias.
              </p>
              <p>
                Sou especialista em Psicologia Institucional e há 18 anos atuo no atendimento individual e em grupo. Minha prática é baseada em uma escuta qualificada e acolhedora, integrando diversas abordagens terapêuticas, o contato com o corpo, a natureza e o movimento.
              </p>
              <p>
                Trabalhei por mais de uma década na implementação de políticas públicas e na garantia de direitos para crianças e adolescentes junto a organizações não governamentais e governamentais. Essa experiência me proporcionou uma compreensão profunda sobre os impactos dos processos sócio-históricos e políticos na vida das pessoas.
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
