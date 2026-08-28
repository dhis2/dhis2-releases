# Watches the GitHub repos referenced by apps-to-bundle.json until every
# app tag/branch is published, showing a live readiness table.
import requests
import json
import os
import re
import time
from rich.console import Console
from rich.table import Table
from rich.live import Live

APPS_TO_BUNDLE_PATHS = (
    'dhis-2/dhis-web-server/apps-to-bundle.json',
    'dhis-2/dhis-web/dhis-web-apps/apps-to-bundle.json',
)

def read_apps_to_bundle():
    # The file moved between core versions, so take whichever path is present
    for path in APPS_TO_BUNDLE_PATHS:
        if os.path.exists(path):
            with open(path) as file:
                return file.read()
    raise FileNotFoundError(
        'apps-to-bundle.json not found in any of: ' + ', '.join(APPS_TO_BUNDLE_PATHS)
    )

def check_url(url):
    # Transform the URL before checking
    url = url.replace('#', '/tree/')
    try:
        response = requests.head(url)
        return response.status_code == 200
    except requests.RequestException:
        return False

def transform_url(url):
    # Create source URL (dhis2 version)
    source_url = url.replace('d2-ci', 'dhis2')
    source_url = re.sub(r'[",]', '', source_url)
    source_url = re.sub(r'#', '/tree/', source_url)
    return source_url

def generate_table(url_statuses, timer=None):
    table = Table()
    status_text = "Status" if not timer else f"(waiting {timer}s)"
    table.add_column(status_text, style="bold")
    table.add_column("Package", style="cyan")
    table.add_column("Source", style="blue")
    
    for package_url, (status, source_url) in url_statuses.items():
        if status is None:  # Pending status
            status_text = "PENDING"
            status_style = "yellow"
        elif status == "checking":  # Add checking status
            status_text = "CHECKING"
            status_style = "yellow bold"
        else:
            status_text = "READY" if status else "NOT READY"
            status_style = "green" if status else "red"
        
        table.add_row(f"[{status_style}]{status_text}[/{status_style}]", package_url, source_url)
    
    return table

def main():
    console = Console()
    
    # Read and process URLs
    package_urls = re.findall(r'(https:\/\/github.com\/[^",#]+#?[^"]*)', read_apps_to_bundle())
    
    # Transform package URLs when creating the dictionary
    url_statuses = {
        url.replace('#', '/tree/'): [None, transform_url(url)] 
        for url in package_urls
    }
    
    with Live(generate_table(url_statuses), refresh_per_second=4, console=console) as live:
        while not all(status is True for status, _ in url_statuses.values()):
            for package_url in list(url_statuses.keys()):
                if url_statuses[package_url][0] is not True:  # Check if not READY
                    url_statuses[package_url][0] = "checking"  # Set status to checking
                    live.update(generate_table(url_statuses))
                    ready = check_url(package_url)
                    url_statuses[package_url][0] = ready
                    live.update(generate_table(url_statuses))
            
            # Countdown timer in the table header - only show if not all packages are READY
            if not all(status is True for status, _ in url_statuses.values()):
                for remaining in range(20, 0, -1):
                    live.update(generate_table(url_statuses, remaining))
                    time.sleep(1)
    
    console.print("\nAll packages are READY!", style="bold green")

if __name__ == "__main__":
    main()

