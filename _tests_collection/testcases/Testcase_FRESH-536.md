---
title: IT FRESH-536
required data:
   bpartner: bpartner G000X (customer & vendor)
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - UI
---
## #220 Make field Pricelist empty as default in Produkt Info

> Testcase to check if the pricelist in Produkt Info is initially empty when opening.


1. Open Produkt Info from Menu
	* => pricelist field is empty
	* => all products are displayed
	* => if there are is a very high number of products, a window pops up asking if all products shall be displayed, since there is a high number (with the exact number)
	
1. Create a sales order for G000X, click Produkt Info
	* => customer pricelist CP in the latest version is set in the pricelist field, the products from this list are displayed

1. 	Create a purchase order for G000X, click Produkt Info
	* => vendor pricelist VP in the latest version is set in the pricelist field, the products from this list are displayed
