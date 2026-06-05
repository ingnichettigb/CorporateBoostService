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
  FileCheck2,
  Building2,
  ClipboardList,
  FileStack,
  Languages,
  CloudUpload,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  Zap,
  Wifi,
  Check,
  PlayCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroAsset from "@/assets/minifat/minifat-process.png.asset.json";
import screenMain from "@/assets/minifat/screen-main.jpg";
import screenDocs from "@/assets/minifat/screen-docs.jpg";
import screenPdf from "@/assets/minifat/screen-pdf.jpg";
import screenArchive from "@/assets/minifat/screen-archive.jpg";

export const Route = createFileRoute("/minifat")({
  head: () => ({
    meta: [
      { title: "MiniFAT — Crea dossier FAT professionali in pochi minuti" },
      {
        name: "description",
        content:
          "MiniFAT genera automaticamente copertina, indice, pagine documentali e PDF bilingue per i tuoi Factory Acceptance Test, direttamente dal tuo dispositivo.",
      },
      { property: "og:title", content: "MiniFAT — Dossier FAT professionali in un'app" },
      {
        property: "og:description",
        content:
          "Il modo più semplice per creare dossier FAT professionali. PDF bilingue generati localmente, nessun invio dati a server esterni.",
      },
    ],
  }),
  component: MiniFatPage,
});

const features = [
  {
    icon: Building2,
    title: "Dati Costruttore e Cliente",
    desc: "Gestione completa delle anagrafiche, con template riutilizzabili per ogni progetto.",
  },
  {
    icon: ClipboardList,
    title: "Oggetto FAT guidato",
    desc: "Compilazione passo-passo dell'oggetto del collaudo, senza dimenticare nulla.",
  },
  {
    icon: FileCheck2,
    title: "Selezione documenti",
    desc: "Scegli i documenti richiesti: certificati, dichiarazioni e allegati.",
  },
  {
    icon: FileStack,
    title: "Generazione automatica",
    desc: "Copertina, indice e pagine documentali create in automatico, sempre coerenti.",
  },
  {
    icon: Languages,
    title: "Supporto bilingue",
    desc: "Documentazione pronta in IT / EN / DE / ES con un solo tocco.",
  },
  {
    icon: CloudUpload,
    title: "Salvataggio e archivio",
    desc: "Conserva i tuoi FAT e ritrovali in un archivio ordinato e sempre disponibile.",
  },
  {
    icon: FileDown,
    title: "Esportazione PDF",
    desc: "Genera ed esporta il PDF completo direttamente dal tuo dispositivo.",
  },
];

const steps = [
  {
    n: "1",
    icon: Building2,
    title: "Inserisci i dati",
    desc: "Compila le anagrafiche di Costruttore e Cliente.",
  },
  {
    n: "2",
    icon: ClipboardList,
    title: "Compila l'oggetto FAT",
    desc: "Definisci macchinario, scopo e dettagli del collaudo.",
  },
  {
    n: "3",
    icon: FileCheck2,
    title: "Seleziona i documenti",
    desc: "Scegli certificati, dichiarazioni e allegati richiesti.",
  },
  {
    n: "4",
    icon: FileDown,
    title: "Genera e scarica",
    desc: "Crea il PDF completo e scaricalo sul dispositivo.",
  },
];

const screenshots = [
  { img: screenMain, caption: "Schermata principale" },
  { img: screenDocs, caption: "Lista documenti" },
  { img: screenPdf, caption: "Anteprima PDF" },
  { img: screenArchive, caption: "Archivio FAT" },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Standardizza il processo FAT",
    desc: "Un metodo unico e ripetibile per ogni collaudo, sempre conforme.",
  },
  {
    icon: CheckCircle2,
    title: "Evita errori e ritardi",
    desc: "Niente documenti mancanti o dimenticati: la procedura ti guida.",
  },
  {
    icon: Award,
    title: "Documentazione professionale",
    desc: "Dossier curati, ordinati e pronti da presentare al cliente.",
  },
  {
    icon: Clock,
    title: "Ottimizza la tua giornata",
    desc: "Arrivi in cantiere e trovi già tutto predisposto: ti concentri solo sul macchinario.",
  },
  {
    icon: Zap,
    title: "Entra e lavora subito",
    desc: "Zero perdite di tempo: trovi tutto organizzato e passi direttamente alla verifica.",
  },
  {
    icon: Wifi,
    title: "Funziona ovunque",
    desc: "Anche in cantiere: il PDF viene generato localmente sul tuo dispositivo.",
  },
];

