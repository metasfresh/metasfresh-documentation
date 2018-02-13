---
title: IT gh#230
required data:
layout: default
tags:
  - UI
---
## QuickInput BPartner not updating BPartner after new done

> Testcase to check if the bpartner field is updated correctly when using QuickInput bpartner

1. Create a nes sales order in webui

1. As bpartner, start writing the name of a bpartner that does not yet exist:
	* => No results found, QuickInput option is displayed (Neuen Geschäftspartner anlegen)

1. Click the QuickInput option:
	* => window for creating new bpartner opens
	
1. Create a new bpartner, set:
	* name of company
	* address
	* pricelist
	* check Kunde
	* a contact person with name, email etc.
	
1. After editing all, click Done:
	* => QuickInput closes
	* => data you set in QuickInput is used for bpartner info: name, address, pricelist etc. are all set correctly, as you entered them in Quick Input
	
1. You can also try Print to see the PDF of the order:
	* => all info from QuickInput is set correctly in the PDF