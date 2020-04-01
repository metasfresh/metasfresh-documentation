---
title: How do I import discount schemas?
layout: default
tags:
  - Data Management
  - Data Import
  - Discount Schema Data Import
lang: en
sequence: 20
ref: import_discount_schema
---

## Requirements
Make sure to comply with all requirements for the [data import in metasfresh](Data_import_metasfresh). [Here you can find a format example for importing discount schemas](Import_format_example_discount_schema).
 >**Note:** For importing discount schemas, you require an import format that is configured with the **database table** *Discount Schema Import*.

## Steps
1. Open "Data Import" from the [menu](Menu).
1. Open a suitable data import entry or [add a new one](Add_new_data_import_entry).

### Upload and import the file
1. [Upload your import file containing the discount schema data](File_handling).
1. [Start the action](StartAction#actions-menu) "Import attachment". An overlay window opens up.
1. In the field **Attachment**, select the uploaded [import file](Import_file_useful_tips).
1. Click "Start" to import the discount schema data and close the overlay window.

### Review Discount Schema Data
1. Open "Import Discount Schema" from the [menu](Menu). Here you will find all imported discount schema entries.
1. Open the entry of the discount schema whose data you want to review and correct, if necessary.
 - If all data were transferred properly and without errors, this discount schema entry will be read-only and you can find the imported data under "[Discount Schema](Menu)" in the menu. All further changes can be made there.
 - In case data were transferred incorrectly or are missing after the import, you can review and edit each discount schema entry under "[Import Discount Schema](Menu)". After having rectified all inaccuracies, you can now manually import the discount schema data. To do so, please proceed as follows:

#### Manual Discount Schema Data Import
1. [Start the action](StartAction#actions-menu) "Import Discount Schema". An overlay window opens up.
1. Click "Start" to import the discount schema data and close the overlay window.
1. You will find the imported discount schema data under "[Discount Schema](Menu)" in the menu.
