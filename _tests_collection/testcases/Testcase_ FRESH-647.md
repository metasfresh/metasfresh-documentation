---
title: IT FRESH-647
required data:
   products: P0001
   HUs: TU A
layout: default
---

### #9 provide precision for numeric layout elements
> Testcase to check numeric layouts

**Window Fields**
	
1. go to any window where you can set quantities and/or prices

2. set a number directly from keyboard (also try with numeric precision) 
	* => works fine
	
3. set a number from numpad, using mouse (also try with numeric precision) 
	* => works fine

4. set a number from numpad, using keyboard (also try with numeric precision) 
	* => works fine

5. repeat the cases above in grid layout and window layout
	* => works fine for both layouts
	
**POS Fields**

1. open receipt pos 

2. check numeric fields in qty to use panel, by writing directly from keyboard, from numpad - using mouse and from numpad - using keyboard
	* => works fine, and the cursor always stays where you selected while you do the changes (it does not jump)
	
3. test the same in weights and attributes from hu editor panel
	* => works fine, and the cursor always stays where you selected while you do the changes (it does not jump)
	
4. open picking terminal 

5. check numeric fields in add qty panel, hu distribution panel (verteilen) and hu editor
	* => works fine, and the cursor always stays where you selected while you do the changes (it does not jump)
	* => note that in verteilen you can only put int numbers since is the numbers of TUs. You can't have 1.5 TUs

6. open HU Aggregation Form (Verdichtung pos), Handling units pos and Distribution Orders HU Form (Bereitstellung pos) 

7. for all 3 check numeric fields in hu editor 
	* => works fine, and the cursor always stays where you selected while you do the changes (it does not jump)

8. open HU Issue Form (Produktion Fertigstellung Maske Pos)

9. check numeric fields in hu editor and qty to use panels (for both issue and receipt buttons)
	* => works fine, and the cursor always stays where you selected while you do the changes (it does not jump)