import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  return (
    <section id="contatti" className="py-24 [background:var(--gradient-subtle)] border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">Contatti</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Richiedi informazioni</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Hai una domanda su un corso o un progetto? Scrivimi: rispondo entro 24 ore.
          </p>
          <a href="mailto:supporto@tuodominio.com" className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline">
            <Mail className="h-4 w-4" /> supporto@tuodominio.com
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Richiesta inviata. Ti risponderò a breve.");
            (e.target as HTMLFormElement).reset();
          }}
          className="grid gap-5 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)]"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome e cognome</Label>
              <Input id="name" required placeholder="Mario Rossi" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="email@azienda.it" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Oggetto</Label>
            <Input id="subject" placeholder="Es. Corso GDPR per la mia azienda" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Messaggio</Label>
            <Textarea id="message" required rows={5} placeholder="Descrivi brevemente la tua richiesta…" />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="hero" size="lg" className="h-12 px-8">
              Richiedi informazioni <Send className="ml-1" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
