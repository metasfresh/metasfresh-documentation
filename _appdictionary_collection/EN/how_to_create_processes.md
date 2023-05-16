---
title: How to create a process
layout: default
tags:  
  - Process
lang: en
sequence: 10
ref: how_to_create_processes
---

## Overview
Processes can be created in two ways: via the Java client (see steps below) or [via the WebUI](../../webui_collection/EN/create_process_via_WebUI).

## Setup Steps for Java Client

### Log in and create a new process
1. Log in to the desired Java back-end instance with the user role "System Administrator".
1. Open **Report & Process** from the menu.
1. Click on <kbd><img src="../../images/icons/New24.png" alt="Fig.: Create New Process"></kbd> to create a new process.

    <kbd><img src="assets/X2Go_New_Process.png" alt="Fig.: Report & Process window (SwingUI)"></kbd>

### Set up the process (Report & Process Tab)
1. **Search Key**: This is the internal search name and ***must be unique***.
1. **Name**: This is the name that will be displayed in the actions menu.
1. **Active**: Must be enabled for the process to appear in the actions menu.
1. **Entity Type**: This is the dictionary entry type determining mapping, ownership and synchronization.
1. **Data Access Level**: Specifies who has access to this process and who can use it.
1. **Type**: Defines the validation of the process type.

<kbd><img src="assets/X2Go_Process_Create.png" alt="Fig.: Report process window (SwingUI)"></kbd>

### Report Access Tab
Here you can enter the access rights for the roles.

<kbd><img src="assets/X2Go_Report_Access.png" alt="Fig.: Report Access Tab (SwingUI)"></kbd>

### Parameters
To add a parameter click `add new` and the advanced edit with the following parameters will open up.
In this advanced edit you can enter:
1. **Name**, **Description**, **Comment/Help**: Contain information and help about the parameter needed to enter. The name and description are visible to the user.
1. **Entity Type**: Shows what Entity Type the parameter is.
1. **Sequence**: The way all parameters are ordered (usually in steps like 10, 20, 30, etc.)
1. **DB Column Name**: Defines how the column is named.
1. **System Element**: The system element can be selected from the already existing system elements and also prefills Name, DB Column Name, Description and Comment.
1. **Reference**, **Reference Key**: Shows the type of parameter and optionally a key if the data is in a table or list.
1. **Mandatory**: If this checkbox is ticked, the user must enter information and cannot leave it blank.
1. **Default Logic**: Defines what value should be selected as default. See also: [How to provide the result of an SQL to a user by running a process](configure_sql_process).

<kbd><img src="assets/X2Go_Parameter.png" alt="Fig.: Parameters (SwingUI)"></kbd>

### Assigned to tables
1. **Process**: Designation of the process.
1. **Table**: The table to which the process is applied.
1. **Entity Type**: The dictionary entry type. It determines ownership and synchronization.

<kbd><img src="assets/X2Go_Assingnes_to_table.png" alt="Fig.: Assigned to tables (SwingUI)"></kbd>

---

## Optional Translations

### If you want to add translations
1. [Activate the translation tabs](activate_translation_tabs).

    <kbd><img src="assets/X2Go_show_translations.png" alt="Fig.: Under the tools, tick the checkbox 'Show Translation Tabs'"></kbd>

1. After restarting your Java client, the translation subtabs **Report Translation** and **Parameter Translation** should be visible under "Report & Processes".

    <kbd><img src="assets/X2Go_Report_Translation.png" alt="Fig.: Subtab 'Report Translation'"></kbd>

    <kbd><img src="assets/X2Go_Parameter_Translation.png" alt="Fig.: Subtab 'Parameter Translation'"></kbd>
