document.addEventListener('DOMContentLoaded', function() {
    fetch('v1/versions/android.json')
    .then(response => response.json())
    .then(releasesData => populateReleases(releasesData.captureAppVersions))
    .catch(error => console.error('Error loading releases:', error));
});

// Populate the releases
function populateReleases(releases) {
    // Get the container for the releases
    const releasesContainer = document.getElementById('releases-container');

    // Iterate over each release
    releases.forEach(release => {
        // If the release is supported
        if (release.latest) {
            // Create a card for the release and append it to the container
            const cardElement = createReleaseCard(release);
            releasesContainer.appendChild(cardElement);
                    
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
function createReleaseCard(release) {
    const cardElement = createElement('div', 'android-card');
    const locale = getLocaleFromURL(); // Get the user locale
    release.releaseDate = new Date(release.releaseDate).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });

    const loc = localizationMap[locale]; // Get the localized strings based on locale

    cardElement.innerHTML = `
        <div class="dc-title">
            <span class="dc-title-version">Android Capture ${release.appVersion}</span>
            ${release.latest ? `<span class="dc-badge dc-badge-latest"><i class="svg-icon svg-icon-latest"><!-- SVG latest --></i>${loc.latestVersion}</span>` : ''}
        </div>
        <div class="dc-subtitle">
            <span>${loc.released} ${release.releaseDate}</span>
            <span><a href="${release.releaseNotes}" target="_blank" rel="noopener noreferrer">${loc.featureOverview}</a></span>
        </div>
        <div class="dc-download-android">
            <a href="${release.download.gitHub}" target="_blank" rel="noopener noreferrer">
                <img src="img/GitHub_Lockup_Light.png" alt="${loc.downloadOnGitHub}" class="dc-download-badge-gh">
            </a>
            <a href="${release.download.googlePlay}" target="_blank" rel="noopener noreferrer">
                <img src="img/google-play-badge.png" alt="${loc.downloadOnGooglePlay}" class="dc-download-badge">
            </a>
            <div class="dc-download-info">
                <span><strong>${loc.androidCompatibility}</strong> ${loc.minimum} ${release.androidOSVersion.minVersion}, <strong>${loc.recommended} ${release.androidOSVersion.recommendedVersion}</strong></span>
            </div>
            <div class="dc-download-info">
                <span><strong>${loc.dhis2Compatibility}</strong> ${loc.minimum} ${release.dhis2CoreVersion.minVersion}, <strong>${loc.recommended} ${release.dhis2CoreVersion.recommendedVersion}</strong></span>
            </div>
        </div>
    `;

    return cardElement;
}