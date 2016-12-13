---
title: IT FRESH-978
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002, P0003
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - Jasper
  - Performance
---
## #677 make customs report faster

> Testcase to check the performance of the customs report jasper.

1. Create a purchase order for G000X:
	* P0001 on TU A x 10kg, 136 TUs
	* P0002 on TU A x 8kg, 250 TUs
	* P0003 on TU B x 8kg, 340 TUs
	
1. Set ASIs of your choice, and prices if none is taken from pricelist, complete the order

1. Open Wareneingang POS, and create the resp. receipts:
	* => you will have to do several inouts for each orderline, since there is a high number of TUs (qty of TUs per LU is limited!)
	* => for each inout, use the scale or +/- button or set the weight by hand
	* => also use Korrektur a few times to reverse an inout, and recreate one
	
1. When all receipts are created, open Wareneingang for your purchase order:
	* => all inouts are displayed, one document for each inout
	* => the reversed ones have Status: Rückgängig (Reversed)
	
1. For each inout (eps. the reversed ones!), print preview the customs report jasper (Gear: Zolldokument drucken):
	* => jasper report opena in about 1 sec.
	* => all reports, printed from all inouts, shall have the same content: all inouts with resp. products, qties, UOM (kg) and LU no.
	* => the reversed inouts are included with qty / UOM: null