---
title: Wie lege ich die Provisionsverteilung sowie weitere Provisionsdetails fest?
layout: default
tags:
  - Workflow
  - Vertragsverwaltung
  - Provisionsverträge
  - Einrichtung
lang: de
sequence: 10
ref: commission_contract_details
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Einstellungen für Hierarchie-Provisionsverträge".
1. [Lege einen neuen Eintrag an](Neuer_Datensatz_Fenster_Webui).
1. Benenne den Einstellungseintrag im Feld **Name**.
1. Setze ein Häkchen bei **Provision von Basis abziehen**.
 >**Hinweis:** Im Falle von Vertriebspartnerhierarchien werden so die Provisionspunkte der unteren Ebenen auf Basis der Differenz aus Basispunktzahl und Provisionspunkten der jeweils darüberliegenden Ebenen ermittelt.

1. Das Feld **Nachkommapräzision** bestimmt die Anzahl der Nachkommastellen der Provisionspunkte.

### Provisionsanteile und -details
1. Gehe zur Registerkarte "Einstellungsdetail" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Lege eine **Reihenfolge** für die Provisionsdetails fest.
 >**Hinweis:** Je niedriger die Laufnummer einer Zeile, desto höher ihr Vorrang bei entscheidungsnotwendingen Anwendungsfällen ähnlicher Provisionsdetails.

1. ***Optional:*** Wähle eine **Geschäftspartnergruppe** aus, für die Provision gewährt werden soll. Gib hierzu einen Teil des Namens der Geschäftspartnergruppe in das Feld ein und klicke auf eines der Ergebnisse aus der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
1. ***Optional:*** Wähle eine **Produktkategorie** aus, für die Provision gewährt werden soll. Gib hierzu einen Teil des Namens der Produktkategorie in das Feld ein und klicke auf eines der Ergebnisse aus der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
 >**Hinweis:** Wird weder eine Geschäftspartnergruppe noch eine Produktkategorie angegeben, so werden die Provisionsdetails allgemein angewandt.

1. Trage in das Feld **% der Basispunkte** den prozentualen Anteil ein, der von der Basispunktzahl (Zeilensumme im Auftrag) für die Provision abgezogen werden soll.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Provisionsdetails zur Liste hinzuzufügen.

## Nächste Schritte
1. [Definiere die Vertragsbedingungen für Provisionsverträge](Vertragsbedingungen_Provision_definieren).
1. [Erzeuge einen Provisionsvertrag für den Vertriebspartner](Provisionsvertrag_erzeugen).
