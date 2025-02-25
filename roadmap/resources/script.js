async function loadData() {
    try {
        const response = await fetch('jira_roadmap.json');
        const data = await response.json();
        return data.issues;
    } catch (error) {
        console.error('Error loading data:', error);
        return [];
    }
}

function populateReleaseFilter(issues) {
    const releases = [...new Set(issues
        .map(issue => issue.targetRelease)
        .filter(release => release))]
        .sort();
    
    const filterElement = document.getElementById('releaseFilter');
    
    // Add "All" option
    // const allOption = document.createElement('option');
    // allOption.value = '';
    // allOption.textContent = 'All Releases';
    // filterElement.appendChild(allOption);
    
    // Add release options
    releases.forEach(release => {
        const option = document.createElement('option');
        option.value = release;
        option.textContent = release;
        if (release === 'v42 (May 2025)') {
            option.selected = true;
        }
        filterElement.appendChild(option);
    });
    
    return filterElement.value;
}

function groupIssuesByApp(issues) {
    const groups = {};
    
    issues.forEach(issue => {
        // Handle cases where app might be an array, string, or undefined
        const apps = Array.isArray(issue.app) ? issue.app : [issue.app || 'Unspecified'];
        
        apps.forEach(app => {
            // Rename "Web Capture" to "Capture"
            const appName = app === 'Web Capture' ? 'Capture' : app;
            if (!groups[appName]) {
                groups[appName] = [];
            }
            groups[appName].push(issue);
        });
    });
    
    return groups;
}

function createAppCard(appName, issues) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Card Header
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = appName;
    header.appendChild(title);
    
    // Card Body
    const body = document.createElement('div');
    body.className = 'card-body';
    
    const issuesList = document.createElement('ul');
    issuesList.className = 'issue-list';
    
    issues.sort((a, b) => a.key.localeCompare(b.key));
    
    issues.forEach(issue => {
        const issueItem = document.createElement('li');
        issueItem.className = 'issue-item';
        
        const issueLink = document.createElement('a');
        issueLink.href = `https://dhis2.atlassian.net/browse/${issue.key}`;
        issueLink.textContent = issue.key;
        issueLink.className = 'issue-link';
        issueLink.target = '_blank';
        
        issueItem.appendChild(issueLink);
        issueItem.appendChild(document.createTextNode(issue.summary));
        issuesList.appendChild(issueItem);
    });
    
    body.appendChild(issuesList);
    
    // Card Footer
    const footer = document.createElement('div');
    footer.className = 'card-footer';
    
    // Product Areas
    const allProductAreas = new Set();
    issues.forEach(issue => {
        if (issue.productAreas) {
            const areas = Array.isArray(issue.productAreas) ? 
                issue.productAreas : [issue.productAreas];
            areas.forEach(area => allProductAreas.add(area));
        }
    });
    
    if (allProductAreas.size > 0) {
        const tagList = document.createElement('div');
        tagList.className = 'tag-list';
        
        [...allProductAreas].sort().forEach(area => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = area;
            tagList.appendChild(tag);
        });
        
        footer.appendChild(tagList);
    }
    
    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);
    
    return card;
}

function displayIssues(issues, selectedRelease) {
    const container = document.getElementById('issueCards');
    container.innerHTML = '';
    
    // Filter issues by selected release
    const filteredIssues = issues.filter(issue => 
        !selectedRelease || issue.targetRelease === selectedRelease
    );
    
    // Group filtered issues by app
    const groupedIssues = groupIssuesByApp(filteredIssues);
    
    // Create and append cards for each app group
    Object.entries(groupedIssues)
        .sort(([appA], [appB]) => appA.localeCompare(appB))
        .forEach(([app, appIssues]) => {
            container.appendChild(createAppCard(app, appIssues));
        });
}

async function initialize() {
    const issues = await loadData();
    const selectedRelease = populateReleaseFilter(issues);
    displayIssues(issues, selectedRelease);
    
    document.getElementById('releaseFilter').addEventListener('change', (event) => {
        displayIssues(issues, event.target.value);
    });
}

initialize(); 