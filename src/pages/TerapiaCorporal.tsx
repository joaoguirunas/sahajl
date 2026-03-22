import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-bioenergetica.jpg";

const TerapiaCorporal = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Análise Bioenergética"
    title="Terapia Corporal Bioenergética"
    coloredSubtitle="Liberação de tensões acumuladas no corpo, conectando emoções e desbloqueando a energia vital."
    description={[
      "A Análise Bioenergética é uma abordagem psicoterapêutica que integra corpo e mente no processo de cura emocional. Desenvolvida por Alexander Lowen, essa metodologia entende que nossas emoções, traumas e experiências de vida ficam registrados no corpo sob a forma de tensões musculares crônicas.",
      "Através de exercícios corporais específicos, técnicas de respiração e trabalho com expressão emocional, a terapia bioenergética permite acessar e liberar emoções reprimidas, restaurando o fluxo natural de energia vital.",
      "O corpo não mente — ele carrega nossa história. Ao trabalhar diretamente com as tensões corporais, conseguimos acessar camadas profundas da experiência emocional que muitas vezes não são alcançadas apenas pela palavra.",
    ]}
    benefits={[
      "Liberação de tensões musculares crônicas",
      "Aumento da vitalidade e energia",
      "Conexão profunda entre corpo e emoções",
      "Melhoria da respiração e presença corporal",
      "Resolução de bloqueios emocionais antigos",
      "Maior capacidade de sentir prazer e alegria",
      "Fortalecimento do grounding (enraizamento)",
    ]}
    quote={{
      text: "O corpo é o inconsciente visível.",
      author: "Wilhelm Reich",
    }}
  />
);

export default TerapiaCorporal;
