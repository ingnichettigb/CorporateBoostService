import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Gift } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChecklistCTAs } from "@/components/ChecklistCTAs";

export const Route = createFileRoute("/controlli-gratuiti")({
  head: () => ({
    meta: [
      { title: "Faccio tutto io — Controlli gratuiti per te" },
      { name: "description", content: "Controlli e autovalutazioni gratuite: Privacy, GDPR e altro. Scegli il tuo check gratuito." },
      { property: "og:title", content: "Faccio tutto io — Controlli gratuiti per te" },
      { property: "og:description", content: "Autovalutazioni gratuite Privacy e GDPR." },
    ],
  }),
  component: ControlliGratuitiPage,
});

function ControlliGratuitiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-40 pb-20 [background:var(--gradient-section-hero)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Torna alla Home
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider mb-5">
              <Gift className="h-4 w-4" aria-hidden /> Gratis per te
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Faccio tutto io <span className="text-primary">gratis per te</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              Scegli un controllo gratuito e scopri in pochi minuti il tuo livello di conformità.
              Aggiungerò qui altri controlli appena disponibili.
            </p>
          </div>

          <ChecklistCTAs className="mb-16" />

          <div className="text-center pt-10 border-t-2 border-primary/15">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Vuoi un preventivo personalizzato?
            </h2>
            <p className="text-foreground/85 mb-6 max-w-xl mx-auto">
              Contattami per una consulenza dedicata alla tua azienda.
            </p>
            <Button variant="hero" size="lg" className="h-12 px-8" asChild>
              <Link to="/" hash="contatti">
                <Mail className="mr-1" aria-hidden /> Chiedi un preventivo — Contattami
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
