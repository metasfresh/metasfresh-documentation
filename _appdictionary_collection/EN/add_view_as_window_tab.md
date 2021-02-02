---
title: Link a window tab to a view instead of table
layout: default
tags:  
  - Window
lang: en
sequence:
ref: add_view_as_window_tab
---

## Overview
This guide shows you how to configure a tab in a window that uses a view (not table) as data source.

In general you create the view and table as described in here:
[Create window from database view](create_window_from_database_view).

But instead of a window you create a tab in an existing window.

In order to do that you need a link column between your view and the parent tab of the window you want to add your view to.

## Steps
1. Make sure you have a column in your view that you can use to link, e.g., `c_bpartner_id` in business partner window.
1. Make your tab one tab level lower than the main tab. So if the main tab is 0, make it 1.
1. Fill in your link column in the field with the same name on tab.
