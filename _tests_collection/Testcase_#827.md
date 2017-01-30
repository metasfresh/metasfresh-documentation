---
title: IT #827
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002, P0003, P0004
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Attributes
  - Production
  - UI
---
## #827 use the barcode field to select HU using attribute value

> Testcase to check the usage of the barcode field to select an HU using an attribute value.


1. Make sure you have data set up for production, e.g. workflow, production ressource etc.

1. Also make sure you will need P0001, P0002 and P0003 as components for producing P0004

1. Create an attribute, type String, Master Serial No., and set it for LU and No Handling Unit

1. Check in dimension specification, for the product attribute transfer in PP_Order:

1. Check attributes you want to use, and make sure IsTransferWhenNull is checked for:
	* Master Serial No.
	* Lot No.

1. Check in dimension specification, for the attribute value used in HU barcode field:
	* attribute used should be the Master Serial No. (only attributes with type String should be selectable!)

1. Create a purchase order for G0001 (order several TUs!):
	* P0001, TU A
	* P0002, TU B
	* P0003, TU B
	
1. In Wareneingang POS, select the warehouse for production as destination warehouse, if possible

1. If this is not possible, create a Distribution Order for all your products from destination warehouse in Wareneingang POS to the production warehouse

1. In Wareneingang POS, create inouts, and set attributes for all products:
	* P0001: e.g. Master Serial No., AdR (note the Master Serial No.), Bio
	* P0002: e.g. AdR (same as P0001), Bio
	* P0003: e.g. AdR (same as P0001), Lot No. (note the Lot No.)
	
1. Create a PP_Order to produce P0004 (for G000X, if you like, not mandatory):
	* P0004, TU A
	
1. Open Produktion Fertigstellung POS, select your PP_Order

1. Click Zuteilung, enter the Master Serial No. in Barcode field, Enter:
	* => HU of P0001 is marked green
	
1. Enter the Lot No. in Barcode field, Enter:
	* => NO HU is marked green, Barcode field is reset again

1. Enter the HU value of another HU (of P0003 e.g.):
	* => HU of P0003 is also marked green
	
1. Select the HU of P0002 as well, and issue them with OK

1. Click Empfang for receiving P0004, check the attributes in HU Editor:
	* => Master Serial No. is set, as in P0001, since is IsTransferWhenNull set 
	* => Lot No. is set, as in P0003, since is IsTransferWhenNull set 
	* => AdR is set, as in all issued products, since it was set (and the same!) for all issued products 
	* => Bio is NOT set, since it was set for only 2 of the issued products
	


**Note:** Attribute Propagation in Receive in production should work as before, see IT for #810.
	

	

