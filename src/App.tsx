import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import DredgingService from "./pages/services/Dredging.tsx";
import HeavyEquipmentService from "./pages/services/HeavyEquipment.tsx";
import EmploymentAgencyService from "./pages/services/EmploymentAgency.tsx";
import LogisticsService from "./pages/services/Logistics.tsx";
import WeldingService from "./pages/services/Welding.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import NotFound from "./pages/NotFound.tsx";
import CookieConsent from "./components/CookieConsent";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SplashScreen />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/servicos/dragagem" element={<DredgingService />} />
          <Route path="/servicos/equipamentos-pesados" element={<HeavyEquipmentService />} />
          <Route path="/servicos/agencia-emprego" element={<EmploymentAgencyService />} />
          <Route path="/servicos/logistica" element={<LogisticsService />} />
          <Route path="/servicos/serralharia-soldadura" element={<WeldingService />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
