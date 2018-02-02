---
title: IT FRESH-522
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
layout: default
---

### #202 Payment-in-out-allocation buggy when partial allocation
> Testcase to check if partial allocations are working well

**Payment with Payment**

1. Go to Payment window and create 2 new ones: incoming and outgoing, same bpartner G000X, same amount

2. Go to Payment Allocation window and filter for G000X  

3. Select both Payments and press on process
	* => lines were processed and disappeared
	
4. go to Allocations subtab in Payment, zoom on Allocation, press on Posted
	* => allocation and posting created ok

5. Go to Payment window and create 2 new ones: incoming and outgoing, same bpartner G000X, different amount (e.g. 100 and 90)

6. Go to Payment Allocation window and filter for G000X  

7. Select both Payments and press on process
	* => error saying that you cannot process because the difference between amounts is not 0
	
8. set over-under on Y and try again
	* => same error message

9. select discount and set discount 10 on the payment of 100

10. select only the line with 100, press on write-off
	* => open amount is 90 now

11. select both and press on process
	* => lines were processed and disappeared
	
12. go to Allocations subtab in Payment, zoom on Allocation, press on Posted
	* => allocation and posting created ok

**Payment with Invoice**

1. create a sales invoice, and an outgoing payment, different amounts

2. go to payment allocations window and select both. Check over-under on Y

3. press on process
	* => the documents are processed and the line with the smaller amount disappeared
	* => allocation and posting created ok

4. create a purchase invoice, and an incoming payment, different amounts

5. go to payment allocations window and select both. Check over-under on Y

6. press on process
	* => the documents are processed and the line with the smaller amount disappeared
	* => allocation and posting created ok

**Invoice with Invoice**

1. create a sales and a purchase invoice, different amounts

2. go to payment allocations window and select both. Check over-under on Y

3. press on process
	* => the documents are processed and the line with the smaller amount disappeared
	* => allocation and posting created ok
