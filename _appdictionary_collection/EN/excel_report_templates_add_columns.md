---
title: How to add columns to an Excel template
layout: default
tags:  
  - Excel Report Templates (Jxls)
lang: en
sequence: 10
ref: excel_report_templates_add_columns
---

## Steps
1. Add the respective column in the view `ModCntr_Log_Details_Template_Report_V` (e.g., column `X`).
1. Open the report template from `backend\de.metas.fresh\de.metas.fresh.base\src\main\jasperreports\de\metas\reports\modcntrlog`.
1. If the Excel sheet is password protected and preventing you from editing it, [unprotect it using the **password** `unlock` when prompted](excel_report_protect_unprotect_sheet#unprotect-excel-sheet).
1. Add the new column as header in the sheet.
1. Add a reference `${rez.example}` to the respective column under the respective header. In this example it would be `${rez.X}`.
1. ***Optional:*** The cell is editable by default. [Lock the cell to make it read-only](excel_report_lock_cell_read-only).
1. ***Optional:*** [Hide entire columns](excel_report_hide_columns).
1. When done editing, [protect the sheet again](excel_report_protect_unprotect_sheet#protect-excel-sheet) using the same **password from step 3**.

## Example
<kbd><img src="assets/Excel report - Add column.png" alt="Fig.: Screenshot of added column in Excel sheet"></kbd>
