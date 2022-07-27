---
title: Wie richte ich den Zugriff auf die Verwaltungsfunktionen für Datensatzberechtigungen ein? (Systemadministrator)
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Nutzer und Rollen
  - Zugriffsberechtigungen verwalten
lang: de
sequence: 20
ref: record_permissions_setup
---

## Überblick
In metasfresh kann man neben den allgemeinen Zugriffsberechtigungen auf Fenster und Funktionen zusätzlich innerhalb jeder [Benutzerrolle](NeueBenutzerrolle) auch die Verwaltungsfunktionen für den Zugriff auf einzelne Datensätze ("Zugriff gewähren" und "Zugriff entziehen") flexibel und individuell konfigurieren.

Um diese Zugriffsverwaltungsfunktionen freizuschalten, gehe wie folgt vor:

## Schritte
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) "Systemadministrator".
1. [Gehe ins Menü](Menu) und öffne das Fenster "Rolle - Verwaltung".
1. Öffne den Eintrag einer bestehenden [Benutzerrolle](Menu) bzw. [lege eine neue an](NeueBenutzerrolle).
1. Gehe zur Registerkarte "Role Record Access Config" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Art** des Datensatzes aus, für die es möglich sein soll, Benutzerberechtigungen zu verwalten, z.B. *Table* (Tabelle) oder *Business Partner Hierarchy* (Geschäftspartnerhierarchie).
    - **Bei Auswahl "Art: *Table*":** Gib in das Feld **DB-Tabelle** einen Teil des Namens der Datenbanktabelle ein, für die Du die Zugriffsverwaltungsfunktionen freischalten möchtest, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>, z.B. *Geschäftspartner* oder *Produkt*.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Datensatzberechtigung zur Liste hinzuzufügen.
    >**Hinweis:** Wiederhole die Schritte 4 bis 6, um weitere Berechtigungseinträge hinzuzufügen.

1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte
- [Gewähre oder entziehe Nutzern Datenzugriff](Zugriffsberechtigung_Nutzer_verwalten).
