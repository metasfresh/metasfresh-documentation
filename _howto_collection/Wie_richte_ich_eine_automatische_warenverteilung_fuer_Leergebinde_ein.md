---
title: Wie richte ich eine automatische Warenverteilung für Leergebinde ein?  
layout: default
tags:
  - Stammdaten

lang: de
---

Eine Warenverteilung (Distribution Network) für Leergebinde ist notwendig, wenn in einem Lager Produkte aus ihrem Gebinde herausgenommen werden und die nun leeren Gebinde in ein anderes Lager (hier "Leergebindelager" genannt) bewegt werden sollen. Diese Bewegung wird durch die Warenverteilung abgebildet.

## Vorbereitung
Um eine Warenverteilung für Leergebinde zu erstellen benötigst Du:

1. ein Hauptlager (bereits in metasfresh enthalten)
1. einen Lieferweg (bereits in metasfresh enthalten)
1. ein [Leergebindelager](Wie_richte_ich_ein_Gebindelager_ein)

## Schritte
1. [Fenster "Distribution Network" öffnen](Wie_finde_und_öffne_ich_ein_Fenster)
1. [Neuen Datensatz anlegen](Wie_lege_ich_einen_neuen_datensatz_an)
1. Feld **Name** ausfüllen, z.B.: Gebinde Distribution Network
1. Setze den Haken für **IsHUDestroyed**
1. [Neuen Datensatz anlegen](Wie_lege_ich_einen_neuen_datensatz_an) in Network Line
1. Als **Source Warehouse**, wähle Hauptlager
1. Als **Target Warehouse**, wähle Gebindelager
1. Als **Lieferweg**, wähle Eigentransport
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)




