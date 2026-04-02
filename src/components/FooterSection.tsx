import { Mail, Phone, Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20primeiro%20atendimento.";

const FooterSection = () => {
  return (
    <footer className="bg-foreground">

      {/* ── MOBILE ── */}
      <div className="md:hidden px-8 pt-8 pb-10 flex flex-col items-center text-center gap-6">

        {/* Identity */}
        <div>
          <p className="font-serif font-semibold text-cream text-base">Sahaj Landell</p>
          <p className="text-xs font-sans text-cream/40 mt-1 tracking-wide">Psicólogo · Psicoterapia Integrativa</p>
        </div>

        {/* Divider */}
        <span className="block w-8 h-px bg-cream/15" />

        {/* Contacts — só ícones */}
        <div className="flex items-center gap-6">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-cream/40 hover:text-cream transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.847L0 24l6.344-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.002-1.371l-.358-.213-3.768.892.952-3.67-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
          </a>
          <a href="mailto:landellm@gmail.com" aria-label="Email" className="text-cream/40 hover:text-cream transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://instagram.com/sahaj.landell" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/40 hover:text-cream transition-colors">
            <Instagram size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs font-sans text-cream/20">
          © {new Date().getFullYear()} Sahaj Landell
        </p>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex max-w-6xl mx-auto px-16 py-8 flex-row items-center justify-between gap-4">

        <div>
          <p className="font-serif font-semibold text-cream text-sm">Sahaj Landell</p>
          <p className="text-xs font-sans text-cream/40 mt-0.5">Psicólogo · Psicoterapia Integrativa</p>
        </div>

        <div className="flex items-center gap-5">
          <a href="tel:+5548991945296" className="flex items-center gap-1.5 text-xs font-sans text-cream/40 hover:text-cream transition-colors">
            <Phone size={12} className="text-primary" />
            (48) 99194-5296
          </a>
          <a href="mailto:landellm@gmail.com" className="flex items-center gap-1.5 text-xs font-sans text-cream/40 hover:text-cream transition-colors">
            <Mail size={12} className="text-primary" />
            landellm@gmail.com
          </a>
          <a href="https://instagram.com/sahaj.landell" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-sans text-cream/40 hover:text-cream transition-colors">
            <Instagram size={12} className="text-primary" />
            @sahaj.landell
          </a>
        </div>

        <p className="text-xs font-sans text-cream/20">
          © {new Date().getFullYear()} Sahaj Landell
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
