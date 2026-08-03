/**
 * LIFE HACKS — app shell.
 * Hash-router + list/detail rendering + live search. Vanilla ES modules,
 * no framework, no build. Content comes from js/hacks.js.
 */
import { HACKS } from './hacks.js';

const $ = sel => document.querySelector(sel);
const app = $('#app');

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const byId = id => HACKS.find(h => h.id === id);
const fmtDate = iso => {
  const d = new Date(iso + 'T00:00:00');
  return isNaN(d) ? iso : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
};
const diffClass = d => ({ Easy: 'd-easy', Medium: 'd-med', Advanced: 'd-adv' }[d] || 'd-easy');

/* ---------- list view ---------- */
function renderList(query = '') {
  const q = query.trim().toLowerCase();
  const list = HACKS
    .filter(h => !q || (h.title + ' ' + h.summary + ' ' + (h.tags || []).join(' ')).toLowerCase().includes(q))
    .sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));

  const hero = `
    <section class="hero">
      <img class="hero-banner" src="assets/banner.png" alt="Life Hacks" />
      <p class="hero-sub">Clever, well-explained fixes for everyday problems — added to over time.</p>
    </section>
    <div class="searchbar">
      <span class="s-icon" aria-hidden="true">🔎</span>
      <input id="search" type="search" inputmode="search" placeholder="Search hacks…"
             value="${esc(query)}" aria-label="Search life hacks" autocomplete="off" />
    </div>`;

  const cards = list.length ? list.map(h => `
    <a class="card" href="#/hack/${esc(h.id)}" aria-label="${esc(h.title)}">
      <div class="card-emoji" aria-hidden="true">${h.emoji || '💡'}</div>
      <div class="card-body">
        <h2 class="card-title">${esc(h.title)}</h2>
        <p class="card-summary">${esc(h.summary || '')}</p>
        <div class="card-meta">
          <span class="badge ${diffClass(h.difficulty)}">${esc(h.difficulty || 'Easy')}</span>
          ${h.time ? `<span class="chip">⏱ ${esc(h.time)}</span>` : ''}
          ${h.updated ? `<span class="chip">Updated ${esc(fmtDate(h.updated))}</span>` : ''}
        </div>
      </div>
      <span class="card-arrow" aria-hidden="true">→</span>
    </a>`).join('')
    : `<p class="empty">No hacks match “${esc(query)}”. Try another word.</p>`;

  app.innerHTML = hero + `<div class="grid">${cards}</div>` + footer();

  const search = $('#search');
  if (search) {
    search.addEventListener('input', e => {
      const val = e.target.value;
      // update just the grid so the input keeps focus
      const g = $('.grid');
      const f = HACKS.filter(h => {
        const v = val.trim().toLowerCase();
        return !v || (h.title + ' ' + h.summary + ' ' + (h.tags || []).join(' ')).toLowerCase().includes(v);
      }).sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
      g.innerHTML = f.length ? f.map(h => `
        <a class="card" href="#/hack/${esc(h.id)}">
          <div class="card-emoji">${h.emoji || '💡'}</div>
          <div class="card-body">
            <h2 class="card-title">${esc(h.title)}</h2>
            <p class="card-summary">${esc(h.summary || '')}</p>
            <div class="card-meta">
              <span class="badge ${diffClass(h.difficulty)}">${esc(h.difficulty || 'Easy')}</span>
              ${h.time ? `<span class="chip">⏱ ${esc(h.time)}</span>` : ''}
              ${h.updated ? `<span class="chip">Updated ${esc(fmtDate(h.updated))}</span>` : ''}
            </div>
          </div>
          <span class="card-arrow">→</span>
        </a>`).join('')
        : `<p class="empty">No hacks match “${esc(val)}”. Try another word.</p>`;
    });
  }
  window.scrollTo(0, 0);
}

/* ---------- detail view ---------- */
function renderHack(id) {
  const h = byId(id);
  if (!h) { location.hash = '#/'; return; }
  document.title = `${h.title} · Life Hacks`;

  const safety = (h.safety && h.safety.length) ? `
    <div class="callout warn">
      <div class="callout-title">⚠️ Safety first</div>
      <ul>${h.safety.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
    </div>` : '';

  const materials = (h.materials && h.materials.length) ? `
    <section class="block">
      <h2>What you'll need</h2>
      <ul class="checklist">${h.materials.map(m => `<li>${esc(m)}</li>`).join('')}</ul>
    </section>` : '';

  const why = (h.why && h.why.length) ? `
    <section class="block">
      <h2>Why it works better</h2>
      ${h.why.map(p => `<p>${esc(p)}</p>`).join('')}
    </section>` : '';

  const steps = (h.steps && h.steps.length) ? `
    <section class="block">
      <h2>Step-by-step</h2>
      <ol class="steps">
        ${h.steps.map(s => `
          <li class="step">
            <div class="step-head">${esc(s.title)}</div>
            <p>${esc(s.body)}</p>
            ${s.img ? `<img class="step-img" loading="lazy" src="${esc(s.img)}" alt="${esc(s.title)}" />` : ''}
          </li>`).join('')}
      </ol>
    </section>` : '';

  const related = (h.related && h.related.length) ? `
    <section class="block">
      <h2>Related</h2>
      <div class="linkrow">
        ${h.related.map(r => `<a class="btn primary" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.label)}</a>`).join('')}
      </div>
    </section>` : '';

  const sources = (h.sources && h.sources.length) ? `
    <section class="block sources">
      <h2>Sources</h2>
      <ul>${h.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join('')}</ul>
    </section>` : '';

  app.innerHTML = `
    <div class="detail">
      <a class="back" href="#/">← All hacks</a>
      <header class="detail-head">
        <div class="detail-emoji" aria-hidden="true">${h.emoji || '💡'}</div>
        <div>
          <h1>${esc(h.title)}</h1>
          <div class="card-meta">
            <span class="badge ${diffClass(h.difficulty)}">${esc(h.difficulty || 'Easy')}</span>
            ${h.time ? `<span class="chip">⏱ ${esc(h.time)}</span>` : ''}
            ${h.updated ? `<span class="chip">Updated ${esc(fmtDate(h.updated))}</span>` : ''}
          </div>
        </div>
      </header>
      ${h.hero ? `<img class="detail-hero" src="${esc(h.hero)}" alt="${esc(h.title)}" />` : ''}
      ${h.summary ? `<p class="lead">${esc(h.summary)}</p>` : ''}
      ${safety}
      ${materials}
      ${why}
      ${steps}
      ${related}
      ${sources}
      <a class="back bottom" href="#/">← All hacks</a>
    </div>` + footer();
  window.scrollTo(0, 0);
}

function footer() {
  return `<footer class="site-foot">
    <p>Life Hacks · a growing collection of clever fixes.</p>
    <p class="foot-links">
      <a href="https://dlinacre.github.io/afterglow/" target="_blank" rel="noopener">AFTERGLOW game</a> ·
      <a href="#/">Home</a>
    </p>
  </footer>`;
}

/* ---------- router ---------- */
function route() {
  const hash = location.hash || '#/';
  document.title = 'Life Hacks · clever fixes, clearly explained';
  const m = hash.match(/^#\/hack\/(.+)$/);
  if (m) renderHack(decodeURIComponent(m[1]));
  else renderList();
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
route();

/* ---------- PWA service worker ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => { /* offline SW optional */ });
  });
}
