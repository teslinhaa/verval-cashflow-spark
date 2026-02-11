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
        title: "Domine o caixa em minutos <0>— sem planilhas</0>",
        subtitle:
          "Registre entradas e saídas, calcule lucro automaticamente e enxergue o que faz seu negócio crescer.",
        ctaPrimary: "Começar grátis",
        hint: "Role para ver como funciona",
        badgeRealtime: "Tempo real",
        badgeAutoProfit: "Lucro automático",
        footer: "Sem cartão de crédito necessário • Teste grátis por 30 dias",
      },
      pricing: {
        title: "Planos simples, <0>sem surpresas</0>",
        subtitle: "Teste grátis por 30 dias. Depois, apenas R$ 30/mês.",
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
          }
        }
      },
      features: {
        title: "Controle financeiro <0>que funciona</0>",
        subtitle: "Tudo o que você precisa para gerenciar seu caixa com clareza e confiança",
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
            desc: "Registre lançamentos em 10 segundos com custo opcional, recorrência e responsável definidos."
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
        links: { how: "Como funciona", features: "Recursos", pricing: "Preços" },
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
        title: "Master your cash flow in minutes <0>— no spreadsheets</0>",
        subtitle:
          "Record income and expenses, calculate profit automatically, and see what makes your business grow.",
        ctaPrimary: "Start free",
        hint: "Scroll to see how it works",
        badgeRealtime: "Real-time",
        badgeAutoProfit: "Auto profit",
        footer: "No credit card needed • 30-day free trial",
      },
      pricing: {
        title: "Simple plans, <0>no surprises</0>",
        subtitle: "Free for 30 days. After that, just R$ 30/month.",
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
          }
        }
      },
      features: {
        title: "Financial control <0>that works</0>",
        subtitle: "Everything you need to manage your cash with clarity and confidence",
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
            desc: "Record entries in 10 seconds with optional cost, recurrence, and assignee."
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
        links: { how: "How it works", features: "Features", pricing: "Pricing" },
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
