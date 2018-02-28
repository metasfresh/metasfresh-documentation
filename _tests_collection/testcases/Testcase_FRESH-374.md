---
title: IT FRESH-374
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002 
   layout: default
---

# IT FRESH-374
### duplicates asi in purchase inout print preview
> Testcase to check if ASI are not duplicated
> in purchase inout print previews.


1. Create a purchase order for G000X:

	* P0001,  with e.g. qty = 50, set different ASI, e.g. Bio, AdR
	* P0001,  with e.g. qty = 40, set different ASI, e.g. Produktion Freiland, Inland, Schweiz
	
1. Complete it and open Wareneingang POS

1. Select each orderline and create several partial inouts for each (at least two!):

	* first inout P0001: set weight, a percentage for quality issue, and quality note, leave ASI as set
	* second inout P0001: set weight, change the set ASI (e.g. different AdR)
	* third inout P0001: set weight, add more ASI (e.g. MHD)
	
	* first inout P0002: set weight, add ASI
	* second inout P0002: set weight, leave ASI as set in first inout
	
1. Click Drucken Produktanlieferung in Wareneingang POS

	* => P0001: each inout is displayed separately due to the different ASIs, but each ASI is displayed only once
	* => P0002: one inout is displayed since ASIs are the same, but they are also not duplicated
	
1. Open Wareneingang for your purchase order, print preview the inouts from there as well

	* => same results: no duplication of ASIs in the jasper
	