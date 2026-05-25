import "../../helpers/i18n";

import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import {
  BadgeDollarSign,
  BarChart3,
  Boxes,
  Calculator,
  CalendarClock,
  Clock3,
  CreditCard,
  FileCheck2,
  Landmark,
  Link2,
  ReceiptText,
  Users,
} from "lucide-react";

type ModuleItem = {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
};

const modules: ModuleItem[] = [
  { key: "dashboard", icon: BarChart3 },
  { key: "entries", icon: BadgeDollarSign },
  { key: "payments", icon: CreditCard },
  { key: "receipts", icon: ReceiptText },
  { key: "customersProducts", icon: Boxes },
  { key: "recurrence", icon: CalendarClock },
  { key: "projection", icon: Landmark },
  { key: "margin", icon: Calculator },
  { key: "mei", icon: FileCheck2 },
  { key: "timeTeam", icon: Clock3 },
  { key: "accessBilling", icon: Users },
  { key: "integrations", icon: Link2 },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
} as const;

export const Modules = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background" id="modulos">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Trans i18nKey="modules.title" components={{ 0: <span className="text-primary" /> }} />
          </motion.h2>
          <motion.p variants={item} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("modules.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {modules.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={item}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group rounded-lg border border-border/60 bg-card p-5 shadow-sm hover:shadow-card transition-shadow"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {t(`modules.items.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`modules.items.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
