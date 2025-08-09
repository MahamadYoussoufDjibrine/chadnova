import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DataScienceGallery from "./pages/DataScienceGallery";
import SoftwareDevelopmentGallery from "./pages/SoftwareDevelopmentGallery";
import MobileAppsGallery from "./pages/MobileAppsGallery";
import EcommerceGallery from "./pages/EcommerceGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio/data-science" element={<DataScienceGallery />} />
          <Route path="/portfolio/software-development" element={<SoftwareDevelopmentGallery />} />
          <Route path="/portfolio/mobile-apps" element={<MobileAppsGallery />} />
          <Route path="/portfolio/e-commerce" element={<EcommerceGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
