---
title: How to define a format used for imports
layout: default
<!---- tags:
  - Datenimport ----!>
lang: en
---

## Creation of a format for imports

Based on the standard definition for a partner import we would like to create our own import format.


1. Open the window "Import-Format" 
1. Create a new data row
1. Filling out the field **Name**: e.g. "Partner import" 
1. Selecting the **Database Table** field : e.g. "I_BPartner_Import - Business Partner"
1. In the field **Format** you select a deliminating character: e.g. Tab
1. Save the data row ([Currently having issues see](https://github.com/metasfresh/metasfresh/issues/282))
1. Click on the button "Copy Positions"
1. Now choose the standard format from which you would like to copy the settings. E.g. "Business Partner Standard" 
1. Click OK. 

The import format created during the previous steps will is now being completed with standard field. The result can be shown as a list of data rows in the register "Format-Field".


## Adapting the import format
The active fields with the startno need to correspond to the fields of the CSV-file you would like to import.


1. Open the register "Format-Feld"
1. [Check using this list](Welche_Felder_kann_ich_importieren) which fields you need / can import at least.
1. Set fields which are not needed to inactive
1. Set the field **startno** 

   **Startno** defines the position where a column is expected by metasfresh during imports.
   The fields do not have to be in a fixed and ascending ordner. 
