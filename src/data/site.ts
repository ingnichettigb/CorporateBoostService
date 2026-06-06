import { ShieldCheck, FileLock, HardHat, Newspaper, Wrench, Factory, ClipboardCheck, BookOpen, FlaskConical } from "lucide-react";
import smartMaintenanceLogo from "@/assets/apps/smartmaintenance.jpg.asset.json";
import pedflowLogo from "@/assets/apps/pedflow.png.asset.json";
import minifatLogo from "@/assets/apps/minifat.png.asset.json";

export const corsi = [
  { icon: FileLock, key: "privacy" },
  { icon: ShieldCheck, key: "gdpr" },
  { icon: HardHat, key: "sicurezza" },
  { icon: Newspaper, key: "news" },
] as const;

export const applicazioni = [
  { icon: FlaskConical, key: "pedFlow", image: pedflowLogo.url, wip: false },
  { icon: Wrench, key: "smartMaintenance", image: smartMaintenanceLogo.url, wip: false },
  { icon: ClipboardCheck, key: "miniFat", image: minifatLogo.url, wip: false },
  { icon: Factory, key: "fat", wip: true },
  { icon: ClipboardCheck, key: "sat", wip: true },
  { icon: BookOpen, key: "lp", wip: true },
] as const;
