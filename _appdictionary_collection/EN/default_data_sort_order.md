---
title: Specify a default sort order for data views
layout: default
tags:  
  - Window
lang: en
sequence:
ref: default_data_sort_order
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/7137#issuecomment-785035399
-->

## Steps
1. Open the entry of the window where you want to configure  a default data sort order.
1. Open the tab **Field**.
1. In the field **SortNo**, enter
    - `1` for ascending order
    -  `-1` for descending order (see example below)

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108999108-856d9000-76aa-11eb-8e87-d9e0b9e24c50.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108999108-856d9000-76aa-11eb-8e87-d9e0b9e24c50.png" alt="Sort data in descending order (-1)"></a></kbd>

    In the WebUI this will appear as follows:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108999216-ab933000-76aa-11eb-9335-cf792a8bd72d.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108999216-ab933000-76aa-11eb-9335-cf792a8bd72d.png" alt="Sort data in descending order (-1)"></a></kbd>

1. If you want to specify a default sort order for multiple columns, just use their sequence numbers, e.g., for the second column use `2` (ascending) or `-2` (descending), for the third `3` or `-3`, and so on...
