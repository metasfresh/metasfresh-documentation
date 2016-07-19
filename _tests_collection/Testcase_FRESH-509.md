---
title: IT FRESH-509
required data:
   bpartner: bpartner G000X (customer)
   shipment: shipment 01  
layout: default
tags:
  - Jasper
---
## #181 Customer specific Lieferschein without Price

> Testcase to check if the shipment jasper without price works correctly.

1. Open Geschäftspartner, and search for G000X

1. In tab Print Format, set new Lieferschein ohne Preis

1. Open shipment 01, and print the Jasper
	* => shipment jasper includes everything, bpartner, address, products, qties etc., but NO prices, neither for product nor for Gebinde
	
1. Back in Geschäftspartner, Print Format, select another (e.g. Lieferschein)

1. Print the Jasper for your shipment again
	* => shipment jasper now also included the prices