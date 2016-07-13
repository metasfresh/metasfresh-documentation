---
title: IT FRESH-519
required data:
   bpartner: bpartner G000X (customer & vendor)
layout: default
tags:
  - Accounting
  - UI
---
## #197 Payment void or reverse correct

> Testcase to check if payments can be voided and
> reversed without errors.

1. Create payments for G000X (incoming and outgoing payments, not yet allocated), or choose existing ones (already allocated)

1. Select a payment, and void it
	* => no NPE
	* => Doc Status becomes Rückgängig
	* => counter document is created, with same amount, negative
	* => description of each document includes the doc no. of the other one
	* => Reconciled is checked now
	
1. Select another payment, reverse correct it
	* => no NPE
	* => Doc Status becomes Rückgängig
	* => counter document is created, with same amount, negative
	* => description of each document includes the doc no. of the other one
	* => Reconciled is checked now
	
1. Search for a payment which is already used in a bank statement, try voiding / reversing it
	* => not possible, because of existing bank statement
	
