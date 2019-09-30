---
title: md_stock_from_hus_v (Qty on Hand, Stock)
layout: default
tag: 
   - Data Model
   - Views
lang: en
---

## SELECT Examples

Show quantity on stock for product and unit of measurement.

```SQL

select mp.value, mp.name,uom.uomsymbol, qtyonhand
from md_stock_from_hus_v stock
        join m_product mp on mp.m_product_id = stock.m_product_id
        join c_uom uom on stock.c_uom_id = uom.c_uom_id
```
