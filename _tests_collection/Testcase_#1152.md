---
title: IT gh#1152
required data:
   bpartner: bpartner G000X org1, G000Y org2 (customer, vendor)
   organizations: org1, org2
layout: default
tags:
  - address format
---
## #1152 Support address sequence configuration in multi org environment

> Testcase to check if address sequence configuration works fine

1. go to PBartner windo, select bp G000X. Make sure it has the following config: 
	* org 1, 
	* country DE
	* language english
	* same contry like the one from login (DE in my case)
	
2. go to Country window and config DE in the subtab country sequence
	* new country sequence for language english and org1
	* you have 2 fields for address. One normal one local. Put a1 and a2 in front to differentiate 
	
3. Create new sales and purchase order, invoice and inout for bpartner G000X	
	* documents have the address like this new local sequence ("a2" in front)
	* this is because country from login is the same (DE)
	
4. change bpartner's language to Deutsch and try again
	* documents have the address like in default local sequence, not the one you set (the one from main Country window)
	8 because the language is not the same

5. config a new country FR, in the subtab country sequence
	* langauge Deutsch and org 1
	* you have 2 fields for address. One normal one local. Put b1 and b2 in front to differentiate 

6. go to bpartner G000X and change:
	* the country to FR
	* language Deutsch
	
7. Create new sales and purchase order, invoice and inout for bpartner G000X	
	* documents have the address like this new normal address sequence ("b1" in front)
	* this is because country from login is different (DE vs FR)

8. Change the language of the country sequence of FR to french

9. Create new sales and purchase order, invoice and inout for bpartner G000X	
	* documents have the default normal address sequence, not the one you set (the one from main Country window)
	* because language is not the same
	
10. login with org2 and add a new country sequence for FR
	* language french
	* you have 2 fields for address. One normal one local. Put c1 and c2 in front to differentiate

11. Make sure bpartner G000Y org2, has langauge french and country FR

12. Also set G000X language to french

13. Create new sales and purchase order, invoice and inout for bpartner G000Y
	* documents have the normal address sequence, the one you set, org2 ("c1" in front)

14. Create new sales and purchase order, invoice and inout for bpartner G000X
	* documents have the normal address sequence, the one you set, org1 ("b1" in front)

