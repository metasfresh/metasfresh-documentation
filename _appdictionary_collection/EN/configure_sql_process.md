---
title: Provide the result of an SQL as process to the user
layout: default
tags:  
  - Process
lang: en
sequence:
ref: configure_sql_process
---

## Overview
- This guide shows you how to provide the resultset of an SQL to the user as Excel export by running a process.
- It also shows you how to add `Translations Tabs` in a running process.

## Origin
This guide was developed in this issue: ["Generic Process for SQL -> Excel Export" (metasfresh#4633)](https://github.com/metasfresh/metasfresh/issues/4633).

<!--
Other relevant issues:
https://github.com/metasfresh/onboarding/issues/12
https://github.com/metasfresh/me03/issues/10686
-->

[Other relevant issues:
https://github.com/metasfresh/onboarding/issues/12
https://github.com/metasfresh/me03/issues/10686 ]: #


## In General
- The class name will be automatically set and made read-only: `de.metas.impexp.excel.process.ExportToExcelProcess`
    >**Note:** In version 5.91 there is a bug which prevents the class from being set automatically.<br>
    **Workaround:** `update ad_process set classname='de.metas.impexp.excel.process.ExportToExcelProcess'
where ad_process_id= <your ad_process id>`

- Your SELECT statement, e.g.,
```sql
select
@C_Order_ID/-1@ as C_Order_ID
, @AD_User_ID/-1@ as AD_User_ID
, @C_BP_Group_ID/-1@ as C_BP_Group_ID
, bp.*
from C_BPartner bp
```

The context variables used in SQL will be resolved in the following order:
1. Process parameter, e.g., `where c_order_id = @C_Order_ID/-1@`.
1. Current selected record's field, e.g., `where <column> in ('@$WEBUI_ViewSelectedIds/0@')`.
1. Global context, e.g., `@#AD_User_ID@`.


## Additional Information

#### 1. `AD_Column.DefaultValue` and `AD_Field.DefaultValue`
- Note that there can be several windows with tabs that have fields pointing to the same column.
- When a default value is defined on `AD_Column` level, that value will have the default value no matter where it is used.
- When a default value is defined on `AD_Field` level, it means that it will be applied only in that field of that window.
- The `AD_Field` default value overrides the `AD_Column` one.

#### 2. The DefaultValue SQL syntax
A default value can be:
- A constant like `A` or `Y`.
- A value from the global context, e.g., `@#AD_Client_ID@`, which is the `AD_Client_ID` you are logged in with. A global context value can always be identified by the leading `#`.
    >**Note:** Even if there is another `AD_Client_ID` selected in the local context, when `#` is present, the global value will always be retrieved.

- A value from the local context, e.g., `@AD_Client_ID@`, which is the "closest" `AD_Client_ID` from the context.
    >**Example:** If you are logged in with client X and open a window "A" which has client Y set, then the value "Y" will be taken.

- A more complex SQL, like `@SQL=SELECT COALESCE(MAX(SeqNo),0) + 100 AS DefaultValue FROM C_PricingRule`.
    >**Note:** The statement starts with `@SQL=` but the `@` **does not have to be paired** with another one at the end.

<br>

| **General note:** |
| :--- |
| An SQL statement starts with: `@sql= <sql statement here>` |

[Commented by Ruxi in issue: https://github.com/metasfresh/onboarding/issues/12 ]: #

#### 3. The `WEBUI_ViewSelectedIds`

- `WEBUI_ViewSelectedIds` is a value for the currently selected record's field, e.g., `where <column> in ('@$WEBUI_ViewSelectedIds/0@')`.
- Since the input of `WEBUI_ViewSelectedIds` is going to be a continous varchar, you would need to split the input.

    | **Example** |
    | :--- |
    | `ANY (regexp_split_to_array(p_i_candidate_ID, ',')::numeric[])` |

    >In this example, `p_i_candidate_ID` is the inputted parameter.


## Samples
<details><summary>How to create and bind processes </summary>

<kbd><img src="https://user-images.githubusercontent.com/1244701/46567456-d181d380-c93b-11e8-82b4-abe2b11f57f5.png" alt="Fig.: Report & Process (SwingUI)"></kbd>

<kbd><img src="https://user-images.githubusercontent.com/1244701/46567460-dfcfef80-c93b-11e8-889a-918242ac23bc.png" alt="Fig.: Report & Process - Parameter (SwingUI)"></kbd>

<kbd><img src="https://user-images.githubusercontent.com/1244701/46567510-be233800-c93c-11e8-9fde-441fcf688332.png" alt="Fig.: Report & Process - Assigned to tables (SwingUI)"></kbd>

<kbd><img src="https://user-images.githubusercontent.com/1244701/46567520-d7c47f80-c93c-11e8-9b7c-2e38c435d963.png" alt="Fig.: WebUI Process Rendering (actions menu)"></kbd>

<kbd><img src="https://user-images.githubusercontent.com/1244701/46567529-e743c880-c93c-11e8-9ebf-28483ddea93c.png" alt="Fig.: WebUI Report Overlay Window"></kbd>

<kbd><img src="https://user-images.githubusercontent.com/1244701/46567534-04789700-c93d-11e8-8386-29a0a214a25d.png" alt="Fig.: WebUI Report Download Browser"></kbd>

<kbd><img src="https://user-images.githubusercontent.com/1244701/46567536-1ce8b180-c93d-11e8-88c8-ea8ed998a7aa.png" alt="Fig.: Report Spreadsheet"></kbd>

</details>

---

<details><summary>How to create and bind processes for selected records</summary>

<kbd><img src="./assets/Process_SwingUI_SQLStatements.png" alt="Fig.: Report & Process - SQL Statement (SwingUI)"></kbd>

<kbd><img src="./assets/Process_SwingUI_SQLfunction_p1.png" alt="Fig.: SQL function part 1 (SwingUI)"></kbd>

<kbd><img src="./assets/Process_SwingUI_SQLfunction_p2.png" alt="Fig.: SQL function part 2 (SwingUI)"></kbd>

</details>

---

<details><summary>How to add translations to a process</summary>

1. Open `Tools`, then `Preferences` and tick the checkbox called  **Show Translation Tabs**.

    <kbd><img src="./assets/SwingUI_Preferences_TranslatationTab.png" alt="Fig.: Checkbox 'Show Translation Tabs' (SwingUI)"></kbd>

1. Then restart the Java Client (SwingUI). Afterwards the tabs will be visible.

    <kbd><img src="./assets/SwingUI_TranslatationTab.png" alt="Fig.: Report Translation Tabs visible (SwingUI)"></kbd>

</details>
