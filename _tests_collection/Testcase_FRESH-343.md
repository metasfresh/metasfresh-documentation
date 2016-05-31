---
title: IT FRESH-343
required data: edi file
---

# IT FRESH-343
### Unwanted PInstance log shown after olCands were cleared for processing
> Testcase to check if creating sales order from olcands work without errors

**Orders from OlCands**

1. Import an edi file and wait a bit for the olcands to be created

2. go to olcands window (Auftragsdisposition) and check your candidates
	* => olcands created ok, no errors in console
	* => Freigabe erforderlich is set on Y

3. gear - Transaktion Freigaben
	* => Freigabe erforderlich is set on N, Verarbeitet on Y
	* => new sales orders are created 
	* => no errors or warnings in console

