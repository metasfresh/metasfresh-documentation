---
title: IT gh#173
required data:
layout: webui
tags:
  - UI
---
## #173 Record Limitation for filtering and loading records

> Testcase to check if records are limited

1. Material Receipt Candidates window
	* => if you scroll a bit down, you notice there is written "Total items 242" (depending how many candidates there are)

2. Open Role window, select your role

3. Update Max Query Records to e.g. 100 (remember how it was before. e.g. 5000)

4. go to Material Receipt Candidates window, refresh
	* => "Total items 100 (limited)"

5. set Max Query Records back to how it was before you changed it at step 2 (e.g. 5000)

6. go back to Material Receipt Candidates window, refresh
	* => "Total items 242" (depending how many candidates there are)