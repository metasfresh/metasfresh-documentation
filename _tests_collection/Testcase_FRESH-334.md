---
title: IT FRESH-334
required data:
   bpartner: bpartners G000X (Org I), G000Y (Org II), G000Z (Org II)
   products: P0001 (Org I), P0002 (Org II)
   AD_Orgs: Org I, Org II, Org * 
layout: default
---

# IT FRESH-334
### Product BPartner Constraint Issue
> Testcase to check that entries in C_BPartner_Product 
> only allow the Org from TopLevel, or all Org when *
> is set for the product.


**Part I**

1. Open Produkt (M_Product), search for AD_Org = Org I  
	
	* => all products which have AD_Org = Org I set are displayed
	* => P0001 is displayed as well, P0002 is **not**
	
1. Select product P0001, go to tab Geschäftspartner (C_BPartner_Product)

	
1. Create a new entry

	* => new entry has AD_Org = Org I is set automatically, read-only

1. Set bpartner: start writing G000

	* => G000X is selectable, G000Y is **not**
	
1. Create the entry in tab Geschäftspartner (C_BPartner_Product) for G000X, save

1. Try creating another new entry in tab Geschäftspartner (C_BPartner_Product), again for G000X, save

	* => Error msg, since entry already exists
	
1. In first tab Produkt (M_Product), search for AD_Org = Org *

1. Create a new product, e.g. P0005

1. Go to tab Geschäftspartner (C_BPartner_Product), and create a new entry

	* => new entry has AD_Org = Org * set automatically, read-only

1. Set bpartner: start writing G000

	* => G000X & G000Y are **both** selectable

	
**Part  II**

1. For  P0002, in Org II, create new entries in tab Geschäftspartner (C_BPartner_Product): 

	* G000Y as customer, check Vewendet für Kunden
	* G000Z as vendor, check Verwendet für Lieferant & Gegenwärtiger Lieferant
	
		* => Org II is set for both automatically
	
1. Make sure P0002 is included in the customer pricelist of G000Y and the vendor pricelist of G000Z

1. Create a sales order for G000Y, in Org II, for P0002 (qty and PI don't matter)

1. Gear, Generate PO from Sales Order:

	* leave filters as they are
	* click OK
	
		* => purchase order is created
	
1. Check the newly created purchase order:

	* => purchase order has Org II set
	* => vendor = G000Z
	* => price = price from vendor pricelist of G000Z, *not* price from customer pricelist of G000Y
	
1. Create a new product, P0006, in M_Product with Org = *

1. Create entries in tab Geschäftspartner (C_BPartner_Product): 

	* G000Y as customer, check Vewendet für Kunden
	* G000Z as vendor, check Verwendet für Lieferant & Gegenwärtiger Lieferant
	* G000X as vendor, check Verwendet für Lieferant 
	
		* => Org * is set for all automatically
		
1. In db, change AD_Org for G000X in C_BPartner_Product of P0006 to Org I

1. Create a sales order for G000Y, in Org II, for P0006

1. Gear, Generate PO from Sales Order:

	* leave filters as they are
	* click OK
	
		* => purchase order is created
		
1. Check the newly created purchase order:

	* => purchase order has Org II set
	* => vendor = G000Z
	* => price = price from vendor pricelist of G000Z, *not* price from customer pricelist of G000Y
	
1. Create the inouts from shipment schedules and the invoices from invoice candidates for your sales orders

	* => all working fine, no errors
	* => correct Org II
	* => correct price from customer pricelist of G000Y
	
1. Complete the purchase orders, and create the inouts in Wareneingang POS and the invoices from invoice candidates for them

	* => all working fine, no errors
	* => correct Org II
	* => correct price from vendor pricelist of G000Z

	
