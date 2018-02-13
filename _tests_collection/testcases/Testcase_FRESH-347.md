---
title: IT FRESH-347
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   flatrate term: flatrate for procurement 
layout: default
---

# IT FRESH-347
### AD_relationType between PMM_PurchaseCandidate and C_Order
> Testcase to check if there are correct relations
> between PMM_PurchaseCandidates and their C_Orders.


1. Create a PMM_PurchaseCandidate for bpartner G000X, P0001, with the WebUI (set a qty so you can order sev. TUs!)
	
1. Open the PMM_PurchaseCandidate, search for bpartner G000X, P0001, and date of test

1. Set a qty for Quantity to order (TU), but not for the full qty of product

1. Create the purchase order

1. In the PMM_PurchaseCandidate, click Zoom Across

	* => the purchase order you created is displayed
	

	* => the PMM_PurchaseCandidate is displayed
	
1. Zoom back into the PMM_PurchaseCandidate
	
1. Create 2 more purchase orders, and then click Zoom Across again

	* => the purchase orders you created are displayed (=> Bestellung #3)
	
1. Zoom into the purchase orders

	* => all three purchase orders you created are there, you can jump forth and back with the arrow buttons
	
1. Create another PMM_PurchaseCandidate for bpartner G000X, P0001, with the WebUI

1. Open this PMM_PurchaseCandidate, and change the packing instruction or price

1. Set a qty for Quantity to order (TU) in this PMM_PurchaseCandidate, and also for the older one

1. Create the purchase order, so that it includes both PMM_PurchaseCandidates

1. Zoom into the purchase order, and click Zoom Across there

	 => the two PMM_PurchaseCandidate are displayed (=> Procurement candidates #2)

