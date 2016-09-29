---
title: IT FRESH-707
required data:
   bpartner: bpartner G000X (customer or vendor)
   products: P0001
   pricelists: customer pricelist CP or vendor pricelist VP   
layout: default
tags:
  - Jasper
---
## #422 pricelist report do not show virtual HU

> Testcase to check if Virtual PI is no longer shown in the pricelist report.

1. Make sure that P0001 is included in the pricelist you will test with, has several PIs set available and has a standard price set

1. Open Geschäftspartner, search for G000X

1. Gear, print report Preisliste & Preislistenvergleich (make sure you print the latest version)
	* => P0001 has several lines, with each PI available displayed

1. Open Produkt, search for P0001

1. In tab TU-CU Zuordnung, set a new M_HU_PI_Item_Product, using Virtual PI:
	* => set it for a certain qty, e.g.  5 kg or 10 Stk
	
1. Print report Preisliste & Preislistenvergleich again (make sure you print the latest version)
	* => P0001 has an additional line for the new M_HU_PI_Item_Product, but Virtual PI is not displayed
	
1. In Produkt, tab TU-CU Zuordnung, add another one with Virutal PI, but set it to unlimited capacity = Y

1. Print report Preisliste & Preislistenvergleich again (make sure you print the latest version)
	* => P0001 has another additional line for the new M_HU_PI_Item_Product, but Virtual PI is not displayed
	
1. In pricelist, add an attribute price for P0001, using the Virtual PI (either the one with unlimited capacity or qty set)

1. Print report Preisliste & Preislistenvergleich again (make sure you print the latest version)
	* => P0001 has another additional line for the attribute price, but Virtual PI is not displayed