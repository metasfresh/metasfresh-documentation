---
title: IT FRESH-703

required data:

    AD_BoilerPlate for ESR
    Async Batch Type for ESR
    Async Batch for ESR
    A valid ESR file
layout: default
---

### #416 Extended async notification features
> Test if async batches work and perform regression on the async in general


**Async batches: Testing how async batches work in ESR import**

1. Go to the window Async Batch, search for the ESR entry

2. Go to its Async Batch Type 
    * Check the flag "Send Notification"
        * Note: If the flag "Send Mail" is set, an e-mail will (also) be sent to the user who is performing the test.
    * After you do so, a new field opens: Benachrichtigungs-Art
    * In this field, set the value "Async Batch Processed" ( meaning: a notification will be created when the async batch is processed)
    * Go to the field "Textbaustein" (AD_BoilerPlate) and zoom into it 
    * Go to the field Textschnipsel and set the text that is wanted for the ESR notifications. For testing purposes set: "EMAIL for ESR"

3. Go to the window ESR Import, create a new entry with a suitable Account, save.

4. Import an ESR file for this entry using the process "V11-Datei Importieren"
    * => OK: ESR lines were created
    
5. Go to the window "Asynchrone Verarbeitungswarteschlange" and check for the latest entries
    * => OK: There is a C_Queue_WorkPackage entry (Arbeitspaket Warteschlange) with a QueBlock value like "CheckProcessedAsynBatchWorkpackageProcessor". 
    * => OK: If this window is opened before the async batch is processed there will be a System-Problem set, announcing that the workpackage was postponed. This notice will dissapear after the batch is processed
    * => OK: This message is displayed in the LastSkipReason field: "Not processed yet. Postponed!" even after the workpackage was processed

6. Go to the tab "Log" for the same workspackage
    * => OK: There are entries for each time the workpackage was skipped, with the message "Skipped while processing workpackage.['info about workpackage'] "

7. Wait until the async batch workpackage is processed (might take around 3 minutes) 
    * => OK: The workpackage doesn't have the System-Problem any more
    * => OK: The workpackage is marked as processed

8. Go to Notes window (Statusmeldung) and search for the recently created notes
    * => OK: Note created for the Async Batch
    * => OK: in the field Mitteilung there is the text that was set in the Textbaustein, above: "EMAIL for ESR"
    * If the email sending was activated an e-mail shall also be received.
    

**Async: Regression testing** 

1. Any process involbing Async is suitable for this test. For instance, start with creating a purchase order, then a receipt based on it, with  quality discount. Make sure the R_Request is created. Then create an invoice for the receipt. Make sure the BPartner stats are updated. Check "Asynchrone Verarbeitungswarteschlange" for each step to see the workpackages are processed and have no errors.

2. Some of the async workpackage shat should be displayed "Asynchrone Verarbeitungswarteschlange" and processed are (check for the names to be part of the Queue Block. Some of them will appear several times): 
    * => OK: M_Storage_Add
    * => OK: CreateMissingShipmentSchedules
    * => OK: GenerateReceiptSchedule
    * => OK: DocOutbound
    * => OK: UpdateMRPProductInfo
    * => OK: CreateMissingInvoiceCandidates
    * => OK: UpdateInvalidInvoiceCandidates
    * => OK: M_ReceiptSchedule_GeneratePlanningHUs
    * => OK: C_Request_CreateFromInout
    * => OK: InvoiceCandWorkpackageProcessor
    * => OK: C_BPartner_UpdateStatsFromBPartner
    
All of the above were processed correctly.
