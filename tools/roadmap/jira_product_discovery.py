from jira.client import JIRA
import os
from datetime import datetime
import json
import pandas as pd
import re

def connect_to_jira(email, api_token):
    """
    Connect to Jira using email and API token
    """
    options = {'server': 'https://dhis2.atlassian.net'}
    return JIRA(options, basic_auth=(email, api_token))

def print_available_fields(jira, project_key):
    """
    Print all available fields for a project's issues
    """
    # Get one issue from the project to inspect fields
    issues = jira.search_issues(f'project = {project_key}', maxResults=1)
    if not issues:
        print(f"No issues found in project {project_key}")
        return
    
    issue = issues[0]
    print("\nAvailable Fields:")
    for field_name in dir(issue.fields):
        # Skip private attributes
        if not field_name.startswith('_'):
            try:
                value = getattr(issue.fields, field_name)
                print(f"Field: {field_name} | Type: {type(value)}")
            except Exception:
                continue

def parse_custom_field_options(value):
    """
    Parse JIRA CustomFieldOption objects into a list of values
    Handles both direct CustomFieldOption objects and their string representations
    """
    if isinstance(value, str):
        if value.startswith('[') and 'CustomFieldOption' in value:
            # Handle string representation (previous case)
            values = re.findall(r"value='([^']*)'", value)
            return values
        return value
    
    # Handle list/array of CustomFieldOption objects
    if isinstance(value, (list, tuple)):
        values = []
        for item in value:
            if hasattr(item, 'value'):
                values.append(item.value)
            else:
                values.append(str(item))
        return values
        
    return value

def convert_jira_to_markdown(text):
    """
    Convert JIRA wiki markup to Markdown
    """
    if not isinstance(text, str):
        return text

    # Dictionary of conversions
    conversions = [
        # Headers
        (r'h1\. (.*)', r'# \1'),
        (r'h2\. (.*)', r'## \1'),
        (r'h3\. (.*)', r'### \1'),
        (r'h4\. (.*)', r'#### \1'),
        (r'h5\. (.*)', r'##### \1'),
        (r'h6\. (.*)', r'###### \1'),
        
        # Text formatting
        (r'\*([^*]*)\*', r'**\1**'),  # bold
        (r'_([^_]*)_', r'*\1*'),      # italic
        
        # Links
        (r'\[(.*?)\|(.*?)\|smart-card\]', r'[\1](\2)'),  # smart-card links
        (r'\[(.*?)\|(.*?)\|smart-link\]', r'[\1](\2)'),  # smart-link links
        (r'\[(.*?)\|(.*?)\]', r'[\1](\2)'),             # regular links
        
        # Colors
        (r'\{color:#[0-9a-fA-F]{6}\}(.*?)\{color\}', r'\1'),  # Remove color tags
        
        # Panels
        (r'\{panel:.*?\}(.*?)\{panel\}', r'\1'),  # Remove panel tags
        
        # Lists
        (r'^\* ', r'- '),  # Unordered lists
        (r'^# ', r'1. '),  # Ordered lists
        
        # Code blocks
        (r'\{code\}(.*?)\{code\}', r'```\1```'),  # Code blocks
        
        # Tables
        (r'\|\|(.*?)\|\|', r'|\1|'),  # Table headers
        (r'\|(.*?)\|', r'|\1|'),      # Table cells
    ]
    
    # Apply each conversion
    result = text
    for pattern, replacement in conversions:
        result = re.sub(pattern, replacement, result, flags=re.MULTILINE)
    
    # Clean up multiple newlines
    result = re.sub(r'\n{3,}', '\n\n', result)
    
    return result.strip()

def get_project_issues(jira, project_key, max_results=None):
    """
    Fetch issues from a specific project with all available fields
    """
    jql_query = f'project = {project_key} ORDER BY created DESC'
    
    # Define custom field mappings
    field_mappings = {
        'customfield_10180': 'targetRelease',
        'customfield_10218': 'app',
        'customfield_10216': 'productAreas'
    }
    
    start_at = 0
    issues_data = []
    while True:
        issues_batch = jira.search_issues(jql_query, startAt=start_at, maxResults=1000)
        
        for issue in issues_batch:
            # Get all field values
            issue_dict = {
                'key': issue.key,
                'summary': issue.fields.summary,
                'status': issue.fields.status.name,
                'created': issue.fields.created,
                'updated': issue.fields.updated,
                'assignee': issue.fields.assignee.displayName if issue.fields.assignee else 'Unassigned',
                'reporter': issue.fields.reporter.displayName,
                'priority': issue.fields.priority.name if issue.fields.priority else 'None',
                'issueType': issue.fields.issuetype.name
            }
            
            # Add all other available fields
            for field_name in dir(issue.fields):
                if not field_name.startswith('_') and field_name not in issue_dict:
                    try:
                        value = getattr(issue.fields, field_name)
                        if value is not None:  # Only add non-null values
                            # Handle complex objects
                            if hasattr(value, 'name'):
                                value = value.name
                            elif hasattr(value, 'value'):
                                value = value.value
                            elif hasattr(value, 'displayName'):
                                value = value.displayName
                            
                            # Parse CustomFieldOption lists
                            value = parse_custom_field_options(value)
                            
                            # Convert JIRA markup to Markdown for description field
                            if field_name == 'description':
                                value = convert_jira_to_markdown(value)
                            
                            # Use mapped field name if available
                            final_field_name = field_mappings.get(field_name, field_name)
                            
                            # Convert to string if the value is not JSON serializable
                            try:
                                json.dumps({final_field_name: value})
                                issue_dict[final_field_name] = value
                            except (TypeError, OverflowError):
                                issue_dict[final_field_name] = str(value)
                    except:
                        continue
            
            issues_data.append(issue_dict)
        
        if len(issues_batch) == 0 or (max_results and len(issues_data) >= max_results):
            break
            
        start_at += len(issues_batch)
    
    if max_results:
        issues_data = issues_data[:max_results]
    
    return issues_data

def main():
    # Get Jira credentials from environment variables
    email = os.getenv('JIRA_EMAIL')
    api_token = os.getenv('JIRA_API_TOKEN')
    project_key = os.getenv('JIRA_PROJECT_KEY', 'PD')
    
    if not all([email, api_token]):
        raise ValueError("Please set JIRA_EMAIL and JIRA_API_TOKEN environment variables")
    
    try:
        # Connect to Jira
        jira = connect_to_jira(email, api_token)
        
        # Print available projects
        projects = jira.projects()
        print("Available projects:")
        for project in projects:
            print(f"Key: {project.key}, Name: {project.name}")
        
        # Print available fields
        print_available_fields(jira, project_key)
        
        # Get issues with all fields
        issues_data = get_project_issues(jira, project_key)
        
        # Save to JSON
        output_file = 'roadmap/jira_roadmap.json'
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump({
                'metadata': {
                    'project': project_key,
                    'timestamp': datetime.now().isoformat(),
                    'total_issues': len(issues_data)
                },
                'issues': issues_data
            }, f, indent=2, ensure_ascii=False)
            
        print(f"\nIssues exported to {output_file}")
        print(f"\nTotal issues found: {len(issues_data)}")
        
        # Display status summary using pandas for convenience
        df = pd.DataFrame(issues_data)
        print("\nIssues by status:")
        print(df['status'].value_counts())
        
        # Display available fields
        print("\nAvailable fields in the exported JSON:")
        if issues_data:
            print(list(issues_data[0].keys()))
        
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    main() 