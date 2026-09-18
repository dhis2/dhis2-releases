# Checks the markdown a release note renders to, including issue links and the
# app updates section.

from bundled_apps import AppUpdate
from jira_issues import Issue
from render import AppReport, ReleaseNote, link_issues, render
from versions import Version

CAPTURE = AppUpdate("capture-app", "v105.2.8", "v106.2.2")
MENU = AppUpdate("menu-management-app", "v100.2.0", "v100.2.1")


def note():
    return ReleaseNote(
        version=Version.parse("2.42.5"),
        previous=Version.parse("2.42.4.1"),
        issues={
            "Feature": [
                Issue(
                    key="DHIS2-19426",
                    url="https://dhis2.atlassian.net/browse/DHIS2-19426",
                    summary="Add function inUserGroup to program rule expression",
                    status="Done",
                    components=("[API] Program rules",),
                )
            ],
            "Bug": [
                Issue(
                    key="DHIS2-21513",
                    url="https://dhis2.atlassian.net/browse/DHIS2-21513",
                    summary="Tracker Program Indicators do not work after editing",
                    status="Done",
                    components=("[API] Analytics", "[App] EVER"),
                )
            ],
        },
        apps=[
            AppReport(
                update=CAPTURE,
                changes={"Bug Fixes": ["[DHIS2-18592] Not saving an option (#4524)"]},
            ),
            AppReport(update=MENU, summary=["minor bug fixes", "new translations"]),
        ],
        added=["Datastore"],
    )


def test_links_a_bracketed_issue_key_without_nesting_brackets():
    assert link_issues("[DHIS2-1] fix") == (
        "[DHIS2-1](https://dhis2.atlassian.net/browse/DHIS2-1) fix"
    )


def test_links_a_bare_issue_key():
    assert "browse/TECH-99" in link_issues("chase TECH-99 down")


def test_leaves_other_text_alone():
    assert link_issues("bump nanoid 3.3.6 to 3.3.8") == "bump nanoid 3.3.6 to 3.3.8"


def test_contents_list_covers_every_section():
    markdown = render(note())
    assert "- [Core updates](#core-updates)" in markdown
    assert "  - [Features](#features)" in markdown
    assert "  - [Bugs](#bugs)" in markdown
    assert "- [App updates](#app-updates)" in markdown


def test_the_two_halves_are_parallel_headings():
    markdown = render(note())
    assert "## Core updates" in markdown
    assert "## App updates" in markdown


def test_issues_are_grouped_under_their_first_component():
    markdown = render(note())
    assert "#### [API] Program rules" in markdown
    assert (
        "- **[DHIS2-19426](https://dhis2.atlassian.net/browse/DHIS2-19426)** "
        "Add function inUserGroup to program rule expression" in markdown
    )
    assert "Components:" not in markdown


def test_further_components_are_noted_on_the_entry():
    markdown = render(note())
    assert "#### [API] Analytics" in markdown
    assert "Tracker Program Indicators do not work after editing — also _[App] EVER_" in markdown


def test_issues_without_a_component_go_last():
    uncategorised = Issue(
        key="DHIS2-1", url="http://x", summary="No component", status="Done", components=()
    )
    markdown = render(
        ReleaseNote(version=Version.parse("2.42.5"), issues={"Bug": [uncategorised]})
    )
    assert "#### Other" in markdown


def test_an_updated_app_lists_its_changes_by_category():
    markdown = render(note())
    assert "#### Bug Fixes" in markdown
    assert "- [DHIS2-18592](https://dhis2.atlassian.net/browse/DHIS2-18592) Not saving" in markdown


def test_an_app_without_tracked_changes_gets_a_general_summary():
    markdown = render(note())
    assert "### Menu Management" in markdown
    assert "Includes minor bug fixes and new translations." in markdown


def test_the_app_index_links_to_each_app_section():
    markdown = render(note())
    assert "| App | Versions | Changes |" in markdown
    assert "| [Capture](#capture) | 105.2.8 → 106.2.2 | 1 change |" in markdown
    assert (
        "| [Menu Management](#menu-management) | 100.2.0 → 100.2.1 "
        "| minor bug fixes and new translations |" in markdown
    )


def test_app_headings_anchor_on_the_name_alone():
    markdown = render(note())
    assert "### Capture\n" in markdown
    assert "[105.2.8 → 106.2.2](https://github.com/dhis2/capture-app/compare/v105.2.8...v106.2.2)" in markdown


