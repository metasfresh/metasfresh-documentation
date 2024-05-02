---
title: Wie starte ich ein Reparaturprojekt?
layout: default
tags:
  - Kun­den­ser­vice
  - Reparaturen
lang: de
sequence: 30
ref: service_repair_project_start
---

## Überblick
Ein Reparaturprojekt in metasfresh beinhaltet alle für die Reparatur notwendigen Arbeitsschritte, Materialien, Leistungsarten usw. und dient zur Vorbereitung des Produktionsauftrages, auf Grundlage dessen die Reparatur anschließend durchgeführt wird. Einem Reparaturprojekt liegt stets ein Vorgang mit den entsprechenden Details zugrunde, welcher vorab auf seine Vollständigkeit geprüft und freigegeben werden muss, um daraus dann das Reparaturprojekt zu starten.

## Voraussetzungen
1. [Empfange re­pa­ra­tur­be­dürf­tige Retouren über die Serviceannahme und lege einen Vorgang an](Reparaturen_Service_Annahme).
1. [Springe über die verknüpften Belege](SpringezuBelegen) des Retoureneintrags in der Serviceannahme in das Fenster "Vorgang (alle)" (unter CRM in der Sidebar) und öffne dort den bereits [herausgefilterten](Filterfunktion) Vorgang.

## Schritte

### Vorgang prüfen und Projekt starten
1. [Gehe ins Menü](Menu) und öffne das Fenster "Vorgang (alle)".
1. [Verwende die Filterfunktion](Filterfunktion), um Dir bei der Suche nach dem gewünschten Vorgang zu helfen, z.B. durch Filtern nach dem **Aufgabentyp** *Service Annahme* [mit oder ohne](Filterfunktion#aktivstatus-checkbox) **Projekt**.
1. Öffne den Eintrag des betreffenden Vorganges und prüfe ihn auf seine Vollständigkeit.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Reparaturprojekt starten". Es öffnet sich ein neuer Browser-Tab mit dem "[Service/Reparatur Projekt](Menu)".
1. Gehe zur Registerkarte "Reparaturaufgabe" unten auf der Seite. Hier kannst Du die verschiedenen Arten der zu tätigenden Aufgaben einsehen, z.B. *Reparaturauftrag* oder *Zubehörteile*.
1. ***Optional:*** Klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png), um weitere Aufgaben zu erfassen oder [selektiere](AuswahlBelege) bestimmte Aufgabenzeilen, um sie zu löschen (`Alt` + `Y` / `⌥ alt` + `Y`).

### Reparaturauftrag erstellen
1. [Selektiere](AuswahlBelege) eine Aufgabenzeile der **Art** *Reparaturauftrag*.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Reparaturauftrag erstellen".
1. Es wird ein Reparaturauftrag mit dem Status *In Arbeit* erstellt und in der Spalte **Reparaturauftrag** der Aufgabenzeile mit dem Projekt verknüpft. [Zoome](Zoomen_in_Tabellenfeld) in das Feld, um den Auftrag zu öffnen.
 >**Hinweis:** Ein Reparaturauftrag ist ein Produktionsauftrag mit der Belegart *Reparaturauftrag*.

1. Im Eintrag des Reparaturauftrages kannst Du alle benötigten [Arbeitsaufwände erfassen](Produktionsauftrag_Aufwand_erfassen).

### Zubehörteile reservieren
1. [Selektiere](AuswahlBelege) eine Aufgabenzeile der **Art** *Zubehörteile*.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Zubehörteile reservieren". Es öffnet sich ein Overlay-Fenster, der "Handling Unit Editor".
1. [Selektiere](AuswahlBelege) eine HU-Zeile der zu reservierenden <a href="Stueckliste_erstellen#zubehörteilstueckliste" title="Zubehörteilstückliste erstellen">Zubehörteile</a> und starte die Quick-Action "Reservieren". Es öffnet sich ein Overlay-Fenster.
1. Gib eine **Menge** ein.
1. Klicke auf "Start", um die Zubehörteile zu reservieren und das Overlay-Fenster zu schließen.
1. Klicke auf "Bestätigen", um den "Handling Unit Editor" zu schließen.
1. Die Aufgabenzeile der **Art** *Zubehörteile* zeigt nun den **Status** *Abgeschlossen*.

### Reservierte Zubehörteile stornieren (optional)
- [Starte die Aktion](AktionStarten#aktionsmenue) "Reservierte Zubehörteile stornieren", um die Zubehörteilreservierung rückgängig zu machen und den Status der Aufgabenzeile zurück auf *in Arbeit* zu setzen.

## Nächste Schritte
1. [Erfasse die benötigten Arbeitsaufwände und verbrauchten Produktionsbestandteile im Reparaturauftrag](Produktionsauftrag_Aufwand_erfassen).
1. [Erstelle einen Kostenvoranschlag für die erbrachten Reparaturleistungen](Angebot_Kostenvoranschlag_Reparaturleistungen).
