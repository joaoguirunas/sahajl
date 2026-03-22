import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-bioescalada.jpg";

const Bioescalada = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Experiência Transformadora"
    title="Bioescalada"
    coloredSubtitle="Uma experiência única que combina terapia bioenergética e escalada na natureza."
    description={[
      "A Bioescalada é uma metodologia inovadora criada por Sahaj Landell que une os princípios da Análise Bioenergética com a prática da escalada em rocha. É uma experiência imersiva na natureza que desafia limites físicos e emocionais de forma segura e acompanhada.",
      "Na parede de rocha, somos convidados a enfrentar nossos medos, confiar no próprio corpo e descobrir recursos internos que desconhecíamos. A escalada se torna uma metáfora viva dos desafios da vida — e a forma como lidamos com ela revela muito sobre como enfrentamos nossas dificuldades cotidianas.",
      "A experiência é realizada em grupo, em ambiente natural, e inclui momentos de preparação corporal bioenergética, a escalada em si e rodas de partilha para integração da vivência.",
    ]}
    benefits={[
      "Superação de medos e crenças limitantes",
      "Fortalecimento da autoconfiança e coragem",
      "Conexão profunda com a natureza",
      "Experiência de grupo e suporte mútuo",
      "Integração corpo-mente em situação real de desafio",
      "Descoberta de recursos internos desconhecidos",
      "Expansão dos limites pessoais",
    ]}
    quote={{
      text: "Na rocha, não há como fingir. O corpo revela quem somos de verdade.",
      author: "Sahaj Landell",
    }}
  />
);

export default Bioescalada;
