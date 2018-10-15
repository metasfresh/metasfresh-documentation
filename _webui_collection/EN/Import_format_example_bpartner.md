---
title: Format Example for the Import of Business Partner Data
layout: default
tags:
  - Data Management
  - Data Import
  - Business Partner Data Import
lang: en
sequence: 10
ref: import_format_example_bpartner
---

## Overview
For importing business partner data, you require an import format that is configured with the **database table** *Import Business Partner*.

The example below compares the data content of a file from a spreadsheet software (here, e.g., an *Excel* file before the [conversion to a CSV or TXT file](Import_file_useful_tips)) with the import format for business partner data:

![](assets/BPartner_import_Excel_table_Format.png)

### Explanatory Notes to the Example
- **Column A** of the Excel table (*Search Key*) is in the first place, ergo the corresponding format field is given the **Start No 1**. Consequently, the format field for **Column B** receives the **Start No 2** etc.<br> The order (**SeqNo**) of the format fields is therefore irrelevant.
 >**Note:** metasfresh does ***not expect any column names*** in the import file. Simply the ***position*** of the column must correspond to the start number.

- The **Name** of the format field may be chosen freely and does not have to coincide with the column name in the import file.
- The **Column** of the format field determines where metasfresh shall transfer the content of the column from the import file.
- The **Data Type** determines whether the type of the import data is, e.g., a *String* or a *Number*.

### Some useful notes

| Information | Example | Note |
| :---: | :--- | :--- |
| Region | • NRW<br> • AZ | NRW = **N**orth **R**hine-**W**estphalia<br> AZ = **A**ri**z**ona<br> (*You can look up the acronym (**Name**) of a region under the record tab "Region" of the respective country entry under "[Country, Region](Menu)" in the menu.*) |
| ISO Country Code | DE | DE = Germany (German: _**De**utschland_)<br> Two-letter country code (in acc. with ISO 3166-1 alpha-2).<br> (*You can look up the ISO country code under "[Country, Region](Menu)" in the menu.*) |
| Group Value	| • Standard<br> • 1000001 | **Search Key** of the business partner group. ***Attention:*** Not the name!<br> First add the business partner group and then use the search key here.<br> (*You can look up the search key in the respective entry under "[Business Partner Group](Menu)" in the menu.*) |
| OrgValue | metasfresh AG | **Search Key** of the organization. ***Attention:*** Not the name!<br> (*You can look up the search key under "[Organization](Menu)" in the menu.*) |

## Next Steps
- [Import business partner data](Import_bpartner_data).
