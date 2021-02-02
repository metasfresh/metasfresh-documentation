---
title: Wie erzeuge ich Bestellkontrollen?
layout: default
tags:
  - Verkauf
  - Bestellkontrollen
lang: de
sequence: 10
ref: automatic_order_checkup
---

## Überblick
Bestellkontrollen sind Listen, die zur kontrollierten Auftragsbearbeitung in der Beschaffung, Produktion und Kommissionierung dienen. Je nach Systemkonfiguration werden die Bestellkontrolllisten automatisch erstellt und an die jeweiligen Bearbeiter weitergeleitet, sobald ein Auftrag fertiggestellt wird. Für welche Abteilung eine Bestellkontrolle bestimmt ist, geht aus den [Plandaten](Produktplandaten) der beauftragten Produkte hervor. Darin wird außerdem festgelegt, ob ein bestellter Artikel vorerst eingekauft oder produziert werden muss, aus welchem [Lager](Neues_Lager_anlegen) die Produkte jeweils bezogen werden und ob sie bestimmten Arbeitsabläufen unterliegen.

metasfresh unterscheidet zwischen zwei Arten von Bestellkontrollen. Bestellkontrollen vom
- Typ "Bestellkontrolle" werden pro Lager erstellt, welches in den Produktplandaten angegeben wird, und enthalten alle in dem jeweiligen Lager aufbewahrten Produkte aus dem Auftrag.
- Typ "Bestellkontrolle (Spedition)" werden für das im Auftrag angegebene (Warenausgangs)lager erstellt und enthalten alle beauftragten Produkte, die nach ihrer Beschaffung bzw. Produktion für die Lieferung kommissioniert werden müssen.

Mithilfe von Bestellkontrollen kann sichergestellt werden, dass Aufträge für Beschaffungs- und Produktionsware termingerecht und in vollem Umfang bearbeitet werden.

| **Wichtiger Hinweis:** |
| :--- |
| Das Modul `C_BPartner.DisableOrderCheckup` muss für den Hauptgeschäftspartner des Auftrages deaktiviert (d.h. =`N`) sein. Dieser Wert ist standardmäßig in metasfresh gesetzt. |

## Schritte
1. [Aktiviere die automatischen Bestellkontrollen](Automatische_Bestellkontrollen_aktivieren). (Systemadministrator)
1. [Richte die Plandaten für die betreffenden Produkte entsprechend ein](Produktplandaten).
1. [Erfasse einen Auftrag mit Beschaffungs- bzw. Produktionsware](Auftrag_erfassen).
1. Die Bestellkontrolllisten werden automatisch erstellt und können unter "[Bestellkontrolle](Menu)" eingesehen werden.
 >**Hinweis:** Der "Verantwortliche Benutzer" (Druckempfänger) einer Bestellkontrolle ist standardmäßig der "Ressourcenverantwortliche" der jeweiligen Produktionsstätte.

### Anzahl der Druckstücke festlegen (Systemadministrator)
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) "Systemadministrator".
1. [Gehe ins Menü](Menu) und öffne das Fenster "Systemkonfigurator".
1. [Verwende die Filterfunktion](Filterfunktion) und suche über das Feld **Name** nach der Systemkonfiguration `de.metas.fresh.ordercheckup.Copies`.
1. Öffne den Systemkonfigurationseintrag.
1. Trage in das Feld **Suchschlüssel** die Anzahl der Kopien ein, die pro Bestellkontrolle insgesamt ausgedruckt werden sollen.
1. [metasfresh speichert automatisch](Speicheranzeige).
