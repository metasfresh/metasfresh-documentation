---
title: M_Pricelist (Pricing,Product,Category,Unit,Tax)
layout: default
tag: 
   - Data Model
   - Master Data
lang: en
---

## SELECT Example Full Product and Pricing

```
SELECT
    p.value as product_no,
    p.name as product_name,
    p.isactive as product_active,
    p.upc as product_ean,
    p.weight as product_weight,
    p.description as product_description,
    p.documentnote as product_description_long,
    uomsymbol as uom_name,
    pc.name as category_name,
    pcp.name as parent_category_name,
    t.name as tax_name,
    t.rate as tax_percentage,
    pl.name as pricelist_name,
    plv.validfrom as pricelistversion_validfrom,
    pp.pricestd as price

  from m_pricelist pl
  join m_pricelist_version plv on plv.m_pricelist_id = pl.m_pricelist_id
  join m_productprice pp on pp.m_pricelist_version_id = plv.m_pricelist_version_id
  join m_product p on pp.m_product_id = p.m_product_id
  join m_product_category pc on pc.m_product_category_id = p.m_product_category_id
  left join m_product_category  pcp on pcp.m_product_category_id = pc.m_product_category_parent_id
  left join c_taxcategory tc on tc.c_taxcategory_id = pp.c_taxcategory_id
  left join c_tax t on t.c_taxcategory_id = tc.c_taxcategory_id and t.c_tax_id in (1000023,1000022,1000024)
  join c_uom uom on uom.c_uom_id = pp.c_uom_id
  where pl.m_pricelist_id =2008396
```
