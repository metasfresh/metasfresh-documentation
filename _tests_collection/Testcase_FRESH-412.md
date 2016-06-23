---
title: IT FRESH-412
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B, TU C
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - order
  - order entry
---
## quick input in orders not working

> Testcase to check if the quick input for orders
> is working correctly.

1. Make sure that the HUs TU A, TU B and TU C are assigned to P0001 & P0002 in their CU-TU allocation

1. Make sure P0001 & P0002 and TU A, TU B & TU C are all included in both CP & VP

1. Make sure TU C has infinite capacity = Y, TU A & TU B have infinite capacity = N

1. Create a purchase order for G000X, select VP

1. In field Product, enter P0001

1. In field Packvorschrift-Produkt Zuordnung, select either TU A (e.g. x 5kg) or TU B (e.g. x 10 Stk)

1. In field Menge TU, set 2, and press Enter

	* => orderline is created, you don't have to set qty CU
	* => qty TU: 2
	* => qty: 10 (for TU A) or 20 (for TU B)
	
1. Repeat the test for a sales order for G000X, with CP

	* => orderline is created after pressing Enter when Menge TU was set, you don't have to set qty CU
	* => qty TU: as you set it
	* => qty: qty TU & what is set as qty CU for the selected TU
	
1. Create another sales order for G000X, with CP

1. In field Product, enter P0002

1. In field Packvorschrift-Produkt Zuordnung, select TU C

1. In field Menge TU, set 1, and press Enter

	* => no orderline is created, since the selected TU has infinite capacity = Y, so the qty cannot be calculated!
	
1. In field Menge CU, set 15, and press Enter

	* => orderline is created 
	* => qty TU: 1
	* => qty: 15