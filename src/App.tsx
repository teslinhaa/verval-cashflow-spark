// src/App.tsx
import "./helpers/i18n"; // inicializa i18n na raiz do app

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, Globe } from "lucide-react";

const queryClient = new QueryClient();
const BASENAME = (import.meta.env.BASE_URL || "/grana/mk").replace(/\/$/, "");

function FloatingActions() {
  const { i18n } = useTranslation();
  const isPT = i18n.language?.startsWith("pt");

  const whatsappHref = useMemo(() => {
    const base = "https://wa.me/5511910246542";
    const msgPT =
      `Olá!`;
    const msgEN =
      `Hi!`;
    const text = isPT ? msgPT : msgEN;
    return `${base}?text=${encodeURIComponent(text)}`;
  }, [isPT]);

  const toggleLanguage = () => {
    const next = isPT ? "en" : "pt";
    i18n.changeLanguage(next);
    // o detector já salva em localStorage; opcionalmente ajusta <html lang>
    if (typeof document !== "undefined") document.documentElement.lang = next;
  };

  return (
    <>
      {/* Botão WhatsApp (direita) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={isPT ? "Falar no WhatsApp" : "Chat on WhatsApp"}>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all gap-2"
            variant="default"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">
              {isPT ? "Cadastro" : "Registration"}
            </span>
          </Button>
        </a>
      </div>

      {/* Botão de idioma (esquerda) */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          size="lg"
          variant="outline"
          className="gap-2 shadow-sm hover:shadow transition-all"
          onClick={toggleLanguage}
          aria-label={isPT ? "Mudar idioma para inglês" : "Switch language to Portuguese"}
        >
          <Globe className="w-5 h-5" />
          <span className="uppercase">{isPT ? "PT-BR" : "EN"}</span>
        </Button>
      </div>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Use o base do Vite como basename do router */}
      <BrowserRouter basename={BASENAME}>
        <FloatingActions />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
