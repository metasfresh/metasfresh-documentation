---
title: C_Flatrate_Term (Contract Management / Subscriptions)
layout: default
tag: 
   - datamodel
   - documents
lang: en
---

## Examples

### Flatrate Term with condition, transition, product and partner data 
```


select
	p.value as product,
	o.value as org,
	bp.value as partner_value,
	ft.contractstatus as "ft.contractstatus",
	ft.noticedate as extensiondate,
	ft.startdate as ft_startdate,
	ft.enddate as ft_enddate,
	ft.masterstartdate as masterstartdate,
	ft.masterenddate as masterenddate,
	fc.name as condition_name,
	ftt.name as transition_name,
	ft.plannedqtyperunit as ft_qty,
  	term_ref.name as terminationreason,
	ft.terminationmemo,

	''

from c_flatrate_term ft
--left join c_subscriptionprogress sp on ft.c_flatrate_term_id = sp.c_flatrate_term_id
left join c_flatrate_conditions fc on fc.c_flatrate_conditions_id = ft.c_flatrate_conditions_id
left join c_flatrate_transition ftt on fc.c_flatrate_transition_id = ftt.c_flatrate_transition_id
left join c_invoice_candidate ic on ic.ad_table_id = 540320 and ic.record_id = ft.c_flatrate_term_id
left join ad_org o on ft.ad_org_id = o.ad_org_id
left join m_product p on ft.m_product_id = p.m_product_id
left join c_bpartner bp on ft.dropship_bpartner_id = bp.c_bpartner_id
left join c_bpartner bpbill on ft.bill_bpartner_id = bpbill.c_bpartner_id  -- Rechnungsempfänger
  left join ad_ref_list term_ref on term_ref.ad_reference_id = 540761 and term_ref.value = ft.terminationreason

where true
 -- and terminationreason is not null


```
## Subscription Progress

```
SELECT
  c_flatrate_term_id,
  contractstatus,
  eventdate,
  eventtype
FROM c_subscriptionprogress sp
JOIN c_flatrate_term ft ON ft.c_flatrate_term_id = sp.c_flatrate_term_id
LEFT JOIN c_bpartner bpd ON ft.dropship_bpartner_id = bpd.c_bpartner_id
WHERE TRUE
AND (ContractStatus = 'Pa' OR eventtype IN ('PB', 'PE'))
AND eventdate > now()

ORDER BY c_flatrate_term_id, eventdate

```
