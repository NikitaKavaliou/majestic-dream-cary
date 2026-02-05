/* ============================================================
   i18n.js — Premium Language Switcher for Majestic Dream Cary
   - Loads JSON files
   - Smooth fade animation
   - Works on all pages
============================================================ */

const I18N = (function () {
  let currentLang = "en";
  let translations = {};

  // Fade animation
  function fadeOutIn(callback) {
    const body = document.body;
    body.style.transition = "opacity 0.25s ease";
    body.style.opacity = "0";

    setTimeout(() => {
      callback();
      body.style.opacity = "1";
    }, 250);
  }

  // Load JSON file
  async function loadLanguage(lang) {
    try {
      const response = await fetch(`/majestic-dream-cary/i18n/${lang}.json`);
      const data = await response.json();
      translations[lang] = data;

      fadeOutIn(() => applyTranslations(lang));
    } catch (err) {
      console.error(`Error loading language file: ${lang}`, err);
    }
  }

  // Apply translations
  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translated = translations[lang][key];

      if (translated) {
        el.textContent = translated;
      }
    });

    updateActiveButton(lang);
  }

  // Highlight active language button
  function updateActiveButton(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  // Initialize
  function init() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");

        if (!translations[lang]) {
          loadLanguage(lang);
        } else {
          fadeOutIn(() => applyTranslations(lang));
        }
      });
    });

    loadLanguage("ru");
  }

  return { init };
})();


