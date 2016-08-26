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

```sql
select "de.metas.materialtracking".pp_order_correct_type_to_nonqi('DocumentNo');
```
Change from ordinary PP_Order to quality inspection to

```
select "de.metas.materialtracking".pp_order_correct_type_to_qi('DocumentNo');
```

Don't forget to 
* run the process "Waschproben aktualiseren (ÜBERGANGSWEISE)" from the PP_Order window's gear
* run `select "de.metas.materialtracking".c_invoice_candidate_delete_for_m_material_tracking_lot('<PP_Orders-Material_Trackings-Lot-No');` to delete the now-stale ICs
* execute the "C_ILCandHandler" handler (i.e. the one with the `PP_Order_MaterialTracking_Handler`) from its window to recreate the ICs
