---
title: IT gh#781
required data:
   bpartner: bpartner G000X, G000Y (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B 
layout: default
tags:
  - ESR payment
  - UI
---
## #781 ESR scan processing returns improper bpartner

> Testcase to check if the bpartner in ESR scan process is set correctly.

1. Make sure both G000X and G000Y have a bank account used for ESR, and the same ESR no. and account no.! => copy the one from G000Y to use also for G000X, so it was used first for G000Y 

1. Create a purchase invoice for G000X

1. Create an ESR payment string for this invoice, to use for scan (including the sum of the invoice, ESR no. of G000X and G000Y)

1. In purchase invoice, click Gear, Zahlung einlesen:
	* => window for ESR scan opens
	
1. Copy paste your ESR payment string into field Payment String, then click Tab:
	* => bpartner G000X is set, NOT G000Y!
	* => G000X's account no. is set
	* => the sum is set
	
1. Close the window without clicking OK, then go to Zahlung-Zuordnung and search for G000X:
	* => your purchase invoice is displayed
	
1. Select the invoice, then click Zahlung einlesen:
	* => window for ESR scan opens
	
1. Copy paste your ESR payment string into field Payment String, then click Tab:
	* => bpartner G000X is set, NOT G000Y!
	* => G000X's account no. is set
	* => the sum is set