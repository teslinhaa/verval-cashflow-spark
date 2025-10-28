import "../../helpers/i18n";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
} as const;

export const FAQ = () => {
  const { t } = useTranslation();

  // chaves dos itens para mapear perguntas/respostas
  const faqKeys = ["importExcel", "profitCalc", "multiuser", "filters", "mobile", "recurrence"] as const;
  const faqs = faqKeys.map((k) => ({
    key: k,
    question: t(`faq.items.${k}.q`),
    answer: t(`faq.items.${k}.a`),
  }));

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.key} variants={item}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-2 sm:px-4 shadow-sm hover:shadow-card transition-shadow bg-card"
                >
                  {/* Trigger com ícone animado via data-state do Radix */}
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                    <div className="flex w-full items-center justify-between gap-4">
                      <span className="pr-2">{faq.question}</span>
                      <span
                        aria-hidden
                        className="shrink-0 rounded-full border border-border/60 p-1"
                      >
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </span>
                    </div>
                  </AccordionTrigger>

                  {/* Content com fade+slide */}
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.28 }}
                      className="px-2 sm:px-2"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
