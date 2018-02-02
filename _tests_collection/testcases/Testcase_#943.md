---
title: IT gh#943
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B, LU C
   pricelists: vendor pricelist VP   
layout: default
tags:
  - HUs
---
## #943 weighing and receiving LUs changes the amount of TUs and their structure

> Testcase to check if weighing and receiving an LU does not affect the qty of TUs and their structure.


1. Create a purchase order for G000X:
	* P0001, 40 TU A
	* P0002, 30 TU B
	* P0001, 20 TU B
	
1. Open Wareneingang POS, and open HU Editor with P0001, 40 TUs A, on 1 LU C:
	* => LU C includes the aggregated 20 TUs, in 1 HU key
	
1. Change the weight of the LU: increase by e.g. 3kg
	* => weight info in the HU key is updated accordingly
	
1. Select the LU, and create the inout

1. Check in receiptline, Korrektur, Wareneingang and ReceiptSchedule for the qty of TUs you received:
	* => 40 TUs, no TU is added because of the increased weight
	
1. Open the HU Editor with P0002, 30 TUs B, on 1 LU C:
	* => LU C includes the aggregated 30 TUs, in 1 HU key
	
1. Change the weight of the LU: reduce by e.g. 5kg (if the TU B holds 5 kg, otherwise reduce the overall weight by the weight of 1 TU B):
	* => weight info in the HU key is updated accordingly
	
1. Select the LU, and create the inout

1. Check in receiptline, Korrektur, Wareneingang and ReceiptSchedule for the qty of TUs you received:
	* => 30 TUs, not less TUs because of the reduced weight

1. Open the HU Editor with P0001, 20 TUs B, on LU C:
	* => LU C includes the aggregated 20 TUs, in 1 HU key
	
1. Change the weight of the LU: increase by e.g. 5kg
	* => weight info in the HU key is updated accordingly	
	
1. Use split, merge, join for creating new LUs with TUs, joining and merging them:
	* => the increased weight is discributed to the split off new HUs
	* => the weight is substracted / added correctly after splitting, merging and joining
	
1. Select all, create the inout

1. Check in receiptline, Korrektur, Wareneingang and ReceiptSchedule for the qty of TUs you received:
	* => qty of TUs is the aggregated TUs plus the newly created ones
	* => if LUs or TUs were merged, the destroyed ones are not displayed anymore / not included
	* => no additional TU was created because of the increased weight