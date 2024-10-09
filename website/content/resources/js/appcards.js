const apps = [];
const maxApps = [];
const categories = [];

function createAppCard(app) {
    // console.log(app);
    const card = document.createElement('div');
    card.className = 'card';

    // Front of the card
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const logo = app.images.find(img => img.logo);
    if (logo) {
        const logoImg = document.createElement('img');
        logoImg.src = logo.imageUrl;
        logoImg.alt = `${app.name} logo`;
        logoImg.className = 'card-logo';
        cardHeader.appendChild(logoImg);
    }

    const titleContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = app.name;
    titleContainer.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.className = 'card-subtitle';
    subtitle.textContent = `by ${app.developer.organisation}`;
    titleContainer.appendChild(subtitle);

    cardHeader.appendChild(titleContainer);

    const headerRight = document.createElement('div');
    headerRight.className = 'header-right';

    const latestVersion = app.versions[0];
    const versionChip = document.createElement('div');
    versionChip.className = 'version-chip';
    
    const versionText = document.createElement('span');
    versionText.textContent = `v${latestVersion.version}`;
    versionChip.appendChild(versionText);

    const infoIcon = document.createElement('span');
    infoIcon.className = 'info-icon';
    infoIcon.innerHTML = '&#9432;';
    infoIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('flipped');
    });
    versionChip.appendChild(infoIcon);

    headerRight.appendChild(versionChip);
    cardHeader.appendChild(headerRight);

    cardFront.appendChild(cardHeader);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardBodyTop = document.createElement('div');
    cardBodyTop.className = 'card-body-top';

    if (app.core) {
        const coreIcon = document.createElement('span');
        coreIcon.className = 'core-icon';
        coreIcon.innerHTML = '<i class="fa fa-sun"></i>';
        coreIcon.title = 'Core App';
        cardBodyTop.appendChild(coreIcon);
    }

    if (app.functionalCategory) {
        // if there are multiple categories, separate them into multiple chips
        const categories = app.functionalCategory.split(', ');
        categories.forEach(category => {
            const categoryChip = document.createElement('span');
            categoryChip.className = 'category-chip';
            categoryChip.textContent = category.toUpperCase();
            cardBodyTop.appendChild(categoryChip);
        });
    }

    cardBody.appendChild(cardBodyTop);

    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = app.description.split('\n')[0];
    cardBody.appendChild(description);

    cardFront.appendChild(cardBody);

    // Create footer
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const latestVersionFooter = app.versions[0];

    const minVersionChipFooter = createChip(`DHIS2 ${latestVersionFooter.minDhisVersion}+`);
    cardFooter.appendChild(minVersionChipFooter);

    const lastUpdatedFooter = document.createElement('span');
    lastUpdatedFooter.className = 'last-updated';
    lastUpdatedFooter.textContent = `Updated: ${new Date(latestVersionFooter.lastUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`;
    cardFooter.appendChild(lastUpdatedFooter);

    const downloadLink = document.createElement('a');
    downloadLink.href = `https://apps.dhis2.org/app/${app.id}`;
    downloadLink.className = 'download-link';
    downloadLink.textContent = 'AppHub';
    cardFooter.appendChild(downloadLink);

    cardFront.appendChild(cardFooter);

    // Back of the card
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';

    const backHeader = document.createElement('div');
    backHeader.className = 'card-header';

    const backTitle = document.createElement('h2');
    backTitle.className = 'card-title';
    backTitle.textContent = 'Latest Release Information';
    backHeader.appendChild(backTitle);

    const backIcon = document.createElement('span');
    backIcon.className = 'back-icon';
    backIcon.innerHTML = '&#8635;';
    backIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('flipped');
    });
    backHeader.appendChild(backIcon);

    cardBack.appendChild(backHeader);

    const releaseInfo = document.createElement('div');
    releaseInfo.className = 'release-info';

    // check if release notes have a GitHub property (handle case if latestVersion.releaseNotes.GitHub doesn't exist)
    if (latestVersion.releaseNotes && latestVersion.releaseNotes.GitHub) {
        releaseInfo.innerHTML = latestVersion.releaseNotes.GitHub;
    } else {
        if (latestVersion.releaseNotes && latestVersion.releaseNotes.Features) {
            const featuresTitle = document.createElement('h3');
            featuresTitle.textContent = 'Features';
            releaseInfo.appendChild(featuresTitle);

            const featuresList = document.createElement('ul');
            latestVersion.releaseNotes.Features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            releaseInfo.appendChild(featuresList);
        }

        if (latestVersion.releaseNotes && latestVersion.releaseNotes['Bug Fixes']) {
            const bugFixesTitle = document.createElement('h3');
            bugFixesTitle.textContent = 'Bug Fixes';
            releaseInfo.appendChild(bugFixesTitle);

            const bugFixesList = document.createElement('ul');
            latestVersion.releaseNotes['Bug Fixes'].forEach(bugFix => {
                const li = document.createElement('li');
                li.textContent = bugFix;
                bugFixesList.appendChild(li);
            });
            releaseInfo.appendChild(bugFixesList);
        }
    }

    cardBack.appendChild(releaseInfo);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    // console.log(card);
    return card;
}

function createChip(text) {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = text;
    return chip;
}

function fetchApps() {
    fetch('../data/apphub.json')
        .then(response => response.json())
        .then(data => {
            apps.push(...data);
            fetchMaxApps();
        }
    );
}

function fetchMaxApps() {
    fetch('../data/max_apps.json')
        .then(response => response.json())
        .then(data => {
            maxApps.push(...data);
            renderAppCards();
        }
    );
}

