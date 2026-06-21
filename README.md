# Dəniz & Hakim Bağırov — Yardım Çağırışı

Static, single-page fundraising site for two brothers, **Dəniz (11)** and **Hakim (10)**, who both live with Duchenne Muscular Dystrophy (DMD). The family is raising funds for a 5th stem-cell procedure for each child.

**Live:** https://denizhakimyardimet.github.io

## Stack
Plain `index.html` + `css/styles.css` + `js/app.js`. No framework, no build step. Fonts: Fraunces + Manrope (+ Lora as the Cyrillic serif fallback for Russian, since Fraunces has no Cyrillic). Hosted on GitHub Pages (publishes automatically from `main`).

## Features
- Full client-side i18n: **AZ** (default) · TR · RU · EN. Language switch + optional `?lang=tr|ru|en`.
- Hero paired-portrait signature, story, treatment progress, photo gallery, and an open **medical-documents** transparency section (11 scans).
- Three bank cards — click/tap copies the digits-only number (with an `execCommand` fallback for older in-app browsers).
- Floating WhatsApp button and `tel:` contact.
- Shared lightbox for photos and documents (close on backdrop / × / `Esc`, arrow-key navigation).
- Four-layer in-app-browser (TikTok/Instagram/Facebook WebView) failsafe so scroll-reveal never leaves the page blank.
- Open Graph / Twitter share card + favicon.

## Project layout
```
index.html
css/styles.css
js/app.js
images/
  photos/            5 hospital photos
  docs/deniz/        5 medical scans
  docs/hakim/        6 medical scans
  og-cover.jpg       1200×630 social share card
  favicon.png
```
Source originals and the image-build script live in `deniz_hakim/` and `_build_images.py` — both are git-ignored and not published. To regenerate the optimized `images/` (PNG → JPEG, downscaled), run `python _build_images.py` (needs Pillow).

## Enabling Meta Pixel (optional)
The Pixel is **off** by default and the site never errors without it. To enable:
1. In `js/app.js`, set `META_PIXEL_ID` to your real Pixel ID (replace `__META_PIXEL_ID__`).
2. In `index.html`, uncomment the `<noscript>` pixel block in `<head>` and replace `PIXEL_ID`.

Events: `PageView` on load, `AddToCart` on a bank-card copy, `Contact` on WhatsApp/phone, `ViewContent` when the documents section is seen.

## Editing content
- Text: every translatable node has a `data-i="key"` in `index.html`; Azerbaijani is the source text in the markup, and the `tr`/`ru`/`en` translations live in the `I` object in `js/app.js`.
- Bank cards: edit the `data-num` (digits only) and the displayed number in `index.html`.

---
This campaign was created with the Bağırov family's consent. Medical document scans are published openly in the site's transparency section.
