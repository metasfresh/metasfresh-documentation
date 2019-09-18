---
title: C_Payment (Payment)
layout: default
tag: 
   - Data Model
   - Documents
lang: en
---

## Examples

### INSERT

```SQL
INSERT INTO public.c_payment (c_payment_id, ad_client_id, ad_org_id, isactive, created, createdby, updated, updatedby,
                              documentno, datetrx, isreceipt, c_doctype_id, trxtype, c_bankaccount_id, c_bpartner_id,docstatus,
                              payamt,tendertype,c_currency_id,docaction,dateacct,c_bp_bankaccount_id,description)
select
       nextval('c_payment_seq') as c_payment_id,
       1000000, 1000000,'Y',now(),100,now(),100,nextval('c_payment_seq') as documentno,
       to_date("Booking Date",'DD.MM.YYYY'),
       case when to_number(amount, '9999999G999D99') < 0 then 'N' else 'Y' end as isreceipt,
       case when to_number(amount, '9999999G999D99') < 0 then 1000009 --Zahlungsausgang
           else 1000008 end as c_doctype_id, --Zahlungseingang
       'S',
       null,
        <c_bpartner_id>,
        'DR',
      to_number(amount, '9999999999DS99'),
       'A',
       102,
       'CO',
       to_date("Booking Date",'DD.MM.YYYY'),
       2000272,
       "Payment reference"

from migration_data.<yourtable>
;

```
