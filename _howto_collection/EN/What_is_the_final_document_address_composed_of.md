---
title: What is the final document address composed of?
layout: default
tags:
  - Master Data
lang: en
---
## Overview

The address on documents such as order confirmation, delivery note, invoice etc. in metasfresh comprises a set of different data.

We include an example to show what a document address is composed of:

![img](../../images/de_belegadresse_versus_daten.png)


|  Document address       | Source                   | Where can I find it?                                                                                  |
| ------------------- | ------------------------ | ---------------------------------------------------------------------------------------------- |
| metasfresh AG       | Business Partner         | Window **Business Partner** => Field Name                                                          |
| Mr. Norbert Wessel  | Contact                  | Window **Business Partner**, Tab **Contact**, Fields **Greeting**,**Name**                 |
| IT Department       | Address  - Address line 1| Window **Business Partner**, Tab **Location**, Button **Address**, Field **Address 1** |
| Am Nossbacher Weg 2 | Address - Street         | Window **Business Partner**, Tab **Location**, Button **Address**, Field **Address 1**        |
| 53179 Bonn          | Address - ZIP and City   | Window **Business Partner**, Tab **Location**, Button **Address**, Fields **ZIP and City**   |
| Deutschland         | Address - County          | Window **Business Partner**, Register **Location**, Button **Adresse**, Feld **Country**          |

## Where to go from here

How is the generation of the document address being configured?




