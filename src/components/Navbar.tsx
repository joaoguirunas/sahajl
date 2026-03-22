import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ola!%20Estive%20em%20seu%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho.";

const services = [
  { label: "Psicoterapia Individual", to: "/psicoterapia-individual" },
  { label: "Psicoterapia em Grupo", to: "/psicoterapia-grupo" },
  { label: "Terapia Corporal Bioenergética", to: "/terapia-corporal-bioenergetica" },
  { label: "Bioescalada", to: "/bioescalada" },
  { label: "Regenera", to: "/regenera" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-semibold text-cream tracking-wide">
          Sahaj Landell
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/quem-sou" className="text-sm font-sans text-cream/80 hover:text-cream transition-colors">
            Quem Sou
          </Link>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-sans text-cream/80 hover:text-cream transition-colors"
            >
              Serviços
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-foreground/95 backdrop-blur-md rounded-md shadow-xl py-2 animate-fade-in">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2.5 text-sm font-sans text-cream/80 hover:text-cream hover:bg-cream/10 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isHome ? (
            <a href="#depoimentos" className="text-sm font-sans text-cream/80 hover:text-cream transition-colors">
              Depoimentos
            </a>
          ) : (
            <Link to="/#depoimentos" className="text-sm font-sans text-cream/80 hover:text-cream transition-colors">
              Depoimentos
            </Link>
          )}

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
          <Link to="/quem-sou" className="text-sm font-sans text-cream/80">Quem Sou</Link>
          {services.map((s) => (
            <Link key={s.to} to={s.to} className="text-sm font-sans text-cream/80 pl-3">
              {s.label}
            </Link>
          ))}
          <Link to="/#depoimentos" className="text-sm font-sans text-cream/80">Depoimentos</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-primary px-5 py-2 text-sm font-sans text-center text-primary-foreground">
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
