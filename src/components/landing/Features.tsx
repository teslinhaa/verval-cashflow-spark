import "../../helpers/i18n";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart, Zap } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
} as const;

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
} as const;

type I18nFeature = {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  description: string;
};

function FeatureCard({ feature, index }: { feature: I18nFeature; index: number }) {
  const { title, description, icon: Icon, color } = feature;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(sy, [-60, 60], [6, -6]);
  const rotateY = useTransform(sx, [-120, 120], [-10, 10]);

  const bgX = useTransform(sx, (v) => `${50 + v / 25}%`);
  const bgY = useTransform(sy, (v) => `${50 + v / 25}%`);
  const spotlight = useMotionTemplate`radial-gradient(260px 160px at ${bgX} ${bgY}, rgba(var(--primary-rgb),0.16), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };

  return (
    <motion.div variants={itemUp}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className="group relative h-full rounded-2xl border border-border/50 bg-card shadow-card hover:shadow-elegant transition-all will-change-transform"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        {/* glow + spotlight – não bloqueia clique */}
        <motion.div
          aria-hidden
          className="absolute -inset-px rounded-2xl pointer-events-none -z-10"
          style={{ background: spotlight, filter: "blur(10px)" }}
        />

        {/* subtle animated border */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none [mask-image:linear-gradient(#000,transparent_30%)]">
          <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg,theme(colors.primary/10),transparent_40%,theme(colors.primary/10))] opacity-50 blur-[6px]" />
        </div>

        <Card className="bg-transparent border-0 shadow-none h-full">
          <CardHeader>
            <div
              className={`w-12 h-12 rounded-xl bg-accent/70 backdrop-blur flex items-center justify-center mb-4 ${color}`}
              style={{ transform: "translateZ(20px)" }}
            >
              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.05 * index }}
              >
                <Icon className="w-6 h-6" />
              </motion.span>
            </div>
            <CardTitle className="text-xl" style={{ transform: "translateZ(18px)" }}>
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground" style={{ transform: "translateZ(14px)" }}>
              {description}
            </p>
          </CardContent>
        </Card>

        {/* hover hint */}
        <motion.div
          aria-hidden
          className="absolute bottom-3 right-3 text-[10px] text-muted-foreground/70"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {/* traduzido */}
          {/* eslint-disable-next-line jsx-a11y/aria-role */}
          <span>{/* t no pai não está aqui, então passo como prop */}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export const Features = () => {
  const { t } = useTranslation();

  const features: I18nFeature[] = [
    {
      icon: TrendingUp,
      color: "text-success",
      title: t("features.items.realtime.title"),
      description: t("features.items.realtime.desc"),
    },
    {
      icon: BarChart3,
      color: "text-primary",
      title: t("features.items.charts.title"),
      description: t("features.items.charts.desc"),
    },
    {
      icon: PieChart,
      color: "text-primary-glow",
      title: t("features.items.topcats.title"),
      description: t("features.items.topcats.desc"),
    },
    {
      icon: Zap,
      color: "text-success",
      title: t("features.items.frictionless.title"),
      description: t("features.items.frictionless.desc"),
    },
  ];

  return (
    <section className="py-24 bg-background" id="recursos">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 variants={itemUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Trans i18nKey="features.title" components={{ 0: <span className="text-primary" /> }} />
          </motion.h2>
          <motion.p variants={itemUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* dica de hover traduzida (desktop) */}
        <div className="mt-4 text-center text-xs text-muted-foreground/70 hidden sm:block">
          {t("features.hoverHint")}
        </div>
      </div>
    </section>
  );
};
