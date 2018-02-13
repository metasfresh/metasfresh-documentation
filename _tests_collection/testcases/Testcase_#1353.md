---
title: IT gh#1353
required data:
   bpartner: bpartners G000X, G000Y (customer)
   products: P0001, P0002
   HUs: TU A, TU B
   AD_Orgs: Org I, Org II, Org *
   pricelists: customer pricelist CP
layout: default
tags:
  - UI
  - Shipment Schedule
---
## Problem with C_Order filtering in M_ShipmentSchedule

> Testcase to check if C_Order filtering in M_ShipmentSchedule is working correctly for different Orgs.


1. Make sure that Autocomplete is enabled for C_OrderLine_ID, in M_ShipmentSchedule (=> SysAdmin, Org *)

1. Log in as Admin, Org II or II, and create 2 sales orders:
	* Org I: G000X, P00001, 10 TU A
	* Org II: G000Y, P0002, 5 TU B
	
1. In db, set the document no.s for both orders to the same number; also make sure this doc no. is not anywhere else

1. Log in with a role that has only access to Org I, open M_ShipmentSchedule

1. In field Auftrag, start writing the doc no. you set for both orders:
	* => autocomplete suggests an order with that doc no., but only one!
	
1. Select the suggested order, and check the M_ShipmentSchedule:
	* => it's the M_ShipmentSchedule for the first order for G000X, in Org I
	
1. Log in with a role that has only access to Org II, open M_ShipmentSchedule

1. In field Auftrag, start writing the doc no. you set for both orders:
	* => autocomplete suggests an order with that doc no., but only one!
	
1. Select the suggested order, and check the M_ShipmentSchedule:
	* => it's the M_ShipmentSchedule for the first order for G000Y, in Org II
	
1. Log in again as Admin, and repeat the same in M_ShipmentSchedule:
	* => 2 orders with the doc no. are suggested, for both Orgs