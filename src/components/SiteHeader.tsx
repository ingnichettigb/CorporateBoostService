import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AccessibilityToggles } from "@/components/AccessibilityToggles";
import { useState } from "react";

export function SiteHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary/20">
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-3" aria-label="Main">
        <Link to="/" className="flex items-center gap-3 font-bold tracking-tight">
          <span className="h-11 w-11 rounded-lg [background:var(--gradient-hero)] flex items-center justify-center shadow-[var(--shadow-card)]">
            <ShieldCheck className="h-6 w-6 text-primary-foreground" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base md:text-lg text-foreground">{t("brand")}</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{t("motto")}</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-base font-semibold">
          <Link to="/" className="text-foreground/80 hover:text-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-primary underline underline-offset-4" }}>{t("nav.home")}</Link>
          <Link to="/corsi" className="text-foreground/80 hover:text-foreground" activeProps={{ className: "text-primary underline underline-offset-4" }}>{t("nav.corsi")}</Link>
          <Link to="/applicazioni" className="text-foreground/80 hover:text-foreground" activeProps={{ className: "text-primary underline underline-offset-4" }}>{t("nav.applicazioni")}</Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <AccessibilityToggles />
          <LanguageSwitcher />
          <Button variant="hero" size="default" className="h-11" asChild>
            <Link to="/" hash="contatti">{t("nav.contatti")}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden min-w-11 min-h-11 inline-flex items-center justify-center rounded-md border-2 border-foreground/20"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-primary/20 bg-background px-4 py-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)} className="py-2 font-semibold">{t("nav.home")}</Link>
          <Link to="/corsi" onClick={() => setOpen(false)} className="py-2 font-semibold">{t("nav.corsi")}</Link>
          <Link to="/applicazioni" onClick={() => setOpen(false)} className="py-2 font-semibold">{t("nav.applicazioni")}</Link>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            <AccessibilityToggles />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
