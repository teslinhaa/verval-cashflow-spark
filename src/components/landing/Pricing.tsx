// src/pages/Pricing.tsx
import "../../helpers/i18n"; // inicializa i18n

import { useMemo, useRef, useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type Plan = {
  name: string;
  description: string;
  price: string; // apenas números como string (ex.: "0", "30")
  period?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  variant: "outline" | "hero";
  popular?: boolean;
  badge?: string;
};

function useCountUp(end: number, durationMs = 900, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startT = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - startT) / durationMs);
      setValue(Math.round(end * (1 - Math.pow(1 - p, 2))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs, start]);
  return value;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
} as const;

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
} as const;

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const { i18n } = useTranslation();
  const locale = i18n.language?.startsWith("pt") ? "pt-BR" : "en-US";
  const currencySymbol = locale === "pt-BR" ? "R$" : "$";

  const cardRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(sy, [-80, 80], [6, -6]);
  const rotateY = useTransform(sx, [-160, 160], [-10, 10]);

  const bgX = useTransform(sx, (v) => `${50 + v / 35}%`);
  const bgY = useTransform(sy, (v) => `${50 + v / 35}%`);
  const spotlight = useMotionTemplate`radial-gradient(340px 220px at ${bgX} ${bgY}, rgba(var(--primary-rgb),0.16), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Extrai número da string plan.price (agora só números, mas mantém robusto)
  const priceNumber = useMemo(() => {
    const match = plan.price.match(/(\d+[\.,]?\d*)/);
    return match ? Number(match[1].replace(",", ".")) : null;
  }, [plan.price]);

  const [inView, setInView] = useState(false);
  const animatedPrice = useCountUp(priceNumber ?? 0, 900, inView);

  return (
    <motion.div
      className={`relative ${plan.popular ? "md:scale-105" : ""}`}
      variants={itemUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45, margin: "0px 0px -10% 0px" }}
      onViewportEnter={() => setInView(true)}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`group relative z-0 rounded-2xl border border-border/50 bg-card shadow-card hover:shadow-elegant transition-all ${
          plan.popular ? "ring-2 ring-primary" : ""
        }`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        {/* glow sob o card, sem bloquear cliques */}
        <motion.div
          aria-hidden
          className="absolute -inset-px rounded-2xl pointer-events-none -z-10"
          style={{ background: spotlight, filter: "blur(12px)" }}
        />

        {plan.popular && (
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: [1, 1.06, 1], opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
          >
            <Badge className="bg-primary text-primary-foreground shadow-sm">
              {plan.badge}
            </Badge>
          </motion.div>
        )}
        {plan.badge && !plan.popular && (
          <Badge className="absolute top-3 right-3 bg-muted text-foreground">{plan.badge}</Badge>
        )}

        <Card className="bg-transparent border-0 shadow-none relative z-10">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl mb-2" style={{ transform: "translateZ(18px)" }}>
              {plan.name}
            </CardTitle>
            <CardDescription className="text-base" style={{ transform: "translateZ(14px)" }}>
              {plan.description}
            </CardDescription>
            <div className="mt-4" style={{ transform: "translateZ(20px)" }}>
              <span className="text-5xl font-bold inline-flex items-baseline gap-1">
                {priceNumber !== null ? (
                  <>
                    <span>{currencySymbol}</span>
                    <motion.span
                      key={plan.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="tabular-nums"
                    >
                      {animatedPrice.toLocaleString(locale)}
                    </motion.span>
                  </>
                ) : (
                  plan.price
                )}
              </span>
              {plan.period && <span className="text-muted-foreground"> {plan.period}</span>}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {plan.features.map((feature, fIndex) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.12 + 0.04 * fIndex }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0"
                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 240, damping: 14, delay: 0.12 + 0.04 * fIndex }}
                  >
                    <Check className="w-3 h-3 text-success" />
                  </motion.div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="relative z-20 pointer-events-auto">
              <Button asChild variant={plan.variant} size="lg" className="w-full">
                <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer" aria-label={plan.cta}>
                  {plan.cta}
                </a>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export const Pricing = () => {
  const { t } = useTranslation();

  const features = [
    t("pricing.features.users"),
    t("pricing.features.entries"),
    t("pricing.features.reports"),
    t("pricing.features.recurrence"),
    t("pricing.features.categories"),
    t("pricing.features.support"),
    t("pricing.features.updates"),
  ];

  // Preços sem símbolo (símbolo é dinâmico no card)
  const plans: Plan[] = [
    {
      name: t("pricing.planFreeName"),
      description: t("pricing.planFreeDesc"),
      price: "0",
      period: t("pricing.planFreePeriod"),
      features,
      cta: t("pricing.ctaFree"),
      ctaHref: "https://chatfinanceiro.com/grana/criar-usuario",
      variant: "outline",
      badge: t("pricing.badgeNoCard"),
    },
    {
      name: t("pricing.planPaidName"),
      description: t("pricing.planPaidDesc"),
      price: "30",
      period: t("pricing.planPaidPeriod"),
      features,
      cta: t("pricing.ctaWhats"),
      ctaHref: "https://buy.stripe.com/aFa8wOgscahV68Aa2F8Vi00",
      variant: "hero",
      popular: true,
      badge: t("pricing.badgeMostPopular"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle" id="precos">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.h2 variants={itemUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Trans i18nKey="pricing.title" components={{ 0: <span className="text-primary" /> }} />
          </motion.h2>
          <motion.p variants={itemUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {plans.map((plan, idx) => (
            <PricingCard key={plan.name} plan={plan} index={idx} />
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          {t("pricing.footer")}
        </motion.p>
      </div>
    </section>
  );
};
