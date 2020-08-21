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
1. Bestimme die Vertragsbedingungen für die Ausschreibungen.

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
1. Wähle im Feld **Vertragsverlängerung/-übergang** *Keine autom. Verlängerung* (siehe oben) aus.

#### Nächste Schritte
- ?

---

### Wie lege ich eine E-Mail-Vorlage an?

#### Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "EMail-Vorlage".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne die E-Mail-Vorlage im Feld **Name**.
1. Trage einen **Betreff** ein.
1. Gib in das Textfeld **E-Mail-Text** eine Nachricht ein, die für die E-Mail-Mitteilung verwendet werden soll.
1. Setze ein Häkchen bei **HTML**, sofern der Text HTML-Tags enthält.
1. [metasfresh speichert automatisch](Speicheranzeige).

---

### Welche Druckformate werden für Ausschreibungen benötigt?

#### Überblick
Ausschreibungen erfordern vier verschiedene E-Mail-Vorlagen, denen jeweils ein eigenes Druckformat zugrunde liegt. Zu Beginn einer Ausschreibung werden Einladungen verschickt (sowohl mit als auch ohne Mengenmeldung) und sobald ein Teilnehmer für die Liefervereinbarung auserkoren wurde, erhält dieser eine Zusage, während die anderen eine Absage erhalten.
Sofern die jeweils notwendigen Druckformate noch nicht vorhanden sind, müssen sie erstellt werden. Gehe hierzu wie folgt vor:

#### Schritte
Folge dieser [Anleitung zum Anlegen neuer Druckformate](Druckformat_anlegen) unter Berücksichtigung der folgenden Einstellungen:

##### Alle Ausschreibungs-Druckformate
1. Wähle als **DB-Tabelle** *Ausschreibungs-Antwort* aus.

##### <a name="ausschreibungseinladung-mit-mengenmeldung">Ausschreibungseinladung (mit Mengenmeldung)</a>
1. Vergib einen sinnvollen Namen, z.B. *Information Ausschreibung*.
1. Wähle als **Jasper Prozess** *Information Ausschreibung* aus.

##### <a name="ausschreibungseinladung-ohne-mengenmeldung">Ausschreibungseinladung (ohne Mengenmeldung)</a>
1. Vergib einen sinnvollen Namen, z.B. *Information Ausschreibung ohne Mengenmeldung*.
1. Wähle als **Jasper Prozess** *Information Ausschreibung ohne Mengenmeldung* aus.

##### <a name="ausschreibungszusage">Ausschreibungszusage</a>
1. Vergib einen sinnvollen Namen, z.B. *Zusage Ausschreibung*.
1. Wähle als **Jasper Prozess** *Zusage Ausschreibung* aus.

##### <a name="ausschreibungsabsage">Ausschreibungsabsage</a>
1. Vergib einen sinnvollen Namen, z.B. *Absage Ausschreibung*.
1. Wähle als **Jasper Prozess** *Absage Ausschreibung* aus.

---

### Wie lege ich ein neues Ausschreibungsthema an?

#### Voraussetzungen
1. Bestimme die Vertragsbedingungen für die Ausschreibung.
1. Erfasse jeweils einen Text als [E-Mail-Vorlage] mit folgendem Inhalt:
  - Informationen über die Ausschreibung,
  - Informationen über die Ausschreibung (ohne Mengenmeldung),
  - eine Zusage für die Ausschreibung,
  - eine Absage für die Ausschreibung.
1. Vergewissere Dich, dass die benötigten Druckformate für die jeweiligen E-Mail-Vorlagen vorhanden sind.

#### Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Ausschreibung Thema".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Öffne die "[Erweiterte Erfassung](Ansichten#erw-erfassung)" aus dem [Aktionsmenü](AktionStarten#aktionsmenue).
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

##### Vertragsbedingungen festlegen
1. Benenne das Thema im Feld **Name**, z.B. mit dem Namen des Ausschreibungsproduktes [Produkte für Lieferantenverträge].
1. Wähle im Feld **Ausschreibung Art** *Procurement* aus.
1. Stelle die **Vertragsbedingungen** für die Ausschreibung ein, z.B. *Ausschreibung (RfP)* [Vertragsbedingungen für Ausschreibungen].

##### E-Mail-Vorlagen auswählen

###### Ausschreibungseinladung (mit Mengenmeldung)
1. Wähle im Feld **RfQ Invitation mail text** eine E-Mail-Vorlage aus, die Informationen über die Ausschreibung enthält und als Einladung verschickt werden soll.
1. Wähle im Feld **RfQ Invitation Druck - Format** das [Druckformat für die Ausschreibungseinladung](...#ausschreibungseinladung-mit-mengenmeldung) aus, z.B. *Information Ausschreibung*.

###### Ausschreibungseinladung (ohne Mengenmeldung)
1. Wähle im Feld **RfQ without Qty Invitation mail text** eine E-Mail-Vorlage aus, die Informationen über die Ausschreibung *ohne Mengenmeldung* enthält und als Einladung verschickt werden soll.
1. Wähle im Feld **RfQ without Qty Invitation Druck - Format** das [Druckformat für die Ausschreibungseinladung ohne Mengenmeldung](...#ausschreibungseinladung-ohne-mengenmeldung) aus, z.B. *Information Ausschreibung ohne Mengenmeldung*.

###### Ausschreibungszusage
1. Wähle im Feld **RfQ win mail text** eine E-Mail-Vorlage aus, die als Ausschreibungszusage verschickt werden soll.
1. Wähle im Feld **RfQ Won Druck - Format** das [Druckformat für die Ausschreibungszusage](...#ausschreibungszusage) aus, z.B. *Zusage Ausschreibung*.

###### Ausschreibungsabsage
1. Wähle im Feld **RfQ lost mail text** eine E-Mail-Vorlage aus, die als Ausschreibungsabsage verschickt werden soll.
1. Wähle im Feld **RfQ Lost Druck - Format** das [Druckformat für die Ausschreibungsabsage](...#ausschreibungsabsage) aus, z.B. *Absage Ausschreibung*.

##### Erweiterte Erfassung schließen
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.
1. [metasfresh speichert automatisch](Speicheranzeige).

##### Ausschreibungsteilnehmer hinzufügen
1. Gehe zur Registerkarte "Teilnehmer" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Gib in das Feld **Geschäftspartner** einen Teil des Namens oder der Nummer des [Lieferanten](Neuer_Geschaeftspartner_Lieferant) ein, der an der Ausschreibung teilnimmt, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Der "Standort" wird automatisch eingetragen, kann jedoch manuell geändert werden.
1. Der "Lieferkontakt" wird automatisch eingetragen, kann jedoch manuell geändert werden. Stelle hier den [mit dem Geschäftspartner verknüpften Nutzer mit E-Mail-Adresse sowie Zugriff auf die "Mengenmeldung App" ein](...Wie gebe ich Lieferkontakten Zugriff auf die "Mengenmeldung App"?).
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Geschäftspartner zur Teilnehmerliste hinzuzufügen.
 >**Hinweis:** Wiederhole diese Schritte, um weitere Teilnehmer hinzuzufügen.

---

# Create a new RfQ (Ausschreibung) with: [...]
CONTINUE HERE
