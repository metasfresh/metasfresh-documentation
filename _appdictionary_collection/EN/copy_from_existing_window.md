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
This process copies all elements from an existing window into the window you currently have selected.

See also <a href="https://forum.metasfresh.org/t/use-process-for-copy-window/1288" title="Use process for copy window | forum.metasfresh.org" target="\_blank">this forum post</a>.

## Steps

### Create a new window
1. Log on to the Java Swing Client as "System Administrator".
1. On the left side under **Application Dictionary**, click on "Window Management". A lookup overlay opens up.
1. Click ![](../../images/icons/New24.png) to create a new empty window.
1. Right-click into the field **System-Element** to zoom into the system element window.

### Create a new system element
1. Click ![](../../images/icons/New24.png) to create a new system element.
1. Enter a **Name** and a **Print Text**.
1. Click ![](../../images/icons/Save24.png) to save.
1. Go back to the new empty window you created earlier.

### Copy all elements from existing window
1. Enter the new **System-Element** from the previous steps.
1. Click ![](../../images/icons/Save24.png) to save.
1. Run the process ![](../../images/icons/Process24.png) "Copy from other window". An overlay window opens up.
1. Pick the **Source window** you want to copy everything from and click on "Start".

### Menu node and permissions
1. Create a new menu node for your new window.
1. Change the zoom to the destination of the table the window is for (e.g. new sales order window needs to be configured on `c_order` table).
1. Set permissions so you can see it by using either "role access update" or by adding the window manually to your role.
1. ***Optional:*** You can use "template tabs" to link tabs into the new window instead of duplicating them which solves the problem of maintaining changes coming from metasfresh release in the originating window.
