import ServicePageLayout from "@/components/ServicePageLayout";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/12/DSC03111-scaled.jpg";

const TerapiaCorporal = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Psicoterapia Corporal Bioenergética"
    title="Terapia Corporal Bioenergética"
    coloredSubtitle="Liberte suas emoções, recupere sua energia e viva as dimensões entre o pensar, sentir e expressar na vida de forma mais integrada"
    description={[
      "A Técnica de terapia Bioenergética, desenvolvida a partir das ideias de Wilhelm Reich e sistematizada pelo psicanalista norte-americano Alexander Lowen, utiliza exercícios e movimentos sincronizados com a respiração para ativar sua energia vital. Bioenergética significa energia da vida. Durante esses exercícios, sua energia se movimenta pelo corpo e encontra obstáculos emocionais, que foram acumulados ao longo da vida. Ao liberar essas emoções presas, você não precisa gastar mais energia para segurá-las, resultando em mais vitalidade, alegria, amor e uma vida sexual mais saudável.",
    ]}
    benefits={[
      "Mais energia e alegria: libere emoções reprimidas e redescubra a alegria e vitalidade em sua vida cotidiana",
      "Melhora da depressão: através da expressão das emoções o corpo se auto regula, alivia os sintomas de depressão e proporciona bem-estar",
      "Redução da ansiedade: ansiedade é uma sensação trágica do futuro. Quanto maior a conexão com seu corpo, a ansiedade perde força e promove uma vida mais equilibrada e saudável",
      "Maior conexão com o prazer e sua energia sexual: restaure e resgate sua energia sexual, libido e o prazer da vida",
    ]}
    quote={{
      text: "O corpo é um templo do autoconhecimento",
      author: "Friedrich Nietzsche",
    }}
  />
);

export default TerapiaCorporal;
