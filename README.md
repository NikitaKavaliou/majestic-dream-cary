# Majestic Dream Cary — Early Learning Studio Website

This repository contains the full source code for the **Majestic Dream Cary** website — a modern, multilingual, component‑based static site deployed via **GitHub Pages**.

The site is designed for an early learning studio in Cary, NC, offering handwriting, creativity, school readiness, and STEM programs for children ages 3–7.

---

## 🌐 Live Website

The site is deployed using **GitHub Pages**.  
To update the live version, simply push changes to the repository.

---

## 📁 Project Structure

/assets
/img        → images, illustrations, photos
/icons      → favicon, logo, UI icons

/css
style.css      → main stylesheet

/js
main.js          → UI logic (language switcher, review translations)
i18n.js          → internationalization system
include.js    → dynamic header/footer injection

/i18n
en.json          → English translations
ru.json          → Russian translations
es.json          → Spanish translations

/components
header.html  → shared header component
footer.html  → shared footer component

/pages
index.html
classes.html
pricing.html
schedule.html
reviews.html
contact.html

---

## 🧩 Component System (Header & Footer)

The site uses a simple component loader to avoid repeating header/footer code across pages.

`include.js` automatically injects:

- `/components/header.html` into `<header></header>`
- `/components/footer.html` into `<footer></footer>`

This keeps the project clean and easy to maintain.

---

## 🌍 Internationalization (i18n)

The site supports **three languages**:

- English (`en.json`)
- Russian (`ru.json`)
- Spanish (`es.json`)

The language switcher updates:

- navigation
- headings
- paragraphs
- buttons
- schedule items
- review translations

All text is stored in `/i18n/*.json`.

---

## 🧠 JavaScript Logic

### `i18n.js`
Loads the selected language and replaces all elements with `data-i18n="key"`.

### `main.js`
Handles:

- language switching
- review translation toggles
- dynamic year in footer

### `include.js`
Loads header/footer components dynamically.

---

## 🚀 Deployment (GitHub Pages)

1. Go to **Settings → Pages**
2. Select:
   - **Branch:** `main` (or `master`)
   - **Folder:** `/root`
3. Save
4. Your site will be available at: https://<username>.github.io/<repository>/


---

## 🖼️ Assets

Place all images, icons, and illustrations inside:
/assets/img
/assets/icons


---

## 📌 Notes

- All paths use **absolute URLs** (`/css/style.css`, `/js/main.js`, etc.)  
  This ensures components load correctly on GitHub Pages.
- To update header/footer, edit files in `/components` — changes apply to all pages automatically.

---

## 📞 Contact

Majestic Dream Cary  
Cary, North Carolina, USA  
info@majesticdreamcary.com

---

## ✔ Status

The project is fully functional, multilingual, and optimized for GitHub Pages deployment.

