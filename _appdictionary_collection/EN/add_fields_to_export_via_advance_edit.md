---
title: Add Fields to Excel Download but do not show them in grid view
layout: default
tags:  
  - Window
lang: en
sequence:
ref: exportadvancededitfieldstoexcel
---


## Overview
Usually all fields in grid view are exported to Excel when using action "Download".

Sometimes you want to export data but do not show it in the window`s grid view.

## How to achieve that via Java Client:

1. Have a UI Element and set it to advanced edit so its shown only in advanced edit
2. add it to the grid view anyway

Result:
- it will not be shown in grid view as its advanced edit
- it will exported when downloading to excel

