# PopPulse News Website

## Run locally

Requirements: Node.js 18.17+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## URL structure

- Home: `/`
- Categories: `/technology`, `/business`, `/politics`, `/sports`, `/world`, `/finance`, `/entertainment`
- Authors: `/authors`
- Author detail: `/author/<author-slug>`
- Article detail: `/<category>/<article-slug>`

Legacy `/category/...` and `/post/...` routes redirect to the canonical URLs.

## Layout updates in this version

- Responsive homepage/header layouts across desktop, tablet and mobile widths.
- Header category separators use `|` between the date and categories and between Advertise / Deal / Contact.
- Menu control uses the four-square icon treatment from the reference layout.
- Travel-style section (the Sports data section) keeps its subscriber box sticky only inside that section on desktop.
- Latest News keeps the PopPulse+ upgrade card sticky only inside the Latest News section on desktop.
- Article sidebar remains sticky only on article/detail pages and has no internal scrollbar.
- Article social-share rail remains sticky on article/detail pages.
- Author card remains below the article advertisement on detail pages.
- Social links use Twitter, YouTube, Instagram, Stack and Medium.
