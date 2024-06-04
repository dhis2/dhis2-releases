document.addEventListener('DOMContentLoaded', function() {
    fetch('v1/versions/stable.json')
    .then(response => response.json())
    .then(releasesData => populateReleases(releasesData.versions))
    .catch(error => console.error('Error loading releases:', error));
});

function populateReleases(releases) {
    const releasesContainer = document.getElementById('releases-container');

    releases.forEach(release => {
        if (release.supported) {
            release.patchVersions.forEach(patchVersion => {
                if (patchVersion.version === release.latestPatchVersion) {
                    if ((release.latestHotfixVersion || 0) === (patchVersion.hotfixVersion || 0)) {
                        const cardElement = createReleaseCard(release, patchVersion);
                        releasesContainer.appendChild(cardElement);
                    }
                }
            });
        }
    });
}

function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
}

// Below is the full `createReleaseCard` function example.
// It does not contain all the specifics of your template, like the SVG path data and external links paths.
// You will have to provide the exact path data for your SVG elements.
function createReleaseCard(release, patchVersion) {
    // We assume you will provide SVG path data and external link paths according to your requirements
    // This example illustrates how you can structure the function
    const cardElement = createElement('div', 'download-card');
    cardElement.innerHTML = `
        <div class="dc-title">
            <span class="dc-title-version">DHIS2 version ${patchVersion.displayName || patchVersion.name}</span>
            ${release.latest ? '<span class="dc-badge dc-badge-latest"><i class="svg-icon svg-icon-latest"><!-- SVG latest --></i>Latest version</span>' : ''}
            ${(patchVersion.hotfix || patchVersion.hotfixVersion) ? '<span class="dc-badge dc-badge-hotfix"><i class="svg-icon svg-icon-hotfix"><!-- SVG hotfix --></i>Hotfix</span>' : ''}
        </div>
        <div class="dc-subtitle">
            <span>Latest patch ${patchVersion.releaseDate}</span>
            <span>Released ${release.releaseDate}</span>
        </div>
        <div class="dc-outbound-links">
            <a href="https://github.com/dhis2/dhis2-releases/blob/master/releases/${release.name}/ReleaseNote-${patchVersion.name}.md">${patchVersion.displayName} release notes</a>
            <a href="https://github.com/dhis2/dhis2-releases/blob/master/releases/${release.name}/README.md">${release.displayName} upgrade notes</a>
            <a href="https://github.com/dhis2/dhis2-releases/blob/master/releases/${release.name}/ReleaseNote-${release.name}.md">Feature overview</a>
        </div>
        <div class="dc-download">
            <a class="dc-download-button" href="${patchVersion.url}">Download ${patchVersion.displayName || patchVersion.name}</a>
            <div class="dc-download-info">
                <span class="dc-download-size">${release.fileSize}</span>
                <span class="dc-download-hash" title="${patchVersion.sha256}">SHA256SUM</span>
            </div>
        </div>
        <div class="dc-docker">
            <span>Download from
                <a href="https://hub.docker.com/r/dhis2/core/tags?page=1&ordering=last_updated&name=${patchVersion.displayName || patchVersion.name}">Docker</a> with
            </span>
            <span class="dc-docker-code">docker pull dhis2/core:${patchVersion.name}</span>
        </div>`;

    // Add SVG markup for "Latest version" and "Hotfix" badges where '<!-- SVG latest -->' and '<!-- SVG hotfix -->' comments are
    // Make sure to include the actual SVG markup or use `addSVG` function to do it programmatically

    return cardElement;
}
