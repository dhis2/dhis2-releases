# Can I Revert?

The Flyway database migration system generally prevents downgrading of DHIS2 versions in many cases due to the database migrations that are applied during version upgrades.
However, if there are no migrations of the data model for a specific patch release, then it is possible to downgrade the DHIS2 version to the previous version without issue.

The following table indicates the **downgradable** DHIS2 patches, based on the migrations.

- ✓ - means the version can be downgraded to the previous patch
- ✗ - means there are database migrations and the patch cannot be downgraded/reverted.

| Version → | 2.31 | 2.32 | 2.33 | 2.34 | 2.35 | 2.36 | 2.37 | 2.38 | 2.39 | 2.40 | 2.41 | 2.42 |
| ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Patch** ↓  |   |   |   |   |   |   |   |   |   |   |   |   |
| 0 | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 1 | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ |
| 2 | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ |
| 3 | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ |   |
| 4 | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ |   |
| 5 | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |   |
| 6 | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |   |   |
| 7 | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ |   |   |
| 8 | ✓ |   | ✗ | ✗ | ✗ | ✓ | ✗ |   | ✗ | ✗ |   |   |
| 9 | ✗ |   | ✗ | ✓ | ✓ | ✗ | ✓ |   | ✓ | ✗ |   |   |
| 10 |   |   |   |   | ✓ | ✓ | ✓ |   | ✗ |   |   |   |
| 11 |   |   |   |   | ✗ | ✗ |   |   |   |   |   |   |
| 12 |   |   |   |   | ✓ | ✗ |   |   |   |   |   |   |
| 13 |   |   |   |   | ✓ | ✓ |   |   |   |   |   |   |
| 14 |   |   |   |   | ✓ |   |   |   |   |   |   |   |

