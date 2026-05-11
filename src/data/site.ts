import { ShieldCheck, FileLock, HardHat, Newspaper, FileSpreadsheet, ClipboardList, GraduationCap, Building2, Calendar, BarChart3 } from "lucide-react";

export const corsi = [
  { icon: FileLock, key: "privacy" },
  { icon: ShieldCheck, key: "gdpr" },
  { icon: HardHat, key: "sicurezza" },
  { icon: Newspaper, key: "news" },
] as const;

export const applicazioni = [
  { icon: ClipboardList, key: "adempimenti" },
  { icon: FileSpreadsheet, key: "registro" },
  { icon: GraduationCap, key: "formazione" },
  { icon: Building2, key: "audit" },
  { icon: Calendar, key: "agenda" },
  { icon: BarChart3, key: "kpi" },
] as const;
