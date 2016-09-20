---
title: IT FRESH-688
required data:
   bpartners: G0001 (Customer), G0002 (Vendor)
   product: P0001
   packing instructions: PI1 for G0001 and P0001
   BPartner products : BPP1 for G0001 and P0001
layout: default
tags:
  - Umsatzreport
---
## Duplicate lines in inout

Note: Make sure to not have packing instructions for the partner G0001 that are available for all the products or for the product P0001 that are available for all the partners.

For each of the following reports follow these steps:

a. Run the report once when the PI1 (and BPP1 when needed) is Active and once with PI1/BPP1 deactivated

b. Compare the results

**Shipped inouts**

1. Create an inout with speditionsauftrag for G0001 with a line fora P0001

2. Go to the process RustListe from the menu

3. Step a. 

4. Step b. :
    * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines
    
**Ordercheckup**

1. Have a C_Order_MFGWarehouse_Report for G0001 with product P0001 (they create on Sales Order Complete)

2. Step a. with also BPP1 deactivation: Print preview

3. Step b. :
     * => OK: When the PI1 was active, its name was displayed in the report
     * => OK: WHen BPP1 was active, a string of digits is displayed instead of the product value
    * => OK: When the PI1 was activated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: When BPP1 was deactivated, the product value is displayed 
    * => OK: No duplicate lines
    * => OK
    
**Partner specific Ordercheckup**

1. Go to partner G0001, set a print format for Bestellkontrolle with is customer specific

2. Have a C_Order_MFGWarehouse_Report for G0001 with product P0001 (they create on Sales Order Complete)

3. Step a. Print preview

4. Step b. :
     * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines

**Sales inout**

Check the following reposts: 
* Normal Lieferchein (nothing set in the G0001's print format)
* ALl customer specific reports (set hem one by one in print format of G0001)
* The customer specific reports that are ran from the gear of the Lieferung window

For all of the above: 

1. Step a. Print preview

2. Step b. :
     * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines
 
**Purchase inout**

1. Have a material receipot for G0002, with a line for P0001
 
2. Step a. Print preview

3. Step b. :
     * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines

**Sales Order**

1. Have a sales order for G0001, with a line for P0001

2. Step a. Print preview

3. Step b. :
     * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines

**Purchase Order**

1. Have a purchase order for G0002, with a line for P0001

2. Step a. Print preview

3. Step b. :
     * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines


**Label SSCC**

1. Go to wareningang pos, open the purchase order above

2. Step a.: Enter the TU, print label SSCC

3. Step b.: THe labes are identical for both active and inactive PI1
    => OK: Nothing is duplicated


**Label Receipt**

1. Go to wareningang pos, open the purchase order above

2. Step a.: Enter the TU, print label Wareneingangsetiket

3. Step b.:     
    * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines
    
**Pricelist**

2. Step a.: Go to partner G0001, run Pricelist report from gear

3. Step b.:     
    * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines

 **Sales Invoice**
 
 1. Create a sales invoice for G0001 with a line for P0001
 
 2. Step a.: Print preview from invoice

3. Step b.:     
    * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines
 



 **Purchase Invoice**
 
 1. Create a purchase invoice for G0002 with a line for P0001
 
 2. Step a.: Print preview from invoice

3. Step b.:     
    * => OK: When the PI1 was active, its name was displayed in the report
    * => OK: When the PI1 was deactivated, its name did not appear in the reporrt but all the other info from the linked line were displayed correctly
    * => OK: No duplicate lines