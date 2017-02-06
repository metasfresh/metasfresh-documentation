---
title: IT #863 
required data:  
layout: default
tags:
  - process confirmation
---
## #863 Process confirmation window needs to be changed

> Testcase to check if process confirmation window appears when needed 

1. Create a new sales order and complete it

2. Zoom in to SchipmentSchedule and wait for it to update

3. press on gear, and select create shipments 

4. run the process
	* => after the process is done, confirmation window does not appear

5. from sales order zoom into invoice candidates
    
6. on gear select create invoice
	* => after the process is done, confirmation window does not appear

7. go to order candidates (import an edi file if there aren't any)
   
8. on gear select create orders
	* => after the process is done, confirmation window does not appear

9. as a regression test, select any process from menu (e.g. a jasper or purchase order from sales order) and run it
	* => after the process is done, confirmation window appears, and you can press on back to change the fields
	* => note that for jasper processes, confirmation window appears only when they return no pages
	* => note that the process needs to have allowprocessrerun on Y

10. select any process from gear (e.g. recompute HUs in inout or a jasper) and run it
	* => after the process is done, confirmation window does not appear
	* => note that the process needs to have allowprocessrerun on N
      

