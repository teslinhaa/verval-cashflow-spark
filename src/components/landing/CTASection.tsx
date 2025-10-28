import "../../helpers/i18n";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
} as const;

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
} as const;

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 bg-gradient-accent overflow-hidden">
      {/* blobs decorativos — só animam quando a seção entra em view */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: [0, 8, 0] }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: [0, -10, 0] }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.div variants={itemUp}>
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium shadow-sm inline-flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              {t("cta.badge")}
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <Trans
              i18nKey="cta.title"
              components={{ 0: <span className="text-primary" /> }}
            />
          </motion.h2>

          <motion.p
            variants={itemUp}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            {t("cta.subtitle")}
          </motion.p>

          <motion.div
            variants={itemUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="https://chatfinanceiro.com/grana/criar-usuario"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" className="group" aria-label={t("cta.primary")}>
                {t("cta.primary")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.a>
            <motion.a
              href="https://wa.me/5511910246542"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="outline" size="xl" aria-label={t("cta.secondary")}>
                {t("cta.secondary")}
              </Button>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemUp}
            className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          >
            <CTAItem>{t("cta.bullets.noCard")}</CTAItem>
            <CTAItem>{t("cta.bullets.freeDays")}</CTAItem>
            <CTAItem>{t("cta.bullets.cancelAnytime")}</CTAItem>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

function CTAItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35 }}
    >
      <span className="w-2 h-2 rounded-full bg-success" />
      <span>{children}</span>
    </motion.div>
  );
}
