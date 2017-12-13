---
title: M_DiscountSchemaBreak
layout: default
tag: 
   - datamigration
lang: en
---


## Example

### Insert

Select product records and put them into a break based discount schema to speed up recording.

```

INSERT INTO public.M_DiscountSchemaBreak
SELECT
nextval('m_discountschemabreak_seq'),
1000000,
1000000,
  'Y',
now(),
100,
now(),
100,
540006, --ID of Discount SChema
m_product_id,
1,
0,
  null,
  m_product_id,
'N'

FROM m_product
where m_product_category_id = 540008; --ID of Product Category we want to add
  
```
