---
title: Wie erstelle ich eine Ausschreibung?
layout: default
tags:
  - Workflow
  - Einkauf
  - Ausschreibungen
lang: de
sequence: 10
ref: create_request_for_quotation
---

## Überblick
Eine Ausschreibung ist eine schriftliche Aufforderung zur Abgabe von Angeboten für die in der Ausschreibung genannten Lieferungen oder Dienstleistungen. Um eine Ausschreibung über metasfresh zu veröffentlichen, müssen folgende Voraussetzungen erfüllt sein:

## Voraussetzungen
1. [Erfasse die Lieferanten, die an der Ausschreibung teilnehmen sollen](Neuer_Geschaeftspartner_Lieferant).
1. [Stelle sicher, dass jeder Ausschreibungsteilnehmer (Lieferant) mit einem Nutzer verknüpft ist, der sowohl eine **E-Mail-Adresse** besitzt als auch **Zugriff auf die "Mengenmeldung App"** hat](Ausschreibung_Zugriff_Mengenmeldung_App).
1. [Die auszuschreibenden Produkte müssen für Lieferantenverträge freigegeben werden](Produkt_fuer_Lieferantenvertrag).
1. [Schließe einen Liefervertrag mit einem geeigneten Lieferanten für das Ausschreibungsprodukt](Liefervertrag_erzeugen).
1. [Bestimme die Vertragsbedingungen für Ausschreibungen](Vertragsbedingungen_Ausschreibung_definieren).
1. [Lege ein Ausschreibungsthema an](Ausschreibungsthema_anlegen).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Ausschreibung".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Wähle im Feld **Ausschreibung Thema** das [Thema der Ausschreibung](Ausschreibungsthema_anlegen) aus.
1. Benenne die Ausschreibung im Feld **Name**.

### Ausschreibungszeitraum festlegen
1. Stelle im Feld **Beginn** (links) das Datum und die Uhrzeit für den Ausschreibungsbeginn ein.
1. Stelle im Feld **Ende** (links) das Datum und die Uhrzeit für das Ausschreibungsende ein.
1. Stelle im Feld **Datum Antwort** den Zeitpunkt ein, an dem die Ausschreibungsantwort erstellt und versandt werden soll.

### Arbeitszeitraum festlegen
1. Stelle im Feld **Beginn** (rechts) das Datum und die Uhrzeit ein, zu dem die Arbeit (voraussichtlich) aufgenommen werden kann.
1. Stelle im Feld **Ende** (rechts) das Datum und die Uhrzeit ein, zu dem die Arbeit (voraussichtlich) abgeschlossen werden kann.

### Lieferprodukt hinzufügen
1. Gehe zur Registerkarte "Position" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Gib in das Feld **Lieferprodukt** einen Teil des Namens oder der Nummer des [Ausschreibungsproduktes](Produkt_fuer_Lieferantenvertrag) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Gib eine **Menge** ein, sofern gewünscht.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und das Lieferprodukt zur Liste hinzuzufügen.
 >**Hinweis:** Wiederhole diese Schritte, um weitere Lieferprodukte hinzuzufügen.

1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).

| **Hinweis:** |
| :--- |
| Nach der Fertigstellung der Ausschreibung werden die Ausschreibungsantworten pro Teilnehmer automatisch im Status *Entwurf* vorbereitet und können unter "[Ausschreibung Antwort](Menu)" eingesehen und bearbeitet werden. Über die [verknüpften Belege](SpringezuBelegen) kannst Du aus dem Ausschreibungsbeleg auch ***direkt*** zu den Antworten springen (unter BESCHAFFUNG in der Sidebar). |

### Ausschreibung veröffentlichen
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Anlegen & Einladen". Es öffnet sich ein Overlay-Fenster.
1. Setze ein Häkchen bei **Send RfQ Invitation to Vendors**, um die Ausschreibungseinladung an die Teilnehmer zu versenden.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und die Ausschreibung zu veröffentlichen.
