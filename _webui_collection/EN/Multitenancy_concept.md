---
title: Multitenancy Concept
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Basics and Concepts
lang: en
sequence: 10
ref: multitenancy_concept
---

## Overview
metasfresh supports an unlimited number of tenants (clients). The data of these clients are kept logically separated from each other and are therefore only visible to the respective client.

| Client | Scope |
| :---: | :--- |
| * | Contains all system objects such as windows, tabs, fields, reports, processes, settings. |
| metasfresh AG | Is preconfigured for use and contains some sample data. |
| Further Clients | Basically you can add as many clients as you wish.<br>**Note:** Adding new clients involves some configuration effort. We therefore recommend that you continue using the standard client "metasfresh AG". |

<br>

<kbd><img src="assets/Multitenancy_1200x675.png" alt="Fig.: Multitenancy in metasfresh ERP"></kbd>
