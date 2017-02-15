---
title: IT gh#255
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   HUs: TU A
layout: webui
tags:
  - weight
---
## #255 Low prio: freeze device value while pressing the button

> Testcase to check weight button in HU window

1. create a new puchase order for G000X and add product P0001, complete

2. go to receipt schedule and select the line with P0001

3. select the green button "Create Material Receipt"
	* => hu window opens
	
4. there are 2 buttons for weight, which change value constantly, each 1 second

5. hover on weight button 
	* => the value does not change as long as you hover the button
	
6. select the button 
	* => the value of the gross weight is updated with the value you had on your button
	* => the button changes value constantly, each 1 second