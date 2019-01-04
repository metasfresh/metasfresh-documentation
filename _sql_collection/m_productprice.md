---
title: M_ProductPrice (Pricing,Product)
layout: default
tag: 
   - datamodel
   - masterdata
lang: en
---

## INSERT Example Creating Pricing Records

```
INSERT INTO public.m_productprice
(m_pricelist_version_id, m_product_id, ad_client_id, ad_org_id, isactive, created, createdby, updated, updatedby,
 pricelist, pricestd, pricelimit, usescaleprice, m_productprice_id, c_taxcategory_id,
 isattributedependant, isseasonfixedprice, c_uom_id, seqno, c_uom_id_pre_08147, m_attributesetinstance_id, isdefault,
 m_discountschemaline_id, m_productprice_base_id, matchseqno,
 ishuprice, m_hu_pi_item_product_id)
  (SELECT (SELECT m_pricelist_version_id
           FROM m_pricelist_version
           WHERE name = '<your pricelist name>'),
          data.m_product_id,
          1000000,
          (Select ad_org_id from ad_org where name ilike '<name of your org>'),
          'Y',
          now(),
          100,
          now(),
          100,
          0, --price list
          <name of your price column in migration data> ,
          0,
          'N',
          nextval('m_productprice_seq'),
          1000001,
          'N',
          'N',
          (select c_uom_id from c_uom where c_uom.name = <uom column in your migration data> ),
          NULL,
          NULL,
          NULL,
          'N',
          NULL,
          NULL,
          0,
          'N',
          NULL
   FROM (SELECT *
         FROM migration_data.product_master_data_old_system
         JOIN m_product ON value = oldsystem.value -- you need to join so we can provide data.m_product_id in the lines above
        ) AS data
  );  
  
```


<details>

test

</details>