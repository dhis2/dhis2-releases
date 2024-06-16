document.addEventListener('DOMContentLoaded', function() {
    fetch('v1/versions/stable.json')
    .then(response => response.json())
    .then(releasesData => populateReleases(releasesData.versions))
    .catch(error => console.error('Error loading releases:', error));
});


function toggleHash(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
    lid = id.replace("hash", "label");
    var label = document.getElementById(lid);
    label.classList.toggle('expanded');
}


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


function createReleaseCard(release, patchVersion) {
    const locale = getLocaleFromURL(); // Get the current locale
    const texts = localizationMap[locale]; // Get localized texts based on the locale

    // Localize dates
    release.releaseDate = new Date(release.releaseDate).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
    patchVersion.releaseDate = new Date(patchVersion.releaseDate).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });

    // Create a div with the class 'download-card'
    const cardElement = document.createElement('div');
    cardElement.className = 'download-card';

    // Set the inner HTML of the card with localized content
    cardElement.innerHTML = `
        <div class="dc-title">
            <span class="dc-title-version">DHIS2 version ${patchVersion.displayName || patchVersion.name}</span>
            ${release.latest ? `<span class="dc-badge dc-badge-latest"><i class="svg-icon svg-icon-latest"><!-- SVG latest --></i>${texts.latestVersion}</span>` : ''}
            ${(patchVersion.hotfix || patchVersion.hotfixVersion) ? `<span class="dc-badge dc-badge-hotfix"><i class="svg-icon svg-icon-hotfix"><!-- SVG hotfix --></i>${texts.hotfix}</span>` : ''}
        </div>
        <div class="dc-subtitle">
            <span>${texts.latestPatch} ${patchVersion.releaseDate}</span>
            <span>${texts.released} ${release.releaseDate}</span>
        </div>
        <div class="dc-outbound-links">
            <a href="https://github.com/dhis2/dhis2-releases/blob/master/releases/${release.name}/ReleaseNote-${patchVersion.name}.md" target="_blank" rel="noopener noreferrer">${patchVersion.displayName} ${texts.releaseNotes}</a>
            <a href="https://github.com/dhis2/dhis2-releases/blob/master/releases/${release.name}/README.md" target="_blank" rel="noopener noreferrer">${release.displayName} ${texts.upgradeNotes}</a>
            <a href="https://github.com/dhis2/dhis2-releases/blob/master/releases/${release.name}/ReleaseNote-${release.name}.md" target="_blank" rel="noopener noreferrer">${texts.featureOverview}</a>
        </div>
        <div class="dc-download">
            <a class="dc-download-button" href="${patchVersion.url}">${texts.download} ${patchVersion.displayName || patchVersion.name}</a>
            <div class="dc-download-info">
                <span class="dc-download-size">${release.fileSize}</span>
                <!-- create a span for the sha256sum label, and another span that is hidden until the label is clicked  -->
                <span class="dc-download-hash" id="label${patchVersion.name}" onClick="toggleHash('hash${patchVersion.name}');" >SHA256SUM</span>
                <span class="dc-hash" id="hash${patchVersion.name}">${patchVersion.sha256}</span>


                


            </div>
        </div>
        <div class="dc-docker">
            <span>${texts.downloadFromDocker}
                <a href="https://hub.docker.com/r/dhis2/core/tags?page=1&ordering=last_updated&name=${patchVersion.displayName || patchVersion.name}" target="_blank" rel="noopener noreferrer">Docker</a> ${texts.with}
            </span>
            <span class="dc-docker-code">docker pull dhis2/core:${patchVersion.name}</span>
        </div>`;

    return cardElement; // Return the created card
}
