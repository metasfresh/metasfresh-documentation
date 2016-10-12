---
title: IT FRESH-717
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B, TU C 
layout: default
---

### #433 C_Order copy with details: Packing Instructions are not copied
> Testcase to check if copy with details sets the correct Packing Instructions

**Copy with details**

1. make a sales order with bpartner G000X

2. Add product P0001 3 times, once with TU A, once with TU B and once with TU C

3. copy with details
	* => new order has 3 lines with the same product and the HUs are the same as in the first order
	
4. complete the order you created at step 1

5. copy with details
	* => new order has 3 lines with the same product and the HUs are the same as in the first order
	
6. repeat the same steps for purchase order
	* => works the same