---
title: Wie bestimme ich die Provisionsbedingungen?
layout: default
tags:
  - Vertragsverwaltung
  - Provisionsverträge
  - Einrichtung
lang: de
sequence: 10
ref: commission_conditons_details
---

## Überblick
In den Provisionsbedingungen kannst Du die Höhe des Provisionsprozentsatzes bestimmen, der von der Basispunktzahl (Zeilensumme im Auftrag) abgeht, sowie für welche Geschäftspartnergruppe und/oder Produktkategorie eine Provision gewährt werden soll. Im Falle von <a href="Vertriebspartner_anlegen#vp-hierarchie" title="Vertriebspartner einander unterordnen">Vertriebspartnerhierarchien</a> kannst Du hier ebenfalls festlegen, ob die Provision der jeweiligen Vertriebspartner stets von der vollen Basispunktzahl abgezogen werden soll oder stufenweise jeweils von der Differenz aus Basispunktzahl und Provisionsprozentsatz des übergeordneten Vertriebspartners.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Einstellungen für Hierarchie-Provisionsverträge".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne den Einstellungseintrag im Feld **Name**.
1. Setze ein Häkchen bei **Provision von Basis abziehen**.
 >**Hinweis:** Im Falle von Vertriebspartnerhierarchien werden so die Provisionspunkte der unteren Ebenen auf Basis der (stufenweise verringerten) Differenz aus Basispunktzahl und Provisionspunkten der jeweils darüberliegenden Ebenen ermittelt.

1. Das Feld **Nachkommapräzision** bestimmt die Anzahl der Nachkommastellen, auf die beim Berechnen der Provisionspunkte gerundet wird.

### Provisionsprozentsatz und weitere Details
1. Gehe zur Registerkarte "Einstellungsdetail" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Lege eine **Reihenfolge** für die Provisionsdetails fest.
 >**Hinweis:** Je niedriger die laufende Nummer einer Zeile, desto höher ihr Vorrang beim Vorhandensein ähnlicher Provisionsdetails.

1. ***Optional:*** Wähle eine **Geschäftspartnergruppe** aus, für die Provision gewährt werden soll. Gib hierzu einen Teil der Bezeichnung der [Geschäftspartnergruppe](Neue_Geschaeftspartnergruppe) in das Feld ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. ***Optional:*** Wähle eine **Produktkategorie** aus, für die Provision gewährt werden soll. Gib hierzu einen Teil des Namens der [Produktkategorie](NeueProduktkategorie) in das Feld ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
 >**Hinweis:** Wird weder eine Geschäftspartnergruppe noch eine Produktkategorie angegeben, so werden die Provisionsdetails allgemein angewandt.

1. Trage in das Feld **% der Basispunkte** den Prozentsatz ein, der von der Basispunktzahl (Zeilensumme im Auftrag) für die Provision abgezogen werden soll.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Provisionsdetails zur Liste hinzuzufügen.

## Nächste Schritte
1. [Bestimme die Vertragsbedingungen für Provisionsverträge](Vertragsbedingungen_Provision_definieren).
1. [Erzeuge einen Provisionsvertrag für den Vertriebspartner](Provisionsvertrag_erzeugen).
