---
title: Link a Window tab to a view instead of table
layout: default
tags:  
  - Window
lang: en
---

## Overview

This guide shows you how to configure a tab in a window that uses a view (not table) as data source.

In general you create the view and table as described here:
[Create Window from database View](create_window_from_database_view)

But instead of a window you create a tab in an existing window.

In order to do that you need a link column between your view and the parent tab of the window you want to add your view to.

1. Make sure you got a column in your view that you can use to link. e.g. c_bpartner_id in business partner window
1. Make your tab on tab level lower than the main tab. So when the main tab is 0 make it 1
1. Fill in your link column in the field with the same name on tab
