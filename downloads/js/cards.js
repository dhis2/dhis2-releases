document.addEventListener('DOMContentLoaded', function() {
    fetch('v1/versions/stable.json')
    .then(response => response.json())
    .then(releasesData => populateReleases(releasesData.versions))
    .catch(error => console.error('Error loading releases:', error));
});

// Populate the releases
function populateReleases(releases) {
    // Get the container for the releases
    const releasesContainer = document.getElementById('releases-container');

    // Iterate over each release
    releases.forEach(release => {
        // If the release is supported
        if (release.supported) {
            // Iterate over each patch version of the release
            release.patchVersions.forEach(patchVersion => {
                // If the patch version is the latest one
                if (patchVersion.version === release.latestPatchVersion) {
                    // If the latest hotfix version is the same as the hotfix version of the patch
                    if ((release.latestHotfixVersion || 0) === (patchVersion.hotfixVersion || 0)) {
                        // Create a card for the release and append it to the container
                        const cardElement = createReleaseCard(release, patchVersion);
                        releasesContainer.appendChild(cardElement);
                    }
                }
            });
        }
    });
}


// Create an HTML element with a given tag, class name, and content
function createElement(tag, className, content) {
    const element = document.createElement(tag); // Create the element
    if (className) element.className = className; // Set the class name if provided
    if (content) element.textContent = content; // Set the content if provided
    return element; // Return the created element
}

// Create a card for a release
function createReleaseCard(release, patchVersion) {
    // Create a div with the class 'download-card'
    const cardElement = createElement('div', 'download-card');
    // Set the inner HTML of the card with the release and patch version details
    
    // change release.releaseDate and patchVersion.releaseDate to human readable date without the day of the week

    release.releaseDate = new Date(release.releaseDate).toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' });
    patchVersion.releaseDate = new Date(patchVersion.releaseDate).toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' });

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


    return cardElement; // Return the created card
}
