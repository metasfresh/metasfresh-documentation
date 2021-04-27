---
title: Create a new menu entry for new cloned windows
layout: default
tags:  
  - Window
lang: en
sequence:
ref: create_menu_entry_for_cloned_window
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/7548#issuecomment-806862863
-->

## Steps
1. [Clone a window by copying all its elements into a new one](copy_from_existing_window).

    <kbd><a href="https://user-images.githubusercontent.com/73820536/112486857-f0cb8000-8d84-11eb-900d-ae21027c3578.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112486857-f0cb8000-8d84-11eb-900d-ae21027c3578.png" alt="New window (copy), 'Overrides Base Window' field"></a></kbd>

1. After the cloning was completed, make sure that the field **Overrides Base Window** contains the name of the copied window.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/112488735-7f8ccc80-8d86-11eb-9b4d-a8b6b903eb1f.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112488735-7f8ccc80-8d86-11eb-9b4d-a8b6b903eb1f.png" alt="New system element (copy)"></a></kbd>

    >**Note:** Note that the checkbox **Override in Menu** is not checked!

1. Make a copy of the original window system element and append `_OLD` to the new element's name.
1. Make sure all translations were copied as well.
1. Replace the original window system element with the newly created (`_OLD`) one.
1. Change the system element from the new window to the element that was used by the original window. Now all the references from the old window are updated to the new one.
1. The old window still appears in the menu.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/112488354-2329ad00-8d86-11eb-9a76-c96a8e37e375.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112488354-2329ad00-8d86-11eb-9a76-c96a8e37e375.png" alt="Menu entry of old window"></a></kbd>

    WebUI:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/112488425-30df3280-8d86-11eb-8079-c6949fc6c310.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112488425-30df3280-8d86-11eb-8079-c6949fc6c310.png" alt="Menu entry of old window (WebUI)"></a></kbd>

1. In the new system element's entry, tick the checkbox **Override in Menu**. (See image in step 2 above.)
1. Check the WebUI menu again and you will see that the menu entry has been replaced with the new window. Clicking on it will take you to the new custom window.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/112488979-b19e2e80-8d86-11eb-9dde-cd33f66924ca.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112488979-b19e2e80-8d86-11eb-9dde-cd33f66924ca.png" alt="Menu entry of new window (WebUI)"></a></kbd>

    >**Note:** The old window is still accessible via the window ID but is no longer displayed in the menu structure.

    <br>

    | **Special Note #1:** |
    | :--- |
    | In order to see the new menu entries on the front end, all you need to do is a cache reset and reload. |

    <br>

    | **Special Note #2:** |
    | :--- |
    | **DO NOT** tick the checkbox **Override in Menu** if you want to keep both entries in the menu structure! |

1. Go to the menu structure and create a new entry for the new window.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/112490013-ad264580-8d87-11eb-8e11-676765392ca3.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112490013-ad264580-8d87-11eb-8e11-676765392ca3.png" alt="Create a new menu entry"></a></kbd>

    In the WebUI, both the `_OLD` and the new windows appear in the menu, while the `_OLD` one is pointing to the old window and the new one to the new one.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/112490232-de067a80-8d87-11eb-90db-39ed938f216b.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112490232-de067a80-8d87-11eb-90db-39ed938f216b.png" alt="Old and new windows in WebUI menu"></a></kbd>

    <br>

    | **Special Note #3:** |
    | :--- |
    | Because the new window overrode the old one all references and zoom functionality are already in place.<br><br><kbd><a href="https://user-images.githubusercontent.com/73820536/112492140-af899f00-8d89-11eb-9bf2-6fc224ff2e42.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/112492140-af899f00-8d89-11eb-9bf2-6fc224ff2e42.png" alt="Side menu references"></a></kbd> |
