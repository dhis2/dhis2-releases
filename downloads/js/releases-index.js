// ─── Config ────────────────────────────────────────────────────────────────
const USE_MOCK = false;
const STABLE_JSON   = 'v1/versions/stable.json';
const EOS_JSON      = 'v1/versions/eos.json';
const EOS_NOTICE    = "Ongoing build of this version's branch after end of support. EOS builds include selected important fixes made since the last patch release. Fixes are minimal and these builds are not regression tested.";
const RELEASES_BASE = 'https://releases.dhis2.org/';
const S3_BASE       = 'https://s3-eu-west-1.amazonaws.com/releases.dhis2.org/?prefix=';

// ─── Mock S3 data ──────────────────────────────────────────────────────────
function mkXml(items) {
  const body = items.map(({ key, size, mod }) =>
    `<Contents><Key>${key}</Key><Size>${size}</Size><LastModified>${mod}</LastModified></Contents>`
  ).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">${body}</ListBucketResult>`;
}

const MOCK_S3 = {
  '42/dhis2-stable': mkXml([
    { key: '42/dhis2-stable-latest.war',       size: 349560832, mod: '2026-01-30T10:05:00.000Z' },
    { key: '42/dhis2-stable-42.4.0.war',        size: 349560832, mod: '2026-01-30T10:00:00.000Z' },
    { key: '42/dhis2-stable-42.4.0-rc2.war',    size: 349100000, mod: '2026-01-22T14:00:00.000Z' },
    { key: '42/dhis2-stable-42.4.0-rc1.war',    size: 348800000, mod: '2026-01-15T10:00:00.000Z' },
    { key: '42/dhis2-stable-42.3.1.war',        size: 345800000, mod: '2025-11-18T09:00:00.000Z' },
    { key: '42/dhis2-stable-42.3.0.war',        size: 345600000, mod: '2025-11-04T11:00:00.000Z' },
    { key: '42/dhis2-stable-42.3.0-rc1.war',    size: 345200000, mod: '2025-10-28T09:00:00.000Z' },
    { key: '42/dhis2-stable-42.2.0.war',        size: 345900000, mod: '2025-09-24T08:00:00.000Z' },
    { key: '42/dhis2-stable-42.1.0.war',        size: 346000000, mod: '2025-07-04T10:00:00.000Z' },
    { key: '42/dhis2-stable-42.0.0.war',        size: 309291008, mod: '2025-05-07T10:00:00.000Z' },
  ]),
  '41/dhis2-stable': mkXml([
    { key: '41/dhis2-stable-latest.war',       size: 320000000, mod: '2025-10-15T12:00:00.000Z' },
    { key: '41/dhis2-stable-41.8.0.war',        size: 320000000, mod: '2025-10-15T11:00:00.000Z' },
    { key: '41/dhis2-stable-41.7.0.war',        size: 318000000, mod: '2025-08-20T09:00:00.000Z' },
    { key: '41/dhis2-stable-41.6.0.war',        size: 317000000, mod: '2025-06-25T10:00:00.000Z' },
    { key: '41/dhis2-stable-41.6.0-rc1.war',    size: 316500000, mod: '2025-06-18T10:00:00.000Z' },
    { key: '41/dhis2-stable-41.5.0.war',        size: 316000000, mod: '2025-04-10T09:00:00.000Z' },
    { key: '41/dhis2-stable-41.4.0.war',        size: 315000000, mod: '2025-02-12T10:00:00.000Z' },
  ]),
  '40/dhis2-stable': mkXml([
    { key: '40/dhis2-stable-latest.war',       size: 300000000, mod: '2025-04-01T09:00:00.000Z' },
    { key: '40/dhis2-stable-40.12.0.war',       size: 300000000, mod: '2025-04-01T08:00:00.000Z' },
    { key: '40/dhis2-stable-40.11.0.war',       size: 299000000, mod: '2025-02-15T10:00:00.000Z' },
    { key: '40/dhis2-stable-40.10.0-rc1.war',   size: 298500000, mod: '2025-01-20T10:00:00.000Z' },
  ]),
  '2.39/dhis2-stable': mkXml([
    { key: '2.39/dhis2-stable-2.39.6.war',     size: 286000000, mod: '2024-08-01T09:00:00.000Z' },
    { key: '2.39/dhis2-stable-2.39.5.war',     size: 285000000, mod: '2024-05-10T10:00:00.000Z' },
  ]),
  '2.42/dev': mkXml([
    { key: '2.42/dev/dhis2-dev-2.42.war',    size: 362000000, mod: '2026-05-04T08:30:00.000Z' },
  ]),
  '2.41/dev': mkXml([
    { key: '2.41/dev/dhis2-dev-2.41.war',    size: 340000000, mod: '2026-05-03T09:15:00.000Z' },
  ]),
  '2.40/dev': mkXml([
    { key: '2.40/dev/dhis2-dev-2.40.war',    size: 315000000, mod: '2026-04-30T11:00:00.000Z' },
  ]),
  '2.39/dev': mkXml([
    { key: '2.39/dev/dhis2-dev-2.39.war',    size: 315000000, mod: '2026-04-30T11:00:00.000Z' },
  ]),
  '2.43/dev': mkXml([
    { key: '2.43/dev/dhis2-dev-2.43.war',    size: 375000000, mod: '2026-05-05T07:10:00.000Z' },
  ]),
  'dev': mkXml([
    { key: 'dev/dhis.war',    size: 368000000, mod: '2026-05-05T06:45:00.000Z' },
  ]),
};

