---
title: IT FRESH-1040
required data:
   bpartner: bpartner G000X (1 address), G000Y (multiple addresses) (both vendors)
   products: P0001
   HUs: TU A
layout: default
tags:
  - RMA
---
## #718 Wrong location in empties vendor return

> Testcase to check location in empties vendor return

1. Create a purchase order for G000X

2. open Receipt POS and select your warehouse, bpartner G000X, your order and line

3. press on Leergut button
	* => Leergut window opens with bpartner and address set, like in order (G000X)
	* => is the bpartner's name (c_bpartner.name) and address name (c_bpartner_address.name)
	
4. change the bpartner to G000Y and set a random address

5. add one or more HUs and press ok
	* => purchase rma inout window opens
	* => bpartner is G000Y and address from G000Y, the one you selected

6. in receipt POS press on leergut again (having same line selected)
	* => Leergut window opens with bpartner and address set, like in order (G000X)

7. add one or more HUs and press ok 
	* => purchase rma inout window opens
	* => bpartner is G000X and address from G000X, the one you had in order
	
8. Create a purchase order for G000Y

9. open Receipt POS and select your warehouse, bpartner G000Y, your order and line (you can also select the line directly)

10. press on Leergut button
	* => Leergut window opens with bpartner and address set, like in order (G000Y)
	
11. change the address of G000Y

12. add one or more HUs and press ok 
	* => purchase rma inout window opens
	* => bpartner is G000Y and address from G000Y, the one you changed in leergut

13. in Receipt pos, open leergut again, for the same line
	* => Leergut window opens with bpartner and address set, like in order (G000Y)

14. change the type of RMA (on the sales rma inout)
	* => bpartner and address are removed
	
15. add bpatner G000X and he's location

16. add one or more HUs and press ok 
	* => sales rma inout window opens
	* => bpartner is G000X and address from G000X, the one you set in leergut
	
17. go to bpartner windows, select G000Y. Go to address subtab

18. inactivate some addresses

19. go back to Receipt POS and open leergut for this bpartner
	* => notice that the addresses which are inactivate, you cannot see them here
	
20. create a new purchase order with G000X, set isdropship on Y and add bpartner G000Y and an address from G000Y

21. open Receipt POS and select the line of your last order, open leergut
	* => line in receipt POS is for G000X
	* => leergut opens for G000Y and addresses from G000Y (the dropship bpartner)

22. add some HUs, press ok
	* => purchase rma inout window opens
	* => bpartner is G000Y and address from G000Y, the dropship ones
	
23. open leergut again for the same line
	* => leergut opens for G000Y and addresses from G000Y (the dropship bpartner)
	
24. change bpartner with G000X, select the address 

25. add some HUs, press ok
	* => purchase rma inout window opens
	* => bpartner is G000X and address from G000X, the ones you changed in leergut
