---
title: IT FRESH-311
required data:
   AD_Org: Org I, Org II, Org *
   HUs: LU A, TU B
---

# IT FRESH-311
### Packvorschriften from different Org shown in Leergut
> Testcase to check if only the Packing Items set for
> the specific Org are shown in the resp. Leergut.


1. Log in as Admin, for Org I

1. Open Packvorschrift and check the Packing Items (Example!):
	* LU A, for Org *
	* TU B, for Org I
	
1. Create TU C, for Org II
	
1. Open Wareneingang POS, select a warehouse and click Leergut
	* => LU A and TU B are displayed, TU C is **not displayed**
	
1. Log out, then log in again for Org II (as Admin with another Role that has access to Wareneingang POS)

1. Open Wareneingang POS, select a warehouse and click Leergut
	* => LU A and TU C are displayed, TU B is **not displayed**

	