---
title: Wie kann ich bestehende Produktzuordnungen für die Gegenbelegerstellung einsehen ?
layout: default
tags:
  - Stammdaten
  - ESR
lang: de
---

## Systemweite Aktivierung

1. melde Dich mit der Rolle "System Administrator" am Mandanten "System" an
1. Öffne [Fenster "System-Konfiguration"](Wie_finde_und_öffne_ich_ein_Fenster)
1. suche im Feld **Name** nach "de.metas.payment.esr.Enabled"
1. Im Feld **Wert** trage anstelle N den Wert Y ein
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. starte den Anwendungsserver einmal neu

## Einrichtung Organisation

Der Geschäftspartner der Organisation muss eine Schweizer Adresse haben damit der ESR Zahlschein überhaupt in der Rechnung angezeigt wird.

## Einrichtung Bankkonto

Damit der ESR Zahlschein-String erstellt werden kann braucht es ein ESR Konto beim Geschäftspartner der Organisation:
1. Feld **ESR-Konto** aktivieren
1. Feld **ESR-Teilnehmer Nummer** füllen. z.B. 1-23456-7
