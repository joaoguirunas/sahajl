import { Mail, Phone, MapPin } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <img
            src={aboutPhoto}
            alt="Sahaj Landell"
            className="h-16 w-16 rounded-full object-cover shadow-md"
          />
          <p className="mt-4 text-sm font-sans text-cream/70 leading-relaxed max-w-sm">
            Saúde Emocional é buscar o equilíbrio em constantes desequilíbrios que a Vida apresenta. Isso é crescimento!
          </p>
        </div>

        <div>
          <h4 className="text-lg font-serif font-semibold text-cream">Contato</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm font-sans text-cream/70">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
              <a href="https://maps.app.goo.gl/iZQFmokAysaY37NQ8" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                Coletivo Flor da Vida — Rio Tavares
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm font-sans text-cream/70">
              <Mail size={16} className="flex-shrink-0 text-primary" />
              <a href="mailto:landellm@gmail.com" className="hover:text-cream transition-colors">landellm@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 text-sm font-sans text-cream/70">
              <Phone size={16} className="flex-shrink-0 text-primary" />
              <a href="tel:+5548991945296" className="hover:text-cream transition-colors">(48) 99194-5296</a>
            </li>
          </ul>
          <a
            href="https://instagram.com/sahaj.landell"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-sans text-primary hover:text-cream transition-colors"
          >
            @sahaj.landell
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-cream/10">
        <p className="text-xs font-sans text-cream/40 text-center">
          © Sahaj Landell {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
