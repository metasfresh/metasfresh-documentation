---
title: IT FRESH-677
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002, P0003
   HUs: TU A, TU B, TU C, TU D
   pricelists: vendor pricelist VP   
layout: default
tags:
  - ReceiptSchedule
  - Receipt
---
## #388 make M_ReceiptSchedule.IsPackagingMaterial a physical column

> Testcase to check IsPackagingMaterial in ReceiptSchedule (Wareneingangsdisposition).

1. Open Wareneingang POS

1. Create a purchase order for G000X:
	* order all 3 products, sev. times!
	* use all 4 TU types, with different products 
	
1. Check your ReceiptSchedules for the order:
	* => ReceiptSchedules for the TUs have IsPackagingMaterial checked
	
1. Check Wareneingang POS directly after:
	* => orderlines from your purchase order are all displayed in the warehouse you selected in the order (if you have A LOT of orderlines, maybe some are still loading, but most of them should already be displayed)
	* => TU types & qties are as ordered
	
1. Check your ReceiptSchedules in db:
	* => IsPackagingMaterial is displayed as a column (=> virtual column, prob. at the end)
	* => IsPackagingMaterial is set Y for the TUs, N for the products
	
1. Create inouts for your orderlines, check the ReceiptSchedules:
	* => receipts are created correctly, correct qties etc.
	* => ReceiptSchedules are updated correctly: QtyMoved is increased, QtyToMove is decreased etc.
	
1. Create inouts for older orderlines, that are not yet closed in Wareneingang POS:
	* => works fine as well