def test_issues_the_app_sections_name_are_not_repeated():
    covered = Issue(
        key="DHIS2-18592",
        url="https://dhis2.atlassian.net/browse/DHIS2-18592",
        summary="Not saving an option that starts or ends with a space",
        status="Done",
        components=("[App] Capture",),
    )
    full = note()
    full.issues["Bug"].append(covered)
    markdown = render(full)
    assert "Not saving an option that starts or ends with a space" not in markdown
    assert "#### [App] Capture" not in markdown.split("## App updates")[0]


def test_issues_no_app_section_names_are_kept():
    markdown = render(note())
    assert "Tracker Program Indicators do not work after editing" in markdown


def test_readers_are_pointed_at_the_app_section():
    assert (
        "Changes made in the bundled applications are listed under "
        "[App updates](#app-updates)." in render(note())
    )


def test_an_app_with_nothing_to_report_says_so_in_the_index_too():
    markdown = render(
        ReleaseNote(
            version=Version.parse("2.42.5"),
            previous=Version.parse("2.42.4.1"),
            apps=[AppReport(update=MENU)],
        )
    )
    assert "Updated with no user-facing changes." in markdown


def test_newly_bundled_apps_are_named():
    assert "Newly bundled: Datastore." in render(note())


def test_a_note_without_app_changes_omits_the_section():
    bare = ReleaseNote(version=Version.parse("2.42.5"), issues={"Feature": [], "Bug": []})
    markdown = render(bare)
    assert "## App updates" not in markdown
    assert "- [App updates](#app-updates)" not in markdown


def test_keys_run_together_are_separated():
    linked = link_issues("[DHIS2-1][DHIS2-2] both")
    assert linked == (
        "[DHIS2-1](https://dhis2.atlassian.net/browse/DHIS2-1) "
        "[DHIS2-2](https://dhis2.atlassian.net/browse/DHIS2-2) both"
    )


def app_note():
    """A note whose Capture and Maps sections exist, with issues to file under them."""
    maps = AppUpdate("maps-app", "v101.5.1", "v101.11.0")
    return ReleaseNote(
        version=Version.parse("2.42.6"),
        previous=Version.parse("2.42.5"),
        issues={
            "Feature": [
                Issue("DHIS2-19542", "http://j/1", "Support multiple timeline layers",
                      "Done", ("[App] Maps",)),
            ],
            "Bug": [
                Issue("DHIS2-21961", "http://j/2", "Rule engine mismatch",
                      "Done", ("[API] Program rules", "[App] Capture")),
                Issue("DHIS2-9851", "http://j/3", "Maintenance list paging",
                      "Done", ("[App] Maintenance",)),
                Issue("DHIS2-21240", "http://j/4", "Section form totals",
                      "Done", ("[App] Data entry",)),
            ],
        },
        apps=[
            AppReport(update=maps, changes={"Bug Fixes": ["[DHIS2-100] existing maps fix"]}),
            AppReport(update=AppUpdate("aggregate-data-entry-app", "v101.1.4", "v102.0.6"),
                      summary=["new translations"]),
        ],
    )


def test_an_app_issue_moves_into_that_apps_section():
    markdown = render(app_note())
    core, apps = markdown.split("## App updates")
    assert "Support multiple timeline layers" not in core
    assert "Support multiple timeline layers" in apps
    assert "#### Features" in apps


def test_a_moved_issue_sits_beside_the_commit_derived_ones():
    apps = render(app_note()).split("## App updates")[1]
    maps = apps.split("### Maps")[1].split("\n### ")[0]
    assert "[DHIS2-100](https://dhis2.atlassian.net/browse/DHIS2-100) existing maps fix" in maps
    assert (
        "[DHIS2-19542](https://dhis2.atlassian.net/browse/DHIS2-19542) "
        "Support multiple timeline layers" in maps
    )
    assert maps.index("#### Features") < maps.index("#### Bug Fixes")


def test_an_api_first_issue_stays_under_core():
    core = render(app_note()).split("## App updates")[0]
    assert "Rule engine mismatch" in core


def test_an_issue_for_an_app_that_did_not_change_stays_under_core():
    core = render(app_note()).split("## App updates")[0]
    assert "Maintenance list paging" in core


def test_a_component_named_differently_from_the_app_still_matches():
    apps = render(app_note()).split("## App updates")[1]
    entry = apps.split("### Aggregate Data Entry")[1]
    assert "Section form totals" in entry
    assert "Includes new translations." not in entry


def test_the_index_counts_moved_issues():
    markdown = render(app_note())
    assert "| [Maps](#maps) | 101.5.1 → 101.11.0 | 2 changes |" in markdown
    assert "| [Aggregate Data Entry](#aggregate-data-entry) | 101.1.4 → 102.0.6 | 1 change |" in markdown
