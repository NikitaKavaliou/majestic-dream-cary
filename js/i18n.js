/* i18n.js — GitHub Pages compatible */

const I18N = (function () {
  let currentLang = "en";
  let translations = {};

  const REPO = "/majestic-dream-cary";

  async function loadLanguage(lang) {
    try {
      const response = await fetch(`${REPO}/i18n/${lang}.json`);
      const data = await response.json();
      translations[lang] = data;
      applyTranslations(lang);
    } catch (err) {
      console.error(`Error loading language file: ${lang}`, err);
    }
  }

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

  function updateActiveButton(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

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

    loadLanguage("en");
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  I18N.init();
});
