---
title: IT gh#1211
required data:
   bpartner: bpartner G000X
layout: default
tags:
  - tour
---
## #1211 Preparation Time: Change to first possible on same Day as Promised Date-Time

> Testcase to check if the preparation time is set correctly

1. Go to Tour window and create 2 new ones

2. for both: create 1 version weekly, select each day and on version line set your bpartner G000X and buffer 4

3. for the first one set 11:30 on each day

4. for the first one set 18:30 on each day

5. on tour tab, select gear - generate delivery days (do this for both)
	
6. set date from and date to (i chose 26.04.2017 and 31.08.2017)
	* => tours are generated
	
7. go to sales order and create a new one (note that created date is 26.04.2017 15:51)
	* => date promised is put by default on today 23:59
	* => in my case is 26.04.2017 23:59
	* => preparation date is on 26.04.2017 18:30 (because it's the closest time to arrive at that hour)
	
8. change the hour so that it won't make in time (4h buffer) (e.g. 26.04.2017 21:59)
	* => preparation date is empty (because in my case it's 16:50 and the one from 11:30 passed)
	
9. change date promised to 27.04.2017 00:00
	* => preparation date is on 26.04.2017 18:30
	
10. change date promised to 27.04.2017 00:00
	* => preparation date is on 26.04.2017 18:30

11. change date promised to 27.04.2017 15:30
	* => preparation date is on 27.04.2017 11:30
	
12. change date promised to 02.05.2017 23:59
	* => preparation date is on 02.05.2017 11:30
	
13. change date promised to 02.09.2017 23:59
	* => preparation date is on 31.08.2017 18:30 (because this is our last deliveryday)
	
