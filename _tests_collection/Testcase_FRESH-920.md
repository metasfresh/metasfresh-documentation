---
title: IT FRESH-920
required data:
   bpartner: bpartners G000X (vendor), G000Y (customer)
   products: P0001
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - UI
  - Empties
---
## #643 Empties process shall have reference to selected Purchase Order & PO Reference

> Testcase to check if the purchase order and PO reference are set in empties inout, taken from Wareneingang POS orderline.

1. Create a purchase order for G000X, with P0001 on TU A, set a reference

1. In Wareneingang POS, select your order, click Leergut:
	* => type: empty
	* => window for creating empties inout opens without bpartner and address already set

1. In Wareneingang POS, select G000X, click Leergut:
	* => type: empty
	* => window for creating empties inout opens without bpartner and address already set
	
1. In Wareneingang POS, select only the orderline, NOT the order, and click Leergut:
	* => type: Leergutausgabe is set
	* => window for creating empties inout opens with G000X and his address already set

1. Select HUs (e.g. TU A & B), different qties, OK
	* => empties inout is created
	
1. Check the empties inout:
	* => your purchase order is also referenced in the empties inout as well
	* => HUs and their qties are as set before
	
1. In Wareneingang POS, have only the warehouse selected so that there are a number of orderlines from different bpartners

1. Select your the orderline again, NOT the order, and click Leergut:
	* => type: Leergutausgabe is set
	* => window for creating empties inout opens with G000X and his address already set

1. Select HUs (e.g. TU A & B), different qties, OK
	* => empties inout is created
	
1. Check the empties inout:
	* => your purchase order is also referenced in the empties inout as well
	* => HUs and their qties are as set before
	
1. Open Rechnungsdispo, and check the invoice candidates created for your empties inout (or zoom into from empties inout):
	* => ICs for G000X's 1st empties inout have reference of your purchase order 
	* => ICs for G000X's 2nd empties inout also have reference of your purchase order 
	
1. In Wareneingang POS, select G000X, and / or an order and your orderline, and click Leergut:
	* => type: Leergutausgabe is set
	* => window for creating empties inout opens with G000X and his address already set
	
1. Select type: Leergutrücknahme, and set G000Y as partner

1. Select HUs (e.g. TU A & B), different qties, OK
	* => empties inout is created
	
1. Check the empties inout:
	* => your purchase order is not referenced in the empties inout 
	* => HUs and their qties are as set before

	
**Regression:**	
1. Create an empties inout without selecting a bpartner in Wareneingang POS:
	* => no type is set
	* => window for creating empties inout opens with no bpartner or address already set
	* => no reference of a purchase order set in empties inout
	
1. Create an empties inout with selecting a bpartner, but without selecting an orderline in Wareneingang POS:
	* => type: Leergutausgabe is set
	* => window for creating empties inout opens with no bpartner or address already set
	* => no reference of a purchase order set in empties inout

	
**Note:** The original requirements were slightly altered; the pre-setting of bpartner and location in the empties window depend on the orderline selected, not the selection of the 
 bpartner or the order!