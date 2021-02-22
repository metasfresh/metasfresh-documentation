---
title: Wie erfasse ich meine Arbeitsaufwände für Produktionsaufträge?
layout: default
tags:
  - Kun­den­ser­vice
  - Reparaturen
lang: de
sequence: 30
ref: manufacturing_order_record_work
---

## Voraussetzungen (für Reparaturauftäge)
1. [Empfange re­pa­ra­tur­be­dürf­tige Retouren über die Serviceannahme und lege einen Vorgang an](Reparaturen_Service_Annahme).
1. [Starte ein Reparaturprojekt und erstelle einen Reparaturauftrag](Reparaturprojekt_starten).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produktionsaufträge".
1. [Verwende die Filterfunktion](Filterfunktion), um Dir bei der Suche nach dem gewünschten Produktionsauftrag zu helfen, z.B. durch Filtern nach der **Belegart** *Service/Repair Order* und dem **Planstatus** *Geplant*.
1. Öffne den Eintrag des betreffenden Produktionsauftrages.

### Produzieren (für Reparaturauftäge)
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Produzieren". Es öffnet sich ein Overlay-Fenster, das Produktionsfenster.
1. <a href="ProduktionFertigstellung#produktionsverbrauch" title="Verbrauchte Produktionsbestandteile erfassen">Erfasse die bei der Reparatur verbrauchten Produktionsbestandteile</a>.

### Arbeitsaufwand erfassen
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Arbeitsaufwand erfassen". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Manufacturing Order Activity** die ausgeführte Tätigkeit, für die Du den Aufwand erfassen möchtest.
1. Gib in das Feld **Duration** die Dauer der Tätigkeit in der entsprechenden **Duration Unit** (*Zeiteinheit*) an.
1. Klicke auf "Start", um den Aufwand zu speichern und das Overlay-Fenster zu schließen.
1. Gehe zur Registerkarte "Arbeitsablauf" unten auf der Seite. Hier kannst Du alle erfassten Arbeitsaufwände einsehen.

### Produktionsauftrag schließen
Wenn alle Aufgaben abgeschlossen und Aufwände erfasst wurden, kann der Produktionsauftrag geschlossen werden.

1. Öffne das [Belegverarbeitungsmenü](AktionStarten#belegverarbeitung) (`Alt` + `I` / `⌥ alt` + `I`) und klicke auf *Schließen*.
1. Sofern der [Produktionsauftrag mit einem Reparaturprojekt verknüpft ist](Reparaturprojekt_starten), werden nun die Aufwandsdaten an den Projekteintrag zur Abrechnung übermittelt und die jeweilige Projektaufgabe erhält den Status *Abgeschlossen*.

### Produktionsauftrag wieder öffnen (optional)
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Wieder öffnen", um den geschlossenen Produktionsauftrag in den Belegstatus *Fertiggestellt* zurückzuversetzen.
1. Nun kannst Du Daten korrigieren, z.B. Arbeitsaufwände.
