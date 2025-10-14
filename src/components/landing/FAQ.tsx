import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Consigo importar do Excel?",
    answer: "Atualmente não oferecemos importação direta de planilhas Excel, mas você pode facilmente cadastrar seus lançamentos manualmente ou em lote. Estamos trabalhando em uma funcionalidade de importação para futuras versões.",
  },
  {
    question: "Como calculam o lucro?",
    answer: "O lucro é calculado automaticamente subtraindo o custo do valor de entrada. Quando o custo é zero ou não informado, o sistema considera o valor total como lucro. Você pode visualizar margens e lucros em tempo real no dashboard.",
  },
  {
    question: "Posso ter vários usuários?",
    answer: "Sim! No plano Pro você pode adicionar usuários ilimitados com diferentes níveis de permissão (admin ou usuário). Cada membro da equipe pode ter sua própria conta com acesso controlado às funcionalidades.",
  },
  {
    question: "Dá para filtrar por período e categoria?",
    answer: "Com certeza! O Verval oferece filtros avançados por período (dia, semana, mês), categoria, responsável e tipo de lançamento. Você pode combinar múltiplos filtros para análises precisas.",
  },
  {
    question: "Tem versão mobile?",
    answer: "O Verval é um Progressive Web App (PWA) totalmente responsivo. Você pode acessá-lo de qualquer dispositivo através do navegador e até adicionar um atalho na tela inicial do seu smartphone para acesso rápido.",
  },
  {
    question: "Como funciona a recorrência?",
    answer: "Ao criar um lançamento, você pode definir se ele é recorrente (mensal) ou indefinido. O sistema registra automaticamente os lançamentos futuros sem precisar cadastrá-los manualmente todos os meses.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Verval
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 shadow-sm hover:shadow-card transition-shadow bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
