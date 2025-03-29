
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProgramsPage from "./pages/Programs";
import StartupAccelerator from "./pages/StartupAccelerator";
import GrowthLeadership from "./pages/GrowthLeadership";
import ExecutiveCoaching from "./pages/ExecutiveCoaching";
import CommunityMastermind from "./pages/CommunityMastermind";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/startup-accelerator" element={<StartupAccelerator />} />
          <Route path="/growth-leadership" element={<GrowthLeadership />} />
          <Route path="/executive-coaching" element={<ExecutiveCoaching />} />
          <Route path="/community-mastermind" element={<CommunityMastermind />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
