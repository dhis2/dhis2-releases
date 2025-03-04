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

function populateFilters(issues) {
    // Populate Release Filter
    const releases = [...new Set(issues
        .map(issue => issue.targetRelease)
        .filter(release => release))]
        .sort();
    
    const releaseFilter = document.getElementById('releaseFilter');
    releases.forEach(release => {
        const option = document.createElement('option');
        option.value = release;
        option.textContent = release;
        if (release === 'v42 (May 2025)') {
            option.selected = true;
        }
        releaseFilter.appendChild(option);
    });

    // Populate Group By Filter
    const groupByFilter = document.getElementById('groupByFilter');
    ['Product Area', 'App'].forEach(groupOption => {
        const option = document.createElement('option');
        option.value = groupOption.toLowerCase().replace(' ', '');
        option.textContent = groupOption;
        groupByFilter.appendChild(option);
    });
    
    return {
        selectedRelease: releaseFilter.value,
        groupBy: groupByFilter.value
    };
}

function getBaseProductArea(productArea) {
    // Extract the base product area (text before parenthesis)
    return productArea.split('(')[0].trim();
}

function getProductAreaSuffix(productArea) {
    // Extract the text in parentheses if it exists
    const match = productArea.match(/\((.*?)\)/);
    return match ? ` (${match[1]})` : '';
}

function groupIssuesByProductArea(issues) {
    const groups = {};
    
    issues.forEach(issue => {
        if (!issue.productAreas) {
            if (!groups['Unspecified']) {
                groups['Unspecified'] = [];
            }
            groups['Unspecified'].push(issue);
            return;
        }

        const areas = Array.isArray(issue.productAreas) ? 
            issue.productAreas : [issue.productAreas];
        
        areas.forEach(area => {
            const baseArea = getBaseProductArea(area);
            if (!groups[baseArea]) {
                groups[baseArea] = [];
            }
            // Add the issue with its specific product area suffix
            const issueCopy = {...issue, productAreaSuffix: getProductAreaSuffix(area)};
            groups[baseArea].push(issueCopy);
        });
    });
    
    return groups;
}

function groupIssuesByApp(issues) {
    const groups = {};
    
    issues.forEach(issue => {
        const apps = Array.isArray(issue.app) ? issue.app : [issue.app || 'Unspecified'];
        
        apps.forEach(app => {
            const appName = app === 'Web Capture' ? 'Capture' : app;
            if (!groups[appName]) {
                groups[appName] = [];
            }
            groups[appName].push(issue);
        });
    });
    
    return groups;
}

function createIssueLink(issue) {
    const issueItem = document.createElement('li');
    issueItem.className = 'issue-item';
    
    const issueLink = document.createElement('a');
    issueLink.href = `https://dhis2.atlassian.net/browse/${issue.key}`;
    issueLink.textContent = issue.summary;
    issueLink.className = 'issue-link';
    issueLink.target = '_blank';
    issueLink.rel = 'noopener noreferrer';
    
    // Add external link icon
    const externalIcon = document.createElement('span');
    externalIcon.className = 'external-link-icon';
    externalIcon.innerHTML = '↗';
    issueLink.appendChild(externalIcon);
    
    // Add product area suffix if it exists
    if (issue.productAreaSuffix) {
        const suffix = document.createElement('span');
        suffix.className = 'product-area-suffix';
        suffix.textContent = issue.productAreaSuffix;
        issueLink.appendChild(suffix);
    }
    
    issueItem.appendChild(issueLink);
    return issueItem;
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
        issuesList.appendChild(createIssueLink(issue));
    });
    
    body.appendChild(issuesList);
    card.appendChild(header);
    card.appendChild(body);
    
    return card;
}

function createProductAreaList(areaName, issues) {
    const section = document.createElement('div');
    section.className = 'product-area-section';
    
    const title = document.createElement('h3');
    title.className = 'product-area-title';
    title.textContent = areaName;
    section.appendChild(title);
    
    const issuesList = document.createElement('ul');
    issuesList.className = 'issue-list';
    
    issues.sort((a, b) => a.key.localeCompare(b.key));
    issues.forEach(issue => {
        issuesList.appendChild(createIssueLink(issue));
    });
    
    section.appendChild(issuesList);
    return section;
}

function displayIssues(issues, selectedRelease, groupBy) {
    const container = document.getElementById('issueCards');
    container.innerHTML = '';
    
    // Filter issues by selected release
    const filteredIssues = issues.filter(issue => 
        !selectedRelease || issue.targetRelease === selectedRelease
    );
    
    // Group issues based on selected grouping
    const groupedIssues = groupBy === 'productarea' ? 
        groupIssuesByProductArea(filteredIssues) : 
        groupIssuesByApp(filteredIssues);
    
    // Create and append cards/sections for each group
    Object.entries(groupedIssues)
        .sort(([groupA], [groupB]) => groupA.localeCompare(groupB))
        .forEach(([groupName, groupIssues]) => {
            const element = groupBy === 'productarea' ?
                createProductAreaList(groupName, groupIssues) :
                createAppCard(groupName, groupIssues);
            container.appendChild(element);
        });
}

async function initialize() {
    const issues = await loadData();
    const { selectedRelease, groupBy } = populateFilters(issues);
    displayIssues(issues, selectedRelease, groupBy);
    
    document.getElementById('releaseFilter').addEventListener('change', (event) => {
        displayIssues(issues, event.target.value, document.getElementById('groupByFilter').value);
    });
    
    document.getElementById('groupByFilter').addEventListener('change', (event) => {
        displayIssues(issues, document.getElementById('releaseFilter').value, event.target.value);
    });
}

initialize(); 