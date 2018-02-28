---
title: IT gh#696
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - jasper
---
## #696 add multi line description per order line

> Testcase to check the multi line description in orderline.

1. Create a sales order for G000X, P0001 on TU A and P0002 on TU B

1. In orderlines, set a description, save:
	* => field Description is available and can be set by the user

1. Check the jasper:
	* => the description you set is displayed underneath the products, with an empty line between the description and the next product
	
1. Open the shipment schedules, and create the shipment:
	* => atm, the description is not propagated, so description in shipment will be empty (will be fixed in a follow-up task #777)
	
1. Set the description in shipment lines, and check the jasper:
	* => the description you set is displayed underneath the products, with an empty line between the description and the next product
	
1. Open the invoice candidates, and create the invoice:
	* => the description from orderlines is propagated to the invoice

1. Check the jasper of the invoice:
	* => the description you set is displayed underneath the products, with an empty line between the description and the next product
	
1. Repeat the test for purchase side: create a purchase order for G000X, P0001 & P0002

1. In the orderlines, set a description and save; for one product, set a very long description that will require a lot of space

1. Check the jasper:
	* => the description you set is displayed underneath the products, with an empty line between the description and the next product
	* => the long diescription is displayed all over the page in the first line, and the rest is displayed in the second line
	
1. Create the purchase inout in Wareneingang POS, and then check the receipt:
	* => atm, the description is not propagated, so description in receipt will be empty (will be fixed in a follow-up task #777)
	
1. Set the description in receipt lines, and check the jasper:
	* => the description you set is displayed underneath the products, with an empty line between the description and the next product
	* => the long description is displayed all over the page in the first line, and the rest is displayed in the second line
	
1. Open the invoice candidates, and create the invoice:
	* => the description from orderlines is propagated to the invoice

1. Check the jasper of the invoice:
	* => the description you set is displayed underneath the products, with an empty line between the description and the next product
	* => the long diescription is displayed all over the page in the first line, and the rest is displayed in the second line
	
1. Add a description in product window, for P0001, save

1. Repeat tests with sales order and purchase order for G000X, with P0001:
	* => description set in product is taken in orderline (atm, the description is not propagated, so description in shipment will be empty (will be fixed in a follow-up task #786)
	* => description is displayed as before in jaspers
	* => description is propagated to the invoice and displayed as before in the invoice jaspers
