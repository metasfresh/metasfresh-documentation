---
layout: default
title: How to solve duplicate record IDs using "check native sequences"
tags:
  - Support
lang: en
---

## Overview
In case you imported records and get duplicate ID errors when creating new records from metasfresh, you can use this SQL to recalculate the sequences:

`select dba_seq_check_native();`

`select update_sequences();`

| **Important:** |
| :- |
| MAKE SURE you are logged in with db user metasfresh when running that command. |

>**Hint:** If it is not working, please DROP that particular sequence and run the function again.

### Fix native sequence problems from WebUI (System Administrator)
In case you do not have access to the database, you can run a process to fix native sequence problems from metasfresh directly. To do so, please proceed as follows:

1. [Log in to metasfresh](../../webui_collection/EN/Login) with the [user role](../../webui_collection/EN/NewUserRole) "System Administrator".
1. Open the navigation menu ![](../../webui_collection/EN/assets/Menu_House_WebUI.png) and enter the process name `Fix Native Sequences` into the search field.
 >**Note:** Use shortcut `Alt` + `2` / `⌥ alt` + `2` to open the menu.

1. Click on the menu item to start the process. You will receive a short message at the top right when the process has been completed.

   ![](../../webui_collection/EN/assets/Fix_native_sequences.png)

## Possible Error Messages

```
Error: Cannot retrieve next ID...
Server error
Cannot retrieve next ID from database for DocumentEntityDescriptor{tableName=Product_Category_Purchase_Group, fields.count=10}
```
