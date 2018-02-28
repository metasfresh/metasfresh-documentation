---
title: IT FRESH-407
required data:
   M_ShipperTransportation: M_ShipperTransportations in Draft / Progress  
layout: default
tags:
  - UI
---
## M_ShipperTransportation Terminated after complete

> Testcase to check if M_ShipperTransportation get
> completed correctly.

1. Open a M_ShipperTransportation which has status Draft

1. Press Complete

	* => document has status: Completed, **not** terminated
	* => Document type (Belegart): Speditionsauftrag/Ladeliste
	
1. Open another M_ShipperTransportation which has status In Progress

1. Also press Complete

	* => document has status: Completed, **not** terminated
	* => Document type (Belegart): Speditionsauftrag/Ladeliste

