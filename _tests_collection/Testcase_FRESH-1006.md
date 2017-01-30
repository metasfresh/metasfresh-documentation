---
title: IT FRESH-1006

layout: default
tags:
  - WebUI
  - UI
---

### #89 Adjust DocAction Names
> Test if Action names are correct in English and German


**Test if Action names are correct in English**
1. Log into webui with an English Language User

2. Create a new Sales Order

3. Go to action panel
    * OK: The status is Drafted
    * OK: The following actions are available: "Complete", "Prepare" and "Void"
    
4. Complete the sales order
    * OK: Status = Completed
    * OK: The following actions are available:  "Re-activate" and "Void"

5. Reativate the order
    * OK: Status: In Progress
    * OK: The following actions are available: "Complete", "Prepare" and "Void"


**Test if Action names are correct in German**
1. Log into webui with a German Language User

2. Create a new Sales Order

3. Go to action panel
    * OK: The status is Entwurf
    * OK: The following actions are available: "Fertigstellen", "Löschen" and "Vorbereiten"
    
4. Complete the sales order
    * OK: Status = Fertiggestellt
    * OK: The following actions are available:  "Löschen" and "Reaktivieren"

5. Reativate the order
    * OK: Status: In Verarbeitung
    * OK: The following actions are available: "Fertigstellen", "Löschen" and "Vorbereiten"
