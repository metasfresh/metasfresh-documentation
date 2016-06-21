---
title: IT FRESH-386
required data:
   bpartner: bpartners G000I (Org I), G00II (Org II)
   AD_Orgs: Org I, Org II 
   products: P0001 (Org I), P0002 (Org II)
   HUs: TU A (Org I), TU B (Org II), TU C (Org II), TU D (Org I)
   pricelists: vendor pricelist VP, customer pricelist CP
layout: default
tags:
  - Counter Documents
  - Product Mapping
---
## another error when sales order is automatically created as counter doc from a purchase order with packagings
> Testcase to check if sales orders are correctly created
> as counter documents for purchase orders with different
> packaging setting.

**Set Up**

1. See https://github.com/metasfresh/metasfresh-documentation/blob/master/_tests_collection/Testcase_FRESH-351.md for Set Up of Orgs, Counter Docs and Products with CU-TU Allocation etc.

1. Open Product, search for P0002, and create another CU-TU Allocation (M_HU_PI_Item_Product) in the 2nd tab:

	* Org II
	* select TU C, with e.g. 10kg
	* set it for G000I
	
1. In Product, search for TU C, check tab Allocated Product

	* => no allocation with another TU!

1. In pricelist CP, make sure you have 

	* TU C included
	* TU C has an active price set
	* if you had set an attribute price for P0002 with TU A, leave it active
	
	
**Test**
	
1. Log in with Org II, a role != Admin (e.g. Handel)

1. Open Bestellung, select G000I as vendor

	* => vendor pricelist VP is set automatically
	
1. In Product, select P0002

	* => select the CU-TU Allocation with TU C
	
1. Set a qty for TU, enter, and complete the Bestellung

	* => price from vendor pricelist VP is taken (normal or attribute price)
	* => no errors
	
1. Log in with Org I, e.g. as Admin

1. Check window Auftrag, search for newly created ones

	* => Auftrag for G00II
	* => P0001 **without CU-TU Allocation**, but with Virtual PI, since TU C has no allocated TU!
	* => price from customer pricelist CP is taken (normal or attribute price)

1. Change the Set Up, and create a product mapping for the TU B you used in the first Bestellung with TU D, not with TU A

1. Make sure that TU D is not used for the CU-TU Allocation for P0001, only TU A is used there

1. Create and complete another Bestellung for G000I, with P0002, using TU B (in Org II)

1. Check the Auftrag for G00II (in Org I)

	* => P0001 **without CU-TU Allocation**, but with Virtual PI, since the allocated TU A used for P0001 has no allocation with TU B
