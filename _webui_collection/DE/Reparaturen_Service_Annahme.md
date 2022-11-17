---
title: Wie empfange ich re­pa­ra­tur­be­dürf­tige Retouren (Garantiefälle)?
layout: default
tags:
  - Kun­den­ser­vice
  - Reparaturen
lang: de
sequence: 10
ref: service_repair_customer_return
---

## Überblick
Manchmal kann es vorkommen, dass Kunden defekte Produkte reklamieren und zur Reparatur zurücksenden, um anschließend (ggf. auf Kulanz) ein funktionsfähiges Produkt zurückzuerhalten. In metasfresh können solche Fälle über die Serviceannahme abgewickelt und Reparaturen inkl. Zubehörteilen, Serviceleistungen usw. im Rahmen von Produktionsaufträgen durchgeführt werden (Reparaturaufträge).

<kbd><img src="assets/Service Annahme bis Angebot (Reparaturprozess).png" alt="Abb.: Serviceannahme bis Angebot (Reparaturprozess)"></kbd>

## Voraussetzungen
1. [Produziere ein Produkt mit Seriennummer](ProduktionFertigstellung).
1. [Erfasse einen Auftrag](Auftrag_erfassen) für das hergestellte Produkt und [stelle ihn fertig](BelegverarbeitungFertigstellen).
1. [Erstelle eine Lieferung zu dem Auftrag](Zu_Auftrag_Lieferschein_erstellen).

## Schritte

### Daten der Serviceannahme erfassen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Service Annahme".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Kunde** einen Teil des Namens oder der Nummer des [Kunden](Neuer_Geschaeftspartner_Kunde) ein, der ein Produkt zur Reparatur zurückgesendet hat, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle ein **Lager** aus, in dem das re­pa­ra­tur­be­dürf­tige Produkt in Empfang genommen wird.
1. Wähle die **Belegart** [*Service Annahme*](Belegart_Service_Annahme) aus.

### Zurückgesendete Produkte erfassen
1. [Starte die Aktion](AktionStarten#aktionsmenue) "HU für Retoure auswählen". Es öffnet sich ein Overlay-Fenster.
1. ***Optional:*** [Verwende die Filterfunktion](Filterfunktion), um Dir bei der Suche nach einer ganz bestimmten HU zu helfen, z.B. per Barcode.
1. [Selektiere](AuswahlBelege) die HU, die Du als Retoure erfassen möchtest.
 >**Hinweis:** Es werden hier nur solche HUs aufgeführt, die im Rahmen eines [Produktionsauftrages](NeuerProduktionsauftrag) hergestellt und mit einer Seriennummer zur eindeutigen Zuordnung versehen wurden.

1. [Starte die Quick-Action](AktionStarten#quick-actions) "Auswählen", um die HU zur Liste hinzuzufügen.
 >**Hinweis:** Die HUs lassen sich nur einzeln auswählen. Wiederhole die Schritte 2 bis 4, um weitere HUs hinzuzufügen.

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen.
1. Die erfassten HUs werden unter der Registerkarte "Position" unten auf der Seite aufgelistet.
 >**Hinweis:** Bitte beachte, dass dieselbe HU nicht mehrmals für die Retoure ausgewählt werden kann.

1. Wenn Du die Auswahl einer HU rückgängig machen möchtest, öffne einfach mit einem Rechtsklick auf die jeweilige Zeile das Kontextmenü und klicke auf "Löschen" (`Alt` + `Y` / `⌥ alt` + `Y`). Anschließend kann die HU dann wieder für die Retoure ausgewählt werden.
 >**Hinweis:** Dies funktioniert nur, solange der Eintrag für die Serviceannahme noch nicht fertiggestellt wurde.

### Zubehörteile für Reparatur hinzufügen

| **Hinweis:** |
| :--- |
| Die Zubehörteile eines Fertigungsproduktes müssen separat in einer <a href="Stueckliste_erstellen#zubehörteilstueckliste" title="Zubehörteilstückliste erstellen">Zubehörteilstückliste</a> erfasst werden, zusätzlich zur [Produktionsstückliste](Stueckliste_erstellen), welche alle für die Produktion benötigten Bestandteile (materiell sowie immateriell, wie z.B. Dienstleistungen) enthält. |

1. [Starte die Aktion](AktionStarten#aktionsmenue) "Zubehörteile hinzufügen". Es öffnet sich ein Overlay-Fenster.
1. Wähle das **Produkt** aus, welches als Zubehörteil hinzugefügt werden soll.
 >**Hinweis:** Die Felder **Maßeinheit** und **Menge** werden automatisch mit den Werten aus der Zubehörteilstückliste des retournierten Produktes ausgefüllt.

1. Ändere die **Maßeinheit** und/oder **Menge** je nach Bedarf.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und die Zubehörteile zur Liste unter der Registerkarte "Position" unten auf der Seite hinzuzufügen.

### Serviceannahme fertigstellen und Vorgang anlegen
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. Es wird automatisch ein neuer Vorgang zu dieser Serviceannahme angelegt, der nun zur Prüfung und Freigabe durch eine verantwortliche Person bereitliegt.

## Nächste Schritte
1. [Springe über die verknüpften Belege](SpringezuBelegen) in das Fenster "Vorgänge (alle)" (unter CRM in der Sidebar) und öffne dort den bereits [herausgefilterten](Filterfunktion) Vorgang.
1. [Starte ein Reparaturprojekt nach erfolgreicher Prüfung](Reparaturprojekt_starten).
