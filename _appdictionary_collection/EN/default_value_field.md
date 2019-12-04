---
title: Set a default value for a field
layout: default
tags:  
  - Window
lang: en
sequence:
ref: default_value_field
---

## Example for default value as SQL statement
```
@SQL=select (case when  @C_DocTypeTarget_ID@= 1000027  then 'A line 1
line 2' else 'B line 3
line4' end) as result
```
