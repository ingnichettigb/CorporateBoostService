import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Layers } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen — Studio Digitale" },
      { name: "description", content: "Costruiamo esperienze web eleganti, veloci e su misura. Design, sviluppo e brand in un unico studio." },
      { property: "og:title", content: "Lumen — Studio Digitale" },
      { property: "og:description", content: "Esperienze web eleganti, veloci, su misura." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="h-6 w-6 rounded-md [background:var(--gradient-hero)]" />
            Lumen
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servizi" className="hover:text-foreground transition-colors">Servizi</a>
            <a href="#lavori" className="hover:text-foreground transition-colors">Lavori</a>
            <a href="#contatti" className="hover:text-foreground transition-colors">Contatti</a>
          </div>
          <Button variant="hero" size="sm">Inizia ora</Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Studio digitale · Disponibile per nuovi progetti
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Esperienze web che <span className="bg-clip-text text-transparent [background-image:var(--gradient-hero)]">brillano</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Progettiamo e sviluppiamo siti, prodotti e brand digitali. Eleganti, veloci, pensati per convertire.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="h-12 px-8">
              Parliamone <ArrowRight className="ml-1" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8" asChild>
              <a href="#servizi">Scopri di più</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="py-24 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-muted-foreground mb-3">Cosa facciamo</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Un team, ogni fase del prodotto.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: "Design", desc: "Brand, identità visiva e interfacce che raccontano chi sei." },
              { icon: Zap, title: "Sviluppo", desc: "Siti e web app performanti, costruiti con cura artigianale." },
              { icon: Shield, title: "Crescita", desc: "SEO, analytics e ottimizzazione continua per scalare." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl [background:var(--gradient-hero)] flex items-center justify-center mb-6 shadow-[var(--shadow-glow)]">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="lavori" className="py-24 [background:var(--gradient-subtle)]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "120+", l: "Progetti consegnati" },
            { n: "8 anni", l: "Di esperienza" },
            { n: "98%", l: "Clienti soddisfatti" },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="text-5xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent [background-image:var(--gradient-hero)]">
                {n}
              </div>
              <p className="mt-3 text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contatti" className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center [background:var(--gradient-hero)] shadow-[var(--shadow-elegant)]">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground max-w-2xl mx-auto">
              Pronto a dare vita al tuo prossimo progetto?
            </h2>
            <p className="mt-5 text-primary-foreground/80 max-w-xl mx-auto">
              Raccontaci la tua idea. Ti rispondiamo entro 24 ore con un piano concreto.
            </p>
            <div className="mt-10">
              <Button size="lg" className="h-12 px-8 bg-background text-foreground hover:bg-background/90" asChild>
                <a href="mailto:hello@lumen.studio">hello@lumen.studio <ArrowRight className="ml-1" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lumen Studio. Tutti i diritti riservati.</p>
          <p>Made with care in Italy.</p>
        </div>
      </footer>
    </div>
  );
}
