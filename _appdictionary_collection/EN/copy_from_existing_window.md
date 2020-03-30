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
1. Create a new empty window.
1. Run the process "Copy window" and select the window you want to copy everything from.
1. Create a new menu node for your new window.
1. Change the zoom to the destination of the table the window is for (e.g. new sales order window needs to be configured on `c_order` table).
1. Set permissions so you can see it by using either "role access update" or by adding the window manually to your role.
1. ***Optional:*** You can use "template tabs" to link tabs into the new window instead of duplicating them which solves the problem of maintaining changes coming from metasfresh release in the originating window.
