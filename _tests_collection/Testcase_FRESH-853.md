---
title: IT FRESH-853
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B
layout: default
tags:
  - shipment
  - Jasper
---
## #568 FRESH-??? Change on Report "Lieferschein" for one specific Customer

> Testcase to check the new report for specific customer.

1. Create an inout for G000X, using P0001 and P0002 (with attributes) on TU A and TU B

1. Open bpartner window, tab print format

1. Set new format "Customer Specific Inout", save

1. Print preview the shipment jasper for your inout:
	* => text at the bottom has "und Suisse Garantie" at the end
	* => products, attribues, TUs etc. are displayed correctly
	
1. Go back to bpartner window, set language for G000X to french

1. Print preview the shipment jasper again:
	* => text at the bottom has "et Suisse Garantie" at the end
	* => products, attribues, TUs etc. are displayed correctly
	
1. In bpartner window, tab print format, set the normal Lieferschein format

1. Print preview the shipment jaspers again, de & fr:
	* => jaspers look the same, except for the Suisse Garantie at the end of the text at the bottom