function renderAppCards() {
    const appGrid = document.getElementById('app-grid');
    console.log(appGrid);

    // Clear existing categories
    categories.length = 0;

    // First pass: populate categories
    apps.forEach(app => {
        if (maxApps.some(maxApp => maxApp.name === app.name)) {
            const maxApp = maxApps.find(maxApp => maxApp.name === app.name);
            app.core = maxApp.core === 'Yes';
            app.functionalCategory = maxApp.functionalCategory;

            // Add categories to the array
            if (app.functionalCategory) {
                app.functionalCategory.split(', ').forEach(category => {
                    if (!categories.includes(category)) {
                        categories.push(category);
                    }
                });
            }
        }
    });

    // Sort categories alphabetically
    categories.sort();

    // Add filter section
    const filterSection = createFilterSection();
    appGrid.parentNode.insertBefore(filterSection, appGrid);

    // Second pass: create and append app cards
    apps.forEach(app => {
        if (maxApps.some(maxApp => maxApp.name === app.name)) {
            const maxApp = maxApps.find(maxApp => maxApp.name === app.name);
            app.core = maxApp.core === 'Yes';
            app.functionalCategory = maxApp.functionalCategory;

            const card = createAppCard(app);
            
            // Add data-categories attribute to the card
            card.dataset.categories = app.functionalCategory || '';
            
            card.dataset.core = app.core.toString();
            
            appGrid.appendChild(card);
        }
        // if an app is not in maxApps, but is from organisation DHIS2 or UiO, print the name
        else if (app.developer.organisation === 'DHIS2' || app.developer.organisation === 'UiO') {
            console.log(app.name);
        }
    });

    handleCardScroll();
}

function handleCardScroll() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const cardBack = card.querySelector('.card-back');
        const releaseInfo = card.querySelector('.release-info');
        
        cardBack.addEventListener('wheel', (e) => {
            const containerHeight = releaseInfo.clientHeight;
            const contentHeight = releaseInfo.scrollHeight;
            
            if (contentHeight > containerHeight) {
                e.preventDefault();
                const delta = e.deltaY || e.detail || e.wheelDelta;
                releaseInfo.scrollTop += delta;
            }
        });
        

    });
}

function createFilterSection() {
    const filterSection = document.createElement('div');
    filterSection.id = 'filter-section';
    filterSection.className = 'filter-section';

    // Category filter
    const categoryFilterLabel = document.createElement('label');
    categoryFilterLabel.textContent = 'Filter by category: ';
    filterSection.appendChild(categoryFilterLabel);

    categories.forEach(category => {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `category-${category.toLowerCase()}`;
        checkbox.value = category;
        checkbox.addEventListener('change', filterAppCards);

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = category;

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        filterSection.appendChild(checkboxContainer);
    });

    // Core app filter
    const coreFilterContainer = document.createElement('div');
    coreFilterContainer.className = 'core-filter-container';

    const coreFilterLabel = document.createElement('label');
    coreFilterLabel.textContent = 'App type: ';
    coreFilterContainer.appendChild(coreFilterLabel);

    const coreCheckbox = document.createElement('input');
    coreCheckbox.type = 'checkbox';
    coreCheckbox.id = 'core-app-filter';
    coreCheckbox.value = 'core';
    coreCheckbox.addEventListener('change', filterAppCards);

    const coreLabel = document.createElement('label');
    coreLabel.htmlFor = 'core-app-filter';
    coreLabel.innerHTML = '<i class="fa fa-sun"></i> Core (bundled)';

    const nonCoreCheckbox = document.createElement('input');
    nonCoreCheckbox.type = 'checkbox';
    nonCoreCheckbox.id = 'non-core-app-filter';
    nonCoreCheckbox.value = 'non-core';
    nonCoreCheckbox.addEventListener('change', filterAppCards);

    const nonCoreLabel = document.createElement('label');
    nonCoreLabel.htmlFor = 'non-core-app-filter';
    nonCoreLabel.textContent = 'Non-Core';

    coreFilterContainer.appendChild(coreCheckbox);
    coreFilterContainer.appendChild(coreLabel);
    coreFilterContainer.appendChild(nonCoreCheckbox);
    coreFilterContainer.appendChild(nonCoreLabel);

    filterSection.appendChild(coreFilterContainer);

    // Add explanatory note
    const explanatoryNote = document.createElement('span');
    explanatoryNote.className = 'explanatory-note';
    explanatoryNote.textContent = '*bundled apps are included in the DHIS2 server (core) releases';
    coreFilterContainer.appendChild(explanatoryNote);

    return filterSection;
}

function filterAppCards() {
    const selectedCategories = Array.from(document.querySelectorAll('#filter-section input[type="checkbox"]:checked:not(#core-app-filter):not(#non-core-app-filter)'))
        .map(checkbox => checkbox.value);
    const isCoreSelected = document.getElementById('core-app-filter').checked;
    const isNonCoreSelected = document.getElementById('non-core-app-filter').checked;
    const appCards = document.querySelectorAll('.card');

    appCards.forEach(card => {
        const cardCategories = card.dataset.categories.split(', ');
        const isCore = card.dataset.core === 'true';

        const matchesCategory = selectedCategories.length === 0 || cardCategories.some(category => selectedCategories.includes(category));
        const matchesCore = (isCoreSelected && isCore) || (isNonCoreSelected && !isCore) || (!isCoreSelected && !isNonCoreSelected);

        if (matchesCategory && matchesCore) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchApps);