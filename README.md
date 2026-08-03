<p align="center">
  <img src="assets/banner.png" alt="Life Hacks — clever fixes, clearly explained" width="100%">
</p>

<h1 align="center">🚀 Life Hacks</h1>

<p align="center">
  <strong>Clever, well-explained fixes for everyday problems — a collection that keeps growing.</strong>
</p>

<p align="center">
  <a href="https://DLinacre.github.io/life-hacks/"><b>▶ Open the site</b></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/type-PWA-8f5bff?style=flat-square" alt="PWA">
  <img src="https://img.shields.io/badge/offline-ready-1bbd7e?style=flat-square" alt="Offline ready">
  <img src="https://img.shields.io/badge/dependencies-none-1bbd7e?style=flat-square" alt="No dependencies">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT license">
</p>

---

## What is this?

A fast, installable **Progressive Web App** that hosts practical life hacks — each with
materials, safety notes, the "why", and clear step-by-step instructions (with pictures).
It's built to **grow over time**: adding a new hack is a single data edit, no build step.

**First hack:** a DIY capacitive **stylus** you can make from an old clicky pen and a
glass electronics fuse — the perfect dry, sturdy "pen" for the
[AFTERGLOW](https://dlinacre.github.io/afterglow/) light-painting game.

## Features

- 📚 Card list + **live search**
- 📖 Rich guide pages: safety callout, materials checklist, "why it works", numbered
  steps with images, related links & sources
- 📱 **PWA** — installable to your home screen, works **offline**
- 🪶 **Zero dependencies** — pure HTML/CSS/JS, no build tooling
- ♿ Accessible, mobile-first, dark "glow" theme

## Add a new hack (30 seconds)

Open [`js/hacks.js`](js/hacks.js) and append one object to the `HACKS` array:

```js
{
  id: 'sharpen-scissors-with-foil',
  title: 'Sharpen scissors with kitchen foil',
  emoji: '✂️',
  summary: 'Bring dull scissors back to life in under a minute.',
  tags: ['scissors', 'foil', 'sharpen', 'kitchen'],
  difficulty: 'Easy',
  time: '2 min',
  updated: '2026-08-04',
  steps: [
    { title: 'Fold the foil', body: 'Fold a sheet of foil into 6–8 layers.' },
    { title: 'Cut through it', body: 'Make 10–15 full-length cuts through the foil.' }
  ]
}
```

Commit and it's live. The full schema is documented at the top of that file and in
[`DOCS.md`](DOCS.md).

## Run locally

It's static — just open `index.html`, or serve it (recommended so the service worker
and module imports behave exactly like production):

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Architecture

Content-first static PWA. Full PRD, folder tree, data model, interface spec, security
notes and the execution plan live in **[DOCS.md](DOCS.md)** — including an ADR explaining
why static-first is the right call here (and the clean upgrade path to a backend if
submissions/auth are ever needed).

## Deployment

Every push to `main` auto-deploys to **GitHub Pages** via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

[MIT](LICENSE) © David Linacre
