import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/hero-regenera.jpg";

const Regenera = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Masculinidades Conscientes"
    title="Regenera"
    coloredSubtitle="Um espaço de acolhimento e transformação para homens que desejam se reconectar com sua essência."
    description={[
      "O Regenera Masculinidades é um programa voltado para homens que buscam uma relação mais saudável e consciente com sua masculinidade. Em um espaço seguro e livre de julgamentos, os participantes são convidados a explorar suas vulnerabilidades, emoções e padrões de comportamento.",
      "Vivemos em uma cultura que ensina os homens a reprimir suas emoções, ser fortes o tempo todo e evitar a vulnerabilidade. O Regenera propõe um caminho diferente — um espaço onde ser homem inclui sentir, chorar, pedir ajuda e se conectar genuinamente com outros homens.",
      "Através de encontros regulares que combinam roda de conversa, exercícios bioenergéticos e dinâmicas vivenciais, os participantes desenvolvem uma nova relação com suas emoções e com o que significa ser homem no mundo contemporâneo.",
    ]}
    benefits={[
      "Reconexão com emoções reprimidas",
      "Desenvolvimento de vulnerabilidade saudável",
      "Construção de vínculos masculinos autênticos",
      "Revisão de padrões tóxicos de masculinidade",
      "Melhoria nos relacionamentos afetivos",
      "Fortalecimento da saúde mental",
    ]}
    quote={{
      text: "A verdadeira força de um homem está na coragem de sentir.",
      author: "Sahaj Landell",
    }}
  />
);

export default Regenera;
