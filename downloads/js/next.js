document.addEventListener('DOMContentLoaded', () => {
    fetch('upcomingPatches.json')
        .then(response => response.json())
        .then(patchReleases => {
            const timeline = document.getElementById('timeline');
            const details = document.getElementById('details');

            const startDate = new Date();
            const endDate = new Date();
            endDate.setMonth(endDate.getMonth() + 3);
            const totalDuration = endDate - startDate;

            const locale = getLocaleFromURL(); // Get the current locale
            const loc = localizationMap[locale]; // Get localized texts based on the locale
        
           

            // Adding tick marks for each month
            for (let i = 1; i <= 3; i++) {
                const tickDate = new Date(startDate);
                tickDate.setMonth(tickDate.getMonth() + i);
                tickDate.setDate(1);
                const offsetPercentage = ((tickDate - startDate) / totalDuration) * 100;

                const tickMark = document.createElement('div');
                tickMark.className = 'tick-mark';
                tickMark.style.left = `${offsetPercentage}%`;

                const tickLabel = document.createElement('div');
                tickLabel.className = 'tick-label';
                tickLabel.textContent = tickDate.toLocaleString(locale, { month: 'short' });

                tickMark.appendChild(tickLabel);
                timeline.appendChild(tickMark);
            }

            patchReleases.forEach(release => {
                const releaseDate = new Date(release.date);
                const offsetPercentage = ((releaseDate - startDate) / totalDuration) * 100;

                // if the offset is more than 100%, skip this release
                if (offsetPercentage > 100) {
                    return;
                }
                const releaseElement = document.createElement('div');
                releaseElement.className = 'release';
                releaseElement.style.left = `${offsetPercentage}%`;

                const releaseLabel = document.createElement('span');
                releaseLabel.textContent = release.name;
                releaseElement.appendChild(releaseLabel);

                const releaseCircle = document.createElement('div');
                releaseCircle.className = 'release-circle';
                releaseElement.appendChild(releaseCircle);

                // make release.date human readable
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = releaseDate.toLocaleDateString(locale, options);


                releaseElement.addEventListener('click', () => {
                    details.style.display = 'block';
                    details.innerHTML = `<h2>${release.name}</h2><p>${loc.targetReleaseDate}: ${formattedDate}</p><p>${loc.jiraLink01} <a href="https://dhis2.atlassian.net/jira/software/c/projects/DHIS2/issues/?jql=project%20%3D%20%22DHIS2%22%20AND%20fixversion%20%3D%20${release.version}%20ORDER%20BY%20created%20DESC" target="_blank" rel="noopener noreferrer">${loc.jiraLink02}</a></p>`;
                });

                timeline.appendChild(releaseElement);
            });
        })
        .catch(error => console.error('Error loading patch releases:', error));
});
