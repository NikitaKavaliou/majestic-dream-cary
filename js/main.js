/* ============================================================
   main.js — UI logic for Majestic Dream Cary
   - Footer year
   - Review translation toggle
============================================================ */

// ------------------------------------------------------------
// 1. Set current year in footer
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// ------------------------------------------------------------
// 2. Review translation system
// ------------------------------------------------------------
// This object will be filled after i18n loads language files
// i18n.js stores translations in I18NTranslations (global)
window.I18NTranslations = window.I18NTranslations || {};

// Wait until translations are loaded
document.addEventListener("DOMContentLoaded", () => {
  setupReviewTranslationButtons();
});

function setupReviewTranslationButtons() {
  document.querySelectorAll(".show-translation-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".review-card");
      const reviewId = card.getAttribute("data-review-id");
      const lang = document.documentElement.lang;

      // English = no translation needed
      if (lang === "en") return;

      const translationEl = card.querySelector(".review-text-translation");
      const key = `reviews.${reviewId}.${lang}`;

      const translatedText =
        window.I18NTranslations[lang] &&
        window.I18NTranslations[lang][key];

      if (!translatedText) {
        console.warn("No translation found for:", key);
        return;
      }

      // Toggle visibility
      if (translationEl.hidden) {
        translationEl.textContent = translatedText;
        translationEl.hidden = false;
        btn.textContent =
          window.I18NTranslations[lang]["reviews.hideTranslation"] ||
          "Hide translation";
      } else {
        translationEl.hidden = true;
        btn.textContent =
          window.I18NTranslations[lang]["reviews.showTranslation"] ||
          "Show translation";
      }
    });
  });
}
