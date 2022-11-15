---
title: Wie wird die Belegart für die Serviceannahme definiert?
layout: default
tags:
  - Kun­den­ser­vice
  - Reparaturen
  - Einrichtung
lang: de
sequence: 10
ref: doc_type_service_repair
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Belegart".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Belegart im Feld **Name**, z.B. "Service Annahme".
1. Trage einen **Drucktext** ein, welcher später auf den Belegen erscheinen wird, z.B. "Service Annahme".
1. Wähle die **Entitäts-Art** *User maintained* aus.
1. Wähle die **Hauptbuch-Kategorie** *Material Management* aus.
1. Wähle den **Dokument Basis Typ** *Wareneingang* aus.
1. Trage für die Anzahl der zu druckenden **Kopien** `0` ein.
1. Wähle im Feld **Request Type** den [Aufgabentyp](Aufgabentyp_anlegen) *Service Annahme* aus.
1. Setze ein Häkchen bei **Verkaufs-Transaktion**.
1. Setze ein Häkchen bei **Document is Number Controlled** (*Beleg ist seriennummerngeführt*). Es erscheint ein neues Feld **Nummernfolgen für Belege**.
1. Wähle im Feld **Nummernfolgen für Belege** eine [Belegnummerierung](Belegnummern_definieren) aus, welche Du zuvor definiert hast, z.B. *MM Returns*.
1. Wähle das [**Druck-Format**](Druckformat_anlegen) *Kundenwarenrückgabe* aus.
1. Öffne die "[Erweiterte Erfassung](Ansichten#erw-erfassung)" aus dem [Aktionsmenü](AktionStarten#aktionsmenue).
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

1. Scrolle runter bis zum Feld **Doc Sub Type** und wähle den Beleg-Untertyp *SR - Service Return* aus.
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.
