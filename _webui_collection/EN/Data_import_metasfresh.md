---
title: Data Import in metasfresh
layout: default
tags:
  - Data Management
  - Data Import
lang: en
sequence: 10
ref: data_import_metasfresh
---

## Overview
You can quickly import externally stored data (such as Excel spreadsheets with data on business partners or products) into metasfresh through the use of the import feature and thus also bring existing entries up to date. To do so, you first have to format the data appropriately, upload them as a CSV or TXT file and then simply import them via the [actions menu](StartAction).

## Requirements

| Import Data | Corresponding DB Table |
| :---: | :---: |
| Business Partner Data | Import Business Partner |
| Discount Schema Data | Discount Schema Import |
| Product Data | Import Product |
| Replenishment Data | Import Replenishment |

1. [Add an import format using the appropriate database table](Add_import_format) (see above) where you define the data, or rather the columns, as well as their data types that are to be transferred from the import file into metasfresh.
1. Have an [import file](Import_file_useful_tips) ready containing data formatted according to the import format.<br> ***Format examples:***
 - [Business partner data import](Import_format_example_bpartner)
 - [Discount schema data import](Import_format_example_discount_schema)
 - [Product data import](Import_format_example_product)
 - [Replenishment data import](Import_format_example_replenishments)

1. Import your data using the appropriate import format.
 >**Note:** Make sure that the separator from the import file coincides with the one defined in the import format (comma, semicolon, tab, etc.).

 - [Follow these instructions](Import_bpartner_data) to import external data on **business partners** into metasfresh.
 - [Follow these instructions](Import_discount_schema) to import external data on **discount schemas** into metasfresh.
 - [Follow these instructions](Import_product_data) to import external data on **products** into metasfresh.
 - [Follow these instructions](Import_replenishment_data) to import external data on **replenishments** into metasfresh.
