import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import MobilePreview from "@/components/MobilePreview";
import Index from "./pages/Index.tsx";
import QuemSou from "./pages/QuemSou.tsx";
import PsicoterapiaIndividual from "./pages/PsicoterapiaIndividual.tsx";
import PsicoterapiaGrupo from "./pages/PsicoterapiaGrupo.tsx";
import TerapiaCorporal from "./pages/TerapiaCorporal.tsx";
import Bioescalada from "./pages/Bioescalada.tsx";
import Regenera from "./pages/Regenera.tsx";
import SahajLandell from "./pages/SahajLandell.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {import.meta.env.DEV && <MobilePreview />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-sou" element={<QuemSou />} />
          <Route path="/psicoterapia-individual" element={<PsicoterapiaIndividual />} />
          <Route path="/psicoterapia-grupo" element={<PsicoterapiaGrupo />} />
          <Route path="/terapia-corporal-bioenergetica" element={<TerapiaCorporal />} />
          <Route path="/bioescalada" element={<Bioescalada />} />
          <Route path="/regenera" element={<Regenera />} />
          <Route path="/sahaj-landell" element={<SahajLandell />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
