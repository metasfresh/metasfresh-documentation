---
title: IT FRESH-369
required data:
   bpartner: bpartners G000X & G000Y (customer & vendor)
   pricelists: customer pricelists CPX and CPY, vendor pricelists VPX and VPY   
layout: default
tags:
  - UI
---
## Change bpartner in order -> pricelist does not update

> Testcase to check if the pricelist of an order is updated correctly if the bpartner is changed.

1. In window bpartner, make sure that:
	* G000X has CPX set as customer pricelist, and VPX as vendor pricelist
	* G000Y has CPY set as customer pricelist, and VPY as vendor pricelist
	
1. Start creating a sales order, select G000X as bpartner:
	* => CPX is set as pricelist
	
1. Save, then start changing the bpartner to G000Y:
	* => pricelist is set back to null
	* => when you set G000Y as bpartner, CPY is set as pricelist
	
1. Start creating a purchase order, select G000Y as bpartner:
	* => VPY is set as pricelist
	
1. Save, then start changing the bpartner to G000X:
	* => pricelist is set back to null
	* => when you set G000X as bpartner, VPX is set as pricelist
