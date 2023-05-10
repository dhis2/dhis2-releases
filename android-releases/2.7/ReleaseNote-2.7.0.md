# DHIS2 Android App version 2.7 Release Notes


## USER EXPERIENCE

**Increase tappable areas in icons and buttons:** Some buttons or tappable labels of the Android App had small sensitive areas for the user to tap. The whole user interface was reviewed and the tappable areas has been increased. For example the "+" button to create a new stage or the "˅" icon to open TEI details or expand a section.
[Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4728) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Increase-tappable-areas-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture_app_visual_tappable_areas)

**Clean Data Entry forms:** The input fields had a hint message saying "Insert value here" which remained there after the values was entered. We have kept the hints when the field is empty, but they dissapear now once the value is entered by the user. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-3999) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Remove-hints-from-fields-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture_app_programs_common_features_data_entry_form)
  
**Simplify steps to create program stage:** When the user groups the events per program stage in a tracker program, the option to create a stage was only visible when the events of the specific program stage where expanded. In this version, the option to create a new event is always visible. When the user taps on the button, that program stage will unfold showing to the user all the already existing events of that particular program stage. In addition to this, when there is only one option based on the program configuration, the available program stage is selected automatically and program stage selection step is skipped.[Jira 1](https://dhis2.atlassian.net/browse/ANDROAPP-4729) | [Jira 2](https://dhis2.atlassian.net/browse/ANDROAPP-3999) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Add-event-button-always-visible-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture_app_programs_TEI_Dashboard) 

**Move Share button in TEI Dashbaord to a secondary menu:** The TEI Dashboard had a black "Share" button which was using a significant space on the screen and not align with the visual design of the app while the function is very marginally used. The button has been removed and the functioanlity to share a TEI through QR code has been located on the three vertical dot menu, at the top right corner of the screen. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4653) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Remove-share-button-from-TEI-dashboard-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture_app_programs_TEI_Dashboard)
   
**More intuitive Navigation for event sections:** The accordion navigation of form sections was confusing for some some users and the next action after completing the last field of one section was not intuitive. This version of the App includes a "Next" button at the end of each section which calls the user to action. The funtion of the button is to close the current section and open the new one. [Jira]() | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Next-button-at-the-end-of-each-section-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture_app_programs_common_features_data_entry_form)
   
**New input dialog for datasets:** When the user in entering data in a dataset, the keyboard opens overlaping most of the screen and the dataset table. The new text input dialog opens an input field above the keyboard which shows the Data Element name, and category options of the field being selected, ensuring the user does not lose context when navigating the tables during data entry. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4827) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Cell-editor-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/datasets-features.html#capture_app_data_sets_data_entry)

## LOCAL ANALITICS

 **New legend style on tables:** The style for legends in tables has a new design which ensures good contrast and visibility independently from the selected colour for the legend. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4649) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Updated-table-legends-style-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture_app_visual_pivot_legends)

**Implement missing aggregation functions:** The following aggreagation functions are supported now in local analytics: LAST, FIRST, AVERAGE_SUM_ORG_UNIT, LAST_AVERAGE_ORG_UNIT, LAST_IN_PERIOD, LAST_IN_PERIOD_AVERAGE_ORG_UNIT, FIRST_AVERAGE_ORG_UNIT [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4883) | [Documentation](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#limitations)


## SYNC PROCESS
**Open home after syncing metadata:** When a user logs in to the Android App for the first time, the App needs to download all the metadata and data, including the  file resources. Depending on the server and user configuration, on the server resources and on the internet connection, this process can be very long. Until this version, all these happened on the splash screen and the user had to wait during all this time on the same screen. We cannot change that process or waiting time, however we can make it more interactive and informative. In this new  version the app will remain in the splash screen during the metadata download and will open the home screen once the metadata is in the device. In the home screen, the app will inform with a loading spinner on each program when the data is downloading and when is ready. The user will be able to see how many programs are downloading data, or completed, making the waiting process more transparent and informative about its progress. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4765) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.7/Release+feature+cards/Android-2-7-Visual-data-sync-card.png) | [Documentation](https://docs.dhis2.org/en/use/android-app/android-specific-features.html#capture_app_generic_login_sync)

**Do not make full sync when opening the App:** Before this version, everytime a user opened the DHIS2 Capture App, the application would launch a sync process for data and metadata, to ensure the app was in sync with the server. In most cases and locations this process was very slow. In order to facilitate the work in the most difficult cases, we have removed that sync process. When the user opens the app, even if s/he logs out and logs in again, the app will open without performing a full sync. Users have the option to sync with the server through the Refresh button any time they wish. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4766) | [Documentation](https://docs.dhis2.org/en/use/android-app/android-specific-features.html#capture_app_generic_subsequent_login)
   
   
## TRACKER FEATURES

**Manage ownership in permanent referrals:** Since 2.7, when a user makes a permanent referral of a TEI, the ownership will be updated accordingly.  [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-4199) | [Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture_app_programs_referrals)


## MOBILE IMPLEMENTATION SUPPORT

**Upload SMS APK:** From this version, the app available in Google Play includes the SMS functionality. In previous versions, this functionality was only available on an apk available in Github. [Jira](https://dhis2.atlassian.net/browse/ANDROAPP-3888)


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
