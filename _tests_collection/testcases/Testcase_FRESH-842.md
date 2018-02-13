---
title: IT FRESH-842
required data:
   bpartner: bpartner G000X   
layout: default
tags:
  - UI
---
## #555 Businesspartner Location isEDI shall not be ticked by default

> Testcase to check if isEDI is no longer set by default in bpartner location.

1. Open bpartner, search for G000X

1. In tab bpartner location, create a new location:
	* => isEDI is not ticked by default, but has to be set manually
	
1. Set the isEDI checkbox, save

1. Create a new bpartner location by copying the one you just created:
	* => isEDI is checked here, since the location you copy from has it set as well