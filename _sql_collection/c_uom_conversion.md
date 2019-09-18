---
title: C_UOM_Conversion (UOM,Product)
layout: default
tag: 
   - Data Model
   - Master Data
lang: en
---

## INSERT Example Creating Product UOM Conversion Records

``` sql

  INSERT INTO c_uom_conversion (
              c_uom_conversion_id,
              ad_client_id,
              ad_org_id,
              isactive,
              created,
              createdby,
              updated,
              updatedby,
              c_uom_id,
              c_uom_to_id,
              multiplyrate,
              dividerate,
              m_product_id)

	(
        select
        nextval('c_uom_conversion_seq'),
        1000000,
        <your ad_org_id>,
        'Y',
        now(), --timestamp
        100, --SuperUser ID. Could be other user ID.
        now(), --timestamp
        100, --SuperUser ID. Could be other user ID.
        100, --Source UOM
        1000000, --Target UOM
        0.25, --Multiply Rate !! Needs to correlate with Divide Rate !!
        4, -- Divide Rate !! Needs to correlate with Multiply Rate !!
        data.m_product_id -- Product ID
        from
          (SELECT *
               FROM migration_data.product_master_data_old_system
               JOIN m_product ON value = oldsystem.value -- you need to join so we can provide data.m_product_id in the lines above
              ) AS data
       );
  
```


