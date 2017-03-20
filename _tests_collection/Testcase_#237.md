---
title: IT gh#237
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002, P0003
   HUs: TU A, TU B, TU C
   pricelists: vendor pricelist VP   
layout: default
tags:
  - HUs
  - UI
---
## Transform CU on existing TU not working 

> Testcase to check if transforming of a CU on an existing TU is working correctly.


1. Create a purchase order for G000X:
	* P0001 on 10 TU A
	* P0002 on 10 TU B
	* P0003 on 10 TU C
	* make sure you have different UOMs, kg & Stk!
	
1. Open Wareneingangsdispo for your order:
	* => all products and TUs are displayed as material receipt candidates, with correct qties
	
1. Select P0001 and P0002, click CUs annehmen:
	* => HU Editor opens with the 2 products, full qty ordered
	
1. Select P0001, select Transform in Actions:
	* => window Transform opens
	
1. Select
	* CU in neue TUs packen: => more options become available
	* select TU A as PI
	* select qty 5 (or other, just so that it's not the full qty of the TU A)
	* leave Eigene TU checkbox open

1. Click Start:
	* => qty you selected of P0001 is put on a TU A
	
1. Select P0002, select Transform in Actions:
	* => window Transform opens
	
1. Select
	* CU in bestehende TU packen: => more options become available
	* select the TU displayed in TU: it's the TU A you used before (with value)
	* select qty 3
	
1. Click Start:
	* => qty you selected of P0002 is put on the existing TU A
	* => TU A shows both P0001 and P0002 with resp. qties underneath it
	
1. Select the TU A, and create the receipt, check the inout afterwards:
	* => qty delivered is increased accordingly for P0001, P0002 and TU A in material receipt schedule
	* => inout shows correct qties for P0001, P0002 and TU A
	
1. Repeat the test, but put all 3 products on a TU B:
	* => qty delivered is increased accordingly for P0001, P0002, P0003 and TU B in material receipt schedule
	* => inout shows correct qties for P0001, P0002, P0003 and TU B
	* => different UOMs are kept, qties are displayed as kg / Stk resp., no change / error bc of transforming the CUs on the same TU
	
1. Repeat the test, but with 2 different TUs where you put the products on, and mark one of them as Eigene TU:
	* => qty delivered is increased accordingly for the products and the TU which was NOT marked as Eigene in material receipt schedule, the other TU's qty is not changed
	* => inout shows correct qties for the products and the TU which was NOT marked as Eigene, the other TU is not included
	
	
**Note:**
1. If you transform more qty of CUs on a TU for the first time (=> on a nes TU), you will get a full TU and the rest of qty on another one, e.g. 13 CUs will be put on 1 TU A x 10kg and 1 TU A x 3 kg, if the max qty of TU A is 10kg.
1. However, you can put more qty of CUs on a full TU that is already existing, e.g. you can put more CU on the TU A x 10kg in a second transformation!
1. If you have received all qty ou ordered, then the CUs of this orderline are not available for transformation together with other products, only by itself: e.g. when you have 3 orderlines, and one has the full QtyOrdered already delivered,
when you mark all 3 and click transform, the product with the full qty delivered does not appear in the HU Editor! However, you can create more receipts for it by itself.
=> This is how it works atm, might be changed in the future.
