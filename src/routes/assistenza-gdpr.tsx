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
  ShieldCheck,
  CheckCircle2,
  FileText,
  Users,
  ClipboardList,
  GraduationCap,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  Clock,
  ClipboardCheck,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const FORM_AUTOVALUTAZIONE =
  "https://docs.google.com/forms/d/e/1FAIpQLSflM2xH_wCxKb51Ne_95sabvKBGaS9UgcEMMYYrf_AXvR9EtQ/viewform";
const FORM_VERIFICA =
  "https://docs.google.com/forms/d/e/1FAIpQLSdeVt3RDMdj-pD8ADGGV6SujATj-7T_TD2Gs7DP-OmKIJ2HDQ/viewform";

function ChecklistCTAs({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
      <a
        href={FORM_AUTOVALUTAZIONE}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 rounded-full border-2 px-5 py-4 font-bold shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all ${
          isDark
            ? "bg-white/10 border-white/40 text-white hover:bg-white/15"
            : "bg-white border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        <ClipboardCheck className="h-5 w-5 shrink-0" aria-hidden />
        <span className="flex-1 text-sm md:text-base leading-tight">
          Autovalutazione Privacy 1996 — Gratis, in 9 domande
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
      <a
        href={FORM_VERIFICA}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 rounded-full border-2 px-5 py-4 font-bold shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all ${
          isDark
            ? "bg-white/10 border-white/40 text-white hover:bg-white/15"
            : "bg-white border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        <FileCheck2 className="h-5 w-5 shrink-0" aria-hidden />
        <span className="flex-1 text-sm md:text-base leading-tight">
          Verifica la tua conformità GDPR — Gratis, in 10 domande
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
    </div>
  );
}
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/assistenza-gdpr")({
  head: () => ({
    meta: [
      { title: "Assistenza GDPR — Privacy 1996 | Regolamento UE 2016/679" },
      {
        name: "description",
        content:
          "Assistenza tecnica completa per GDPR e Regolamento UE 2016/679: PIA, informative, nomine, procedure, sicurezza, formazione e revisione annuale inclusa.",
      },
    ],
  }),
  component: AssistenzaGdprPage,
});

const servizi = [
  {
    icon: FileText,
    title: "Documentazione",
    desc: "Redazione di PIA, informative, nomine e procedure complete e personalizzate per la tua attività.",
  },
  {
    icon: ClipboardList,
    title: "Analisi dei rischi",
    desc: "Valutazione approfondita dei trattamenti, finalità, misure di sicurezza e modalità di ripristino dei dati.",
  },
  {
    icon: GraduationCap,
    title: "Formazione",
    desc: "Corso incluso da svolgere presso la tua sede al momento della consegna dei documenti.",
  },
  {
    icon: RefreshCw,
    title: "Revisione annuale",
    desc: "Aggiornamento ogni anno di documenti e procedure per mantenere la conformità alle normative.",
  },
  {
    icon: Users,
    title: "Nomine e responsabilità",
    desc: "Gestione delle figure privacy, nomine di responsabili interni, esterni e professionisti.",
  },
  {
    icon: ShieldCheck,
    title: "Misure di sicurezza",
    desc: "Cifratura, separazione dei dati identificativi e definizione delle misure tecniche e organizzative.",
  },
];

const piaPoints = [
  "Elenco dei trattamenti di dati",
  "Informazioni essenziali relative ai trattamenti",
  "Competenze e responsabilità delle strutture esterne",
  "Analisi dei rischi che incombono sui dati",
  "Finalità dei trattamenti",
  "Misure in essere e da adottare",
  "Misure di sicurezza",
  "Modalità per il ripristino della disponibilità dei dati",
  "Formazione del personale",
  "Trattamenti affidati all'esterno",
  "Cifratura o separazione dei dati identificativi",
  "Categorie di interessati, dati e destinatari (art. 30 c.1 Reg. UE 2016/679)",
  "Definizioni e organigramma",
  "Check List annuale",
];

const testimonianze = [
  {
    text: "Servizio impeccabile! La mia azienda è ora pienamente conforme al GDPR. Hanno fatto tutto loro!",
    author: "Marco Rossi, CEO di TechSolutions",
  },
  {
    text: "Finalmente un partner affidabile per la privacy. Chiaro, veloce ed economico.",
    author: "Giulia Bianchi, Titolare di Studio Medico",
  },
  {
    text: "La formazione sulla privacy è stata chiarissima e utile. Consigliatissimo!",
    author: "Luca Verdi, Responsabile IT di Logistica Rapida",
  },
  {
    text: "Supporto costante e professionale. La revisione annuale è un valore aggiunto.",
    author: "Andrea Gialli, titolare ditta di Autotrasporti",
  },
  {
    text: "Hanno reso la complessità del GDPR accessibile e gestibile. Ottimo lavoro!",
    author: "Sara Neri, Amministratore di Edilizia Moderna",
  },
  {
    text: "La semplicità e l'efficacia dei loro servizi mi hanno stupito. Un vero risparmio di tempo.",
    author: "Elena Bruno, Ristorante La Buona Tavola",
  },
];

