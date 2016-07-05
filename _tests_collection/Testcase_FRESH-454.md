---
title: IT FRESH-454
required data:
   bpartner: bpartner G000X (customer & vendor)  
layout: default
tags:
  - invoicing
  - inout
---
## Dont create InvoiceCandidates for DocSubType Saldokorrektur

> Testcase to check if no Invoice Candidates are
> created for inouts which are Saldokorrektur.

1. Open Customer Return, create a new one

1. As DocType, set Saldokorrektur

1. Set G000X, and add lines for packing items with +/- qty

1. Save, and complete

1. Check in relations for Invoice Candidates:
	
	* => no Invoice Candidates were created
	
1. Repeat the test in window Return to Vendor, also with DocType Saldokorrektur

	* => no Invoice Candidates were created
	
1. Open Rechnungsdisposition, search for G000X and date of test

	* => no Invoice Candidates for the Saldokorrektur you did before
