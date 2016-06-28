---
title: IT FRESH-306
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
layout: default
---

### Customer alloc with Vendor Payment: Wrong Accounting
> Testcase to check if allocations are posted right 
> and to check discount in payments

**Payments allocations**

1. Go to Payment window and create a customer (incoming) payment for partner G000X, for the amount 100, complete it

2. wait a bit to get posted and check the posting status
	* => you will have 2 lines: account A with 100 on debit and Account B with 100 on credit

3. create a vendor (outgoing) payment for the same parter, for the amount 100, complete it

4. wait a bit to get posted and check the posting status
	* => you will have 2 lines: account D with 100 on credit and Account B with 100 on debit

5. go to Payment allocation window, select bpartner G000X

6. select both payment lines and press on process button

7. go back in Payment window, open one of your payments, go to allocation subtab and zoom in on the allocation field

8. check the posting status
    * => you will have 2 lines: account D with 100 on credit and Account A with 100 on debit
	
**Payments allocations regression test**

1. create a sales and a purchase invoice for bpartner G000X, product P0001, add a price like 100, complete
 
2. Go to Payment window and create a customer (incoming) payment for partner G000X, set the invoice with the sales one you just created, complete it
    * => the amount is set like you have in invoice (e.g.100)

3. wait a bit to get posted and check the posting status
	* => you will have 2 lines: account A with 100 on debit and Account B with 100 on credit

4. go to allocations subtab and zoom in on the allocation field

5. check the posting status
    * => you will have 2 lines: account E with 100 on credit (the one on debit from invoice) and Account B with 100 on debit

6. Go to Payment window and create a vendor (outgoing) payment for partner G000X, set the invoice with the purchase one you just created, complete it
    * => the amount is set like you have in invoice (e.g.100)

7. wait a bit to get posted and check the posting status
	* => you will have 2 lines: account D with 100 on debit and Account B with 100 on credit

8. go to allocations subtab and zoom in on the allocation field

9. check the posting status
    * => you will have 2 lines: account D with 100 on credit and Account F with 100 on debit (the one on credit from invoice) and Account D with 100 on credit

**Payments discount**

1. make sure you have at least 1 invoice and 1 payment. If not, create 1 of each as described above

2. go to payment allocation and filter for bpartner G000X

3. select a payment
    * => notice that the discount amount field from that line is readonly

4. select discount checkbox
    * => discount amount field from payment is still readonly

5. select an invoice 
    * => discount amount field from payment is editable and you can set a value there

6. set a value in discount amount field

7. deselect discount checkbox
    * => discount amount field becomes readonly and is set back on 0 

8. play a bit with payments, discount and invoices. 
    * => Only if a payment, invoice and discount checkbox are selected, then you can set the discount

9. select a payment (eg 100), discount and an invoice (eg 100)

10. set a discount in paymentline (eg 10) and press on process
    * => new allocation is created, with 3 lines: one with 10, one with 90 and one with 100

