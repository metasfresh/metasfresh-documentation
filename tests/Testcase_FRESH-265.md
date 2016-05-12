---
title: IT FRESH-265
required data:
   product: P00001
   bpartner: G0007
provided data:
   procurement candidate: 123
---

# Procurement Candidates: Packvorschrift overwrite
> Testcase to check if the newly introduced Packvorschrift (M_HU_PI_Item_Product) overwrite set in Betelldisposition (PMM_PurchaseCandidate)
> is also set in orderlines of the corresponding Bestellung.

1. Have a bpartner with a C_Flatrate_Term for procurement, for a product which has different PIs (M_HU_PI_Item_Product) available
1. Open WebUI for that bpartner, and create a PMM_PurchaseCandidate for that product
	* => Packvorschrift (M_HU_PI_Item_Product) is the one set in the C_Flatrate_Term
1. Open Bestelldisposition (PMM_PurchaseCandidate), search for the PMM_PurchaseCandidate you created
	* => new field Packvorschrift-Produkt Zuordnung abw. (M_HU_PI_Item_Product overwrite)
1. Set a different Packvorschrift in the new field, save
1. In Quantity to Order (TU), set any qty you want, save
1. Press Bestellen in Aktion, OK
	* => Bestellung for your PMM_PurchaseCandidate is created
1. Open the Bestellung that was created, print Jasper
	* => Packvorschrift is the one you set in M_HU_PI_Item_Product overwrite, NOT the one from C_Flatrate_Term / in WebUI
	* => Menge TU in orderline = the one you set in PMM_PurchaseCandidate
	* => Menge in orderline = qty TU you set in PMM_PurchaseCandidate X qty CU in your Packvorschrift, e.g. 2 TUs X G1x6kg: Menge = 12
	* => Packvorschrift displayed in the Jasper is also the one you set in M_HU_PI_Item_Product overwrite
1. Open Wareneingang POS, search for your orderline 
	* => Packvorschrift-Produkt Zuordnung is the one you set in M_HU_PI_Item_Product overwrite
1. Select the orderline, OK
	* => window Quantity to use opens with:  Packvorschrift you set in M_HU_PI_Item_Product overwrite selected, the one from C_Flatrate_Term / in WebUI is also selectable
