import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import TestimonialsSection from "./TestimonialsSection";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ola!%20Estive%20em%20seu%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho.";

interface ServicePageLayoutProps {
  heroImage: string;
  subtitle: string;
  title: string;
  coloredSubtitle?: string;
  description: string[];
  benefits?: string[];
  quote?: { text: string; author: string };
  whatsappText?: string;
  children?: React.ReactNode;
}

const ServicePageLayout = ({
  heroImage,
  subtitle,
  title,
  coloredSubtitle,
  description,
  benefits,
  quote,
  whatsappText = "Agende uma entrevista",
  children,
}: ServicePageLayoutProps) => {
  const contentRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 flex h-full flex-col justify-end px-8 md:px-16 lg:px-24 pb-12">
          <nav className="text-sm font-sans text-cream/70 mb-4">
            <Link to="/" className="hover:text-cream transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-cream">{title}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-semibold text-cream leading-[1.1] max-w-3xl">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20 px-8 md:px-16 lg:px-24">
        <div ref={contentRef} className="max-w-3xl mx-auto opacity-0">
          <span className="text-sm font-sans tracking-widest uppercase text-muted-foreground">
            {subtitle}
          </span>
          {coloredSubtitle && (
            <p className="mt-2 text-xl md:text-2xl font-serif font-semibold text-primary leading-snug">
              {coloredSubtitle}
            </p>
          )}
          <div className="mt-8 space-y-5">
            {description.map((p, i) => (
              <p key={i} className="text-base font-sans text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {benefits && benefits.length > 0 && (
            <ul className="mt-10 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm font-sans text-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {quote && (
            <blockquote className="mt-12 border-l-4 border-primary pl-6 py-2">
              <p className="text-base font-serif italic text-foreground leading-relaxed">
                "{quote.text}"
              </p>
              <cite className="mt-3 block text-sm font-sans text-muted-foreground not-italic">
                — {quote.author}
              </cite>
            </blockquote>
          )}

          {children}

          <div className="mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-primary px-8 py-4 text-sm font-sans font-medium tracking-wide text-primary-foreground transition-shadow hover:shadow-lg active:scale-[0.97]"
            >
              {whatsappText}
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default ServicePageLayout;
