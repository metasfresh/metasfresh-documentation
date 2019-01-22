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
1. [Add an import format using the appropriate database table](Add_import_format) where you define the data, or rather the columns, as well as their data types that are to be transferred from the import file into metasfresh.

| Import Data | Corresponding DB Table |
| :---: | :---: |
| Business Partner Data | Import Business Partner |
| Product Data | Import Product |

<ol start="2">
 <li>Have an [import file](Import_file_useful_tips) ready containing data formatted according to the import format.<br> ***Format examples:***</li>
 <ul>
  <li>[Business partner data import](Import_format_example_bpartner)</li>
  <li>[Product data import](Import_format_example_product)</li>
 </ul>
 <li>Import your data using the appropriate import format.</li>
 <blockquote>
  <p>**Note:** Make sure that the separator from the import file coincides with the one defined in the import format (comma, semicolon, tab, etc.).</p>
 </blockquote>
 <ul>
  <li>[Follow these instructions](Import_bpartner_data) to import external data on **business partners** into metasfresh.</li>
  <li>[Follow these instructions](Import_product_data) to import external data on **products** into metasfresh.</li>
 </ul>
</ol>
