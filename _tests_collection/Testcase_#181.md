---
title: IT gh#181
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   HUs: TU A, TU B, TU C
layout: webui
tags:
  - HU Editor
---
## #181 Transforming HU in Handling Unit Editor

> Testcase to check transforming HUs

0. setup:
	* make sure you have the following TUs for P0001:
	* TU A x 10
	* TU B x 4
	* TU C x 10 bpartner G000X
	* TU A x 20 bpartner G000Y
	
1. Create and complete a purchase order for G000X:
	* P0001, 5 TU A x 10
	
2. go to referenced documents and open Material Receipt Candidates

3. select the line with the product
	* => the actions button gets green and "5 TU A x 10 kg"
	* => qty ordered: 5, packing material: TU A, received TUs: 0
	
4. select the arrow and select "Receive CU with Qty"
	* => new panel opens with "Menge CU" field, value 50
	
5. change menge cu value to 30

6. HU Editor opens
	* => with 1 line of product P0001
	* => hu type: CU
	* => mange CU: 30, uom: kg
	* => status planning
	
7. select the dropdown arrow and select "Transform"
	* => new panel opens with "Aktion" field
	* => you can select CU on new CU or CU on new TU

8. select cu on new tu
	* => new fields appeared:
	* => packing material, qty CU, own package
	* => in packing material you can choose only from TU A x 10, TU B x 4 and TU C x 10

9. 	select TU A x 10 on packing material

10. set menge cu to 21 and leave own package on N
	* => hu editor opens with 3 TU A x 10 (2 with 10kg and 1 with 1kg)
	* => and 1 line with 9kg on CU

11. select the line with the free CU, use Transform

12. use CU on new TUs, put it on 2 TU B x 4 (menge CU:8 8), set own package on Y
	* => hu editor opens with 2 new TU B x 4, 4 kg each
	* => the line with free CU has now 1 kg

13. select the line with 1 kg, use transforming

14. select CU on new TU, select TU B x 4, qty CU 1 and leave own package on N
	* => hu editor opens with 1 new line, 1 TU B x 4 , 1kg
	
15. verify each TU line for tara weight
	* => each line has the correct weight (the weight of that TU)
	
16. select all lines and press on create material receipt 
	* => you are back on Material Receipt Candidates window
	* => the green button now says ""1 TU A x 10 kg"
	* => see receipt candidate: qty ordered: 5, packing material: TU A, received TUs: 4
		
17. check the newly created receipt
	* => 1 line with the product, 30 kg
	* => 1 line with 3 TU A x 10 (see step 10)
	* => 1 line with 1 TU B x 4 (see steps 12 and 14) - the reason that 2 TU B x 4 are not here is because the "own package" was on Y
	
18. select the dropdown and choose "Receive CUs"
	* => hu editor opens with 1 line, free CU, 20 kg, planning
	
19. select the line and use Transform 

20. select CU on new CU, qty 10
	* => now you have 2 lines with free CUs , both 10 kg
	
21. select the first line and use Transform

22. choose CU on new TUs, select TU C x 10, menge CU 10, own package N
	* => new line with 1 TU C x 10

23. select the line with the TU and use Transform

24. select TU on new TUs, select TU B x 4, qty TU 3, own package N
	* => the line with TU C x 10 is not there anymore
	* => 3 new lines with TU B x 4 (2 with 4 kg and 1 with 2 kg)
	
25. select the line with CU and use transforming

26. select CU on existing TU, qty CU 2 and latest TU
	* => all lines with TU B x 4 have now 4 kg
	* => the line with Cu has 8 kg
	
27. select the line with CU, use Transform

28. use CU on new TUs, TU C x 10, qty CU 8
	* => new line with TU C, 8 kg

29. select the line with TU C and use Transform, use TU on new LU

30. select TU C x10, an LU, qty TU 1
	* => there is 1 new line with LU, which contains the TU C, 8 kg
	
31. select a line with TU B, use transform, choose TU on new LU

32. select TU B x 4, a LU, qty TU 2
	* => new line with LU, which contains TU B x 1, 4 kg 
	* => the other 2 lines with TU B are there 

33. select the line with free TU B and use transform, choose TU on existing LU

34. qty TU 2, LU the last created one
	* => the existing line with LU TU B updated to TU B x 2, 8 kg

35. move the remaining TU on LU (select TU B x 4, a LU, qty TU 1)
	* => line with LU updates: LU x 3, 12 kg
	* => new line with TU B inside this LU, 4 kg 
	
36. set a label on each LU and a attribute that is different on both, and also check tara weights
	* => tara is calculated ok: weight of the LU
	
37. select both LUs and run Create Material Reeceipt
	* => receipt candidate's qty moved tu is now 8
	* => new receipt was created
	* => the green button is now "5 TU A x 10" vecause the product got received completely
	
38. open the newly created receipt
	* => there are 2 lines with the product P0001: one with asi 1 and 8kg, one with asi 2 and 12 kg
	* => 1 line with 3 TU B 
	* => 1 line with 1 TU C
	* => 1 line tith 2 LUs
	
39. go back to Material Receipt Candidates, select the line with product and use "Receive CU with Qty"

40. set qty 30 then transform the whole qty in 3 TU A x 10

41. select a TU, use transform and "TU on LU" 

42. make the same with another TU 
	* => now you have 1 free TU and 2 LUs, each with 1 TU
	
43. put the last TU on a random LU using "TU on existing LU" 
	* => now there are only 2 LUs, 1 with 2 TUs, 1 with 1 TU
	* => on the one with 2 TUs, the TU is called "TU A x 2", the other LU has "TU A x 1"
	
44. remember the value of the LU with 1 TU, select the TU inside it, use transform

45. select "TU on existing LU" and select the LU with 2 TUs
	* => the empty Lu is not shown anymore
	* => the LU with 3 TUs has "TU A x 3" written and there are 30 kg on it
	
46. select the LU line, select the dropdown arrow
	* => transform button is readonly
