---
title: Create default data filters
layout: default
tags:  
  - Window
lang: en
sequence:
ref: create_default_filters
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/7137#issuecomment-785035399
-->

## Steps
1. Open the entry of the table assigned to the window where you want to add a default filter.
1. Open the tab **Default filtering columns**.
1. Select the columns you want to be part of the filter and move them from the left to right pane.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108997780-afbe4e00-76a8-11eb-9079-b8a3a927db35.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108997780-afbe4e00-76a8-11eb-9079-b8a3a927db35.png" alt="Select default filtering columns"></a></kbd>

    In the WebUI this will appear as follows:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108997929-e4caa080-76a8-11eb-9f5d-f396a50b6ef9.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108997929-e4caa080-76a8-11eb-9f5d-f396a50b6ef9.png" alt="WebUI default filter"></a></kbd>

    The first date filter in the default columns list will always appear as a separate filter tab.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108998058-088de680-76a9-11eb-8f16-93e3dfbaf563.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108998058-088de680-76a9-11eb-8f16-93e3dfbaf563.png" alt="Filter by period" style="max-width:450px"></a></kbd>

    If you add another date field to the filter:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/109014729-1483a380-76bd-11eb-9809-2fc69ed45340.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109014729-1483a380-76bd-11eb-9809-2fc69ed45340.png" alt="Add 'Date created' filter"></a></kbd>

    ...this one will appear in the second (default) filter tab.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/109014974-50b70400-76bd-11eb-9e6a-a8dc5fa8fc5e.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109014974-50b70400-76bd-11eb-9e6a-a8dc5fa8fc5e.png" alt="'Date created' filter WebUI" style="max-width:450px"></a></kbd>

1. You can identify filter columns by their checkbox **isSelectionColumn** which has to be activated. You will also need to set the **FilterOperator**.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108998294-602c5200-76a9-11eb-9c6e-1588b0b56949.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108998294-602c5200-76a9-11eb-9c6e-1588b0b56949.png" alt="Filter columns" style="max-width:450px"></a></kbd>

    Available options for the **FilterOperator** are:
    - `B_Between`
    - `E_Equals Or Like`
    - `N_Not Null`

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108999453-fca32400-76aa-11eb-9592-d02ef506a562.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108999453-fca32400-76aa-11eb-9592-d02ef506a562.png" alt="Filter operator options" style="max-width:450px"></a></kbd>
