import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRight,
  FlaskConical,
  FileText,
  Thermometer,
  Search,
  Database,
  Calculator,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Gauge,
  Lock,
  Languages,
  PlayCircle,
  ScrollText,
  Users,
  BookOpenCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logoAsset from "@/assets/apps/pedflow.png.asset.json";

const logoImg = logoAsset.url;

export const Route = createFileRoute("/pedflow")({
  head: () => ({
    meta: [
      { title: "PedFlow — Classificazione fluidi secondo la Direttiva PED 2014/68/UE" },
      {
        name: "description",
        content:
          "PedFlow: classifica i fluidi nel Gruppo 1 o 2 della Direttiva PED 2014/68/UE in un click. Database CLP ECHA con oltre 4.400 sostanze, calcolo Art. 13, PDF tracciabile.",
      },
      {
        property: "og:title",
        content: "PedFlow — Classificazione fluidi PED in un click",
      },
      {
        property: "og:description",
        content:
          "Determina in modo rapido e tracciabile il Gruppo PED di una sostanza, partendo dalla SDS o dal database CLP ufficiale ECHA. PDF di classificazione pronto da archiviare.",
      },
      { property: "og:image", content: logoImg },
      { name: "twitter:image", content: logoImg },
    ],
  }),
  component: PedFlowPage,
});

const features = [
  {
    icon: FileText,
    title: "Dati documento",
    desc: "Compila commessa, cliente, progetto e n° disegno: ogni classificazione resta tracciabile.",
  },
  {
    icon: Thermometer,
    title: "Condizioni operative",
    desc: "Inserisci temperatura minima e massima di esercizio per un calcolo accurato.",
  },
  {
    icon: ScrollText,
    title: "Inserimento da SDS",
    desc: "Inserisci nome, CAS, EC, Flash Point e codici H direttamente dalla scheda di sicurezza.",
  },
  {
    icon: Search,
    title: "Ricerca per nome o CAS",
    desc: "Cerca la sostanza nel database CLP interno con oltre 4.400 voci.",
  },
  {
    icon: Database,
    title: "Database CLP integrato",
    desc: "Tabella 3 dell'Allegato VI del Regolamento CLP: Index, CAS, EC, codici H e pittogrammi.",
  },
  {
    icon: Calculator,
    title: "Calcolo Art. 13 automatico",
    desc: "Gruppo base e Gruppo finale con applicazione automatica dei criteri dell'Art. 13.",
  },
  {
    icon: FileDown,
    title: "PDF di classificazione",
    desc: "Genera e scarica il PDF con motivazione testuale, archiviato nel Registro.",
  },
  {
    icon: Languages,
    title: "Multilingua",
    desc: "Interfaccia in Italiano, Inglese, Spagnolo e Tedesco, selezionabile in ogni momento.",
  },
];

const steps = [
  { n: "1", icon: FileText, title: "Dati documento", desc: "Compila commessa, cliente, progetto e n° disegno." },
  { n: "2", icon: Thermometer, title: "Condizioni operative", desc: "Inserisci Tmin e Tmax di esercizio." },
  { n: "3", icon: Search, title: "Identifica il fluido", desc: "Inserimento da SDS oppure ricerca nel database CLP." },
  { n: "4", icon: Calculator, title: "Calcola", desc: "Ottieni Gruppo base e Gruppo finale con Art. 13." },
  { n: "5", icon: FileDown, title: "Salva e scarica", desc: "Salva il risultato e scarica il PDF nel Registro." },
];

const benefits = [
  {
    icon: Gauge,
    title: "Classificazione rapida",
    desc: "Determina il Gruppo 1 o 2 della Direttiva PED in un click, senza calcoli manuali.",
  },
  {
    icon: BookOpenCheck,
    title: "Sempre tracciabile",
    desc: "Ogni risultato è documentato con motivazione e archiviato nel Registro.",
  },
  {
    icon: Database,
    title: "Database CLP ufficiale",
    desc: "Oltre 4.400 sostanze dalla Tabella 3 dell'Allegato VI del Regolamento CLP.",
  },
  {
    icon: Layers,
    title: "Standardizzazione",
    desc: "Risultati coerenti e ripetibili tra tecnici, progettisti e responsabili qualità.",
  },
  {
    icon: ShieldCheck,
    title: "Conforme alla normativa",
    desc: "Criteri dell'Art. 13 della Direttiva 2014/68/UE applicati automaticamente.",
  },
  {
    icon: Languages,
    title: "Pronta per team internazionali",
    desc: "Quattro lingue disponibili: italiano, inglese, spagnolo e tedesco.",
  },
];

const pdfBlocks = [
  "Dati documento: commessa, cliente, progetto, n° disegno",
  "Condizioni operative con Tmin e Tmax",
  "Sostanza identificata con CAS, EC e codici H",
  "Gruppo base e Gruppo finale PED",
  "Motivazione testuale generata automaticamente",
  "Archiviazione nel Registro per consultazione",
];

const security = [
  {
    icon: Lock,
    title: "Multi-tenant con RLS",
    desc: "Row Level Security a livello organizzazione: ogni team vede solo i propri dati.",
  },
  {
    icon: ShieldCheck,
    title: "Autenticazione sicura",
    desc: "Accesso via email/password o Google OAuth, con ruoli gestiti in modo dedicato.",
  },
  {
    icon: Users,
    title: "Gestione dei ruoli",
    desc: "Permessi gestiti tramite una tabella user_roles separata, per il pieno controllo.",
  },
];

