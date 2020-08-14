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
1. ***Optional:*** Stelle unten rechts im Feld **Sektion** die gewünschte [Organisation](Org_Neue_Organisation_anlegen) ein. Gib dazu einen Teil des Organisationsnamens ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Gib in das Feld **Auftraggeber** einen Teil des Namens oder der Nummer des [Kunden](Neuer_Geschaeftspartner_Kunde) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
 >**Hinweis:** Wird der gewünschte Partner nicht angezeigt, kannst Du ihn per [Schnellerfassung](Neuer_Geschaeftspartner_Schnellerfassung) neu anlegen.

1. Wähle ein [**Preissystem**](Preissystem_anlegen) aus, sofern der Kunde noch mit keinem [Preissystem verknüpft](Zuweisung_Preise_Partner) ist.
1. Das Feld **Datum** bestimmt den Zeitpunkt, an dem der Auftrag *erteilt* wurde.
1. Das Feld **Zugesagter Termin** bestimmt, wann die Leistung *erbracht* bzw. die Lieferung ausgeführt werden soll.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Auftragszeilen hinzufügen
1. Gehe zur Registerkarte "Auftragsposition" unten auf der Seite und klicke auf !["Massen Erfassung"](assets/Massen_Erfassung_Button.png), um die Auftragszeileneingabe zu öffnen.
 >**Hinweis:** Drücke `Alt` + `Q` / `⌥ alt` + `Q`.

1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
 >**Hinweis:** Verwende die [Liste der Produktvorschläge](Produktvorschlaege_Auftrag_Bestellung), um alle verfügbaren Produkte auf der aktuellen Preisliste zu sehen und ggf. eine Auswahl davon zum Auftrag hinzuzufügen.

1. Gib eine **Menge** ein.
 >**Hinweis:** Wechsle in das Feld mit der Maus oder `Tab ↹`-Taste.

1. Drücke `↵ Enter`, um die Zeile hinzuzufügen.
 >**Hinweis 1:** Wiederhole die Schritte 2 bis 4 so oft, bis Du alle Auftragszeilen erfasst hast.<br><br>
 >**Hinweis 2:** Zeigt der **No Price Conditions Indicator** am Ende einer Auftragszeile einen **<span style="color:#e85667">roten</span>** Punkt, musst Du ein [Preiskonditionsschema anlegen](Preiskonditionen_in_metasfresh) und dieses dann [mit dem Kunden verknüpfen](Rabattschema_mit_GP_verknuepfen).

### Auftrag fertigstellen
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. [Öffne die PDF-Vorschau](PDFVorschau).

## Nächste Schritte
- [Erstelle einen Lieferschein](Zu_Auftrag_Lieferschein_erstellen) zu dem Auftrag.

## Beispiel
<kbd><img src="assets/auftrag.gif" alt="GIF: Auftrag erfassen"></kbd>
