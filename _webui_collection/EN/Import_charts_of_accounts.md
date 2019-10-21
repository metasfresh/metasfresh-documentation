---
title: How do I import chart of accounts data?
layout: default
tags:
  - Data Management
  - Data Import
  - Chart of Accounts Data Import
lang: en
sequence: 20
ref: import_charts_of_accounts
---

## Requirements
Make sure to comply with all requirements for the [data import in metasfresh](Data_import_metasfresh). [Here you can find a format example for importing chart of accounts data](Import_format_example_charts_of_accounts).
 >**Note:** For importing chart of accounts data, you require an import format that is configured with the **database table** *Import Account*.

## Steps
1. Open "Data Import" from the [menu](Menu).
1. Open a suitable data import entry or [add a new one](add_new_data_import_entry).

### Upload and import the file
1. [Upload your import file containing the chart of accounts data](File_handling).
1. [Start the action](StartAction) "Import attachment". An overlay window opens up.
1. In the field **Attachment**, select the uploaded [import file](Import_file_useful_tips).
1. Click "Start" to import the chart of accounts data and close the overlay window.

### Review Chart of Accounts Data
1. Open "Import Kontenrahmen" (*Import Charts of Accounts*) from the [menu](Menu). Here you will find all imported accounts.
1. Open the entry of the account whose data you want to review and correct, if necessary.
 - If all data were transferred properly and without errors, this account entry will be read-only and you can find the imported data under "[Account Elements](Menu)" in the menu in the respective chart of accounts entry. All further changes can be made there.
 - In case data were transferred incorrectly or are missing after the import, you can review and edit each account entry under "[Import Kontenrahmen](Menu)" (*Import Charts of Accounts*). After having rectified all inaccuracies, you can now manually import the accounts. To do so, please proceed as follows:

#### Manual Chart of Accounts Data Import
1. [Start the action](StartAction) "Import Accounts". An overlay window opens up.
1. Click "Start" to import the accounts and close the overlay window.
1. You will find the imported accounts under "[Business Partner](Menu)" in the menu in the respective chart of accounts entry.
