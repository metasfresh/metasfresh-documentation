---
title: Wie richte ich ein Gebindelager ein?  
layout: default
tags:
  - 
lang: de
---

>Ein Gebindelager ist notwendig, wenn leere Gebinde anfallen und diese gelagert werden sollen, etwa nachdem Produkte aus ihrem Gebinde herausgenommen wurden.

1. [Fenster "Lager und Lagerzuordnung" öffnen](Wie_finde_und_öffne_ich_ein_Fenster)
1. Im ersten Tab **Lager**, [erstelle einen neuen Datensatz](Wie_lege_ich_einen_neuen_datensatz_an) 
1. Feld **Name** ausfüllen, z.B.: Gebindelager
1. Setze einen Haken bei Handling Units, **HU Storage Disabled**
1. Entferne den Haken bei Kommissionierlager, Freigabe für Aufträge / Bestellungen soll angehakt bleiben
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. Im zweiten Tab **Lagerort**, wähle den gleichen **Namen** wie im ersten Tab (Gebindelager)
1. Für Gang (X), Fach (Y) und Ebene (Z), setze jeweils 0; Relative Priorität bleibt 50
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. Im letzten Tab, **Lagerzuordnung**, [erstelle einen neuen Datensatz](Wie_lege_ich_einen_neuen_datensatz_an) 
1. Für **Document Base Type**, wähle Physischer Warenbestand
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)

	**Hinweis**: Die leeren Gebinde müssen zur Lagerung ins Gebindelager bewegt werden, dazu ist ein entsprechendes [Distribution Network](Wie_richte_ich_ein_Distribution_Network_fuer_Gebinde_ein) notwendig!
