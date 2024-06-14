
function getLocaleFromURL() {
    const queryParams = new URLSearchParams(window.location.search);
    const locale = queryParams.get('locale');
    return locale || 'en';
    
}

// Localization object
const localizationMap = {
    en: {
        latestVersion: "Latest version",
        hotfix: "Hotfix",
        latestPatch: "Latest patch",
        released: "Released",
        releaseNotes: "release notes",
        upgradeNotes: "upgrade notes",
        featureOverview: "Feature overview",
        download: "Download",
        downloadOnGitHub: "Download on GitHub",
        downloadOnGooglePlay: "Download on Google Play",
        androidCompatibility: "Android compatibility:",
        minimum: "minimum",
        recommended: "recommended",
        dhis2Compatibility: "DHIS2 compatibility:",
        downloadFromDocker: "Download from",
        with: "with",
        sha256sum: "SHA256SUM",
        sampleDatabase: "Sample database",
        targetReleaseDate: "Target release date",
        jiraLink01: "See the list of fixes so far for",
        jiraLink02: "this patch on Jira"
    },
    fr: {
        latestVersion: "Dernière version",
        hotfix: "Correctif",
        latestPatch: "Dernier patch",
        released: "Publié",
        releaseNotes: "notes de version",
        upgradeNotes: "notes de mise à niveau",
        featureOverview: "Aperçu des fonctionnalités",
        download: "Télécharger",
        downloadOnGitHub: "Télécharger sur GitHub",
        downloadOnGooglePlay: "Télécharger sur Google Play",
        androidCompatibility: "Compatibilité Android :",
        minimum: "minimum",
        recommended: "recommandé",
        dhis2Compatibility: "Compatibilité DHIS2 :",
        downloadFromDocker: "Télécharger depuis",
        with: "avec",
        sha256sum: "SHA256SUM",
        sampleDatabase: "Base de données d'exemple",
        targetReleaseDate: "Date de sortie prévue",
        jiraLink01: "Voir la liste des correctifs jusqu'à présent pour",
        jiraLink02: "ce patch sur Jira"
    },
    es: {
        latestVersion: "Última versión",
        hotfix: "Corrección urgente",
        latestPatch: "Último parche",
        released: "Lanzado",
        releaseNotes: "notas de la versión",
        upgradeNotes: "notas de actualización",
        featureOverview: "Descripción de características",
        download: "Descargar",
        downloadOnGitHub: "Descargar en GitHub",
        downloadOnGooglePlay: "Descargar en Google Play",
        androidCompatibility: "Compatibilidad con Android:",
        minimum: "mínimo",
        recommended: "recomendado",
        dhis2Compatibility: "Compatibilidad con DHIS2:",
        downloadFromDocker: "Descargar desde",
        with: "con",
        sha256sum: "SHA256SUM",
        sampleDatabase: "Base de datos de muestra",
        targetReleaseDate: "Fecha de lanzamiento prevista",
        jiraLink01: "Ver la lista de correcciones hasta ahora para",
        jiraLink02: "este parche en Jira"
    }
}; 