---
title: Wie konfiguriere ich einen Lieferweg?
layout: default
tags:
  - Workflow
  - Verkauf
  - Versand
  - Transportaufträge und Lieferwege
lang: de
sequence: 20
ref: shipper_configuration
---

## Überblick
metafresh verfügt derzeit über Schnittstellen für den Versand mit folgenden Dienstleistern (Lieferwege):
- Der Kurier
- DHL
- DPD
- GO! Express & Logistics

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Lieferweg".
1. Öffne den Eintrag eines bestehenden Lieferweges in der [Einzelansicht](Ansichten), z.B. "DPD".
1. Trage die **Nachverfolgungs-URL**, die Dir vom Versanddienstleister bereitgestellt wurde.
1. Gehe zur Registerkarte des jeweiligen Lieferweges (z.B. "DPD Konfiguration") unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.

### DPD Konfiguration
1. Trage in das Feld **URL Api Login** die URL für die Anmeldung und Authentifizierung gegenüber der Anwendungsschnittstelle des Versanddienstleisters ein.
1. Trage in das Feld **URL Api Shipment Service** die URL für den Zugriff auf die Versandschnittstelle ein, über die die Versandscheine generiert werden.
1. Trage die **Delis ID** ein, die Du von DPD für die Einrichtung erhalten hast.
1. Trage das **Delis Passwort** ein, das Du von DPD für die Einrichtung erhalten hast.
1. Wähle ein **Papierformat** für den Versandschein aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Konfigurationen zur Liste hinzuzufügen.

| **Wichtiger Hinweis:** |
| :--- |
| Folgende DPD-Dienste stehen derzeit zur Verfügung:<br> •&nbsp;<a href="https://www.dpd.com/de/de/versenden/paketversand/" title="DPD CLASSIC Paketversand" target="blank">DPD CLASSIC</a> (in Deutschland und ganz Europa)<br> •&nbsp;<a href="https://www.dpd.com/de/de/versenden/expressversand/" title="DPD Expressversand" target="blank">DPD EXPRESS E12</a> (innerhalb Deutschlands) |

## Nächste Schritte
- [Richte einen Lieferweg Deiner Wahl als Standardlieferweg für einen bestimmten Kunden ein](GPartner_Standardlieferweg_einrichten).
- [Verwende den Lieferweg in einem Transportauftrag](Transportauftrag_erstellen).
