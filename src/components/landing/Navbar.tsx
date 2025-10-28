import "../../helpers/i18n";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 120, damping: 20 });

  const lastY = useRef(0);
  useMotionValueEvent(smoothY, "change", (v) => {
    const curr = v;
    setAtTop(curr < 8);
    const goingDown = curr > lastY.current + 4;
    const goingUp = curr < lastY.current - 4;
    if (goingDown && curr > 120) setHidden(true);
    else if (goingUp) setHidden(false);
    lastY.current = curr;
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="sticky top-0 z-50"
    >
      <ScrollProgress />

      <motion.div
        className="bg-background/80 backdrop-blur-lg border-b"
        animate={{
          boxShadow: atTop ? "0 0 0 0 rgba(0,0,0,0)" : "0 8px 24px rgba(0,0,0,0.08)",
          borderColor: atTop ? "hsl(var(--border) / 0.5)" : "hsl(var(--border))",
        }}
      >
        <div className="container px-4 mx-auto">
          <motion.div
            className="flex items-center justify-between"
            initial={false}
            animate={{ height: atTop ? 64 : 56 }}
            transition={{ duration: 0.18 }}
          >
            {/* Logo */}
            <motion.a
              href="/"
              className="text-2xl font-bold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t("navbar.brand")}
              title="Verval"
            >
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center" aria-hidden>
                <span className="text-xl font-bold text-primary-foreground">V</span>
              </div>
            </motion.a>


            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavBtn onClick={() => scrollToSection("como-funciona")}>{t("navbar.links.how")}</NavBtn>
              <NavBtn onClick={() => scrollToSection("recursos")}>{t("navbar.links.features")}</NavBtn>
              <NavBtn onClick={() => scrollToSection("precos")}>{t("navbar.links.pricing")}</NavBtn>

              <a href="https://chatfinanceiro.com/grana" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" aria-label={t("navbar.actions.signIn")}>
                  {t("navbar.actions.signIn")}
                </Button>
              </a>

              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <a href="https://chatfinanceiro.com/grana/criar-usuario" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="sm" aria-label={t("navbar.actions.startFree")}>
                    {t("navbar.actions.startFree")}
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Mobile toggle */}
            <motion.button
              className="md:hidden p-2 rounded-md border border-transparent hover:border-border"
              onClick={() => setIsOpen((v) => !v)}
              whileTap={{ scale: 0.96 }}
              aria-label={isOpen ? t("navbar.aria.closeMenu") : t("navbar.aria.openMenu")}
            >
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Mobile menu */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="mobile"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="md:hidden overflow-hidden border-t border-border"
              >
                <div className="py-4 space-y-3">
                  <MobileItem onClick={() => scrollToSection("como-funciona")}>{t("navbar.links.how")}</MobileItem>
                  <MobileItem onClick={() => scrollToSection("recursos")}>{t("navbar.links.features")}</MobileItem>
                  <MobileItem onClick={() => scrollToSection("precos")}>{t("navbar.links.pricing")}</MobileItem>
                  <div className="px-1 space-y-2">
                    <Button asChild variant="outline" size="sm" className="w-full" aria-label={t("navbar.actions.signIn")}>
                      <a href="https://chatfinanceiro.com/grana" target="_blank" rel="noopener noreferrer">
                        {t("navbar.actions.signIn")}
                      </a>
                    </Button>
                    <Button asChild variant="default" size="sm" className="w-full" aria-label={t("navbar.actions.startFree")}>
                      <a href="https://chatfinanceiro.com/grana/criar-usuario" target="_blank" rel="noopener noreferrer">
                        {t("navbar.actions.startFree")}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.nav>
  );
};

function NavBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative text-foreground/90 hover:text-primary font-medium"
      initial={false}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
      <motion.span
        aria-hidden
        className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.22 }}
      />
    </motion.button>
  );
}

function MobileItem({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="block w-full text-left px-1 py-2 text-foreground hover:text-primary font-medium"
      initial={{ x: -6, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.button>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="h-0.5 w-full bg-primary/70"
    />
  );
}
