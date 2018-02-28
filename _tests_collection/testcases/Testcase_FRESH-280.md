---
title: IT FRESH-280
layout: default
tags:
  - UI
---
## Period sorting in all Dropdowns where uses year-month numeric

> Testcase to check if the period sorting is the same in all dropdowns 
> where year-month numeric is used.

1. To find all windows where the year-month numeric is used, use the following query (e.g. in PgAdmin):

```sh
select t.name as tablename,tab.name as tabname,w.name as windowname, ad_reference_value_id, c.* from ad_column c
join ad_table t ON t.ad_table_id = c.ad_table_id
join ad_tab tab on tab.ad_table_id = t.ad_table_id
join ad_window w on w.ad_window_id = tab.ad_window_id
left join AD_Reference r ON r.AD_Reference_ID=c.ad_reference_value_id       
where c.AD_Element_ID=206 and c.isactive='Y' 
```

1. To find all reports where the year-month numeric is used, use the following query  (e.g. in PgAdmin):

```sh
select p.name,ad_reference_value_id, pp.* from ad_process_para pp
join ad_process p ON p.ad_process_id = pp.ad_process_id
left join AD_Reference r ON r.AD_Reference_ID=pp.ad_reference_value_id        
where AD_Element_ID=206 and p.isactive='Y'
```

	=> AD_Element_ID=206 = period sorting is used!
	=> the query will also give the specific tab / subtab of the window where period sorting is used

1. Open all the windows, one after one

1. In the respective window (or tab), search for period

	* => periods are sorted: from Dez-17 descending to Jan-11
	
1. Open all reports, one after one

1. Check the filter for period

	* => periods are sorted: from Dez-17 descending to Jan-11
	
1. If there is a filter for year, set that (e.g. 2015)

1. Check the filter for period again

	* => periods are sorted: from Dez-15 descending to Jan-15
	
1. Note: for some reports / windows, you can only search for the periods of existing data!

	* => periods displayed might be Apr-15, Mrz-15, etc. - Jun-14, not all periods from 2017 - 2011!
	
1. Also note: you can have different calendars for the same year (e.g. for accounting), so you will be able to select the year for each calendar!

	* => years displayed will be e.g. 2015, 2014, 2013, 2013, 2012, if there are 2 different calendars for 2013
	
1. If there are different calendars for the same year, you can select the periods for each one:

	* => periods to select can be Dez-15, Dez-15, Nov-15, Nov-15 etc. if year is not set
	* => if periods can only be selected for existing data, then only these periods will be displayed, see above
	
