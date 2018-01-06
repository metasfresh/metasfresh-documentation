---
title: M_Product_Category
layout: default
tag: 
   - datamodel
   - masterdata
lang: en
---


## Example


```
INSERT INTO PUBLIC.m_product_category
select
nextval('m_product_category_seq'),
	1000000,
    1000000,
    'Y',
	now(),
	100,
	now(),
	100,
	'Value',
	'Name',
	null,
	'N',
	0,
    null,
    'N',
    null,
    'F',
     NULL, NULL, NULL, NULL, NULL, 'N', 'N'

```
