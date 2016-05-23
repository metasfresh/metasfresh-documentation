---
title: IT FRESH-318
required data:
   bpartner: bpartner G000X (vendor)
   purchase invoices: invoice A, invoice B
   bank accounts: Acct I (ESR), Acct II (no ESR, Default)
---

# IT FRESH-318
### ESR String Processing not working with multiple partner bank accounts
> Testcase to check if the bank account set in ESR payment string
> is correctly used in payment selection.


1. Make sure that Acct II, which is not ESR, is set as default acct and has the higher Account_ID

1. Open payment allocation, search for G000X

	|	Belegart			|	Belegnummer	|	Offen (Example)	|	Summe Zahlschein	|
	| ----------------------|:-------------:|:-----------------:|:---------------------:|
	|	Eingangsrechnung	|	invoice A	|	500.00			|	0.00				|
	|	Eingangsrechnung	|	invoice B	|	1.000			|	0.00				|			
	
	
1. Have or create an ESR payment string for invoice A, with account number and ESR number of Acct I

1. Press Zahlung einlesen, enter your ESR payment string, tab, OK

	* => Summe Zahlschein at the bottom is updated, 500.00

1. Select invoice A, press referenz-nr. zuweisen

1. Close and open payment allocation again, search for G000X

	|	Belegart			|	Belegnummer	|	Offen (Example)	|	Summe Zahlschein	|
	| ----------------------|:-------------:|:-----------------:|:---------------------:|
	|	Eingangsrechnung	|	invoice A	|	500.00			|	500.00				|
	|	Eingangsrechnung	|	invoice B	|	1.000			|	0.00				|		


1. Select invoice A and invoice B, press Zahlung anweisen

1. Press Erstellen Zahlung anweisen, and select your acct which you want to use for paying the invoices

1. Zahlung anweisen opens with:

	|	Rechnung	|	Partner Bankverbindung	|	Offener Betrag	|	Zahlungsbetrag	|
	| --------------|:-------------------------:|:-----------------:|:-----------------:|
	|	invoice A	|	G000X.Acct I			|	500.00			|	500.00			|
	|	invoice B	|	G000X.Acct II			|	1.000			|	0.00			|	

	
1. Open invoice A, check tab Zahlungsaufforderung

	* => Bankverbindung: G000X.Acct I
	
	
