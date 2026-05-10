import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { applicazioni } from "@/data/site";
import { ArrowRight, Zap, Lock, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/applicazioni")({
  head: () => ({
    meta: [
      { title: "Applicazioni per Imprese — Strumenti digitali professionali" },
      { name: "description", content: "Applicazioni professionali per gestire adempimenti, formazione e processi aziendali." },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="pt-32 pb-16 [background:var(--gradient-subtle)] border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Soluzioni digitali</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Applicazioni per Imprese</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Strumenti digitali per semplificare il lavoro e migliorare i processi aziendali.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Veloci da implementare</span>
            <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Sicure e conformi</span>
            <span className="inline-flex items-center gap-2"><RefreshCw className="h-4 w-4 text-primary" /> Aggiornamenti continui</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {applicazioni.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="p-7 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-xl [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-5">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
              <Button variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:text-primary/80">
                Scopri di più <ArrowRight className="ml-1 h-3.5 w-3.5" />
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
