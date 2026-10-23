<!-- Describes the contents of the downloads folder: the embeddable release pages, their scripts, styles, and the JSON data that drives them. -->
# DHIS2 Downloads

This folder holds a set of small, self-contained web pages that present DHIS2 release
information (stable WAR files, Android Capture app, sample databases and the upcoming
patch schedule). Each page is plain HTML + JavaScript with no build step. They are
served from GitHub Pages and embedded as iframes on the DHIS2 website.

All pages read their content at runtime from the JSON data files in this folder, so the
pages themselves rarely change — updating a release usually means updating the JSON only. 

## Pages

| Page | Embedded at | Reads | Script / Style | What it shows |
|------|-------------|-------|----------------|---------------|
| [releases-index.html](releases-index.html) | _https://releases.dhis2.org/_ | [v1/versions/stable.json](v1/versions/stable.json) + [v1/versions/eos.json](v1/versions/eos.json) + live S3 listing | [js/releases-index.js](js/releases-index.js), [landing.css](landing.css) + [css/archive.css](css/archive.css) | Main "DHIS2 Releases" page. Stable / Development tabs, version selector, toggles for superseded patches and release candidates (the RC view queries the S3 bucket directly). |
| [downloads_stable.html](downloads_stable.html) | _https://dhis2.org/downloads/_ | [v1/versions/stable.json](v1/versions/stable.json) | [js/cards.js](js/cards.js), [css/cards.css](css/cards.css) | One download card per supported major version, showing its latest patch (WAR download, SHA256, release/upgrade notes, Docker pull). |
| [downloads_android.html](downloads_android.html) | _https://dhis2.org/downloads/_ | [v1/versions/android.json](v1/versions/android.json) | [js/carda.js](js/carda.js), [css/cards.css](css/cards.css) | Card for the latest Android Capture app (Google Play + GitHub links, Android and DHIS2 compatibility). |
| [downloads_demodb.html](downloads_demodb.html) | _https://dhis2.org/downloads/_ | [v1/versions/stable.json](v1/versions/stable.json) | [js/demo.js](js/demo.js), [css/cards.css](css/cards.css) | Cards linking to the Sierra Leone sample databases on databases.dhis2.org for each supported version. |
| [upcomingPatches.html](upcomingPatches.html) | _https://dhis2.org/downloads/#next_patch_ | [upcomingPatches.json](upcomingPatches.json) | [js/next.js](js/next.js), [css/next.css](css/next.css) | Timeline of patch and major releases scheduled over the next three months, with per-release detail (target date, Jira and roadmap links). |
| [archive.html](archive.html) | _https://dhis2.org/downloads/archive/_ | [v1/versions/stable.json](v1/versions/stable.json) + [v1/versions/eos.json](v1/versions/eos.json) | [js/archive.js](js/archive.js), [css/archive.css](css/archive.css) | Browsable archive of all releases, with a version selector and a full per-patch table (downloads, sizes, hashes, release notes). |

> [!IMPORTANT]
> releases-index.html is not served from GitHub Pages: it is `index.html` at the root of the
> `releases.dhis2.org` S3 bucket. After changing it or the files it loads, copy them to the
> bucket from this folder:
>
> ```shell
> aws s3 cp releases-index.html s3://releases.dhis2.org/index.html
> aws s3 cp js/releases-index.js s3://releases.dhis2.org/js/releases-index.js
> aws s3 cp landing.css s3://releases.dhis2.org/landing.css
> aws s3 cp css/archive.css s3://releases.dhis2.org/css/archive.css
> aws s3 cp dhis2-logo-rgb-positive.png s3://releases.dhis2.org/dhis2-logo-rgb-positive.png
> ```
>
> The page reads stable.json and eos.json from the bucket's `v1/versions/`, which the
> upload-stable-json and update-eos-json workflows keep up to date.

> [!NOTE]
> stable.json and eos.json are updated automatically, but upcomingPatches.json is updated manually be the release team. 

## Shared script

- [js/localise.js](js/localise.js) — Loaded by every page. Reads the `?locale=` query
  parameter (defaults to `en`) and provides the translation map used for all UI strings.
  Currently supports English, French, Spanish and Portuguese. Because pages are embedded
  as iframes, the host page can select the language via the iframe URL.

## Data files

These are the source of truth for the pages above.

- [v1/versions/stable.json](v1/versions/stable.json) — Canonical list of stable releases.
  Each major version lists its patch versions with download URL, SHA256, file size,
  release date, hotfix and support flags. Drives the stable, demo-db and archive pages.
- [v1/versions/eos.json](v1/versions/eos.json) — End-of-support (EOS) builds of unsupported
  versions, keyed by version name, with download URL, build date, SHA256 and file size. EOS
  builds are rebuilt in place whenever their branch changes, so this file is refreshed nightly
  from the S3 bucket by the [update-eos-json](../.github/workflows/update-eos-json.yml) workflow
  (see [tools/update-eos-json](../tools/update-eos-json)). The stable and archive pages show the
  EOS build as the recommended download for an unsupported version.
- [v1/versions/android.json](v1/versions/android.json) — Android Capture app versions,
  with download links, release notes and Android/DHIS2 compatibility ranges.
- [upcomingPatches.json](upcomingPatches.json) — Schedule of upcoming releases (name,
  version, target date, and a `lastPatch` flag for final maintenance patches).

## Styles and assets

- [landing.css](landing.css) — Base layout/theme used by the releases index page.
- [css/cards.css](css/cards.css) — Card styling shared by the stable, android and demo-db pages.
- [css/archive.css](css/archive.css) — Styling for the archive and releases-index tables/cards.
- [css/next.css](css/next.css) — Styling for the upcoming-patches timeline.
- [dhis2-logo-rgb-positive.png](dhis2-logo-rgb-positive.png) — DHIS2 logo used on the releases index page.
- [img/GitHub_Lockup_Light.png](img/GitHub_Lockup_Light.png), [img/google-play-badge.png](img/google-play-badge.png) — Store/download badges for the Android page.
