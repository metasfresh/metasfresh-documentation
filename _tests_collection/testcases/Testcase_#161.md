---
title: IT gh#161
required data:
     pricelists: customer pricelist CP orvendor pricelist VP   
layout: default
tags:
  - pricing
  - UI
---
## #161 Button Action in Subtab for Price List Version creation

> Testcase to check the Price List Version creation in WebUI

1. Have a pricelist, if possible with an existing Price List Version (PLV)

1. Also have a Rabatt-Schema, which will copy the existing PLV

1. In window pricelist, click Add new, to create a new PLV

1. Set a name (and description), a date from which the PLV will be valid

1. Select the already existing PLV, and the Rabatt-Schema

1. Click button Action (Erstellen):
	* => new PLV is created, with the name, date etc. you set, displayed in the list of PLVs
	
1. Check window Produkt Preise:
	* => all prices from the original PLV are also displayed for the newly created PLV
	
1. Create a new product price:
	* => the newly created PLV is selectable for the price
	
