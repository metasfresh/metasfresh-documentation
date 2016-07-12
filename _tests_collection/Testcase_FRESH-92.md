---
title: IT FRESH-92
* required data:
  * bpartner: bpartner G000X (vendor)
  * products: P0001
  * HUs: LUA, TUA.
  * Packing instructions for  TUa and P0001
* layout: default
---

### Purchase Order 850250, Handling Units (TU) wrong Country
> The attributes updated in Wareneingang POS are set correctly in HUS and Receipt

**Weigh more than default**

1. Weigh then change attributes
	* Create a Purchase Order for the partner G000X
	* Create a line for the product P0001, with TU
	* Set some attributes in the ASI
	* Complete the order
	* Go to Wareneingang POS, select the order
	* Open the Editor with the suggested numbers
	* Weigh more than suggested (Press + or just manually insert a bigger number)
	* Change some of the attributes you have set in the order
	* Select all, press OK
	* Go to the created Receipt, check the attributes from the line
		* => OK: There are the attributes you set in the Wareneingang POS
	* Go to the Handling Unit assignment tab of the Receipt
	* Zoom into the LU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
    * Go back, zoom into the TU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
	
2. Change attributes then weigh
	* Create a Purchase Order for the partner G000X
	* Create a line for the product P0001, with TU
	* Set some attributes in the ASI
	* Complete the order
	* Go to Wareneingang POS, select the order
	* Open the Editor with the suggested numbers
	* Change some of the attributes you have set in the order
	* Weigh more than suggested (Press + or just manually insert a bigger number)
	* Select all, press OK
	* Go to the created Receipt, check the attributes from the line
		* => OK: There are the attributes you set in the Wareneingang POS
	* Go to the Handling Unit assignment tab of the Receipt
	* Zoom into the LU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
    * Go back, zoom into the TU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS


**Weigh less than default**

1. Weigh then change attributes
	* Create a Purchase Order for the partner G000X
	* Create a line for the product P0001, with TU
	* Set some attributes in the ASI
	* Complete the order
	* Go to Wareneingang POS, select the order
	* Open the Editor with the suggested numbers
	* Weigh less than suggested (Press - or just manually insert a smaller number)
	* Change some of the attributes you have set in the order
	* Select all, press OK
	* Go to the created Receipt, check the attributes from the line
		* => OK: There are the attributes you set in the Wareneingang POS
	* Go to the Handling Unit assignment tab of the Receipt
	* Zoom into the LU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
    * Go back, zoom into the TU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
	
2. Change attributes then weigh
	* Create a Purchase Order for the partner G000X
	* Create a line for the product P0001, with TU
	* Set some attributes in the ASI
	* Complete the order
	* Go to Wareneingang POS, select the order
	* Open the Editor with the suggested numbers
	* Change some of the attributes you have set in the order
	* Weigh less than suggested (Press - or just manually insert a smaller number)
	* Select all, press OK
	* Go to the created Receipt, check the attributes from the line
		* => OK: There are the attributes you set in the Wareneingang POS
	* Go to the Handling Unit assignment tab of the Receipt
	* Zoom into the LU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
    * Go back, zoom into the TU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS



**Regression**

1. Attributes updated in wareneingang POS asa set correctly
	* Create a Purchase Order for the partner G000X
	* Create a line for the product P0001, with TU
	* Set some attributes in the ASI
	* Complete the order
	* Go to Wareneingang POS, select the order
	* Open the Editor with the suggested numbers
	* Change some of the attributes you have set in the order
	* Select all, press OK
	* Go to the created Receipt, check the attributes from the line
		* => OK: There are the attributes you set in the Wareneingang POS
	* Go to the Handling Unit assignment tab of the Receipt
	* Zoom into the LU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
    * Go back, zoom into the TU handling unit
	* Go to the Handling Unit Attributes tab
	   * => OK: There are the attributes you set in Wareneignang POS
	
