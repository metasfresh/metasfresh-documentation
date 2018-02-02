---
title: IT FRESH-530
required data:
   bpartners: G0001, G0002
   product: P0001, P0002, P0003
   price lists: PL1 for G0001, P0001 and P0002; PL2 for G0002 and P0003
layout: default
tags:
  - Invoice report
---
##  Product appears twice in invoice print preview


**Two reference numbers -> same invoice line**

1. Make sure the partner G0001 has *consolidation for shipment sllowed*  flag on true;

2. Create a sales order for G0001, reference Ref1;

3. Create a line for product P0001, qty 40,  make sute it has a price set;

4. Complete the order;

5. Create another sales order for G0001, reference Ref2;

6. Create a line for product P0002, qty 5, make sure it has a price set;

7. Complete the order;

8. Go to  the Shipment schedule window and create a selection for the orders above;

9. Create a Shipment out of both shipment schedules, without completing it
    * => OK: The shipment schedule created with Ref1;

10. Go to the created shipment, to the line of P0002 and set its qty to 0;

11. Complete the shipment;

12. Go back to the shipment schedule selection, create a shipment again, with Complete
    * => OK: The second shipment only has a line for P0002, with the required qty;
    * => OK: The second shipment has Ref2;

13. Go to the Invoice Candidates window ;

14. Create a filter for the orders above;

15. Create an invoice out of the selection
    * => OK: Invoice created with only one line for P0001 and one line for P0002;
    * => OK: Invoice created without any reference number;

16. Press print preview for this invoice:
    * => OK: There are 2 different lieferscheine sections containing the info about the two products;
    * => OK: The first section if for P0001, qty 40, Reference = Ref1;
    * => OK: The second section is for P0002, Qty = 5, Reference = Ref1, Ref2;


**Same product from different inout lines -> same invoice line**

1. Make sure the partner G0002 has invoice aggregation per PO_Reference;

2. Create a sales order for G0002, reference Ref3;

3. Create a line for product P0003, qty 40,  make sute it has a price set;

4. Complete the order;

5. Go to the created shipment schedule;

6. Create a shipment out of the shipment schedule without completing;

7. Go to the newly created shipment and override the qty to only 20; 
    * In the general case when the product is in a TU, decrease the TU qty so the CU wty will also be decreased. Afterwards, go to the gear and run the process which updates the TU numbers;
    
8. Complete the inout;

9. Go back to the shipment schedule which is now updated to only deliver qty 20;

10. Create a shipment out of the shipment schedule above, complete it;

11. Go to invoice candidates, create a selection for the order

12. Create an invoice out of the selected invoice candidates

13. Go to the created invoice
    * => OK: The invoice has only one row for the product P0003

14. Press Print Preview
    * => OK: There is only one Lieferschein section for the product P0003 with the whole qty of 40
    * => OK: The section contains the reference Ref3

**Same product from different inout lines -> different invoice lines**

1. Create a sales order for G0002, reference Ref4;

2. Create a line for product P0003, qty 20,  make sute it has a price set;

4. Complete the order;

5. Go to the created shipment schedule;

6. Create a shipment out of the shipment schedule with completing;

7. Create another sales order for G0002, reference Ref4;

2. Create a line for product P0003, qty 20,  make sute it has the same price set;

4. Complete the order;

5. Go to the created shipment schedule;

6. Create a shipment out of the shipment schedule with completing;

7. Go to invoice candidates, create a selection for both the orders

8. Create an invoice out of the selected invoice candidates

9. Go to the created invoice
    * => OK: The invoice has two rows for the product P0003

10. Press Print Preview
    * => OK: There are two Lieferschein sections for the product P0003 with the qty of 20 and Ref4. The sections are identical
