---
title: IT FRESH-465
required data:
   AD_Orgs: Org I, Org II
   documents: documents & counter documents for Org I & Org II
layout: default
tags:
  - UI
---
## Extend Record_ID Column Implementation

> Testcase to check if the additional Record_ID column   
> is working fine.

1. The additional Record_ID button is displayed in the views for missing counter documents, so in order to test you need documents and counter documents where reference orderlines are missing
	* => see IT FRESH-417 for the documents and the view

1. Select a document for which a counter document exists, but 1 or more reference orderlines are missing
	* => if none exists, you can take a document with a complete counter document and set the ref_orderline_id for one of its orderlines to NULL in db 
	
1. Search for this document in the view for missing counter documents
	* => Doc No. of the document, Record_ID button for it
	* => Doc No. of the counter document, Counter Record_ID button for it
	
1. Press the Counter Record_ID button
	* => the Counter Document opens, no problems or errors
	
1. Press the Record_ID button
	* => the document opens, no problems or errors
	
1. Also check in console while testing if you get any errors regarding column names etc.!



Regression:

* Check other Record_ID buttons in different windows, and make sure they still work fine
* Check other buttons, and make sure they still work fine

