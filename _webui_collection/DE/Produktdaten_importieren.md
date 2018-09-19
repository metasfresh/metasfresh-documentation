---
title: Wie importiere ich Produktdaten?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Produktdatenimport
lang: de
sequence: 20
ref: import_product_data
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_in_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel](Importformat_Beispiel_Produkt) für den Import von Produktdaten.
 >**Hinweis:** Für den Produktdatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import - Produkt* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. [Lege einen neuen Datenimporteintrag für Produktdaten an](Neuer_Datensatz_Fenster_Webui).
 >**Hinweis:** Nach der Erstellung kannst Du diesen Datenimporteintrag zukünftig jederzeit für weitere entsprechende Datenimporte wiederverwenden.

1. Wähle das [**Importformat**](Importformat_anlegen) aus, welches Du zuvor für den Produktdatenimport angelegt hast.

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Produktdaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Attachment entry** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Produktdaten zu importieren und das Overlay-Fenster zu schließen.

### Produktdaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Produkt". Hier findest Du alle importierten Produkteinträge.
1. Öffne den Eintrag des Produkts, dessen Daten Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Produkteintrag hier schreibgeschützt und Du findest die importierten Daten unter dem Menüpunkt "[Produkte](Menu)" wieder, wo Du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Produkteintrag unter "[Import Produkt](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die Produktdaten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Produktdaten manuell importieren
1. [Starte die Aktion](AktionStarten) "Produkte importieren". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Version Preisliste** eine Preislistenversion aus.
1. Klicke auf "Start", um die Produktdaten zu importieren und das Overlay-Fenster zu schließen.
1. Die importierten Produktdaten findest Du nun unter dem Menüpunkt "[Produkte](Menu)" wieder.

## Beispiel
![](assets/Produktdaten_importieren.gif)
