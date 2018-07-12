---
title: IT FRESH-1152
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002   
layout: default
tags:
  - doc outbound log
---
### #808 DocActionBL.retrieveString method is broken

> Testcase to check the status in Doc Outbound Log

**Doc Outbound Log**

1. Create a new Sales Order for G000X, add product P0001 and complete it

2. Open the window for table C_Doc_Outbound_Log and search for your order
	* => after a short time, the document is created and has Status set to completed (just like your order's status)

3. Go to shipment schedule of your order and create a new inout, complete it

4. Open the window for table C_Doc_Outbound_Log and search for your inout
	* => after a short time, the document is created and has Status set to completed (just like your inout's status)

5. Go to invoice candidates of your order and create a new invoice

6. Open the window for table C_Doc_Outbound_Log and search for your invoice
	* => after a short time, the document is created and has Status set to completed (just like your invoice's status)
	
7. Repeat the same steps (1-6) for purchase side, using receipt pos to create the inout
	* => works the same: C_Doc_Outbound_Log has status completed

8. revert the invoices
	* => new C_Doc_Outbound_Log are created, for each invoice, with status reverted
	* => old C_Doc_Outbound_Log remain the same
	
9. revert the inouts
	* => new C_Doc_Outbound_Log are created, for each invoice, with status reverted
	* => old C_Doc_Outbound_Log remain the same