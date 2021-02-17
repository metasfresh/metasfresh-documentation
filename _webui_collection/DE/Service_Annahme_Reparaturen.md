---
title: Wie empfange ich re­pa­ra­tur­be­dürf­tige Retouren?
layout: default
tags:
  - Kun­den­ser­vice
  - Reparaturen
lang: de
sequence: 10
ref: service_desk_repairs
---

## Überblick
Manchmal kann es vorkommen, dass Kunden defekte Produkte reklamieren und zur Reparatur zurücksenden, um anschließend (ggf. auf Kulanz) ein funktionsfähiges Produkt wiederzuerlangen. In metasfresh können solche Fälle über die Serviceannahme abgewickelt und Reparaturen inkl. Ersatzteilen, Serviceleistungen usw. im Rahmen von Produktionsaufträgen durchgeführt werden.

## Voraussetzungen
- Zu dem reklamierten Produkt müssen ein entsprechender [Auftrag](Auftrag_erfassen) und eine [Lieferung](Zu_Auftrag_Lieferschein_erstellen) vorliegen.

## Schritte

### Daten der Serviceannahme erfassen.
1. [Gehe ins Menü](Menu) und öffne das Fenster "Service Annahme".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Kunde** einen Teil des Namens oder der Nummer des [Kunden](Neuer_Geschaeftspartner_Kunde) ein, der ein Produkt zur Reparatur zurückgesendet hat, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle ein **Lager** aus, in dem das re­pa­ra­tur­be­dürf­tige Produkt in Empfang genommen wird.
1. Wähle die **Belegart** *Service Annahme* aus.
1. ***Optional:*** Gib in das Feld **Auftrag** einen Teil der Nummer des [Auftrages](Auftrag_erfassen) ein, über den das Produkt verkauft wurde, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.

### Zurückgesendete Produkte erfassen
1. [Starte die Aktion](AktionStarten#aktionsmenue) "HU für Retoure auswählen". Es öffnet sich ein Overlay-Fenster.
1. ***Optional:*** [Verwende die Filterfunktion](Filterfunktion), um Dir bei der Suche nach einer ganz bestimmten HU zu helfen, z.B. per Barcode.
1. [Selektiere](AuswahlBelege) die HU, die Du als Retoure erfassen möchtest.
1. [Starte die Quick-Action](AktionStarten#quick-actions) "Auswählen", um die HU zur Liste hinzuzufügen.
 >**Hinweis:** Die HUs lassen sich nur einzeln auswählen. Wiederhole die Schritte 2 bis 4, um weitere HUs hinzuzufügen.

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen.
1. Die erfassten HUs werden unter der Registerkarte "Position" unten auf der Seite aufgelistet.

### Ersatzteile für Reparatur hinzufügen
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Ersatzteile hinzufügen". Es öffnet sich ein Overlay-Fenster.
1. Wähle das **Produkt** aus, welches als Ersatzteil hinzugefügt werden soll.
 >**Hinweis:** Die Felder **Maßeinheit** und **Menge** werden automatisch mit den Werten aus der Stückliste des retournierten Produktes ausgefüllt.

1. Ändere die **Maßeinheit** und/oder **Menge** je nach Bedarf.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und die Ersatzteile zur Liste hinzuzufügen.
1. Die erfassten Ersatzteile werden ebenfalls unter der Registerkarte "Position" unten auf der Seite aufgelistet.

### Serviceannahme fertigstellen
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. Es wird ein neuer Vorgang zu dieser Serviceannahme erstellt, der nun zur Prüfung und Freigabe durch eine verantwortliche Person bereitliegt.

## Nächste Schritte
1. [Springe über die verknüpften Belege](SpringezuBelegen) in das Fenster "Vorgänge" (unter CRM in der Sidebar) und öffne dort den bereits [herausgefilterten](Filterfunktion) Vorgang.
1. Starte ein Reparaturprojekt nach erfolgreicher Prüfung.
