---
title: IT FRESH-1048
required data:
   bpartner: bpartner G000X (customer), G000Y (customer)
   products: P0001, P0002
   HUs: TU A, TU B
   AD_Orgs: Org I, Org II
   pricelists: customer pricelist CP (for each Org)
layout: default
tags:
  - Jasper
  - Shipment
  
---
## #724 Aggregation Shipment Jasper Documents shows reference from other ad_org_id

> Testcase to check if shipments with the same reference, but for different Orgs are kept separately in case of aggegration.

1. Make sure both bpartners, products and TUs are used in both Org I and II

1. Create 3 sales orders, for Org I:
	* G000X, P0001, TU A
	* G000X, P0002, TU B
	* G000Y, P0001, TU B
	
1. Create 3 sales orders, for Org II:
	* G000X, P0001, TU B
	* G000Y, P0002, TU A
	* G000Y, P0001, TU A
	
1. Set the SAME reference in ALL sales orders!

1. Create inouts for each sales order (separately)

1. For each inout for Org I, run the 2 jaspers for aggregation shipment:
	* => the 2 inouts for the 2 sales orders for G000X, for Org I only are aggregated and displayed together
	* => inout for G000Y, for Org I is displayed by itself 
	
1. For each inout for Org II, run the 2 jaspers for aggregation shipment:
	* => the 2 inouts for the 2 sales orders for G000Y, for Org II only are aggregated and displayed together
	* => the qties are summed up where possible (e.g. qty of TU A)
	* => inout for G000X, for Org II is displayed by itself 
	
	
