---
title: IT gh#382
required data:
layout: webui
tags:
  - UI
---
## #382 Arrow key not working in dropdown

> Testcase to check arrow key in dropdowns

1. Open Order window 

2. Add a bpartner then press tab to get to Price System field
	
3. use the up and down arrows to select any price system
	* => both arrows work
	
4. press enter to select the price system
	* => price system is selected
	
5. press tab to get to other fields
	* => next field is selected, price system is saved
	
6. check other window, e.g. Product

7. use tab to navigate through fields

8. find a dropdown with lots of entries (e.g. statistics group)
	* => notice that there is a scrollbar

9. use up and down arrow to select one 
	* => both arrows work
	* => the scrollbar also moves down with the arrow
