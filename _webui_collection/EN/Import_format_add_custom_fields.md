---
title: How do I add custom format fields to an import format? (System Administrator)
layout: default
tags:
  - Data Management
  - Data Import
lang: en
sequence: 50
ref: import_format_add_custom_fields
---

## Overview
By means of an [import format](Add_import_format), you can specify which data, or rather columns, from an import file are to be transferred, how these columns are named and delimited (separators), and into which database tables the import data are to be taken over.

Which columns you can choose from when adding an import format depends on the **DB table** that is linked to the format. As a system administrator, you can adapt, modify and extend this database table to add custom fields to the import format. To do so, please proceed as follows:

## Steps
1. [Log in to metasfresh](Login) with the [user role](NewUserRole) "System Administrator".
1. Open "Table and Column" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the **Table** you want to modify, e.g., the import table "I_Product" for product data.
1. Open the database table entry.
1. Go to the record tab "Column" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Scroll down to the field **System Element**, enter a part of the new column's name and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In the field above, enter the **Length** the new column shall have in the database.
1. Click "Done" to close the overlay window and add the column to the list.
1. [Start the action](StartAction#actions-menu) "Synchronize column" to persist the column into the database.
1. [metasfresh saves the progress automatically](Saveindicator).

| **Important note:** |
| :--- |
| To transfer the imported data from a newly added column to the correct place within the system, a separate SQL function is required for each column following the pattern `<ImportTableName>_<IMPORT_AFTER_ROW>_<somedesc>`, e.g., `I_Product_Import_After_Row_InterCheese(IN p_C_DataImport_ID numeric, IN p_recordId numeric,)` for new columns in the [import format for product data](Import_format_example_product). |
| **The activation of new columns is done by our developers. Just contact us and we will take care of it!** |

## Next Steps (optional)
- [Import bank statement data](Import_bank_statement_data).
- [Import business partner data](Import_bpartner_data).
- [Import chart of accounts data](Import_charts_of_accounts).
- [Import custom data entries](Import_custom_data_entries).
- [Import discount schema data](Import_discount_schema).
- [Import postal data](Import_postal_data).
- [Import product data](Import_product_data).
- [Import replenishment data](Import_replenishment_data).
- [Import user data](Import_user_data).
