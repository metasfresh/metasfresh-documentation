---
title: IT gh#110
required data:  
   bpartner: bpartner G000X (customer & vendor)
   products: P0001 
layout: webui
tags:
  - webui, quickinput
---
## #110 backend: Search result not identical with Swing

> Testcase to check if searching lookups work without diacritics

1. create a new product which contains diacritics (e.g. Frisée)

2. add it in pricelists

3. create a new sales order for G000X

4. select batch entry and start to write Frise (without diacritics)
	* => the product autocompletes to Frisée

5. add a qty, press ok
	* => line added successfully

6. repeat the same steps for purchase order
	* => works the same
