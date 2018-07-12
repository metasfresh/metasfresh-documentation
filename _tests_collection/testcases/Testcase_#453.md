---
title: IT gh#453
required data:
layout: webui
tags:
  - 
---
## #453 Closing modal or window with unsaved changes

> Testcase to check if unsaved documents disappear

1. open a window that does not exist (e.g. .../window/540196/1)
	* => browser is not asking if i want to leave the page
	* => the documents view opened instead  (e.g. .../window/540196)

2. create a new order and don't set mandatory fields (copy the link to use it later)
	
3. move to another window	
	* => browser is asking if i want to leave the page
	* => if i choose yes i am getting on the next window, if no i remain there
	
4. use back button 
	* => you get back to your unsaved document

5. paste the link of your docu in a new browser tab 
	* => exactly that docu is opening 
	
6. create a new sales order, add all mandatory fields

7. use add new to create a new line

8. don't set the product (which is mandatory), press done
	* => browser is asking if i want to leave the page
	* => if i choose yes i am getting back on sales order, if no i remain there
	
9. check your order
	* => the line is red and the order is not saved (because the product in orderline is not set)
	
10. go to other window and come back
	* => your order is still there
	

