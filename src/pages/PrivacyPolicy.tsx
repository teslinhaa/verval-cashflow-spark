import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold">Política de Privacidade</h1>
        <p className="mb-8 text-sm text-muted-foreground">Última atualização: 11 de fevereiro de 2026</p>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">1. Quem somos</h2>
          <p>
            Esta Política de Privacidade descreve como o Verval coleta, usa, armazena e protege dados pessoais ao
            utilizar o site e os serviços disponíveis em chatfinanceiro.com.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">2. Dados que coletamos</h2>
          <p>Podemos coletar dados fornecidos por você e dados de uso, como:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Nome, e-mail e dados de cadastro.</li>
            <li>Informações de uso da plataforma e preferências.</li>
            <li>Dados técnicos, como IP, navegador e dispositivo.</li>
          </ul>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">3. Como usamos os dados</h2>
          <p>Utilizamos os dados para:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Prestar, manter e melhorar nossos serviços.</li>
            <li>Autenticar usuários e proteger contas.</li>
            <li>Entrar em contato sobre suporte, atualizações e comunicações relevantes.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">4. Compartilhamento de dados</h2>
          <p>
            Não vendemos dados pessoais. Podemos compartilhar dados com provedores que apoiam a operação do serviço,
            sempre sob medidas de segurança e, quando aplicável, contratos adequados de proteção de dados.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">5. Base legal e seus direitos</h2>
          <p>
            O tratamento de dados ocorre conforme a LGPD (Lei nº 13.709/2018), com base em execução de contrato,
            legítimo interesse, consentimento ou cumprimento de obrigação legal, conforme o caso.
          </p>
          <p>
            Você pode solicitar acesso, correção, exclusão, portabilidade e outras medidas previstas em lei pelos
            canais de contato informados nesta página.
          </p>
        </section>

        <section className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">6. Retenção e segurança</h2>
          <p>
            Mantemos os dados pelo período necessário para cumprir as finalidades descritas nesta Política, respeitando
            prazos legais aplicáveis. Adotamos medidas técnicas e organizacionais para proteger os dados pessoais.
          </p>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-xl font-semibold">7. Contato</h2>
          <p>
            Para dúvidas sobre esta Política de Privacidade ou solicitações relacionadas a dados pessoais, entre em
            contato por: <strong>pay@chatfinanceiro.com</strong>.
          </p>
        </section>

        <Link to="/" className="text-primary underline underline-offset-4">
          Voltar para a página inicial
        </Link>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
