---
title: IT gh#273
required data:
   bpartner: bpartner G000X (customer or vendor)
   products: P0001
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - WebUI
---
## remove deprecated staleTabIds

> Testcase to check if deprecated staleTabIds are removed.


1. create new order. Don't add anything yet 
	* => allowCreateNew:false OK
	* => allowDelete:true OK
	* => buttons to add new lines are hidden OK

1. add all mandatory fields (you can also add a new line)
	* => allowCreateNew:true OK
	* => allowDelete:true OK
	* => buttons to add new lines are shown OK
	
1. add lines if you didn't add yet. Complata the document
	* => allowCreateNew:false OK
	* => allowDelete:false OK
	* => buttons to add new lines are hidden OK

1. create a new order and add all mandatory fields

1. remove a mandatory field like bpartner
	* => allowCreateNew:true NOK
	* => allowDelete:true NOK
	* => buttons to add new lines are shown NOK
	=> will be solved in https://github.com/metasfresh/metasfresh-webui-api/issues/271

1. create a new order, set all mandatory fields

1. add an empty line (using add new with no product)
	* => allowCreateNew:false OK
	* => allowDelete:true OK
	* => buttons to add new lines are hidden OK
	* => you can remove the line OK
	
1. add mandatory field on line (the product)
	* => allowCreateNew:true OK
	* => allowDelete:true OK
	* => buttons to add new lines are shown OK
	* => you can remove the line OK
	
	
	