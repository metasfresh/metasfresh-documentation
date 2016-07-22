---
title: IT FRESH-521  
layout: default
tags:
  - KPI
---
## #201 KPI: number of documents accounted in this year

> Testcase to check the KPI for the number of accounted documents.


1. Open PgAdmin for the db your working on, and run: 

	```sh
	SELECT * FROM de_metas_fresh_kpi.KPI_Accounter_Document (now())
	```
	
	* => result will look like this:
	
	| accounted_until_today   | accounted_from_today   |
	| ----------------------- | ---------------------- |
	| 358.688 (example)       | 15 (example)           |
	
	=> until today: until today 23:59:59; from today: from tomorrow 00:00:00

	
1. Create (and post, if not set to automatic) a document, e.g. an invoice, with accounting date = today

1. Run the query again:

	| accounted_until_today   | accounted_from_today   |
	| ----------------------- | ---------------------- |
	| 358.689 			      | 15 			           |

	
1. Create (and post, if not set to automatic) a document, e.g. an invoice, with accounting date = e.g. 4 days from day of test

1. Run the query again:

	| accounted_until_today   | accounted_from_today   |
	| ----------------------- | ---------------------- |
	| 358.689 			      | 16 			           |