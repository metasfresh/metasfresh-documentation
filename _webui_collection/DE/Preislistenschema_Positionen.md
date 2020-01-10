---
title: Wie füge ich einem Preisschema Regeln hinzu?
layout: default
tags:
  - Preisgestaltung
  - Preise
  - Preisschemata (Produktpreise kopieren)
lang: de
sequence: 40
ref: price_list_schema_lines
---

## Überblick
Ein Preisschema in metasfresh kann dazu verwendet werden, bestehende [Produktpreise von einer Preislistenversion in eine andere zu kopieren](Preise_von_Preislistenversion_kopieren) oder auch [verschiedene kundenspezifische Preislisten auf einen Schlag mit neuen Preisen zu aktualisieren](Abgeleitete_PLV_aktualisieren). In dem Preisschema kannst Du mittels Regeln definieren, welche Produkte betroffen sind, für welche Produktkategorie und/oder welchen Geschäftspartner das Schema gelten soll und ob die Standardpreise um einen Aufschlag erhöht werden sollen.

## Voraussetzungen
- [Lege ein Preisschema an](Preislistenschema_anlegen).

## Schritte

### Schemapositionen hinzufügen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Preislisten-Schema Position".
1. [Lege einen neuen Eintrag an](Neuer_Datensatz_Fenster_Webui).
1. Gib im Feld **Rabatt Schema** einen Teil des Namens des [Preislistenschemas](Preislistenschema_anlegen) ein, dem die Schemaposition zugeordnet werden soll, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Bei mehreren Positionen für dasselbe Schema kannst Du deren **Reihenfolge** bestimmen.
 >**Hinweis:** Die niedrigste Zahl kommt zuerst.

### Regeln definieren

| **Hinweis:** |
| :--- |
| Die folgenden Angaben sind alle ***optional*** und beliebig miteinander kombinierbar. |

1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) deiner Wahl ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle eine [**Produktkategorie**](NeueProduktkategorie) aus.
1. Gib im Feld **Geschäftspartner** einen Teil des Namens oder der Nummer des [Geschäftspartners](Neuer_Geschaeftspartner) deiner Wahl ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle eine **Steuerkategorie** aus.
1. Trage einen **Aufschlag auf Standardpreis** ein oder belasse ihn bei *0,00*.
1. Das Feld **Rundung Standardpreis** bestimmt, wie viele Nachkommastellen bei der Preisberechnung berücksichtigt werden.
1. Wähle eine **Ziel Steuerkategorie** aus.
 >**Hinweis:** Dies wird die Steuerkategorie der neuen Produktpreise sein.

1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte
- [Übertrage Preise und Produkte aus einer Preislistenversion in eine andere](Preise_von_Preislistenversion_kopieren).
- [Aktualisiere von Basispreislisten abgeleitete Kundenpreislisten](Abgeleitete_PLV_aktualisieren).

| Hinweis zu "[Produktpreise kopieren](Preise_von_Preislistenversion_kopieren)": |
| :--- |
| Damit Produktpreise kopiert werden können, muss das in der selektierten Preislistenversion eingestellte Preisschema **mindestens eine Schemaposition** enthalten. Allerdings ist es nicht unbedingt nötig, dass darin bestimmte Regeln definiert werden, wie z.B. Produkt, Geschäftspartner oder Aufschlag.<br> Ist es dennoch der Fall, dass Regeln definiert wurden und dieses Preisschema wird zum Kopieren von Produktpreisen eingesetzt, werden die Regeln automatisch auf alle betroffenen Produkte angewandt. |
