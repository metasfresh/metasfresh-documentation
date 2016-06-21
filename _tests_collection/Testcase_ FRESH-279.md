---
title: IT FRESH-279
required data:
   bpartner: bpartner G000X
   products: P0001
   HUs: TU A x t, TU B x u, TU C 
layout: default
---

### DD Order CU calculation wrong when TU = 1
> Testcase to check if the qtys are calculated right in distribution orderline

**Distribution order**

1. Go to Distribution order window and create a new one

2. Add the doctype, bpartner G000X, transit warehouse and save

3. Add a new line, set product P0001, save
	* => qty TU is 0, HU is null and qtyCU is 1

4. Add a new line, same product, add a HU: TU A x t (let's say t=10)
	* => qty TU is 1, TU A x t and qtyCU is 10

5. save
	* => qtys remains the same

6. change qtyTU to 6
	* => qtyCU updates to 60 (6*t)

7. save
	* => qtys remains the same

8. change HU to TU B x u (let's say u=5)
	* => qtyCU updates to 30 (6*u)

9. save
	* => qtys remains the same
	
10. change HU to TU C (unlimited capacity)
	* qty CU and TU didn't change
	
11. add a new line with product P0001, TU C
	* qtyTU = 1 and qtyCU = 1 

12. change qty TU to 11, save
	* => qtyCu didn't change
	
13. Complete order
	* => all qtys are the same
