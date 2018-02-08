---
title: IT gh#399
required data:
     window: window with a lot of entries, e.g. sales orders or products  
layout: default
tags:
  - UI
---
## #399 grid view: page and sort parameters are not considered

Test Case:

1. Open a window with a lot of lines in several windows, e.g. sales orders or products

1. Sort the orders or products, e.g. by reference or article no.

1. Go to another page, e.g. 4

1. Check the URL, then change the URL's page parameters (e.g. from page 4 to 3):
	* => page 3 is now displayed, not 4 and not 1
	
1. Now add/change URL's "sort" parameter (e.g. &sort=-DocumentNo)
	* => the sorting is now done by what you set, e.g. DocumentNo, and still page 3!
	
1. Open the WebUI in an additional, different tab	

1. In the new tab, log out

1. Go back to the old tab, refresh:
	* => you have to login again
	
1. Login and check the page:
	* => you are back at the window you viewed last, with the same sorting and the same page where you were last (e.g. page 3, sorted by DocumentNo)
