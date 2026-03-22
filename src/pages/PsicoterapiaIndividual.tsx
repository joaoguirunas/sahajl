import ServicePageLayout from "@/components/ServicePageLayout";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/09/DSC02520-scaled.jpg";

const PsicoterapiaIndividual = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Apresento a"
    title="Psicoterapia Individual"
    coloredSubtitle="Escuta acolhedora e qualificada"
    description={[
      "Ofereço um ambiente seguro e empático para entender suas necessidades, desejos, sonhos, dores e ansiedades.",
      "Abordagens terapêuticas diversificadas. Utilizo técnicas como a bioenergética e meditações ativas, além de recursos artísticos como dança, para promover a integração entre suas dimensões de ser.",
      "Ajudo você a refletir sobre sua história pessoal, familiar e social, e os impactos dela na realização de seus objetivos de vida.",
      "Atendimento personalizado. Análise de sua saúde emocional e energética para oferecer abordagens e ferramentas terapêuticas específicas para suas necessidades.",
    ]}
    benefits={[
      "Autoconhecimento: entenda melhor os próprios sentimentos, pensamentos e comportamentos",
      "Gerenciamento das Emoções: permite explorar e lidar com sua tristeza, ansiedade, medo, raiva, compulsão",
      "Resolução de Conflitos Internos: ajuda a trabalhar questões internas e conflitos, proporcionando clareza e soluções para problemas pessoais",
      "Melhoria da Autoestima: contribui para o fortalecimento da autoestima e da autoconfiança, promovendo uma imagem positiva de si mesmo",
      "Desenvolvimento de Habilidades: ensina técnicas de enfrentamento e habilidades sociais que podem ser aplicadas em diversas situações da vida",
      "Suporte em Momentos Difíceis: oferece um espaço seguro para discutir desafios e crises, proporcionando suporte emocional",
      "Fortalecimento de Relacionamentos: melhora a comunicação e a compreensão, impactando positivamente os relacionamentos interpessoais",
    ]}
    quote={{
      text: "O caminho se faz caminhando. Só você pode dar o primeiro passo!",
      author: "",
    }}
  />
);

export default PsicoterapiaIndividual;
