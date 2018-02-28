---
title: IT gh#783
required data:
layout: default
tags:
  - DocAction
---
## #783 DocAction on Sales Order not available although permission existing

> Testcase to check if "Close" DocAction is available if permission exists.

**With Permission**

1. go to Role window, subtab document action access

2. filter only for "Close" reference list
	* => notice that it has permissions in multiple documents
	
3. verify if you can close random documents from the list, like order, inout or invoice
	* => you can choose to close the document
	* => if ou select close, document closes ok
	
**Without Permission**

1. go to Role window, subtab document action access	

2. filter only for "Close" reference list and set it inactive for a document from there (e.g. purchase order)

3. logout - login

4. go to purchase order (or the document you chose at step 2) and try to close it
	* => reference is not available 
	
5. go to another document that is still active (e.g. sales order) and try to close it
		* => you can close it 

6. go back to Role window and set the reference from step 2 back to isActive