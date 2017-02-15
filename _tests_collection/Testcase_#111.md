---
title: IT gh#111
required data:
   bpartner: bpartner G000X (vendor), G000Y (customer)
   products: P0001
   HUs: TU A, TU B
   CU-TU: P0001-TU A, P0001-TU B
 
layout: default
tags:
  - WebUI, Sales Orders, Purchase Orders
---
## #111 Order line quick input shall automatically set the default Packing item if available

> Testcase to check if the default Packing item is automatically set in order lines


1. Create a purchase order for G000X

2. Create an orderLine for this order, using batch entry:
    * Select product P0001
    * => OK: The default TU is automatically selected, but you can also select the other TU
    
3. Go to the TU column from the order line, double click on it
    * => OK: You can select the other TU or NO TU
    
4. Create a Sales order for G000Y

5. Create an orderLine for this order, using batch entry:
    * Select product P0001
    * => OK: The default TU is automatically selected, but you can also select the other TU
    
6. Go to the TU column from the order line, double click on it
    * => OK: You can select the other TU or NO TU
    
7. Create a purchase order for G000X

8. Create an orderLine for this order, using add new :
    * Select product P0001
    * HU set as default on Virtual PI
    * You can select any of the 2 HUs if you click on the TU column
    
9. Go to the TU column from the order line, double click on it
    * => OK: You can select the other TU or NO TU

10. Create a Sales order for G000Y

11. Create an orderLine for this order, using add new:
    * Select product P0001
    * HU set as default on Virtual PI
    * You can select any of the 2 HUs if you click on the TU column
    
12. Go to the TU column from the order line, double click on it
    * => OK: You can select the other TU or NO TU
    
    
    
> How to determine which is the default TU
* The M_HU_PI_Item_Product for a CLient different from 0 has priority
* If the M_HU_PI_Item_Product config was created for the order partner, it has priority. Otherwise, it has to be created for no partner
* If the M_HU_PI_Item_Product allows any product, it has priority; otherwise it has to allow the particulat product that was chosen for the orderline
* If there is a M_HU_PI_Item_Product for the particular product, it has priority; otherwise it has to be created for no product
* If the M_HU_PI_Item_Product has the newest validFrom value, it has priority.