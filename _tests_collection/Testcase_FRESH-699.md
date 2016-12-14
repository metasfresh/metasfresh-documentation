---
title: IT FRESH-699
required data:
   sales orders: several orders with different sums / delivery dates   
layout: default
tags:
  - WebUI
  - UI
---
## #27 Support for custom order bys in browseView

> Testcase to check if the order by for custom orders is working in browsView.

1. Open WebUI

1. Go to Aufträge

1. Order by overall sum, descending:
	* => orders get sorted by overall sum
	
1. Flip through the pages, jump back and forth:
	* => sorting is kept correctly, ordered by overall sum, descending, no matter which page you flipped / jumped to
	
1. Try with ordering by Bereitstellungsdatum ascending:
	* => orders get sorted by Bereitstellungsdatum ascending
	
1. Flip through the pages, jump back and forth:
	* => sorting is kept correctly, ordered by Bereitstellungsdatum ascending, no matter which page you flipped / jumped to
