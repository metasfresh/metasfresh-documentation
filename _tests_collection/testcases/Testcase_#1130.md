---
title: IT gh#1130
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - HU
  - UI
---
## LU Transform "own Palette" Packing material

> Testcase to check if you can transfrom an LU to "own Palette".


1. Create a purchase order for G000X:
	* P0001 on TU A, 10 TUs
	* P0002 on TU B, 5 TUs
	
1. Open material receipt schedule for the order:
	* => 4 lines: 2 for the products, 2 for the TUs
	
1. Select the line for P0001, click on Actions button to create a receipt:
	* => 10 TU A is suggested in Actions button

1. In Actions, select HUs annehmen:
	* change the qty TUs to receive to 1, OK
	
1. Select your product line again, and click the Actions button:
	* => Actions button now suggests 1 TU A
	* => HU Editor opens, with 3 lines: for the LU, the TU, and the product
	
1. Select the line for LU, and in Actions button, click Transformieren:
	* => window for Aktion opens, Aktion selectable
	
1. In Aktion, set Eigene LU:
	* => checkbox for Eigene LU is displayed
	
1. Set the checkbox, and click Start:
	* => window for Aktion closes again
	
1. In HU Editor, click Wareneingang erstellen in Actions:
	* => material receipt is created
	* => Actions button now shows Korrektur
	* => lines for LU, TU & product become read-only, as does the attributes displayed at the side
	
1. Click Done:
	* => qties in receipt schedule line are increased accordingly
	* => qty TUs moved: 1 TU
	* => qty (product) moved: qty of CUs on the TU, e.g. 10
	
1. Check the material receipts of your purchase order (single view):
	* => 2 lines, for TU and product, NO line for LU!
	
1. In material receipt schedule, select the line for P0002, and create a material receipt:
	* select HUs annehmen in Actions button, to also change the qty TU to 1
	* in HU Editor, select the line for TU
	* Click Actions button, select Transformieren
	* in the window Aktion, set Eigene TU as Aktion, and set the checkbox for Eigene TU, and click Start
	* click Wareneingang erstellen in Actions, and Done
	
1. Check the receipt schedule line, and the material receipt:
	* => qty TUs moved: NO change, still 0
	* => qty (product) moved: qty of CUs on the TU, e.g. 5
	* => 2 lines in material receipt, for LU and product, NO line for TU!
	
1. Create more material receipts, play with the Transform and own LU / TU (e.g. use >1 LU, >1 TU):
	* => when the Aktion Eigene LU / TU is set, but the checkbox for Eigene LU / TU is not, then you will receive the LU / TU like normal, with lines in material receipt for each
	* => when you create an inout with >1 LU / >1 TU, and set only one of them as "Eigene", the rest of these HUs will be received normally and qties are updated accordingly: e.g. 3 TUs moved AND receipt line for 3 TUs, if 1 (free TU!) of 4 was marked as "Eigene"
	* => when you split off a TU and put it on a new LU, marked as "Eigene", this new LU will also not be included in the material receipt, but the TU on it will be!
	* => when you make a receipt of a TU, without LU, and the TU is marked as "Eigene", then the material receipt will only include the product
	* => when you move a TU from an LU on a new LU, and mark the new LU as "Eigene", then the material receipt will only include the product and the TU: NOK yet, will be fixed in future task #1148
	* => when you take out qtyCU and put it on a new TU, and mark this TU as "Eigene", then the material receipt will include ALL qtyCU, the original LU and TUs, but not the new TU
	
	
**Note:** 

1. The LUs and TUs marked as "Eigene" are not included in the material receipt (as qty), but are still displayed in Handling Unit tab there (swing). Also, when you check the values of the HUs in Handling Unit window,
there is no difference between "Eigene" and normal HUs: will be solved in the future, when we get requirements for that.

1. The "own" TU was not required for this task, but added anyway, for future purposes, and therefore also tested.
	
