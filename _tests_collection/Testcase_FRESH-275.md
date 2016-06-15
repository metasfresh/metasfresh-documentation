---
title: IT FRESH-275
layout: default
---
## Search Field in Role _Access Windows with autocomplete

> Testcase to check if search fields in 
> Role _Access Windows work with autocomplete. 


1. Open window Rolle - Verwaltung

1. Go to subtab Organisation-zugriff, press search

1. Select Organization in Spalte, and in Selektion Wert start writing e.g. "Hold"
	
	* => all organizations are displayed whose names **include** "Hold", can be selected
	* => not only organizations whose names start with "Hold" are displayed
	* => no dropdown of all available organizations

1. Start creating a new entry, and in Spalte Organization, start writing e.g. "Hold"

	* => all organizations are displayed whose names **include** "Hold", can be selected
	* => not only organizations whose names start with "Hold" are displayed
	* => no dropdown of all available organizations
	
1. Go to subtab Fenster-Zugriff, repeat for Spalte Fenster

1. Go to subtab Prozess-Zugriff, repeat for Spalte Prozess

1. Go to subtab Fenster (nicht dynamisch)-Zugriff, repeat for Spalte Special Form

1. Go to subtab Workflow-Zugriff, repeat for Spalte Worfklow

1. Go to subtab Aufgaben-Zugriff, repeat for Spalte Externer Prozess

1. Go to subtab Belegaktion-Zugriff, repeat for Spalte Belegart

	* => when searching or creating a new entry, you can use autocomplete:
		* all data that's selectable **includes** what you wrote in its name
		* not only data that starts which what you wrote is displayed
		* not just dropdown of all available data

		
	

