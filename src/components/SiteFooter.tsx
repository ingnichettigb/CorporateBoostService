import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 bg-secondary/40">
      <div className="container mx-auto px-6 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground mb-2">Studio Digitale</p>
          <p>Formazione e soluzioni digitali per imprese e professionisti.</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link to="/corsi" className="hover:text-foreground">Corsi Online</Link>
          <Link to="/applicazioni" className="hover:text-foreground">Applicazioni per Imprese</Link>
          <a href="mailto:supporto@tuodominio.com" className="hover:text-foreground">supporto@tuodominio.com</a>
        </div>
        <p className="md:text-right">© {new Date().getFullYear()} — Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
