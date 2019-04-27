---
title: M_Inventory (Inventory)
layout: default
tag: 
   - datamodel
   - documents
lang: en
---

## INSERT Example Creating Inventory Record

NOTE: Use the I_Inventory table to do imports of inventory.

``` sql

INSERT INTO m_inventory

              (
              m_inventory_id,
              ad_client_id,
              ad_org_id,
              created,
              createdby,
              updated,
              updatedby,
              documentno,
              description,
              m_warehouse_id,
              movementdate,
              posted,
              processed,
              processing,
              updateqty,
              isapproved,
              docstatus,
              docaction,
              c_doctype_id
              )
VALUES (nextval('m_inventory_seq'),
        1000000,
        1000000,
        now(),
        100,
        now(),
        100,
        nextval('m_inventory_seq'),
        null,
        1000012,
       now()::date,
        'N',
        'N',
        'N',
        NULL, -- updateqty
        'Y',
        'DR',
        'CO',
        1000023
        );
  
```
