// importe exatamente por aqui:
import "../../helpers/i18n";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, MousePointer2, ChevronDown } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

// Counter com ease-out
function useCountUp(end: number, durationMs = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      setValue(Math.floor(end * (1 - Math.pow(1 - p, 2))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs]);
  return value;
}

export const Hero = () => {
  const { t, i18n } = useTranslation();

  // Tilt + spotlight
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 120, damping: 20 });
  const springY = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-150, 150], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-12, 12]);
  const bgX = useTransform(springX, (v) => `${50 + v / 40}%`);
  const bgY = useTransform(springY, (v) => `${50 + v / 40}%`);
  const spotlight = useMotionTemplate`radial-gradient(650px 350px at ${bgX} ${bgY}, rgba(var(--primary-rgb),0.20), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(x);
    my.set(y);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Contador do badge (formata conforme idioma)
  const launches = useCountUp(12847);
  const nf = new Intl.NumberFormat(i18n.language || undefined);

  // Variants: animam no load
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  } as const;
  const itemUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  } as const;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* glow global */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-40 opacity-50"
        style={{
          background:
            "radial-gradient(600px 400px at 20% 10%, var(--primary)/16, transparent 60%),radial-gradient(600px 400px at 80% 20%, var(--primary)/10, transparent 60%),radial-gradient(700px 500px at 50% 100%, var(--primary)/14, transparent 60%)",
          filter: "blur(24px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
      />

      {/* blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl pointer-events-none"
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        animate={{ y: [0, -12, 0], x: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="container relative z-10 px-4 py-20 mx-auto">
        {/* ANIMA JÁ NO LOAD */}
        <motion.div className="max-w-6xl mx-auto text-center" variants={container} initial="hidden" animate="show">
          <motion.div variants={itemUp}>
            <Badge variant="secondary" className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium shadow-sm gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="tabular-nums">
                {/* i18n do badge com número formatado */}
                {t("hero.launches", { count: `+${nf.format(launches)}` })}
              </span>
            </Badge>
          </motion.div>

          <motion.h1 variants={itemUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <Trans i18nKey="hero.title" components={{ 0: <span className="text-primary" /> }} />
          </motion.h1>

          <motion.p variants={itemUp} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={itemUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <a href="https://chatfinanceiro.com/grana/criar-usuario">
                <Button aria-label={t("hero.ctaPrimary")} variant="hero" size="xl" className="group">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Card com tilt + spotlight */}
          <motion.div variants={itemUp} className="relative max-w-5xl mx-auto">
            <motion.div
              aria-hidden
              className="absolute -inset-4 rounded-3xl pointer-events-none -z-10"
              style={{ background: spotlight, filter: "blur(16px)" }}
            />
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/50 bg-card will-change-transform"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <img
                src={heroDashboard}
                alt={
                  i18n.language.startsWith("en")
                    ? "Verval dashboard showing KPIs for income, expenses and profit margin with financial charts"
                    : "Dashboard Verval mostrando KPIs de entradas, saídas e margem de lucro com gráficos financeiros"
                }
                className="w-full h-auto select-none pointer-events-none"
                loading="eager"
                style={{ transform: "translateZ(20px)" }}
              />

              {/* badges flutuantes */}
              <motion.div className="absolute top-4 left-4" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Badge className="backdrop-blur bg-background/70 border border-border/60 shadow-sm">{t("hero.badgeRealtime")}</Badge>
              </motion.div>
              <motion.div className="absolute bottom-4 right-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Badge variant="outline" className="backdrop-blur bg-background/60">
                  {t("hero.badgeAutoProfit")}
                </Badge>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.p variants={itemUp} className="text-sm text-muted-foreground mt-8">
            {t("hero.footer")}
          </motion.p>

          {/* hint de scroll */}
          <motion.div
            aria-hidden
            className="mt-8 flex items-center justify-center gap-2 text-muted-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MousePointer2 className="h-4 w-4" />
            <span className="text-xs">{t("hero.hint")}</span>
          </motion.div>

          <motion.div aria-hidden className="mt-3 flex justify-center" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
            <ChevronDown className="h-5 w-5 text-muted-foreground/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
