---
title: IT gh#785
required data:
   bpartner: bpartner G000X (customer & vendor)
   HUs: TU A, TU B, LU C
   pricelists: vendor pricelist VP   
layout: default
tags:
  - UI
  - Invoicing
---
## #785 Vendor empty returns missing in invoice cand when negativ qty

> Testcase to check if all vendor empty returns create correct invoice candidates.

1. Make sure G000X is not a vendor with invoice type Produzentenabrechnung, and has no flatrate contract for Gebinde 

1. In Wareneingang POS, create empty returns for G000X (vendor):
	* TU A: 10
	* LU C: 5
	
1. Check the inout that was created, and the invoice candidates for it:
	* => doc type: Leergutausgabe, status: completed
	* => 2 inout lines, with HUs and qties as set
	* => 2 invoice candidates, with neg. qty, and resp. prices
	
1. Reactivate the inout, and add an inout line using copy:
	* change the HU to TU B, and set the qty to -3
	* save & complete
	
1. Check the invoice candidates:
	* => additional IC for TU B, with qty: 3, and resp. price
	
1. Create the invoice:
	* => doctype: Gutschrift Lieferant
	* => neg. qties and prices for TU A and LU C
	* => pos. qty and price for TU B
	* => overall Total is correctly calculated
	* => no neg. qties in Jasper, the qties from returns are displayed in Retour!
	
1. In Wareneingang POS, create another empty returns for G000X (vendor):
	* TU B: 15
	* LU C: 2
	
1. Check the inout that was created, and the invoice candidates for it:
	* => doc type: Leergutausgabe, status: completed
	* => 2 inout lines, with HUs and qties as set
	* => 2 invoice candidates, with neg. qty, and resp. prices
	
1. Reactivate the inout, and add an inout line using new:
	* change the HU to TU A, and set the qty to -5
	* set the right posting type
	* save & complete
	
1. Check the invoice candidates:
	* => additional IC for TU A, with qty: 5, and resp. price
	
1. Create the invoice:
	* => doctype: Gutschrift Lieferant
	* => neg. qties and prices for TU B and LU C
	* => pos. qty and price for TU A
	* => overall Total is correctly calculated
	* => no neg. qties in Jasper, the qties from returns are displayed in Retour!
	
1. Repeat testing for G000X as customer (Leergutrücknahme), to make sure it works fine there too
	* => doctype: Gutschrift
	
	
