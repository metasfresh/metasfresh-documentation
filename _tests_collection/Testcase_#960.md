---
title: IT gh#282 - metasfresh
required data:
   bpartner: G000Y (customer)
   products: P0001, P0002 (with no CU-TU config)
   HUs: TU A
   CU-TU: P0001-TU A
 
layout: default
tags:
  - HUs
---
## #960 Delete ambiguous "No Handling Unit" record 

> Testcase to make sure the No Handling Unit" record doesn't appear any more in order lines


1. Create a purchase order for G000X

2. Create an orderLine for this order, using batch entry:
    * Select product P0001
    * => OK: The default TU is automatically selected
    
3. Go to the TU column from the order line, double click on it
    * => OK: You can select the already set TU or "none"
    * => OK: "No Handling Unit" is not an option
    
4. Create a Sales order for G000Y

5. Create an orderLine for this order, using batch entry:
    * Select product P0001
    * => OK: The default TU is automatically selected
    
6. Go to the TU column from the order line, double click on it
    * => OK: You can select the already set TU or "none"
    * => OK: "No Handling Unit" is not an option
    
7. Create a purchase order for G000X

8. Create an orderLine for this order, using add new :
    * Select product P0001
    * HU set as default on Virtual PI
    * You can select the TU on "none" 
    * => OK: "No Handling Unit" is not an option
    
9. Go to the TU column from the order line, double click on it
    * => OK: You can select the TU or "none"
    * => OK: "No Handling Unit" is not an option

10. Create a Sales order for G000Y

11. Create an orderLine for this order, using add new:
    * Select product P0001
    * HU set as default on Virtual PI
    * You can select the TU on "none" 
    * => OK: "No Handling Unit" is not an option
    
12. Go to the TU column from the order line, double click on it
    * => OK: You can select the TU or "none"
    * => OK: "No Handling Unit" is not an option
    
13. Create a purchase order for G000X

14. Create an orderLine for this order, using add new:
    * Select product P0002
    * HU set as default on Virtual PI
    * You can only select the TU  "none" 
    * => OK: "No Handling Unit" is not an option
    
15. Create a sales order for G000Y

16. Create an orderLine for this order, using add new :
    * Select product P0002
    * HU set as default on Virtual PI
    * You can only select the TU  "none" 
    * => OK: "No Handling Unit" is not an option
    
17. Create a purchase order for G000X

18. Create an orderLine for this order, using batch entry:
    * Select product P0002
    * => OK: HU not set
    * Go to the created line
    * => OK: You can only select the TU  "none" 
    * => OK: "No Handling Unit" is not an option
    
19. Create a sales order for G000Y

20. Create an orderLine for this order, using batch entry:
    * Select product P0002
    * => OK: HU not set
    * Go to the created line
    * => OK: You can only select the TU  "none" 
    * => OK: "No Handling Unit" is not an option
    
    
