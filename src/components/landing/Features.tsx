import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Lucro em tempo real",
    description: "Acompanhe suas margens de lucro, saldo total e KPIs financeiros atualizados instantaneamente.",
    color: "text-success",
  },
  {
    icon: BarChart3,
    title: "Gráficos que explicam",
    description: "Visualize entradas vs saídas por mês com gráficos intuitivos que mostram a saúde do seu negócio.",
    color: "text-primary",
  },
  {
    icon: PieChart,
    title: "Top categorias",
    description: "Identifique rapidamente suas principais fontes de receita e maiores despesas com barras horizontais.",
    color: "text-primary-glow",
  },
  {
    icon: Zap,
    title: "Sem atrito",
    description: "Registre lançamentos em 10 segundos com custo opcional, recorrência e responsável definidos.",
    color: "text-success",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background" id="recursos">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Controle financeiro{" "}
            <span className="text-primary">que funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para gerenciar seu caixa com clareza e confiança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