const planFeatures = [
  "Accesso completo",
  "Salvataggio sul tuo dispositivo",
  "PDF illimitati",
  "Template costruttore / cliente",
  "Supporto bilingue IT / EN / DE / ES",
  "Aggiornamenti inclusi",
];

const faq = [
  {
    q: "Cos'è un FAT?",
    a: "Il FAT (Factory Acceptance Test) è il collaudo di accettazione in fabbrica: la verifica che un macchinario o impianto rispetti i requisiti concordati prima della spedizione al cliente. MiniFAT ti aiuta a documentarlo in modo professionale.",
  },
  {
    q: "MiniFAT funziona offline?",
    a: "Sì. MiniFAT genera la documentazione e il PDF direttamente sul tuo dispositivo, quindi puoi lavorare anche in cantiere senza connessione. Il salvataggio nel cloud è opzionale.",
  },
  {
    q: "Posso esportare PDF bilingue?",
    a: "Sì. MiniFAT supporta IT, EN, DE ed ES: copertina, indice e pagine documentali vengono generati nella lingua scelta.",
  },
  {
    q: "I dati sono salvati sul mio dispositivo?",
    a: "Sì. I PDF vengono generati localmente e i tuoi dati restano sul dispositivo. Nessun invio a server esterni.",
  },
  {
    q: "Posso modificare un FAT già creato?",
    a: "Sì. Puoi riprendere un FAT salvato, aggiornare dati e documenti e rigenerare il PDF in qualsiasi momento.",
  },
  {
    q: "Posso aggiungere documenti personalizzati?",
    a: "Sì. Oltre a certificati, dichiarazioni e allegati standard puoi inserire documenti personalizzati nel dossier.",
  },
];

