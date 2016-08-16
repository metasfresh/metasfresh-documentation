---
title: IT FRESH-552
required data:
   invoice candidates: candidates with IsToClear=Y
   bpartner: bpartner G000X (customer)
   flatrate term: for Gebinde
layout: default
tags:
  - invoicing
---
## #243 C_Invoice_Candidate - Processed not always updated if IsToClear

> Testcase to check if invoice candidates with IsToClear=Y are updated correctly.

1. Make sure G000X has a running flatrate term for all Gebinde

1. Create 1 or more invoice candidates which have IsToClear=Y:
	* create a sales order for G000X
	* create an inout (including sev. Gebinde)
	
1. Open Rechnungsdispo, search for your sales order
	* => ICs for Gebinde have IsToClear=Y 
	* => none of the ICs are processed
	* => ICs for Gebinde don't have Processed_Override checked

1. Set Processed_Override for the IC(s) for Gebinde on 'Y' in the database

1. Make sure there is an update done by the async process for updating invoice candidates (e.g. because of invoicing your order, or you changed the prio for the client)

1. Check your invoice candidates for the Gebinde again
	* => they are now set to processed (Komplett abgerechnet eff. & Komplett abgerechnet (System) checked)