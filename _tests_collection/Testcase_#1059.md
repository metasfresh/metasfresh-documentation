---
title: IT gh#1059
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B
layout: default
tags:
  - shipment schedules
  - UI
---
## ShipmentScheduleBL.updateSchedules fails after C_Order was voided

> Testcase to check if shipment schedules are deleted correctly after a sales order is voided.


1. Create and complete a sales order for G000X:
	* P0001, 5 TU A
	* P0002, 3 TU B
	
1. Create the inout from shipment schedules (leave the window open!)

1. In the shipment, set the qty for P0001 to 3 TU A, to create a partial inout, complete

1. In shipment schedule window, refresh:
	* => P0001: qty to deliver: qty of 2 TUs, orange
	* => P0002: qty to deliver: 0, red
	
1. Go back to you sales order, and void it

1. Check the console:
	* => no errors regarding "update or delete on table "m_shipmentschedule"" or exceptions like "Found QtyPicked record with non-zero qty even if the shipment schedule has QtyDelivered=0"
	
1. Check your shipment:
	* => shipment is deacitvated, docstatus is Nichts
	
1. Check your shipment schedules again:
	* => the shipment schedule for P0001, with the partial inout, was deleted
	* => the shipment schedule for P0002, that was fully delivered, has all qties=0, is read-only and processed
	* => tab for shipment of shipment schedule for P0002 shows inout as deactivated