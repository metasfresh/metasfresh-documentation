---
title: IT #806
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - Jasper
---
## #806 Customs report minor fixes

> Testcase to check the customs report.


1. Make sure P0001 has UOM: kg, and P0002 has UOM: Stk

1. Create a purchase order for G000X:
	* P0001, TU A: 10
	* P0002, TU B: 10
	
1. Open Wareneingang POS, and create inouts for P0001:
	* open HU Editor with: 1 LU with 1 TU several times, have all LUs with different weights, use the +/- button or set weight manually (keep in mind which was weight gross and weight net!)
	* open HU Editor with: 1 LU with 2 TUs, split off 1 TU with no LU, and change the same ASI on the LU and the free TU, then join them again
	* open HU Editor with: 2 LUs with 1 TU each, merge the 2 LUs so you only have 1 left, with 2 TUs on it
	* open HU Editor with: 1 LU with 1 TU, change the weight; after inout is created, reverse it, using Korrektur
	
1. Create inouts for P0002:
	* open HU Editor with: 1 LU with 1 TU several times, have all LUs with different weights, use the +/- button or set weight manually (keep in mind which was weight gross and weight net!)
	* open HU Editor with: 1 LU with 1 TU, change the weight; after inout is created, reverse it, using Korrektur
	* open HU Editor with: 1 LU with 1 TU, change the tare weight (so the net weight is changed, but not the gross weight!)
	
1. Open Wareneingang window, check the lines and the Handling Unit Assignment tab:
	* => qties of HUs are displayed correctly
	* => product weight shows weight net for P0001, and qty Stk for P0002
	* => ASI shown are the ones set for LU
	* => Handling Unit Assignment shows the LU and TU with HU no., BUT the tab is empty for the reversed inout!
	
1. Gear, run Zolldokument drucken (customes report):
	* => doc name: Hausverzollung, with correct date, G000X info, etc.
	* => no Watermark is displayed in the Jasper
	* => report shows the product name, the palette no. (=> LU no.), and weight gross
	* => only the active inouts are displayed, the LUs from the reversed inouts are not included
	* => the weight is the weight gross from HU Editor (product weight + HU weight, so weight of LU + TU(s))
	* => both products are shown with weight gross, also P0002 with UOM: Stk
	* => no palette no. is displayed twice, so the LU with 2 TUs that have different ASI is also displayed only once
