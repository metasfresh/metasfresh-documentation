---
title: IT #857 
required data:  
layout: default
tags:
  - HU, POS
---
## #857 String Value not saved in POS Window

> Testcase to check saving attributes in POS windows 

1. Test the following steps in receipt pos, distribution pos and production pos

2. Open a hu in hu editor 

3. Select the hu 
	* => HU is now green 

4. Set an attribute of type string

5. Do not leave the field. To do this, you can for e.g. write something in keypad, press ok, select what you wrote and write something else instead. The keypad won't appear this time and the cursor will remain there

6. remember the hu value and the attribute you set, click OK

7. Go to handling units window and search for your hu, using the value
	* => the HU has your attribute set
	
8. Do the same steps, but leave the attribute field (opposite of step 5. e.g. write something in the field, then select another attribute) 
	* => works the same