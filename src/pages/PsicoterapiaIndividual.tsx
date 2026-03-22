import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-psicoterapia.jpg";

const PsicoterapiaIndividual = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Psicoterapia"
    title="Psicoterapia Individual"
    coloredSubtitle="Escuta qualificada e acolhedora para mais equilíbrio e desenvolvimento pessoal."
    description={[
      "A psicoterapia individual é um espaço seguro e confidencial onde você pode explorar seus sentimentos, pensamentos e comportamentos com o suporte de um profissional qualificado.",
      "Através de uma escuta atenta e técnicas terapêuticas integradas — incluindo abordagens corporais, cognitivas e emocionais — trabalhamos juntos para identificar padrões que limitam seu crescimento e encontrar caminhos para uma vida mais plena.",
      "Cada sessão é única e adaptada às suas necessidades, respeitando seu ritmo e suas particularidades. O processo terapêutico é uma jornada de autoconhecimento que pode trazer transformações profundas na forma como você se relaciona consigo mesmo e com o mundo.",
    ]}
    benefits={[
      "Autoconhecimento profundo e desenvolvimento pessoal",
      "Gestão de ansiedade, estresse e sintomas depressivos",
      "Melhoria nos relacionamentos interpessoais",
      "Superação de traumas e bloqueios emocionais",
      "Fortalecimento da autoestima e autoconfiança",
      "Desenvolvimento de inteligência emocional",
      "Clareza para tomada de decisões importantes",
    ]}
    quote={{
      text: "Conhecer a si mesmo é o começo de toda sabedoria.",
      author: "Aristóteles",
    }}
  />
);

export default PsicoterapiaIndividual;
