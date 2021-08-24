---
title: Wie erstelle ich einen Kostenvoranschlag für erbrachte Reparaturleistungen?
layout: default
tags:
  - Kun­den­ser­vice
  - Reparaturen
lang: de
sequence: 40
ref: quotation_estimate_repair_services
---

## Voraussetzungen
1. [Empfange re­pa­ra­tur­be­dürf­tige Retouren über die Serviceannahme und lege einen Vorgang an](Reparaturen_Service_Annahme).
1. [Starte ein Reparaturprojekt und erstelle einen Reparaturauftrag](Reparaturprojekt_starten).
1. [Erfasse Deine Arbeitsaufwände für den Reparaturauftrag](Produktionsauftrag_Aufwand_erfassen).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Service/Reparatur Projekt".
1. [Verwende die Filterfunktion](Filterfunktion), um Dir bei der Suche nach dem gewünschten Reparaturprojekt zu helfen und öffne den Eintrag.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Angebot erstellen". Es öffnet sich ein neuer Browser-Tab mit dem Kostenvoranschlag.
 >**Hinweis:** Ein Kostenvoranschlag ist ein [Auftrag](Auftrag_erfassen) mit der Belegart "Kostenvoranschlag".

1. Sofern im Reparaturauftrag ein <a href="Produktionsauftrag_Aufwand_erfassen#dienstleistungsaufwand" title="Arbeitsaufwände für Reparaturaufträge erfassen">Dienstleistungsaufwand</a> erfasst wurde, wurden die jeweiligen Auftragszeilen dementsprechend in [Kompensationsgruppen](Kompensationsgruppen_manuell_erstellen) zusammengefasst.
1. Sofern im Reparaturauftrag eine <a href="Produktionsauftrag_Aufwand_erfassen#dienstleistungsaufwand" title="Arbeitsaufwände für Reparaturaufträge erfassen">Zusammenfassung</a> des Dienstleistungsaufwandes erfasst wurde, wird diese unterhalb des [Dienstleistungsproduktes](Dienstleistungsprodukt_anlegen) auf den Beleg gedruckt als Information für den Kunden.

### Auftragszeilen drucken oder verbergen
Auftragszeilen für Zubehörteile werden standardmäßig nicht auf den Beleg gedruckt. Um dies zu ändern, gehe wie folgt vor:
1. Öffne die "[Erweiterte Erfassung](AdvancedEditTab_Öffnen)" der Auftragszeile, welche auf den Beleg gedruckt bzw. verborgen werden soll.
1. Scrolle runter bis zum Kontrollkästchen **Beim Drucken ausblenden** und setze bzw. entferne dort das Häkchen.
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.
 >**Hinweis:** Bitte beachte, dass die Summe der gedruckten Auftragszeilen von dem angezeigten Gesamtbetrag auf dem Beleg abweichen kann, wenn die verborgenen Zeilen einen Wert ungleich 0 aufweisen.

### Angebot fertigstellen und Auftrag erzeugen
1. [Stelle den Kostenvoranschlag fertig](BelegverarbeitungFertigstellen).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Auftrag aus Angebot", um aus dem Kostenvoranschlag einen Auftrag zu machen. Es öffnet sich ein Overlay-Fenster.
1. Setze das Feld **Belegart** auf *Standardauftrag*.
1. ***Optional:*** Setze ein Häkchen bei **Auftrag abschließen**, wenn der Auftrag nach der Erstellung automatisch fertiggestellt werden soll.
1. Klicke auf "Start", um zu bestätigen und das Overlay-Fenster zu schließen. Der Auftrag öffnet sich in demselben Tab.
 >**Hinweis:** Den neu erstellten Auftrag findest Du unter dem Menüpunkt "[Aufträge](Menu)" wieder.

### Auftrag fertigstellen (optional)
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. [Öffne die PDF-Vorschau](PDFVorschau).
