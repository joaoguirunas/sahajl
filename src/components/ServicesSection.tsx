import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { image: service1, title: "Psicoterapia Individual", desc: "Escuta qualificada e acolhedora para mais equilíbrio e desenvolvimento pessoal." },
  { image: service2, title: "Psicoterapia em Grupo", desc: "Suporte compartilhado e orientação especializada para transformação pessoal e bem-estar." },
  { image: service3, title: "Terapia Corporal Bioenergética", desc: "Liberação de tensões acumuladas no corpo, conectando emoções e desbloqueando a energia vital." },
  { image: service4, title: "Bioescalada em Grupo", desc: "Uma experiência única que combina terapia bioenergética e escalada na natureza." },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24 px-8 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-5">
                <h4 className="text-lg font-serif font-semibold text-cream leading-snug">
                  {s.title}
                </h4>
                <p className="mt-1.5 text-xs font-sans text-cream/80 leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
