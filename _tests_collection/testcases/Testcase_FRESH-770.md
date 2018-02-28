---
title: IT FRESH-770
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002, P0003
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Attribute
---
## #487 Attribute editor dialog stores empty field as empty string

> Testcase to check if the attributes left empty in attribute editor are stored as null instead of empty.


1. Create a sales order for G000X, with:
	* all 3 products, qty: >5
	* P0001: Bio
	* P0002: GMAA, CH
	* P0003: no attributes (no attributes from pricelist or connected to the bpartner either!!)
	
1. Check your order and orderlines in db:
	* => P0001 and P0002 have an attributesetinstance, e.g. 8000256
	* => P0003 has attributesetinstance: 0
	
1. Print Preview the Jasper for the order:
	* => attributes for P0001 and P0002 are displayed as set
	* => attribute for P0003: empty
	
1. Create a purchase order for G000X, with:
	* all 3 products, qty: >5
	* P0001: Bio
	* P0002: GMNF
	* P0003: no attributes (no attributes from pricelist or connected to the bpartner either!!)
	
1. Check your order and orderlines in db:
	* => P0001 and P0002 have an attributesetinstance, e.g. 8000256
	* => P0003 has attributesetinstance: 0
		
1. Print Preview the Jasper for the order:
	* => attributes for P0001 and P0002 are displayed as set
	* => attribute for P0003: empty	
	
1. In Wareneingang POS, make sure the destination warehouse for your purchase order receipt will be the same as the Kommissionier warehouse of your sales order

1. If that warehouse is not selectable as destination warehouse, create a Distribution Order to move your products accordingly

1. Select your order in Wareneingang POS, and create material receipts:
	* for P0001, create >1 receipts, leave attribute Bio, but add another attribute e.g. DE or GMNF to 1 receipt
	* for P0002, also create >1 receipts, leave attribute, but change it to Keine/Leer
	* for P0003, create >1 receipts too, add 1 or more atttributes to 1 receipt, but leave it empty for another
	
1. Check Wareneingang for your receipts, print preview the Jaspers:
	* => the ones where you didn't set any attribute, the resp. column is empty (also in Jasper)
	
1. Check the Wareneingang in db (m_inoutline!):
	* => ALL inouts have an attributesetinstance set: it is set also for attributes not displayed in Wareneingang, e.g. SSCC of the LU you used, or the weight of the product set in VPI, etc.
	
1. If you had to create a Distribution Order, then move the products to the destination warehouse now!

1. Open Kommissionier Terminal, select G000X and your sales order date

1. Select the line for P0001, open the picking terminal, and click HU Editor:
	* checkbox for considering attributes is checked
	* all HUs from Wareneingang are displayed, since all have Bio set (if the sales order has no other attributes set, e.g. AdR or Herkunft, then those can be set differently and can still be picked!)
	
1. Select 1 HU, and do the picking

1. In db, set the attribute: Bio to null or empty for 1 HU of P0001 (note: you have to set it for LU, TU & VPI!!)

1. Check Kommissionier Terminal, picking again:
	* => the HU you changed is NOT displayed at first anymore, only when you uncheck the attributes checkbox, since it does not have the required Bio set anymore (if you set it differently only for the LU it will still be displayed, since the TU and VPI still are Bio!)

1. Select another HU (preferably without Bio), and do picking	

1. Create the inouts for the HUs you picked before (for each separately)

1. Check the inouts, jasper previews, and check in db:
	* => attributes are displayed in the inoutline & Jasper, e.g. Bio, or GMNF
	* => attributesetinstance is set for all inoutlines in db
	
1. Repeat with P0003 picking and inout

1. Check the inouts, jasper previews, and check in db:
	* => no attributes are displayed in the inoutline & Jasper, since none were set
	* => attributesetinstance is set in db: set also for attributes not displayed in Lieferung, e.g. SSCC of the LU you used, or the weight of the product set in VPI, etc.
	
1. Check the HUs you chose for picking in Handling Unit window, tab attribute, and check some attributes (set/not set) in db too (M_HU_Attribute_ID):
	* => the attributes set have the same value in the window and in the db
	* => the attributes not set have no value in the window, and null in the db:
	select * from m_hu_attribute where M_HU_Attribute_ID=xy and value is null: should get you the info from db, with value:'' there is no info for that attribute ID
	
1. Also try reactivating an order (a new one, before receipts / inouts), and setting / unnsetting the attributes from before:
	* => attributes are displayed / not displayed correctly in the orderline, and the jasper
	* => attributesetinstance: 0 ONLY when no attribute was set from the beginning! if you change an attribute that was set before (manually or from e.g. pricelist) to empty, there will still be an attributesetinstance: 857965 e.g. 