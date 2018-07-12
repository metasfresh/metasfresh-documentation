---
title: IT FRESH-932
required data:
   bpartner: bpartner G000X (customer)
   products: P0001
   pricelists: customer pricelist CP 
layout: default
tags:
  - WebUI
  - UI
---
## #67 Error when introducing parameters to report

> Testcase to check if no errors occur when introducing parameters to report

1. Open Webui, and select Geschäftsparter in menu

1. Select G000X

1. Click the actions button, select process for Preisliste:
	* => Preisliste window opens, with parameters to set
	
1. Try selecting sth in the parameters:
	* => no error popping up
	* => atm, "There is no choice available" is displayed for all of them
	
1. Try the same with Preislistenvergleich and its parameters:
	* => no error popping up
	* => atm, "There is no choice available" is displayed for all of them
	
1. Create a new sales order for G000X

1. When adding product, click Abo-Vertragsbedingungen
	* => no error popping up
	* => atm, "There is no choice available" is displayed for all of them
