/* include.js — auto-detect correct path */

function getBasePath() {
  return window.location.pathname.includes("/pages/") ? ".." : "";
}

async function includeComponent(selector, file) {
  try {
    const container = document.querySelector(selector);
    if (!container) return;

    const base = getBasePath();
    const response = await fetch(`${base}/${file}`);
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
