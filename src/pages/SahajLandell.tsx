import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutPhoto from "@/assets/about-photo.jpg";
import heroImg from "@/assets/hero-quem-sou.jpg";

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
              Psicólogo • CRP 12/08254
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Sahaj Landell
            </h2>
            <p>
              Psicólogo Clínico com 18 anos de experiência, Terapeuta Corporal Bioenergético e
              Analista Reichiano. Formado em Psicologia pela UFSC, com especializações em Análise
              Bioenergética e abordagens corporais integrativas.
            </p>
            <p>
              Ao longo da minha trajetória, percorri mais de 20 países, vivenciando culturas
              diversas e ampliando minha compreensão sobre as múltiplas formas de ser e existir
              no mundo. Essa experiência enriqueceu profundamente minha prática clínica.
            </p>
            <p>
              Pai de duas meninas, surfista e apaixonado pela natureza. Acredito que o
              autoconhecimento é uma jornada contínua e que a terapia é um dos caminhos
              mais potentes para viver com mais autenticidade, prazer e presença.
            </p>
            <h3 className="text-xl font-serif font-semibold text-foreground pt-4">
              Formação e Especializações
            </h3>
            <ul className="space-y-2">
              {[
                "Psicologia Clínica — UFSC",
                "Análise Bioenergética — IABSC",
                "Análise Reichiana",
                "Terapia Corporal Integrativa",
                "Facilitador de Grupos Terapêuticos",
                "Criador da metodologia Bioescalada",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-serif font-semibold text-foreground pt-4">
              Áreas de Atuação
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Psicoterapia Individual",
                "Psicoterapia em Grupo",
                "Terapia Corporal Bioenergética",
                "Bioescalada",
                "Regenera Masculinidades",
                "Supervisão Clínica",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default SahajLandell;
