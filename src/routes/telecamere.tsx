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
  Video,
  CheckCircle2,
  FileText,
  ClipboardList,
  ShieldCheck,
  Gauge,
  BookOpen,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChecklistCTAs } from "@/components/ChecklistCTAs";
import heroImg from "@/assets/telecamere/hero.jpg";
import denunciaImg from "@/assets/telecamere/denuncia.jpg";
import regolamentoImg from "@/assets/telecamere/regolamento.jpg";
import gdprImg from "@/assets/telecamere/gdpr.jpg";

export const Route = createFileRoute("/telecamere")({
  head: () => ({
    meta: [
      { title: "Privacy Telecamere e Videosorveglianza — Privacy 1996" },
      {
        name: "description",
        content:
          "Assistenza completa per impianti di videosorveglianza: denuncia impianto, regolamento interno, consulenza GDPR, informative e cartelli a norma. Ci penso io a tutto.",
      },
    ],
  }),
  component: TelecamerePage,
});

const servizi = [
  {
    icon: FileText,
    title: "Denuncia Impianto",
    desc: "Pensiamo noi alla burocrazia per il tuo impianto di videosorveglianza. Zero pensieri per te.",
  },
  {
    icon: ClipboardList,
    title: "Regolamento Interno",
    desc: "Creiamo un regolamento su misura che rispetti ogni norma sulla privacy. Semplice e chiaro.",
  },
  {
    icon: ShieldCheck,
    title: "Consulenza GDPR",
    desc: "Navighiamo insieme le complessità del GDPR per le tue telecamere. Conformità garantita.",
  },
];

const motivi = [
  {
    icon: BookOpen,
    title: "Esperienza",
    desc: "Conosco le leggi sulla privacy e la videosorveglianza come le mie tasche. Affidati a chi sa cosa fare.",
  },
  {
    icon: ShieldCheck,
    title: "Tranquillità",
    desc: "Dormi sonni tranquilli sapendo che il tuo impianto è a norma e non ti esporrà a rischi inutili.",
  },
  {
    icon: Gauge,
    title: "Risparmio",
    desc: "Evita multe salate e costi legali imprevisti. La conformità oggi è un investimento intelligente.",
  },
  {
    icon: Lightbulb,
    title: "Chiarezza",
    desc: "Ti spiego tutto in modo semplice e diretto, senza tecnicismi inutili. Capirai ogni passaggio.",
  },
  {
    icon: Clock,
    title: "Velocità",
    desc: "Agisco rapidamente per mettere il tuo impianto in regola, perché il tempo è denaro e la tranquillità non ha prezzo.",
  },
];

const testimonianze = [
  {
    text: "Marco ha reso la conformità GDPR un gioco da ragazzi! Servizio impeccabile e veloce. Consigliatissimo!",
    author: "Luca Bianchi, Proprietario Ristorante 'La Buona Forchetta'",
  },
  {
    text: "Finalmente un professionista che capisce le nostre esigenze. La denuncia dell'impianto è stata gestita alla perfezione.",
    author: "Anna Verdi, Amministratore Condominio 'Residenza Sole'",
  },
  {
    text: "Servizio completo e professionale. Le informative e i cartelli sono chiari e conformi. Ottimo lavoro!",
    author: "Giovanni Neri, Titolare Palestra 'Fitness Mania'",
  },
];

const faq = [
  {
    q: "Cosa include la denuncia dell'impianto?",
    a: "Mi occupo di tutta la trafila burocratica per denunciare il tuo impianto di videosorveglianza alle autorità competenti, liberandoti da scartoffie e procedure noiose.",
  },
  {
    q: "Quanto tempo ci vuole per essere in regola?",
    a: "I tempi variano a seconda della complessità del tuo impianto e della velocità della burocrazia, ma il mio obiettivo è sempre quello di accelerare il processo il più possibile.",
  },
  {
    q: "Offri consulenza anche per GDPR?",
    a: "Assolutamente sì! Il GDPR è il cuore della privacy moderna. Ti guido passo dopo passo per capire come applicarlo al tuo specifico caso di videosorveglianza.",
  },
  {
    q: "I cartelli informativi sono davvero necessari?",
    a: "Sono un obbligo di legge e un segnale di trasparenza verso chiunque acceda alle aree videosorvegliate. Ti fornisco quelli giusti, chiari e conformi.",
  },
  {
    q: "Cosa succede se non sono in regola?",
    a: "Le conseguenze possono essere pesanti: multe salate, richieste di risarcimento danni e un danno d'immagine difficile da riparare. Meglio prevenire che curare, no?",
  },
  {
    q: "È indispensabile la presenza fisica sul posto?",
    a: "Non è strettamente necessaria, ma la tua presenza può aiutare a chiarire dubbi specifici sulla tua situazione. Possiamo anche fare tutto online.",
  },
  {
    q: "Quali problemi può causare un impianto senza documentazione privacy?",
    a: "Sanzioni amministrative e penali, contestazioni legali e obbligo di rimozione. Senza regolamento e denuncia l'impianto risulta irregolare. Mi occupo io di tutto: denuncia, documenti, conformità GDPR.",
  },
];

function TelecamerePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
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
              <Video className="h-4 w-4 text-primary" aria-hidden /> Privacy &amp; Videosorveglianza
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Videocamere a norma, <span className="text-primary">senza stress</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              La tua privacy è la mia missione. Ci penso a tutto io: non trasformare uno
              strumento utile in fonte di problemi.
            </p>
            <p className="mt-3 text-base text-foreground/75 max-w-2xl mx-auto font-semibold">
              Verifica gratuitamente se devi fare qualcosa per le tue telecamere.
            </p>
            <ChecklistCTAs />
            <div className="mt-6">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <a href="#contatti">Richiedi un preventivo</a>
              </Button>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <img
                src={heroImg}
                alt="Telecamere di videosorveglianza a norma di legge"
                className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>


        {/* DENUNCIA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Ci penso io
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Denuncia Impianto: Fatto!</h2>
              <div className="mt-5 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>
                  Hai installato delle telecamere e ora ti chiedi come fare per la denuncia?
                  Tranquillo, ci penso io! La denuncia dell'impianto di videosorveglianza è
                  un passaggio obbligatorio per essere in regola con la legge. Non lasciare
                  che la burocrazia ti fermi.
                </p>
                <p>
                  Mi occupo di tutto il processo, dalla raccolta dei dati alla presentazione
                  della documentazione necessaria. Il mio obiettivo è rendere questo compito
                  il più semplice e veloce possibile per te, liberandoti da ogni
                  preoccupazione.
                </p>
                <p>
                  Con la mia assistenza, avrai la certezza che il tuo impianto sia
                  correttamente registrato e conforme alle normative vigenti. Un piccolo
                  passo per te, un grande passo per la tua tranquillità.
                </p>
              </div>
            </div>
            <img
              src={denunciaImg}
              alt="Documentazione e denuncia impianto di videosorveglianza"
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              loading="lazy"
            />
          </div>
        </section>


        {/* SERVIZI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                I miei servizi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Tutto quello che ti serve</h2>
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
            <div className="mt-10">
              <ChecklistCTAs />
            </div>
          </div>
        </section>

        {/* REGOLAMENTO INTERNO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <img
              src={regolamentoImg}
              alt="Regolamento interno per la videosorveglianza"
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg order-last md:order-first"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                La tua guida
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Regolamento Interno</h2>
              <div className="mt-5 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>
                  Creare un regolamento interno per la videosorveglianza non è un optional, è
                  un obbligo. Ti aiuto a redigere un documento chiaro e completo che
                  definisca le regole d'uso, le finalità e le modalità di gestione del tuo
                  impianto, mettendo tutti al riparo da sorprese.
                </p>
                <p>
                  Questo documento è fondamentale per dimostrare la tua attenzione alla
                  privacy e per gestire correttamente i dati raccolti dalle telecamere.
                  Senza di esso, rischi sanzioni salate e mal di testa legali.
                </p>
                <p>
                  Pensa a me come al tuo architetto della conformità: costruiamo insieme le
                  fondamenta legali del tuo sistema di sorveglianza, un articolo alla volta.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* MOTIVI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Perché scegliermi</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {motivi.map(({ icon: Icon, title, desc }) => (
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
                Scopri subito se le tue telecamere sono a norma — gratis e senza impegno
              </p>
              <ChecklistCTAs variant="dark" />
            </div>
          </div>
        </section>

        {/* TESTIMONIANZE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Clienti soddisfatti</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonianze.map((t) => (
                <Card key={t.author} className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground/85 italic">"{t.text}"</p>
                    <p className="mt-4 text-sm font-semibold text-primary">— {t.author}</p>
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
                Mettiamo in regola il tuo impianto di videosorveglianza. Ci penso io a tutto.
              </p>
              <ChecklistCTAs />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">Telefono</p>
                  <a href="tel:+393396344660" className="text-foreground/80 hover:text-primary">
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
                    Via Foscolo, 28<br />26015 Soresina (CR)<br />PI 01235350194
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
