import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold">Termos de Uso</h1>
        <p className="mb-8 text-sm text-muted-foreground">Última atualização: 11 de fevereiro de 2026</p>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">1. Aceite dos termos</h2>
          <p>
            Ao acessar e utilizar o Verval, você concorda com estes Termos de Uso. Se não concordar com qualquer
            condição, interrompa o uso da plataforma.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">2. Uso da plataforma</h2>
          <p>
            Você se compromete a utilizar o serviço de forma lícita, sem violar direitos de terceiros, sem tentar
            acessar áreas restritas indevidamente e sem comprometer a segurança da aplicação.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">3. Conta e responsabilidades</h2>
          <p>
            Você é responsável pela veracidade das informações fornecidas e pela confidencialidade das credenciais de
            acesso. Qualquer atividade realizada com sua conta será de sua responsabilidade.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">4. Planos, pagamentos e cancelamento</h2>
          <p>
            Condições comerciais, períodos de teste, valores e regras de cancelamento seguem a oferta vigente no
            momento da contratação. Mudanças poderão ser comunicadas previamente, quando exigido por lei.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">5. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo, marca, layout, software e materiais relacionados ao Verval são protegidos por legislação
            aplicável. É proibida reprodução, modificação ou distribuição sem autorização prévia.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">6. Limitação de responsabilidade</h2>
          <p>
            O serviço é fornecido conforme disponibilidade. Empregamos esforços razoáveis para estabilidade e
            segurança, mas não garantimos ausência de falhas, indisponibilidades temporárias ou perdas indiretas.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-xl font-semibold">7. Alterações destes termos</h2>
          <p>
            Estes Termos podem ser atualizados periodicamente. A versão mais recente estará sempre disponível nesta
            página, com data de atualização.
          </p>
        </section>

        <Link to="/" className="text-primary underline underline-offset-4">
          Voltar para a página inicial
        </Link>
      </main>
    </div>
  );
};

export default TermsOfService;
