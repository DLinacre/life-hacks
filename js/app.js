/**
 * LIFE HACKS — app shell.
 * Hash-router + list/detail rendering + live search + category filters +
 * favourites (❤️) + per-guide share/copy/print + related hacks.
 * Vanilla ES modules, no framework, no build. Content comes from js/hacks.js.
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

/* ---------- favourites (localStorage) ---------- */
const FAV_KEY = 'life-hacks-favs';
const loadFavs = () => { try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch { return []; } };
const saveFavs = a => { try { localStorage.setItem(FAV_KEY, JSON.stringify(a)); } catch {} };
const isFav = id => loadFavs().includes(id);
function toggleFav(id) {
  const f = loadFavs();
  const i = f.indexOf(id);
  if (i >= 0) f.splice(i, 1); else f.push(id);
  saveFavs(f);
  return i < 0; // true if now favourited
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg) {
  let el = $('#toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1600);
}

/* ---------- categories ---------- */
const CATS = ['All', 'Tech', 'Home', 'Money', 'Maker'];
const CAT_EMOJI = { All: '✨', Tech: '💻', Home: '🏠', Money: '💸', Maker: '🔧', Saved: '❤️' };
let activeFilter = 'All';   // 'All' | category | 'Saved'
let currentQuery = '';

/* ---------- list view ---------- */
function matches(h, q) {
  if (!q) return true;
  return (h.title + ' ' + h.summary + ' ' + (h.tags || []).join(' ') + ' ' + (h.category || ''))
    .toLowerCase().includes(q);
}
function passesFilter(h) {
  if (activeFilter === 'All') return true;
  if (activeFilter === 'Saved') return isFav(h.id);
  return (h.category || '') === activeFilter;
}
function filteredHacks() {
  const q = currentQuery.trim().toLowerCase();
  return HACKS
    .filter(h => passesFilter(h) && matches(h, q))
    .sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
}

function cardHTML(h) {
  const fav = isFav(h.id);
  return `
    <div class="card">
      <a class="card-link" href="#/hack/${esc(h.id)}" aria-label="${esc(h.title)}">
        <div class="card-emoji" aria-hidden="true">${h.emoji || '💡'}</div>
        <div class="card-body">
          <h2 class="card-title">${esc(h.title)}</h2>
          <p class="card-summary">${esc(h.summary || '')}</p>
          <div class="card-meta">
            ${h.category ? `<span class="chip cat">${CAT_EMOJI[h.category] || ''} ${esc(h.category)}</span>` : ''}
            <span class="badge ${diffClass(h.difficulty)}">${esc(h.difficulty || 'Easy')}</span>
            ${h.time ? `<span class="chip">⏱ ${esc(h.time)}</span>` : ''}
          </div>
        </div>
      </a>
      <button class="fav-btn ${fav ? 'on' : ''}" data-fav="${esc(h.id)}"
              aria-label="${fav ? 'Remove from saved' : 'Save this hack'}" title="${fav ? 'Saved' : 'Save'}">${fav ? '❤️' : '🤍'}</button>
    </div>`;
}

function chipsHTML() {
  const savedCount = loadFavs().length;
  const tabs = CATS.map(c => {
    const n = c === 'All' ? HACKS.length : HACKS.filter(h => h.category === c).length;
    return `<button class="filter-chip ${activeFilter === c ? 'active' : ''}" data-filter="${c}">${CAT_EMOJI[c] || ''} ${c} <span class="fc-count">${n}</span></button>`;
  }).join('');
  const saved = `<button class="filter-chip ${activeFilter === 'Saved' ? 'active' : ''}" data-filter="Saved">❤️ Saved <span class="fc-count">${savedCount}</span></button>`;
  return `<div class="filters">${tabs}${saved}</div>`;
}

function renderGrid() {
  const list = filteredHacks();
  const g = $('#grid');
  if (!g) return;
  if (!list.length) {
    const why = activeFilter === 'Saved'
      ? 'No saved hacks yet — tap the 🤍 on any hack to save it here.'
      : `Nothing matches${currentQuery ? ` “${esc(currentQuery)}”` : ''}${activeFilter !== 'All' ? ` in ${esc(activeFilter)}` : ''}. Try another filter or word.`;
    g.innerHTML = `<p class="empty">${why}</p>`;
    return;
  }
  g.innerHTML = list.map(cardHTML).join('');
  bindFavButtons(g);
}

function bindFavButtons(scope) {
  scope.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const nowFav = toggleFav(btn.dataset.fav);
      toast(nowFav ? 'Saved ❤️' : 'Removed');
      // refresh chips (counts) and grid
      const chips = $('#chips'); if (chips) chips.innerHTML = chipsHTML();
      bindFilterChips();
      renderGrid();
    });
  });
}

