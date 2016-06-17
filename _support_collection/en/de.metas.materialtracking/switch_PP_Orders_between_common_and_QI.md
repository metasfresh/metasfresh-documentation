---
title: Turn Waschproben (Quality Inspections) into normal PP_Orders (also works the other way round)
component: de.metas.materialtracking
tags: 
  - support
  - sql
lang: en
layout: default
sequence: 5
---

Change from quality inspection to ordinary PP_Order:

```
select "de.metas.materialtracking".pp_order_correct_type_to_nonqi('DocumentNo');
```
Change from ordinary PP_Order to quality inspection to

```
select "de.metas.materialtracking".pp_order_correct_type_to_qi('DocumentNo');
```

Don't forget to run the process "Waschproben aktualiseren (ÜBERGANGSWEISE)" from the gear
