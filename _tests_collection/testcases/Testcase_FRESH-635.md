---
title: IT FRESH-635
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001 
layout: default
tags:
  - Jasper
---
## #359 document Note not displayed on invoice 

> Testcase to check if the document note is displayed correctly in the jaspers.


1. Open window DocType (Belegart) for doc types order, inout and invoice (both sales & purchase side)

1. Set a text for testing in Documentnote, save

1. Create orders, inouts and invoices for both purchase and sales side for G000X, with P0001

1. Print preview each of the jaspers:
	* => the text you set in Documentnote is displayed correctly in every jasper
	
**Note:** This works for the standard version of documents and DocTypes; if a customer has special documents with there own texts to be displayed, then the text in Documentnote is not displayed!