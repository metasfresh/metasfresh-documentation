---
title: Wie lege ich den zugesagten Termin in einem Auftrag automatisch auf eine bestimmte Anzahl Tage nach dem Auftragsdatum? (Systemadministrator)
layout: default
tags:
  - Workflow
  - Verkauf
  - Einrichtung
lang: de
sequence: 10
ref: salesorder_sysconfig_promised_date
---

## Überblick
In metasfresh ist es standardmäßig eingerichtet, dass bei der Auftragserfassung der zugesagte Termin mit dem Auftragsdatum übereinstimmt. Sollten die Daten voneinander abweichen, kann dies nachträglich manuell geändert werden. Ist allerdings von vornherein bekannt, dass der zugesagte Termin immer eine Mindestanzahl Tage nach dem Auftragsdatum liegen soll, kann die Standardeinstellung von einem Systemadministrator entsprechend angepasst werden. Gehe hierzu wie folgt vor:

## Schritte
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) "Systemadministrator".
1. [Gehe ins Menü](Menu) und öffne das Fenster "Systemkonfigurator".
1. [Verwende die Filterfunktion](Filterfunktion) und suche nach der Systemkonfiguration mit dem **Namen** `de.metas.order.DatePromisedOffsetDays`.
1. Öffne den Systemkonfigurationseintrag.
1. Trage in das Feld **Suchschlüssel** die Anzahl Tage ein, um die der zugesagte Termin in Abhängigkeit des Auftragsdatums verschoben werden soll.
1. [metasfresh speichert automatisch](Speicheranzeige). Die Änderungen sind ab sofort aktiv.
