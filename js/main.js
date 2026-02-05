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
// ------------------------------------------------------------
// 2. Review translation system (EN / RU / ES)
// ------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  setupReviewTranslationButtons();
});

function setupReviewTranslationButtons() {
  document.querySelectorAll(".show-translation-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".review-card");
      const wrapper = card.querySelector(".translation-wrapper");
      const translationEl = card.querySelector(".review-text-translation");
      const lang = document.documentElement.lang;

      // English = no translation available
      if (lang === "en") return;

      // Key for translation (universal for RU/ES)
      const reviewId = card.getAttribute("data-review-id");
      const key = `reviews.${reviewId}.translation`;

      const translatedText =
        window.I18NTranslations[lang] &&
        window.I18NTranslations[lang][key];

      if (!translatedText) {
        console.warn("No translation found for:", key);
        return;
      }

      // Insert translated text
      translationEl.textContent = translatedText;

      // Toggle open/close
      wrapper.hidden = false;
      wrapper.classList.toggle("open");

      if (wrapper.classList.contains("open")) {
        btn.textContent =
          window.I18NTranslations[lang]["reviews.hideTranslation"] ||
          "Hide translation";
      } else {
        btn.textContent =
          window.I18NTranslations[lang]["reviews.showTranslation"] ||
          "Show translation";
      }
    });
  });
}

document.querySelector(".contact-form form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const success = document.querySelector(".form-success");
  success.hidden = false;

  // Optional: clear fields
  e.target.reset();
});

