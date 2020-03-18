---
title: Wie konfiguriere ich IBANs? (Systemadministrator)
layout: default
description: "Lernen Sie, wie man IBANs in metasfresh konfiguriert, um gültige internationale Bankkontonummern für Geschäfte weltweit zu verwenden."
tags:
  - Stammdaten
  - Bank- und Kontodaten
lang: de
sequence: 10
ref: setup_iban_structure
---

## Überblick
Ohne die Struktur der internationalen Bankkontonummer (IBAN) vorab festzulegen, kann eine IBAN nicht unter "[Bankkonto](Menu)" erfasst werden. Erst nach Bestimmung der richtigen Struktur wird eine IBAN beim Hinzufügen automatisch validiert.

| **Hinweis:** |
| :--- |
| Mehr Informationen über die Zusammensetzung von IBANs und BBANs findest Du in dem offiziellen <a href="https://www.swift.com/sites/default/files/resources/iban_registry.pdf" title="Data Standards (PDF) &#124; swift.com" target="_blank">IBAN-Register</a> oder auf der <a href="https://www.ecbs.org/iban.htm" title="International Bank Account Number &#124; ecbs.org" target="_blank">"European Banking Resources"-Website</a>. |

## Schritte
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) "Systemadministrator".
1. [Gehe ins Menü](Menu) und öffne das Fenster "Land, Region".
1. Öffne den Eintrag eines bestehenden Landes, für das Du die IBAN-Struktur konfigurieren möchtest.
[Verwende die Filterfunktion](Filterfunktion), um Dir bei der Suche zu helfen.
1. Öffne die "[Erweiterte Erfassung](Ansichten#erw-erfassung)" aus dem [Aktionsmenü](AktionStarten#aktionsmenue).
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

1. Gib im Feld **Bank Code Length** die Anzahl der Zeichen für die Bankleitzahl (BLZ) ein, z.B. `8`.
1. Gib im Feld **Bank Code Char Type** die Zeichendarstellung der BLZ ein, z.B. `n` für *Ziffern* (siehe Beispiel unten).
1. Gib im Feld **Bank Code SeqNo** die Anzahl der Zeichen für die Kontonummer ein, z.B. `10`.
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.
1. [metasfresh speichert automatisch](Speicheranzeige).

## Beispiel
Aufbau einer deutschen Bankkontonummer:

<kbd><img src="assets/IBAN_structure_Germany.png" alt="Fig.: Aufbau deutsche IBAN"></kbd>
<div style="text-align: right;"><sup>(Quelle: <a href="https://www.ecbs.org/iban/germany-bank-account-number.html" title="European Banking Resources" target="_blank">ecbs.org</a>)</sup></div>

<br>Die IBAN-Struktur eines jeden Landes wird mithilfe der folgenden Zeichendarstellungen definiert:

| Zeichen | Darstellungstyp |
| :--: | :-- |
| n | Ziffern (nur numerische Zeichen 0 bis 9) |
| a | Großbuchstaben (nur alphabetische Zeichen A-Z) |
| c | Große und kleine alphanumerische Zeichen (A-Z, a-z und 0-9) |
| e | Leerzeichen |
| ! | Gibt eine feste Länge an (z.B. `8!n` bedeutet max. 8 Ziffern) |

<div style="text-align: right;"><sup>(Quelle: <a href="https://www.swift.com/sites/default/files/resources/iban_registry.pdf" title="IBAN-Register" target="_blank">swift.com</a>)</sup></div>
