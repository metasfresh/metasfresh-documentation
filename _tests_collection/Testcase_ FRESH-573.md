---
title: IT FRESH-573
required data:
   organization: org1, org2
   bpartner: bpartner G000X (org1, customer & vendor), bpartner G000Y (org2, customer & vendor)
   products: P0001 (org1), P0002 (org2)
   HUs: TU A (org1), TU B (org2)
layout: default
---

### #270 Purchase Order from Sales Order Process wrong Aggregation
> Testcase to check if counter documents creation sets the correct Packing Instructions

**Purchase order to sales order**

1. Setup
	* login with org1, role admin
	* go to document type window and set iscounterdocument flag in the Bestellung-DocType, set the IsDefaultCoutnerDoc flag in Standardauftrag
	* open org1 bpartner G000X and on vendor subtab, select a pricing system from org2
	* open org2 bpartner G000Y and on customer subtab, select a pricing system from org1
	* make sure P0001 is in the sales pricing system and P0002 is in the purchase one
	* make sure that P0002 is a mapped product of P0001
	* if you want to map a product (eg P0002), you have to go in product window, select P0002 and select the process from gear. Select org1 and P0001 and OK
	
2. Login with org2 and other rolle than admin

3. create a purchase order, bpartner G000X (org1), add product P0002, and TU B (make sure TU A (mapped product of TU B) is not a package instruction for P0001)   

4. complete order and login with org1, role admin

5. go to sales order, filter the ones which were done today
	* => new sales order created, in progress, for G000Y (org2), organisation org1, product P0001 (org1)
	* => in orderline, the packing instruction is Virtual PI and you can set it to other existing one 

6. Login back with org2 and other rolle than admin

7. create another purchase order, bpartner G000X (org1), add product P0002, and TU B (make sure there exists TU A, which is a mapped product of TU B and package instruction for P0001)   

8. complete order and login with org1, role admin

9. go to sales order, filter the ones which were done today
	* => new sales order created, in progress, for G000Y (org2), organisation org1, product P0001 (org1)
	* => in orderline, the packing instruction is TU B 
	
**Sales order to purchase order**

1. Setup
	* login with org1, role admin
	* go to document type window and set IsDefaultCoutnerDoc flag in the Bestellung-DocType, set the iscounterdocument flag in Standardauftrag
	* open org1 bpartner G000X and on customer subtab, select a pricing system from org2
	* open org2 bpartner G000Y and on vendor subtab, select a pricing system from org1
	* make sure P0001 is in the purchase pricing system and P0002 is in the sales one
	* make sure that P0002 is a mapped product of P0001
	* if you want to map a product (eg P0002), you have to go in product window, select P0002 and select the process from gear. Select org1 and P0001 and OK
	* you might also need to go in organisation window, and on org1 to set a warehouse 
	
2. Login with org2 and other rolle than admin

3. create a sales order, bpartner G000X (org1), add product P0002, and TU B (make sure TU A (mapping product of TU B) is not a package instruction for P0001)   

4. complete order and login with org1, role admin

5. go to purchase order, filter the ones which were done today
	* => new purchase order created, in progress, for G000Y (org2), organisation org1, product P0001 (org1)
	* => in orderline, the packing instruction is Virtual PI and you can set it to other existing one 

6. Login back with org2 and other rolle than admin

7. create another sales order, bpartner G000X (org1), add product P0002, and TU B (make sure there exists TU A, which is a mapped product of TU A and package instruction for P0001)   

8. complete order and login with org1, role admin

9. go to purchase order, filter the ones which were done today
	* => new purchase order created, in progress, for G000Y (org2), organisation org1, product P0001 (org1)
	* => in orderline, the packing instruction is TU B 
