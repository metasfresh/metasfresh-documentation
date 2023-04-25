---
title: Standard Report Layout Definitions (Style Guide)
layout: default
tags:
  - Style Guide
lang: en
sequence: 10
ref: standard_report_layout_style_guide
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/12117#issuecomment-1149880160
-->

## Overview
This style guide shall be considered a guideline for all default reports to ensure a professional and consistent appearance across all generated documents by following the same standard.

The "Open Items Report" (see example below) serves as the standard document specifying the defaults. These specifications provide the basis for any subsequent customizations.

## Style and formatting

| **Important note:** |
| :--- |
| Always make sure **no text is cut off**! If reports are generated for multiple languages, **check each version** for accuracy in spelling, layout, formatting and readability. |

### General Specifications
- Font: Arial (always)
- Font Size: 8pt
- Font Color: Black
- Text Alignments:
    - Strings: Left
    - Dates: Left
    - Amounts: Right

### Title
- Position: Top
- Alignment: Center
- Font Size: 14pt
- Font Weight: Bold

### Organization Name
- Position: Below title
- Alignment: Center

### Parameters
- Alignment: Centered on each page
- **Note:** Show parameters and title even if the table (results) is empty.

### Tables
- Header Row
    - Background color: Gray
    - Font Color: White
- Detail Rows (Results): alternating colors (white/yellow)
    - Total amounts: Bold
    - Subtotals: Italics

### Page Footer Content
- Top: Solid line across the page (left to right)
- Left: Date and time when the report was run/created
    - Alignment: Left
- Right: Page number of current page and page count
    - Alignment: Right
