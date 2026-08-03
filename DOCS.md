# Life Hacks — Engineering Deliverables

A concise, honest architecture record. **Life Hacks** is a content-first PWA: a
growing library of clearly-explained how-to guides. The design deliberately favours a
static, offline-capable app over a database/auth backend — see the ADR at the end for
why that is the *correct* architecture for this product, not a shortcut.

---

## 1. Product Requirements Document (PRD)

**Vision.** A fast, beautiful, ever-growing collection of practical life hacks that
anyone can read in seconds and act on. Launch hack: a DIY capacitive stylus that pairs
with the AFTERGLOW drawing game.

**Personas**
- *The Life Hacker (reader)* — wants a clear, trustworthy, skimmable guide with
  materials, steps and the "why". Often on a phone. May be offline.
- *The Author (you)* — wants to add a new hack in minutes without touching app code,
  build tools, or a database.

**Core user journeys**
1. Land → scan cards → open a hack → follow steps → (optionally) tap through to a
   related product (e.g. AFTERGLOW).
2. Search a keyword → filtered results update live → open the match.
3. Install to home screen (PWA) → reopen later offline → still readable.
4. Author edits `js/hacks.js`, appends one object, commits → live after deploy.

**Functional spec**
- List view with hero, live search, and cards (title, summary, difficulty, time, updated).
- Detail view: hero image, safety callout, materials checklist, "why it works", numbered
  steps (with optional per-step images), related links, sources.
- Hash routing (`#/` and `#/hack/<id>`) — no server routing needed; deep links work.
- PWA: installable, offline via service worker, theme-coloured.

**Non-goals (MVP).** Accounts, comments, server storage, analytics. If community
features are ever needed, see ADR-1 for the migration path.

---

## 2. System Architecture & Folder Tree

Static PWA (monolithic front-end, zero runtime dependencies). Hosted on any static
host (GitHub Pages here). Content is a JS module registry.

```
life-hacks/
├── index.html                 # app shell (loads css + module entry)
├── manifest.webmanifest       # PWA manifest
├── sw.js                      # service worker (offline cache-first)
├── .nojekyll                  # serve files verbatim on GitHub Pages
├── css/
│   └── style.css              # all styling (dark/glow theme)
├── js/
│   ├── app.js                 # router, list/detail rendering, live search, SW reg
│   └── hacks.js               # ← CONTENT REGISTRY: the only file you edit to add hacks
├── assets/                    # images (banner, icon, per-hack art)
├── .github/workflows/
│   └── deploy.yml             # CI: integrity check → deploy to GitHub Pages
├── DOCS.md                    # this file
└── README.md
```

**Module boundaries**
- `hacks.js` — data only. No DOM, no logic. Safe for non-developers to edit.
- `app.js` — presentation & routing. Reads `HACKS`, renders HTML, wires search.
- `sw.js` — offline concern, fully isolated.
- `style.css` — presentation tokens (CSS custom properties) + components.

**Dependency manifest.** None. No npm install, no bundler. This is a feature: nothing
to audit, patch, or break. (A `package.json` is intentionally omitted.)

---

## 3. Data Models

There is no database. The single entity is a **Hack**, defined as a plain object in
`js/hacks.js`. Schema (also documented inline in that file):

```ts
interface Hack {
  id: string;            // unique slug → URL (#/hack/<id>)
  title: string;
  emoji: string;
  summary: string;
  tags: string[];        // powers search
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  time: string;          // e.g. '10 min'
  updated: string;       // ISO 'YYYY-MM-DD' (drives sort order)
  hero?: string;         // image path
  safety?: string[];     // rendered as a warning callout
  materials?: string[];  // rendered as a checklist
  why?: string[];        // paragraphs
  steps: { title: string; body: string; img?: string }[];
  sources?: { label: string; url: string }[];
  related?: { label: string; url: string }[];
}
```

Client state is ephemeral (current route + search query, derived from the URL hash).
Nothing is persisted server-side; the service worker caches assets for offline reading.

---

## 4. API & Interface Specifications

**No network API** (static app). The "interface" is the URL contract + component tree.

Routes (hash-based, so they work on any static host and offline):

| Route            | View        | Notes                          |
|------------------|-------------|--------------------------------|
| `#/`             | List        | hero + search + card grid      |
| `#/hack/<id>`    | Detail      | full guide; unknown id → list  |

UI component hierarchy:

```
App (#app)
├── ListView
│   ├── Hero (banner + subtitle)
│   ├── SearchBar (live filter)
│   └── Grid → Card* (emoji, title, summary, difficulty, time, updated)
└── DetailView
    ├── BackLink
    ├── DetailHeader (emoji, title, meta)
    ├── HeroImage?
    ├── Lead
    ├── Callout (safety)?
    ├── MaterialsChecklist?
    ├── WhyItWorks?
    ├── Steps (ordered) → Step* (title, body, image?)
    ├── RelatedLinks?
    └── Sources?
```

---

## 5. Security, Auth & Quality Standards

- **No auth / no PII / no server** → the largest attack surfaces simply don't exist.
- **XSS safety:** all hack fields are HTML-escaped via `esc()` before insertion. Only
  `url` fields are used as `href` (and open with `rel="noopener"`).
- **Content integrity:** author content lives in version control; every change is a
  reviewable diff. The deploy workflow fails the build if core files are missing.
- **Offline resilience:** service worker cache-first with runtime caching and cache
  versioning (`CACHE = 'life-hacks-v1'`).
- **Accessibility:** semantic landmarks, labelled search input, `alt` text, `<noscript>`
  fallback, high-contrast theme, large tap targets.
- **Testing strategy:** (1) HTML/JS validated in CI, (2) manual route + search smoke
  test, (3) Lighthouse PWA/Best-Practices pass before release. Because content is data,
  a malformed hack can't crash the app — missing optional fields are simply skipped.

---

## 6. Step-by-Step Implementation Execution Plan

**Phase 1 — Core Foundation (done)**
- App shell, dark/glow theme, hash router, list/detail rendering.
- Content registry (`hacks.js`) + schema documentation.

**Phase 2 — Feature Implementation (done)**
- Live search, difficulty/time/updated metadata, safety/materials/why/steps blocks.
- First hack authored: DIY capacitive stylus (with custom illustrations).
- PWA: manifest, icons, offline service worker.

**Phase 3 — Polish & Deployment (done)**
- Accessibility & social/OG tags, README + this DOCS.
- GitHub Actions → GitHub Pages auto-deploy with an integrity gate.
- Cross-link from the AFTERGLOW game to this page.

---

## ADR-1 — Why static-first instead of DB + auth

The brief mentioned a Node/Python backend, auth, and a DB. For a **read-only, single-
author knowledge base**, adding those now would add cost, latency, an attack surface,
and maintenance burden while delivering *nothing* the reader needs. A static PWA is
faster, free to host, offline-capable, and lets you publish a new hack with a one-line
data edit.

Clean upgrade path if requirements change:
- *User submissions / comments* → add a serverless function + a hosted DB (e.g. a
  Postgres/Supabase table mirroring the `Hack` schema) and swap `hacks.js` for a
  `fetch('/api/hacks')`. The component layer doesn't change.
- *Auth* → drop in an identity provider (OAuth) only for the author/admin submission
  flow; public reading stays anonymous.

The architecture is designed so that migration is additive, never a rewrite.
