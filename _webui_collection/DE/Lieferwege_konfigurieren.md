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
metasfresh verfügt derzeit über Schnittstellen für den Versand mit folgenden Dienstleistern (Lieferwege):
- Der Kurier
- <a href="#dhl-konfiguration" title="zur DHL-Konfiguration springen">DHL</a>
- <a href="#dpd-konfiguration" title="zur DPD-Konfiguration springen">DPD</a>
- GO! Express & Logistics

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Lieferweg".
1. Öffne den Eintrag eines bestehenden Lieferweges in der [Einzelansicht](Ansichten), z.B. "DPD".
1. Trage die **Nachverfolgungs-URL** ein, die Dir vom Versanddienstleister bereitgestellt wurde.
1. Gehe zur Registerkarte des jeweiligen Lieferweges (z.B. "DPD Konfiguration") unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.

### <a name="dhl-konfiguration">DHL Konfiguration</a>
1. Trage in das Feld **DHL API URL** die URL für die Anmeldung bei der DHL-Anwendungsschnittstelle ein.
1. Trage die **Anwendungs-ID** ein, die Du von DHL für die Einrichtung erhalten hast.
1. Trage das **Anwendungs-Token** ein, das Du von DHL für die Einrichtung erhalten hast.
1. Trage die **Kontonummer** ein, die Du von DHL für die Einrichtung erhalten hast.
1. Trage in das Feld **Nutzer-ID/Login** Deinen Benutzernamen zur Kontoanmeldung ein.
1. Trage in das Feld **Unterschrift** Dein Passwort zur Kontoanmeldung ein.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Konfigurationen zur Liste hinzuzufügen.

---

### <a name="dpd-konfiguration">DPD Konfiguration</a>
1. Trage in das Feld **URL Api Login** die URL für die <a href="http://diswiki.dpd.nl/wiki/2/login-service" title="dpd Login Service" target="blank">Anmeldung und Authentifizierung</a> gegenüber der DPD-Anwendungsschnittstelle ein.
1. Trage in das Feld **URL Api Shipment Service** die URL für den Zugriff auf die <a href="http://diswiki.dpd.nl/wiki/3/shipment-service" title="dpd Shipment Service" target="blank">Versandschnittstelle</a> ein, über die die Versandscheine generiert werden.
1. Trage die **Delis ID** ein, die Du von DPD für die Einrichtung erhalten hast.
1. Trage das **Delis Passwort** ein, das Du von DPD für die Einrichtung erhalten hast.
1. Wähle ein **Papierformat** für die Versandscheine aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Konfigurationen zur Liste hinzuzufügen.

| **Wichtiger Hinweis:** |
| :--- |
| Folgende DPD-Dienste stehen derzeit zur Verfügung:<br> •&nbsp;<a href="https://www.dpd.com/de/de/versenden/paketversand/" title="DPD CLASSIC Paketversand" target="blank">DPD CLASSIC</a> (in Deutschland und ganz Europa)<br> •&nbsp;<a href="https://www.dpd.com/de/de/versenden/expressversand/" title="DPD Expressversand" target="blank">DPD EXPRESS E12</a> (innerhalb Deutschlands) |

## Nächste Schritte
- [Richte einen Lieferweg Deiner Wahl als Standardlieferweg für einen bestimmten Kunden ein](GPartner_Standardlieferweg_einrichten).
- [Verwende den Lieferweg in einem Transportauftrag](Transportauftrag_erstellen).
