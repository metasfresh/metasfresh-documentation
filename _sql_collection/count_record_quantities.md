---
title: Asses Record Quantities Quickly
layout: default
tag: Tips
lang: en
---

## Overview

Sometimes you want to see on a glance what data you got in a system. Here are some examples.

## Examples 

### master data

```
select * from (
  SELECT 'products',count(*) FROM m_product
  UNION
  SELECT 'product categories',count(*) FROM m_product_category
  UNION
  SELECT 'pricelists',count(*) FROM m_pricelist
  UNION
  SELECT 'prices',count(*) FROM m_productprice
  UNION
  SELECT 'discountschema',count(*) FROM m_discountschema
  UNION
  SELECT 'Partners',count(*) FROM c_bpartner
  UNION
  SELECT 'Partnergroups',count(*) FROM c_bp_group

) as foo
order by count


```


