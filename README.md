# Amaltas Institute of Paramedical Sciences: website redesign

This is a React rebuild of **http://amaltasgroup.co.in/paramedical/**, the site for Amaltas Institute of Medical Sciences (Paramedical Science), Dewas.

All text, names, numbers, images, the intro video and the brochure PDF come from the live site as it was on 31 Oct 2026. Nothing was rewritten or invented. The only new text is interface wording such as button labels ("Apply Now", "Read message") and a few section labels.

**Stack:** React 18 · Vite 5 · TypeScript (strict) · Tailwind CSS 3 · Framer Motion 11 · React Router 6 · lucide-react · fonts bundled locally (Fraunces, Manrope, Tiro Devanagari Hindi)

---

## Quick start

```bash
npm install
cp .env.example .env      # optional – see "Environment variables"
npm run dev               # http://localhost:5173
npm run build             # type-check + production build → dist/
npm run preview           # serve the production build locally
```

You need Node 18 or newer.

---

## Project structure

```
src/
├── main.tsx                 # entry: router, MotionConfig (respects reduced-motion), fonts
├── App.tsx                  # all routes (lazy-loaded) + redirects from old .asp URLs
├── index.css                # Tailwind layers + base styles
├── lib/
│   ├── asset.ts             # asset(): builds URLs to the original site's media
│   ├── cn.ts                # className helper
│   └── motion.ts            # shared easing / variants
├── hooks/                   # useLockBody, useDocumentTitle
├── data/                    # ← ALL CONTENT LIVES HERE (verbatim from the live site)
│   ├── site.ts              # name, logos, contact, socials, nav + footer menus
│   ├── home.ts              # home intro, info tiles, highlights, gallery picks
│   ├── about.ts             # society, executive committee, vision & mission
│   ├── messages.ts          # Chairman / Director / Dean / Principal messages
│   ├── courses.ts           # courses, duration, seats, fees, enquiry departments
│   ├── academics.ts         # admission criteria, academic calendar, affiliation, placement
│   ├── infrastructure.ts    # library, pre-clinical departments, clinical photos
│   ├── events.ts            # 50 events with dates, covers and full photo albums
│   ├── media.ts             # photo gallery + news clippings
│   └── committees.ts        # anti-ragging squad/committees, grievance committee
├── components/
│   ├── layout/              # TopBar, Navbar (+mobile drawer), Footer, PageHeader,
│   │                        # AdmissionBand, AdmissionPopup, FloatingActions, Layout
│   ├── sections/            # Home sections: Hero, StatsStrip, AboutIntro, Programmes,
│   │                        # Highlights, Leadership, EventsPreview, NewsMarquee, GalleryPreview
│   ├── ui/                  # Button, Img, Reveal, SectionHeading, Lightbox, PhotoGrid,
│   │                        # CommitteeTable, InfoLines, PulseLine, AmaltasBloom, BrandIcons
│   ├── CourseCard.tsx  MessageCard.tsx  EventCard.tsx  EnquiryForm.tsx
└── pages/                   # one file per page (see table below)
```

To change any wording, edit the matching file in `src/data/`. You don't need to touch any components.

---

## Pages (every page on the original site is included)

| New route | Original page |
|---|---|
| `/` | default.asp |
| `/about` | aboutus.asp |
| `/vision-mission` | vision.asp |
| `/messages/chairman` · `/director` · `/dean` · `/principal` | chairman.asp · director.asp · dean.asp · principal.asp |
| `/courses` | courses.asp |
| `/fees` | fees.asp (Admissions & Fees) |
| `/admission-criteria` | academic.asp |
| `/academic-calendar` | academic_calendar.asp |
| `/infrastructure` | infrastructure.asp |
| `/infrastructure/clinical` | clinical.asp |
| `/infrastructure/library` | library.asp |
| `/infrastructure/pre-clinical` | preclinical.asp |
| `/events` and `/events/:slug` | events.asp and its 17 album pages (clinical26.asp, khelo.asp …) |
| `/gallery` | photogallery.asp |
| `/news` | news.asp |
| `/affiliations` | supporting_aff_lic.asp |
| `/placement` | placement.asp |
| `/anti-ragging` | antiragging.asp |
| `/student-grievance-committee` | student_grievance_committee.asp |
| `/enquiry` | enquiry.asp |
| `/contact` | (the original menu linked out to amaltasmedicalcollege.in/contact; this is a proper contact page built from the footer details, and it still links to that page) |

**Old links keep working.** A request for `/courses.asp` redirects to `/courses`, and the same goes for every other old page. The brochure link opens the original `pdf/brochure.pdf`.

---

## Assets (images, video, PDF): please read before deploying

No media files were copied into the project. Every image, the intro video (`images/paramedical-intro-new2.mp4`) and the brochure are loaded from the original server through `asset()` in `src/lib/asset.ts`. The base URL comes from `VITE_ASSET_BASE`.

