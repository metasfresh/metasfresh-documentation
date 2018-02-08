---
title: IT FRESH-575
required data:
   bpartner: bpartner G000X (vendor)
layout: default
tags:
  - Jasper
  - language
---
## #272 Report Karottenendabrechnung / Translate Headlines in Reportlanguage = FRENCH

> Testcase to check if the correct language is used in Jasper for Karottenendabrechnung.

1. Open bpartner window, search for G000X

1. Set language to french

1. Make sure G000X is used for Karottenabrechnung

1. Open an existing Karottenendabrechnung (e.g. from e2e) or create one 

1. Print preview the invoice:
	* => all headers are in french
	* => product names (carrots etc.) are in french as well (if not, check Product, tab Translation to make sure a translation exists!)
	* => name of document is in french too (if not, check DocType, tab Translation to see if the translation exists!)
	* => pls. note: special parts like notes can not be translated yet!
	