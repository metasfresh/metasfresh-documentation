---
title: IT FRESH-923
required data:
   bpartner: bpartner G000X (customer)
   products: P0001
layout: default
---

### #63 elasticsearch not updated when order completed via webUI
> Testcase to check if elasticsearch works

**Data about orders**

1. open webUI on 2 pages. Leave one opened on the first page, to see the KPIs

2. on another page, go to sales order and create a new one for today, add 1 or multiple lines, complete it

3. go to first page and see KPIs
	* => all those for this week updated accordingly (might take a few seconds to see)
	
4. go to the second one and create another order, this time set the dates to last week

5. go back to first page and see KPIs
	* => all those for last week updated accordingly (might take a few seconds to see)