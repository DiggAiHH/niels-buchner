# Akquise- & Skalierungs-Playbook (Solo-Kreditvermittler)

> Quelle: **Gemini Deep Research** (Prompt ③), von Claude strukturiert & eingeordnet. Stand 25.06.2026.
> ⚠️ Alle rechtlichen/steuerlichen Punkte sind Recherchestand, **keine Rechtsberatung** – vor Umsetzung
> mit Anwalt / Steuerberater / IHK verifizieren.
> Dies ist Report 1 von 4 (Copilot, Kimi, ChatGPT folgen → werden danach konsolidiert).

---

## 0. Kernthese

Ein Solo-Vermittler gewinnt diesen fragmentierten Markt (Gastro, Handwerk, Beauty, E-Commerce,
Landwirtschaft, Dienstleister) durch **drei strukturelle Hebel**:
1. **Extreme Reaktionsgeschwindigkeit** (5-Minuten-Regel),
2. **maximale administrative Entlastung des Kunden** (Dokumente fast „nebenbei"),
3. **rechtssicheres Empfehlungs-/Multiplikatoren-Netzwerk**.

Banken bedienen Volumina < 50.000 € kaum sinnvoll; Fintechs (iwoca, FinCompare, Compeon) entscheiden in
24–48 h. Genau dazwischen sitzt Niels als **persönlicher Liquiditäts-Partner**.

---

## 1. Speed-to-Lead — der dominierende Conversion-Hebel

Empirie (MIT / Harvard Business Review):
- Reaktion **< 5 Min** → **100×** höhere Kontaktwahrscheinlichkeit und **21×** höhere
  Qualifizierungswahrscheinlichkeit vs. 30 Min.
- Nach 5 Min fällt die Lead-Qualität um **~80 %** („Cliff after 5 minutes").
- **78 %** schließen beim **Erst-Antwortenden** ab.
- Branchenschnitt B2B-Reaktionszeit: **42–47 h**; bis zu **58 %** der Leads werden **nie** kontaktiert.

→ **Wer systematisch < 5 Min antwortet, agiert fast konkurrenzlos.** Da ein Solo-Vermittler nicht 24/7
manuell erreichbar ist, übernimmt die **automatisierte WhatsApp-Sofortantwort (< 10 Sek.)** den ersten
Touch, der manuelle Rückruf folgt im 5-Min-Fenster.

---

## 2. Kanäle: Aufwand / Kosten / Payoff / Recht (UWG & DSGVO)

| Kanal | Aufwand | Kosten | Payoff | Rechtlicher Kern |
|---|---|---|---|---|
| **Lokales Netzwerk & Innungen** | Hoch | Mittel | **Sehr hoch** | Unbedenklich. Karte+QR = sauberes Opt-in. |
| **Telefon-Kaltakquise B2B** | Hoch | Gering | Mittel | Zulässig unter **mutmaßlicher Einwilligung** (§7 Abs.2 Nr.2 UWG), wenn sachlicher Geschäftsbezug. |
| **E-Mail-Kaltakquise** | Gering | Gering | **Sehr niedrig** | **Faktisch verboten** ohne Double-Opt-in (§7 Abs.2 Nr.3 UWG) → Abmahngefahr. |
| **WhatsApp Outreach (kalt)** | Gering | Gering | Sehr niedrig | **Verboten** (gilt als elektronische Post, Einwilligung nötig). |
| **WhatsApp Inbound (QR/Link)** | Mittel | Mittel | **Sehr hoch** | Nur über **WhatsApp Business API / BSP** (EU-Hosting, AVV). |
| **Google Business Profile** | Mittel | 0 € | Hoch | Unbedenklich. Local SEO für „Firmenkredit Gastronomie" etc. |
| **Tippgeber-Partner (POS/Händler)** | Mittel | Provision | **Sehr hoch** | Nur **Namhaftmachung**; Beratung = §34c/§34i GewO. Tippgebervertrag Pflicht. |
| **Meta Ads (Click-to-WhatsApp)** | Gering | Hoch (Ad Spend) | Hoch | Datenschutzkonformes Tracking; führt direkt in den API-Chat. |

**Merksatz:** Outbound-**Telefon** ist der einzige rechtssichere Kaltkanal. **E-Mail/WhatsApp kalt = Finger weg.**

---

## 3. ⚠️ DSGVO-Pflicht: WhatsApp NUR über Business API / BSP

Die normale **„WhatsApp Business App"** auf dem Firmenhandy ist **DSGVO-widrig**: synchronisiert das
gesamte Adressbuch in die USA (auch Nicht-Nutzer), kein AVV mit Meta möglich.

**Rechtssichere Architektur:** WhatsApp **Business API** über zertifizierten **BSP** (z. B. **Superchat**,
**Chatarmin**) → EU-Server, AVV, entkoppelt vom lokalen Adressbuch. Ablauf: Karte/QR scannen → WhatsApp-Chat →
Opt-in per Startwort → DSGVO-konforme Einwilligung dokumentiert.

> **Direkt relevant für die Landingpage:** Der WhatsApp-CTA ist gut – aber die Nummer dahinter muss an einer
> **API/BSP-Lösung** hängen, nicht an der normalen Business-App. (To-do für Niels.)

---

## 4. Multiplikatoren: Steuerberater ≠ Händler

- **Steuerberater:** dürfen **keine** Vermittlungsprovision nehmen/vereinbaren (**§2 Abs.3 BOStB**). →
  Kein bezahltes Tippgebermodell. Stattdessen **reine Mehrwert-Argumentation**: Vermittler sichert
  Liquidität & Überlebensfähigkeit des Mandanten → senkt Ausfallrisiko, festigt die Mandatsbeziehung.
- **Gewerbliche Händler** (Gastroküchen, Friseurbedarf, Landmaschinen, Kassensysteme): **dürfen** als
  **provisionierte Tippgeber** agieren – aber **nur Namhaftmachung** (Kontakt weitergeben). Sobald sie zu
  Laufzeiten beraten oder Unterlagen sammeln → erlaubnispflichtige Vermittlung (§34c/§34i GewO),
  Ordnungswidrigkeit. **Schriftlicher Tippgebervertrag** zwingend.

---

## 5. Qualifizierung — harte K.-o.-Kriterien (Fintech-Logik)

| Kriterium | Go (Minimum) | No-Go | Hintergrund |
|---|---|---|---|
| **Sitz** | in Deutschland | Ausland | Harte Plattform-Vorgabe |
| **Historie** | ≥ **2 Monate** aktiv | < 2 Monate | Fintechs (iwoca) finanzieren ab ~2 Monaten; Banken oft ab 2 Jahren |
| **Jahresumsatz** | > **22.000 €** | < 22.000 € | Unter der Grenze = „Hobby-Gewerbe" |
| **Rechtsform** | EU, GmbH, UG … | **aktive Insolvenz** | Alle Rechtsformen ok, Insolvenz sperrt |

---

## 6. Dokumente — Schwellen kennen = Reibung killen

- **1.000 – 50.000 € (z. B. iwoca):** **keine BWA, keine SuSa** – nur **Kontoauszüge der letzten 90 Tage**.
  → **Verkaufsargument „BWA-freier Kredit"** schon im Erstgespräch nennen.
- **50.001 – 500.000 €:** Kontoauszüge 90 Tage **+ BWA & SuSa der letzten 2 Jahre + aktuelle BWA (< 4 Monate)**.

**Tools:** BWA in Echtzeit aus **sevDesk / Lexware Office** exportieren (umgeht den langsamen Steuerberater).
Dokumenten-Einsammeln **nicht per E-Mail**, sondern über **FileRequestPro**: dynamische Checkliste pro Kunde,
zeigt fehlende Dokumente, **Auto-Erinnerung alle 48 h**, DSGVO-konform.

---

## 7. CRM & 7-Stufen-Pipeline

**Tool-Wahl:** **CentralStationCRM** (deutsch, bis 3 Nutzer kostenlos, DE-Server, DSGVO out-of-the-box) vs.
**Pipedrive** (~14 €/Monat, beste visuelle Drag-&-Drop-Pipeline, EU/Estland). → **Empfehlung: Pipedrive**
für die überlegene Pipeline-Visualisierung.

| # | Phase | Trigger | Aktion |
|---|---|---|---|
| 1 | **Neu** | Inbound (Formular/WhatsApp-QR) | Auto-API-Nachricht; Anruf **< 5 Min** |
| 2 | **Qualifiziert** | erfüllt Basiskriterien | FileRequestPro-Link erzeugen & senden |
| 3 | **Wartet auf Docs** | Portal offen, Docs unvollständig | Auto-Erinnerung **alle 48 h** |
| 4 | **Eingereicht** | Akte komplett & geprüft | Übergabe an Partner (FinCompare/iwoca/Compeon) |
| 5 | **Genehmigt** | positives Angebot | Konditionen zeigen, Einwände, digitale Unterschrift |
| 6 | **Ausgezahlt** | Valuta + Provision fällig | Zahlungseingang prüfen, Dankesnachricht |
| 7 | **Bestand** | abgeschlossen | After-Care-Kampagne, Wiedervorlage **+6 Monate** |

**Lead-Scoring:** Umsatz (>100k=3 / 50–100k=2 / <50k=1) + Doku-Bereitschaft (sofort=3 / erst anfordern=1)
+ Reaktivität (<10 Min=3 / mehrfach nachfassen=0). **7–9 = manuelle Top-Prio**, **2–4 = Auto-Nurture**.

---

## 8. After-Care & Reaktivierungs-Kadenz

- **Tag 30:** kurzer wertschätzender Anruf (Zweck erfüllt? + Basis für Empfehlungen legen).
- **Monat 6 (Steuervorauszahlungs-Check):** Auto-WhatsApp –
  *„… saisonale Anschaffungen/Steuervorauszahlungen binden oft Liquidität. Wir können Ihren bestehenden
  Rahmenkredit in 24 h aufstocken – ohne erneute Dokumentenprüfung."*
- **Monat 11:** Refinanzierung / Skalierung fürs neue Geschäftsjahr vorbereiten.

---

## 9. Empfehlungs-Engine — Recht & Steuer

- **Tippgeber-Grenze:** nur **namhaft machen**; keine Konditionen/Laufzeiten/Doku → sonst §34c/§34i GewO.
- **Geld-Provision an Tippgeber:** beim Empfänger steuerpflichtig (**§22 Nr.3 EStG** / Betriebseinnahme) →
  psychologische Hürde.
- **Sachgeschenke (eleganter):** **Wachstumschancengesetz** hob die Freigrenze **35 € → 50 €** (netto bei
  Vorsteuerabzug, rückwirkend ab 01.01.2024). Voll **Betriebsausgabe** (§4 Abs.5 S.1 Nr.1 EStG), Empfänger
  dokumentieren. Für höherwertige Prämien: **Pauschalversteuerung §37b EStG** (30 % + Soli, Vermittler trägt).
- **Plattform-Programme:** z. B. iwoca „Kunden werben Freunde" – Amazon-Gutscheine gestaffelt bis **2.500 €**.

---

## 10. 30-Tage-Launch-Plan

**Woche 1 – Fundament:** Pipedrive + 7-Stufen-Pipeline & Felder (Umsatz, Gründungsdatum); WhatsApp-API-BSP
(Superchat) + Auto-Erstnachricht + QR; FileRequestPro mit 2 Checklisten (<50k = nur Kontoauszüge / >50k = +BWA+SuSa).

**Woche 2 – Netzwerk/Partner:** 20–30 lokale Multiplikatoren kartieren (Gastroküchen, Kassen, Friseurbedarf,
Landmaschinen); telefonisch akquirieren; Karten mit QR am POS auslegen. Pitch: *„Ihr externer Liquiditäts-Joker
– Sie schicken den Kontakt, ich beschaffe Kapital via Fintech in 48 h. Tippgebervertrag bringe ich mit."*

**Woche 3 – Outbound & Sichtbarkeit:** Google Business Profile optimieren (lokale Keywords); Outbound-Call-Sprint
über 150 lokale Betriebe (mutmaßliche Einwilligung); Einwandbehandlung schulen
(Einwand „Fintech-Zins höher" → tagesaktuelle Bewertung, BWA-frei bei Kleinsummen, kostenlose Sondertilgung).

**Woche 4 – Skalierung:** hyperlokale Meta Click-to-WhatsApp-Ads (50 km, Pain-Point-Visuals, z. B. „Kapital für
den neuen Gastro-Ofen in 48 h"); Inbound strikt nach 5-Min-Regel abarbeiten; Pipeline-Flaschenhälse auswerten
und Follow-up-Intervalle nachjustieren.

---

## 11. Was davon in die Landingpage gehört (Vorschlag – zu bestätigen)

| Idee aus dem Report | Auf die Seite? | Bedingung |
|---|---|---|
| **„Wenig Unterlagen / unkompliziert"** als Versprechen | ✅ sicher | bereits angelegt, kann geschärft werden |
| **„BWA-frei bis 50.000 €"** | ⚠️ stark, aber partnerabhängig | nur wenn Niels mit iwoca-artigen Partnern arbeitet → bestätigen |
| **„Entscheidung in 24–48 h"** | ⚠️ starker Hook | gleiche Bedingung |
| **WhatsApp als Erstkontakt** | ✅ bereits drin | Nummer muss an **API/BSP** hängen (DSGVO) |
| **Branchen-Hooks** (Gastro-Ofen etc.) | ✅ sicher | bereits als Segmente vorhanden |

→ Sobald Niels seine **Finanzierungspartner** und den **WhatsApp-Setup** bestätigt, kann ich „BWA-frei" und
„24–48 h" als konkrete, **wahre** Conversion-Hooks in den Hero aufnehmen.
