# Brightwave Agency: landing page

A single-page static site. No build step: open `index.html` in a browser, or upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Folder structure

```
brightwaveagency/
├── index.html                  Page content (HTML only)
├── css/
│   └── styles.css              All styles, split into numbered sections (see the table of contents at the top)
├── js/
│   └── booking.js              Opens Calendly as a pop-up when a "Book" button is clicked
└── assets/
    └── images/
        ├── logo.png            Header logo + browser-tab icon
        ├── founder.jpg         About section photo
        ├── client-message-dental.jpg
        └── trades/             Stock photos (CC0, StockSnap) for the "Built for local trades" grid
```

## Editing tips

- **Colours, fonts and page width** are all set as variables at the top of `css/styles.css` (section 1). Change them there and the whole site updates.
- **Icons** are defined once in the hidden `<svg>` sprite at the top of `<body>`. To use one, write
  `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-check"/></svg>`.
  Available: `icon-x`, `icon-check`, `icon-play`, `icon-website`, `icon-pin`, `icon-star`, `icon-globe`, `icon-search`.
- **Images**: drop new files into `assets/images/` and reference them as `assets/images/your-file.jpg`.
- **Proof cards**: each card is a `<div class="slot …">`. When you add a real screenshot to one, add the class `has-img` so it gets the solid border and image styling.

## Booking

Every "Book" button opens Calendly (`https://calendly.com/ezeoyeg/free-consultation`) in a pop-up on the page, using `js/booking.js`. To change the link, find-and-replace that URL in `index.html`.

## Drop-in photos (no code needed)

Save a file with exactly this name and it appears on the page automatically. Until then, a placeholder shows.

| File name | Where it shows |
|---|---|
| `assets/images/founder.jpg` | About section, your photo (portrait shape, about 800 x 1000 px) |
| `assets/images/client-meeting.jpg` | Proof section, "With clients" card |
| `assets/images/ad-results-2.jpg` | Proof section, second "Ad results" card |

After adding a proof photo, update the heading and text in that card to match.

**Trade photos**: the six tiles under the proof cards (`assets/images/trades/plumber.jpg`, `electrician.jpg`, `dentist.jpg`, `builder.jpg`, `barber.jpg`, `cleaner.jpg`) are free stock photos. Replace any of them with a real client photo by saving over the file with the same name (4:3 landscape, about 720 x 540 px).

## Adding the video testimonial

On YouTube, click **Share > Embed**, copy the `<iframe …></iframe>` code, and paste it in `index.html` on the line marked `<!-- PASTE VIDEO HERE -->`. The placeholder text hides itself and the video fills the card.

## Placeholders still to fill in

Search `index.html` for `REPLACE` or `[` to find them all.

| Where | What to add |
|---|---|
| Final CTA | Your phone / WhatsApp number (`tel:` link and text) |
| Proof, call recording | 20 to 40 second audio clip |
| About | Your name (x2) and a sentence about your background |
| FAQ | "From £X" pricing (optional) and your contract terms |
| Footer | Your email address and privacy policy link |
