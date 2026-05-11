import { useA11ySettings } from "@/hooks/useA11ySettings";
import { useTranslation } from "react-i18next";
import { Type, Contrast } from "lucide-react";

export function AccessibilityToggles() {
  const { large, toggleLarge, contrast, toggleContrast } = useA11ySettings();
  const { t } = useTranslation();
  return (
    <div className="inline-flex gap-2">
      <button
        type="button"
        onClick={toggleLarge}
        aria-pressed={large}
        aria-label={large ? t("a11y.largeTextOn") : t("a11y.largeText")}
        title={t("a11y.largeText")}
        className={`inline-flex items-center justify-center min-w-11 min-h-11 px-3 rounded-md border-2 font-semibold text-sm transition-colors ${
          large ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-foreground/20 hover:bg-accent"
        }`}
      >
        <Type className="h-5 w-5" aria-hidden /> <span className="ml-1 hidden sm:inline">A+</span>
      </button>
      <button
        type="button"
        onClick={toggleContrast}
        aria-pressed={contrast}
        aria-label={contrast ? t("a11y.highContrastOn") : t("a11y.highContrast")}
        title={t("a11y.highContrast")}
        className={`inline-flex items-center justify-center min-w-11 min-h-11 px-3 rounded-md border-2 font-semibold text-sm transition-colors ${
          contrast ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-foreground/20 hover:bg-accent"
        }`}
      >
        <Contrast className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