// ─── Helpers ───────────────────────────────────────────────────────────────
function esc(s) {
  return s == null ? '' : String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function escAttr(s) { return esc(s).replace(/"/g, '&quot;'); }
function fmtDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  if (isNaN(dt)) return esc(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const day = String(dt.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
function fmtDateTime(d) {
  if (!d) return '—';
  const dt = new Date(d);
  if (isNaN(dt)) return esc(d);
  const y  = dt.getFullYear();
  const mo = String(dt.getMonth() + 1).padStart(2, '0');
  const da = String(dt.getDate()).padStart(2, '0');
  const h  = String(dt.getHours()).padStart(2, '0');
  const mi = String(dt.getMinutes()).padStart(2, '0');
  const s  = String(dt.getSeconds()).padStart(2, '0');
  return `${y}-${mo}-${da} ${h}:${mi}:${s}`;
}
function formatBytes(n) {
  if (!n) return '—';
  const u = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(n) / Math.log(1024)), u.length - 1);
  return (n / Math.pow(1024, i)).toFixed(1) + ' ' + u[i];
}

// S3 path prefix helpers — versions ≥ 40 use short form ("42"), older keep "2.39"
function versionBase(name) {
  const n = parseInt(name.replace(/^2\./, ''), 10);
  return n >= 40 ? String(n) : name;
}
function stablePrefix(name) { return `${versionBase(name)}/dhis2-stable`; }
function devPrefix(name)    { return `${name}/dev`; }

// ─── S3 fetch ──────────────────────────────────────────────────────────────
async function s3Fetch(prefix) {
  if (USE_MOCK) {
    return MOCK_S3[prefix]
      ?? '<?xml version="1.0" encoding="UTF-8"?><ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"></ListBucketResult>';
  }
  const res = await fetch(`${S3_BASE}${prefix}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function parseS3(xml) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  return [...doc.getElementsByTagName('Contents')].map(el => ({
    key:          el.querySelector('Key')?.textContent ?? '',
    size:         parseInt(el.querySelector('Size')?.textContent ?? '0', 10),
    lastModified: el.querySelector('LastModified')?.textContent ?? '',
  }));
}

// ─── SHA256 hash toggle ────────────────────────────────────────────────────
function toggleHash(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none';
  const label = document.getElementById(id.replace('hash', 'label'));
  if (label) label.classList.toggle('expanded');
}
window.toggleHash = toggleHash;

// ─── Sortable tables ───────────────────────────────────────────────────────
function makeSortable(table) {
  const ths = table.querySelectorAll('thead th');
  ths.forEach((th, col) => {
    th.style.cursor = 'pointer';
    th.setAttribute('title', 'Click to sort');
    let asc = true;
    th.addEventListener('click', () => {
      const tbody = table.querySelector('tbody');
      const rows  = [...tbody.querySelectorAll('tr')].filter(r => !r.hasAttribute('data-pin'));
      const pinned = [...tbody.querySelectorAll('tr[data-pin]')];
      rows.sort((a, b) => {
        const va = a.cells[col]?.textContent.trim() ?? '';
        const vb = b.cells[col]?.textContent.trim() ?? '';
        const na = parseFloat(va.replace(/[^0-9.]/g, ''));
        const nb = parseFloat(vb.replace(/[^0-9.]/g, ''));
        const cmp = (!isNaN(na) && !isNaN(nb)) ? na - nb : va.localeCompare(vb);
        return asc ? cmp : -cmp;
      });
      ths.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
      th.classList.add(asc ? 'sort-asc' : 'sort-desc');
      asc = !asc;
      tbody.innerHTML = '';
      pinned.forEach(r => tbody.appendChild(r));
      rows.forEach(r => tbody.appendChild(r));
    });
  });
}

// ─── Card shell ────────────────────────────────────────────────────────────
function cardShell(headerHtml, bodyHtml) {
  return `<div class="card open">
    <header class="card-header">${headerHtml}</header>
    <div class="card-body unbounded"><div class="card-inner">${bodyHtml}</div></div>
  </div>`;
}

// ─── Render: stable JSON patch table ──────────────────────────────────────
function renderStableJson(release, eos, mount) {
  const patches = (release.patchVersions || []).slice();
  if (!patches.length) { mount.innerHTML = '<p>No patch versions found.</p>'; return; }

  const maxHotfix = {};
  patches.forEach(p => {
    const ver = p.version ?? 0, hv = p.hotfixVersion ?? 0;
    if (!(ver in maxHotfix) || hv > maxHotfix[ver]) maxHotfix[ver] = hv;
  });

  const rows = patches.slice().reverse().map(patch => {
    const hv  = patch.hotfixVersion ?? 0;
    const ver = patch.version ?? 0;
    const superseded = patch.superseded || hv < (maxHotfix[ver] ?? 0);
    const isHotfix   = patch.hotfix || patch.hotfixVersion;
    const cls = [superseded && 'superseded-dhis2-dl', isHotfix && 'hotfix-row'].filter(Boolean).join(' ');
    const hotfixBadge = isHotfix ? `<span class="badge-hotfix">Hotfix</span>` : '';

    let warningBadge = '';
    if (patch.warning) {
      const w   = patch.warning;
      const sev = esc(w.severity || 'warning');
      const rec = w.recommendation ? ` — ${esc(w.recommendation)}` : '';
      const inner = `<i class="fa-solid fa-triangle-exclamation"></i> Known issue${rec}`;
      warningBadge = w.detailsUrl
        ? `<a class="badge-warning badge-warning-${sev}" href="${escAttr(w.detailsUrl)}" target="_blank" rel="noopener" title="${escAttr(w.summary || '')}">${inner}</a>`
        : `<span class="badge-warning badge-warning-${sev}" title="${escAttr(w.summary || '')}">${inner}</span>`;
    }

    return `<tr${cls ? ` class="${esc(cls)}"` : ''}>
      <td>${esc(patch.displayName || patch.name)}</td>
      <td>${fmtDate(patch.releaseDate)}</td>
      <td>
        <a class="button small" href="${escAttr(patch.url || '')}">⬇︎ ${esc(patch.displayName || patch.name)}</a>
        <span class="dc-download-hash" id="label${escAttr(patch.name)}" onclick="toggleHash('hash${escAttr(patch.name)}')">SHA256SUM</span>${hotfixBadge}${warningBadge}
        <span class="dc-hash" id="hash${escAttr(patch.name)}">${esc(patch.sha256 || '')}</span>
      </td>
      <td>${esc(patch.fileSize || patch.downloadSize || '—')}</td>
      <td><a class="action-icon" href="https://dhis2.github.io/dhis2-releases/releases/${escAttr(release.name)}/ReleaseNote-${escAttr(patch.name)}.html" title="Release note"><i class="fa-solid fa-file-lines"></i><span class="icon-label">Release note</span></a></td>
    </tr>`;
  }).join('');

  const eosRow = eos ? `<tr class="eos-row" data-pin>
      <td>EOS build</td>
      <td>${fmtDate(eos.buildDate)}</td>
      <td>
        <a class="button small" href="${escAttr(eos.url)}">⬇︎ ${esc(release.displayName || release.name)} EOS build</a>
        <span class="dc-download-hash" id="label${escAttr(release.name)}-eos" onclick="toggleHash('hash${escAttr(release.name)}-eos')">SHA256SUM</span>
        <span class="dc-hash" id="hash${escAttr(release.name)}-eos">${esc(eos.sha256)}</span>
      </td>
      <td>${esc(eos.fileSize)}</td>
      <td></td>
    </tr>
    <tr class="eos-row eos-note-row" data-pin><td colspan="5"><span class="eos-note">${EOS_NOTICE}</span></td></tr>` : '';

  const supportBadge = release.supported
    ? `<span class="badge-supported">Supported</span>`
    : `<span class="badge-unsupported">No longer maintained</span>`;
  const eosBadge = eos ? `<span class="badge-eos" title="${escAttr(EOS_NOTICE)}">EOS build</span>` : '';

  const header = `
    <div class="header-left">
      <div class="ver">${esc(release.displayName || release.name)} ${supportBadge}${eosBadge}</div>
      <div class="date">Introduced: ${fmtDate(release.releaseDate)}</div>
    </div>
    <div class="header-right">
      <div class="header-icons">
        <a class="action-icon" href="https://dhis2.github.io/dhis2-releases/releases/${escAttr(release.name)}" title="Upgrade notes"><i class="fa-solid fa-clipboard-list"></i><span class="icon-label">Upgrade</span></a>
        <a class="action-icon" href="https://dhis2.github.io/dhis2-releases/releases/${escAttr(release.name)}/ReleaseNote-${escAttr(release.name)}.html" title="Feature overview"><i class="fa-solid fa-face-grin-stars"></i><span class="icon-label">Feature overview</span></a>
      </div>
    </div>`;

  const body = `<table class="patch-table">
    <thead><tr><th>Patch</th><th>Release date</th><th>Production WAR file</th><th>Size</th><th>Notes</th></tr></thead>
    <tbody>${eosRow}${rows}</tbody>
  </table>`;

  mount.innerHTML = cardShell(header, body);
  const t = mount.querySelector('table');
  if (t) makeSortable(t);
}

// ─── Render: stable S3 raw view ────────────────────────────────────────────
async function renderStableS3(release, mount) {
  mount.innerHTML = `<span class="loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading S3 file listing…</span>`;
  try {
    const xml   = await s3Fetch(stablePrefix(release.name));
    const files = parseS3(xml)
      .filter(f => f.key.endsWith('.war'))
      .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

    const supportBadge = release.next
      ? ''
      : release.supported
        ? `<span class="badge-supported">Supported</span>`
        : `<span class="badge-unsupported">No longer maintained</span>`;

    const rows = files.length
      ? files.map(f => {
          const filename = f.key.split('/').pop();
          const isRc     = /[-_.]rc\d*/i.test(filename);
          const isLatest = filename.includes('-latest.');
          const rcBadge  = isRc     ? `<span class="badge-rc">RC</span>`           : '';
          const ltBadge  = isLatest ? `<span class="badge-symlink">symlink</span>` : '';
          return `<tr>
            <td><a href="${escAttr(RELEASES_BASE + f.key)}">${esc(f.key)}</a>${rcBadge}${ltBadge}</td>
            <td>${fmtDateTime(f.lastModified)}</td>
            <td>${formatBytes(f.size)}</td>
          </tr>`;
        }).join('')
      : `<tr><td colspan="3" style="text-align:center;color:var(--muted);padding:1rem">No .war files found</td></tr>`;

    const header = `
      <div class="header-left">
        <div class="ver">${esc(release.displayName || release.name)} ${supportBadge}</div>
        <div class="date">S3 filesystem view — all builds including release candidates</div>
      </div>`;

    const body = `
      <p class="s3-note">All <code>.war</code> files on S3 for this version, newest first. Includes release candidates and any builds not reflected in <code>stable.json</code>.</p>
      <table class="patch-table">
        <thead><tr><th>File</th><th>Date</th><th>Size</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`;

    mount.innerHTML = cardShell(header, body);
    const t = mount.querySelector('table');
    if (t) makeSortable(t);
  } catch (e) {
    mount.innerHTML = `<p class="error">Failed to load S3 listing: ${esc(e.message)}</p>`;
  }
}

// ─── Render: dev table ─────────────────────────────────────────────────────
async function renderDev(releases, mount) {
  mount.innerHTML = `<span class="loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading development builds…</span>`;
  try {
    // Master (cutting-edge) build
    let masterBuild = '—', masterSize = '—';
    try {
      const xml   = await s3Fetch('dev');
      const files = parseS3(xml).filter(f => f.key.endsWith('.war'));
      const f     = files[0] || null;
      if (f) { masterBuild = fmtDateTime(f.lastModified); masterSize = formatBytes(f.size); }
    } catch { /* leave dashes */ }
    const masterRow = `<tr data-pin>
      <td><strong>master</strong></td>
      <td>${masterBuild}</td>
      <td>${masterSize}</td>
      <td><a href="${escAttr(RELEASES_BASE + 'dev/dhis.war')}">dev/dhis.war</a></td>
      <td><code class="docker-code">docker pull dhis2/core-dev:latest</code></td>
    </tr>`;

    // Discover versions: probe stable.json range + 3 ahead, keep those with files on S3
    const stableNums = releases
      .map(r => parseInt(r.name.replace(/^2\./, ''), 10))
      .filter(n => !isNaN(n));
    const maxNum = Math.max(...stableNums);
    const candidates = [...new Set([...stableNums.map(n => `2.${n}`),
      `2.${maxNum + 1}`, `2.${maxNum + 2}`, `2.${maxNum + 3}`])]
      .sort((a, b) => parseInt(b.replace(/^2\./, ''), 10) - parseInt(a.replace(/^2\./, ''), 10));

    const rows = (await Promise.all(candidates.map(async vname => {
      try {
        const xml   = await s3Fetch(devPrefix(vname));
        const files = parseS3(xml)
          .filter(f => f.key.endsWith('.war'))
          .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
        const latest = files[0];
        if (!latest) return null;
        const dlPath = `${devPrefix(vname)}/dhis2-dev-${vname}.war`;
        const dlUrl  = `${RELEASES_BASE}${dlPath}`;
        return `<tr>
          <td><strong>${esc(vname)}</strong></td>
          <td>${fmtDateTime(latest.lastModified)}</td>
          <td>${formatBytes(latest.size)}</td>
          <td><a href="${escAttr(dlUrl)}">${esc(dlPath)}</a></td>
          <td><code class="docker-code">docker pull dhis2/core-dev:${esc(vname)}</code></td>
        </tr>`;
      } catch { return null; }
    }))).filter(Boolean);

    const header = `
      <div class="header-left">
        <div class="ver">Development builds</div>
        <div class="date">Latest build per version discovered from S3</div>
      </div>`;

    const body = `<table class="patch-table">
      <thead><tr><th>Version</th><th>Last build</th><th>Size</th><th>Download</th><th>Docker</th></tr></thead>
      <tbody>${masterRow}${rows.join('')}</tbody>
    </table>`;

    mount.innerHTML = cardShell(header, body);
    const t = mount.querySelector('table');
    if (t) makeSortable(t);
  } catch (e) {
    mount.innerHTML = `<p class="error">Failed to load development builds: ${esc(e.message)}</p>`;
  }
}

// ─── Init ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const stableContent = document.getElementById('stable-content');
  const devContent    = document.getElementById('dev-content');
  const verSelect     = document.getElementById('stable-ver-select');
  const supersededCb  = document.getElementById('show-superseded-cb');
  const rcCb          = document.getElementById('show-rc-cb');

  if (USE_MOCK) {
    const banner = document.createElement('div');
    banner.className = 'mock-banner';
    banner.innerHTML = '<strong>Mock mode</strong> — S3 responses are simulated for local development. Set <code>USE_MOCK = false</code> to use live data.';
    document.querySelector('main').insertBefore(banner, document.querySelector('.channel-tabs'));
  }

  let releases;
  try {
    const res  = await fetch(STABLE_JSON);
    const data = await res.json();
    releases = (data.versions || []).slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  } catch {
    stableContent.innerHTML = `<p class="error">Failed to load version data.</p>`;
    return;
  }

  // EOS builds are optional extras: the stable view still renders without them
  let eosBuilds = {};
  try {
    const res = await fetch(EOS_JSON);
    if (res.ok) eosBuilds = await res.json();
  } catch (e) {
    console.warn(`Failed to load ${EOS_JSON}`, e);
  }

  // Prepend a synthetic "next" version entry for pre-release RC browsing
  const stableNums = releases.map(r => parseInt(r.name.replace(/^2\./, ''), 10)).filter(n => !isNaN(n));
  const nextName = String(Math.max(...stableNums) + 1);
  releases.push({ name: nextName, displayName: nextName, patchVersions: [], next: true });

  releases.forEach((r, i) => {
    const opt = document.createElement('option');
    opt.value = String(i);
    opt.textContent = r.next ? `v${r.displayName || r.name}` : (r.displayName || r.name);
    verSelect.appendChild(opt);
  });

  function renderStable() {
    const r = releases[parseInt(verSelect.value, 10)];
    if (!r) return;
    const hasPatches = (r.patchVersions || []).length > 0;
    const eos = r.supported ? null : eosBuilds[r.name];
    (rcCb.checked || !hasPatches) ? renderStableS3(r, stableContent) : renderStableJson(r, eos, stableContent);
  }

  verSelect.addEventListener('change', renderStable);
  rcCb.addEventListener('change', renderStable);
  supersededCb.addEventListener('change', () => {
    stableContent.classList.toggle('show-superseded', supersededCb.checked);
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.channel-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      document.getElementById(`panel-${btn.dataset.panel}`).classList.add('active');
    });
  });

  renderStable();
  renderDev(releases, devContent);
});
