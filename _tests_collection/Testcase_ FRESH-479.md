---
title: IT FRESH-479
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
layout: default
---

### C_AllocationHdr.C_AllocationHdr_ID: Loader too many records
> Testcase to check if Allocation tab from Invoice opens quickly and with no errors

**Allocation tab**

1. Create or open an existing Sales Invoice

2. if you created one, add a product, price and complete it

3. go to Allocation subtab and open it 
	* => opens fast
	* => there is no data
	* => no errors in console

4. Create or open an existing Purchase Invoice

5. if you created one, add a product, price and complete it

6. go to Allocation subtab and open it 
	* => opens fast
	* => there is no data
	* => no errors in console
	
7. go to payment windows and create a new one: incoming

8. add your sales invoice and complete it

9. open your sales invoice again, open Allocation subtab 
	* => opens fast
	* => there is the allocation line you just created 
	* => no errors in console

10. go to payment windows and create another one: outgoing

11. add your purchase invoice and complete it

12. open your purchase invoice again, open Allocation subtab 
	* => opens fast
	* => there is the allocation line you just created 
	* => no errors in console	
