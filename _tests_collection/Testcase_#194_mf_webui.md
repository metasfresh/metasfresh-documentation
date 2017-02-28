---
title: IT gh#194
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   HUs: TU A
layout: webui
tags:
  - quality discount
---
## #194 Quality discount not considered when receipving HUs

> Testcase to check if quality discount is considered when receiving HUs

1. create a purchase order with bpartner G000X, add product P0001 and TU A

2. complete it and go to referenced documents and open receipt candidates

3. select the line with the product and select the green button to receive the HUs

4. in attributes, add a quality discount % (e.g. 15%) and a quality notice

5. press on "create material receipt" then done

6. open your material receipt from notifications
	* => there are 2 lines for the same product: one normal and one inDispute
	* => inDispute field is on Y, quality notice and discount are set with the ones you chose at step 4
	* => for both lines the quantities are recalculated (using discount %)
	* => on inDispute line, on attributes there is also the quality notice added
	