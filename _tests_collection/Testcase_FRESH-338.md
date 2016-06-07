---
title: IT FRESH-338
required data: sales and purchase bpartners, 1 product per each
layout: default
---

# IT FRESH-338
### Async not running on sp80adit
> Testcase to make sure async works for each case 

**Processing work packages**

1. Create new sales order, add a product and complete

2. go to async window and check the new ones
    * => they are all process (or processing - after a while are processed)
	* => you get workpackages for invoice candidates, shipment schedule, storage, doc outbound, mrp and fact acct
	* => ShipmentSchedule and invoice candidates are created and updated ok. Archive also created (for order)
	
3. go to lieferdispo and create inout from gear, complete it   

4. go to async window and check the new ones
	* => they are all process (or processing - after a while are processed)
	* => you get workpackages for invoice candidates, shipment schedule, storage, doc outbound, mrp, inout and fact acct
	* => Inout and invoice candidates are created and updated ok. Archive also created (for inout). Document is posted

5. go to invoice candidates and create invoice

6. go to async window and check the new ones
	* => they are all process (or processing - after a while are processed)
	* => you get workpackages for invoice candidates, shipment schedule, doc outbound, bp statistics and fact acct
	* => invoice is created and updated ok. Archive also created (for invoice). Invoice candidates updated. Document is posted
	
7. repeat the same case for purchase order 

8. Create inout from wareneingang pos and invoice from invoice candidates
	* => works the same: all workpackages are created and processed (instead of shipment schedule workpackages there are receipt schedules)
	* => inout, invoice and archives are created ok, document are posted
