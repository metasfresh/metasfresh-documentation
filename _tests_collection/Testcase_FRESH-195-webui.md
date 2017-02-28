---
title: IT gh#195 - webui
required data:
   bpartner: G000X (customer)
   products: P0001
   
layout: default
tags:
  - included documents 
---
## ##195 Restrict when allowing to create a new included document

> Testcase to make sure the included documents can only be created in certain conditions


1. Create a new purchase order, do not set a partner

2. Go to PO Line, press "Add new"
    * => OK: line was not created
    * => OK: Got an error message like "Document XYZ*  state is invalid: Cannot create included document because it's not allowed."

3. Go to PO line, press batch entry
    * => OK: the fields for batch entry(product and qty)  are not displayed 
    * => OK: Got an error message like "Document XYZ*  state is invalid: Cannot create included document because it's not allowed."

4. Go to order tax, repeat 2 and 3
    * => OK: Same results

5. Go to the Business partner, set G000X ( the order is saevd now) 

6. Go to orderline, Press Add New , do not set anything, press Done
    * => new empty line created (not saved because it lacks mandatory fields)

7. Press Add new again
    * => OK: line was not created
    * => OK: Got an error message like "Document XYZ*  state is invalid: Cannot create included document because it's not allowed."
    
8. Press Batch entry
    * => OK: the fields for batch entry(product and qty)  are not displayed 
    * => OK: Got an error message like "Document XYZ*  state is invalid: Cannot create included document because it's not allowed."
"XYZ*" : document identifier window/documentNo

9. If you complete the line with a product and qty, you are able to use Add New and Batch Entry and lines are created without error.