const faq = [
  {
    q: "Cosa copre il servizio base?",
    a: "Il piano base include un'analisi iniziale della tua situazione GDPR, la stesura della documentazione essenziale e una guida per la conformità.",
  },
  {
    q: "È inclusa la formazione?",
    a: "La formazione è inclusa nei piani Pro e Premium, con sessioni personalizzate per il tuo team. È possibile aggiungerla anche al piano Base.",
  },
  {
    q: "Cosa significa revisione annuale?",
    a: "Ogni anno verifichiamo la tua conformità GDPR e aggiorniamo la documentazione per adeguarla a nuove normative o cambiamenti nella tua attività, evitando sanzioni.",
  },
  {
    q: "È vero che fate tutto voi?",
    a: "Assolutamente sì. Il processo prevede un'intervista dettagliata per valutare la realtà aziendale e raccogliere gli elementi indispensabili alla redazione del GDPR in linea con la normativa vigente.",
  },
  {
    q: "Quanto tempo ci vuole per essere conformi?",
    a: "I tempi variano in base alla complessità della tua attività. Generalmente, con il nostro supporto, la conformità iniziale si raggiunge in poche settimane.",
  },
];

function AssistenzaGdprPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        {/* Back link */}
        <div className="container mx-auto px-4 max-w-5xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> Torna alla home
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> Privacy
              dal 1996
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Assistenza <span className="text-primary">GDPR</span> completa
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              La tua privacy: semplice, veloce ed economica. Assistenza tecnica
              completa per GDPR e Regolamento UE 2016/679 — pensiamo a tutto noi.
            </p>
            <p className="mt-3 text-base text-foreground/75 max-w-2xl mx-auto">
              Consolidata esperienza nella Privacy: attivi sin dal 1996, quando
              tutto è cominciato.
            </p>
            <ChecklistCTAs />
            <div className="mt-6">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <a href="#contatti">Richiedi un preventivo</a>
              </Button>
            </div>
          </div>
        </section>

        {/* SERVIZI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Cosa faccio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Proteggi i tuoi dati ora
              </h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
                Gestione completa della tua privacy e del GDPR, con revisioni
                annuali personalizzate.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servizi.map(({ icon: Icon, title, desc }) => (
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

        {/* PIA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Ci penso io, tu rilassati
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                PIA — Privacy Impact Assessment
              </h2>
              <p className="mt-3 text-foreground/80">
                Ogni elemento richiesto dal Regolamento UE 2016/679, gestito per
                te.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {piaPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-lg border-2 border-primary/15 bg-card"
                >
                  <CheckCircle2
                    className="h-5 w-5 text-primary mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 rounded-xl bg-primary/5 border-2 border-primary/20">
              <p className="font-semibold mb-2">Inoltre, ogni anno:</p>
              <ul className="space-y-2 text-foreground/85">
                <li>
                  • <strong>Informative</strong> per clienti, fornitori,
                  professionisti (email, fax, ecc.) — revisione annuale
                </li>
                <li>
                  • <strong>Nomine</strong> (figure privacy e professionisti) —
                  revisione annuale
                </li>
                <li>
                  • <strong>Procedure</strong> (trattamento dati elettronici,
                  cartacei, salvataggi) — revisione annuale
                </li>
                <li>
                  • <strong>Corso di formazione</strong> incluso, da svolgere
                  alla consegna dei documenti presso la tua sede
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-5xl grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold">99%</div>
              <p className="mt-2 text-white/90">Conformità garantita</p>
            </div>
            <div>
              <div className="text-5xl font-bold">100%</div>
              <p className="mt-2 text-white/90">Clienti soddisfatti</p>
            </div>
            <div>
              <div className="text-5xl font-bold">24/7</div>
              <p className="mt-2 text-white/90">Supporto dedicato</p>
            </div>
            <div className="sm:col-span-3 mt-6">
              <p className="text-white/95 text-lg font-semibold mb-2">
                Scopri subito il tuo livello di conformità — gratis e senza impegno
              </p>
              <ChecklistCTAs variant="dark" />
            </div>
          </div>
        </section>

        {/* TESTIMONIANZE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Cosa dicono i clienti
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonianze.map((t) => (
                <Card key={t.author} className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground/85 italic">"{t.text}"</p>
                    <p className="mt-4 text-sm font-semibold text-primary">
                      — {t.author}
                    </p>
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
                  <AccordionContent className="text-foreground/80">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CONTATTI */}
        <section
          id="contatti"
          className="py-20 [background:var(--gradient-section-app)] border-t-2 border-primary/20 scroll-mt-24"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Contattami</h2>
              <p className="mt-3 text-foreground/80">
                Il mancato aggiornamento non è un'opzione, è una violazione di
                legge. Lo faccio io per te.
              </p>
              <ChecklistCTAs />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">Telefono</p>
                  <a
                    href="tel:+393396344660"
                    className="text-foreground/80 hover:text-primary"
                  >
                    +39 339 63 44 660
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">Email</p>
                  <a
                    href="mailto:nichettiprivacy@gmail.com"
                    className="text-foreground/80 hover:text-primary break-all"
                  >
                    nichettiprivacy@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">Sede</p>
                  <p className="text-foreground/80 text-sm">
                    Via Foscolo, 28
                    <br />
                    26015 Soresina (CR)
                    <br />
                    PI 01235350194
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">Orari</p>
                  <p className="text-foreground/80">9:00 — 18:00</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" /> Torna alla home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
