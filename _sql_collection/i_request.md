---
title: Import Flatrate Term
layout: default
tag: 
   - datamigration
lang: en
---

## Overview
This query shows which columns you need in order to insert into i_flatrate term to e.g. migrate data from a temp table

## Example

```

SELECT
  nextval('i_flatrate_term_seq'),
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
FROM i_flatrate_term;


```
