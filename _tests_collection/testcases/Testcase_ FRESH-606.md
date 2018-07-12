---
title: IT FRESH-606
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   bank accounts: several accounts for G000X, at least 3!   
layout: default
tags:
  - Payment
  - UI
---

## #311 Payment Selection Exception when not able to find bpartner account

> Testcase to check if PaySelection works without errors if a bpartner has a bank account without bpbankacctuse.

1. Make sure that one of the bank accounts of G000X has bpbankacctuse empty (also check in db!)

1. Also make sure that the other bank accounts of G000X have:
	* flag Default checked for one (should have bpbankacctuse = Both, Bankeinzug & Überweisung)
	* bpbankacctuse = DirectDeposit, Überweisung for the other

1. Create 3 purchase invoices for G000X, with P0001 (if no price is set in pricelist, set one manually!)

1. Open PaySelection (Zahlung anweisen), create a new one, save

1. Add a line manually, by selecting the first of your invoices:
	* => G000X and its bank account with bpbankacctuse = DirectDeposit, Überweisung is set in the line
	* => no exception is thrown because of the bankaccount without bpbankacctuse
	
1. Save, click Zahlung vorbereiten and create the payment with Gear, Zahlung anweisen
	* => all working fine, no errors
	
1. Set both the bank accounts with bpbankacctuse to bpbankacctuse = Both, Bankeinzug & Überweisung 
	
1. Open Payment Allocation, search for G000X

1. Select your 2nd invoice, and click Zahlung anweisen to create another PaySelection:
	* => G000X and its standard bank account is set in the line
	* => no exception is thrown because of the bankaccount without bpbankacctuse

1. Un-check the default flag so that none of the bank accounts shall be set as Standard
	
1. Create a third PaySelection, save

1. Add a line by using Erstellen aus... button (set filters so that your 3rd invoice will be taken!):
	* => G000X and the bank account with the smallest ID is set in the line
	* => no exception is thrown because of the bankaccount without bpbankacctuse
	
1. Save, click Zahlung vorbereiten and create the payments with Gear, Zahlung anweisen for both PaySelections
	* => all working fine, no errors
	
1. Repeat the same cases with sales invoices and account with bpbankacctuse = DirectDebit, Bankeinzug (instead of Both)
	* => DirectDebit will be set primarily in pay selection 
	
1. Repeat same case for sales invoice, Credit Memo
	* => DirectDeposit (Überweisung) will be set primarily in pay selection