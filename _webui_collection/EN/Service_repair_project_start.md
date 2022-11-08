---
title: How to start a new repair project
layout: default
tags:
  - Customer service
  - Repair
lang: en
sequence: 20
ref: service_repair_project_start
---

## Overview
A repair project in metasfresh contains all necessary work steps, materials, service types, etc. and serves to prepare the production order on the basis of which the repair is subsequently carried out. A repair project is always based on a process with the corresponding details, which must be checked for completeness and approved before the repair project can be started.

## Requirements
1. [Receive returned faulty products through the
Service/Repair Customer Return and create a process](Service_repair_customer_return).
1. [Jump over to the linked documents](JumptoviaSidebar)  Serviceannahme in the window "Request (all)" (under CRM in the sidebar) and open the already [filtered](Filterting_funktion) process.

## Steps

### Review process and start the project
1. [Go to the menu](Menu) and open the window "Request (all)".
1. [Use the filtering function](Filterting_funktion), to help you find the desired process, e.g. by filtering after the **Request Type** *Service Annahme* with or without **Project**.
1. Open the record of the process in question and check it for completeness.
1. [Start the action](StartAction) "Start Service/Repair Project". A new tab will open with the window name "[Service/Repair Project](Menu)".
1. Go to the register "Project Repair Task" at the bottom of the page. Here you can see the different types of tasks to be executed, e.g. *Service/Repair Order* oder *Spare Parts*.
1. ***Optional:*** Click on !["Add new"](assets/Add_New_Button.png), to enter additional tasks or [select](RecordSelection) certain task lines to delete them (`Alt` + `Y` / `⌥ alt` + `Y`).

### Creating a Service/Repair Order
1. [Select](RecordSelection) a taskline of the **Type** *Service/Repair Order*.
1. [Start the action](StartAction) "Create Repair Order(s)".
1. A Service/Repair Order with the status *In Progress* will be generated and in the column **Repair Order** of the taskline the project will be linked. [Zoom](Zoomen_into_table_field) in the field to open the Order.
 >**Info:** A Repair Order is an order with the documenttype *Service/Repair Order*.

1. In the entry of the repair order you can record all of the required [work effort](Manufacturing_order_record_work).

### Reserve Spare Parts
1. [Select](RecordSelection) a taskline of the **Type** *Spare Parts*.
1. [Start the action](StartAction) "Reserve Spare Parts". This action opens the "Handling Unit Editor" as an overlay-window.
1. [Select](RecordSelection) a HU-line of the to be reserved <a href="Create_BOM" title="Create BOM">spare parts</a> and start the quick-action "Reserve". It will open an overlay-window.
1. Enter a **Quantity**.
1. Click on "Start", to reserve the spare parts and close the overlay-window.
1. Click on "Done", to close the "Handling Unit Editor".
1. The Task-line of the **Type** *Spare Parts* now shows the **Status** *Completed*.

### Cancel reserved Spare Parts (optional)
- [Start the action](StartAction) "Cancel Reserved Spare Parts", to cancel the spare parts reservation and to put the status of the task-line back to *in Progress*.

## Next Steps
1. [Record the necessary efforts and used production components for manufacturing order](Manufacturing_order_record_work).
1. [Generate a cost estimation for the repair services provided](Quotation_estimate_repair_services).
