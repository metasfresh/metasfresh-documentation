---
title: Wie weise ich logische und physische Druckerschächte zu?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Drucker & PDF-Routing
lang: de
sequence: 50
ref: allocate_logical_and_physical_printer_trays
---

## Voraussetzungen
1. [Konfiguriere einen logischen Drucker mit Druckerschächten](Logischer_Drucker_Einrichtung_WebUI).
1. [Konfiguriere einen PDF/physischen Drucker mit Druckerschächten](PDF_Drucker_Konfiguration_WebUI).
1. [Ordnen die logischen und physischen Drucker einander zu](Zuordnung_logische_und_physische_Drucker).

## Schritte

### Konfigurierte Druckerzuordnung wählen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Drucker-Schacht-Zuordnung".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Wähle im Feld **Printer Matching Config** eine [Druckerzuordnungskonfiguration](Zuordnung_logische_und_physische_Drucker) (logisch/physisch) aus.
1. Wähle einen [**Logischen Drucker**](Logischer_Drucker_Einrichtung_WebUI) aus.
1. Wähle einen [**Hardware-Drucker**](PDF_Drucker_Konfiguration_WebUI) aus.

### Logische und physische Druckerschächte einander zuordnen
1. Gehe zur Registerkarte "Schacht-Zuordnung" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle einen **Logischen Schacht** aus.
1. Wähle einen **Hardware-Schacht** aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Eintrag für die Druckerschachtzuordnung zur Liste hinzuzufügen.
    >**Hinweis:** Wiederhole die obigen Schritte, um weitere Einträge in die Liste aufzunehmen.

## Nächste Schritte
- [Teste die Druckerkonfigurationen mit einem Testdruck](PDF_Drucker_Einrichtung_Guide#testdruck).
