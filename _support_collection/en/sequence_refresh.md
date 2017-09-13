---
layout: default
title: How to solve duplicate Record IDs using check native sequences
tags:
  - Support
lang: en
---

In case you imported records and get duplicate ID errors when creating new records from metasfresh, you can use this sql to recalculate the sequences:

`select dba_seq_check_native();`


> Important: MAKE SURE u are logged with db user metasfresh when running that command 

> Hint: and if is not working: pls DROP that particular sequence and run that function again
