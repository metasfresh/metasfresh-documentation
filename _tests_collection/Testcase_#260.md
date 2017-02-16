---
title: IT gh#260
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   HUs: TU A
layout: webui
tags:
  - hu
  - receipt
  - ui
---
## #260 Quick actions were not refreshed after i press browser's back button

> Testcase to check if quick actions are refreshed

1. create a new puchase order for G000X and add product P0001, complete

2. go to referenced documents and open Material Receipt Window

3. select the line with the product and select button "Receive to TU A"

4. select the first line of the TU

5. select "Create Material Receipt" button
	* => button changes to "Reverse" (green and editable)
	* => now on the dropdown you have reverse (editable) and create material receipt (readonly)

6. select reverse 
	* => button changes to "Create Material Receipt" (gray and readonly)
	* => now on the dropdown you have reverse (readonly) and create material receipt (readonly)