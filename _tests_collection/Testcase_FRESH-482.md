---
title: IT FRESH-482 
layout: default
tags:
  - 
---
## Don't log migration scripts if the transaction failed

> Testcase to check if no migration script was logged
> in case the transaction failed.

1. Log in as System Administrator

1. In Preferences, make sure Log Migration Script is checked

1. Open Window Table and column

1. In table, select an entry, copy it, and try to save it with the same data as the copied one
	* => error because of duplicate
	
1. Create a new entry or change an existing one, e.g. by setting sth in column description, save

1. Check the log for migration scripts
	* => no migration script for the failed transaction where you got the error
	* => migration script for the successful transaction (creating or changing a table) is correct
