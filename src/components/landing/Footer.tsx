import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Verval</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Controle financeiro simples e eficiente para pequenos negócios e assistências técnicas.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button size="sm" variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#recursos" className="hover:text-primary transition-colors">Recursos</a></li>
              <li><a href="#precos" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Verval. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
