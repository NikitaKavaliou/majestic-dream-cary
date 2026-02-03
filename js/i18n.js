/* ============================================================
   i18n.js — Language switching system for Majestic Dream Cary
   Loads JSON files and replaces all [data-i18n] elements
============================================================ */

const I18N = (function () {
  let currentLang = "en";
  let translations = {};

  // Load JSON file for selected language
  async function loadLanguage(lang) {
    try {
      const response = await fetch(`/i18n/${lang}.json`);
      const data = await response.json();
      translations[lang] = data;
      applyTranslations(lang);
    } catch (err) {
      console.error(`Error loading language file: ${lang}`, err);
    }
  }

  // Apply translations to all elements with data-i18n
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

  // Initialize language switcher
  function init() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!translations[lang]) {
          loadLanguage(lang);
        } else {
          applyTranslations(lang);
        }
      });
    });

    // Load default language
    loadLanguage("en");
  }

  return { init };
})();

// Initialize after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  I18N.init();
});
