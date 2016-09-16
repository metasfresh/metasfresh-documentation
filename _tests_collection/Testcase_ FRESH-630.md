---
title: IT FRESH-630
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
layout: default
---

### #351 translate order summary
> Testcase to check if order summary is readable

**Document Summary**

1. Login with English language

1. Create the following types of documents:
	* sales order
	* purchase order
	* sales invoice
	* purchase invoice
		* => notice that at the bottom of each document there is a summary containing total, taxes and net in base currency.
	
1. Login with German language 

1. go to the documents you created in step 1
	* => it's the same summary on the bottom of the documents, but it's translated in German
