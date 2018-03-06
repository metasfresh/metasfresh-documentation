---
title: PP_Product_BOM (Bill of Material)
layout: default
tag: 
   - datamodel
   - masterdata
lang: en
---

## SELECT Examples

### BOM and its line
```
SELECT DISTINCT
  bom.name,
  p.value,
  p.name,
  p.description
FROM m_product p
  LEFT JOIN pp_product_bomline boml ON boml.m_product_id = p.m_product_id
  LEFT JOIN pp_product_bom bom ON bom.pp_product_bom_id = boml.pp_product_bom_id
  
ORDER BY bom.name,p.name
```
