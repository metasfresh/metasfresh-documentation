---
title: IT gh#813
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP   
layout: default
tags:
  - Jasper
---
## #813 hide packing instruction and qty when null

> Testcase to check if the none are displayed when the packing instruction and qty are null.

1. Create 2 sales order for G000X:
	* 1st: P0001, 2 TU A and P0002, 5 TU B
	* 2nd: P0001, don't select TU (=> Virtual PI in orderline)
	
1. Complete both and check the jaspers:
	* => 1st has headers "Anzahl" and "Packvorschrift" displayed, with 2 TU A and 5 TU B 
	* => 2nd has no "Anzahl" and "Packvorschrift" since no PI was used in the order (just "Menge" is displayed, for the qty of product)