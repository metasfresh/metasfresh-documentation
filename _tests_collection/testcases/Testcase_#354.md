---
title: IT gh#354
required data:
layout: webui
tags:
  - UI
  - filtering
---
## #354 Filter w/o variable Parameters not working

> Testcase to check if filtering in documents works fine

1. Open material Receipt Candidates Window

2. Press Filter Selection and choose "Streckengeschäft"

3. select Apply
	* => filter applies and only "Streckengeschäft" documents are shown
	
4. Press Filter Selection again, select apply
	* => no errors
	
5. use Clear filter and change the filter several times and check if you have the correct result
	* => all filters work, showing the right result
	
6. clear filter and select a default filter, e.g. product

7. without refreshing the page, select home button then select billing candidates using the search field (without selecting anything else in between) 
	* => billing candidates window opens
	* => Filter Selection is empty