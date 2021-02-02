---
title: How do I import replenishment data?
layout: default
tags:
  - Data Management
  - Data Import
  - Replenishment Data Import
lang: en
sequence: 20
ref: import_replenishment_data
---

## Requirements
Make sure to comply with all requirements for the [data import in metasfresh](Data_import_metasfresh). [Here you can find a format example for importing replenishment data](Import_format_example_replenishments).
 >**Note:** For importing replenishment data, you require an import format that is configured with the **database table** *Import Replenishment*.

## Steps
1. Open "Data Import" from the [menu](Menu).
1. Open a suitable data import entry or [add a new one](Add_new_data_import_entry).

### Upload and import the file
1. [Upload your import file containing the replenishment data](File_handling).
1. [Start the action](StartAction#actions-menu) "Import attachment". An overlay window opens up.
1. In the field **Attachment**, select the uploaded [import file](Import_file_useful_tips).
1. Click "Start" to import the replenishment data and close the overlay window.

### Review Replenishment Data
1. Open "Import Replenishment" from the [menu](Menu). Here you will find all imported replenishment entries.
1. Open the replenishment entry whose data you want to review and correct, if necessary.
 - If all data were transferred properly and without errors, this replenishment entry will be read-only and you can find the imported data in the respective [warehouse](Menu) and [product](Menu) entry under the record tab "Replenish". All further changes can be made there.
 - In case data were transferred incorrectly or are missing after the import, you can review and edit each replenishment entry under "[Import Replenishment](Menu)". After having rectified all inaccuracies, you can now manually import the replenishment data. To do so, please proceed as follows:

#### Manual Replenishment Data Import
1. [Start the action](StartAction#actions-menu) "Import Replenishments". An overlay window opens up.
1. Click "Start" to import the replenishment data and close the overlay window.
1. You will find the imported replenishment data in the respective [warehouse](Menu) and [product](Menu) entry under the record tab "Replenish".
