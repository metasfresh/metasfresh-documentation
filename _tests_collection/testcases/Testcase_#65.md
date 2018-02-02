---
title: IT gh#65 
required data:  
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
layout: webui
tags:
  - webui, quickinput
---
## #65 Fast line entry widget in subtabs

> Testcase to check fast line entry

1. create a new sales order for G000X

2. select batch entry and start to write the name of a product from your pricelist (P0001)
	* => the product autocompletes from the first letter you write
	* => if multiple products contain your letter you can choose from the list

3. select your product
	* => default handling unit is set in product's name

4. add a quantity, press enter
	* => line added successfully
	* => in the line the amount is calculated fine, tax, price and price uom are taken from pricelist

5. repeat the same steps for purchase order
	* => works the same
