import { ShieldCheck, FileLock, HardHat, Newspaper, FileSpreadsheet, Wrench, GraduationCap, Building2, Calendar, BarChart3 } from "lucide-react";
import smartMaintenanceLogo from "@/assets/smart-maintenance.png";

export const corsi = [
  { icon: FileLock, key: "privacy" },
  { icon: ShieldCheck, key: "gdpr" },
  { icon: HardHat, key: "sicurezza" },
  { icon: Newspaper, key: "news" },
] as const;

export const applicazioni = [
  { icon: Wrench, key: "smartMaintenance", image: smartMaintenanceLogo },
  { icon: FileSpreadsheet, key: "registro" },
  { icon: GraduationCap, key: "formazione" },
  { icon: Building2, key: "audit" },
  { icon: Calendar, key: "agenda" },
  { icon: BarChart3, key: "kpi" },
] as const;
