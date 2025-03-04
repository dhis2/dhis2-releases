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

function getUniqueProductAreas(issues) {
    const areas = new Set();
    issues.forEach(issue => {
        if (issue.productAreas) {
            const productAreas = Array.isArray(issue.productAreas) ? 
                issue.productAreas : [issue.productAreas];
            productAreas.forEach(area => {
                areas.add(getBaseProductArea(area));
            });
        }
    });
    return [...areas].sort();
}

function populateFilters(issues) {
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

    // Create tabs
    const tabsContainer = document.getElementById('viewTabs');
    const productAreas = getUniqueProductAreas(issues);
    
    // Add "Apps" tab first
    const appsTab = document.createElement('button');
    appsTab.className = 'tab';
    appsTab.textContent = 'List by App';
    appsTab.dataset.view = 'apps';
    tabsContainer.appendChild(appsTab);
    
    // Add label for functional area tabs
    const areaLabel = document.createElement('span');
    areaLabel.textContent = 'List by functional area:';
    areaLabel.className = 'tab-label';
    tabsContainer.appendChild(areaLabel);
    
    // Add Product Area tabs
    productAreas.forEach((area, index) => {
        const tab = document.createElement('button');
        tab.className = 'tab';
        if (index === 0) tab.classList.add('first-area-tab');
        tab.textContent = area;
        tab.dataset.view = 'productarea';
        tab.dataset.area = area;
        tabsContainer.appendChild(tab);
    });
    
    // Set initial active tab
    appsTab.classList.add('active');
    
    return {
        selectedRelease: releaseFilter.value,
        selectedTab: 'apps'
    };
}

function getBaseProductArea(productArea) {
    return productArea.split('(')[0].trim();
}

function getProductAreaSuffix(productArea) {
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
    
    const externalIcon = document.createElement('span');
    externalIcon.className = 'external-link-icon';
    externalIcon.innerHTML = '↗';
    issueLink.appendChild(externalIcon);
    
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
    
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = appName;
    header.appendChild(title);
    
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

function displayAppView(issues) {
    const container = document.getElementById('issueCards');
    container.className = 'cards-container';
    container.innerHTML = '';
    
    const groupedIssues = groupIssuesByApp(issues);
    
    Object.entries(groupedIssues)
        .sort(([appA], [appB]) => appA.localeCompare(appB))
        .forEach(([appName, appIssues]) => {
            container.appendChild(createAppCard(appName, appIssues));
        });
}

function displayProductAreaView(issues, selectedArea) {
    const container = document.getElementById('issueCards');
    container.className = 'product-area-list';
    container.innerHTML = '';
    
    const areaIssues = issues.filter(issue => {
        if (!issue.productAreas) return false;
        const areas = Array.isArray(issue.productAreas) ? 
            issue.productAreas : [issue.productAreas];
        return areas.some(area => getBaseProductArea(area) === selectedArea);
    });

    const issuesList = document.createElement('ul');
    issuesList.className = 'issue-list';
    
    areaIssues
        .sort((a, b) => a.key.localeCompare(b.key))
        .forEach(issue => {
            const productArea = Array.isArray(issue.productAreas) ? 
                issue.productAreas.find(area => getBaseProductArea(area) === selectedArea) :
                issue.productAreas;
            const issueCopy = {...issue, productAreaSuffix: getProductAreaSuffix(productArea)};
            issuesList.appendChild(createIssueLink(issueCopy));
        });
    
    container.appendChild(issuesList);
}

function displayIssues(issues, selectedRelease, view, selectedArea) {
    const filteredIssues = issues.filter(issue => 
        !selectedRelease || issue.targetRelease === selectedRelease
    );
    
    if (view === 'apps') {
        displayAppView(filteredIssues);
    } else {
        displayProductAreaView(filteredIssues, selectedArea);
    }
}

async function initialize() {
    const issues = await loadData();
    const { selectedRelease, selectedTab } = populateFilters(issues);
    
    displayIssues(issues, selectedRelease, selectedTab);
    
    document.getElementById('releaseFilter').addEventListener('change', (event) => {
        const activeTab = document.querySelector('.tab.active');
        displayIssues(
            issues, 
            event.target.value, 
            activeTab.dataset.view, 
            activeTab.dataset.area
        );
    });
    
    document.getElementById('viewTabs').addEventListener('click', (event) => {
        if (event.target.classList.contains('tab')) {
            // Update active tab
            document.querySelectorAll('.tab').forEach(tab => 
                tab.classList.remove('active')
            );
            event.target.classList.add('active');
            
            // Display issues
            displayIssues(
                issues,
                document.getElementById('releaseFilter').value,
                event.target.dataset.view,
                event.target.dataset.area
            );
        }
    });
}

initialize(); 