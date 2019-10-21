---
title: How do I import user data?
layout: default
tags:
  - Data Management
  - Data Import
  - User Data Import
lang: en
sequence: 20
ref: import_user_data
---

## Requirements
Make sure to comply with all requirements for the [data import in metasfresh](Data_import_metasfresh). [Here you can find a format example for importing user data](Import_format_example_users).
 >**Note:** For importing user data, you require an import format that is configured with the **database table** *Import User*.

## Steps
1. Open "Data Import" from the [menu](Menu).
1. Open a suitable data import entry or [add a new one](Add_new_data_import_entry).

### Upload and import the file
1. [Upload your import file containing the user data](File_handling).
1. [Start the action](StartAction) "Import attachment". An overlay window opens up.
1. In the field **Attachment**, select the uploaded [import file](Import_file_useful_tips).
1. Click "Start" to import the user data and close the overlay window.

### Review User Data
1. Open "Import User" from the [menu](Menu). Here you will find all imported user entries.
1. Open the entry of the user whose data you want to review and correct, if necessary.
 - If all data were transferred properly and without errors, this user entry will be read-only and you can find the imported data under "[User](Menu)" in the menu or also under the record tab "Contact" in the entry of the linked business partner. All further changes can be made there.
 - In case data were transferred incorrectly or are missing after the import, you can review and edit each user entry under "[Import User](Menu)". After having rectified all inaccuracies, you can now manually import the user data. To do so, please proceed as follows:

#### Manual Business Partner Data Import
1. [Start the action](StartAction) "Import Users".
1. [metasfresh saves the progress automatically](Saveindicator).
1. You will find the imported user data under "[User](Menu)" in the menu or also under the record tab "Contact" in the entry of the linked business partner.
