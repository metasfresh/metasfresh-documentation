---
title: IT FRESH-460 
layout: default
tags:
  - UI
---
## Users find window name "window, tab, field" confusing

> Testcase to check the name of window "window, tab, field" 
> is correctly changed.

1. Open client with language: de, for role: System Admin

1. Search for "Fenster"
	* => one of the suggestions is "Fenster Verwaltung"

1. Select Fenster Verwaltung
	* => the window for configuring window, tab, field etc. opens
	
1. Log out, log in again with language: en

1. Search for "Window"
	* => one of the suggestions is "Window Management"
	
1. Select Window Management
	* => the window for configuring window, tab, field etc. opens