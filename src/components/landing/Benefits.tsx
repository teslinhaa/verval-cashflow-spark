import "../../helpers/i18n";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const Benefits = () => {
  const { t } = useTranslation();

  // animação
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  } as const;

  // lista traduzida
  const benefits = [
    t("benefits.items.tenSeconds"),
    t("benefits.items.autoProfitZeroCost"),
    t("benefits.items.recurrence"),
    t("benefits.items.smartFilters"),
    t("benefits.items.multiuser"),
    t("benefits.items.securityAuth"),
    t("benefits.items.autoUpdatesSupport"),
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <Trans
                i18nKey="benefits.title"
                components={{ 0: <span className="text-primary" /> }}
              />
            </h2>
            <p className="text-xl text-muted-foreground mt-6">
              {t("benefits.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 200, damping: 16 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{
                    delay: 0.05 * index,
                    type: "spring",
                    stiffness: 250,
                    damping: 12,
                  }}
                >
                  <Check className="w-4 h-4 text-success" />
                </motion.div>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
