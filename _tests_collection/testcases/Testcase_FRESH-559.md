---
title: IT FRESH-559
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   AD_Orgs: Org I  
   pricelists: customer pricelist CP, vendor pricelist VP 
layout: default
tags:
  - Attribute Retrieval
---
## #252 Fix the code for ADR Attribute Retrieval

> Testcase to check if ADR Attribute Retrieval is working for organizations without sysconfig for ADR Attribute set.


1. Log in with Org I

1. Open Sys Config, and make sure de.metas.fresh.ADRAttribute is not set (or it has the value -1)

1. Open G000X in bpartner, and set ADR vendor = Y, also select an ADR value

1. Also set G000X as ADR customer

1. Open pricelist CP, and set an attribute price for P0002:
	* with an PI used for G000X
	* attribute value: set an ADR value
	
1. Create a purchase order, with G000X as vendor

1. With QuickInput, add an orderline for P0001
	* => no error "Assumption failure: attributeParam not null"
	* => orderline is created without ADR attribute
	
1. Create a sales order for G000X as customer

1. With QuickInput, add an orderline for P0002
	* => no error "Assumption failure: attributeParam not null"
	* => orderline is created with ADR attribute
  

  
**Regression:**

1. Make sure ADR attribute can be added manually to the orderline, wihtout causing errors when setting it / when completing the order  
1. Make sure ADR attribute is set in purchase orderline of ADR vendor after quick input if de.metas.fresh.ADRAttribute is set for the organization
1. Make sure ADR attribute is only set in sales orderline if the selected product has an attribute ADR price, not just if the bpartner is set as ADR customer