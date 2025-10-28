import "../../helpers/i18n";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
} as const;

const itemUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
} as const;

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12 mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Brand + tagline + actions */}
          <motion.div variants={itemUp} className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Verval</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/5511910246542" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" aria-label={t("footer.actions.whatsapp")}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("footer.actions.whatsapp")}
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/nicolas-tesla/" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" aria-label={t("footer.actions.linkedin")}>
                  <User className="w-4 h-4 mr-2" />
                  {t("footer.actions.linkedin")}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Produto */}
          <motion.div variants={itemUp}>
            <h4 className="font-semibold mb-4">{t("footer.sections.product.title")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#recursos" className="hover:text-primary transition-colors">
                  {t("footer.sections.product.links.features")}
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-primary transition-colors">
                  {t("footer.sections.product.links.pricing")}
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-primary transition-colors">
                  {t("footer.sections.product.links.how")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("footer.sections.product.links.status")}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemUp}>
            <h4 className="font-semibold mb-4">{t("footer.sections.legal.title")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("footer.sections.legal.links.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("footer.sections.legal.links.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("footer.sections.legal.links.contact")}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <p>
            &copy; {year} Verval. {t("footer.copyright")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
