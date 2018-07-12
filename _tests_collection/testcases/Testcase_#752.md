---
title: IT gh#752
required data:
   Response: 2 StandardResponse for requests
layout: default
tags:
  - jasper
---
## #752 request report does not show requestes that don't have product or inout

> Testcase to check if the request report also shows requests that don't have product or inout set.

1. Create a request in window Vorgang, set:
	* type: customer request
	* delivery date
	* note
	* response 1
	* DON'T set a product, bpartner, or inout!
	
1. Save:
	* => new line for the latest response (Ergebnis) was created
	
1. Create a request in window Vorgang (alle), set:
	* type: vendor request
	* delivery date
	* note
	* response 2
	* DON'T set a product, bpartner, or inout!
	
1. Save:
	* => new line for the latest response (Ergebnis) was created
	
1. Run the request report, for the dates which include your delivery dates in requests, no other filters:
	* => the lines from your 2 requests are displayed, showing only what you set in the requests: the response, delivery date, status 
	
1. Run the request report again, set product / bpartner etc. (data you didn't set in the requests) in filter:
	* => the lines for your 2 requests are not displayed, since these parameters were not filled for them
