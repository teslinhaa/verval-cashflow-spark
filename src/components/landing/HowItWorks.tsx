import "../../helpers/i18n";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, FileText, LineChart, ChevronRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
} as const;

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
} as const;

type StepDef = {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

function StepCard({ step, index }: { step: StepDef; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(sy, [-60, 60], [6, -6]);
  const rotateY = useTransform(sx, [-120, 120], [-10, 10]);

  const bgX = useTransform(sx, (v) => `${50 + v / 30}%`);
  const bgY = useTransform(sy, (v) => `${50 + v / 30}%`);
  const spotlight = useMotionTemplate`radial-gradient(280px 180px at ${bgX} ${bgY}, rgba(var(--primary-rgb),0.16), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };

  const Icon = step.icon;

  return (
    // Cada card só anima quando entra na viewport
    <motion.div
      variants={itemUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={() => { mx.set(0); my.set(0); }}
        className="group relative h-full rounded-2xl border border-border/50 bg-card shadow-card hover:shadow-elegant transition-all overflow-hidden"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        {/* glow/spotlight (não bloqueia clique) */}
        <motion.div
          aria-hidden
          className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{ background: spotlight, filter: "blur(12px)" }}
        />

        {/* número do passo */}
        <motion.div
          aria-hidden
          className="absolute -top-2 -right-1 text-[120px] font-black leading-none text-primary/5 select-none"
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.05 * index }}
        >
          {step.number}
        </motion.div>

        <Card className="bg-transparent border-0 shadow-none h-full">
          <CardHeader>
            <div
              className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4"
              style={{ transform: "translateZ(20px)" }}
            >
              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.05 * index }}
              >
                <Icon className="w-7 h-7 text-primary-foreground" />
              </motion.span>
            </div>
            <CardTitle className="text-xl" style={{ transform: "translateZ(18px)" }}>
              {step.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground" style={{ transform: "translateZ(14px)" }}>
              {step.description}
            </p>

            <motion.div
              aria-hidden
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary/90"
              initial={{ x: -6, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <ChevronRight className="w-4 h-4" />
              {/* i18n */}
              <span>{/* Será preenchido via prop no pai se desejar; aqui só decorativo */}</span>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps: StepDef[] = [
    {
      number: "01",
      icon: UserPlus,
      title: t("how.items.step1.title"),
      description: t("how.items.step1.desc"),
    },
    {
      number: "02",
      icon: FileText,
      title: t("how.items.step2.title"),
      description: t("how.items.step2.desc"),
    },
    {
      number: "03",
      icon: LineChart,
      title: t("how.items.step3.title"),
      description: t("how.items.step3.desc"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle" id="como-funciona">
      <div className="container px-4 mx-auto">
        {/* Cabeçalho só revela ao entrar na viewport */}
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.h2 variants={itemUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("how.title")}
          </motion.h2>
          <motion.p variants={itemUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("how.subtitle")}
          </motion.p>
        </motion.div>

        {/* linha conectora + grid com reveal por scroll */}
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </motion.div>

          {/* dica "Próximo passo" centralizada e traduzida (opcional) */}
          <div className="sr-only">{t("how.next")}</div>
        </div>
      </div>
    </section>
  );
};
