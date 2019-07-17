---
title: Fix a non-EDI order's shipment and invoice for EDI sending
component: de.metas.edi
tags:
  - EDI
lang: en
layout: default
issue: https://github.com/metasfresh/metasfresh/issues/358
---

It sometimes happens that a user manually creates a sales order for an EDI customer and forgets to set the `IsEdiEnabled` flag.
Later they notice that they cannot send any DESADV or INVOICE and ask support.

We assume that
- the order's customer is in fact an EDI customer.
- there is max. one invoice for the given order.
- the `M_InOut`s and `C_Invoice` have the same `POReference` as the `C_Order`.

Assume the order's `POReference` is '123456'

How to fix this:

```sql
UPDATE C_Order
SET IsEDIEnAbled='Y', Updated=now(), Updatedby=99
WHERE POReference='123456';

UPDATE M_InOut
SET IsEDIEnAbled='Y', Updated=now(), Updatedby=99
WHERE POReference='123456';

UPDATE C_Invoice
SET IsEDIEnAbled='Y', EDI_ExportStatus='P', Updated=now(), Updatedby=99
WHERE POReference='123456';
```

At this point, the invoice can already be sent as EDI-INVOICE.

For the DESADV, we need to create the EDI_Desadv record. To do that, we can now use a dedicated process (`AD_Process.Value='EDI_Desadv_Create_From_C_Order'`) from the sales order's gear.
That process is available if the current sales order is completed or closed, has `IsEdiEnabled=Y` and does not yet reference an `EDI_Desadv` record.
Note that:
- this also works for existing `EDI_Desadv` records, if another order needs to be added. In this case, the DESADV record is updated.
- The process also links existing `M_InOuts` to the currently processed order's `EDI_Desadv` record if they reference that order, have the same `POReference`, are completed or closed, have `IsEdiEnabled=Y` and do not reference an `EDI_Desadv` record yet.
