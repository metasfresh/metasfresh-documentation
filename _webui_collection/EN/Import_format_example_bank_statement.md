---
title: Format example for importing bank statement data
layout: default
tags:
  - Data Management
  - Data Import
  - Bank Statement Data Import
lang: en
sequence: 10
ref: import_format_example_bank_statement
---

## Overview
For importing bank statement data, you require an import format that is configured with the **database table** *Import Bank Statement*.

The example below compares the data content of a file from a spreadsheet software (here, e.g., an *Excel* file prior to its [conversion to a CSV or TXT file](Import_file_useful_tips)) with the import format for bank statement data:

![](assets/Bank_statement_import_Excel_table_Format.png)

### Explanatory Notes to the Example
- **Column A** of the Excel spreadsheet (*Effective Date*) is in the first place, ergo the corresponding format field is given the **Start No. 1**. Consequently, the format field for **Column B** receives the **Start No. 2** etc.<br> The order (**SeqNo**) of the format fields is therefore irrelevant.
 >**Note:** metasfresh does ***not expect any column names*** in the import file. Simply the ***position*** of the column must correspond to the start number.

- The **Name** of the format field may be chosen freely and does not have to coincide with the column name in the import file.
- The **Column** of the format field specifies where metasfresh shall transfer the content of the column from the import file.
- The **Data Type** specifies whether the type of the import data is, e.g., a *String* or a *Number*.
- The first format field "Header IBAN" in the list with the data type *Constant* does not have a start number and therefore does not have to be included in the import file. The IBAN entered in the field in the column **Constant Value** will always be used as the company's transaction account for incoming and outgoing payments.

### Some useful notes
The mandatory fields as well as the requirement that the IBANs belong to existing bank accounts are essential for a successful data import!

| Mandatory Field | Field Name | Example | Note |
| :---: | :---: | :--- | :--- |
| X | Header IBAN | DE00 1234 5678 9876 5432 10 | The IBAN of the account that is used for incoming and outgoing payments (usually, e.g., the company account), stated here as a constant value. Therefore, it does not have to be included in the import file. |
|  | Effective Date | 14.05.2018 | The date from when the money is effectively available. |
|  | Statement Line Date | 15.05.2018 | Value date |
|  | Bill-to Partner | Sequoia Inc. | The name of the invoice recipient |
| X |IBAN from/to  | CH10 9876 5432 1234 5678 90 | The IBAN of the recipient or payment account |
|  | Transaction Type | SEPA credit transfer | Transaction type of the statement line |
|  | Line Description | Share Capital | Description of the statement line |
| X | Statement Amount | 12,500.00 | Amount of the statement line |
| X | ISO Currency Code | USD | Three-letter currency code (in acc. with ISO 4217). |

## Next Steps
- [Import bank statement data](Import_bank_statement_data).
