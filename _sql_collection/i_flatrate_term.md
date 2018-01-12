---
title: Import Flatrate Term
layout: default
tag: 
   - datamigration
lang: en
---

## Examples

### Get already imported Flatrate Term Import Records to apply them again on another system
```
INSERT INTO i_flatrate_term 
SELECT
  i_flatrate_term_id,
  ad_client_id,
  ad_org_id,
  bpartnervalue,
  c_flatrate_conditions_value,
  created,
  createdby,
  enddate,
  i_errormsg,
  isactive,
  startdate,
  updated,
  updatedby,
  productvalue,
  price,
  dropship_bpartner_value,
  masterstartdate,
  masterenddate,
  qty
FROM other_table


```
