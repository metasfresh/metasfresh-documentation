---
title: IT FRESH-504
required data:
   bpartner: bpartner G000X (customer)
   dunning: setup for dunning process
   dunning candidates: from older invoices
   invoices: invoices past due date
layout: default
tags:
  - UI
  - Dunning
---
## #173 Window Dunning Candidates - new Field DocumentNo

> Testcase to check if the Document No. of the document
> in question is dunned in the dunning candidate.

1. Open Dunning Candidates
	* => new field Document No. (also in grid mode)
	
1. Select one candidate and take the document no., and search for it in the window for the table in field DB-Tabelle (should be c_invoice, Ausgangsrechnung)
	* => resp. invoice for that dunning candidate
	
1. In Dunning Candidate, click Datensatz-ID
	* => the same invoice opens
	
1. Create new dunning candidates for the invoices past due date, with the process in gear

1. Select a new candidate, and repeat the test
	* => resp. invoice for the dunning candidate opens, has the document no. as displayed

