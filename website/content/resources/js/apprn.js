// Variable to store the fetched data
let fetchedData = {};

// Event listener to fetch tags and populate the "from" and "to" selectors when the document or app selection is changed
document.addEventListener('DOMContentLoaded', async () => {
    const appSelect = document.getElementById('app');
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    
    try {
        // Fetch the JSON data from the output file
        const response = await fetch('../data/app_releases.json');
        fetchedData = await response.json();
    } catch (error) {
        console.error('Error fetching data from output file:', error);
    }

    // populate the app selector
    Object.keys(fetchedData).forEach(app => {
        const option = document.createElement('option');
        option.value = app;
        option.textContent = app;
        appSelect.appendChild(option);
    });
    
    appSelect.addEventListener('change', () => {
        const app = appSelect.value;
        
        // Get the versions for the selected app from the fetched data
        const versions = Object.keys(fetchedData[app] || {});
        fromSelect.innerHTML = '';
        toSelect.innerHTML = '';
        versions.forEach(version => {
            const option = document.createElement('option');
            option.value = version;
            option.textContent = version;
            fromSelect.appendChild(option.cloneNode(true));
            toSelect.appendChild(option);
        });

        // set the from selectors to the last option
        fromSelect.selectedIndex = fromSelect.options.length - 1;
        // Trigger the change event to display the commits
        displayCommits();
    });
    
    // Trigger the change event to populate the dropdowns initially
    appSelect.dispatchEvent(new Event('change'));


    // Trigger the change event to display the commits initially
    displayCommits();
});

// Function to display commits between the selected tags
function displayCommits() {
    const app = document.getElementById('app').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    
    const appData = fetchedData[app] || {};
    const fromIndex = Object.keys(appData).indexOf(from);
    const toIndex = Object.keys(appData).indexOf(to);
    
    for (let i = toIndex; i < fromIndex; i++) {
        const version = Object.keys(appData)[i];
        const categories = appData[version];
        
        // Display a heading for the current version
        messagesDiv.innerHTML += `<h2>${version}</h2>`;
        
        // Format and add the categorized commit messages to the output
        for (const [category, messages] of Object.entries(categories)) {
            messagesDiv.innerHTML += `<h3>${category}</h3><ul>${formatList(new Set(messages))}</ul>`;
        }
    }
}

// Function to format the set items as list items and replace the pattern "DHIS2-[0-9]+" with a link
function formatList(set) {
    // Format the filtered array as list items
    return Array.from(set).map(item => 
        `<li>${item.replace(/(DHIS2-[0-9]+|LIBS-[0-9]+|TECH-[0-9]+)/g, '<a href="https://dhis2.atlassian.net/browse/$1" target="_blank">$1</a>')}</li>`
    ).join('');
}
