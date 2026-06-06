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
  Wrench,
  KeyRound,
  Building2,
  ClipboardList,
  Camera,
  Video,
  ScanText,
  MapPin,
  FolderArchive,
  FileDown,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Gauge,
  Lock,
  Wifi,
  PlayCircle,
  AlertTriangle,
  HardDrive,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroAsset from "@/assets/smart-maintenance/home.png.asset.json";
import pdfImg from "@/assets/smart-maintenance/pdf.jpg";

const heroImg = heroAsset.url;

export const Route = createFileRoute("/smart-maintenance")({
  head: () => ({
    meta: [
      { title: "SmartMaintenance — App per report di manutenzione industriale" },
      {
        name: "description",
        content:
          "SmartMaintenance: app mobile-first per la segnalazione guidata di guasti e interventi. Foto geolocalizzate, OCR, PDF professionale e mail precompilata. Manutenzione industriale, report guasti, segnalazione guasti.",
      },
      {
        property: "og:title",
        content: "SmartMaintenance — Report di manutenzione, zero errori",
      },
      {
        property: "og:description",
        content:
          "Segnalazione guidata di guasti industriali: foto con filigrana e GPS, OCR sulla targa, PDF professionale e mail precompilata. Tutto dal tuo dispositivo.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: SmartMaintenancePage,
});

const features = [
  {
    icon: KeyRound,
    title: "Attivazione e licenza",
    desc: "Attiva l'app con la tua licenza e abilita tutte le funzioni in pochi secondi.",
  },
  {
    icon: Building2,
    title: "Configurazione azienda e operatore",
    desc: "Imposta i dati aziendali e dell'operatore una volta sola: saranno sempre coerenti in ogni report.",
  },
  {
    icon: ClipboardList,
    title: "Creazione guidata del report",
    desc: "Una procedura passo-passo guida l'operatore senza dimenticare nessun dato.",
  },
  {
    icon: Camera,
    title: "Fotografie con filigrana e GPS",
    desc: "Scatta foto geolocalizzate con filigrana data, ora e coordinate, sempre tracciabili.",
  },
  {
    icon: Video,
    title: "Video opzionale",
    desc: "Aggiungi un breve video per documentare il guasto in modo ancora più chiaro.",
  },
  {
    icon: ScanText,
    title: "OCR sulla targa identificativa",
    desc: "Riconoscimento automatico della targa dell'asset: meno digitazione, meno errori.",
  },
  {
    icon: MapPin,
    title: "Geolocalizzazione automatica",
    desc: "Le coordinate GPS dell'intervento vengono rilevate e allegate in automatico.",
  },
  {
    icon: FolderArchive,
    title: "Bozze e archivio invii",
    desc: "Salva bozze e ritrova ogni report inviato in un archivio ordinato e ricercabile.",
  },
  {
    icon: FileDown,
    title: "Generazione PDF professionale",
    desc: "Genera un PDF curato e standardizzato, pronto da condividere.",
  },
  {
    icon: Mail,
    title: "Invio email con destinatari predefiniti",
    desc: "Mail precompilata con allegati e destinatari predefiniti: centro servizi e responsabili.",
  },
];

const steps = [
  { n: "1", icon: Wrench, title: "Asset", desc: "Identifica il macchinario con dati anagrafici e targa." },
  { n: "2", icon: ClipboardList, title: "Commessa", desc: "Associa la commessa o il riferimento di intervento." },
  { n: "3", icon: AlertTriangle, title: "Urgenza", desc: "Imposta il livello di urgenza della segnalazione." },
  { n: "4", icon: ClipboardList, title: "Descrizione e azione", desc: "Descrivi il guasto e l'azione suggerita." },
  { n: "5", icon: Camera, title: "Foto", desc: "Allega foto con filigrana e coordinate GPS." },
  { n: "6", icon: Video, title: "Video", desc: "Aggiungi un video opzionale dell'intervento." },
  { n: "7", icon: MapPin, title: "GPS", desc: "Le coordinate vengono rilevate automaticamente." },
  { n: "8", icon: Mail, title: "Salvataggio e invio", desc: "Genera il PDF e invia la mail precompilata." },
];

const benefits = [
  {
    icon: Wifi,
    title: "Funziona offline",
    desc: "Compila e genera il report anche dove non c'è connessione: l'invio avviene quando vuoi.",
  },
  {
    icon: CheckCircle2,
    title: "Zero errori nei report",
    desc: "La procedura guidata e l'OCR riducono dimenticanze e dati sbagliati.",
  },
  {
    icon: Layers,
    title: "Standardizzazione aziendale",
    desc: "Ogni tecnico produce documenti identici, professionali e consultabili.",
  },
  {
    icon: Gauge,
    title: "Velocità operativa",
    desc: "Dal campo all'ufficio in un clic: report più veloci e decisioni più rapide.",
  },
  {
    icon: HardDrive,
    title: "Archiviazione locale sicura",
    desc: "I dati restano sul tuo dispositivo, con storico sempre disponibile.",
  },
  {
    icon: ShieldCheck,
    title: "Affidabile sul campo",
    desc: "Pensata per l'operatore tecnico: semplice, robusta e veloce da usare.",
  },
];

const pdfBlocks = [
  "Intestazione su sfondo azzurro",
  "Badge di urgenza ben visibile",
  "Blocco dati asset completo",
  "Descrizione del guasto e azione suggerita",
  "Foto con riconoscimento OCR della targa",
  "Pagina finale con dati operatore e coordinate GPS",
];

const privacy = [
  {
    icon: HardDrive,
    title: "Dati salvati solo in locale",
    desc: "I report e gli allegati restano sul dispositivo: nessun archivio su server esterni.",
  },
  {
    icon: Lock,
    title: "Nessun invio automatico",
    desc: "Sei tu a decidere quando e a chi inviare: nessuna trasmissione in background.",
  },
  {
    icon: FolderArchive,
    title: "Backup manuale",
    desc: "Esporta e conserva i tuoi report quando preferisci, in totale controllo.",
  },
];

const faq = [
  {
    q: "Il GPS non viene rilevato, cosa faccio?",
    a: "Verifica che la geolocalizzazione sia attiva e che l'app abbia i permessi di posizione. In ambienti chiusi il segnale può essere debole: avvicinati a una finestra o all'esterno e riprova. Le coordinate possono comunque essere inserite manualmente.",
  },
  {
    q: "Come funziona il riconoscimento vocale?",
    a: "Nei campi di descrizione puoi usare il riconoscimento vocale del dispositivo per dettare il testo: utile per redigere il report rapidamente con le mani occupate.",
  },
  {
    q: "Ho ricevuto la mail senza allegato, perché?",
    a: "Assicurati di aver generato il PDF prima dell'invio e che l'app di posta consenta gli allegati. Se l'allegato è troppo grande, riduci la qualità di foto e video oppure invia il PDF separatamente dall'archivio.",
  },
  {
    q: "Dove vengono salvati i report?",
    a: "I report vengono salvati in locale sul dispositivo, nella cartella dedicata dell'app. Da lì puoi consultarli, esportarli o effettuare un backup manuale.",
  },
];

function SmartMaintenancePage() {
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
                <Wrench className="h-4 w-4 text-primary" aria-hidden /> SmartMaintenance · Report di manutenzione
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Report perfetti, <span className="text-primary">zero errori</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto lg:mx-0">
                La segnalazione guidata di guasti e interventi di manutenzione industriale:
                foto geolocalizzate, OCR, PDF professionale e mail precompilata, tutto dal tuo
                dispositivo.
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
              <p className="mt-4 text-sm text-foreground/65">
                Mobile-first · Funziona offline · Dati salvati sul tuo dispositivo
              </p>
            </div>
            <img
              src={heroImg}
              alt="App SmartMaintenance su smartphone con un report di manutenzione industriale"
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              width={1280}
              height={960}
            />
          </div>
        </section>

        {/* COS'È */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              Cos'è SmartMaintenance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              La manutenzione diventa intelligente
            </h2>
            <p className="mt-5 text-lg text-foreground/85 leading-relaxed">
              SmartMaintenance è un'applicazione mobile-first per la segnalazione guidata di
              guasti e interventi di manutenzione industriale. L'operatore tecnico di campo
              redige un report strutturato con dati dell'asset, descrizione del guasto, azione
              suggerita, fotografie geolocalizzate, video e coordinate GPS, generando un PDF
              professionale e una mail precompilata pronta da inviare.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Mobile-first", "Funziona offline", "PDF professionale", "Email precompilata"].map(
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
                Tutto ciò che serve, in un'unica app
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <h2 className="text-3xl md:text-4xl font-bold">La segnalazione in 8 step</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                Perché scegliere SmartMaintenance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Riduci i tempi, aumenta la qualità
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
            <img
              src={pdfImg}
              alt="Esempio di PDF di report manutenzione generato da SmartMaintenance"
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                PDF generato
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Un documento professionale e standardizzato
              </h2>
              <p className="mt-4 text-lg text-foreground/85">
                Ogni report genera un PDF curato, identico per ogni tecnico e facilmente
                consultabile:
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

        {/* PRIVACY */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Privacy e sicurezza
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Tutto sotto il tuo controllo</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {privacy.map(({ icon: Icon, title, desc }) => (
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
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              La manutenzione industriale, reinventata
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Un nuovo standard per tecnici e aziende: dal campo all'ufficio in un clic.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="h-12 px-7 text-base bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-black"
              >
                Scarica la demo
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
