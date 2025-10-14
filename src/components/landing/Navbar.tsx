import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className="text-primary">Verval</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Como funciona
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Preços
            </button>
            <Button variant="outline" size="sm">
              Entrar
            </Button>
            <Button variant="default" size="sm">
              Começar grátis
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Como funciona
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Preços
            </button>
            <div className="px-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Entrar
              </Button>
              <Button variant="default" size="sm" className="w-full">
                Começar grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