function bindFilterChips() {
  document.querySelectorAll('#chips [data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll('#chips [data-filter]').forEach(b => b.classList.toggle('active', b === btn));
      renderGrid();
    });
  });
}

function renderList() {
  app.innerHTML = `
    <section class="hero">
      <img class="hero-banner" src="assets/banner.png" alt="Life Hacks" />
      <p class="hero-sub">Clever, well-explained fixes for everyday problems — added to over time.</p>
    </section>
    <div class="searchbar">
      <span class="s-icon" aria-hidden="true">🔎</span>
      <input id="search" type="search" inputmode="search" placeholder="Search hacks…"
             value="${esc(currentQuery)}" aria-label="Search life hacks" autocomplete="off" />
    </div>
    <div id="chips">${chipsHTML()}</div>
    <div class="grid" id="grid"></div>
  ` + footer();

  bindFilterChips();
  renderGrid();

  const search = $('#search');
  if (search) {
    search.addEventListener('input', e => { currentQuery = e.target.value; renderGrid(); });
  }
  window.scrollTo(0, 0);
}

/* ---------- related hacks ---------- */
function relatedHacks(h, n = 3) {
  const scored = HACKS.filter(x => x.id !== h.id).map(x => {
    let s = 0;
    if (x.category === h.category) s += 3;
    const t1 = new Set(h.tags || []); (x.tags || []).forEach(t => { if (t1.has(t)) s += 1; });
    return { x, s };
  }).sort((a, b) => b.s - a.s || (b.x.updated || '').localeCompare(a.x.updated || ''));
  return scored.slice(0, n).map(o => o.x);
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
        ${h.related.map(r => `<a class="btn primary" href="${esc(r.url)}" ${/^https?:/.test(r.url) ? 'target="_blank" rel="noopener"' : ''}>${esc(r.label)}</a>`).join('')}
      </div>
    </section>` : '';

  const sources = (h.sources && h.sources.length) ? `
    <section class="block sources">
      <h2>Sources</h2>
      <ul>${h.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join('')}</ul>
    </section>` : '';

  const rel = relatedHacks(h);
  const moreHacks = rel.length ? `
    <section class="block no-print">
      <h2>More like this</h2>
      <div class="grid mini">${rel.map(cardHTML).join('')}</div>
    </section>` : '';

  const fav = isFav(h.id);

  app.innerHTML = `
    <div class="detail">
      <a class="back no-print" href="#/">← All hacks</a>
      <header class="detail-head">
        <div class="detail-emoji" aria-hidden="true">${h.emoji || '💡'}</div>
        <div style="flex:1">
          <h1>${esc(h.title)}</h1>
          <div class="card-meta">
            ${h.category ? `<span class="chip cat">${CAT_EMOJI[h.category] || ''} ${esc(h.category)}</span>` : ''}
            <span class="badge ${diffClass(h.difficulty)}">${esc(h.difficulty || 'Easy')}</span>
            ${h.time ? `<span class="chip">⏱ ${esc(h.time)}</span>` : ''}
            ${h.updated ? `<span class="chip">Updated ${esc(fmtDate(h.updated))}</span>` : ''}
          </div>
        </div>
      </header>

      <div class="action-row no-print">
        <button class="act ${fav ? 'on' : ''}" id="actFav">${fav ? '❤️ Saved' : '🤍 Save'}</button>
        <button class="act" id="actShare">🔗 Share</button>
        <button class="act" id="actPrint">🖨️ Print</button>
      </div>

      ${h.hero ? `<img class="detail-hero" src="${esc(h.hero)}" alt="${esc(h.title)}" />` : ''}
      ${h.summary ? `<p class="lead">${esc(h.summary)}</p>` : ''}
      ${safety}
      ${materials}
      ${why}
      ${steps}
      ${related}
      ${sources}
      ${moreHacks}
      <a class="back bottom no-print" href="#/">← All hacks</a>
    </div>` + footer();

  // wire actions
  const shareUrl = location.href;
  $('#actFav').addEventListener('click', () => {
    const nowFav = toggleFav(h.id);
    const b = $('#actFav');
    b.classList.toggle('on', nowFav);
    b.textContent = nowFav ? '❤️ Saved' : '🤍 Save';
    toast(nowFav ? 'Saved ❤️' : 'Removed');
  });
  $('#actShare').addEventListener('click', async () => {
    const data = { title: `${h.title} · Life Hacks`, text: h.summary || h.title, url: shareUrl };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(shareUrl);
      toast('Link copied 🔗');
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      try { await navigator.clipboard.writeText(shareUrl); toast('Link copied 🔗'); }
      catch { toast('Could not share'); }
    }
  });
  $('#actPrint').addEventListener('click', () => window.print());

  // related mini-cards use the same fav buttons
  bindFavButtons(app);
  window.scrollTo(0, 0);
}

function footer() {
  return `<footer class="site-foot no-print">
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
