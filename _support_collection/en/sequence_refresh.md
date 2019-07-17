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
