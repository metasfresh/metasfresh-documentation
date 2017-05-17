---
title: SQL Snippets for Business Partner Model (C_BPartner)  ?
layout: default
tags: c_bpartner
lang: en
---

## Updates

### Set Price System
```
update c_bpartner
set m_pricingsystem_id =
(
select m_pricingsystem_id from m_pricingsystem  where name = 'Testpreisliste Kunden')
where m_pricingsystem_id is null and iscustomer = 'Y'
```

### Set Payment Term
```
update c_bpartner
set c_paymentterm_id =
(
select c_paymentterm_id from c_paymentterm  where name = '10 Tage netto')
where c_paymentterm_id is null and iscustomer = 'Y'
```
