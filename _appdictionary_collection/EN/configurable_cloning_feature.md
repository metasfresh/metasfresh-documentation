---
title: Control how the WebUI cloning feature works (Configuration)
layout: default
tags:  
  - Cloning Feature
lang: en
sequence: 10
ref: configurable_cloning_feature
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/15739#issuecomment-1592495203
-->

## Overview
This guide describes the various configuration options that control how the [WebUI cloning feature](../../webui_collection/EN/clone_record_window) works with respect to cloning level (table/column) and sub-records.

| <a href="#control-on-table-level" title="Controlling on table level">Table Level Controls</a> | <a href="#control-on-column-level" title="Controlling on column level">Column Level Controls</a> |
| :---: | :---: |
| <kbd><a href="assets/cloning feature - controls on table level.png" title="Click to enlarge" target="\_blank"><img src="assets/cloning feature - controls on table level.png" alt="..."></a></kbd> | <kbd><a href="assets/cloning feature - controls on column level.png" title="Click to enlarge" target="\_blank"><img src="assets/cloning feature - controls on column level.png" alt="..."></a></kbd> |

---

## <a name="control-on-table-level">Controlling on table level</a>

### `CloningEnabled` – Controls if records of this table can be cloned

| Option | Effect |
| :--- | :--- |
| *Auto* | (backward compatibility) Lets the framework determine if a table can be cloned. Basically falls back to the way it was working before, i.e. a table can be cloned if we programmatically enabled it (by calling `CopyRecordFactory#enableForTableName`). |
| *Enabled* | Cloning enabled (regardless whether it was enabled via code or not) |
| *Disabled* | Cloning disabled (regardless whether it was enabled via code or not) |

### `WhenChildCloningStrategy` – Controls how records of a table will be cloned when included in a parent table
For example, how `C_OrderLine`s will be cloned when cloning a `C_Order` record.

| **IMPORTANT** |
| :--- |
| If `CloningEnabled` is `Disabled` the table will be skipped regardless of this field's setting. |

| Option | Effect |
| :--- | :--- |
| *Allow including when cloning as a child* | (backward compatibility) Allows cloning if the system determines that is suitable. |
| *Always include* | Include when cloning a parent record (see `DownlineCloningStrategy`=`Only if marked as included`). |
| *Skip when cloning as a child* | Skip it when cloning, no matter what. |


### `DownlineCloningStrategy` – Controls how child records of a parent record will be cloned
For example, when cloning a `C_Order`, how to determine which are the child records like `C_OrderLine`.

| Option | Effect |
| :--- | :--- |
| *Auto-Detect and Copy Children* | (backward compatibility) Lets the system detect the child records. |
| *Only if marked as included* | Will consider only those child records with `WhenChildCloningStrategy`=`Always include`. |
| *Skip Copying Children* | Skips copying children. |

---

## <a name="control-on-column-level">Controlling on column level</a>

### `CloningStrategy` – Controls how a column value is copied

| Option | Effect |
| :--- | :--- |
| *Auto (legacy)* | (backward compatibility) Apply the same algorithm we had until now. (Basically, if it is computed then use the default value, else copy directly). |
| *Direct Copy* | Copies the value directly. |
| *Use Default Value* | Compute the value by parsing and resolving `AD_Column.DefaultValue` using target record context (and values). |
| *Skip* | Do not copy, simply skip it (do nothing). |
| *Make Unique* | Applies to string columns only. Makes the value unique by appending a string that contains the currently logged-in user and current time. The `AD_Message` appended as a suffix is `CopiedOn`. Current login language is used (or base language if no login language is defined). |
