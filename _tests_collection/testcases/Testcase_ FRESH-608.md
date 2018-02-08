---
title: IT FRESH-608
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
layout: default
tags:
  - UI
  - Inout
---
## #315 M_ReceiptSchedule.QtyToMove not properly updated on reopen

> Testcase to check if the QtyToMove in Receipt Schedule is updated correctly after closing and reopening.

1. Make sure that P0001 has different product UOM / price UOM and an active UOM conversion

1. Create a purchase order for G000X, with P0001 and P0002:
	* for both products, order qty > 1 so you can make >1 inouts
	* for P0001, order with price UOM
	
1. Open the Receipt Schedule for your order:
	* => QtyToMove = Qty Ordered (qty entered in order)
	* => QtyMoved = 0, since no inout happened yet
	* => QtyOrdered: in order's UOM (in product UOM in this case)
	
1. Open your order in Receipt POS:
	* => Qty Ordered: same as in order for each product, in order's UOM (in product UOM in this case)
	* => Bewegte Menge: 0
	
1. Close the Receipt Schedule for P0001, from Gear, Close Entry:
	* => QtyToMove & QtyOrdered are set to 0
	* => line for P0001 disappears in Receipt POS
	
1. Create an inout for P0002, < qty ordered, and close the line in Receipt POS afterwards
	* => Bewegte Menge: qty from inout
	* => line for P0002 disappears in Receipt POS
	
1. Check Receipt Schedule for P0002:
	* => QtyToMove is 0
    * => Qty Ordered = QtyMoved (qty from inout)
	* => QtyMoved = qty from inout

1. Open both Receipt Schedules from Gear, Open Entry:
	* => QtyOrdered is the same as in purchase order (qty entered)
	* => QtyToMove =  order's qty entered - QtyMoved
	* => QtyMoved = qty from inout
	
1. Go back to Receipt POS, make inouts for both products, then close both lines

1. In Receipt Schedule, reopen the one for P0001:
	* => QtyMoved = qty from inout
	* => QtyToMove = order's qty entered - QtyMoved
	* => Qty Ordered = qty entered from order