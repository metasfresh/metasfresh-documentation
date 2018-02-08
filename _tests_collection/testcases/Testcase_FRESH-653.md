---
title: IT FRESH-653
required data:
   requests: requests created from material receipts with issues 
layout: default
tags:
  - Jasper / Excel
---
## #369 request report

> Testcase to check the new request report.

1. You need requests created from material receipts with issues (this test was done after testing FRESH-636, pls see IT doku for that)

1. Run report Bericht Reklamationen:
	* set dates for Anfangsdatum & Enddatum, so that the material receipts of your requests are covered
	
1. Check the other filters:
	* Org
	* Vorgangsart: all from request window selectable
	* Geschäftspartner
	* Beanstandungen: the ones from quality note in Wareneingang POS are selectable
	* Performance: the Performance Types from request window are selectable
	* Rücklieferung: all from request window selectable
	* Status: all from request window selectable
	* Produkt
	
1. Set G000X for bpartner, OK:
	* => report name: Reklamationen
	* => all filters are displayed in the header, dates and Geschäftspartner are set as in you set, the rest have: Alle
	* => your requests for receipts I & III are displayed, with date, bpartner, inout, product & product no., Performance, Rücklieferung & Status as (if) you set them
	* => Beanstandung: for receipt I: the quality note you set in Wareneingang, for receipt III: empty
	* => for Ergebnis: for receipt I: the one you set in the field
	
1. Go back to the request for receipt I, and add another Ergebnis in the resp. field
	* => new line created in Aktualisierungen, at the bottom, for the entry in Ergebnis
	* => Ergebnis is empty again
	
1. Run the report again, with the same filters
	* => Ergebnis for receipt I: the latest one is displayed now, not the first one
	
1. Export the report to Excel, check:
	* => everything is displayed as in the jasper report, no cut-offs etc.
	
	