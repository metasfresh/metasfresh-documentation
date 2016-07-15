---
title: 
layout: default

<!--
tags:
  - SQL
-->

lang: de, en
---

```
select ad_language, issystemlanguage, isbaselanguage from ad_language where issystemlanguage = 'Y' or isbaselanguage = 'Y';
```