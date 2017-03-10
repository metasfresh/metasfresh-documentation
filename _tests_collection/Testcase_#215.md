---
title: IT gh#215
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP  
layout: default
tags:
  - UI
  - attributes
---
## can't complete order when m_attributesetinstance_id is null

> Testcase to check if an order can be completed without problems when taking out the attribute in orderline.

1. Open sales order and create a new one, for G000X

1. Add P0001, on TU A, using batch entry:
	* make sure an attribute like e.g. Bio is set from pricelist, or set it yourself
	
1. After the line is saved, right click on the orderline

1. Remove the product with X

1. Add P0001 back to the orderline:
	* => m_attributesetinstance_id is null now
	
1. Complete the order:	
	* => completion works fine, no error is thrown about Invalid('M_AttributeSetInstance_ID is mandatory.')
	
1. Repeat the test with another sales order for G0002, use P0002 on TU B, but add the product using Add new!
	* => completion works fine, no error is thrown about Invalid('M_AttributeSetInstance_ID is mandatory.')


