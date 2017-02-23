---
title: IT gh#383
required data:
layout: webui
tags:
  - UI
---
## #383 Shortcut for Batch entry space not usable when in input field

> Testcase to check ctrl+space shortcut when in input field

1. create a new order

2. Add a bartner

3. while you are still on bpartner field press ctrl+space
	* => it's a shortcut to Batch Entry
	* => batch entry is zoomed in and you can add products
	
4. add a product and then press ctrl+space again
	* => you are back on main window
	
5. select bpartner field and press ctrl+u
	* => order is set to complete
	
6. repeat the same case while not selecting any field
	* => works the same
