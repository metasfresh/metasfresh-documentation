title: IT FRESH-661
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Jasper
---
## #375 Jasper: extend product name on report_detailse

> Testcase to check the recent changes for product names on reports.

1. Make sure P0001 has a very long product name 

1. Make sure attributes, resp. attribute sets are enabled for the product category of P0001 and P0002

1. Create a sales order for G000X, with P0001, no attributes

1. Add P0002, with several attributes

1. Add P0002 again, without attributes (in this order!)

1. Print preview the jasper for the order:
	* => all attributes you set are displayed, if necessary in >1 line
	* => name of P0001 is displayed across the field for attributes, no second line for the product name
	* => P0002 without attributes is also displayed in 1 line, without attributes
	
1. Create the inout and the invoice for the order, check the jaspers:
	* => all attributes you set are displayed, if necessary in >1 line
	* => name of P0001 is displayed across the field for attributes, no second line for the product name
	* => P0002 without attributes is also displayed in 1 line, without attributes	
	
1. Create a purchase order, with P0001 & P0002, but don't set any attributes

1. Create the inout and the invoice for that, check the jaspers in all:
	* => column for attributes is not displayed at all