---
title: How do I import postal data?
layout: default
tags:
  - Data Management
  - Data Import
  - Postal Data Import
lang: en
sequence: 20
ref: import_postal_data
---

## Requirements
Make sure to comply with all requirements for the [data import in metasfresh](Data_import_metasfresh). [Here you can find a format example for importing postal data](Import_format_example_postal_data).
 >**Note:** For importing postal data, you require an import format that is configured with the **database table** *Import Postal Data*.

## Steps
1. Open "Data Import" from the [menu](Menu).
1. Open a suitable data import entry or [add a new one](add_new_data_import_entry).

### Upload and import the file
1. [Upload your import file containing the postal data](File_handling).
1. [Start the action](StartAction) "Import attachment". An overlay window opens up.
1. In the field **Attachment**, select the uploaded [import file](Import_file_useful_tips).
1. Click "Start" to import the postal data and close the overlay window.

### Review Postal Data
1. Open "Import Postal Data" from the [menu](Menu). Here you will find all imported postal data entries.
1. Open the entry of the postal data you want to review and correct, if necessary.
 - If all data were transferred properly and without errors, this postal data entry will be read-only and you can find the imported data under "[Country, City and Postal](Menu)" in the menu. All further changes can be made there.
 - In case data were transferred incorrectly or are missing after the import, you can review and edit each postal data entry under "[Import Postal Data](Menu)". After having rectified all inaccuracies, you can now manually import the postal data. To do so, please proceed as follows:

#### Manual Postal Data Import
1. [Start the action](StartAction) "Import Postal Data".
1. [metasfresh saves the progress automatically](Saveindicator).
1. You will find the imported postal data under "[Country, City and Postal](Menu)" in the menu.
