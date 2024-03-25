---
title: Wie richte ich die ausgehenden Belege für das Mahnverfahren ein?
layout: default
tags:
  - Buchhaltung
  - Mahnwesen
  - Einrichtung
lang: de
sequence: 20
ref: outbound_documents_config_dunning
---

## Überblick
Du musst die ausgehenden Belege für das Mahnverfahren einrichten, damit die erstellten Mahnbriefe unter dem Menüpunkt "Ausgehende Belege" aufgelistet werden, wo Du sie dann entweder einzeln der Reihe nach oder kollektiv weiterverarbeiten kannst.

## Schritte
[Folge dieser Anleitung](Ausgehende_Belege_Konfig) und verwende die **DB-Tabelle** *Mahnart* und das **Druck-Format** *Mahnbrief (swat)*.
 >**Hinweis:** Sollte das Druckformat nicht vorhanden sein, dann [lege ein neues an](Druckformat_anlegen) mit der **DB-Tabelle** `C_Dunning_Header_v` und dem **Jasper-Prozess** *Mahnbrief (Jasper)*.

## Beispiel
<kbd><img src="assets/Ausgehende_Belege_Konfig+Mahnung.gif" alt="GIF: Ausgehende Belege einrichten"></kbd>
