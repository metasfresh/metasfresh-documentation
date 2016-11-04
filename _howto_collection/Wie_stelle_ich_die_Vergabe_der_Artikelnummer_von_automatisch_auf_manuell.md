---
title: Wie stelle ich die Vergabe der Artikelnummer von automatisch auf manuell?
layout: default
tags:
  - Systemkonfiguration
  - Nummernvergabe
lang: de
---

## Schritte zur Einrichtung

1. An metasfresh mit Rolle "System Administrator" anmelden
1. [Fenster "Fenster Verwaltung" öffnen](Wie_finde_und_öffne_ich_ein_Fenster) 
1. nach Name "Produkt" suchen
1. mit OK bestätigen
1. Aufgrund von vielen Treffern den mit Name "Produkt" anklicken
1. In Register "Register" wechseln
1. In Register "Feld" wechseln
1. Nach Eintrag "Artikelnummer" suchen
1. in die Einzelansicht wechseln
1. den Haken bei Feld **schreibgeschützt** entfernen
1. speichern

## Testen

1. neu an metasfresh mit einer beliebigen Rolle anmelden
1. Fenster Produkt öffnen
1. Neuen Datensatz erstellen
1. Pflichtfelder ausfüllen
1. Feld *Artikelnummer* beliebig füllen
1. speichern
	*Hinweis:* Falls Du das Feld *Artikelnummer* leer lässt wird beim speichern immer noch automatisch eine Nummer eingetragen, aber diese ist nun jederzeit änderbar.
