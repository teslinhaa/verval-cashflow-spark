import { Check } from "lucide-react";

const benefits = [
  "Registro de transações em 10 segundos",
  "Cálculo automático de lucro quando custo = 0",
  "Recorrência mensal/indefinida para assinaturas",
  "Filtros inteligentes por período, categoria e responsável",
  "Gestão multiusuário com controle de permissões",
  "Exportação de dados em CSV para análises",
  "Segurança com autenticação e controle de acesso",
  "Atualizações automáticas e suporte dedicado",
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Pare de adivinhar o caixa.{" "}
              <span className="text-primary">Veja Entradas, Saídas e Margem</span> numa tela.
            </h2>
            <p className="text-xl text-muted-foreground mt-6">
              Se mudar de ideia, exporte seus dados em 1 clique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
