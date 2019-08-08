---
title: C_Order (Sales and Purchase Order)
layout: default
tag: 
   - datamodel
   - documents
lang: en
---

## Examples

### Purchase Order with Purchase Candidate

```SQL
select
       po.documentno,
       po.docstatus,
       po.totallines,
       mp.name as product_name,
       pol.qtyordered,
       pol.pricestd       
from c_order po
    join c_orderline pol on po.c_order_id = pol.c_order_id
    join c_purchasecandidate_alloc pca on po.c_order_id = pca.c_orderpo_id
    join c_purchasecandidate cp on pca.c_purchasecandidate_id=cp.c_purchasecandidate_id
    join m_product mp on pol.m_product_id = mp.m_product_id

where true
and po.issotrx = 'N' --only purchase orders
and po.docstatus='CO' --only completed ones

```
