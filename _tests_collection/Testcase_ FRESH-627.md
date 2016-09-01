---
title: IT FRESH-627
required data:
   bpartner: bpartner G000X (vendor, customer)
   products: P0001
layout: default
---

### #347 change default docaction after complete
> Testcase to check default docactions in documents

**Sales Order**

1. create and complete order
    * button turns into reactivate
    
2. select button
    * you can Void and REactivate 
    
3. if you select reactivate the order reactivates, if you select Loschen the button sais None and becomes inactive

**Purchase Order**

1. create and complete order
    * button turns into reactivate
    
2. select button
    * you can Void and REactivate 
    
3. if you select reactivate the order reactivates, if you select Loschen the button sais None and becomes inactive

**Sales Inout**

1. create and complete inout
    * button turns into reactivate
    
2. select button
    * you can Void, REactivate and Reverse

3. if you select reactivate the order reactivates, if you select Loschen the button sais None and becomes inactive

**Purchase Inout**

1. create and complete inout
    * button turns into reactivate
    
2. select button
    * you can Void, REactivate and Reverse

3. if you select reactivate the order reactivates, if you select Loschen the button sais None and becomes inactive

**Sales Invoice**

1. create and complete invoice
    * button turns into reverse

2. select button
    * you can Void and Reverse

3. if you select reverse the button sais None and becomes inactive

**Purchase Invoice**

1. create and complete invoice
    * button turns into reverse

2. select button
    * you can Void and Reverse

3. if you select Loschen the button sais None and becomes inactive

**Payment - Allocation**

1. go to payment and create a new one, add invoice, complete
    * button turns into reverse

2. select the button 
    * you can reverse and void

3. zoom in to allocation
    * button is reverse
    
4. select the button
    * you can void and reverse

**Movement**

1. go to wareneingang pos and move a product from 1 warehouse to another

2. go to movements window
    * button is reverse

3. select the button
    * you can reverse and void