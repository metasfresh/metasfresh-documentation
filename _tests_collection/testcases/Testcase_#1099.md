---
title: IT gh#1099
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - UI
  - movement
---
## Fix Materialentnahme movement creation 

> Testcase to check if the correct movements are created for Materialentnahme.

1. Create a purchase order for G000X:
	* P0001, on 3 TU A
	* P0002, on 5 TU B
	
1. In Wareneingang POS, create different receipts (note the destination warehouse and the HU values!):
	* P0001: 1 TU A on 1 LU
	* P0001: 2 TU A on 1 LU 
	* P0002: 2 TU B on 1 LU (use split & join to have a free TU as well)
	* P0002: 3 TU B on 2 LU (split off 1 or 2 TUs on a new LU)
	
1. Open Handling Unit POS, and your destination warehouse

1. For each material receipt, select the HUs (select both LUs from 4th receipt!!) and click Materialentnahme:
	* => movement is created (note the doc no.)
	
1. Open Warenbewegung, search for your movements and check the lines in the 2nd tab (qties!):
	* => 1st movement: 3 lines, 1 LU, 1 TU, and x CU (qty of product)
	* => 2nd movement: 3 lines, 1 LU, 2 TU, and x CU (qty of product)
	* => 3rd movement: 3 lines, 1 LU, 2 TU, and x CU (qty of product) (no difference between 2 aggregated TUs and free TUs!)
	* => 4th movement: 3 lines, 2 LU, 3 TU, and x CU (qty of product) (no difference between 2 aggregated TUs and free TUs!)