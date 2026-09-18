# Checks how commit messages are turned into categorised release note entries,
# using messages taken from the capture-app and maps-app repositories.

from commits import categorise, drop_contained, general_summary, tracked_changes

MESSAGES = [
    "fix: [DHIS2-20514] New form not open without org unit selected for programs with categories  (#4410)",
    "chore(release): cut 105.2.9 [skip release]",
    "feat: [DHIS2-18740] Update feedback and indicator widgets in View event page in Event programs (#4435)",
    "refactor: [DHIS2-19134] use select dropdown from dhis2/ui (#3992)",
    "docs: [DHIS2-21386] Docs for empty value filtering (#4536)",
    "perf: speed up the working list query",
    "ci: bump the node version",
    "test: cover the org unit selector",
    "fix(translations): sync translations from transifex (master)",
    "chore(deps): bump nanoid from 3.3.6 to 3.3.8",
]


def test_conventional_types_map_to_categories():
    categorised = categorise(MESSAGES)
    assert set(categorised) == {
        "Features",
        "Bug Fixes",
        "Performance",
        "Refactoring",
        "Documentation",
        "Testing",
        "Build Updates",
        "Maintenance",
    }


def test_the_type_prefix_is_stripped():
    categorised = categorise(MESSAGES)
    assert (
        "[DHIS2-18740] Update feedback and indicator widgets in View event page in Event programs (#4435)"
        in categorised["Features"]
    )


def test_a_scope_is_kept_as_a_prefix():
    categorised = categorise(MESSAGES)
    assert "translations: sync translations from transifex (master)" in categorised["Bug Fixes"]


def test_every_line_of_a_squashed_commit_contributes():
    squashed = "\n".join(
        [
            "feat: [DHIS2-20429] use configured TEA Search Operators (#4413)",
            "",
            "* feat: [DHIS2-20530] add the operator list",
            "* fix: [DHIS2-20531] keep the previous selection",
        ]
    )
    categorised = categorise([squashed])
    assert len(categorised["Features"]) == 2
    assert "[DHIS2-20531] keep the previous selection" in categorised["Bug Fixes"]


def test_entries_contained_in_another_entry_are_dropped():
    entries = {
        "[DHIS2-1] fix the thing",
        "[DHIS2-1] fix the thing properly",
        "[DHIS2-2] unrelated",
    }
    assert drop_contained(entries) == {
        "[DHIS2-1] fix the thing properly",
        "[DHIS2-2] unrelated",
    }


def test_identical_entries_collapse():
    assert drop_contained({"same", "same"}) == {"same"}


def test_tracked_changes_keep_only_entries_naming_an_issue():
    changes = tracked_changes(categorise(MESSAGES))
    assert changes["Features"] == [
        "[DHIS2-18740] Update feedback and indicator widgets in View event page in Event programs (#4435)"
    ]
    assert "perf: speed up the working list query" not in str(changes)


def test_tracked_changes_leave_out_internal_categories():
    changes = tracked_changes(categorise(MESSAGES), issues_only=False)
    assert set(changes) <= {
        "Features",
        "Bug Fixes",
        "Performance",
        "Refactoring",
        "Documentation",
    }


def test_summary_names_translations_and_dependency_work():
    summary = general_summary(categorise(MESSAGES))
    assert "new translations" in summary
    assert "dependency updates" in summary


def test_summary_does_not_count_a_translation_sync_as_a_bug_fix():
    categorised = categorise(["fix(translations): sync translations from transifex (master)"])
    assert general_summary(categorised) == ["new translations"]


def test_summary_names_the_categories_that_remain():
    categorised = categorise(
        [
            "feat: add shortcuts for command palette (#613)",
            "fix: capitalization on App Hub shortcut (#614)",
        ]
    )
    assert general_summary(categorised) == ["minor improvements", "minor bug fixes"]


def test_summary_is_empty_when_only_release_chores_changed():
    assert general_summary(categorise(["chore(release): cut 100.5.1 [skip release]"])) == []
