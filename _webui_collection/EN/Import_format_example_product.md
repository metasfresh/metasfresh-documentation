---
title: Format example for importing product data
layout: default
tags:
  - Data Management
  - Data Import
  - Product Data Import
lang: en
sequence: 10
ref: import_format_example_product
---

## Overview
For importing product data, you require an import format that is configured with the **database table** *Import Product*.

The example below compares the data content of a file from a spreadsheet software (here, e.g., an *Excel* file prior to its [conversion to a CSV or TXT file](Import_file_useful_tips)) with the import format for product data:

![](assets/Product_import_Excel_table_Format.png)

### Explanatory Notes to the Example
- **Column A** of the Excel spreadsheet (*Item Search Key*) is in the first place, ergo the corresponding format field is given the **Start No. 1**. Consequently, the format field for **Column B** receives the **Start No. 2** etc.<br> The order (**SeqNo**) of the format fields is therefore irrelevant.
 >**Note:** metasfresh does ***not expect any column names*** in the import file. Simply the ***position*** of the column must correspond to the start number.

- The **Name** of the format field may be chosen freely and does not have to coincide with the column name in the import file.
- The **Column** of the format field specifies where metasfresh shall transfer the content of the column from the import file.
- The **Data Type** specifies whether the type of the import data is, e.g., a *String* or a *Number*.

### Some useful notes
The mandatory fields are essential for a successful data import!

| Mandatory Field | <abbr title="Hover your cursor over the field name to see the corresponding column name.">Field Name</abbr> | Example | Note |
| :---: | :---: | :--- | :--- |
| X | <abbr title="Value_Suchschlüssel">Item Search Key</abbr> | FF_12345 | **Search Key** of the product (alphanumeric string) |
| X | <abbr title="ProductType_Produktart">Product Type</abbr> | I | I = **I**tem<br> E = **E**xpense Type<br> R = **R**esource |
| X | <abbr title="ProductCategory_Value_Produktkategorie-Schlüssel">Product Category Search Key</abbr> | •&nbsp;Standard<br> •&nbsp;16 | **Search Key** of the product category. ***Attention:*** Not the name!<br> (*You can look up the search key under "[Product Category](Menu)" in the menu.*) |
|  | <abbr title="X12DE355_Kodierung der Mengeneinheit">UOM Code</abbr> | PCE | PCE = Each (_**P**ie**ce**_)<br> (*You can look up the UOM code under "[Unit of Measure](Menu)" in the menu.*) |
|  | <abbr title="C_TaxCategory_Name_MwSt-Kategorie">Tax Category</abbr> | Reduzierter Steuersatz 7% (Deutschland) | You can look up the tax category under "[Tax Category](Menu)" in the menu. |
|  | <abbr title="M_PriceList_Version_Name_Version Preisliste">Price List Version</abbr> | Testpreise Kunden (Deutschland) | You can look up the price list version under "[Price List](Menu)" in the menu. |

## Next Steps
- [Import product data](Import_product_data).
