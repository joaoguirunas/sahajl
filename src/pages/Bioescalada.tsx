import ServicePageLayout from "@/components/ServicePageLayout";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2022-06-17-at-17.15.59.jpeg";

const Bioescalada = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Vivência"
    title="Bioescalada"
    coloredSubtitle="Vida, movimento e Expansão"
    description={[
      "Na vivência de Bioescalada, eu Sahaj Landell junto com Gustavo Mattei, idealizador do projeto Liquen, escalador e facilitador de vivências na natureza, te guiamos para uma transformação profunda e autêntica.",
      "Uma proposta que nós criamos onde você explora os seus limites, supera desafios e descobre um novo patamar de equilíbrio e autenticidade.",
      "A junção da prática da Bioenergética com a aventura da escalada leva você a novos patamares físicos e emocionais!",
      "Será um dia onde você irá experimentar a escalada pela primeira vez de duas formas complementares:",
      "1 • para dentro do seu ser, através de exercícios de Bioenergética",
      "2 • na Natureza através de trilha e escalada em vias iniciantes",
      "Combinar essas experiências te alinha para uma conexão mais profunda consigo mesmo, expandindo seus horizontes - uma jornada de autoconhecimento única.",
      "Não precisa ter nenhuma experiência em escalada.",
    ]}
    benefits={[
      "Autoconhecimento: estimula a introspecção e a reflexão, permitindo que os praticantes explorem suas emoções, limites e potenciais",
      "Desenvolvimento da atenção plena: toda experiência te convida a estar em contato com teu corpo, suas sensações e os estímulos externos",
      "Equilíbrio energético: a Bioenergética ajuda a liberar bloqueios e promover um fluxo saudável de energia",
      "Fortalecimento mental e emocional: superar desafios físicos durante a escalada pode refletir em um fortalecimento da resiliência e da autoconfiança",
      "Maior conexão com sua vida: a combinação de atividade física, meditação, bioenergética e a natureza, promove uma integração profunda do seu ser",
      "Estimula sua criatividade: toda experiência da Bioescalada te convida a estar presente, lidar constantemente com situações inusitadas",
    ]}
    quote={{
      text: "A Montanha mais desafiadora de escalar não é aquela que se encontra na sua frente, mas aquela que carregamos dentro!",
      author: "",
    }}
  />
);

export default Bioescalada;