const faq = [
  {
    q: "Come viene determinato il Gruppo PED?",
    a: "PedFlow applica i criteri dell'Art. 13 della Direttiva 2014/68/UE: il fluido è assegnato al Gruppo 1 se presenta frasi H pericolose (es. H224, H270, H300, H330, H340, H350, H360, H400, H410) o se la temperatura massima di esercizio supera il punto di infiammabilità. In caso contrario rientra nel Gruppo 2.",
  },
  {
    q: "Posso classificare partendo dalla Scheda di Sicurezza?",
    a: "Sì. Nella tab SDS inserisci manualmente nome, CAS, EC, Flash Point e i codici H presenti nella scheda di sicurezza. In alternativa puoi cercare la sostanza per nome o CAS nel database CLP interno.",
  },
  {
    q: "Quante sostanze contiene il database?",
    a: "Il database CLP integrato contiene oltre 4.400 sostanze tratte dalla Tabella 3 dell'Allegato VI del Regolamento CLP, con Index No, CAS, EC, nome chimico, codici H e pittogrammi.",
  },
  {
    q: "Il risultato ha valore legale?",
    a: "I risultati prodotti hanno valore di supporto tecnico. La responsabilità della classificazione finale resta del tecnico qualificato che firma la documentazione.",
  },
];

function PedFlowPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4" /> Torna alle applicazioni
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
                <FlaskConical className="h-4 w-4 text-primary" aria-hidden /> PedFlow · Classificazione fluidi PED
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Gruppo 1 o 2 della PED, <span className="text-primary">in un click</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto lg:mx-0">
                Lo strumento professionale per classificare i fluidi secondo la Direttiva PED
                2014/68/UE: partendo dalla Scheda di Sicurezza o dal database CLP ufficiale ECHA,
                ottieni il Gruppo PED in modo rapido e tracciabile.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="h-12 px-7 text-base">
                  Prova ora
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-7 text-base border-2 border-primary/40"
                >
                  <PlayCircle className="h-5 w-5" aria-hidden /> Richiedi demo
                </Button>
              </div>
              <p className="mt-6 text-sm text-foreground/65">
                Database CLP con oltre 4.400 sostanze · Calcolo Art. 13 automatico · Multilingua
              </p>
            </div>
            <figure className="m-0 flex justify-center">
              <img
                src={logoImg}
                alt="PedFlow — applicazione per la classificazione dei fluidi secondo la Direttiva PED"
                className="w-2/3 max-w-xs rounded-2xl border-2 border-primary/15 shadow-lg bg-white"
                width={512}
                height={512}
              />
            </figure>
          </div>
        </section>

        {/* COS'È */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              Cos'è PedFlow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              La classificazione PED, semplice e tracciabile
            </h2>
            <p className="mt-5 text-lg text-foreground/85 leading-relaxed">
              PedFlow è uno strumento professionale per la classificazione dei fluidi secondo la
              Direttiva PED 2014/68/UE (Pressure Equipment Directive). Permette a tecnici,
              progettisti e responsabili qualità di determinare in modo rapido e tracciabile il
              Gruppo PED (1 o 2) di una sostanza, partendo dalla Scheda di Sicurezza (SDS) o dal
              database CLP ufficiale ECHA.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Direttiva PED 2014/68/UE", "Database CLP ECHA", "Art. 13 automatico", "PDF tracciabile"].map(
                (b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary/25 bg-white px-4 py-2 text-sm font-semibold"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> {b}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* FUNZIONALITÀ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Funzionalità principali
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Tutto ciò che serve per classificare
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Come funziona
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Il flusso operativo in 5 step</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map(({ n, icon: Icon, title, desc }) => (
                <Card key={n} className="relative border-2 border-primary/20 overflow-hidden">
                  <span className="absolute top-4 right-4 text-5xl font-extrabold text-primary/10 leading-none">
                    {n}
                  </span>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-yellow-400 text-black flex items-center justify-center mb-3 border-2 border-black">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PERCHÉ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Perché scegliere PedFlow
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Più velocità, più conformità
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PDF GENERATO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="rounded-2xl border-2 border-primary/15 shadow-lg bg-white p-10 w-full max-w-md">
                <FileDown className="h-16 w-16 text-primary mx-auto mb-6" aria-hidden />
                <h3 className="text-xl font-bold text-center mb-2">PDF di classificazione</h3>
                <p className="text-center text-foreground/75">
                  Un documento completo e archiviato nel Registro, pronto da allegare alla
                  documentazione tecnica.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                PDF generato
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Un documento completo e tracciabile
              </h2>
              <p className="mt-4 text-lg text-foreground/85">
                Ogni classificazione genera un PDF chiaro e standardizzato, con tutti i dati
                necessari:
              </p>
              <ul className="mt-6 space-y-3">
                {pdfBlocks.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black border-2 border-black">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-foreground/85 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SICUREZZA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Sicurezza e multi-tenant
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Dati protetti per ogni organizzazione</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {security.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Domande frequenti
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-8 text-center text-sm text-foreground/60">
              I risultati prodotti hanno valore di supporto tecnico. La responsabilità della
              classificazione finale resta del tecnico qualificato che firma la documentazione.
            </p>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Classifica i tuoi fluidi con PedFlow
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Gruppo 1 o 2 della Direttiva PED in un click, con la sicurezza di un calcolo conforme.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="h-12 px-7 text-base bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-black"
              >
                Prova ora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-base border-2 border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <ArrowRight className="h-5 w-5" aria-hidden /> Richiedi preventivo aziendale
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
