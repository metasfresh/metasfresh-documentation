---
title: Wie exportiere ich Buchungsdaten? (DATEV-Export)
layout: default
tags:
  - Buchhaltung
  - Buchungsdatenexport (DATEV)
lang: de
sequence: 10
ref: datev_export_minimum_requirements
---

<!--
Siehe auch: https://forum.metasfresh.org/t/from-new-system-to-accounting-tax-consultant/1663 (From new system to accounting / tax consultant)
-->

## Überblick
Mit metasfresh kannst Du Buchungen und Stammdaten (Sachkonten/Personenkonten) über die DATEV-Schnittstelle ganz einfach exportieren. Bei Einsatz beider Dienste in einem Unternehmen wird durch die automatische Verbuchung von Belegen und den bequemen Export sämtlicher Buchungsdaten sowie Stammdaten zu [Kunden](Neuer_Geschaeftspartner_Kunde) (Debitoren) und [Lieferanten](Neuer_Geschaeftspartner_Lieferant) (Kreditoren) nach DATEV eine doppelte Datenpflege vermieden. Auf diese Weise geschieht der Austausch zwischen Deinem Büro und dem Steuerberater annähernd papierlos und mit geringstem manuellen Aufwand, auch bei hohem täglichen Umlauf an ausgehenden und eingehenden Rechnungen.

Im Folgenden werden die Mindestanforderungen und notwendigen Schritte beschrieben, um von einem frisch aufgesetzten metasfresh-System mit ursprünglicher Datenbank über einen Auftrag oder eine Bestellung zu einem Export von Buchungsdaten zu gelangen.

## Voraussetzungen
1. [Richte eine neue Organisation ein](Org_Neue_Organisation_anlegen) oder verwende die standardmäßig enthaltene "metasfresh AG".
1. [Erfasse eine Bankverbindung (IBAN)](Ersteinrichtungsassistent).
1. Steuerkategorien stehen standardmäßig zur Verfügung und müssen nur bei Bedarf manuell angelegt werden.
1. Zahlungsbedingungen stehen standardmäßig zur Verfügung und müssen nur bei Bedarf manuell angelegt werden.
1. [Lege ein Preissystem an](Wie_lege_ich_ein_Preissystem_an) samt [Preisliste](Wie_lege_ich_eine_Preisliste_an) (je nach Bedarf für Verkauf und/oder Einkauf) und [Preislistenversion](Wie_lege_ich_eine_Preislistenversion_an) (siehe auch "[Preise definieren](Preise_definieren)").
1. Erfasse einen neuen [Kunden](Neuer_Geschaeftspartner_Kunde) und/oder [Lieferanten](Neuer_Geschaeftspartner_Lieferant) samt Bankverbindung (IBAN).
1. Produktkategorien stehen standardmäßig zur Verfügung und müssen nur bei Bedarf [manuell angelegt werden](NeueProduktkategorie).
1. [Erfasse ein neues Produkt](NeuesProdukt) samt [Einkaufs- und/oder Verkaufspreis](ProduktPreis) (je nach Bedarf).

## Schritte

### Auftrag und/oder Bestellung erfassen
- [Folge dieser Anleitung](Workflow_Auftrag_Bis_Rechnung) zur Erstellung eines Auftrags samt Lieferschein und Rechnung.
- [Folge dieser Anleitung](Workflow_Bestellung_Bis_Rechnung) zur Erstellung einer Bestellung samt Wareneingang und Rechnung.

Nach jeder Rechnungserstellung werden Buchungen vorgenommen, die Du unter dem Menüpunkt "[Buchungen](Menu)" einsehen kannst. Über die [verknüpften Belege](SpringezuBelegen) der fertiggestellten Rechnung kannst Du auch ***direkt*** zu den jeweiligen Buchungen springen (unter FINANZEN und dann "Buchführungs-Details" in der Sidebar).

### Buchungen exportieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Buchungen Export".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Stelle über die Felder **Buchungsdatum von** und **Buchungsdatum bis** den Zeitraum ein, in den die zu exportierenden Buchungen fallen.
1. ***Optional:*** Setze ein Häkchen bei **Bereits exportierte ausschließen**. Anderenfalls werden Buchungen aus vorherigen Buchungsexporten für den gleichen Zeitraum in diesen Eintrag übernommen und erneut exportiert.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Erstelle Zeilen zum Export". Es werden alle relevanten Buchungszeilen in die Registerkarte "Lines" des Exporteintrages übernommen.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "In Datei speichern". Es öffnet sich ein Overlay-Fenster.
1. Wähle das **DATEV Export Format** *default* aus.
1. Klicke auf "Start", um die Exportdatei zu erzeugen und das Overlay-Fenster zu schließen. Es öffnet sich das "Speichern unter"-Dialogfenster.
1. Übernimm den vorgeschlagenen Dateinamen oder vergib einen neuen und speichere die Datei in einem Verzeichnis Deiner Wahl.
1. Bewege Dich in dieses Verzeichnis und öffne die Datei in einem Tabellenkalkulationsprogramm wie z.B. *Microsoft Excel*.
