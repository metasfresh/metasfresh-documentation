---
title: Copy all elements from an existing window into a new one
layout: default
tags:  
  - Window
lang: en
sequence:
ref: copy_from_existing_window
---

## Overview
In order to provide a customized window, you can simply create a copy of an exisiting (default) public window.

| **Important note:** |
| :--- |
| **Do not** alter the public window, because future public updates might destroy it. |

To prevent overriding the old window, please ensure to:
- Remove role access to the "old" window to avoid confusion with the new one.
- See if there are `AD_Ref_Table` records whose `AD_Window_ID` have to be updated to the new window.
- See if there are `AD_Table_Process` records whose `AD_Window_ID` or `AD_Tab_ID` have to be updated to the new window.

This process copies all elements from an existing window into the window you currently have selected.

See also <a href="https://forum.metasfresh.org/t/use-process-for-copy-window/1288" title="Use process for copy window | forum.metasfresh.org" target="\_blank">this forum post</a>.

## Steps
1. [Create a new system element](create_new_system_element).
1. [Create a new window](create_new_window).

### Copy all elements from existing window
1. Enter the new **System-Element** from the previous steps.
1. Click ![](../../images/icons/Save24.png) to save.
1. Run the process ![](../../images/icons/Process24.png) "Copy from other window". An overlay window opens up.
1. Pick the **Source window** you want to copy everything from and click on "Start".

### Menu node and permissions
1. Create a new menu node for your new window.
1. Change the zoom to the destination of the table the window is for (e.g., new sales order window needs to be configured on `c_order` table).
1. ***Optional (only applies in local environment):*** Set permissions so you can see it by using either "role access update" or by adding the window manually to your role.
1. ***Optional:*** You can use "template tabs" to link tabs into the new window instead of duplicating them which solves the problem of maintaining changes coming from metasfresh release in the originating window.

## Next Steps (optional)
- [Replace the menu entry of the old window with the new cloned one](create_menu_entry_for_cloned_window).
