---
title: Workflow - Auftrag bis Rechnung mit Versandauftrag
layout: default
tags:
  - Workflow
  - Verkauf
lang: de
sequence: 20
ref: workflow_salesorder_to_invoice_with_delivery
---

<kbd><img src="assets/Workflow_Auftrag_bis_Rechnung_(Kommissionier-Terminal v2).png" alt="Abb.: Workflow - Auftrag bis Rechnung mit Versandauftrag (Kommissionier-Terminal v2)"></kbd>

## Schritte
1. [Erfasse einen für den Versand bestimmten Auftrag](Auftrag_erfassen_Versand) und [stelle ihn fertig](BelegverarbeitungFertigstellen).
1. [Erstelle einen Transportauftrag im Status *Entwurf*](Transportauftrag_erstellen), über den der kommissionierte Auftrag abgewickelt werden soll.
1. Vergewissere Dich vor der Kommissionierung, dass die georderten Produkte in ausreichender Menge für den Verkauf auf Lager sind.
1. Um den Bestand aufzufüllen, kannst Du entweder:<br>
  **a)** einen [Wareneingang erstellen](Zu_Bestellung_Wareneingang_erstellen).<br>
  **b)** per [Inventur neue Handling Units erstellen](Inventur_HUs_erstellen).
1. [Kommissioniere den Auftrag für den Versand](Auftrag_kommissionieren_Versand_Terminalv2).
