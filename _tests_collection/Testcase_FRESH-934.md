---
title: IT FRESH-934
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - Material Receipt
  - HUs
  - Attributes
---
## #653 Calculated DailyLotNo in Material Receipt Candidates

> Testcase to check the calculated DailyLotNo in Material Receipt Candidates.

1. Create a purchase order for G000X:
	* set a date in Tageslot, underneath Bestelldatum (you can also set the Tageslot after adding the products, or add / change it after reactivating the order!)
	* P0001, 2 TU A
	* P0002, 3 TU B
	
1. Complete the order, and check the receipt schedules:
	* => date of Tageslot is NOT set as attribute in orderline
	* => in receipt schedule, the Tageslot is set in attributes, as date and number date (=> no. of week, no. of day, e.g. 515 for 23.12.)
	
1. Open Wareneingang POS, select your orderline, and check the HUs:
	* => Tageslot is set in attributes in orderline, as date and number date
    * => on the HUs (LU, TU & VPI), the Tageslot Datum is set as selected in purchase order
	* => on the HUs (LU, TU & VPI), the Lot Number is set as number date as selectted in purchase order (e.g. 515)

1. For P0001, create an inout, leaving the dates as set before

1. For P0002, change the Tageslot in HU Editor, and create a partial inout:
	* => the Lot Number changes accordingly
	
1. For the remaining qty of P0002, create an inout with the dates as set in purchase order

1. Check the material receipts:
	* => P0001: 1 receipt, with Tageslot and Lot Number as selected in purchase order in ASI
	* => P0002: 1 receipt, with Tageslot and Lot Number as changed in HU Editor in ASI
	* => P0002: 1 receipt, with Tageslot and Lot Number as selected in purchase order in ASI
	
	
	
**Note:** You can set different dates for Tageslot (and Lot Number) for LU and TU, and you will receive 2 receipt lines in your material receipt; but in material receipt, only the
Tageslot (and Lot Number) for LU will be displayed! This is an old problem and will be solved in the future with the new HU compression!
