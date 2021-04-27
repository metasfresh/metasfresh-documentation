---
title: Create a Reference List
layout: default
tags:  
  - Developers and Customizers
lang: en
sequence:
ref: create_reference_list
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/6978#issuecomment-779757138
-->

## Steps
1. Open "Reference" from the menu and create a new reference.

    ```
    Menu/Application Dictionary/Reference
    ```

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108051329-70ae4e00-7053-11eb-8359-7c798b668f16.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108051329-70ae4e00-7053-11eb-8359-7c798b668f16.png" alt="Reference menu item" style="max-width:300px"></a></kbd>

1. Enter the required data for the reference. In the field **Validation Type** pick *List Validation*.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108051530-aeab7200-7053-11eb-8469-a7337a5ee0e1.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108051530-aeab7200-7053-11eb-8469-a7337a5ee0e1.png" alt="New Reference required data"></a></kbd>

1. Open the tab **Reference Translation** and add the necessary translation.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108051705-e1ee0100-7053-11eb-86cb-1fbc70d1d61c.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108051705-e1ee0100-7053-11eb-86cb-1fbc70d1d61c.png" alt="Reference translation tab"></a></kbd>

1. Open the tab **List Validation** and enter the values for the list.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108051864-119d0900-7054-11eb-97ea-1677e90a064d.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108051864-119d0900-7054-11eb-97ea-1677e90a064d.png" alt="List validation tab"></a></kbd>

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108053054-99cfde00-7055-11eb-9e50-2a477d439f5f.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108053054-99cfde00-7055-11eb-9e50-2a477d439f5f.png" alt="List validation tab overview"></a></kbd>

    >**Note:** It currently seems that the value's name must be in German in order to display it correctly for default language DE.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108994351-56ecb680-76a4-11eb-9cfb-e76f62bad86b.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108994351-56ecb680-76a4-11eb-9cfb-e76f62bad86b.png" alt="Value name must be in German"></a></kbd>

1. Open the tab **List Translation** and add the translation for the list value.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108053226-cf74c700-7055-11eb-9ed4-248a11cd548a.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108053226-cf74c700-7055-11eb-9ed4-248a11cd548a.png" alt="List translation tab"></a></kbd>

1. To use the reference list in a database column, search for the table where you want to use it, open the tab **Column** and pick the desired column.
    - In the field **Reference**, pick *List*.
    - In the field **Reference Key**, pick the name of the list you created in **step 2** above.

  <kbd><a href="https://user-images.githubusercontent.com/73820536/108060069-0ef3e100-705f-11eb-968e-c84f4a0e1e3d.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108060069-0ef3e100-705f-11eb-968e-c84f4a0e1e3d.png" alt="Set column for table"></a></kbd>

    In the WebUI this will appear as follows:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/108060421-83c71b00-705f-11eb-88e9-d2137ed32649.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/108060421-83c71b00-705f-11eb-88e9-d2137ed32649.png" alt="Reference list in WebUI" style="max-width:450px"></a></kbd>