function MiniFatPage() {
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
                <FileCheck2 className="h-4 w-4 text-primary" aria-hidden /> MiniFAT · Factory Acceptance Test
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Il modo più semplice per creare{" "}
                <span className="text-primary">dossier FAT professionali</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto lg:mx-0">
                MiniFAT genera automaticamente copertina, indice, pagine documentali e PDF
                bilingue direttamente dal tuo dispositivo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="h-12 px-7 text-base">
                  Attiva MiniFAT – 19€/mese
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-7 text-base border-2 border-primary/40"
                >
                  <PlayCircle className="h-5 w-5" aria-hidden /> Prova la Demo
                </Button>
              </div>
              <p className="mt-4 text-sm text-foreground/65">
                PDF generato localmente · Nessun invio dati a server esterni
              </p>
            </div>
            <img
              src={heroImg}
              alt="App MiniFAT su tablet e smartphone con un dossier FAT professionale"
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              width={1280}
              height={896}
            />
          </div>
        </section>

        {/* COSA FA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Cosa fa MiniFAT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Tutto il dossier FAT in un'unica app
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
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Come funziona
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Il tuo FAT in 4 step</h2>
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

        {/* SCREENSHOT */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Dentro l'app
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Semplice, chiara, professionale</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {screenshots.map(({ img, caption }, i) => (
                <figure key={caption} className="text-center">
                  <div className="rounded-2xl border-2 border-primary/15 bg-secondary overflow-hidden shadow-[var(--shadow-card)]">
                    <img
                      src={img}
                      alt={`MiniFAT — ${caption}`}
                      className="w-full h-full object-cover"
                      width={768}
                      height={1024}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-foreground/70">
                    <sup className="text-[0.65rem] font-bold text-primary mr-0.5">
                      {i + 1}
                    </sup>
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* IL METODO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Il metodo MiniFAT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Prepara il FAT con un passo avanti
              </h2>
            </div>

            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
              <p>
                MiniFAT ti permette di preparare il dossier FAT in anticipo, con una
                struttura chiara e professionale. Lo compili, lo generi e lo invii al
                costruttore con tutti i capitoli già predisposti. Lui inserisce i suoi
                documenti direttamente dietro ai tuoi, seguendo la struttura che hai
                definito.
              </p>
              <p>
                Qualche giorno prima del FAT ti rimanda tutto completo: tu puoi verificare
                con calma, chiedere integrazioni, chiarire eventuali punti critici. Quando
                arrivi in cantiere, non devi più aspettare nulla: trovi già tutto pronto.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {[
                {
                  title: "Ottimizza la tua giornata",
                  desc: "Arriverai in cantiere e troverai già tutto predisposto, così potrai concentrarti solo sul macchinario.",
                },
                {
                  title: "Riduci le attese inutili",
                  desc: "I documenti saranno pronti al tuo arrivo e tu potrai dedicarti subito alla parte tecnica.",
                },
                {
                  title: "Entra e lavora subito",
                  desc: "Zero perdite di tempo: trovi tutto organizzato e puoi passare direttamente alla verifica del macchinario.",
                },
              ].map(({ title, desc }) => (
                <Card key={title} className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed mt-12">
              <p>
                MiniFAT elimina la confusione, i PDF disordinati, i documenti mancanti e le
                corse dell'ultimo minuto. Ti permette di arrivare al FAT con un dossier
                completo, verificato e già approvato nelle parti burocratiche.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {[
                {
                  title: "Massimizza ogni minuto",
                  desc: "La burocrazia è già sistemata, tu ti concentri solo sulla visione e sul controllo operativo.",
                },
                {
                  title: "Arrivi e inizi a fare sul serio",
                  desc: "Documenti pronti, procedure già allineate: resta solo da valutare il macchinario.",
                },
                {
                  title: "Lavora con un passo avanti",
                  desc: "Tutto predisposto in anticipo, così puoi dedicarti subito alla parte che conta davvero.",
                },
              ].map(({ title, desc }) => (
                <Card key={title} className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border-2 border-primary/30 [background:var(--gradient-section-corsi)] p-8 text-center">
              <p className="text-xl md:text-2xl font-bold">
                MiniFAT non è solo un'app:
              </p>
              <p className="mt-2 text-lg text-foreground/85">
                è un nuovo modo di gestire il FAT, più rapido, più pulito, più professionale.
              </p>
            </div>
          </div>
        </section>


        {/* PERCHE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Perché MiniFAT è indispensabile
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Arrivi e inizi a fare sul serio
              </h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
                Documenti pronti, procedure allineate: resta solo da valutare il macchinario.
              </p>
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

        {/* PREZZI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-md">
            <div className="text-center mb-10">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Prezzi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Un unico piano, tutto incluso</h2>
            </div>
            <Card className="border-2 border-primary/30 shadow-[var(--shadow-elegant)] overflow-hidden">
              <div className="[background:var(--gradient-hero)] text-primary-foreground text-center py-7 px-6">
                <p className="text-lg font-semibold">MiniFAT</p>
                <p className="mt-1">
                  <span className="text-5xl font-extrabold">19€</span>
                  <span className="text-lg font-medium">/mese</span>
                </p>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black border-2 border-black">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="text-foreground/85 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="lg" className="w-full h-12 mt-7 text-base">
                  Attiva ora <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                </Button>
                <p className="mt-3 text-center text-xs text-foreground/60">
                  Pagamento sicuro tramite Paddle
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
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
              Pronto a creare il tuo prossimo dossier FAT?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              PDF generato localmente, nessun invio dati a server esterni.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="h-12 px-7 text-base bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-black"
              >
                Attiva MiniFAT – 19€/mese
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-base border-2 border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <PlayCircle className="h-5 w-5" aria-hidden /> Prova la Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
