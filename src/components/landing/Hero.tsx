import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            +12.847 lançamentos registrados este mês
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Domine o caixa em minutos{" "}
            <span className="text-primary">— sem planilhas</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Registre entradas e saídas, calcule lucro automaticamente e enxergue o que faz seu negócio crescer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('precos')}
              className="group"
            >
              Começar grátis
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('como-funciona')}
            >
              Ver demo
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/50 bg-card">
              <img 
                src={heroDashboard} 
                alt="Dashboard Verval mostrando KPIs de entradas, saídas e margem de lucro com gráficos financeiros"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Sem cartão de crédito necessário • Teste grátis por 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};
