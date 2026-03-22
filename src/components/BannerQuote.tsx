import { useScrollReveal } from "@/hooks/useScrollReveal";

const BannerQuote = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-primary py-10 px-8 md:px-16">
      <p className="text-center text-lg md:text-xl font-serif italic text-primary-foreground max-w-4xl mx-auto leading-relaxed">
        Autoconhecimento é escutar a si mesmo. Estou aqui para te acompanhar nessa jornada.
      </p>
    </section>
  );
};

export default BannerQuote;
