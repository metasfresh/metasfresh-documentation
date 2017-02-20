---
title: IT gh#150 - webui
required data:
   bpartner: G000X (customer)
   products: P0001
   HUs: TU A
   CU-TU: P0001-TU A (x10)
 
layout: default
tags:
  - Material Receipt Workflow
---
## #150 Material Receipt Candidates not updated after receive HU 


> Testcase to make sure the Material Receipt Candidates are updated after receive HU 


1. Create a purchase order for G000X
    * Create an orderLine for this order, product P0001, TU A, QtyTU = 2, QtyCU = 20
    * Complete order

    
3. Go to the created receipt schedules, select the product one

4. Receive HUs: 1 LU, 10 TU, 10 CU

5. Perform "Create Material Receipt"

6. Go back to the material receipt candidate
    * => OK: Received TU = 10
    * =>OK: Received CU = 100
    
4. Receive hus again:
    * 1 LU, 10 TU, 10 CU
    * Create material receipt
    * Reverse

6. Go back to the material receipt candidate
    * => OK: Received TU = 10
    * =>OK: Received CU = 100

7. Receive hus again:
    * 3 LU, 10 TU, 10 CU
    * Create material receipt for all 3
    * Reverse one of them
    
8. Go back to the material receipt candidate
    * => OK: Received TU = 30
    * =>OK: Received CU = 300
    
9. Go back to the purchase order, linked documents, open linked material receipts

10. Select one material receipt, reverse it

11. Go back to the material receipt candidate
    * => OK: Received TU = 20
    * =>OK: Received CU = 200
    
12. Go back to the purchase order, linked documents, open linked material receipts

13. Select one material receipt, void it

14. Go back to the material receipt candidate
    * => OK: Received TU = 10
    * =>OK: Received CU = 100
    

15. Go back to the purchase order, linked documents, open linked material receipts

16. Select the left material receipt, close it

17. Go back to the material receipt candidate
    * => OK: Received TU = 10
    * =>OK: Received CU = 100 (the same)
    
