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
    const cardElement = createElement('div', 'download-card-db');
    // Set the inner HTML of the card with the release and patch version details

    dbver = "2."+release.version+"."+patchVersion.version
 
    cardElement.innerHTML = `
        <div class="dc-title">
            <span class="dc-title-version">DHIS2 version ${patchVersion.name}</span>    
        </div>
        <div class="dc-download">
            <a class="dc-download-button" href="https://databases.dhis2.org/sierra-leone/${dbver}/dhis2-db-sierra-leone.sql.gz">Sample database ${dbver}</a>
            <div class="dc-download-info">
            <span class="dc-download-size">dhis2-db-sierra-leone.sql.gz</span>
            </div>
        </div>
        `;


    return cardElement; // Return the created card
}
