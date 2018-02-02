---
title: IT gh#1194
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002, P0003
   HUs: TU A
layout: default
tags:
  - HU
  - attributes
---
## #1194 HU "Herkunft" HU_Attribute is not propagated from LU to VHU

> Testcase to check if country attribute propagation works fine


1. Create a purchase order for G000X:
	* P0001, no HU, attribute country A
	* P0002, no HU, no attributes
	* P0003, TU A, attribute country B
	
2. go to Receipt POS and select the line for P0001

3. open it on LU + VHU
	* => LU and VHU have attribute country A
	
4. on LU level, change the country atrtibute to country Z

5. create receipt and go to handling units window and search for the LU and VHU
	* => both HUs have attribute country Z
	
6. go back in receipt pos and select the line with P0001 again, with LU and TU
	* => LU and TU have attribute country A

7. change the attribute to country T, create receipt

8. go to handling units window and search for the LU and TU
	* => both HUs have attribute country T
	
9. go back in receipt pos. Open the line with P0001 again on LU and VHU 	
	* => LU and TU have attribute country A
	
10. don't change anything, create receipt

11. go to handling units window and search for the LU and TU
	* => both HUs have attribute country A
	
12. go back in receipt pos. Open the line with P0002 on LU and VHU
	* => both HUs have no attributes
	
13. set attribute country S, create receipt

14. go to handling units window and search for the LU and VHU
	* => both HUs have attribute country S

15. go back in receipt pos. Open the line with P0002 again, on LU and VHU
	* => both HUs have no attributes
	
16. create receipt and go to handling units window and search for the LU and VHU
	* => both HUs have no attributes
	
17. go back in receipt pos. Open the line with P0003 on LU and TU 	
	* => both HUs have attribute country B
	
18. change the attribute country A in country X, create receipt
	
19. go to handling units window and search for the LU and TU
	* => both HUs have attribute country X
	
20. go to Receipt POS and open your line again on LU and VHU
	* => both HUs have attribute country B

21. change the attribute country A in country X, create receipt

22. go to handling units window and search for the LU and TU
	* => both HUs have attribute country X
	
23. open the line only on VHU, set attribute on country E, split it on LU and make receipt

24. go to handling units window and search for the LU and VHU
	* => both HUs have attribute country E
	* => works the same if you split the VHU on LU and then set the country to E
	
25. open the line only on VHU, set attribute on country R, split it on TU + LU and make receipt

26. go to handling units window and search for the LU and TU
	* => both HUs have attribute country R
	* => works the same if you split the VHU on LU+TU and then set the country to R
	
