---
layout: default
title: How to solve duplicate record IDs using check native sequences
tags:
  - Support
lang: en
---

In case you imported records and get duplicate ID errors when creating new records from metasfresh, you can use this SQL to recalculate the sequences:

`select dba_seq_check_native();`

`select update_sequences();`

>**Important:** MAKE SURE you are logged in with db user metasfresh when running that command.

>**Hint:** If it is not working: please DROP that particular sequence and run that function again.


## possible error messages

```
Error: Cannot retrieve next ID...
Server error
Cannot retrieve next ID from database for DocumentEntityDescriptor{tableName=Product_Category_Purchase_Group, fields.count=10}
```
