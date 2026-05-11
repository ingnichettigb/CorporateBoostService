## Obiettivo
Trasformare il sito attuale in **CorporateBoostService.IT**, multilingua (Italiano + Inglese), con palette di azzurri a sfumature diverse per sezione, alto contrasto e accessibilità per ipovedenti, motto "FACCIO TUTTO IO", e contatti completi in footer.

## 1. Rebranding
- Nome: **CorporateBoostService.IT**
- Tagline / motto: **"FACCIO TUTTO IO"** (visibile sotto al logo nell'header e nel hero)
- Logo testuale con badge azzurro (sostituisce "Studio Digitale")
- Aggiornamento metadata SEO (title, description, og:*) in IT e EN

## 2. Multilingua (i18n)
- Libreria: **i18next + react-i18next** (leggera, ottima con TanStack, SSR-friendly)
- Lingue: `it` (default) e `en`
- Struttura traduzioni: `src/i18n/locales/it.json` e `en.json` con namespace per sezione (nav, hero, corsi, applicazioni, chiSono, contatti, footer)
- **Switcher lingua** nell'header: due pulsanti `IT | EN` con flag/codice, accessibili da tastiera, `aria-pressed`
- Persistenza scelta in `localStorage`
- Attributo `lang` su `<html>` aggiornato dinamicamente
- URL: la lingua resta come stato (no routing per lingua, per non duplicare le route — più semplice e adatto al progetto)

## 3. Palette azzurri & alto contrasto
Ridefinizione tokens in `src/styles.css` (oklch) con scale azzurre diverse per sezione:

```text
--blue-50   azzurro chiarissimo  → sfondo hero
--blue-100  azzurro chiaro       → sfondo sezione corsi
--blue-200  azzurro medio        → sezione applicazioni
--blue-700  blu intenso          → sezione "Chi Sono"
--blue-900  blu profondo         → footer / CTA
```

- **Contrasto WCAG AAA** (≥ 7:1) tra testo e sfondo in ogni sezione
- Foreground: bianco puro su sfondi scuri, blu-900 su sfondi chiari
- Bordi e focus ring rafforzati (3px, outline blu acceso)

## 4. Accessibilità per ipovedenti
- **Font base 18px** (anziché 16px), titoli scalati di conseguenza
- Famiglia font: system-ui / Inter con `font-weight` ≥ 500 per il body
- **Toggle "Testo grande"** nell'header (aumenta font-size root a 22px) — preferenza salvata
- **Toggle "Alto contrasto"** (palette bianco/nero/giallo opzionale)
- Tutti i link e bottoni con `:focus-visible` molto evidente (outline 3px giallo)
- Aree cliccabili minime 44×44px
- `alt` text e `aria-label` su icone, skip-link "Vai al contenuto"
- Heading hierarchy corretta (un solo H1 per pagina)

## 5. Layout sezioni (zone con sfumature diverse)
Ogni sezione ha la propria sfumatura azzurra distinta:

```text
Header           → bianco / blu-900 testo
Hero             → gradient blue-50 → blue-100, titolo blue-900
Servizi/Corsi    → blue-100 solid, card bianche con bordo blue-700
Applicazioni     → gradient blue-200 → blue-300, card bianche
Chi Sono         → blue-700 sfondo, testo bianco
Contatti         → gradient blue-100 → bianco
Footer           → blue-900 sfondo, testo bianco
```

## 6. Footer — dati di contatto
Aggiornamento di `SiteFooter.tsx` con:
- **Dott. Ing. Nichetti Gian Battista**
- Soresina (CR), Italia
- Tel: **339 634 4660** (link `tel:`)
- P.IVA: **IT 01235350194**
- Motto "FACCIO TUTTO IO"
- Link rapidi tradotti (Home, Corsi, Applicazioni, Contatti)
- Selettore lingua duplicato

## 7. File da creare / modificare
**Nuovi:**
- `src/i18n/index.ts` — config i18next
- `src/i18n/locales/it.json`
- `src/i18n/locales/en.json`
- `src/components/LanguageSwitcher.tsx`
- `src/components/AccessibilityToggles.tsx` (font grande + alto contrasto)
- `src/hooks/useA11ySettings.ts`

**Modificati:**
- `src/styles.css` — nuova scala azzurri, font-size base, classi `.a11y-large` / `.a11y-contrast`
- `src/routes/__root.tsx` — provider i18n, attributo `lang`, skip-link
- `src/routes/index.tsx` — testi via `t()`, sfumature per sezione
- `src/routes/corsi.tsx`, `src/routes/applicazioni.tsx` — traduzioni
- `src/components/SiteHeader.tsx` — switcher lingua + toggles a11y + tagline
- `src/components/SiteFooter.tsx` — nuovi contatti completi
- `src/components/ContactSection.tsx` — testi tradotti, telefono cliccabile
- `src/data/site.ts` — chiavi i18n al posto di stringhe italiane

## 8. Dipendenze da installare
- `i18next`
- `react-i18next`
- `i18next-browser-languagedetector`

## Domande aperte
Procedo con queste assunzioni salvo diverse indicazioni:
- Email contatti rimane `supporto@tuodominio.com` → vuoi un'email reale?
- Lingua iniziale = italiano, rilevamento browser per primo accesso
- Niente route separate `/en/...` (stato lingua client-side)
