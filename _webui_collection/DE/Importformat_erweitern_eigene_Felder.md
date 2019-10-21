---
title: Wie erweitere ich ein Importformat um neue Formatfelder? (Systemadministrator)
layout: default
tags:
  - Datenverwaltung
  - Datenimport
lang: de
sequence: 50
ref: import_format_add_custom_fields
---

## Überblick
Mithilfe eines [Importformats](Importformat_anlegen) kannst Du festlegen, welche Daten bzw. Spalten aus einer Importdatei übernommen werden sollen, wie diese Spalten benannt und voneinander getrennt sind (Trennzeichen) und in welche Datenbanktabellen die Importdaten übertragen werden sollen.

Welche Spalten Dir beim Anlegen eines Importformats zur Auswahl stehen, ist abhängig von der **DB-Tabelle**, die mit dem Format verknüpft ist. Als Systemadministrator kannst Du diese Datenbanktabelle anpassen, verändern und erweitern, um so in dem Importformat eigene Felder hinzuzufügen. Gehe hierzu wie folgt vor:

## Schritte
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) "Systemadministrator".
1. [Gehe ins Menü](Menu) und öffne das Fenster "Tabelle und Spalte".
1. [Verwende die Filterfunktion](Filterfunktion) und suche nach der **DB-Tabelle**, die Du anpassen möchtest, z.B. die Importtabelle "I_Product" für Produktdaten.
1. Öffne den Datenbanktabelleneintrag.
1. Gehe zur Registerkarte "Spalte" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Scrolle runter bis zum Feld **System-Element**, gib dort einen Teil des Namens der neuen Spalte ein und klicke auf den passenden Treffer in der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
1. Trage in das darüberliegende Feld die **Länge** ein, die die neue Spalte in der Datenbank haben soll.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Spalte zur Liste hinzuzufügen.
1. [Starte die Aktion](AktionStarten) "Spalte synchronisieren", um die Spalte in der Datenbank zu persistieren.
1. [metasfresh speichert automatisch](Speicheranzeige).

| **Wichtiger Hinweis:** |
| :--- |
| Damit die importierten Daten aus einer neu hinzugefügten Spalte auch an die richtige Stelle im System übertragen werden, wird pro Spalte eine eigene SQL-Funktion nach dem Muster `<ImportTableName>_<IMPORT_AFTER_ROW>_<somedesc>` benötigt, z.B. `I_Product_Import_After_Row_InterCheese(IN p_C_DataImport_ID numeric, IN p_recordId numeric,)` für neue Spalten im [Importformat für Produktdaten](Importformat_Beispiel_Produkt). |
| **Die Aktivierung neuer Spalten wird von unseren Entwicklern übernommen. Setze Dich bei Bedarf einfach mit uns in Kontakt und wir kümmern uns darum!** |

## Nächste Schritte (optional)
- [Bankauszugsdaten importieren](Bankauszugsdaten_importieren).
- [Benutzerdefinierte Dateneingaben importieren](Dateneingaben_importieren).
- [Geschäftspartnerdaten importieren](GPartnerdaten_importieren).
- [IFA-Herstellerdaten importieren](GPartnerdaten_importieren_Pharma).
- [IFA-Produktdaten importieren](Produktdaten_importieren_Pharma).
- [Kontenrahmendaten importieren](Kontenrahmendaten_importieren).
- [Nachbestelldaten importieren](Nachbestelldaten_importieren).
- [Nutzerdaten importieren](Nutzerdaten_importieren).
- [Postalische Daten importieren](Postalische_Daten_importieren).
- [Produktdaten importieren](Produktdaten_importieren).
- [Rabattschemadaten importieren](Rabattschema_importieren).
