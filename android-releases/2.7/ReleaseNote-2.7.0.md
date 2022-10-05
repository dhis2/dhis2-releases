# DHIS2 Android App version 2.7 Release Notes


## USER EXPERIENCE

**Increase tappable areas in icons and buttons:** Some buttons or tappable lables of the Android App had small sensitive areas for the user to tap. The whole user interface was reviewed and the tappable areas has been increased. For example the "+" button to create a new stage or the "˅" icon to open TEI details or expand a section.
[Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4728) | [Screenshot]() | [Documentation]()

**Clean Data Entry forms:** The input fields had a hint message saying "Insert value here" which remained there after the values was entered. We have kept the hints when the field is empty, but they dissapear now once the value is entered by the user. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-3999) | [Screenshot]() | [Documentation]()
  
**Simplify steps to create stage:** When the user is creating a new stage and there is only one option based on the program configuration, the available program stage is selected automatically and program stage selection step is skipped. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-3999) | [Screenshot]() | [Documentation]()

**Hide Share button in TEI Dashbaord:** The TEI Dashbaord had a black "Share" button which was using a significant space on the screen and not align with the visual design of the app while the function is very marginally used. The button has been removed and the functioanlity to share a TEI through QR code has been located on the three vertical dot menu, at the top right corner of the screen. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4653) | [Screenshot]() | [Documentation]()
   
**Improve Section Navigation:** The accordion navigation of form sections was confusing for some some users and the next action after completing the last field of one section was not intuitive. This version of the App includes a "Next" button at the end of each section which calls the user to action. The funtion of the button is to close the current section and open the new one. [Jira]() | [Screenshot]() | [Documentation]()

**Create stage button always visible:** When the user groups the events per program stage in a tracker program, the option to create a stage was only visible when the events of the specific program stage where expanded. In this version, the option to create a new event is always visible. When the user taps on the button, that program stage will unfold showing to the user all the already existing events of that particular program stage. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4729) | [Screenshot]() | [Documentation]() 
 
**Do not load the whole home list when returning to it:** [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4802) | [Screenshot]() | [Documentation]()

**New legend style on tables:** [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4649) | [Screenshot]() | [Documentation]()
    
**New text input dialog:** [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4827) | [Screenshot]() | [Documentation]()

**Handle Vertical/Horizontal scroll in tables when a cell is selected:** I think I dont want to add this one. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4934) | [Screenshot]() | [Documentation]()

## MOBILE IMPLEMENTATION SUPPORT

**Upload SMS APK:** From this version, the app avaialble in Google Play includes the SMS functionality. In previous version, this functionality was only available in an apk available in Github. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-3888) | [Screenshot]() | [Documentation]()

## LOCAL ANALITICS

**Implement missing aggregation functions:** Look at the summary shared in te prioritisation workshop [Jira]([Implement missing aggregation functions](https://dhis2.atlassian.net/browse/ANDROAPP-4883)) | [Screenshot]() | [Documentation]()

## TRACKER FEATURES

**Manage ownership in permanent referrals:** [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4199) | [Screenshot]() | [Documentation]()
   
## SYNC PROCESS
**Open home after syncing metadata:** [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4765) | [Screenshot]() | [Documentation]()

**Do not make full sync when opening the App:** [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4766) | [Screenshot]() | [Documentation]()
[Jira]() | [Screenshot]() | [Documentation]()
   
 ## QUALITY, PERFORMANCE AND STABILITY
 **Data sets**
 - [Jira issue 1](https://dhis2.atlassian.net/browse/ANDROAPP-4811) 
 - [Jira issue 2](https://dhis2.atlassian.net/browse/ANDROAPP-4744) 
 - [Jira issue 3](https://dhis2.atlassian.net/browse/ANDROAPP-4754) 
 - [Jira issue 4](https://dhis2.atlassian.net/browse/ANDROAPP-4793) 
 - [Jira issue 5](https://dhis2.atlassian.net/browse/ANDROAPP-4828) 
 - [Jira issue 6](https://dhis2.atlassian.net/browse/ANDROAPP-4830) 
 - [Jira issue 7](https://dhis2.atlassian.net/browse/ANDROAPP-4855) 
 - [Jira issue 8](https://dhis2.atlassian.net/browse/ANDROAPP-4857) 
 - [Jira issue 9](https://dhis2.atlassian.net/browse/ANDROAPP-4942) 

  **Sync process**
  - [Jira issue 1](https://dhis2.atlassian.net/browse/ANDROAPP-4892) 
  - [Jira issue 2](https://dhis2.atlassian.net/browse/ANDROAPP-4434) 
  - [Jira issue 3](https://dhis2.atlassian.net/browse/ANDROAPP-4767)
  - [Jira issue 4](https://dhis2.atlassian.net/browse/ANDROAPP-4778) 
  - [Jira issue 5](https://dhis2.atlassian.net/browse/ANDROAPP-4800)
  
  **Forms**
  - [Jira issue 1](https://dhis2.atlassian.net/browse/ANDROAPP-4844) 
  - [Jira issue 2](https://dhis2.atlassian.net/browse/ANDROAPP-4845) 
  - [Jira issue 3](https://dhis2.atlassian.net/browse/ANDROAPP-4846) 
  - [Jira issue 4](https://dhis2.atlassian.net/browse/ANDROAPP-4847)
