---
title: IT FRESH-487
required data:
  required data:
   bpartner: bpartner G000X (customer, org1), G000Y (vendor, org2)
   AD_Orgs: org1, org2
layout: default
tags:
  - UI
---
## Improve our missing-counterdocs-view

> Testcase to check the improvement of the 
> missing counter documents window.


1. Open missing counter docs window
	* => now called Missing Counter Documents
	* => no data, if there are no documents with missing counter ones from day of test
	
1. Search for older data
	* => new fields: Erstellt & Aktualisiert with the resp. dates, Belegstatus with the doc status
	
1. Close the window afterwards
	
1. Create a document where the counter doc is missing (check [IT FRESH-465](Testcase_FRESH-465) for that)

1. Open the missing counter docs window again
	* => only the new document from day of test is shown
	
1. Create an order with org1 as org AND as bpartner, complete
	* => no error
	
1. In missing counter docs window, refresh
	* => order you created last is not displayed