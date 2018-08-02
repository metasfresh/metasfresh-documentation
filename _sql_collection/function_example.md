---
title: Sample Function
layout: default
tag: 
  - Functions
  
lang: en
---

## Overview
Sometimes its useful to wrap logic into functions to make SQL code easier to read.
Here is an example of a SQL function returning the status of a customer.


### example

```
create function get_customer_status_by_order_id(orderid numeric)
  returns character varying
stable
language sql
as $$
select case when max(m_product_id) is null
      then 'Stammkunde'
            else 'Neukunde' end
     from c_orderline
     where c_order_id = $1 and c_orderline.m_product_id in (select m_product_id
                                                          from m_product
                                                          where name ilike '%Einmalgebühr%');
$$;



```
