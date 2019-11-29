---
title: Data Import to metasfresh
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
1. [Add an import format using the appropriate database table](Add_import_format) (see overview below) where you define the data, or rather the columns, as well as their data types that are to be transferred from the import file into metasfresh.
1. Have an [import file](Import_file_useful_tips) ready containing data formatted according to the import format (see **format examples** in the overview below).
1. Import your data using the appropriate import format (see **instructions** in the overview below).

   | **Important note:** |
   | :--- |
   | **1)** Make sure that the ***separator*** from the import file coincides with the one defined in the import format (comma, semicolon, tab, etc.).<br> **2)** Please also make sure that both the ***decimal*** and the ***thousands separators*** from the import file match with your respective language-specific system preferences (e.g., Eng.: *$ 1,999.95* vs. Ger.: *€ 1.999,95*). |

### Table Overview

| Import Data | DB Table | Format Example | Instructions |
| :--- | :--- | :---: | :---: |
| Bank Statement Data | Import Bank Statement | [view](Import_format_example_bank_statement) | [read](Import_bank_statement_data) |
| Business Partner Data | Import Business Partner | [view](Import_format_example_bpartner) | [read](Import_bpartner_data) |
| Chart of Accounts Data | Import Account | [view](Import_format_example_charts_of_accounts) | [read](Import_charts_of_accounts) |
| Custom Data Entries | Import Data Entry Record | [view](Import_format_example_data_entry) | [read](Import_custom_data_entries) |
| Discount Schema Data | Discount Schema Import | [view](Import_format_example_discount_schema) | [read](Import_discount_schema) |
| Postal Data | Import Postal Data | [view](Import_format_example_postal_data) | [read](Import_postal_data) |
| Product Data | Import Product | [view](Import_format_example_product) | [read](Import_product_data) |
| Replenishment Data | Import Replenishment | [view](Import_format_example_replenishments) | [read](Import_replenishment_data) |
| User Data | Import User | [view](Import_format_example_users) | [read](Import_user_data) |