⚠️ **The original server only serves HTTP; it has no HTTPS.** If you deploy this site over HTTPS (which you should), browsers will block those HTTP images as mixed content. Pick one of these fixes:

1. **Recommended: serve the media from the new host.** Copy these folders from the old server into `public/legacy/`: `images/`, `activities/`, `photogallery/`, `news/` and `pdf/`. Then set:
   ```
   VITE_ASSET_BASE=/legacy/
   ```
2. **Or enable SSL on amaltasgroup.co.in** and set `VITE_ASSET_BASE=https://amaltasgroup.co.in/paramedical/`.
3. **Or deploy the new site on the same server** under `/paramedical/`. Set `VITE_BASE_PATH=/paramedical/` and `VITE_ASSET_BASE=/paramedical/`.

If an image can't be loaded, the page shows a labelled placeholder with its path instead of a broken image icon.

---

## Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `VITE_ASSET_BASE` | `http://amaltasgroup.co.in/paramedical/` | Where the original images, video and PDF are loaded from |
| `VITE_ENQUIRY_ENDPOINT` | *(empty)* | URL that receives the enquiry form as a JSON POST: `{ name, email, phone, department }` |
| `VITE_BASE_PATH` | `/` | Sub-folder the built site is served from (e.g. `/paramedical/`) |

**Enquiry form.** It has the same fields as the original: Name, Email Address, Phone No. and Select Department, with the same 9 department options. It validates input on the client and has a hidden honeypot field to catch bots. If `VITE_ENQUIRY_ENDPOINT` is set, the form posts to it. If not, it opens the visitor's email app with a message to `paramedical@amaltasgroup.co.in`. The old form used a server-side captcha in classic ASP, which can't run in a static React app. If you build a real endpoint, add rate-limiting or a captcha there.

---

## Deployment

The build output in `dist/` is a static single-page app. The server must send unknown paths back to `index.html`:

- **Hostinger / Apache:** `public/.htaccess` is already included and ends up in `dist/`. Its content is:
  ```apache
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```
- **IIS (`web.config`)**: add a URL Rewrite rule that sends non-file requests to `/index.html`.
- **Netlify:** `public/_redirects` is already included.
- **Vercel:** add a rewrite of `/(.*)` to `/index.html`.

---

## Design notes

- **Palette** is built on the live site's own colours: green `#11803C` (`brand-600`) and yellow `#FAEA46` (`gold-300`), with a deep green `#083B1F` for contrast and a warm cream background.
- **Type:** Fraunces, a serif, for headings; Manrope for body text; Tiro Devanagari Hindi for Hindi event titles and the Sanskrit shloka.
- **Signature motifs:** a swaying *Amaltas* (golden-shower) flower cluster, which is the tree the institute is named after, and an animated ECG pulse line.
- **Conversion:** "Apply Now" is always in the navbar. Every page has an "Admission Open" band above the footer. On mobile there is a sticky Call / Enquiry bar. The admission poster pops up once per session (`images/popup2.jpeg`), as the original site did. Brochure links appear throughout.
- **Accessibility:** semantic landmarks, a skip-link, keyboard-friendly dropdowns and lightbox (←/→/Esc), visible focus rings, alt text, and support for the `prefers-reduced-motion` setting.
- **Performance:** every page except Home is lazy-loaded, images are lazy-loaded, fonts are bundled locally, and the main JS bundle is about 120 kB gzipped.

### The "Key figures" strip on Home
Every number in it comes from the site's own content: 9 programmes and 550 seats are counted from courses.asp, and 11,795 books and 106 journals are from library.asp.

---

## Content issues found on the live site (copied as-is)

These were kept exactly as published so that no content changed. You may want to confirm them with the departments and fix them in `src/data/`:

- **Committee contact mismatches** (`committees.ts`)
  - Ms. Shakuntal/Shakuntla Mandloi is listed with two phone numbers (8909512829 and 8109512829) and two spellings.
  - Dr. Anjali Mehta is listed as 9407132324 on the Anti-Ragging Committee. That is the same number as Dr. Vidhi Tiwari. Her number elsewhere is 7879378428.
  - Dr. Jagat Rawat's email is `jbr.195indore@gmail.com` on the Gender Harassment Committee and `Jbr.19indore@gmail.com` everywhere else.
- **Typos:**
  - "Joint Secretory" (about.ts)
  - "besment" (pre-clinical)
  - "main-tained" (home infrastructure blurb)
  - "Vasant Festival with Great Enthusias" (events.ts)
  - "Regent racks" (Biochemistry)
  - "The library of is situated…" appears twice, with a missing word (library)
- **Contact menu:** the original "Contact" item pointed to a different institute's page (amaltasmedicalcollege.in/contact).
- **Home "Events / Activities" heading:** on the live site this heading had no content under it. The new home page shows the latest events in its place.

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check with `tsc -b` and build to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run typecheck` | Type-check only |
