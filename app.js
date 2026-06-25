/* Finanzteam – Unternehmerkredite · Interaktionen (vanilla JS, kein Framework) */
(function () {
  "use strict";

  const CONTACT = {
    name: "Niels Buchner",
    org: "Finanzteam – Unternehmerkredite",
    title: "Unternehmerkredite",
    phone: "+4915203123429",
    phoneDisplay: "+49 152 03123429",
    email: "Niels@Finanzteam-Unternehmerkredite.com",
    url: "https://finanzteam-unternehmerkredite.com",
  };

  /* ---- Sticky header shadow on scroll ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Lead form → vorbereitete E-Mail (mailto, kein Backend nötig) ---- */
  const form = document.getElementById("leadForm");
  const feedback = document.getElementById("formFeedback");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const get = (id) => (document.getElementById(id)?.value || "").trim();
      const name = get("name");
      const phone = get("phone");
      const branche = get("branche");
      const betrag = get("betrag");
      const nachricht = get("nachricht");

      if (!name || !phone) {
        feedback.style.display = "block";
        feedback.style.color = "#a96d30";
        feedback.textContent = "Bitte Name und Telefon angeben.";
        return;
      }

      const subject = `Finanzierungsanfrage – ${name}`;
      const body =
        `Hallo Niels,\n\nich interessiere mich für eine Finanzierung.\n\n` +
        `Name: ${name}\nTelefon: ${phone}\n` +
        `Branche: ${branche || "—"}\nGewünschter Betrag: ${betrag || "—"}\n\n` +
        `Mein Vorhaben:\n${nachricht || "—"}\n\nViele Grüße\n${name}`;

      const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      feedback.style.display = "block";
      feedback.style.color = "#a96d30";
      feedback.textContent = "Danke! Ihre E-Mail wurde vorbereitet – bitte nur noch abschicken.";
      form.reset();
    });
  }

  /* ---- vCard-Download ("Kontakt speichern") ---- */
  const vbtn = document.getElementById("vcardBtn");
  if (vbtn) {
    vbtn.addEventListener("click", () => {
      const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:Buchner;Niels;;;`,
        `FN:${CONTACT.name}`,
        `ORG:${CONTACT.org}`,
        `TITLE:${CONTACT.title}`,
        `TEL;TYPE=CELL:${CONTACT.phone}`,
        `EMAIL;TYPE=INTERNET:${CONTACT.email}`,
        `URL:${CONTACT.url}`,
        "END:VCARD",
      ].join("\r\n");
      const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "Niels-Buchner-Finanzteam.vcf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    });
  }

  /* ---- Jahr im Footer aktuell halten (falls gewünscht) ---- */
  // (statisch 2026 belassen — bei Bedarf hier dynamisch setzen)
})();
