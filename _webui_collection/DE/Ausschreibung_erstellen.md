---
title: Wie erstelle ich eine Ausschreibung?
layout: default
tags:
  - Workflow
  - Einkauf
  - Ausschreibungen
lang: de
sequence: 10
ref: create_request_for_proposal
published: false
---

## Überblick


## Voraussetzungen
Um eine Ausschreibung zu starten, müssen folgende Stammdaten vorhanden sein/Voraussetzungen erfüllt sein:
1. [Erfasse die Lieferanten, die an der Ausschreibung teilnehmen sollen](Neuer_Geschaeftspartner_Lieferant).
1. Stelle sicher, dass jeder Ausschreibungsteilnehmer (Lieferant) mit einem Nutzer verknüpft ist, der eine E-Mail-Adresse besitzt sowie Zugriff auf die "Mengenmeldung App" hat.
1. Die auszuschreibenden Produkte müssen für Lieferantenverträge freigegeben werden.
1. Bestimme spezielle Vertragsbedingungen für die Ausschreibungen ohne Vertragsverlängerung.

## Schritte


---

### Wie gebe ich Produkte für Lieferantenverträge frei?

#### Voraussetzungen
- [Lege ein Produkt an](NeuesProdukt) und [weise ihm eine Packvorschrift zu](CU-TU_Zuordnung). (*Produkt muss auf Lieferantenpreisliste stehen?*)

#### Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkt für Lieferanten Vertrag".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Ausschreibungsproduktes](NeuesProdukt) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle anschließend ebenfalls im Feld **Produkt** eine `Packvorschrift` aus.
 >**Hinweis:** Produkte für Lieferantenverträge müssen unbedingt mit einer [Packvorschrift](CU-TU_Zuordnung) ausgestattet sein!

1. [metasfresh speichert automatisch](Speicheranzeige).

#### Nächste Schritte
- Erstelle einen Liefervertrag für dieses Produkt.

---

### Wie gebe ich Lieferkontakten Zugriff auf die "Mengenmeldung App"?

#### Voraussetzungen
- [Erfasse einen neuen Lieferanten](Neuer_Geschaeftspartner_Lieferant).

#### Schritte
Folge dieser [Anleitung zur Verknüpfung des Lieferanten mit einem Nutzer (Kontakt)](GPartner_Nutzer_hinzufuegen) unter Berücksichtigung der folgenden Einstellungen:
1. Erfasse eine **E-Mail** für den Kontakt.
1. Setze ein Häkchen bei **Mengenmeldung App**.



---

### Wie erstelle ich einen Liefervertrag?

#### Voraussetzungen
- [Bestimme die Vertragsbedingungen des Liefervertrages]().

#### Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Vertrag".
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Neuen Liefervertrag erstellen". Es öffnet sich ein Overlay-Fenster.
1. Wähle die gewünschten **Vertragsbedingungen** für den Liefervertrag aus.
1. Gib in das Feld **Geschäftspartner** einen Teil des Namens oder der Nummer des [Lieferanten](Neuer_Geschaeftspartner_Lieferant) ein, mit dem der Vertrag geschlossen werden soll, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Gib in das Feld **Lieferprodukt** einen Teil des Namens oder der Nummer des [zu liefernden Produktes]() ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle die gewünschte **Maßeinheit** für das Lieferprodukt aus.
1. Stelle einen **Lieferzeitraum** ein.
1. Wähle die gewünschte **Währung** aus.
1. Den Vertrag ***nicht*** automatisch fertiggestellen lassen. Setze also ***KEIN*** Häkchen bei **Fertigstellen**.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und den Liefervertrag zu öffnen.



flatrate term = Contract

---

### Wie bestimme ich die Vertragsbedingungen für Lieferantenverträge?

#### Schritte
Folge dieser [Anleitung zur Bestimmung von Vertragsbedingungen](Vertragsbedingungen_definieren) unter Berücksichtigung der folgenden Einstellungen:
1. Wähle als **Vertragsart** *Liefervereinbarung* aus.
1. Gib in das Feld **Preissytem** einen Teil des Namens der grundlegenden Einkaufspreisliste ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.



grundlegend => primal, primary?

---


### Wie bestimme ich die Vertragsbedingungen für Ausschreibungen?

#### Überblick
Ausschreibungen sollen, nachdem sie abgelaufen sind, nicht automatisch erneuert werden. Da automatische Vertragsverlängerungen über die Vertragslaufzeit gesteuert werden, muss zuerst ein entsprechender Eintrag erstellt werden, in dem die automatische Vertragsverlängerung deaktiviert ist. Anschließend kann diese Vertragslaufzeit dann mit den jeweiligen Vertragsbedingungen verknüpft werden, um so im zutreffenden Fall eine automatische Vertragsverlängerungen zu verhindern.

#### Schritte

##### Vertragslaufzeit ohne autom. Vertragsverlängerung
Folge dieser [Anleitung zur Bestimmung der zeitlichen Rahmenbedingungen eines Vertrages](Vertragslaufzeit_definieren) unter Berücksichtigung der folgenden Einstellungen:
1. Vergib einen sinnvollen Namen, z.B. *Keine autom. Verlängerung*.
1. Setze das Feld **Vertrag autom. verlängern** auf *leer*.

#### Vertragsbedingungen bestimmen
Folge dieser [Anleitung zur Bestimmung von Vertragsbedingungen](Vertragsbedingungen_definieren) unter Berücksichtigung der folgenden Einstellungen:
1. Vergib einen sinnvollen Namen, z.B. *Ausschreibung (RfP)*.
1. Wähle als **Vertragsart** *Liefervereinbarung* aus.
1. Stelle im Feld **Vertragsverlängerung/-übergang** *Keine autom. Verlängerung* (siehe oben) ein.


---

***CONTINUE HERE!!!***

---

   => Gibt es bei der "Vertragslaufzeit = 0" etwas Bestimmtes zu beachten?

1. Preissytem Lieferanten?
1. Rechnungsstellung?
1. Bei Vertragsverlängerung?
1. Registerkart: Zuordnung (Pauschale)/Produkt (Depot)?

#### Nächste Schritte
- ?
