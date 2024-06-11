## stable.json file updater

Updates the [stable.json](/downloads/v1/versions/stable.json) file that contains DHIS2 releases data.

### Usage

```shell
python3 update_stable_json.py \
  --version 42.0.0 \
  --url https://releases.dhis2.org/42/dhis2-stable-42.0.0.war \
  --sha256 'abc123' \
  --file-size "290.0 MB" \
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
