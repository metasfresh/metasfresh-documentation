---
title: IT gh#121
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   HUs: TU A
layout: webui
tags:
  - empties
---
## #121 Empties Returns for Vendors and Customers in Material Receipt Window

> Testcase to check creating empties returns from material receipt

1. create a new puchase order for G000X and add product P0001, complete

2. go to referenced documents and open Material Receipt Window

3. select a line and select the dropdown arrow on the right

4. select empties receive
	* => a new window opens "Empties Receive" (see that ID of window and view are changed in the link)
	* => new draft document was created, with bpartner, address, warehouse, order and document type set
	
5. add a new HU via Batch entry
	* => works fine

6. add a new HU via Add new
	* => panel for adding a new product opens
	* => adding a new HU works fine
	
7. go back to Material Receipt Window and this time select empties return
	* => a new window opens "Empties Return" (see that ID of window and view are changed in the link)
	* => new draft document was created, with bpartner, address, warehouse, order and document type set
	
8. add a new HU via Batch entry
	* => works fine

9. add a new HU via Add new
	* => panel for adding a new product opens
	* => adding a new HU works fine	

10. Go back to Material Receipt Window and don't select any line, press on empties receive or return 
	* => msg: no selection
