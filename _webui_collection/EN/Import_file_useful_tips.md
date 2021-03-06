---
title: Useful tips for creating an import file (*.csv and *.txt)?
layout: default
tags:
  - Data Management
  - Data Import
lang: en
sequence: 40
ref: import_file_useful_tips
---

## Overview
In order to import externally stored data into metasfresh, you first have to format the data appropriately, upload them as a CSV or a TXT file and then simply import them via the [actions menu](StartAction#actions-menu).

Here are some format examples for the import of:
- [Bank statement data](Import_format_example_bank_statement)
- [Business partner data](Import_format_example_bpartner)
- [Chart of accounts data](Import_format_example_charts_of_accounts)
- [Custom data entries](Import_format_example_data_entry)
- [Discount schema data](Import_format_example_discount_schema)
- [Postal data](Import_format_example_postal_data)
- [Product data](Import_format_example_product)
- [Replenishment data](Import_format_example_replenishments)
- [User data](Import_format_example_users)

## Useful Tips
When creating an import file, please keep in mind the following:

- The **separator** in the import file must coincide with the one set in the [import format](Add_import_format) (comma, semicolon, tab, etc.).
- If you want to create a **comma delimited** import file using a spreadsheet software, such as *Microsoft Excel*, simply select the file format `CSV (Comma delimited)(*.csv)` when saving the file.
- If you want to create a **tab delimited** import file using a spreadsheet software, such as *Microsoft Excel*, simply select the file format `Text (Tab delimited)(*.txt)` when saving the file.
- The positions of the columns in the import file must correspond to the values of the format fields' **start numbers** of the import format.<br>
***Example:*** **Column C** of the Excel spreadsheet is in the third place, ergo the corresponding format field receives the **Start No. 3**.
 >**Note:** metasfresh does ***not expect any column names*** in the import file. Simply the ***position*** of the column must correspond to the start number.

## Next Steps
- [Import bank statement data](Import_bank_statement_data).
- [Import business partner data](Import_bpartner_data).
- [Import chart of accounts data](Import_charts_of_accounts).
- [Import custom data entries](Import_custom_data_entries).
- [Import discount schema data](Import_discount_schema).
- [Import postal data](Import_postal_data).
- [Import product data](Import_product_data).
- [Import replenishment data](Import_replenishment_data).
- [Import user data](Import_user_data).

## Example: Excel Spreadsheet (Product Data)
![](assets/Excel_table_product_data.png)

## Example: CSV File, Comma delimited (Product Data)
![](assets/CSV_file_product_data.png)

## Example: TXT File, Tab delimited (Product Data)
![](assets/TXT_file_product_data.png)
