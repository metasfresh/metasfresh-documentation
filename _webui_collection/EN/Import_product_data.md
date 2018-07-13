---
title: How do I import product data?
layout: default
tags:
  - Data Import
  - Product Data Import
lang: en
sequence: 20
ref: import_product_data
---

## Requirements
Make sure to comply with all requirements for the [data import in metasfresh](Data_import_metasfresh). [Here you can find a format example](Import_format_example_product) for importing product data.
 >**Note:** For importing product data, you require an import format that is configured with the **database table** *Import Product*.

## Steps
1. Open "Data Import" from the [menu](Menu).
1. [Add a new data import entry for product data](New_Record_Window).
 >**Note:** After adding the data import entry, you can reuse it at any time in the future for further data imports of this kind.

1. Select the [**Import Format**](Add_import_format) you have previously created for the product data import.
1. [Upload your import file containing the product data](File_handling).
1. [Start the action](StartAction) "Import attachment". A new window opens up.
1. In the field **Attachment entry** select the uploaded [import file](Import_file_useful_tips).
1. Click "Start" to import the product data and close the window.

## Review Product Data
1. Open "Import Product" from the [menu](Menu). Here you will find all imported product entries.
1. Open the entry of the product whose data you want to review and correct, if necessary.
 - If all data are transferred properly and without errors, this product entry will be read-only and you can find the imported data under "[Product](Menu)" in the menu. All further changes can be made there.
 - Should some data be transferred incorrectly or be missing after the import, you can review and edit each product entry under "[Import Product](Menu)". After you have rectified all inaccuracies, you can now manually import the product data. To do so, take the following steps:

### Manual Product Data Import
1. [Start the action](StartAction) "Import Products". A new window opens up.
1. Select a **Price List Version**.
1. Click "Start" to import the product data and close the window.
1. You will find the imported product data under "[Product](Menu)" in the menu.

## Example
![](assets/Import_product_data.gif)
