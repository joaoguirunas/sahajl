import { useState } from "react";
import { Smartphone, X, RotateCcw } from "lucide-react";

// Não renderiza o botão dentro do próprio iframe
const isInsidePreview = new URLSearchParams(window.location.search).has("nopreview");

const MobilePreview = () => {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);

  if (isInsidePreview) return null;

  const src = `${window.location.origin}${window.location.pathname}?nopreview=1`;

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 rounded-full bg-foreground/90 backdrop-blur-sm border border-cream/15 px-4 py-2.5 text-xs font-sans text-cream/70 hover:text-cream shadow-lg transition-all hover:scale-[1.03] active:scale-[0.97]"
        title="Preview mobile"
      >
        {open ? <X size={14} /> : <Smartphone size={14} />}
        {open ? "Fechar" : "Mobile"}
      </button>

      {/* Preview overlay */}
      {open && (
        <div className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">

            {/* Phone frame */}
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-cream/10"
              style={{ width: 390, height: 844, background: "#000" }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />

              <iframe
                key={key}
                src={src}
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Mobile Preview"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setKey((k) => k + 1)}
                className="flex items-center gap-1.5 text-xs font-sans text-white/60 hover:text-white transition-colors"
              >
                <RotateCcw size={12} />
                Recarregar
              </button>
              <span className="text-white/20 text-xs">390 × 844 · iPhone 14</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobilePreview;
