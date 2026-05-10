import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Layers, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { corsi, applicazioni } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Digitale — Soluzioni Digitali e Formazione Professionale" },
      { name: "description", content: "Corsi online su Privacy, GDPR, Sicurezza e applicazioni professionali per imprese." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 [background:var(--gradient-subtle)]">
        <div aria-hidden className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 [background:var(--gradient-hero)] blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 [background:var(--gradient-hero)] blur-3xl" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground mb-8 shadow-sm">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Formazione certificata · Soluzioni su misura
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Soluzioni Digitali e <span className="bg-clip-text text-transparent [background-image:var(--gradient-hero)]">Formazione Professionale</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Corsi online e applicazioni per imprese e professionisti.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="h-12 px-8" asChild>
              <Link to="/corsi"><GraduationCap className="mr-1" /> Corsi Online</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8" asChild>
              <Link to="/applicazioni"><Layers className="mr-1" /> Applicazioni per Imprese</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CORSI */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-medium text-primary mb-3">Formazione</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Corsi Online</h2>
            <p className="mt-4 text-lg text-muted-foreground">Formazione chiara, aggiornata e conforme alle normative.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {corsi.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group p-6 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
                <Button variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:text-primary/80" asChild>
                  <Link to="/corsi">Dettagli <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                </Button>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" className="h-12 px-8" asChild>
              <Link to="/corsi">Vai ai Corsi <ArrowRight className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* APPLICAZIONI */}
      <section className="py-24 [background:var(--gradient-subtle)] border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-medium text-primary mb-3">Soluzioni Digitali</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Applicazioni per Imprese</h2>
            <p className="mt-4 text-lg text-muted-foreground">Strumenti digitali per semplificare il lavoro e migliorare i processi.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applicazioni.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group p-6 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
                <div className="h-11 w-11 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
                <Button variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:text-primary/80" asChild>
                  <Link to="/applicazioni">Scopri di più <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                </Button>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" className="h-12 px-8" asChild>
              <Link to="/applicazioni">Applicazioni per Imprese <ArrowRight className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CHI SONO */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-5xl">
          <div className="relative aspect-square max-w-sm mx-auto md:mx-0 w-full rounded-3xl [background:var(--gradient-hero)] shadow-[var(--shadow-elegant)] flex items-center justify-center">
            <div className="absolute inset-3 rounded-2xl bg-card/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <ShieldBadge />
                <p className="mt-4 font-semibold text-lg">RSPP · Consulente Privacy</p>
                <p className="text-sm opacity-80">Sviluppatore di soluzioni digitali</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary mb-3">Chi Sono</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">Esperienza, normative e tecnologia.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RSPP, consulente privacy e sviluppatore di soluzioni digitali. Aiuto scuole, aziende e professionisti
              a lavorare meglio, in modo sicuro e conforme alle normative.
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {["Formazione GDPR e D.Lgs. 81/08", "Consulenza privacy per scuole e PMI", "Sviluppo applicazioni gestionali"].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}

function ShieldBadge() {
  return (
    <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M32 6l22 8v14c0 14-9 24-22 30C19 52 10 42 10 28V14l22-8z" />
      <path d="M22 32l8 8 14-14" />
    </svg>
  );
}
