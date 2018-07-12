---
title: IT gh#350
required data:
layout: webui
tags:
  - UI
---
## #350 Strange pulse effect in Subtab Gridview

> Testcase to check if pulse effect works well in Subtab Gridview

1. Open Business Partner Window

2. select a business partner that has multiple addresses

3. go to Location subtab and select the first address

4. right click on it - advanced edit

5. don't change anything, press done
	* => your line is still selected
	* => there was no pulse effect
	
6. right click on your line again - advanced edit

7. change something on the address, press done
	* => your line is still selected
	* => there was a pulse effect on this line
	
8. choose any other line, right click on it - advanced edit

9. don't change anything, done
	* => your line is still selected
	* => there was no pulse effect
	
10. advanced edit, change something, done
	* => your line is still selected
	* => there was a pulse effect on this line
	
	