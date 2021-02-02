---
title: Wie lege ich ein neues Ausschreibungsthema an?
layout: default
tags:
  - Einkauf
  - Ausschreibungen
lang: de
sequence: 20
ref: create_rfq_topic
---

## Voraussetzungen
1. [Bestimme die Vertragsbedingungen für die Ausschreibung](Vertragsbedingungen_Ausschreibung_definieren).
1. [Erfasse jeweils eine Nachricht als E-Mail-Vorlage](Email-Vorlage_anlegen) für:
  - die Ausschreibungseinladung (mit Mengenmeldung),
  - die Ausschreibungseinladung (ohne Mengenmeldung),
  - die Ausschreibungszusage,
  - die Ausschreibungsabsage.

1. Vergewissere Dich, dass die benötigten [Druckformate für die jeweiligen E-Mail-Vorlagen](Druckformate_Ausschreibungen) vorhanden sind.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Ausschreibung Thema".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Öffne die "[Erweiterte Erfassung](Ansichten#erw-erfassung)" aus dem [Aktionsmenü](AktionStarten#aktionsmenue).
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

### Vertragsbedingungen festlegen
1. Benenne das Thema im Feld **Name**, z.B. mit der Bezeichnung des [Ausschreibungsproduktes](Produkt_fuer_Lieferantenvertrag).
1. Wähle im Feld **Ausschreibung Art** *Procurement* aus.
1. Stelle die **Vertragsbedingungen** für die Ausschreibung ein, z.B. [*Ausschreibung (RfQ)*](Vertragsbedingungen_Ausschreibung_definieren).

### E-Mail-Vorlagen auswählen

#### Ausschreibungseinladung (mit Mengenmeldung)
1. Wähle im Feld **RfQ Invitation mail text** eine E-Mail-Vorlage aus, die Informationen über die Ausschreibung *mit Mengenmeldung* enthält und als Einladung verschickt werden soll.
1. Wähle im Feld **RfQ Invitation Druck - Format** das [Druckformat für die Ausschreibungseinladung](Druckformate_Ausschreibungen#ausschreibungseinladung-mit-mengenmeldung) aus, z.B. *Information Ausschreibung*.

#### Ausschreibungseinladung (ohne Mengenmeldung)
1. Wähle im Feld **RfQ without Qty Invitation mail text** eine E-Mail-Vorlage aus, die Informationen über die Ausschreibung *ohne Mengenmeldung* enthält und als Einladung verschickt werden soll.
1. Wähle im Feld **RfQ without Qty Invitation Druck - Format** das [Druckformat für die Ausschreibungseinladung ohne Mengenmeldung](Druckformate_Ausschreibungen#ausschreibungseinladung-ohne-mengenmeldung) aus, z.B. *Information Ausschreibung ohne Mengenmeldung*.

#### Ausschreibungszusage
1. Wähle im Feld **RfQ win mail text** eine E-Mail-Vorlage aus, die als Ausschreibungszusage verschickt werden soll.
1. Wähle im Feld **RfQ Won Druck - Format** das [Druckformat für die Ausschreibungszusage](Druckformate_Ausschreibungen#ausschreibungszusage) aus, z.B. *Zusage Ausschreibung*.

#### Ausschreibungsabsage
1. Wähle im Feld **RfQ lost mail text** eine E-Mail-Vorlage aus, die als Ausschreibungsabsage verschickt werden soll.
1. Wähle im Feld **RfQ Lost Druck - Format** das [Druckformat für die Ausschreibungsabsage](Druckformate_Ausschreibungen#ausschreibungsabsage) aus, z.B. *Absage Ausschreibung*.

### Erweiterte Erfassung schließen
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Ausschreibungsteilnehmer hinzufügen
1. Gehe zur Registerkarte "Teilnehmer" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Gib in das Feld **Geschäftspartner** einen Teil des Namens oder der Nummer des [Lieferanten](Liefervertrag_erzeugen) ein, der an der Ausschreibung teilnimmt, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Der `Standort` wird automatisch eingetragen, kann jedoch manuell geändert werden.
1. Der `Lieferkontakt` wird automatisch eingetragen, kann jedoch manuell geändert werden. Stelle hier den [mit dem Geschäftspartner verknüpften Nutzer mit E-Mail-Adresse sowie Zugriff auf die "Mengenmeldung App" ein](Ausschreibung_Zugriff_Mengenmeldung_App).
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Geschäftspartner zur Teilnehmerliste hinzuzufügen.
 >**Hinweis:** Wiederhole diese Schritte, um weitere Teilnehmer hinzuzufügen.

## Nächste Schritte
- [Erstelle eine Ausschreibung](Ausschreibung_erstellen).
