## stable.json file updater

Updates the [stable.json](/downloads/v1/versions/stable.json) file that contains DHIS2 releases data.

### Usage

```shell
./update_stable_json.py \
  --version 42.0.0 \
  --war-url https://releases.dhis2.org/42/dhis2-stable-42.0.0.war \
  --war-path dhis.war \
  --release-date $(date +%F) \
  --json-file stable.json
```

### Tests

Install the development dependencies:
```shell
pip install -r requirements-dev.txt
```

Run the tests:
```shell
pytest
```
