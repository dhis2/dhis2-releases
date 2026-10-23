## eos.json file updater

Updates the [eos.json](/downloads/v1/versions/eos.json) file that lists the end-of-support (EOS) builds of unsupported DHIS2 versions.

EOS builds are uploaded by the dhis2-core EOS pipeline to `<version>/dhis2-stable-<version>-eos.war` and are rebuilt in place whenever the branch changes. For each version in [stable.json](/downloads/v1/versions/stable.json), the script looks for that file in the S3 bucket listing. A build is only downloaded and re-hashed when its S3 ETag differs from the one recorded in eos.json; builds that no longer exist are removed.

The [update-eos-json](/.github/workflows/update-eos-json.yml) workflow runs it nightly, commits any change and uploads eos.json to `s3://releases.dhis2.org/v1/versions/eos.json`.

### Usage

```shell
./update_eos_json.py \
  --stable-json-file ../../downloads/v1/versions/stable.json \
  --json-file ../../downloads/v1/versions/eos.json
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
