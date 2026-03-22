import ServicePageLayout from "@/components/ServicePageLayout";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/12/DSC03113-scaled.jpg";

const PsicoterapiaGrupo = () => (
  <ServicePageLayout
    heroImage={heroImg}
    subtitle="Psicoterapia em Grupo"
    title="Despertar do Movimento"
    coloredSubtitle="A dança como caminho para o autoconhecimento."
    description={[
      "O movimento do corpo se torna uma poderosa ferramenta de escuta interna, permitindo que exploremos nossas emoções e conexões.",
      "O Grupo de psicoterapia Despertar do Movimento é um trabalho terapêutico que amplia a consciência sobre como nos relacionamos com nossos sentimentos, com o corpo do outro e com o mundo ao nosso redor.",
      "O que me move? Como me expresso? A proposta é investigar essas questões por meio de reflexões compartilhadas e práticas de movimento, aliadas a uma escuta atenta dos processos emocionais. Criamos um espaço afetivo que permite explorar áreas sensíveis de intimidade e confiança.",
      "Através de dinâmicas de grupo, exercícios da Bioenergética e práticas de dança e contato improvisação convido os participantes a perceber e expressar as barreiras que bloqueiam seus movimentos e emoções. Essa expressão ajuda a resgatar a energia vital e a espontaneidade que é intrínseca a todos nós.",
    ]}
    benefits={[
      "Aumento da consciência corporal e emocional",
      "Investigação de padrões relacionais - o que sinto versos o que expresso",
      "Espaço afetivo e seguro para expressar suas emoções",
      "Resgatar sua espontaneidade e criatividade",
      "Fortalecimento de vínculos",
    ]}
    quote={{
      text: "O movimento expressa o que está dentro de nós; ao dançar, não apenas nos movemos, mas também nos tornamos conscientes de quem somos.",
      author: "Rudolf Laban",
    }}
  />
);

export default PsicoterapiaGrupo;
