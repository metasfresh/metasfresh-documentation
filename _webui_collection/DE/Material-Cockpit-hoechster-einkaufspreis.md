---
title: Wie kann ich die höchsten Einkaufspreise für einen bestimmten Zeitraum einsehen? (Systemadministrator)
layout: default
tags:
  - Stammdaten
  - Lagerverwaltung
  - Material Cockpit / Handelsbord
lang: de
sequence: 20
ref: material-cockpit-highest-purchase-price
---

## Überblick
metasfresh bietet über das [Material Cockpit](Material-Cockpit) die Möglichkeit, u.a. den höchsten Einkaufspreis für einen bestimmten Zeitraum in der Vergangenheit, ausgehend vom aktuellen Tag, zu ermitteln. Um diese Funktion nutzen zu können, sind **Administratorrechte** notwendig, um die erforderlichen Systemkonfigurationen zur Berechnung und Anzeige der gewünschten Daten zu aktivieren. Zu diesen Systemkonfigurationen zählen die folgenden:
- `de.metas.ui.web.material.cockpit.rowfactory.HighPriceProvider.isActive`
    - Durch Aktivierung dieser Konfiguration wird der [Listenansicht](Ansichten#listenansicht) des Material Cockpits eine Spalte mit dem Namen "Höchster EP" (EP=Einkaufspreis) hinzugefügt.
- `de.metas.ui.web.material.cockpit.field.HighestPurchasePrice_AtDate.LastDays`
    - Mittels dieser Konfiguration kann die Zeitspanne, d.h. die Anzahl der vergangenen Tage, festgelegt werden, die zur Ermittlung des letzten höchsten Einkaufspreises ausgehend vom aktuellen Tag herangezogen wird.
- `de.metas.ui.web.material.cockpit.field.HighestPurchasePrice_AtDate.CurrencyCode`
    - Mittels dieser Konfiguration kann die Währung festgelegt werden, in der der höchste Einkaufspreis angezeigt werden soll unter Berücksichtigung des Umrechnungskurses im Falle unterschiedlicher Währungen.

Damit diese Funktion zuverlässig und effizient arbeitet, werden die **Daten zwischengespeichert** und jede Nacht automatisch inkrementell aktualisiert, d.h. nur Produkte und Termindaten werden aktualisiert. Die zwischengespeicherten Daten enthalten den höchsten Preis für jedes Produkt an jedem Tag in der festgelegten Währung. Der Cache kann auch [manuell aktualisiert oder komplett neu aufgebaut](#cache-aktualisieren-neu-aufbauen) werden, z.B. nach einer Anpassung des Umrechnungskurses.

## Schritte

### Systemkonfigurationen aktivieren
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) "Systemadministrator".
1. [Gehe ins Menü](Menu) und öffne das Fenster "Systemkonfigurator".
1. [Verwende die Filterfunktion](Filterfunktion) und suche über das Feld **Name** nach der Systemkonfiguration (siehe Überblick oben).
1. Öffne den Systemkonfigurationseintrag.
    >**Hinweis:** Stelle sicher, dass der Eintrag, den du einschalten möchtest (siehe folgenden Schritt), auch [aktiviert ist](Datensatz_aktivieren).

1. Trage in das Feld **Suchschlüssel** je nach Systemkonfigurationseintrag folgende Werte ein:
    - zum **Einschalten** der Systemkonfiguration trage `Y` ein und bestätige mit `↵ Enter`. Um sie auszuschalten, trage `N` ein.
    - um die **Anzahl der Tage** für die Ermittlung des letzten höchsten Einkaufspreises festzulegen, trage eine Zahl ein (z.B. `7`) und bestätige mit `↵ Enter`.
1. [metasfresh speichert automatisch](Speicheranzeige).

### <a name="cache-aktualisieren-neu-aufbauen">Cache manuell aktualisieren oder neu aufbauen</a>

| **Wichtiger Hinweis:** |
| :--- |
| Wenn die Umrechnungskurse der Einkaufspreise angepasst wurden, muss der **gesamte Cache neu aufgebaut** werden, damit das Material Cockpit die korrekten Einkaufspreise anzeigen kann. |

1. [Gehe ins Menü](Menu) und öffne das Fenster "Material Cockpit".
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Update purchase order highest price cache" (*Cache für höchste Einkaufspreise aktualisieren*). Es öffnet sich ein Overlay-Fenster.
1. Es gibt zwei Optionen:<br>
    **a)** Setze ein Häkchen bei **Rebuild**, wenn der ***bestehende Cache gelöscht*** und auf Grundlage der aktuellsten Daten ***neu erstellt werden*** soll (z.B. bei geänderten Umrechnungskursen).<br>
    **b)** Sollen nur ***Produkte und Termindaten*** auf Grundlage der vorhandenen Währungsdaten aktualisiert werden, **deaktiviere das Kontrollkästchen**.
    >**Hinweis:** Der Cache wird automatisch jede Nacht ohne Neuaufbau aktualisiert (Option b), um tagesgenaue Daten zu erhalten.

1. Klicke auf "Start", um den Cache zu aktualisieren/neu aufzubauen und das Overlay-Fenster zu schließen.
