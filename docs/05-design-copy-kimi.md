# Design- & Copy-Briefing (Landingpage)

> Quelle: **Kimi Deep Research** (Prompt ②), von Claude strukturiert & eingeordnet. Report 2 von 4.
> ⚠️ **Wichtig:** Viele Copy-Vorschläge enthalten **konkrete Behauptungen** (Jahreszahlen, Bankanzahl,
> „IHK-registriert", Ort). Diese sind **NICHT** auf der Live-Seite – sie müssen erst von Niels mit echten
> Daten bestätigt werden. Bis dahin: Auswahl-Menü, kein Live-Text.

---

## 1. Validierung unseres Designs

Kimi bestätigt **exakt** unsere Richtung: **Navy + Cream + Kupfer/Gold**, **klassische Serife + Inter**,
editoriale Asymmetrie, Papierkorn statt Gradient-Mesh, echte/handgebaute Visuals statt Stock-3D.
Referenzen, die unserer Marke am nächsten sind:
- **Lionhead Financial** – Kupfer/Rost auf Erdtönen (Copper-Marke).
- **Matthew James Wealth** – Navy/Gold, Cormorant Garamond + Sans.
- **Melton & Company** – Navy + warmes Braun/Cream, Familienbetrieb-Anmutung.

Weitere genannte Benchmarks: Avivar Capital, Wealthspire, Investably, Stripe, Mercury, Plaid,
Modern Treasury, Ramp, Coyle Financial.

---

## 2. Anti-„KI-Look"-Checkliste (Abgleich mit unserer Seite)

| „KI-Template" | „Hand-crafted" | Status bei uns |
|---|---|---|
| Überall 8px Radius | Gemischte Radien / scharfe Bildkanten | ⚠️ optional schärfen (Cards 14px → variieren) |
| Gradient-Mesh-Hero | Solides Navy + Papierkorn | ✅ umgesetzt |
| Generische 3D-Illus | Echtes Foto / handgezeichnete Linien | ✅ eigene SVG-Linienicons (kein Feather-Default) |
| Perfekte Symmetrie | Editoriale Asymmetrie | ✅ asymmetrisches Hero |
| „Unlock/Leverage/Elevate" | Konkrete deutsche Verben | ✅ nur Deutsch |
| Fake-Testimonials | Keine / echte Metriken | ✅ keine Fake-Testimonials |
| Cookie-Cutter-Rhythmus | Variierte Sektionshöhen | ✅ teils; weiter variierbar |
| Over-smoothe 0.3s-Fades | Subtile/keine Animation | ✅ dezent (0.8s, reduced-motion-safe) |
| Reinweiß #FFFFFF | Warmes Cream | ✅ #f6efe1 |

**Empfehlung Kimi für Palette (kompatibel mit unserer):** Cream `#F7F5F0`, Navy `#0F1D36`,
Copper `#C17A45`, Copper-Light `#D4A574`, Text `#1A1A1A`, Muted `#6B6B6B`.
Unsere Werte sind von der **echten Karte** abgeleitet (Navy #16243d, Copper #c2884a) – beides funktioniert;
beim Feinschliff ggf. Navy einen Tick tiefer ziehen.

**Typo:** Kimi empfiehlt **Cormorant Garamond + Inter** (oder Playfair + Inter). Wir nutzen aktuell
**Fraunces + Inter**. Die Karte zeigt eine **klassische** Serife → **Cormorant matcht die Karte näher**.
→ Beim Konsolidierungs-Pass entscheiden: Fraunces (charaktervoll) vs. Cormorant (klassisch, kartennah).

---

## 3. Sektions-Blueprint (Abgleich)

Unsere Reihenfolge Hero → Branchen → Ablauf → Warum → Über → Kontakt deckt sich mit Kimis 8-Sektions-Muster.
Verbesserungsideen daraus:
- **Trust-Bar direkt unter dem Hero** mit *echten* Signalen (Partnerbanken-Logos, „Unabhängiger Makler",
  „DSGVO-konform", „Keine Erfolgsgebühr ohne Zusage"). → erst mit Niels' echten Fakten füllen.
- **Branchen mit echten Fotos** statt Icons (wenn vorhanden) – sonst bleiben unsere Linienicons.
- **Ablauf mit Timeline** („Tag 1 Anruf · Tag 3 Vergleich · Tag 5 Entscheidung") – stark, sobald Tempo bestätigt.
- **Über-Sektion mit echtem Foto** von Niels (statt NB-Monogramm-Platzhalter).
- **Kontakt:** 3 gleichwertige Wege (Anruf/WhatsApp/Formular) – ✅; zusätzlich Calendly-Selbstbuchung denkbar.

---

## 4. Copy-Menü (DEUTSCH) — ⚠️ Claims vor Nutzung bestätigen

### H1 (claim-frei nutzbar)
1. „Ihr Betrieb braucht Liquidität. Wir finden die passende Lösung."
2. „Der Kredit, der zu Ihrem Geschäft passt – nicht umgekehrt."
3. „Selbstständig. Überlastet. Unterschätzt von der Bank? Wir nicht."
4. „Finanzierung ohne Bürokratie-Wahnsinn. Persönlich. Diskret. Schnell."
5. „Ihre Mission ist Ihr Geschäft. Unsere Mission: Ihre Finanzierung." (knüpft an den Karten-Claim an)

> Aktuell live: „Kapital für den nächsten Schritt Ihres Betriebs." (claim-frei). Austausch jederzeit möglich.

### Sub-Headlines — ⚠️ enthalten teils Claims
- „… über 40 Banken vergleichen …" → **Zahl bestätigen** (40?).
- „In 48 Stunden wissen Sie, wo Sie stehen." → **Tempo bestätigen**.
- claim-frei: „Keine Callcenter. Kein 08/15. Ein persönlicher Ansprechpartner, der Ihre Zahlen versteht und für Sie verhandelt."

### CTA-Microcopy (nutzbar)
- Primär: „Unverbindliches Erstgespräch vereinbaren"
- Sekundär: „Rückruf innerhalb 24h anfordern" (⚠️ nur wenn 24h wirklich gehalten wird)
- WhatsApp: „Direkt per WhatsApp schreiben" ✅ (vorausgefüllte Nachricht ist bereits aktiv)
- Formular: „Meine Finanzierung prüfen lassen"

### Trust-Lines — ⚠️ alle claim-behaftet
- „Unabhängig. Registriert bei der IHK. Transparent." → **IHK/§34c bestätigen**
- „Ihre Daten bleiben bei uns – nicht auf einem Server in Irland." (nur wenn zutreffend)
- „Keine Erfolgsgebühr ohne Zusage. Kein Kleingedrucktes." → **Modell bestätigen**
- „Seit 2018 für Selbstständige in Hamburg und Umgebung." → **Jahr & Ort bestätigen**

### Branchen-One-Liner (gut nutzbar, leicht anzupassen)
- Gastronomie: „Ob Pizzeria, Café oder Catering: Wir kennen die saisonalen Schwankungen und finden Banken, die Ihren Umsatz verstehen."
- Landwirtschaft: „Von Maschinenfinanzierung bis Betriebsmittelkredit – wir sprechen die Sprache der Landwirtschaft."
- Handwerk: „Werkzeug, Material, Personal: Wir beschaffen die Liquidität, damit Sie Ihre Aufträge annehmen können."
- Friseur & Beauty: „Ob Salon-Eröffnung oder Ausstattungs-Upgrade: Wir wissen, wie wichtig Image und Cashflow sind."
- Online-Shop: „Lager, Marketing, Saison-Spitzen: Wir finden flexible Kreditlinien für digitale Geschäftsmodelle."
- Dienstleister: „Von der IT-Agentur bis zum Consulting-Büro: Wir finanzieren Ihr Wachstum – ohne Betriebsgeheimnisse preiszugeben."

### About-Absatz — ⚠️ „über sechs Jahren", „nicht für eine Bank" bestätigen
„Mein Name ist Niels Buchner. Seit über sechs Jahren begleite ich Selbstständige … Ich arbeite nicht für eine
Bank – ich arbeite für Sie. …" → starkes Stück, aber **Tenure & Modell verifizieren**.

### Vertraulichkeits-Zusicherung (gut, leicht zu entschärfen)
„Was bei uns besprochen wird, bleibt bei uns. Ihre Daten werden nicht an Dritte verkauft … Wir unterliegen der
DSGVO …" (Makler-Schweigepflicht ggf. streichen, falls nicht zutreffend.)

---

## 5. Trust & Friction (für Solo-Broker)

**Trust ohne Fake-Testimonials:** echtes **Gesicht/Foto von Niels** (wichtigster Anker bei Finanzthemen),
**konkrete Metriken** (Jahre/Volumen/Bankpartner – echte Zahlen), **Prozess-Transparenz**,
**verifizierbare Credentials** (§34c GewO / IHK), **physische Adresse**, **No-Success-No-Fee**,
**echte Partner-Logos**, **DSGVO-First** („Daten bleiben in Deutschland").

**Reibung minimieren:** Click-to-Call (✅), WhatsApp mit vorausgefüllter Nachricht (✅ umgesetzt),
**Formular max. 3 Pflichtfelder** (wir: Name+Telefon Pflicht, Branche/Betrag/Nachricht optional),
**Sticky-Mobil-CTA** (✅ umgesetzt), optional **Calendly-Selbstbuchung** + **Auto-Reply**.

---

## 6. Bereits aus diesem Report umgesetzt
- ✅ **WhatsApp-Links mit vorausgefüllter Nachricht** (Hero, Menü, Kontakt, Footer, Sticky-Bar).
- ✅ **Sticky-Mobil-CTA** (Anrufen + WhatsApp).

## 7. Wartet auf Niels' echte Daten (dann sofort in die Seite)
- Tenure/Jahr, Anzahl Bankpartner, vermitteltes Volumen, Ort.
- Erlaubnis/IHK-Status (§34c / §34k).
- Vergütungsmodell (No-Success-No-Fee?), Tempo-Versprechen (24–48h?).
- **Echtes Foto** von Niels für Hero/Über-Sektion.
- Entscheidung Font: Fraunces vs. Cormorant.
