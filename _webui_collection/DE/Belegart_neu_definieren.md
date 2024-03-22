---
title: Wie definiere ich eine neue Belegart?
layout: default
tags:
  - Dokumentenverwaltung
  - Belegarten
lang: de
sequence: 10
ref: define_new_doc_type
---

## Schritte

### Neue Belegart erstellen und konfigurieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Belegart".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Belegart im Feld **Name**, z.B. "Service Annahme".
1. Trage einen **Drucktext** ein, welcher später auf den Belegen erscheinen wird, z.B. "Service Annahme".
1. Wähle eine **Entitäts-Art** aus, z.B. *User maintained*.
    >**Hinweis:** Der <a href="https://wiki.idempiere.org/de/Entit%C3%A4tstyp_(Fenster_ID-381)" title="Entitätstyp | wiki.idempiere.org" target="_blank">Entitätstyp</a> bestimmt die Eigentümerschaft der Einträge im <a href="https://wiki.idempiere.org/de/Application_Dictionary" title="Application Dictionary | wiki.idempiere.org" target="_blank">Application Dictionary</a>, dem zentralen Datenbankverzeichnis.

1. Wähle eine **Hauptbuch-Kategorie** aus, z.B. *Material Management*.
1. Wähle einen **Dokument Basis Typ** aus, z.B. *Wareneingang*.
1. Trage die Anzahl der zu druckenden **Kopien** ein.
1. Wähle einen [**Aufgabentyp**](Aufgabentyp_anlegen) aus, z.B. *Service Annahme*.
1. Setze bei Bedarf ein Häkchen bei **Verkaufs-Transaktion**.
1. Setze bei Bedarf ein Häkchen bei **Document is Number Controlled**, wenn die Belegart nummerngesteuert ist (Seriennummerierung). Es erscheint ein neues Feld **Nummernfolgen für Belege**.
1. Wähle im Feld **Nummernfolgen für Belege** eine zuvor definierte [Belegnummerierung](Belegnummern_definieren) aus.
1. Wähle ein [**Druck-Format**](Druckformat_anlegen) aus, z.B. *Kundenwarenrückgabe*.

### Dokumentsubtyp definieren
1. Öffne die "[Erweiterte Erfassung](Ansichten#erw-erfassung)" aus dem [Aktionsmenü](AktionStarten#aktionsmenue).
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

1. Scrolle runter bis zum Feld **Doc Sub Type** und wähle einen Dokumentsubtyp aus, z.B. *SR - Service Return*.
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.

## Nächste Schritte
- [Weise einer Belegart eine bestimmte Belegnummerierung zu](Belegart_Belegnummer_zuweisen).
- [Konfiguriere die Belegarten von Gegenbelegen](Gegenbelege_Belegart_konfigurieren).
- [Definiere eine Belegart für die Serviceannahme](Belegart_Service_Annahme).
