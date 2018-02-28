---
title: IT gh#176 - webui
required data:
   bpartner: G000X (vendor) 
   products: P0001 
   Packing Material: TU1
   CU-TU config for TU1 and P0001
   
layout: default
tags:
  - Material Receipt Workflow, Attributes
---
## #176 Attributes editor problems

> Testcase to make sure the Attributes can be set and modified in material receipt candidate



1. Create a purchase order for G000X
    * Add line for Produyct P0001 on TU1
    * Set some attribute values in the ASI of this line
    * Complete the otder

2. Go to its receipt schedules, select the one for the CU product
    
3. Open the ASI of the schedule
    * => OK: All the attributes that were set in the order are preserved

4.  Change an attribute, click somewhere else, click on the attributes again
    * => OK:  The attribute you changed has the value you set to it
    * => OK: All the other attributes have values as before
    
5. Receive HUs, create a material receipt for this candidate

6. Go to the newly created material receipt, to the product line, open advanced editing, check ASI
   * => OK: The attributes are preserved
   * Note: the receipt is completed so the fields of the line are read-only. Might be that the attributes are not all visible on the button. To make sure they were preserved, reactivate the receipt and check again => OK: The attributes are still preserved
