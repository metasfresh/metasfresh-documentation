---
title: Wie erfasse ich einen Auftrag?
layout: default
tags:
  - Workflow
  - Verkauf
lang: de
sequence: 20
ref: salesorder_recording
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Aufträge".
1. [Lege einen neuen Auftrag an](Neuer_Datensatz_Fenster_Webui).
1. Gib im Feld **Auftraggeber** einen Teil des Kundennamens oder der Kundennummer ein und klicke auf eines der Ergebnisse.
 >**Hinweis 1:** Drücke die `LEERTASTE`, um alle verfügbaren [Kunden](Neuer_Geschaeftspartner_Kunde) zu sehen.<br><br>
 >**Hinweis 2:** Auswahl des Treffers mit Maus oder ![](assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).<br><br>
 >**Hinweis 3:** Wird der gewünschte Partner nicht angezeigt, kannst Du ihn per [Schnellerfassung](Neuer_Geschaeftspartner_Schnellerfassung) neu anlegen.

1. Wähle ein **Preissystem** aus, sofern der Kunde noch mit keinem [Preissystem verknüpft](Zuweisung_Preise_Partner) ist.
1. Das Feld **Datum** bestimmt den Zeitpunkt, an dem der Auftrag *erteilt* wurde.
1. Das Feld **Zugesagter Termin** bestimmt, wann die Leistung *erbracht* bzw. die Lieferung ausgeführt werden soll.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Zeilen hinzufügen
1. Gehe zur Registerkarte "Auftragsposition" unten auf der Seite und klicke auf ![](assets/Massen_Erfassung_Button.png), um die Auftragszeileneingabe zu öffnen.
 >**Hinweis:** Drücke `Alt` + `Q` / `⌥ alt` + `Q`

1. Gib in das Feld **Produkt** einen Teil des Produktnamens oder der Produktnummer ein und klicke auf eines der Ergebnisse.
 >**Hinweis 1:** Drücke die `LEERTASTE`, um alle verfügbaren [Produkte](NeuesProdukt) zu sehen.<br><br>
 >**Hinweis 2:** Auswahl des Treffers mit Maus oder ![](assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).

1. Gib eine **Menge** ein.
 >**Hinweis:** Wechsle in das Feld mit der Maus oder `Tab ↹`-Taste

1. Drücke `↵ Enter`, um die Zeile hinzuzufügen.
 >**Hinweis 1:** Wiederhole die Schritte 2 bis 4 so oft, bis Du alle Auftragszeilen erfasst hast.<br><br>
 >**Hinweis 2:** Zeigt der **No Price Conditions Indicator** am Ende einer Auftragszeile einen <span style="color:red">roten</span> Punkt, musst Du ein [Preiskonditionsschema anlegen](Preiskonditionen_in_metasfresh) und dieses dann [mit dem Kunden verknüpfen](Rabattschema_mit_GP_verknuepfen).

### Nächste Schritte
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. [Öffne die PDF-Vorschau](PDFVorschau).

## Beispiel
![](assets/auftrag.gif)
