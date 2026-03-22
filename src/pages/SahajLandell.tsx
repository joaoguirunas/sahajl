import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const heroImg = "https://sahajlandell.com.br/wp-content/uploads/2024/10/DSC03146-scaled-e1730851624862.jpg";
const aboutPhoto = "https://sahajlandell.com.br/wp-content/uploads/2024/07/DSC02578-scaled-e1720906908279.jpg";

const SahajLandell = () => {
  const ref = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img src={heroImg} alt="Sahaj Landell" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 flex h-full flex-col justify-end px-8 md:px-16 lg:px-24 pb-12">
          <nav className="text-sm font-sans text-cream/70 mb-4">
            <Link to="/" className="hover:text-cream transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-cream">Sahaj Landell</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-semibold text-cream leading-[1.1]">
            Sahaj Landell
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start opacity-0">
          <div>
            <img
              src={aboutPhoto}
              alt="Sahaj Landell"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-[4/5] sticky top-24"
            />
          </div>
          <div className="space-y-6 text-base font-sans text-muted-foreground leading-relaxed">
            <span className="text-sm tracking-widest uppercase text-muted-foreground">
              Me conheça um pouco melhor
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Sahaj Landell
            </h2>
            <p>
              Sou pai de uma menina de 6 anos e outra de 19. Psicólogo, com 47 anos, venho me dedicando à compreensão dos laços humanos e ao trabalho para diminuir as desigualdades sociais. Minha jornada pessoal e profissional me levou a explorar mais de 20 países, sempre em busca de conexões profundas e significativas com diferentes culturas e histórias.
            </p>
            
            <h3 className="text-xl font-serif font-semibold text-foreground pt-4">
              Formação e Experiência
            </h3>
            <p>
              Sou especialista em Psicologia Institucional e há 18 anos atuo no atendimento individual e em grupo. Minha prática é baseada em uma escuta qualificada e acolhedora, integrando diversas abordagens terapêuticas, o contato com o corpo, a natureza e o movimento.
            </p>
            <p>
              Trabalhei por mais de uma década na implementação de políticas públicas e na garantia de direitos para crianças e adolescentes junto a organizações não governamentais e governamentais. Essa experiência me proporcionou uma compreensão profunda sobre os impactos dos processos sócio-históricos e políticos na vida das pessoas.
            </p>

            <h3 className="text-xl font-serif font-semibold text-foreground pt-4">
              Filosofia de Vida
            </h3>
            <p>
              Acredito que a vida é um jogo que pode ser leve, mas que exige firmeza e maleabilidade para se movimentar em cada situação. Essa percepção vem de mais de 20 anos de prática em Capoeira Angola, uma arte que respeito profundamente pela sua ancestralidade e pela circularidade dos processos que ela ensina.
            </p>
            <p>
              Minha conexão com a natureza e a busca por práticas que me reconectem com meu lado mais instintivo são pilares fundamentais na minha vida. Desde criança, fui estimulado pelos meus pais a praticar esportes e a explorar espaços naturais, o que moldou meu jeito de existir no mundo.
            </p>

            <h3 className="text-xl font-serif font-semibold text-foreground pt-4">
              Práticas e Hobbies
            </h3>
            <p>
              Além da Capoeira Angola, há 10 anos encontrei na dança uma fonte de nutrição para o corpo e a alma. Mais recentemente, o surf e a escalada em pedras têm sido caminhos para novas descobertas e conexões com meu corpo, minhas emoções e a natureza.
            </p>
            <p>
              Essas experiências pessoais são intrinsecamente ligadas ao meu trabalho como psicólogo. Não se tratam apenas de teorias e técnicas terapêuticas, mas de uma curiosidade permanente em buscar experiências de autoconhecimento, crescimento emocional e transformação.
            </p>
            <p>
              A diversidade de histórias, culturas e belezas naturais de nossa humanidade são minha paixão e guia. Convido todas as pessoas a se juntarem a mim nessa jornada de descoberta e crescimento, onde cada vínculo e cada relação humana são uma oportunidade de aprendizado e evolução.
            </p>

            <ul className="space-y-2 pt-4">
              {[
                "Paternidade",
                "Capoeira Angola",
                "A dança e o Contato Improvisação",
                "Viajar e conhecer novas culturas",
                "Contato com a natureza",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default SahajLandell;
