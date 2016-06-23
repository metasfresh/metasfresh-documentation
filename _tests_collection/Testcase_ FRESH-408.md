---
title: IT FRESH-408
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
   HUs: TU Ax10
   warehouse: whX, whZ
layout: default
---

### Picking issue
> Testcase to check how picking terminal reacts when trying to pick more than you can

**Picking Terminal**

1. Make a sales order, business partner G000x, warehouse X, product P0001 and qty 100, 10 Ax10 (TUs)

2. make a purchase order, Warehouse Z, product P0001 qty 200, 20 Ax10 (TUs)
    * notice: set the same AttributeSetInstance as you have in the sales order

3. go to wareneingang pos and receive all 200 in warehouse X
    * if you can't do this, you have to go to network distribution, open one and add a line from whX to whZ

4. go to Picking terminal (kommissionier terminal), select whX, business partner G000x, the date

5. select product P0001, press ok
    * editor opens

6. select a picking slot, product P0001 and press on HU Editor

7. split out several TUs on multiple LUs (like: 10/1/6 - meaning 6 LUs each with 1 TU of 10kg)
    * => now you have 1 LU with 14 TUs and 6 LUs with 1 TU each

8. select an LU with qty 10 
    * => slot updates: 10/100

9. open hu editor: select the big LU with qty 140 
    * => error message because qty is too much
    * => slot qty remains on 10/100

10. open hu editor: select an LU with qty 10 
    * => slot updates: 20/100 

11. select a TU for the slot (e.g. Ax10)

12. use hinzuf with qty 120
    * => error message because qty is too much
    * => slot remains on 20/100

13. use hinzuf with qty 5
    * => slot updates: 25/100  

14. use hinzuf with qty 120
    * => error message because qty is too much
    * => slot remains on 25/100

15. use hinzuf with qty 5
    * => slot updates: 30/100  

16. use verteilen with 1 TU
    * => slot updates to 40/100
 
17. use verteilen with 15 TUs
    * => slot updates to 100/100
    * => no error message that the qty is too much
 
18. press ok
    * => your product disappeares from picking terminal

19. go to Verdichtung pos, select warehouse whX and bpartner G000x

20. select the address and press ok
    * => hu editor opens with all your HUs you created in picking terminal

21. put them all on an LU, set a transportation and create the inout from button "lieferschein erstellen"

22. open your inout, complete it
    * => it has the same amount of HUs as you had in Verdichtung POS
    * => qty CU is 100
