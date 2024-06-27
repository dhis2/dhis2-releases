document.addEventListener('DOMContentLoaded', (event) => {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    flatpickr("#start-date", {
        defaultDate: oneMonthAgo,
        dateFormat: "d M Y" // Change this to your desired format
    });

    flatpickr("#end-date", {
        defaultDate: today,
        dateFormat: "d M Y" // Change this to your desired format
    });

    const toggleInput = document.getElementById('toggle-view');
    const viewMode = document.getElementById('view-mode');
    toggleInput.addEventListener('change', function() {
        if (toggleInput.checked) {
            viewMode.textContent = 'Release-based';
        } else {
            viewMode.textContent = 'Commit-based';
        }
        findApps();
    });
});

async function fetchAppData() {
    const response = await fetch('../data/apphub.json');
    return await response.json();
}

function printReleaseNotes(releaseNotes, container) {
    const orderedKeys = ['Features', 'Bug Fixes'];
    const allKeys = Object.keys(releaseNotes);
    const remainingKeys = allKeys.filter(key => !orderedKeys.includes(key));
    const sortedKeys = [...orderedKeys, ...remainingKeys];

    // remove "GitHub" key if it exists
    keysToRemove = ['GitHub'];

    keysToRemove.forEach(key => {
        const index = sortedKeys.indexOf(key);
        if (index > -1) {
            sortedKeys.splice(index, 1);
        }
    });


    sortedKeys.forEach(key => {
        if (releaseNotes[key]) {
            const heading = document.createElement('h3');
            heading.textContent = key;
            container.appendChild(heading);

            const list = document.createElement('ul');
            releaseNotes[key].forEach(note => {
                const listItem = document.createElement('li');
                listItem.textContent = note;
                list.appendChild(listItem);
            });
            container.appendChild(list);
        }
    });
}

function findApps() {
    const startDate = new Date(flatpickr.parseDate(document.getElementById('start-date').value, "d M Y")).getTime();
    const endDate = new Date(flatpickr.parseDate(document.getElementById('end-date').value, "d M Y")).getTime();
    if (isNaN(startDate) || isNaN(endDate)) {
        alert("Please select a valid date range.");
        return;
    }

    fetchAppData().then(data => {
        const results = document.getElementById('results');
        results.innerHTML = '';
        
        const apps = data.filter(app => {
            const organisation = app.developer.organisation;
            return organisation === 'DHIS2' || organisation === 'UiO';
        });

        apps.forEach(app => {
            let matchingVersions = app.versions.filter(version => {
                const versionDate = version.created;
                return versionDate >= startDate && versionDate <= endDate;
            });

            if (matchingVersions.length > 0) {
                // get the logo by looking through the apps images array and finding one with logo true (then take the url)
                const logoUrl = app.images.find(image => image.logo).imageUrl;
                const appDiv = document.createElement('div');
                appDiv.className = 'app';
                appDiv.innerHTML = `<h2><img class="appLogo" src="${logoUrl}"><a href="${app.sourceUrl}/releases">${app.name}</></h2>`;

                // if commit-based view, display commit messages

                if (document.getElementById('toggle-view').checked) {
                    // aggregate the GitHub release notes
                    const heading = document.createElement('h3');
                    heading.textContent = "Releases";
                    appDiv.appendChild(heading);
                    // appDiv.appendChild(document.createElement('hr'));

                    matchingVersions.forEach(version => {
                        const releaseNotes = version.releaseNotes ? version.releaseNotes : {};
                        if (releaseNotes.GitHub) {
                            // const versionHeading = document.createElement('h4');
                            // versionHeading.textContent = version.version;
                            // appDiv.appendChild(versionHeading);

                            const gitHubList = document.createElement('div');
                            gitHubList.className = 'gitHubList';
                            gitHubList.innerHTML = releaseNotes.GitHub;
                            appDiv.appendChild(gitHubList);
                        }
                    });
                    
                }
                else {
                    // Aggregate release notes
                    let aggregatedReleaseNotes = {};
                    matchingVersions.forEach(version => {
                        const releaseNotes = version.releaseNotes ? version.releaseNotes : {};
                        for (const [key, value] of Object.entries(releaseNotes)) {
                            if (!aggregatedReleaseNotes[key]) {
                                aggregatedReleaseNotes[key] = [];
                            }
                            aggregatedReleaseNotes[key] = aggregatedReleaseNotes[key].concat(value);
                        }
                    });

                    // Print aggregated release notes
                    printReleaseNotes(aggregatedReleaseNotes, appDiv);

                }

                results.appendChild(appDiv);
            }
        });
    });
}
