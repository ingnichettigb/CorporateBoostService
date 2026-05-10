import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="h-8 w-8 rounded-lg [background:var(--gradient-hero)] flex items-center justify-center">
            <ShieldCheck className="h-4 w-4 text-primary-foreground" />
          </span>
          <span>Studio Digitale</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground font-medium" }}>Home</Link>
          <Link to="/corsi" className="text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>Corsi</Link>
          <Link to="/applicazioni" className="text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>Applicazioni</Link>
        </div>
        <Button variant="hero" size="sm" asChild>
          <Link to="/" hash="contatti">Contattami</Link>
        </Button>
      </nav>
    </header>
  );
}
