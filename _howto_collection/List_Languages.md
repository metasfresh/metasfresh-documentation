---
title: List Languages via SQL
layout: default
<!--
tags:
  - SQL
-->
---

```
select ad_language, issystemlanguage, isbaselanguage from ad_language where issystemlanguage = 'Y' or isbaselanguage = 'Y';
```