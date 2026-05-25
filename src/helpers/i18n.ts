// helpers/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      hero: {
        badge: "Seguro e confiável",
        launches: "{{count}} lançamentos este mês",
        title: "Verval Assist: gestão completa <0>sem planilhas soltas</0>",
        subtitle:
          "Centralize caixa, clientes, produtos, equipe, recorrências, cobranças, comprovantes e apoio tributário MEI em um único painel.",
        ctaPrimary: "Começar grátis",
        hint: "Role para ver como funciona",
        badgeRealtime: "Tempo real",
        badgeAutoProfit: "Lucro automático",
        footer: "Sem cartão de crédito necessário • Teste grátis por 30 dias",
      },
      pricing: {
        title: "Planos simples, <0>sem surpresas</0>",
        subtitle: "Teste grátis por 30 dias. Depois, apenas R$ 70/mês.",
        footer: "Sem fidelidade. Cancele quando quiser.",
        badgeMostPopular: "Mais Popular",
        badgeNoCard: "Sem cartão",
        planFreeName: "Grátis 30 dias",
        planFreeDesc: "Teste tudo do Verval por 30 dias",
        planFreePeriod: " / 30 dias",
        planPaidName: "Plano Único",
        planPaidDesc: "Tudo que você precisa, sem surpresas",
        planPaidPeriod: "/mês",
        ctaFree: "Começar grátis",
        ctaWhats: "Falar no WhatsApp",
        features: {
          users: "Usuários ilimitados",
          entries: "Lançamentos ilimitados",
          reports: "Todos os gráficos e relatórios",
          recurrence: "Recorrência automática",
          categories: "Categorias ilimitadas",
          support: "Suporte 24h no WhatsApp",
          updates: "Atualizações gratuitas",
        },
      },
      benefits: {
        title: "Pare de adivinhar o caixa. <0>Veja Entradas, Saídas e Margem</0> numa tela.",
        subtitle: "Se mudar de ideia, exporte seus dados em 1 clique.",
        items: {
          tenSeconds: "Registro de transações em 10 segundos",
          autoProfitZeroCost: "Cálculo automático de lucro quando custo = 0",
          recurrence: "Recorrência mensal/indefinida para assinaturas",
          billingReceipts: "Cobranças, pagamentos e comprovantes vinculados aos lançamentos",
          meiSupport: "Apoio MEI com limite anual, DAS, DASN-SIMEI, CNAE e retiradas",
          teamClock: "Equipe, permissões e controle de ponto com correções",
          smartFilters: "Filtros inteligentes por período, categoria e responsável",
          multiuser: "Gestão multiusuário com controle de permissões",
          securityAuth: "Segurança com autenticação e controle de acesso",
          autoUpdatesSupport: "Atualizações automáticas e suporte dedicado",
        }
      },
      cta: {
        badge: "Seguro e confiável",
        title: "Pronto para dominar seu <0>controle financeiro?</0>",
        subtitle: "Junte-se a centenas de negócios que já transformaram sua gestão financeira com o Verval.",
        primary: "Começar grátis agora",
        secondary: "Falar no WhatsApp",
        bullets: {
          noCard: "Sem cartão de crédito",
          freeDays: "30 dias grátis",
          cancelAnytime: "Cancele quando quiser",
        },
      },
      faq: {
        title: "Perguntas frequentes",
        subtitle: "Tudo o que você precisa saber sobre o Verval",
        items: {
          importExcel: {
            q: "Consigo importar do Excel?",
            a: "Atualmente não oferecemos importação direta de planilhas Excel, mas você pode facilmente cadastrar seus lançamentos manualmente ou em lote. Estamos trabalhando em uma funcionalidade de importação para futuras versões."
          },
          profitCalc: {
            q: "Como calculam o lucro?",
            a: "O lucro é calculado automaticamente subtraindo o custo do valor de entrada. Quando o custo é zero ou não informado, o sistema considera o valor total como lucro. Você pode visualizar margens e lucros em tempo real no dashboard."
          },
          multiuser: {
            q: "Posso ter vários usuários?",
            a: "Sim! No plano Pro você pode adicionar usuários ilimitados com diferentes níveis de permissão (admin ou usuário). Cada membro da equipe pode ter sua própria conta com acesso controlado às funcionalidades."
          },
          filters: {
            q: "Dá para filtrar por período e categoria?",
            a: "Com certeza! O Verval oferece filtros avançados por período (dia, semana, mês), categoria, responsável e tipo de lançamento. Você pode combinar múltiplos filtros para análises precisas."
          },
          mobile: {
            q: "Tem versão mobile?",
            a: "O Verval é um Progressive Web App (PWA) totalmente responsivo. Você pode acessá-lo de qualquer dispositivo através do navegador e até adicionar um atalho na tela inicial do seu smartphone para acesso rápido."
          },
          recurrence: {
            q: "Como funciona a recorrência?",
            a: "Ao criar um lançamento, você pode definir se ele é recorrente (mensal) ou indefinido. O sistema registra automaticamente os lançamentos futuros sem precisar cadastrá-los manualmente todos os meses."
          },
          paymentsReceipts: {
            q: "Consigo cobrar clientes e emitir comprovantes?",
            a: "Sim. O Verval permite registrar pagamentos manuais, acompanhar valores pagos e pendentes, gerar links de cobrança pela InfinitePay e criar comprovantes em PDF para compartilhar com o cliente."
          },
          meiTax: {
            q: "O módulo MEI substitui um contador?",
            a: "Não. O módulo MEI oferece estimativas e apoio operacional para limite anual, DAS, DASN-SIMEI, CNAE e retiradas para pessoa física, mas não substitui a validação de um contador."
          },
          timeClock: {
            q: "Dá para controlar ponto da equipe?",
            a: "Sim. Você pode configurar jornadas por funcionário, registrar início, pausa, retomada e encerramento, além de gerenciar correções de ponto com aprovação e histórico."
          }
        }
      },
      features: {
        title: "Controle financeiro <0>que funciona</0>",
        subtitle: "Do caixa à operação: tudo o que você precisa para gerenciar o negócio com clareza e confiança",
        hoverHint: "Dica: passe o mouse sobre os cards para ver o efeito de profundidade.",
        items: {
          realtime: {
            title: "Lucro em tempo real",
            desc: "Acompanhe suas margens de lucro, saldo total e KPIs financeiros atualizados instantaneamente."
          },
          charts: {
            title: "Gráficos que explicam",
            desc: "Visualize entradas vs saídas por mês com gráficos intuitivos que mostram a saúde do seu negócio."
          },
          topcats: {
            title: "Top categorias",
            desc: "Identifique rapidamente suas principais fontes de receita e maiores despesas com barras horizontais."
          },
          frictionless: {
            title: "Sem atrito",
            desc: "Registre lançamentos em 10 segundos com cliente, produto, custo, recorrência e responsável definidos."
          }
        }
      },
      modules: {
        title: "Módulos para operar <0>o negócio inteiro</0>",
        subtitle: "O Verval Assist reúne a rotina financeira, comercial, operacional e tributária em fluxos conectados.",
        items: {
          dashboard: {
            title: "Dashboard financeiro",
            desc: "Entradas, saídas, lucro, margem, saldo, evolução mensal, top categorias e atalhos para agir rápido."
          },
          entries: {
            title: "Lançamentos completos",
            desc: "Entradas e saídas com status aberto, parcial ou finalizado, cliente, produto, custo, lucro e funcionário."
          },
          payments: {
            title: "Pagamentos e cobranças",
            desc: "Pagamentos parciais ou totais, pendências, links InfinitePay e envio pronto pelo WhatsApp."
          },
          receipts: {
            title: "Comprovantes",
            desc: "PDF A4 ou cupom com dados do emitente, cliente, serviço, produto, valor, logo e link público."
          },
          customersProducts: {
            title: "Clientes, produtos e estoque",
            desc: "Histórico comercial, produtos com preço, margem, lucro, código de barras e alerta de baixo estoque."
          },
          recurrence: {
            title: "Recorrências e mensalidades",
            desc: "MRR, ARR, inadimplência, pagamentos por ano, marcação em massa e lançamentos automáticos."
          },
          projection: {
            title: "Projeção financeira",
            desc: "Previsão de caixa, runway, cenários conservador e otimista, ponto de equilíbrio e exportação CSV."
          },
          margin: {
            title: "Calculadora de margem",
            desc: "Some custos, defina a margem desejada e saiba quanto cobrar por produtos, serviços e orçamentos."
          },
          mei: {
            title: "MEI Tributário",
            desc: "Limite anual, DAS estimado, DASN-SIMEI, CNAE, CCMEI, retiradas e apoio para IRPF."
          },
          timeTeam: {
            title: "Ponto e equipe",
            desc: "Jornada, pausas, correções, aprovações, regras de pagamento e funcionários vinculados à operação."
          },
          accessBilling: {
            title: "Acesso e assinatura",
            desc: "Login tradicional ou Google, perfis admin/equipe, trial, Stripe, avisos e bloqueio por vencimento."
          },
          integrations: {
            title: "Integrações e logs",
            desc: "Stripe, InfinitePay, WhatsApp, webhooks, auditoria de pagamentos e conciliação automática."
          }
        }
      },
      footer: {
        tagline: "Controle financeiro simples e eficiente para pequenos negócios e assistências técnicas.",
        actions: {
          whatsapp: "WhatsApp",
          linkedin: "LinkedIn"
        },
        sections: {
          product: {
            title: "Produto",
            links: {
              features: "Recursos",
              pricing: "Preços",
              how: "Como funciona",
              status: "Status"
            }
          },
          legal: {
            title: "Legal",
            links: {
              terms: "Termos de Uso",
              privacy: "Política de Privacidade",
              contact: "Contato"
            }
          }
        },
        copyright: "Todos os direitos reservados."
      },
      navbar: {
        brand: "Ir para a página inicial",
        links: { how: "Como funciona", features: "Recursos", modules: "Módulos", pricing: "Preços" },
        actions: { signIn: "Entrar", startFree: "Começar grátis" },
        aria: { openMenu: "Abrir menu", closeMenu: "Fechar menu" }
      },
      how: {
        title: "Como funciona",
        subtitle: "Três passos simples para transformar seu controle financeiro",
        next: "Próximo passo",
        items: {
          step1: {
            title: "Cadastre usuário/funcionário",
            desc: "Crie contas para sua equipe com diferentes níveis de permissão (admin/usuário)."
          },
          step2: {
            title: "Lance Entradas/Saídas",
            desc: "Registre transações com categoria, custo opcional, recorrência e responsável em segundos."
          },
          step3: {
            title: "Acompanhe KPIs e relatórios",
            desc: "Visualize o que entrou hoje/semana/mês, saldo, margem e tome decisões baseadas em dados."
          }
        }
      },
    },
  },
  en: {
    translation: {
      hero: {
        badge: "Safe and reliable",
        launches: "{{count}} launches this month",
        title: "Verval Assist: complete business management <0>without scattered spreadsheets</0>",
        subtitle:
          "Centralize cash flow, customers, products, team, recurrence, payments, receipts and MEI tax support in one panel.",
        ctaPrimary: "Start free",
        hint: "Scroll to see how it works",
        badgeRealtime: "Real-time",
        badgeAutoProfit: "Auto profit",
        footer: "No credit card needed • 30-day free trial",
      },
      pricing: {
        title: "Simple plans, <0>no surprises</0>",
        subtitle: "Free for 30 days. After that, just R$ 70/month.",
        footer: "No commitment. Cancel anytime.",
        badgeMostPopular: "Most Popular",
        badgeNoCard: "No card required",
        planFreeName: "30-day Free",
        planFreeDesc: "Try everything in Verval for 30 days",
        planFreePeriod: " / 30 days",
        planPaidName: "Single Plan",
        planPaidDesc: "Everything you need, no surprises",
        planPaidPeriod: "/month",
        ctaFree: "Start free",
        ctaWhats: "Chat on WhatsApp",
        features: {
          users: "Unlimited users",
          entries: "Unlimited entries",
          reports: "All charts and reports",
          recurrence: "Automatic recurrence",
          categories: "Unlimited categories",
          support: "24/7 WhatsApp support",
          updates: "Free updates",
        },
      },
      benefits: {
        title: "Stop guessing your cash. <0>See Inflow, Outflow, and Margin</0> on one screen.",
        subtitle: "If you change your mind, export your data in one click.",
        items: {
          tenSeconds: "Record transactions in 10 seconds",
          autoProfitZeroCost: "Automatic profit when cost = 0",
          recurrence: "Monthly/indefinite recurrence for subscriptions",
          billingReceipts: "Billing, payments and receipts linked to entries",
          meiSupport: "MEI support with annual limit, DAS, DASN-SIMEI, CNAE and withdrawals",
          teamClock: "Team, permissions and time clock with corrections",
          smartFilters: "Smart filters by period, category, and owner",
          multiuser: "Multi-user management with permission control",
          securityAuth: "Security with authentication and access control",
          autoUpdatesSupport: "Automatic updates and dedicated support",
        }
      },
      cta: {
        badge: "Safe and reliable",
        title: "Ready to master your <0>financial control?</0>",
        subtitle: "Join hundreds of businesses that have already transformed their financial management with Verval.",
        primary: "Start free now",
        secondary: "Talk on WhatsApp",
        bullets: {
          noCard: "No credit card required",
          freeDays: "30-day free trial",
          cancelAnytime: "Cancel anytime",
        },
      },
      faq: {
        title: "Frequently asked questions",
        subtitle: "Everything you need to know about Verval",
        items: {
          importExcel: {
            q: "Can I import from Excel?",
            a: "We don’t currently offer direct Excel import, but you can easily add entries manually or in bulk. We’re working on an import feature for future versions."
          },
          profitCalc: {
            q: "How do you calculate profit?",
            a: "Profit is calculated automatically by subtracting cost from the income amount. When cost is zero or not provided, the system treats the full amount as profit. You can see margins and profits in real time on the dashboard."
          },
          multiuser: {
            q: "Can I have multiple users?",
            a: "Yes! On the Pro plan you can add unlimited users with different permission levels (admin or user). Each team member can have their own account with controlled access."
          },
          filters: {
            q: "Can I filter by period and category?",
            a: "Absolutely! Verval offers advanced filters by period (day, week, month), category, owner, and entry type. You can combine multiple filters for precise analysis."
          },
          mobile: {
            q: "Is there a mobile version?",
            a: "Verval is a fully responsive Progressive Web App (PWA). You can access it from any device through the browser and even add a home screen shortcut on your phone."
          },
          recurrence: {
            q: "How does recurrence work?",
            a: "When creating an entry, you can set it as recurrent (monthly) or indefinite. The system automatically schedules future entries without manual creation every month."
          },
          paymentsReceipts: {
            q: "Can I charge customers and issue receipts?",
            a: "Yes. Verval lets you record manual payments, track paid and pending amounts, generate InfinitePay payment links and create PDF receipts to share with customers."
          },
          meiTax: {
            q: "Does the MEI module replace an accountant?",
            a: "No. The MEI module provides estimates and operational support for annual limits, DAS, DASN-SIMEI, CNAE and owner withdrawals, but it does not replace accountant validation."
          },
          timeClock: {
            q: "Can I track my team's working hours?",
            a: "Yes. You can configure schedules per employee, record start, break, resume and end times, and manage time correction requests with approval and history."
          }
        }
      },
      features: {
        title: "Financial control <0>that works</0>",
        subtitle: "From cash flow to operations: everything you need to manage the business with clarity and confidence",
        hoverHint: "Tip: hover the cards to see the depth effect.",
        items: {
          realtime: {
            title: "Real-time profit",
            desc: "Track your profit margins, total balance, and financial KPIs updated instantly."
          },
          charts: {
            title: "Charts that explain",
            desc: "See monthly income vs expenses with intuitive visuals that reveal your business health."
          },
          topcats: {
            title: "Top categories",
            desc: "Quickly identify your main revenue sources and largest expenses with horizontal bars."
          },
          frictionless: {
            title: "Frictionless",
            desc: "Record entries in 10 seconds with customer, product, cost, recurrence, and assignee."
          }
        }
      },
      modules: {
        title: "Modules to run <0>the whole business</0>",
        subtitle: "Verval Assist connects financial, commercial, operational and MEI tax routines in one workflow.",
        items: {
          dashboard: {
            title: "Financial dashboard",
            desc: "Income, expenses, profit, margin, balance, monthly trends, top categories and shortcuts to act fast."
          },
          entries: {
            title: "Complete entries",
            desc: "Income and expenses with open, partial or finished status, customer, product, cost, profit and employee."
          },
          payments: {
            title: "Payments and billing",
            desc: "Partial or full payments, pending balances, InfinitePay links and WhatsApp-ready collection messages."
          },
          receipts: {
            title: "Receipts",
            desc: "A4 or ticket-style PDF with issuer, customer, service, product, amount, logo and public link."
          },
          customersProducts: {
            title: "Customers, products and stock",
            desc: "Commercial history, products with price, margin, profit, barcode and low-stock alerts."
          },
          recurrence: {
            title: "Recurrence and subscriptions",
            desc: "MRR, ARR, delinquency, yearly payment manager, bulk marking and automatic paid entries."
          },
          projection: {
            title: "Financial projection",
            desc: "Cash forecast, runway, conservative and optimistic scenarios, breakeven point and CSV export."
          },
          margin: {
            title: "Margin calculator",
            desc: "Add costs, set the desired margin and know what to charge for products, services and quotes."
          },
          mei: {
            title: "MEI tax support",
            desc: "Annual limit, DAS estimate, DASN-SIMEI, CNAE, CCMEI, owner withdrawals and IRPF support."
          },
          timeTeam: {
            title: "Time clock and team",
            desc: "Work schedules, breaks, corrections, approvals, payment rules and employees tied to operations."
          },
          accessBilling: {
            title: "Access and subscription",
            desc: "Email or Google login, admin/team profiles, trial, Stripe, expiration notices and overdue blocking."
          },
          integrations: {
            title: "Integrations and logs",
            desc: "Stripe, InfinitePay, WhatsApp, webhooks, payment audit logs and automatic reconciliation."
          }
        }
      },
      footer: {
        tagline: "Simple, efficient financial control for small businesses and repair shops.",
        actions: {
          whatsapp: "WhatsApp",
          linkedin: "LinkedIn"
        },
        sections: {
          product: {
            title: "Product",
            links: {
              features: "Features",
              pricing: "Pricing",
              how: "How it works",
              status: "Status"
            }
          },
          legal: {
            title: "Legal",
            links: {
              terms: "Terms of Use",
              privacy: "Privacy Policy",
              contact: "Contact"
            }
          }
        },
        copyright: "All rights reserved."
      },
      navbar: {
        brand: "Go to homepage",
        links: { how: "How it works", features: "Features", modules: "Modules", pricing: "Pricing" },
        actions: { signIn: "Sign in", startFree: "Start free" },
        aria: { openMenu: "Open menu", closeMenu: "Close menu" }
      },
      how: {
        title: "How it works",
        subtitle: "Three simple steps to transform your financial control",
        next: "Next step",
        items: {
          step1: {
            title: "Add users/employees",
            desc: "Create accounts for your team with different permission levels (admin/user)."
          },
          step2: {
            title: "Record Income/Expenses",
            desc: "Log transactions with category, optional cost, recurrence and responsible in seconds."
          },
          step3: {
            title: "Track KPIs and reports",
            desc: "See what came in today/week/month, balance, margin and make data-driven decisions."
          }
        }
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") document.documentElement.lang = lng;
});

export default i18n;
