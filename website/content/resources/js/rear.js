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

    // get the state of the full-view toggle
    const fullInput = document.getElementById('toggle-full');
    fullInput.addEventListener('change', function() {
        findApps();
    });

    const toggleInput = document.getElementById('toggle-view');
    // const viewMode = document.getElementById('view-mode');
    toggleInput.addEventListener('change', function() {
        if (toggleInput.checked) {
            // hide the full-view toggle
            document.getElementById('tf').style.display = 'none';
        } else {
            document.getElementById('tf').style.display = 'flex';
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

    // remove "GitHub" and "Maintenance" keys if they exists
    keysToRemove = ['GitHub', "Maintenance"];

    keysToRemove.forEach(key => {
        const index = sortedKeys.indexOf(key);
        if (index > -1) {
            sortedKeys.splice(index, 1);
        }
    });

    fullInput = document.getElementById('toggle-full').checked;

    sortedKeys.forEach(key => {
        if (releaseNotes[key]) {
            const heading = document.createElement('h3');
            heading.textContent = key;

            const list = document.createElement('ul');
            releaseNotes[key].forEach(note => {
                // if the note contains one of the jira patterns (e.g. DHIS2-1234, TECH-1234, ANDROID-1234), or "transifex", include it
                const jiraPattern = /(DHIS2|TECH|ANDROID|)-\d+/;
                if (!jiraPattern.test(note) && !note.toLowerCase().includes('transifex')) {
                    if (!fullInput) {
                        return;
                    }
                }              

                const listItem = document.createElement('li');
                listItem.innerHTML = note.replace(/(DHIS2-[0-9]+|LIBS-[0-9]+|TECH-[0-9]+|ANDROID-[0-9]+)/g, '<a href="https://dhis2.atlassian.net/browse/$1" target="_blank">$1</a>');
                list.appendChild(listItem);
            });
            // if the list is empty, don't include it
            if (list.children.length === 0) {
                return;
            }   
            container.appendChild(heading);
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
