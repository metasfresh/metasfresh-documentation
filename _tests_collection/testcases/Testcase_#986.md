---
title: IT gh#986
required data:
   bpartner: bpartner G000X (customer or vendor)
   products: P0001
   pricelists: customer pricelist CP or vendor pricelist VP   
layout: default
tags:
  - DLM
---
## #986 Handle the case that PO can't load a record

> Testcase to check if the handler will un-archive a record and the PO retries to load it, without throwing errors or exceptions.

1. Have a purchase order sales order for G000X, for P0001, and the corresponding invoice candidates

1. Open Extra, Settings

1. Change the DLM-Level at the bottom to "nur Produktiv"

1. Select the invoice candidate, and use zoom into to get to the corresponding order

1. Note the C_Order_ID of this order

1. Close the order, and in pgAdmin, do UPDATE C_Order SET DLM_Level=3 --(=archived) where C_Order_ID=your order ID;

1. Then check the DLM-Level with SELECT DLM_Level FROM C_ORDER where C_Order_ID=your order ID;:
	* => still Level 3
	
1. Go back to your IC, and zoom into your order again
	* => the order is displayed without errors or anything

1. In pgAdmin, check the DLM-Level again with SELECT DLM_Level FROM C_Order where C_Order_ID=your order ID;:
	* => now Level 1
	* => the System has taken back the order with Level 3, = archived, on-the-fly, without errors

1. Repeat the test, but leave the DLM-Level in Settings on "Produktivdaten und archivierte Daten":
	* => Selects in pgAdmin show always Level 3, since the DLM-Level didn't change and the archived data is included as well

