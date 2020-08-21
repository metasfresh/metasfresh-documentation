---
title: Wie kommissioniere ich einen Auftrag für den Versand? (Kommissionier-Terminal v2)
layout: default
tags:
  - Workflow
  - Verkauf
  - Kommissionierung
lang: de
sequence: 30
ref: order_picking_terminal_v2
---

## Überblick
In metasfresh kannst Du *Handling Units* ([HUs](Handling_Unit_System)) für den Versand kommissionieren und auf verschiedenen [Lieferwegen](Lieferwege_konfigurieren) versenden, z.B. über Versanddienstleister wie DPD und DHL. Die kommissionierte Menge der HUs wird dann von Deinem Lagerbestand abgebucht.<br>
Die Lagerbestände kannst Du im "[Handling Unit Editor](Menu)" jederzeit nachschauen.

<kbd><img src="assets/Workflow_Auftrag_bis_Rechnung_(Kommissionier-Terminal v2).png" alt="Abb.: Workflow - Auftrag bis Rechnung (Kommissionier-Terminal v2)"></kbd>

## Voraussetzungen
1. [Erfasse einen für den Versand bestimmten Auftrag](Auftrag_erfassen_Versand) und [stelle ihn fertig](BelegverarbeitungFertigstellen).
1. [Erstelle einen Transportauftrag im Status *Entwurf*](Transportauftrag_erstellen), in dem der kommissionierte Auftrag abgewickelt werden soll.
1. Vergewissere Dich vor der Kommissionierung, dass die georderten Produkte in ausreichender Menge für den Verkauf auf Lager sind.
1. Um den Bestand aufzufüllen, kannst Du entweder:<br>
  **a)** einen [Wareneingang erstellen](Zu_Bestellung_Wareneingang_erstellen).<br>
  **b)** per [Inventur neue Handling Units erstellen](Inventur_HUs_erstellen).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Kommissionier-Terminal (v2)".
1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten#listenansicht) den Auftrag, den Du kommissionieren möchtest.

### Pickliste drucken
Mithilfe der Pickliste kann der Kommissionierer den tatsächlichen Bestand überprüfen und ggf. abweichende Mengen händisch notieren und im nächsten Schritt ("Picken") erfassen. Um die Pickliste zu drucken, gehe wie folgt vor:

1. [Starte die Quick-Action](AktionStarten#quick-actions) "Pickliste drucken".
1. Es öffnet sich ein neuer Browser-Tab mit der PDF-Vorschau der Pickliste.
1. Kehre zurück zum Fenster "Kommissionier-Terminal (v2)".

### Produkte kommissionieren ("Picken")
1. [Starte die Quick-Action](AktionStarten#quick-actions) "Pick". Es öffnet sich ein Overlay-Fenster mit der Pickliste.
1. ***Optional:*** Klicke doppelt auf das Feld **Menge Abw.** der Produktzeile und gib dort die abweichende Menge ein.
1. [Selektiere](AuswahlBelege) die Zeilen der zu kommissionierenden Produkte und [starte die Quick-Action](AktionStarten#quick-actions) "Pick". Der **Kommissionier-Status** ändert sich von *Komm. ausstehend* auf *Komm. OK*.

### Kommissionierte Produkte verpacken
1. [Selektiere](AuswahlBelege) die Zeilen der zu verpackenden Produkte und [starte die Quick-Action](AktionStarten#quick-actions) "Pack To". Es öffnet sich ein Overlay-Fenster.
1. Gib in das Feld **Packvorschrift** einen Teil des Namens der zu verwendenden [Packvorschrift](Packvorschrift_erstellen) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Klicke auf "Start", um zu bestätigen und das Overlay-Fenster zu schließen. Der **Kommissionier-Status** ändert sich auf *Gepackt*.

### Kommissionierung verarbeiten
1. [Selektiere](AuswahlBelege) die Zeilen der verpackten Produkte und [starte die Quick-Action](AktionStarten#quick-actions) "Process". Es öffnet sich ein Overlay-Fenster.
1. Der **Lieferweg** wird aus dem Auftrag übernommen und ist hier voreingestellt, kann jedoch manuell geändert werden.
1. Der **Transportauftrag** wird entsprechend dem Bereitstellungsdatum des Auftrages hier voreingestellt, kann jedoch manuell geändert werden.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und die Kommissionierung zu verarbeiten. Die Produktzeilen werden schreibgeschützt.
1. Klicke auf "Bestätigen", um die Pickliste zu schließen und zum Kommissionier-Terminal zurückzukehren. Die Zeile des kommissionierten Auftrages wird aus dem Terminal entfernt.

### Belege überprüfen
Mit der Verarbeitung der Kommissionierung werden gleichzeitig auch Versandauftrag, Lieferung samt Lieferschein sowie Rechnung automatisch erstellt bzw. fertiggestellt.

1. Du erhältst oben rechts eine [Benachrichtigung](Benachrichtigungsarten) ![](assets/NotificationBell_WebUI.png) über die erfolgreiche Erstellung von Lieferung und Rechnung.
1. Klicke auf die Benachrichtigungen, um die jeweiligen Belege zu öffnen.
1. Über die [verknüpften Belege](SpringezuBelegen) des Transportauftrages kannst Du ***direkt*** sowohl zur Lieferung als auch zum Versandauftrag (*Delivery Order*) springen.
  - Von der Lieferung aus gelangst Du über die verknüpften Belege weiter zum Rechnungsbeleg sowie zurück zum Auftrag. Außerdem kannst Du dort auch den Lieferschein ausdrucken.
  - In dem Versandauftrag findest Du alle mit dem Auftrag verbundenen Daten sowie die Nummer des **Luftfrachtbriefes** und die **Nachverfolgungs-URL** für die Sendungsverfolgung. Darüber hinaus steht Dir in der Anhangliste ![](assets/Attachment_clip.png) in der [Sidebar](SpringezuBelegen) ![](assets/Sidebar_Icon_WebUI.png) der Versandschein zum Ausdrucken bereit.
