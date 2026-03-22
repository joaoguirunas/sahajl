import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-grupo.jpg";

const PsicoterapiaGrupo = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Despertar do Movimento"
    title="Psicoterapia em Grupo"
    coloredSubtitle="Suporte compartilhado e orientação especializada para transformação pessoal e bem-estar."
    description={[
      "A psicoterapia em grupo oferece uma experiência única de crescimento pessoal através da troca com outros participantes. Em um ambiente seguro e acolhedor, cada integrante tem a oportunidade de se expressar, ser ouvido e reconhecido.",
      "O grupo funciona como um espelho vivo das nossas relações, permitindo que padrões de comportamento sejam identificados e transformados com o suporte do coletivo. A experiência grupal potencializa o processo terapêutico ao oferecer múltiplas perspectivas e conexões autênticas.",
      "Utilizamos técnicas de bioenergética, dinâmicas corporais e expressivas que facilitam a conexão entre corpo, mente e emoções, promovendo uma integração profunda do ser.",
    ]}
    benefits={[
      "Desenvolvimento de habilidades sociais e comunicação",
      "Senso de pertencimento e acolhimento",
      "Diversidade de perspectivas e aprendizados",
      "Prática de empatia e escuta ativa",
      "Superação do isolamento emocional",
      "Fortalecimento de vínculos autênticos",
    ]}
    quote={{
      text: "Ninguém se cura sozinho. A cura acontece no encontro.",
      author: "Sahaj Landell",
    }}
  />
);

export default PsicoterapiaGrupo;
