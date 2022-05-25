---
title: MD_Candidate
layout: default
tag: 
  - Data Model
  - Dispo Framework
lang: en
---

## DANGER ZONE !

### Material Dispo - Clean up 

Removes all existing Material Dispo data!

```SQL
truncate
    md_candidate,
    md_candidate_demand_detail, 
    md_candidate_dist_detail,
    md_candidate_prod_detail,
    md_candidate_purchase_detail,
    md_candidate_transaction_detail,
    md_candidate_stockchange_detail
```
