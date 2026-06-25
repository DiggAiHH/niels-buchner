# Finanzteam – Unternehmerkredite · Landingpage

Erste echte Landingpage für **Niels Buchner / Finanzteam – Unternehmerkredite** –
Vermittlung von **Betriebsmittel- und Unternehmerkrediten** für Selbstständige & kleine Betriebe.

**Werte:** Persönlich. Diskret. Zuverlässig. · **Claim:** „Ihre Finanzierung. Unsere Mission."

## Stack
Bewusst **kein Framework** – handgebautes, schnelles Static-Site-Setup für volle Design-Kontrolle
und eine Premium-, nicht-„KI"-Anmutung.

- `index.html` — Landingpage (Hero, Branchen, Ablauf, Warum, Über, Kontakt)
- `styles.css` — Design-System (Creme / Navy / Kupfer, Fraunces + Inter)
- `app.js` — Scroll-Reveal, Mobile-Menü, Formular→E-Mail (mailto), vCard-Download
- `favicon.svg` — Logo-Emblem
- `impressum.html`, `datenschutz.html` — **Platzhalter, vor Live-Gang ausfüllen (Pflicht)**
- `vercel.json` — Clean URLs + Security-Header
- `docs/` — Strategie:
  - `01-methodik-und-funnel.md` — Methodik & gesamter Flow (Kontakt → … → Nachbetreuung)
  - `02-deep-research-prompts.md` — 4 Deep-Research-Prompts (Copilot, Kimi, Gemini, ChatGPT)
  - `03-recherche-finanzteam-niels-buchner.md` — eigene Web-Recherche + Quellen
- `assets/reference/` — Original-Visitenkarten (Quelle der Marke)

## Lokal ansehen
```bash
npx serve .       # oder: python -m http.server 5173
```

## Deploy (Vercel)
```bash
vercel --prod
```
Ziel-URL: **niels-buchner.vercel.app** (möglichst nur der Name, wenig Generisches).

## Wichtige To-dos vor dem echten Live-Gang
1. **Impressum & Datenschutz** rechtssicher ausfüllen (Pflicht).
2. **Erlaubnisstatus** klären (§ 34c GewO / ab 20.11.2026 § 34k GewO) und auf der Seite angeben.
3. Alle Claims final mit Niels bestätigen (keine erfundenen Zahlen/Testimonials enthalten).
4. Optional: eigene Domain (z. B. die bestehende `.com`) auf Vercel zeigen lassen.
5. Optional: Formular an echten Endpoint (Formspree/eigenes Backend) statt `mailto` hängen.

> Rechtliche Hinweise in `docs/` sind Recherchestand, **keine Rechtsberatung**.
