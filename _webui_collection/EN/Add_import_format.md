---
title: How do I add an import format?
layout: default
tags:
  - Data Management
  - Data Import
lang: en
sequence: 20
ref: add_import_format
---

## Overview
By means of the import format you can determine which data, or rather columns, from the import file are to be transferred, how these columns are named and delimited (separators), and into which database tables the import data are to be taken over.

## Steps
1. Open "Import Format" from the [menu](Menu).
1. [Add a new import format](New_Record_Window).
1. Give the import format a **Name**.
1. Select the appropriate **Table** where the data are to be imported, e.g., *Import Business Partner* for business partners and *Import Product* for products.
1. Select a **Format** (separator), e.g., *Tab Separated*.
 >**Note:** In order to successfully import data, the separator in the import file must coincide with the one set in the import format (comma, semicolon, tab, etc.).

### Add Format Fields
1. Go to the record tab "Format Field" at the bottom of the page and click ![](assets/Add_New_Button.png). A new window opens up.
1. Give the format field a **Name**, e.g., "Search Key".
1. Select a **Column** where the content of the import file is to be transferred, e.g., *Value_Suchschlüssel*.
1. Select a **Data Type**, e.g., *String* or *Number*, depending on the import data type.
1. Enter a **Start No**.
 >**Note:** The **start number** determines the position where a column is expected by metasfresh in the import file during import. It has nothing to do with the order (**SeqNo**) in which the format fields were added to the import format. It is therefore not necessary that the fields are placed in a fixed and ascending order, as long as the start numbers coincide with the column positions in the import file.

1. Click "Done" to close the window and add the format field to the list.
 >**Note:** Repeat steps 1 to 6 to add further format fields.

## Copy Format Fields
If you want to add a new import format with the same format fields as an existing format, you can very easily copy the format fields from the existing import format into the new one via the [actions menu](StartAction). To do so, take the following steps:

1. Add a new import format as described above in the **steps 1 to 5**.
1. [Start the action](StartAction) "Copy Lines". A new window opens up.
1. Select the appropriate **Import Format** from which you want to copy the format fields.
 >**Note:** In order to successfully copy the format fields from an existing import format, the new format must be configured with the **_exact same_ DB table** as the existing one.

1. Click "Start" to copy the format fields and close the window.

## Next Steps
- [Import business partner data](Import_bpartner_data).
- [Import product data](Import_product_data).

## Example
![](assets/Add_import_format.gif)
