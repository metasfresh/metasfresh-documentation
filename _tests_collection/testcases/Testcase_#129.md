---
title: IT gh#129 - webui
required data:
   bpartner: G000X (vendor) G000Y (customer)
   products: P0001 (with no CU-TU config)
   
layout: default
tags:
  - Sales orders, Purchase orders
---
## #129 Order Line Batch Entry not working for Packing Material Products/ Products with no TU 

> Testcase to make sure the the products wiht no TU can be added to orderlines



1. Create a purchase order for G000X

2. Create an orderLine for this order, using add new:
    * Select product P0001
    * HU set as default on Virtual PI
    * => OK: Orderline created with no error
    * Check the created line
    * => OK: You can only select the TU  "none" 
    
3. Create a sales order for G000Y

4. Create an orderLine for this order, using add new :
    * Select product P0001
    * HU set as default on Virtual PI
    * => OK: Orderline created with no error
    * Check the created line
    * => OK: You can only select the TU  "none" 
    
5. Create a purchase order for G000X

6. Create an orderLine for this order, using batch entry:
    * Select product P0001
    * => OK: HU not set
    * Set a quantity
    * => OK: THe line is correctly created
    * Go to the created line
    * => OK: You can only select the TU  "none" 
    
7. Create a sales order for G000Y

8. Create an orderLine for this order, using batch entry:
    * Select product P0001
    * => OK: HU not set
    * Set a quantity
    * => OK: THe line is correctly created
    * Go to the created line
    * => OK: You can only select the TU  "none" 
    
    
