import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, FileText, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Cadastre usuário/funcionário",
    description: "Crie contas para sua equipe com diferentes níveis de permissão (admin/usuário).",
  },
  {
    number: "02",
    icon: FileText,
    title: "Lance Entradas/Saídas",
    description: "Registre transações com categoria, custo opcional, recorrência e responsável em segundos.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Acompanhe KPIs e relatórios",
    description: "Visualize o que entrou hoje/semana/mês, saldo, margem e tome decisões baseadas em dados.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="como-funciona">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para transformar seu controle financeiro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 relative overflow-hidden bg-card"
            >
              <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none p-4">
                {step.number}
              </div>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
