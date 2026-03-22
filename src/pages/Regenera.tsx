import ServicePageLayout from "@/components/ServicePageLayout";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/10/20240907_113413-scaled.jpg";

const Regenera = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Grupo de Homens"
    title="Regenera"
    coloredSubtitle="Expedição das Masculinidades"
    description={[
      "Te convido para um espaço de reflexão e movimento sobre a importância de novas formas de masculidades existirem e serem afirmadas nos dias atuais.",
      "Uma das ações do Regenera é um grupo mensal de homens coordenado por mim e outros homens na Casa Örüm, em Florianópolis. Masculinidades referem-se às diversas formas de ser e expressar a masculinidade, que podem variar de acordo com contextos culturais, sociais, históricos e individuais. Em vez de uma única definição, as masculinidades englobam uma gama de comportamentos, atitudes e identidades que os homens podem assumir. Não existe um único modelo de masculinidade, mas sim uma complexa rede de identidades que se influenciam mutuamente e que podem ser desconstruídas para promover relações mais igualitárias e saudáveis.",
    ]}
    benefits={[
      "Oportunidade de auto-reflexão: nossos grupos oferecem um ambiente seguro e acolhedor onde você pode refletir sobre suas próprias experiências e crenças em relação às masculinidades",
      "Juntos fazemos a diferença: junte-se a uma comunidade de homens que compartilham o compromisso de desconstruir a masculinidade tóxica e machista, criando laços de solidariedade e fortalecimento",
      "Crescimento pessoal: através de reflexões e dinâmicas, incentivamos o autoconhecimento e o desenvolvimento pessoal",
      "Novas experiências de sentir e refletir o mundo: aqui, questionamos e refletimos sobre os malefícios do patriarcado, promovendo uma masculinidade saudável e inclusiva",
    ]}
    quote={{
      text: "Não se nasce homem: torna-se homem.",
      author: "Simone de Beauvoir",
    }}
  />
);

export default Regenera;
