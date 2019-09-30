---
title: How do I import bank statement data?
layout: default
tags:
  - Data Management
  - Data Import
  - Bank Statement Data Import
lang: en
sequence: 20
ref: import_bank_statement_data
---

## Requirements
Make sure to comply with all requirements for the [data import in metasfresh](Data_import_metasfresh). [Here you can find a format example for importing bank statement data](Import_format_example_bank_statement).
 >**Note:** For importing business partner data, you require an import format that is configured with the **database table** *Import Bank Statement*.

## Steps
1. Open "Data Import" from the [menu](Menu).
1. Open an appropriate data import entry or [add a new one](Add_new_data_import_entry).

### Upload and import the file
1. [Upload your import file containing the bank statement data](File_handling).
1. [Start the action](StartAction) "Import attachment". An overlay window opens up.
1. In the field **Attachment**, select the uploaded [import file](Import_file_useful_tips).
1. Click "Start" to import the bank statement data and close the overlay window.

### Review Bank Statement Data
1. Open "Import Bank Statement" from the [menu](Menu). Here you will find all imported bank statement lines.
1. Open the entry of the bank statement line whose data you want to review and correct, if necessary.
1. Change the **Name** of the bank statement line, if necessary.
1. Change the **Statement date**, if necessary.
 >**Note:** Bank statement lines with the same name and date are all imported into the same bank statement.

- If all data were transferred properly and without errors, the entry of the bank statement line will be read-only and you can find the imported data under "[Bank Statement](Menu)" in the menu. All further changes can be made there.
- In case data were transferred incorrectly or are missing after the import, you can review and edit the entry of each bank statement line under "[Import Bank Statement](Menu)". After having rectified all inaccuracies, you can now manually import the bank statement data. To do so, please proceed as follows:

#### Manual Bank Statement Data Import
1. [Start the action](StartAction) "Import Bank Statement". An overlay window opens up.
1. Pick an **Organization**.
1. Pick a **Partner Bank Account**.
1. Click "Start" to import the bank statement data and close the overlay window.
1. You will find the imported bank statement data under "[Bank Statement](Menu)" in the menu.
