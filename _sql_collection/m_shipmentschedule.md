---
title: M_Shipmentschedule
layout: default
tag: 
  - datamodel
  - dispo framework
lang: en
---

## Shipment Schedule with Sales Order

```SQL
select mss.m_shipmentschedule_id,
       co.documentno as sales_order_docno,
       co.poreference as reference,
       case when msr.m_shipmentschedule_id is not null then 'Y' else 'N' end as recompute,  --show when the shipment candidate is currently recomputed
       cbp_col.name as Orderline_Ship_Partner, -- shipment partner of the order line
       cbp_mss.name as Schedule_Ship_Partner ,  --actual shipment partner
       col.c_bpartner_id as col_c_bpartner_id,
       mss.c_bpartner_id as mss_c_bpartner_id,
       col.c_bpartner_location_id as col_c_bpartner_location_id,
       mss.c_bpartner_location_id as mss_c_bpartner_location_id


from m_shipmentschedule mss
         left join c_orderline col on mss.c_orderline_id = col.c_orderline_id
         left join c_order co on col.c_order_id = co.c_order_id
         left join c_bpartner cbp_col on co.dropship_bpartner_id = cbp_col.c_bpartner_id
         left join c_bpartner cbp_mss on mss.c_bpartner_id = cbp_mss.c_bpartner_id
         left join m_shipmentschedule_qtypicked msq on mss.m_shipmentschedule_id = msq.m_shipmentschedule_id
         left join m_shipmentschedule_recompute msr ON msr.m_shipmentschedule_id = mss.m_shipmentschedule_id
         
         where co.documentno = '<your order documentnno>'

```

