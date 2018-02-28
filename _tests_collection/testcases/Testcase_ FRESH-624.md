---
title: IT FRESH-624
required data:
   bpartner: G0001 for org1, G0002 for org2, G0003 for org0
   products: P0001 for org1, P0002 for org2
   organisation: org1, org2, default system org0
layout: default
---

### #340 Validation Rule in C_BPartner_Product for C_BPartner_ID wrong
> Testcase to check bpartner field in Product Bpartner

**Product Bpartner**

1. Open Product window

1. select a product for org1

1. go to Business Partner subtab and create a new one

1. add bpartner G0001
	* the bpartner is found (in autocomplete) and added

1. remove this bpartner and add bpartner G0002
	* the bpartner is not found (in autocomplete) and can't add it
	
1. try to add bpartner G0003
	* the bpartner is found (in autocomplete) and added

1. select a product for org2

1. go to Business Partner subtab and create a new one

1. add bpartner G0001
	* the bpartner is not found (in autocomplete) and can't add it

1. try to add bpartner G0002
    * the bpartner is found (in autocomplete) and added
	
1. remove this bpartner and add bpartner G0003
	* the bpartner is found (in autocomplete) and added
