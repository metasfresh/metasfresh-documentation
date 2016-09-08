---
title: How to create a workflow
layout: default
<!---- tags:
  - Stammdaten
  - Produktion ----!>
lang: en
---

## Creation of a workflow

1. [Fenster "Produktion Ablauf" öffnen](Wie_finde_und_öffne_ich_ein_Fenster)
1. [Create a new record](How_to_add_new_data)
1. Fill out the field **Name** 
1. Set the field **Status Workflow** to "Released"
1. Fill out the field **Bearbeiter**
1. [Save](How_to_add_new_data)

## Define workflow steps

1. Open the register "Workflow step"
1. [Create a new record](How_to_add_new_data)
1. Fill out the field **Name** 
1. Fill out the field **Production Resource** [accordingly](How_to_define_a_production_resource)

   > Important: In case this field is not filled out the production order can't be closed using the window "Completion of Production POS" later on.
   
1. [Save](How_to_add_new_data)

## Completion of the workflow

1. Switch back to the register "Production Workflow"
1. In the field **Starting Node** choose the first step

1. [Save](How_to_add_new_data)

## Verification of the workflow

1. Click the button "Verify workflow"

In case of errors during the configuration metasfresh shows an error message. In case everything is okay with the workflow the process simply closes itself again.


