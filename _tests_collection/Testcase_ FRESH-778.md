---
title: IT FRESH-778
required data: R_RequestType
layout: default
---

### #494 R_Request new Request context missing
> Testcase to check context and display logic in Request window  

**Display logic**

1. Go to Request window (Vorgang) 

2. Zoom in to Request Type window (Vorgangsart) and make sure you have at least one request type with internal name A or B (customer/vendor complaint). Rest of them can have internal name empty. 
	
3. While you are in Request window, create a new entry

4. set Request Type to one without internal name
	* => there are no UI changes

5. change the Request Type to one with internal name (do not save)
	* => fields update without the need to save
	* => some fields appear (e.g. delivery date, rucklieferung, next action) - specific fields for complaint
	* => some fields hide (e.g. project, invoice, rma)
	* => see window layout here: https://github.com/metasfresh/metasfresh-documentation/blob/master/_tests_collection/Testcase_FRESH-636.md
	
6. change the Request Type again, to one without internal name (do not save)
	* => fields update without saving
	* => specific fields for complaint are hidden, and the other ones appear

7. change the Request Type to one with internal name, set all mandatory fields, save
	* => fields changed accordingly (before save)
	
**Context**

1. While you have Request window (Vorgang) opened, go to extras, open settings

2. Open context tab
	* => you can see the fields from request window
	
3. Open another window, like Order window

4.  Open context tab again
	* => you can see the fields from both windows