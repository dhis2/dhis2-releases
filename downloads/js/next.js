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
                tickLabel.textContent = tickDate.toLocaleString('default', { month: 'short' });

                tickMark.appendChild(tickLabel);
                timeline.appendChild(tickMark);
            }

            patchReleases.forEach(release => {
                const releaseDate = new Date(release.date);
                const offsetPercentage = ((releaseDate - startDate) / totalDuration) * 100;

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
                const formattedDate = releaseDate.toLocaleDateString('en-US', options);


                releaseElement.addEventListener('click', () => {
                    details.style.display = 'block';
                    details.innerHTML = `<h2>${release.name}</h2><p>Target release date: ${formattedDate}</p><p>See the list of fixes so far for <a href="https://dhis2.atlassian.net/jira/software/c/projects/DHIS2/issues/?jql=project%20%3D%20%22DHIS2%22%20AND%20fixversion%20%3D%20${release.name}%20ORDER%20BY%20created%20DESC" target="_blank" rel="noopener noreferrer">this patch on Jira</a></p>`;
                });

                timeline.appendChild(releaseElement);
            });
        })
        .catch(error => console.error('Error loading patch releases:', error));
});
