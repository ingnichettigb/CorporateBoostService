import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { corsi } from "@/data/site";
import { ArrowRight, Clock, Award, Users } from "lucide-react";

export const Route = createFileRoute("/corsi")({
  head: () => ({
    meta: [
      { title: "Corsi Online — Privacy, GDPR e Sicurezza" },
      { name: "description", content: "Corsi online su privacy, GDPR, sicurezza sul lavoro e aggiornamenti normativi." },
    ],
  }),
  component: CorsiPage,
});

function CorsiPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="pt-32 pb-16 [background:var(--gradient-subtle)] border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Formazione professionale</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Corsi Online</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Formazione chiara, aggiornata e conforme alle normative italiane ed europee.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Accesso 24/7</span>
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> Attestato finale</span>
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Per aziende e privati</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl">
          {corsi.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="p-8 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <Button variant="hero" size="sm">
                Iscriviti <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
