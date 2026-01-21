// Single clean renderer for archive page
document.addEventListener('DOMContentLoaded', async () => {
  const URL = 'v1/versions/stable.json';
  const locale = (typeof getLocaleFromURL === 'function') ? getLocaleFromURL() : 'en';
  //const locale = "fr"; // for testing only
  const texts = (typeof localizationMap !== 'undefined' && localizationMap[locale]) ? localizationMap[locale] : (typeof localizationMap !== 'undefined' ? localizationMap['en'] : {});
  const mount = document.getElementById('downloads-content');
  const sel = document.getElementById('version-select');

  function esc(s){ return s == null ? '' : String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function escAttr(s){ return esc(s).replace(/"/g,'&quot;'); }
  function fmtDate(d){ if(!d) return '-'; const dt = new Date(d); if(isNaN(dt)) return esc(d); return dt.toLocaleDateString(undefined,{day:'2-digit',month:'short',year:'numeric'}); }

  let data;
  try{ const res = await fetch(URL); data = await res.json(); } catch(e){ mount.innerHTML = `<p class="error">Failed to load ${URL}</p>`; return; }

  const releases = (data.versions || []).slice().sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  // populate selector
  releases.forEach((r,i)=>{
    const opt = document.createElement('option');
    opt.value = String(i);
    opt.textContent = (r.displayName || `DHIS ${r.name}`) + (r.releaseDate ? ` — ${fmtDate(r.releaseDate)}` : '');
    sel.appendChild(opt);
  });
  sel.selectedIndex = 0;

  sel.addEventListener('change', ()=>{ renderCardExpanded(releases[parseInt(sel.value,10)], parseInt(sel.value,10)); });

  // add checkbox (inline next to version selector) to toggle visibility of superseded patches
  const headerBar = document.querySelector('.top');
  if (headerBar){
    const label = document.createElement('label');
    label.className = 'select-label';
    label.style.marginLeft = '0.5rem';
    label.innerHTML = `<input type="checkbox" id="show-superseded-checkbox"> ${texts.showSuperseded || 'Show superseded patches'}`;
    const selEl = document.getElementById('version-select');
    if (selEl && selEl.parentNode) selEl.parentNode.insertBefore(label, selEl.nextSibling);
    const sfCheckbox = document.getElementById('show-superseded-checkbox');
    if (sfCheckbox) sfCheckbox.addEventListener('change', (e)=>{
      if (e.target.checked) mount.classList.add('show-superseded'); else mount.classList.remove('show-superseded');
    });
  }

  function sizeOf(obj){ return obj && (obj.fileSize || obj.downloadSize || obj.size || '-'); }

  // Toggle visibility of sha256 hash elements (used by cards.js too)
  function toggleHash(id){
    const el = document.getElementById(id);
    if(!el) return;
    if (el.style.display === 'none' || el.style.display === '') el.style.display = 'block'; else el.style.display = 'none';
    const lid = id.replace('hash','label');
    const label = document.getElementById(lid);
    if(label) label.classList.toggle('expanded');
  }
  // expose to global scope for inline onclick handlers
  window.toggleHash = toggleHash;
  

  

  if(releases.length) renderCardExpanded(releases[sel.selectedIndex], sel.selectedIndex);
  else mount.innerHTML = '<p class="error">No releases found</p>';

  // --- Card + Expand renderer ---
  function getLatestPatch(r){
    const patches = r.patchVersions || [];
    const latest = r.latestPatchVersion;
    const latestHotfix = (r.latestHotfixVersion != null) ? r.latestHotfixVersion : 0;
    let p = null;
    if (latest != null) {
      p = patches.find(x => x.version === latest && ((x.hotfixVersion != null ? x.hotfixVersion : 0) === latestHotfix)) || null;
      if (!p) {
        const sameVersion = patches.filter(x => x.version === latest);
        if (sameVersion.length) p = sameVersion.reduce((a,b) => (((a.hotfixVersion||0) >= (b.hotfixVersion||0)) ? a : b));
      }
    }
    if (!p && patches.length) p = patches.slice().sort((a,b)=> new Date(b.releaseDate) - new Date(a.releaseDate))[0];
    return p;
  }

  

  // Render a single card expanded for the selected release
  function renderCardExpanded(r, idx){
    mount.innerHTML = '';
    const card = document.createElement('article');
    card.className = 'card open';
    card.id = `release-${idx}`;

    const p = getLatestPatch(r);
    const displayName = esc(r.displayName || r.name);
    const supportBadge = (r.supported) ? `<span class="badge-supported">${texts.supported || 'Supported'}</span>` : `<span class="badge-unsupported">${texts.noLongerMaintained || 'No longer maintained'}</span>`;
    const releaseDate = fmtDate(r.releaseDate);
    const primaryUrl = escAttr((p && p.url) || r.latestStableUrl || '');
    const primaryLabel = p ? (esc(p.displayName || p.name)) : `DHIS2 ${esc(r.name)}`;
    const sizeText = esc((p && (p.fileSize || p.downloadSize)) || r.fileSize || r.downloadSize || '-');

    const header = document.createElement('header');
    header.className = 'card-header';
    // build header icons for expanded single card (with labels)
    const upgradeUrl = `https://dhis2.github.io/dhis2-releases/releases/${escAttr(r.name)}`;
    const patchNotesUrl = p ? `https://dhis2.github.io/dhis2-releases/releases/${escAttr(r.name)}/ReleaseNote-${escAttr(p.name)}.html` : '';
      const dockerUrl = `https://hub.docker.com/r/dhis2/core/tags?page=1&amp;ordering=last_updated&amp;name=${escAttr(r.name)}`;
    const demoUrl = r.demoDB ? escAttr(r.demoDB) : '';
    const showDocker = (r.releaseDate && (new Date(r.releaseDate) > new Date('2021-10-31')));
    const featureOverviewUrl = `https://dhis2.github.io/dhis2-releases/releases/${escAttr(r.name)}/ReleaseNote-${escAttr(r.name)}.html`;
    const iconsHtml = `
      <a class="action-icon" href="${upgradeUrl}" title="${texts.upgradeNotes || 'Upgrade notes'}"><i class="fa-solid fa-clipboard-list"></i><span class="icon-label">${texts.upgradeNotes || 'Upgrade'}</span></a>
      <a class="action-icon" href="${featureOverviewUrl}" title="${texts.featureOverview || 'Feature Overview'}"><i class="fa-solid fa-face-grin-stars"></i><span class="icon-label">${texts.featureOverview || 'Feature overview'}</span></a>
      ${showDocker ? `<a class="action-icon" href="${dockerUrl}" title="${texts.dockerImages || 'Docker images'}"><i class="fa-brands fa-docker"></i><span class="icon-label">${texts.dockerImages || 'Docker'}</span></a>` : ''}
      ${demoUrl ? `<a class="action-icon" href="${demoUrl}" title="${texts.sampleDatabase || 'Demo DB'}"><i class="fa-solid fa-database"></i><span class="icon-label">${texts.sampleDatabase || 'Demo'}</span></a>` : ''}
    `;

    header.innerHTML = `
      <div class="header-left">
        <div class="ver">${displayName} ${supportBadge}</div>
        <div class="date">${texts.introduced || 'Introduced:'} ${releaseDate}</div>
      </div>
      <div class="header-right">
        <div class="header-icons">${iconsHtml}</div>
        <a class="button primary" href="${primaryUrl}">⬇︎ ${primaryLabel}</a>
        <div class="size">${sizeText}</div>
      </div>
    `;

    const body = document.createElement('div');
    body.className = 'card-body';
    body.id = `card-body-${idx}`;
    body.setAttribute('aria-hidden','false');

    const notesHtml = `<div class="notes">${esc(r.notes || '')}</div>`;

    let patchesTable = '';
    if (r.patchVersions && r.patchVersions.length){
      // compute max hotfix version per patch.version so we can mark lower hotfixes as superseded
      const patchesList = (r.patchVersions || []).slice();
      const maxHotfix = {};
      patchesList.forEach(pp => {
        const ver = (pp.version != null) ? pp.version : 0;
        const hv = (pp.hotfixVersion != null) ? pp.hotfixVersion : 0;
        if (!(ver in maxHotfix) || hv > maxHotfix[ver]) maxHotfix[ver] = hv;
      });
      const rows = patchesList.slice().reverse().map(patch => {
        const hv = (patch.hotfixVersion != null) ? patch.hotfixVersion : 0;
        const ver = (patch.version != null) ? patch.version : 0;
        const computedSuperseded = (hv < (maxHotfix[ver] || 0));
        const isSuperseded = patch.superseded || computedSuperseded;
        const classes = [];
        if (isSuperseded) classes.push('superseded-dhis2-dl');
        if (patch.hotfix || patch.hotfixVersion) classes.push('hotfix-row');
        const cls = classes.length ? `class="${classes.join(' ')}"` : '';
        const isHotfix = (patch.hotfix || patch.hotfixVersion);
        const hotfixBadge = isHotfix ? `<span class="badge-hotfix">Hotfix</span>` : '';
        return `<tr ${cls}>
          <td>${esc(patch.displayName || patch.name)}</td>
          <td>${fmtDate(patch.releaseDate)}</td>
            <td><a class="button small" href="${escAttr(patch.url||'')}" title="Production WAR file">⬇︎ ${esc(patch.displayName || patch.name)}</a>
            <span class="dc-download-hash" id="label${escAttr(patch.name)}" onClick="toggleHash('hash${escAttr(patch.name)}');">${texts.sha256sum || 'SHA256SUM'}</span>${hotfixBadge}
            <span class="dc-hash" id="hash${escAttr(patch.name)}">${esc(patch.sha256 || '')}</span>
          </td>
          <td>${esc(patch.fileSize || patch.downloadSize || '-')}</td>
          <td><a class="action-icon" href="https://dhis2.github.io/dhis2-releases/releases/${escAttr(r.name)}/ReleaseNote-${escAttr(patch.name)}.html" title="${texts.releaseNotes || 'Release note'}"><i class="fa-solid fa-file-lines"></i><span class="icon-label">${texts.releaseNotes || 'Release note'}</span></a></td>
        </tr>`;
      }).join('');

      patchesTable = `
        <table class="patch-table">
          <thead><tr><th>${texts.tablePatch || 'Patch'}</th><th>${texts.tableReleaseDate || 'Release date'}</th><th>${texts.tableProductionFile || 'Production WAR file'}</th><th>${texts.tableSize || 'Size'}</th><th>${texts.tableNotes || 'Notes'}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>`;
    }

    body.innerHTML = `<div class="card-inner">${notesHtml}${patchesTable}</div>`;

    card.appendChild(header);
    card.appendChild(body);
    mount.appendChild(card);

    // focus the primary button for quick keyboard access
    const btn = header.querySelector('.button.primary');
    if (btn) btn.focus();
  }
});
