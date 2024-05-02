---
title: How do I process returned products in need of repair (warranty cases)?
layout: default
tags:
  - Customer Service
  - Repairs
lang: en
sequence: 10
ref: service_repair_management_workflow
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/15901#issuecomment-1567097003
-->

## Overview
Sometimes customers may report defective products and return them for repair in order to receive a functional product back (on a goodwill basis, if applicable). In metasfresh, such cases can be handled via the service reception and repairs incl. spare parts, additional services, etc. can be carried out as part of manufacturing orders (repair orders).

<kbd><img src="assets/Service Acceptance to Offer (repair process).png" alt="Fig.: Service reception to Quotation (repair process)"></kbd>

## Requirements
- [Define a document type for repair service returns](Doc_type_service_repair).

## Steps
1. [Create a goods receipt for the returned item in need of repair via the service reception](Service_repair_customer_return).
1. [Start a repair project and create a service/repair order](Service_repair_project_start).
1. [Record your work efforts for the service/repair order (repair-related manufacturing order)](Manufacturing_order_record_work).
1. [Create an estimate for repair services performed](Quotation_estimate_repair_services).
1. [Pick the repaired product for delivery back to the customer](Order_picking_terminal).
1. [Create a shipment with the picked product](Ship_salesorder_picked_qty).
1. ***Optional:*** [Close the service/repair project](Service_repair_project_close).
