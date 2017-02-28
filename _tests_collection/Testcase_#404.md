---
title: IT gh#404
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   HUs: TU A
layout: webui
tags:
  - keyboard shotcuts 
---
## #404 Wrong viewId used when running "Create material receipt" using keyboard shotcuts 

> Testcase to check keyboard shortcut in HU window

1. Go to Purchase Order window and create a new one for bpartner G000X

2. add product P0001 which has TU A and complete

3. go to Referenced Documents and open Material Receipt Candidates

4. select the line with the product P0001
	* => button to receipve HUs is green
	
5. Receive HUs (click TU A green button)
	* => first line (with the LU) is already selected
	* => "Create material receipt" button is green

6. press ctrl+u
	* => button changed into "Reverse"
	* => hu lines are readonly
	* => material receipt was created
	
7. select Done
	* => you are back to "Material Receipt Candidates" window
	
8. Regression test: Receive HUs again (click TU A green button, or you can also use ctrl+u)

9. select the green button "Create material receipt"
	* => button changed into "Reverse"
	* => hu lines are readonly
	* => material receipt was created