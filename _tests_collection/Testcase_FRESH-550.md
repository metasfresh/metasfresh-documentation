---
title: IT FRESH-550
required data:
   bpartner: bpartner G000X (customer)  
layout: default
tags:
  - Jasper Report
  - Accounting
---
## #240 Consistency check page for Saldobilanz

> Testcase to check the new Consistency check page in Saldobilanz.

1. Run jasper report Saldobilanz, don't set the checkbox for Consistency check, leave it open for comparison
	* => checkbox Consistency check is set to N on default
	* => last page is the end of the normal report, accounts which start with 9 (Abschluss)
	
1. Run the report once more, but with Consistency check checked
	* => last page displays the Consistency check
	* => Consistency check includes the balance of the main acounts (Aktiva, Passiva etc.) with the resp. current Saldo and Saldo Vorjahr
	* => last line in Consistency check is the Total sum of the main accounts (check!)
	
1. Run the report again, with Consistency check and Standardkonten anzeigen checked
	* => Standardkonten are included in the report now as well
	* => last page displays the Consistency check, which now also includes a line for the Standardkonten
	
1. Create an invoice, for G000X, with posting on day of test (on account included in Aktiva), sum e.g. CHF 650,00

1. Make sure the posting of your invoice is done

1. Run the Saldobilanz report again, with Consistency check checked
	* => account used for posting & Aktiva are increased by CHF 650,00
	* => last page displays the Consistency check
	* => Aktiva in Consistency check is increased by CHF 650,00
	* => last line in Consistency check is the Total sum of the main accounts (check!)