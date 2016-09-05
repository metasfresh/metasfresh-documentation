---
title: IT FRESH-614
required data:
   bpartners: G0001 (Customer), G0002 (Vendor)
   product: P0001, P0002, P0003, P0004, P0005, P0006
   price lists: PL1 for G0001, P0001, P0002 and P0003; PL2 for G0002, P0004, P0005 and P0005
layout: default
tags:
  - Umsatzreport
---
##  Revenue reports BPartner & Week show different amounts when HU Price


**Customer Umsatzreport**
Tips: 
    * Run Umsatzreports once before deciding which products to use, for the same period of time you will use in testing. Make sure you use some products that are not alreasy in the reports. This way the test will not be contaminated with older data.
    * In this test you will need the week number in the year. You can take this info, for instance, from here: http://week-number.net/calendar-with-week-numbers-2016.html, or search for it somewhere else on the Internet.
    
1. Go to Pricelist PL1;

2. Make sure there are standards prices set for:
    * P0001 in kg
    * P0002 in Stuck
    * P0003 in Gebinde (Go to Attribute Price, select a packing instruction, set a standard price, check the standardPrice and the GebindePrice flags)
    
3. Create a Sales Order for the partner G0001, pricelist PL1

4. Create a line for each product: P0001, P0002, P0003, all with QtyTU = 1:
    * => the prices shall be the ones set in PL1

5. Complete the order;

6. Go to the created Shipment Schedules, create a shipment out of them;

7. Go to Umsatzreport Geschaftspartner, run the process for: 
    * A period of time (do not forget it)
    * Verkaufstransaktion flag checked
    * Partner G0001
    *  => The reporst does not have P0001, P0002, P0003 lines yet;

8.  Go to Umsatzreport Geschaftspartner Week, run the process for: 
    * Same period of time as before (using the week number in the year)
    * Sales Transaction flag checked
    * Partner G0001
    *  => The reporst has lines for P0001, P0002, P0003 
    *  => The prices are correct for these lines, as they appear in the sales order
    
9. Go to the created schipment, to its linked invoice candidates

10. Create an invoice out of them

11. Go to Umsatzreport Geschaftspartner, run the process for: 
    * Same period of time as before
    * Verkaufstransaktion flag checked
    * Partner G0001
    *  => The reporst has lines for P0001, P0002, P0003 
    *  => The prices are correct for these lines, as they appear in the sales order

12.  Go to Umsatzreport Geschaftspartner Week, run the process for: 
    * Same period of time as before (using the week number in the year)
    * Sales Transaction flag checked
    * Partner G0001
    *  => The reporst has lines for P0001, P0002, P0003 
    *  => The prices are correct for these lines, as they appear in the sales order



**Vendor Umsatzreport**

1. Go to Pricelist PL2;

2. Make sure there are standards prices set for:
    * P0001 in kg
    * P0002 in Stuck
    * P0003 in Gebinde (Go to Attribute Price, select a packing instruction, set a standard price, check the standardPrice and the GebindePrice flags)
    * Note: for all these prices you must have packing instructions in the attribute prices if you want to be able to select poacking instructions in your purchase order, in the next step.
    
3. Create a Purchase Order for the partner G0002, pricelist PL2

4. Create a line for each product: P0004, P0005, P0006, all with QtyTU = 1:
    * => the prices shall be the ones set in PL2

5. Complete the order;

6. Go to wareneingang POS, create receipts out of the schedules

7. Go to Umsatzreport Geschaftspartner, run the process for: 
    * A period of time (do not forget it)
    * Verkaufstransaktion flag not checked
    * Partner G0002
    *  => The reporst does not have P0004, P0005, P0006 lines yet;

8.  Go to Umsatzreport Geschaftspartner Week, run the process for: 
    * Same period of time as before (using the week number in the year)
    * Sales Transaction flag not checked
    * Partner G0002
    *  => The reporst has lines for P0004, P0005, P0006
    *  => The prices are correct for these lines, as they appear in the purchase order
    
9. Go back to the purchase order, to its linked invoice candidates

10. Create an invoice out of them

11. Go to Umsatzreport Geschaftspartner, run the process for: 
    * Same period of time as before
    * Verkaufstransaktion flag not checked
    * Partner G0002
    *  => The reporst has lines for P0004, P0005, P0006
    *  => The prices are correct for these lines, as they appear in the purchase order

12.  Go to Umsatzreport Geschaftspartner Week, run the process for: 
    * Same period of time as before (using the week number in the year)
    * Sales Transaction flag not checked
    * Partner G0002
    *  => The reporst has lines for  P0004, P0005, P0006
    *  => The prices are correct for these lines, as they appear in the purchase order

