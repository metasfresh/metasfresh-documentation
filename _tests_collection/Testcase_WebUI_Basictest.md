---
title: WebUI Basic Test
layout: default
tags:
  - WebUI
---


1. SuperUser System
1. Rolle Admin
1. Menü => New Auftrag
1. Auftraggeber: "Testkunde"
1. Add New
1. Produkt "Convenience Salat"
1. Done
1. Fertigstellen
1. Hamburger Menu => Print
 * Erwartung: Auftragsbestätigung wird angezeigt
 * Hintergrund: Tested ob der Jasper Server korrekt eingerichtet und erreichbar ist.
1. Hamburger Menu => Lieferdisposition
1. zeile markieren
1. Hamburger Menu => Auswahl liefern
 * Erwartung: Notifikation
 * Hintergrund: Tested ob Websockets, ActiveMQ und der Appserver korrekt funktionieren.
