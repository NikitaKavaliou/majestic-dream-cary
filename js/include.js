/* include.js — GitHub Pages compatible */

const REPO = "/majestic-dream-cary";

async function includeComponent(selector, file) {
  try {
    const container = document.querySelector(selector);
    if (!container) return;

    const response = await fetch(`${REPO}/${file}`);
    const html = await response.text();
    container.innerHTML = html;
  } catch (err) {
    console.error("Component load error:", file, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeComponent("header", "components/header.html");
  includeComponent("footer", "components/footer.html");
});



