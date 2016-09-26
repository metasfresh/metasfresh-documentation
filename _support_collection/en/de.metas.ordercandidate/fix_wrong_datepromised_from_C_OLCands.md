---
title: Identify InvoiceLines whose product has a missing UPC/EAN
component: de.metas.edi
tags: 
  - Support
  - odercandidate
  - sql
lang: en
layout: default
sequence: 10
---

It happens that users accidentally set `C_OLCand.DatePromised_Override` to a wrong date (e.g. wrong year) ofr a larger number of order candidates and then have the system create orders without noticing the error.
To fix:

```sql
-- create a temporary view to select the shipmentschedules in question
CREATE TEMP VIEW C_OLCand_M_ShipmentSchedule_ORDERS_160826095301_v AS
SELECT 
	t.Name, olc.C_OLCand_ID, ol.C_Order_ID, s.M_ShipmentSchedule_ID, s.DeliveryDate, s.DeliveryDate_Override

FROM C_OLCand olc
	JOIN EXP_ReplicationTrx t ON t.EXP_ReplicationTrx_ID=olc.EXP_ReplicationTrx_ID
	JOIN C_Order_Line_Alloc ola ON ola.C_OLCand_ID=olc.C_OLCand_ID
		JOIN M_ShipmentSchedule s ON s.C_OrderLine_ID=ola.C_OrderLine_ID
		JOIN C_OrderLine ol ON ol.C_OrderLine_ID=ola.C_OrderLine_ID
WHERE
	t.Name='<usually-the-ORDERS-files-name.txt>'

select * from C_OLCand_M_ShipmentSchedule_ORDERS_160826095301_v

UPDATE C_Order o_outer
SET DatePromised='2016-08-28 00:00', PreparationDate='2016-08-28 00:00'
	, updated=now(), updatedby=99
FROM C_OLCand_M_ShipmentSchedule_ORDERS_160826095301_v v
WHERE v.C_Order_ID=o_outer.C_Order_ID;

UPDATE M_ShipmentSchedule s
SET Updated=now(), UpdatedBy=99, DeliveryDate='2016-08-28 00:00'
FROM C_OLCand_M_ShipmentSchedule_ORDERS_160826095301_v v
WHERE v.M_ShipmentSchedule_ID=s.M_ShipmentSchedule_ID;

INSERT INTO M_ShipmentSchedule_REcompute(M_ShipmentSchedule_ID)
SELECT M_ShipmentSchedule_ID FROM C_OLCand_M_ShipmentSchedule_ORDERS_160826095301_v;
```
