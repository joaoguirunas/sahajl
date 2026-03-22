import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ola!%20Estive%20em%20seu%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="text-xl font-serif font-semibold text-cream tracking-wide">
          Sahaj Landell
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm font-sans text-cream/80 hover:text-cream transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-sm font-sans text-cream/80 hover:text-cream transition-colors">
            Serviços
          </a>
          <a href="#depoimentos" className="text-sm font-sans text-cream/80 hover:text-cream transition-colors">
            Depoimentos
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-primary px-5 py-2 text-sm font-sans font-medium text-primary-foreground hover:shadow-lg transition-shadow active:scale-[0.97]"
          >
            Contato
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md px-8 py-6 flex flex-col gap-4">
          <a href="#sobre" onClick={() => setOpen(false)} className="text-sm font-sans text-cream/80">Sobre</a>
          <a href="#servicos" onClick={() => setOpen(false)} className="text-sm font-sans text-cream/80">Serviços</a>
          <a href="#depoimentos" onClick={() => setOpen(false)} className="text-sm font-sans text-cream/80">Depoimentos</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-primary px-5 py-2 text-sm font-sans text-center text-primary-foreground">
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
