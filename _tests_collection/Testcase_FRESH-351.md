---
title: IT FRESH-351
required data:
   bpartner: bpartners G000I (Org I), G00II (Org II)
   AD_Orgs: Org I, Org II 
   products: P0001 (Org I), P0002 (Org II)
   HUs: TU A (Org I), TU B (Org II)
   pricelists: vendor pricelist VP, customer pricelist CP
layout: default
---

# IT FRESH-351
### Error when sales order is automatically created as counter doc from a purchase order with packagings
> Testcase to check if sales orders are correctly created
> as counter documents for purchase orders including
> packaging.

**Set Up**

1. Log in as Admin, for Org I (you should be able to  make changes for both Org I & II as Admin!)

1. Make sure that G000I = Org I, and has IsVendor=Y set in bpartner

1. Also make sure that the vendor pricelist VP is used for G000I as vendor

1. Make sure that G00II = Org II, and has IsCustomer=Y set in bpartner

1. Also make sure that the customer pricelist CP is used for G00II as customer

1. Open Document Type, select type Bestellung (Purchase Order)

	* => Org = Org *
	* => Create Counter Document should be checked; if not, check it!
	
1. Open type Standardauftrag (Sales Order)

	* => Org = Org *
	* => Create Counter Document and Default Counter Dcoument should be checked; if not, check both!
	
1. Open Counter Document

	* => Org = Org *
	* => Document Type Bestellung, and Counter Document Type Standardauftrag
	* => Create Counter Document should be checked; if not, check it!
	* => Document Action: Complete

1. Open Product, search for P0002, and create a CU-TU Allocation (M_HU_PI_Item_Product) in the 2nd tab:

	* Org II
	* select TU B, with e.g. 5kg
	* set it for G000I
	
1. In tab Business Partner, create a new entry:
	
	* Org II
	* business partner G000I
	* check for vendor & Default Vendor
	
1. In 1st tab, press Gear, create a product allocation (M_Product_Create_Mappings_Process):

	* Org I
	* P0001, OK

1. In pricelist VP, make sure you have 

	* P0002 and TU B are included
	* both have an active price set
	* make sure there are no active attributes prices for P0002 using a TU other than B
	* if you like, you can create a price with attributes for P0002, using TU B
	
1. Open Product, search for P0001, and create a CU-TU Allocation (M_HU_PI_Item_Product) in the 2nd tab:

	* Org I
	* select TU A, with e.g. 5kg
	* set it for G00II
	
1. In tab Business Partner, create a new entry:
	
	* Org I
	* business partner G00II
	* check for customer
	
1. Check tab Allocated Product

	* => Org I
	* => Product-Allocation: P0002

1. In pricelist CP, make sure you have 

	* P0001 and TU A included
	* both have an active price set
	* make sure there are no active attributes prices for P0001 using a TU other than A
	* if you like, you can create price with attributes for P0001 with TU A
	

	
**Test**
	
1. Log in with Org II, a role != Admin (e.g. Handel)

1. Open Bestellung, select G000I as vendor

	* => vendor pricelist VP is set automatically
	
1. In Product, select P0002

	* => CU-TU Allocation you created is selectable in TU, e.g. TU B x 5kg
	
1. Set a qty for TU, enter, and complete the Bestellung

	* => price from vendor pricelist VP is taken (normal or attribute price)
	* => no errors
	
1. Log in with Org I, e.g. as Admin

1. Check window Auftrag, search for newly created ones

	* => Auftrag for G00II
	* => P0001 with CU-TU Allocation you created, e.g. TU A x 5kg
	* => price from customer pricelist CP is taken (normal or attribute price)


