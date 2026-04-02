import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991945296?text=Ol%C3%A1%2C%20Sahaj!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20primeiro%20atendimento.";

const services = [
  { label: "Psicoterapia Individual", to: "/psicoterapia-individual" },
  { label: "Despertar do Movimento", to: "/psicoterapia-grupo" },
  { label: "Terapia Corporal Bioenergética", to: "/terapia-corporal-bioenergetica" },
  { label: "Bioescalada", to: "/bioescalada" },
  { label: "Regenera", to: "/regenera" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToServices = () => {
    if (location.pathname === "/") {
      document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#servicos");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-foreground/95 backdrop-blur-md shadow-sm py-3" : "py-5"
        }`}
        style={!scrolled ? { background: "linear-gradient(to bottom, hsl(var(--foreground) / 0.55) 0%, transparent 100%)" } : undefined}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>

          <Link to="/" className="font-serif font-semibold text-cream tracking-wide text-lg">
            Sahaj Landell
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/quem-sou"
              className={`text-sm font-sans transition-colors ${isActive("/quem-sou") ? "text-cream" : "text-cream/70 hover:text-cream"}`}
            >
              Sobre mim
            </Link>

            <button
              onClick={goToServices}
              className="text-sm font-sans text-cream/70 hover:text-cream transition-colors"
            >
              Formas de cuidado
            </button>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-cream/25 px-5 py-2 text-sm font-sans text-cream/80 hover:bg-cream/10 hover:text-cream hover:border-cream/40 transition-all">
              Vamos conversar
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-cream z-[60] relative p-1" aria-label="Menu">
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span className="block h-px bg-cream transition-all duration-300 origin-center"
                style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none", width: open ? "20px" : "20px" }} />
              <span className="block h-px bg-cream transition-all duration-300"
                style={{ opacity: open ? 0 : 1, width: "14px" }} />
              <span className="block h-px bg-cream transition-all duration-300 origin-center"
                style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none", width: "20px" }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu — slide from right */}
      <div
        className="fixed inset-0 z-[55] md:hidden"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {/* Full screen panel */}
        <div
          className="absolute inset-0 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            background: "hsl(var(--foreground))",
            transform: open ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {/* Top bar — safe area aware */}
          <div className="flex items-center justify-between px-7 pb-6" style={{ paddingTop: "max(4rem, env(safe-area-inset-top) + 1.25rem)" }}>
            <Link to="/" onClick={() => setOpen(false)} className="font-serif font-semibold text-cream text-lg">
              Sahaj Landell
            </Link>
            <button onClick={() => setOpen(false)} className="text-cream/60 hover:text-cream transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Nav items */}
          <div className="flex-1 px-7 py-4 flex flex-col justify-center gap-1 overflow-y-auto">

            <Link to="/quem-sou" className="group py-5 border-b border-cream/10 block">
              <span className="font-serif text-2xl text-cream/80 group-hover:text-cream transition-colors">Sobre mim</span>
            </Link>

            <div className="py-5 border-b border-cream/10">
              <span className="font-serif text-2xl text-cream/80 block mb-5">Formas de cuidado</span>
              <div className="flex flex-col gap-4 pl-1">
                {services.map((s) => (
                  <Link key={s.to} to={s.to}
                    className="text-base font-sans text-cream/60 hover:text-cream transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Identity + CTA */}
          <div className="px-7 pb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 rounded-full bg-primary py-4 text-sm font-sans font-medium text-primary-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.526 5.847L0 24l6.344-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.002-1.371l-.358-.213-3.768.892.952-3.67-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Vamos conversar
            </a>
            <p className="text-center text-xs font-sans text-cream/25 mt-3">
              Uma conversa inicial, sem compromisso
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
