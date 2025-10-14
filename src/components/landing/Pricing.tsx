import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Grátis",
    description: "Para começar e testar o Verval",
    price: "R$ 0",
    period: "/mês",
    features: [
      "1 usuário",
      "200 lançamentos/mês",
      "Gráficos básicos",
      "Categorias ilimitadas",
      "Suporte por email",
    ],
    cta: "Começar grátis",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    description: "Para negócios que querem crescer",
    price: "R$ 47",
    period: "/mês",
    features: [
      "Usuários ilimitados",
      "Lançamentos ilimitados",
      "Todos os gráficos e relatórios",
      "Recorrência automática",
      "Exportação CSV",
      "Suporte prioritário",
      "Atualizações gratuitas",
    ],
    cta: "Testar 7 dias grátis",
    variant: "hero" as const,
    popular: true,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="precos">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Planos simples,{" "}
            <span className="text-primary">sem surpresas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 relative bg-card ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Teste o plano Pro por 7 dias sem compromisso. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
};
