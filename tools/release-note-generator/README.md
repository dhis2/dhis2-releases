# DHIS2 Patch Release Note Generator

Builds `releases/<release>/ReleaseNote-<version>.md` for a patch release. The
note has two halves:

- **Features and Bugs** — the issues Jira records against the patch's fix version.
- **App updates** — for every bundled app whose version moved since the previous
  patch, the changes made in that app, categorised from its commit messages.

## Setup

Needs Python 3.8 or later. Run the tool from its own virtual environment — the
system Python may carry versions of `requests`/`urllib3` too old for it:

```
python3 -m venv venv
./venv/bin/pip install -r requirements.txt
```

## Usage

```
export JIRA_EMAIL=you@dhis2.org
export JIRA_API_TOKEN=...      # https://id.atlassian.com/manage-profile/security/api-tokens
export GITHUB_TOKEN=...        # any token with public repo read access

./venv/bin/python generate.py 2.42.5
```

The note is written to `releases/2.42/ReleaseNote-2.42.5.md`. **Read it and edit
as needed before pushing** — it is a first draft, not a finished note.

Useful options:

| Option | Effect |
| --- | --- |
| `--previous 2.42.4` | compare bundled apps against a specific patch |
| `--full` | also report app changes that name no tracked issue |
| `--no-apps` / `--no-jira` | build only one half of the note |
| `--output PATH` | write somewhere else |
| `--no-cache` | ignore cached GitHub responses |

A `notdone-<version>.txt` file is written alongside the tool listing issues in
the fix version that are not yet Done — check these before publishing.

## Layout

The note has two parallel halves, **Core updates** and **App updates**.

Under Core updates, Features and Bugs are grouped by their first Jira component,
one line per issue, with any further components noted on the entry. App updates
opens with a table linking to each app, followed by the apps themselves.

An issue named by one of the app sections is left out of Core updates, so each
fix is stated once. The test is the issue key actually printed under an app, not
the issue's component — an app's fix can be missing from its section because the
app is released with core, or because no commit message named the key, and
dropping by component would lose those.

Headings are kept to plain names so their anchors come out the same in
kramdown, which GitHub Pages renders the published `.html` with, and on
github.com, which serves the `.md`. GitHub's `> [!NOTE]` alert blocks do **not**
work here: kramdown has no such extension and would print the marker as text.

## Which issues appear

An issue can carry several fix versions, so one fixed in 2.42.5 may also be
tagged 2.42.1. The query therefore asks for the patch's own fix version and
excludes every patch released before it, so each fix appears in the note for the
release that first shipped it:

```
project = DHIS2 AND type = "Bug" AND fixVersion = "2.42.5"
  AND fixVersion not in ("2.42.0", ..., "2.42.4.1")
```

The list of earlier patches comes from `downloads/v1/versions/stable.json`, so
hotfixes such as 2.42.4.1 are included in the exclusion.

The first patch of a release line (`2.42.0`) instead takes everything targeted
at the line: `fixVersion in ("2.42.0", "2.42")`.

## Which app changes appear

`apps-to-bundle.json` in dhis2-core records the version of each app a release
bundles. The generator reads it at both the patch's tag and the previous patch's
tag, and for every app whose pin moved it compares the two versions in the app's
own repository.

Commit messages are read as conventional commits, so `feat:` lines become
Features, `fix:` lines become Bug Fixes, and so on. `chore`, `ci` and `test`
changes are left out. By default only changes naming a tracked issue
(`DHIS2-`, `LIBS-`, `TECH-`, `ANDROID-`) are reported, which removes dependency
bumps and other housekeeping — `--full` keeps them.

An app whose changes name no tracked issue gets a general sentence instead of a
list, describing the themes its commits do cover — "Includes minor improvements,
minor bug fixes and new translations." An app with nothing user-facing at all
says so, which accounts for the version having moved.

Apps pinned to the DHIS2 version itself, such as `maintenance-app#2.42.5`, are
built from the core patch branch rather than released on their own. Their fixes
already appear among the features and bugs above, so the app section leaves them
out; the console lists them as it runs.

## Cache

GitHub responses are cached in `.cache/` for a day, so re-running to adjust the
output costs no API calls. Delete the directory or pass `--no-cache` to refresh.

## Tests

```
./venv/bin/python -m pytest tests
```
