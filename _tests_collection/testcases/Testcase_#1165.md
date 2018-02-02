---
title: IT gh#1165
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - material receipt
---
## QtyDelivered not set back correctly after reactivating and voiding a material receipt

> Testcase to check if the QtyDelivered is set back correctly after voiding a material receipt.


1.  Create and complete a purchase order for G000X:
	* P0001, 10 TU A 
	* P0002, 20 TU B
	
1. Open material receipt schedules for your order:
	* => QtyDelivered is 0, for both products and both TUs
	
1. Create material receipts for both products, with full or partial QtyOrdered:
	* => QtyDelivered is the amt you made the receipt for either full or partial QtyOrdered of products and UTs

1. Open the material receipt for P0001

1. Reactivate the receipt, then void it

1. Open the material receipt for P0002

1. Void it directly, without reactivating it first

1. Go back to material receipt schedule:
	* => Qty Delivered is set back to 0, for both products and TUs