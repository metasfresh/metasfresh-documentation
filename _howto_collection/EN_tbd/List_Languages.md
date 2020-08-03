---
title: List Languages via SQL
layout: default
tags:
  - Setup
lang: en
sequence: 20
ref: list_languages
---

Shows all system languages that are installed:

```sql
select ad_language, issystemlanguage, isbaselanguage from ad_language where issystemlanguage = 'Y' or isbaselanguage = 'Y';
```
