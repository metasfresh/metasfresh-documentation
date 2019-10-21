---
title: Format example for importing business partner data
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

The example below compares the data content of a file from a spreadsheet software (here, e.g., an *Excel* file prior to its [conversion to a CSV or TXT file](Import_file_useful_tips)) with the import format for business partner data:

![](assets/BPartner_import_Excel_table_Format.png)

### Explanatory Notes to the Example
- **Column A** of the Excel spreadsheet (*Search Key*) is in the first place, ergo the corresponding format field is given the **Start No. 1**. Consequently, the format field for **Column B** receives the **Start No. 2** etc.<br> The order (**SeqNo**) of the format fields is therefore irrelevant.
 >**Note:** metasfresh does ***not expect any column names*** in the import file. Simply the ***position*** of the column must correspond to the start number.

- The **Name** of the format field may be chosen freely and does not have to coincide with the column name in the import file.
- The **Column** of the format field specifies where metasfresh shall transfer the content of the column from the import file.
- The **Data Type** specifies whether the type of the import data is, e.g., a *String* or a *Number*.

### Some useful notes
The mandatory fields are essential for a successful data import!

| Mandatory Field | <abbr title="Hover your cursor over the field name to see the corresponding column name.">Field Name</abbr> | Example | Note |
| :---: | :--- | :--- | :--- |
| X | <abbr title="BPValue_Suchschlüssel">Search Key</abbr> | I_BP_001 | Business partner search key (unique alphanumeric string) |
| X | <abbr title="Companyname_Company Name">Company Name</abbr> | Import Inc. | Company name |
| X | <abbr title="Name_Name">Name</abbr> | Bob Ross | Partner name (for individuals) |
| (X) | •&nbsp;<abbr title="Firstname_Firstname">First Name</abbr><br> •&nbsp;<abbr title="Lastname_Lastname">Last Name</abbr> | •&nbsp;John<br> •&nbsp;Smith | This information is only required in connection with **contacts** to be imported. |
| (X) | <abbr title="CountryCode_ISO Country Code">ISO Country Code</abbr> | DE | DE = Germany (Ger.: _**De**utschland_)<br> Two-letter country code (in acc. with ISO 3166-1 alpha-2).<br>This information is only required in connection with addresses to be imported.<br> (*You can look up the ISO country code under "[Country, Region](Menu)" in the menu.*) |
| X | <abbr title="GroupValue_Gruppen-Schlüssel">Group Value</abbr> | •&nbsp;Standard<br> •&nbsp;1000001 | **Search Key** of the business partner group.<br> ***Attention:*** Not the name!<br> First add the business partner group and then use the search key here.<br> (*You can look up the search key in the respective entry under "[Business Partner Group](Menu)" in the menu.*) |
|  | <abbr title="RegionName_Region Name">Region</abbr> | •&nbsp;NRW<br> •&nbsp;AZ | NRW = **N**orth **R**hine-**W**estphalia<br> AZ = **A**ri**z**ona<br> (*You can look up the acronym (**Name**) of a region under the record tab "Region" of the respective country entry under "[Country, Region](Menu)" in the menu.*) |
|  | <abbr title="OrgValue_Organisation Key">OrgValue</abbr> | metasfresh AG | **Search Key** of the organization.<br> ***Attention:*** Not the name!<br> (*You can look up the search key under "[Organization](Menu)" in the menu.*) |
|  | <abbr title="See examples &#8594;">Location Data</abbr> | •&nbsp;<abbr title="Address1_Straße und Nr.">Street & No.</abbr><br> •&nbsp;<abbr title="Postal_PLZ">ZIP</abbr><br> •&nbsp;<abbr title="City_City Name">City</abbr><br> •&nbsp;<abbr title="RegionName_Region Name">Region</abbr><br> •&nbsp;<abbr title="CountryCode_ISO Country Code">ISO Country Code</abbr> | For [location data](Add_address_tab) to be imported, at least **City** and **ISO Country Code** must be provided.<br><br> Location data, such as **Street & House No.**, **ZIP** or **Region**, will not be imported unless both **City** and **ISO Country Code** are provided. |
|  | <abbr title="GLN_GLN">Global Location Number</abbr> (GLN) | 1234567890128 | In order to import a **GLN**, both **City** and **ISO Country Code** are required. |
|  | <abbr title="URL_URL">Web address</abbr> (URL) | <a href="https://metasfresh.com/en/" title="metasfresh Homepage" target="blank"><strong>https://</strong>metasfresh.com/</a> | For a **URL** to work after import, make sure it begins with the Internet protocol acronym (e.g., `https://`). |

## Next Steps
- [Import business partner data](Import_bpartner_data).
