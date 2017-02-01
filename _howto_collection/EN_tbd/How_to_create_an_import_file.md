---
title: How to create a file for imports
layout: default
<!---- tags:
  - Datenimport ----!>
lang: en
---

Create a CSV-file and please make sure that you abide by the following standards:


- The fields need to correspond to the [Format used for imports](How_to_define_a_format_for_imports)
- The delimiting character needs to correspond to what has been defined in the format for imports. E.g. Tab, Comma
- The position of the colums needs to correspond to the values of **startno**. Example: The field with **startno** = 3 needs to be in third position within the file.


   *Please note:* metasfresh doesn't expect you to have names for the individual colums within the CSV file. The only requirement is that the position of the field corresponds to **startno**.

- Encoding of the file needs to correspond with your choice in the window "Programm for loading the import file". As an example this could be "Win-1252".
- When using a spreadsheet software to create the CSV file, please use the format "Text file (Tab delimited) (*.txt) when saving the file.
- Columns may be left blank in case they are not mandatory fields (see [List of mandatory fields](Which_fields_can_be_imported)).

