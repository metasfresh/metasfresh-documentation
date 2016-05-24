---
title: IT FRESH-331
required data: products with uom kg, products with uom stk, bpartner for purchase
---

# IT FRESH-331
### Double click needed for weighing machine and occasional NPE
> Testcase to check if the weighting works properly in wareneingang pos

**Weight Calculation**

1. create a purchase order, add multiple products, kg and stk

2. complete and open wareneingang pos 

3. select each line, open the lines on different qtys of TUs
    * => tara weight = LU's weight + x* TU's weight (LU and TU's weight are in Product window. x=number of TUs)
    * => net weight = x * TU's capacity * product's weight 
    * => gross weight = tara weight + net weight 	

4. adjust tara weight
    * => net weight updates accordingly (+ decreases net weight and - increases)

5. change gross weight
    * => net weight updates accordingly (gross weight = net weight + tara weight) 	

6. change gross weight using the scale, press the button multiple times, use + and - and then use the scale again
    * => net weight updates accordingly (gross weight = net weight + tara weight) 

7. use split: have a line opened with 1LU, 1 TU, capacity x 

8. split this 1 TU in half: 2LUs, each with 1 TU, qty cu = x/2 => y
    * => net weight updates accordingly on each LU (1*y*product's weight)

9. merge partially 2 TUs: select a TU from LU1 and another TU from LU2, press join
    * => join popup opens with 2 TUs

10. select both TUs and 1 CU (the one from LU1)

11. on menge cu write 1 and then press on merge, ok
    * => net weight updates accordingly on each LU (LU1 has qty-1 and LU2 has qty+1)
	* => tara and gross weights are calculated same as in step 3

12. join both TUs on the same LU: select the TU inside LU1, select LU2, press join

13. select menge LU and menge TU and press ok
    * => only 1 LU remaining, with 2 TUs
	* => all weights updated accordingly (tara weight updated because there are more TUs, net weight is like at begining- see step 6, gross weight = tara+net weight)

14. select a TU, press on aus TU verteilen

15. put a part of it on the other TU 
    * => the weights didn't change on LU level. Only on TUs level

16. use aus TU verteilen again, moving whole qty from one TU to another
    * => net weight is the same, gross and tara updated accordingly

**Partial receipt. Weight more than TUs capacity**

1. create a purchase order, add 10TUs of product P000X which has uom=kg

2. complete it and open Wareneingang POS  

3. select your line and press ok

4. in the "quantity to use" popup select less TUs than you need (e.g. 2)

5. weight your product several times, using +, - and by writing from keyboard

6. in the end modify the net weight such as you "would need more TUs" than you have ( e.g. from 10kg to 22kg)
    * => weight is updated on every level: LU, TU and VHU

7. select all, ok 
    * => inout created with 2 TUs and qty 22
	* => in wareneingang pos Bewegte menge is updated to 22 and packviorschrift to 2/10
	
**Partial receipt. Weight less than TUs capacity**

1. continue the testcase above and select 2 new TUs

2. weight your product several times, using +, - and by writing from keyboard

3. in the end modify the net weight such as you "would need less TUs" than you have ( e.g. from 10kg to 3kg)
    * => weight is updated on every level: LU, TU and VHU

4. select all, ok 
    * => inout created with 2 TUs and qty 3
	* => in wareneingang pos Bewegte menge is updated to 25 and packviorschrift to 4/10

