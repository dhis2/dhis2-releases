# Checks the JQL built for each shape of patch version.

from jira_issues import build_jql
from versions import Version, earlier_patches


def jql_for(raw, issue_type="Bug"):
    version = Version.parse(raw)
    return build_jql(issue_type, version, earlier_patches(version))


def test_patch_excludes_the_patches_before_it():
    jql = jql_for("2.42.5")
    assert 'fixVersion = "2.42.5"' in jql
    assert 'fixVersion not in ("2.42.0", "2.42.1", "2.42.2", "2.42.3", "2.42.3.1", "2.42.4", "2.42.4.1")' in jql


def test_hotfix_excludes_its_parent_patch():
    assert '"2.42.5"' in jql_for("2.42.5.1").split("not in")[1]


def test_first_patch_also_takes_the_release_line():
    jql = jql_for("2.42.0")
    assert 'fixVersion in ("2.42.0", "2.42")' in jql
    assert "not in" not in jql


def test_issue_type_and_ordering():
    jql = jql_for("2.42.5", issue_type="Feature")
    assert 'type = "Feature"' in jql
    assert jql.endswith("ORDER BY component ASC, updated DESC")
