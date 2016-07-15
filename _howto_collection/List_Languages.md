---
title: List Languages via SQL
layout: default
<!--
tags:
  - SQL
-->

---
Shows all Systemlanguages that are installed:

```
select ad_language, issystemlanguage, isbaselanguage from ad_language where issystemlanguage = 'Y' or isbaselanguage = 'Y';
```