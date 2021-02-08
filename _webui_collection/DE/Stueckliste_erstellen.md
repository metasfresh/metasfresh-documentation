---
title: Wie erstelle ich eine Stückliste?
layout: default
tags:
  - Stammdaten
  - Stückliste
lang: de
sequence: 10
ref: create_bom
---

## Schritte

### Stückliste erstellen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Stückliste".
1. [Lege eine neue Stückliste an](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein, für das Du eine Stückliste erstellen möchtest, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>, z.B. "Gitarre".
1. Stelle sicher, dass der **Suchschlüssel** der Stückliste und die Artikelnummer des Produktes ***miteinander identisch*** sind.
1. Wähle im Feld **Verwendung** *Produktion* aus.
 >**Hinweis:** Für Handelsstücklisten für Fertigprodukte, deren Bestandteile nicht produziert, aber im Auftrag einzeln aufgeführt werden, wähle *Phantom* aus.

1. ***Optional:*** Vergib im Feld **Nr.** eine benutzerdefinierte Belegnummer.
1. ***Optional:*** Stelle ein **Gültig ab** Datum ein.
 >**Hinweis:** Liegt das Datum in der *Vergangenheit*, ist die Stückliste *ab sofort* gültig. Liegt es in der *Zukunft*, gilt sie *erst ab diesem Datum*.

### Stücklistenbestandteile hinzufügen
1. Gehe zur Registerkarte "Stücklistenbestandteile" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein, welches Du als Bestandteil zur Stückliste hinzufügen möchtest, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>, z.B. "Korpus" oder "Saiten".
1. Wähle einen **Komponententyp** aus, z.B. *Komponente*.
 >**Hinweis:** Das *Co-Produkt* ist ein Nebenerzeugnis aus der Produktion des eigentlichen Fertigproduktes und kann anschließend selbst als Fertigprodukt geführt werden.

1. Gib eine **Menge** ein. Um die Menge in Prozent zu erfassen, setze ein Häkchen bei **Ist %** und trage den Betrag in das Feld **% Menge** ein.
 >**Hinweis:** Eine Stückliste enthält die Angaben für ein einzelnes Fertigprodukt. Bei Anwendung der Stückliste wird die hier angegebene Menge also mit der jeweils beauftragten Menge multipliziert.

1. Wähle eine **Zuteil Methode** aus, wie die verbrauchten Materialien verbucht werden sollen, z.B. *Issue only for what was received* oder *Backflush*.
 >**Hinweis 1:** Um die Zuteilung zu automatisieren, d.h. nur die tatsächlich verbrauchte Materialmenge abzubuchen, wähle "Issue only for what was received".<br><br>
 >**Hinweis 2:** Um die Materialmenge pro Stücklistenbestandteil einzeln abzubuchen, wähle "Backflush".

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und das Bestandteil zur Liste hinzuzufügen.
 >**Hinweis:** Du kannst beliebig viele Bestandteile zur Stückliste hinzufügen.

| **Hinweis:** |
| :--- |
| Die einzelnen Stücklistenbestandteile kannst Du ebenfalls unter dem Menüpunkt "[Stücklistenbestandteile](Menu)" übersichtlich einsehen. |

### Stückliste verifizieren
Damit eine Stückliste gültig wird und in der Produktion verwendet werden kann, muss sie vorher verifiziert werden.

1. [Starte die Aktion](AktionStarten#aktionsmenue) "Stücklisten verifizieren". Es öffnet sich ein Overlay-Fenster.
1. Wähle eine [**Produktkategorie**](NeueProduktkategorie) aus.
1. Klicke auf "Start", um zu bestätigen und das Overlay-Fenster zu schließen.
1. Um den Verifizierungsstatus des Stücklistenproduktes zu überprüfen, [springe in das Feld](Springezu) **Produkt** des Eintrages und stelle sicher, dass das Kontrollkästchen **Verifiziert** angehakt ist: ![Verifiziert='Y'](assets/Stueckliste_Produkt_verifiziert.png).

    | **Hinweis:** |
    | :--- |
    | Nach jeder Änderung der Stückliste muss sie erneut verifiziert werden! |

## Beispiel
<kbd><img src="assets/Stueckliste_erstellen.gif" alt="GIF: Stückliste erstellen"></kbd>
