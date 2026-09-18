# Cached HTTP access to GitHub, covering both the REST API and raw file contents.
# Responses are kept on disk so repeated runs do not re-spend the rate limit.

import hashlib
import json
import os
import time
from pathlib import Path

import requests
from requests.adapters import HTTPAdapter
from urllib3.util import Retry

API_ROOT = "https://api.github.com"
RAW_ROOT = "https://raw.githubusercontent.com"
CACHE_DIR = Path(__file__).resolve().parent / ".cache"
CACHE_TTL_SECONDS = 24 * 60 * 60

RETRY = Retry(
    total=4,
    backoff_factor=2,
    status_forcelist=(429, 500, 502, 503, 504),
)
REQUEST_TIMEOUT_SECONDS = 30


class RateLimited(Exception):
    """GitHub refused the request because the API rate limit is used up."""


class GitHub:
    """Fetches GitHub content, serving repeated requests from a local cache."""

    def __init__(self, token=None, use_cache=True):
        self.use_cache = use_cache
        self.session = requests.Session()
        self.session.mount("https://", HTTPAdapter(max_retries=RETRY))
        self.session.headers["Accept"] = "application/vnd.github+json"
        token = token or os.environ.get("GITHUB_TOKEN")
        if token:
            self.session.headers["Authorization"] = "Bearer " + token

    def api(self, path, allow_missing=False):
        """Decoded body of a REST API path, or None for a 404 when allowed."""
        return self._get(API_ROOT + path, path, allow_missing)

    def raw(self, path, allow_missing=False):
        """Decoded body of a file served from raw.githubusercontent.com."""
        return self._get(RAW_ROOT + path, path, allow_missing)

    def _get(self, url, label, allow_missing):
        status, text = self._fetch(url)
        if status == 404:
            if allow_missing:
                return None
            raise LookupError(f"GitHub returned 404 for {label}")
        return json.loads(text)

    def _fetch(self, url):
        cached = self._read_cache(url)
        if cached is not None:
            return cached["status"], cached["text"]
        response = self.session.get(url, timeout=REQUEST_TIMEOUT_SECONDS)
        if response.status_code in (403, 429) and response.headers.get("x-ratelimit-remaining") == "0":
            raise RateLimited(
                f"GitHub API rate limit reached, resetting at {self._reset_time(response)}. "
                f"Set GITHUB_TOKEN or pass --github-token to raise the limit."
            )
        if response.status_code not in (200, 404):
            response.raise_for_status()
        self._write_cache(url, response.status_code, response.text)
        return response.status_code, response.text

    @staticmethod
    def _reset_time(response):
        reset = response.headers.get("x-ratelimit-reset")
        if not reset:
            return "an unknown time"
        return time.strftime("%H:%M:%S %Z", time.localtime(int(reset)))

    def _cache_file(self, url):
        return CACHE_DIR / (hashlib.sha256(url.encode()).hexdigest() + ".json")

    def _read_cache(self, url):
        path = self._cache_file(url)
        if not self.use_cache or not path.exists():
            return None
        if time.time() - path.stat().st_mtime > CACHE_TTL_SECONDS:
            return None
        return json.loads(path.read_text())

    def _write_cache(self, url, status, text):
        if not self.use_cache:
            return
        CACHE_DIR.mkdir(exist_ok=True)
        self._cache_file(url).write_text(json.dumps({"status": status, "text": text}))
