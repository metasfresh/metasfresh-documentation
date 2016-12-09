---
title: IT FRESH-911
required data: -
layout: default
tag: WebUI
---

### #59 User friendly URL for Print Endpoint
> Testcase to check url from pdf print

**Print URL**

1. open webui and press on home button

2. select browse whole tree

3. open a window that contains documents (e.g. Shipment)

4. select actions menu and Print
	* => a new tab opens with the pdf to print
	* => notice that it's not metasfresh icon on the tab, but a leaf
	* => url looks like this: /rest/api/window/{windowId}/{documentId}/print/{filename}
	* => in my case: rest/api/window/169/1001034/print/169_546214.pdf where 169 is windowID, 1001034 is documentID and 169_546214 is windowID_docunemtNo
	* => note that later it might change, like, instead of windowID to have WindowName
	
5. use ctrl+s or download button to save the pdf on your computer
	* => notice that the file name is 169_546214.pdf, same as the {filename} part of your URL
	
6. press save again, and check if the file downloaded fine
	* => file downloaded fine
	
7. print a document again and while you are on the page with the pdf, change the filename 
	* e.g. change rest/api/window/169/1001034/print/169_546214.pdf into rest/api/window/169/1001034/print/TestName.pdf

8. refresh
	* => the pdf is still there

9. ctrl+s or press on download button
	* => notice that the file name is TestName.pdf, same as the {filename} part you changed in your URL
	