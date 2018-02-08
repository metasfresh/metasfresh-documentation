---
title: IT FRESH-523
required data:
   bpartner: bpartner G000X (customer & vendor)
layout: default
---

### #203 Payment writeoff not possible for Incoming Payment
> Testcase to check writeoff payments

**Writeoff payment**

1. Go to the Payment window and create 2 new ones: incoming and outgoing, for the same bpartner G000X
 
2. Set the same amount (e.g. 100) and complete

3. go to Payment Allocation window and filter for bpartner G000X

4. select both payments, select dicount and add same discount amount on both lines (e.g. 2)

5. press on Process button
    * => you get an error message like this one: No Allocation for WriteOff Payments

6. close the error message and while the lines are still selected, press the WriteOff button
    * => open amount changed from 100 to 98 and the discount amount is not set anymore

7. press the process button again
    * => lines are processed

8. open again one of your payments, go to allocations subtab 
    * => notice there are 2 allocations created

9. zoom in on the allocations

10. press on Posted button
    * => you have correct postings for WreiteOff (amount 2) and for payments (amount 98)