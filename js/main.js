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

document.querySelector(".contact-form form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const success = document.querySelector(".form-success");
  success.hidden = false;

  // Optional: clear fields
  e.target.reset();
});

