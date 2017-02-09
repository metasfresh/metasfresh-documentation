---
title: IT gh#194
required data: 
   bpartner: G000X (vendor)
   product: P0001
   HU: TU A
layout: webui
tags:
  - receipt
---
## #194 Open views from process execution result

> Testcase to check if the view from process opens in the same browser tab with the right window and view ID

1. go to purchase order and create a new one for G000X. Add product P0001 and HU TU A

2. complete the order

3. go to referenced documents, select receipt schedule

4. while in grid view, select the line with the product P0001
	* => on the right side, a new green button appears "Actions: receive to TU A"	
	* => also notice that the link of the page has the window id and the view ID of the receipt schedule  
	
5. select the receive button
	* => new window opens instead of receipt schedule
	* => also notice that the link of the page has the window id and the view ID of the handling unit

6. select the line with the LU
	* => on the right side, the green button changes to "Actions: Create material receipt"

7. select the button to create material receipt
	* => the green button changed into "Actions: Reverse"
	* => new notification appeard that the inout was created