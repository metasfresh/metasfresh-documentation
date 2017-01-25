---
title: IT #810
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
## #810 Propagate Attribute from Issue to Receive in Production

> Testcase to check the propagation of attributes in production.


1. Make sure you have data set up for production, e.g. workflow, production ressource etc.

1. Also make sure you will need P0001, P0002 and P0003 as components for producing P0004

1. Check attributes you want to use, and make sure IsTransferWhenNull is checked for:
	* Bio
	* Lot No.

1. Check in dimension specification, for the product attribute transfer in PP_Order:
	* attributes with value type List should be active (e.g. Bio, AdR, Herkunft) as well as value type String (e.g. MHD, Lot no.)

1. Create a purchase order for G0001 (order several TUs!):
	* P0001, TU A
	* P0002, TU B
	* P0003, TU B
	
1. In Wareneingang POS, select the warehouse for production as destination warehouse, if possible

1. If this is not possible, create a Distribution Order for all your products from destination warehouse in Wareneingang POS to the production warehouse

1. In Wareneingang POS, create inouts, and set attributes for all products:
	* P0001: e.g. AdR, MHD, CH
	* P0002: e.g. AdR (same as P0001), CH, MHD (same as P0001)
	* P0003: e.g. AdR (same as P0001), MHD (different from P0001), Lot No.
	
1. Create a PP_Order to produce P0004 (for G000X, if you like, not mandatory):
	* P0004, TU A
	
1. Open Produktion Fertigstellung POS, select your PP_Order

1. Click Zuteilung, select all your products from Wareneingang POS (leave attributes as they are) and issue them 

1. Click Empfang for receiving P0004, check the attributes in HU Editor:
	* => Lot No. is set, as in P0003, since is IsTransferWhenNull set and it was set in only one of the issued products
	* => AdR is set, as in all issued products, since it was set (and the same!) for all issued products 
	* => CH is NOT set, since it was set for only 2 of the issued products
	* => MHD is NOT set, since it was set for all issued products, but differently
	
1. In attributes, uncheck IsTransferWhenNull for Lot No., and check it for Herkunft
	
1. In Wareneingang POS, create inouts, and set attributes for all products:
	* P0001: e.g. Bio, MHD, CH, Lot No. 
	* P0002: e.g. CH, MHD (same as P0001), Lot No. (same as P0001)
	* P0003: e.g. DE, MHD (different from P0001), Lot No. (same from P0001)
	
1. Create a PP_Order to produce P0004 (for G000X, if you like, not mandatory):
	* P0004, TU A
	
1. Open Produktion Fertigstellung POS, select your PP_Order

1. Click Zuteilung, select P0001 and P0002 and issue them

1. Click Empfang for receiving P0004, check the attributes in HU Editor (don't click OK!):
	* => Lot No. is set, as in the 2 products, since it was set (and the same!) for all issued products
	* => CH is set, since IsTransferWhenNull set
	* => MHD is set, as in the 2 products, since it was set (and the same!) for all issued products
	* => Bio is set, as in P0001, since IsTransferWhenNull set
	
1. Click Zuteilung, select P0003 and issue it

1. Click Empfang for receiving P0004, check the attributes in HU Editor:
	* => Lot No. is set, as in all issued products, since it was set (and the same!) for all issued products
	* => CH is NOT set, since it was set for all issued products, but differently
	* => MHD is NOT set anymore, since it was set for all issued products, but differently
	* => Bio is set, as in P0001, since is IsTransferWhenNull set and it was set in only one of the issued products

1. Repeat once more with inouts of the same products in Wareneingang POS and a PP_Order for P0004:
	* the attribute with IsTransferWhenNull has to be issued last!
	* set MHD the same for all products, but add a space before / after it for 2 products
	
1. Check Empfang:
	* => the attribute with IsTransferWhenNull was propagated to P0004!
	* => MHD is propagated, without spaces
	
	
**Note:** Remaining problem is that the attribute is only propagated on the highest HU-Level, so if you receive TUs and CUs on an LU, only the LU will have the attributes set, the TUs and VPIs not. If you receive
VPIs on a TU, then the TU will have the attributes set, but the VPIs not. For the attributes being set on VPIs, you need to choose these in TU, and No Handling Unit as LU. This will be fixed in a future task.
	
