import { ShieldCheck, FileLock, HardHat, Newspaper, Wrench, Factory, ClipboardCheck, BookOpen } from "lucide-react";
import smartMaintenanceLogo from "@/assets/smart-maintenance.png";

export const corsi = [
  { icon: FileLock, key: "privacy" },
  { icon: ShieldCheck, key: "gdpr" },
  { icon: HardHat, key: "sicurezza" },
  { icon: Newspaper, key: "news" },
] as const;

export const applicazioni = [
  { icon: Wrench, key: "smartMaintenance", image: smartMaintenanceLogo, wip: false },
  { icon: Factory, key: "fat", wip: true },
  { icon: ClipboardCheck, key: "sat", wip: true },
  { icon: BookOpen, key: "lp", wip: true },
] as const;
