---
title: Wie lege ich benutzerdefinierte Filter an?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Benutzung
  - Filterfunktion
lang: de
sequence: 20
ref: create_custom_filters
---

## Überblick
In dieser Anleitung lernst Du, wie Du für ein Fenster Deiner Wahl einen benutzerdefinierten [Filter](Filterfunktion) erstellen kannst. Grundsätzlich kannst Du allgemeine SQL-Operatoren verwenden, wie z.B. den `LIKE`-Operator. Jedoch benötigst Du ebenfalls das Feldtrennzeichen (`<^>`) oder das Segmenttrennzeichen (`<~>`), um Deine Abfrage zu beschreiben.

<p style="margin-left: 40px; padding-left: 15px; border-left: 1px solid #dedede;">
<strong>Beispiel:</strong><br>
Möchtest Du eine Benutzerabfrage erstellen, die nach allen Rechnungskandidaten mit "Nach Lieferung (D)" als Zeitpunkt für die Rechnungsstellung filtert, würde der reine SQL-Code mit dem <code>LIKE</code>-Operator wie folgt aussehen: <code>InvoiceRule LIKE 'D'</code>.<br><br>
In dieser Schreibweise wird es aber nicht funktionieren, da das System so nicht weiß, wie es die SQL parsen soll. Die korrekte Schreibweise wäre also: <code><^>InvoiceRule<^> LIKE <^>D<^></code>.
</p>

<i class="ion-alert filter-alert"></i>Beachte die Leerzeichen vor und nach dem `LIKE`-Operator. **Diese sind unerlässlich!**

<i class="ion-alert filter-alert"></i>Beachte ebenfalls das `<^>`-Zeichen. Dieses ist das Feldtrennzeichen. Es markiert das Suchfeld, den Operator und den Wert.<br>
Bei der Abfrage mehrerer Begriffe kommt das Segmenttrennzeichen zur Anwendung, das wie folgt aussieht: `<~>`.


<p style="margin-left: 40px; padding-left: 15px; border-left: 1px solid #dedede;">
<strong>Beispiel:</strong><br>
Angenommen, Du wolltest sowohl nach Rechnungskandidaten mit "Nach Lieferung (D)" als Zeitpunkt für die Rechnungsstellung filtern als auch nach einem bestimmten Partner, dann würde die Abfrage wie folgt aussehen:<br>
<code>AND<^>InvoiceRule<^> LIKE <^>D<^><~>AND<^>Bill_BPartner_ID<^>=<^>2156423<^></code>.
</p><br>

| **Wichtig!** |
| :--- |
| Der Name der Spalte muss *derselbe* sein wie der in `AD_Column.ColumnName`. |

## Schritte
Anwendungsbeispiel: Angenommen, Du wolltest einen Filter für das Fenster "Merkmals-Wert" erstellen. Dieser Filter soll die folgenden Filteroptionen umfassen: *Name*, *Merkmal* und *IsActive*-Schalter.

1. [Gehe ins Menü](Menu) und öffne das Fenster "Nutzer Filter".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne Deinen benutzerdefinierten Filter im Feld **Name**, z.B. *AttributeValue* (siehe Beispiel unten).
1. Stelle einen **Nutzer** ein, sofern die Filternutzung auf diesen beschränkt sein soll. Gib hierzu einen Teil des [Nutzer](Nutzer_anlegen)namens ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.<br>Wird kein Nutzer angegeben, so kann der Filter von jedem verwendet werden.
1. Stelle die **DB Tabelle** ein, auf die Du den Filter anwenden möchtest. Gib hierzu einen Teil der <abbr title="AD_Table_ID">Spalten-ID</abbr> ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Stelle das **Register** ein, in dem die Filterergebnisse angezeigt werden sollen. Gib hierzu einen Teil der <abbr title="AD_Tab_ID">Register-ID</abbr> ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Erfasse den Filter-**Code** in dem dafür vorgesehenen Textfeld, z.B.:

   ```
   AND<^>M_Attribute_ID<^> = <^><^><~>AND<^>IsActive<^> = <^>Y<^><~>AND<^>Name<^>ILIKE<^><^>
   ```

1. [Setze den Server-Cache zurück](../../installation_collection/DE/Wie_resette_ich_den_server_cache).
1. Setze den Front-End-Cache zurück. Drücke hierzu `Strg`/`⌘ cmd` + `⇧ Umschalt` + `R`.
1. Als Ergebnis erhältst Du dann:<br>
  <kbd><img src="https://user-images.githubusercontent.com/15378036/70226875-45935380-175a-11ea-9083-090e6b875989.png" alt="Abb.: Benutzerdefinierter Filter 'AttributeValue'"></kbd>
  <br><br>
  <kbd><img src="https://user-images.githubusercontent.com/15378036/70226881-4cba6180-175a-11ea-951d-27454d572441.png" alt="Abb.: Benutzerdefinierter Filter 'AttributeValue' geöffnet"></kbd>
