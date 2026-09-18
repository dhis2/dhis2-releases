# Puts the tool's modules on the import path so the tests can run from anywhere.

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
