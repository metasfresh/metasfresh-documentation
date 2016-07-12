---
title: IT FRESH-512
required data:
   bpartner: bpartner G000X, etc (vendor)
   products: P0001, etc
layout: default
---

### Receipt POS - sometimes gets wrong numbers from weighting machines
> Testcase to check if weighting in receipt pos works fine

**Weighting**

1. if there are not enough lines in receipt pos, you can create multiple purchase orders, bpartner G000x and products like P0001

2. go to receipt pos and open a line

3. weight it (manually or from button) and then press other buttons 
	* => weight works fine and it doesn't change after you pressed other buttons

4. select multiple lines one after another, to weight and make inouts
	* for this also change the bpartner, warehouse 
		* => weight works fine and it doesn't change after you pressed other buttons

5. open multiple times the same line, weight it each time (manually and from button)
	* also change attributes as much as you can, in between weighting
		* => weight works fine and it doesn't change after you pressed other buttons

6. open a line and between weighting use split and join
	* => weight works fine and it doesn't change after you pressed other buttons