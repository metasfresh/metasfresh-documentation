---
title: Wie lege ich ein Gruppierungsprodukt an?
layout: default
tags:
  - Stammdaten
  - Produkt
lang: de
sequence: 60
ref: add_grouping_product
---

## Übersicht
Ein Gruppierungsprodukt ist ein technisches Hilfsmittelprodukt, welches bei der [Erstellung von Stücklisten aufgrund eines Angebots](Stueckliste_bei_Auftragsgenerierung) dazu dient, die nachfolgenden Auftragszeilen als Angebotsgruppen auszuweisen, damit diese anschließend mittels der [automatischen Kompensationsgruppierung](Kompensationsgruppen_automatisch_erstellen) zu einem neuen Verkaufsprodukt mit Stückliste vereint werden können.

Grundsätzlich wird ein Gruppierungsprodukt wie jedes andere normale [Produkt](NeuesProdukt) auch angelegt, unter Berücksichtigung der folgenden anwendungsspezifischen Konfiguration:

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkte".
1. [Lege ein neues Produkt an](Neuer_Datensatz_Fenster_Webui).
1. Trage in das Feld **Name** einen sinnvollen Namen ein, z.B. "Gruppierungsprodukt".
1. Wähle dieselbe **Produktkategorie** aus wie die der Gruppierungsprodukte (siehe [Schritt 1.1 dieser Anleitung](Stueckliste_bei_Auftragsgenerierung_Einrichtung)).
1. [Füge das Produkt einer Preisliste hinzu](ProduktPreis).
 >**Hinweis:** Das Gruppierungsprodukt muss mit **derselben Preisliste** verknüpft sein wie der Auftrag, in dem es zum Einsatz kommen soll.

1. Öffne die "[Erweiterte Erfassung](Ansichten)" aus dem [Aktionsmenü](AktionStarten).
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

1. Scrolle runter bis zum Kontrollkästchen **Ist Angebotsgruppe** und setze dort ein Häkchen.
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.
1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte (optional)
- [Nutze das Gruppierungsprodukt zur Erstellung von Stücklisten bei der Auftragsgenerierung aus einem Angebot](Stueckliste_bei_Auftragsgenerierung).

## Beispiel
![](assets/Gruppierungsprodukt_anlegen.gif)
