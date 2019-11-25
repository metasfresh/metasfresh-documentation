---
title: order-candidates-rest-controller-impl (Auftragskandidaten/Auftragsdisposition)
layout: default
tags:
  - Endpunkte
lang: de
sequence: 10
ref: order-candidates-rest-controller-impl
---

## Überblick
Über diesen Endpunkt kannst Du Auftragskandidaten nach metasfresh importieren und gleichzeitig sogar neue Geschäftspartner- sowie Produkteinträge anlegen. Gleichfalls kannst Du über diesen Endpunkt Dateianhänge hochladen und sie den Auftragskandidaten beifügen.

Um diesen Endpunkt erfolgreich zu nutzen, benötigst Du gegebenenfalls folgende Daten:
- Datenquellname dieses Endpunktes (**dataSourceName**): `SOURCE.de.metas.ordercandidate.rest.OrderCandidatesRestControllerImpl`
- Interne Benennung des Datenziels (**dataDestInternalName**): `DEST.de.metas.ordercandidate`

| **Hinweis:** |
| :--- |
| Die importierten Auftragskandidaten und Dateianhänge findest Du unter dem Menüpunkt "[Auftragsdisposition](../../webui_collection/DE/Menu)" im WebUI wieder. |

## Schritte

### Auftragskandidaten importieren
[Folge dieser Anleitung](Allgemeine_Infos_REST_API) und verwende die Anfragemethode **<span style="color: #ffffff; background-color: #49cc90">&nbsp;POST </span>/api/sales/order/candidates**. Füge im **Schritt 7** Deine Serveranfrage im JSON-Format ein, die Du auf Grundlage der für diesen Endpunkt zur Verfügung gestellten Anfragevorlage vorbereitet hast.

### Dateianhänge hochladen
1. Klicke auf die Anfragemethode<br> **<span style="color: #ffffff; background-color: #49cc90">&nbsp;POST </span>/api/sales/order/candidates/{dataSourceName}/{externalReference}/attachments**.
1. Klicke rechts unterhalb der Anfragemethode auf ![Ausprobieren](assets/button_try_it_out.png). Sämtliche Eingabefelder werden editierbar.
1. Füge im Feld **Authorization token** Dein [Autorisierungstoken](../../webui_collection/DE/Authentifizierungstoken) ein.
1. Trage in das Feld **dataSourceName** den Datenquellnamen dieses Endpunktes ein.
1. Trage in das Feld **externalReference** die externe Referenz-ID (**External Header ID**) des Eintrages des Auftragskandidaten ein, dem der Dateianhang beigefügt werden soll.
 >**Hinweis:** Die **External Header ID** kannst Du in der "[Erweiterten Erfassung](../../webui_collection/DE/Ansichten)" aus dem [Aktionsmenü](../../webui_collection/DE/AktionStarten) des Eintrages des jeweiligen Auftragskandidaten einsehen.

1. Klicke im Feld **file** auf ![Google Chrome: "Datei auswählen"](assets/button_Datei_auswaehlen.png) oder ![Mozilla Firefox: "Durchsuchen..."](assets/button_Durchsuchen.png), um die als Anhang bestimmte Datei auszuwählen.
1. Klicke auf ![Ausführen](assets/button_execute.png), um den Dateianhang hochzuladen.
 >**Hinweis:** Eventuelle Fehlermeldungen werden Dir unten im Abschnitt **Responses** angezeigt.

## Beispielhafte Serveranfrage

### Auftragskandidaten erstellen inkl. Geschäftspartner- und Produkteintrag anlegen
```json
{
  "bpartner": {
    "bpartner": {
      "active": true,
      "code": "API_001_testBP",
      "companyName": "API Inc.",
      "externalId": "API-bp00001",
      "group": "Standard",
      "name": "Ganesh Rupka BP",
      "phone": "1800-CALL-ME",
      "syncAdvise": {
        "ifExists": "DONT_UPDATE",
        "ifNotExists": "CREATE"
      }
    },
    "contact": {
      "active": true,
      "description": "RESTing with the apes.",
      "email": "ganesh.rupka@nomail.com",
      "externalId": "API-con00001",
      "firstName": "Ganesh",
      "lastName": "Rupka",
      "name": "Ganesh B. Rupka",
      "syncAdvise": {
        "ifExists": "DONT_UPDATE",
        "ifNotExists": "CREATE"
      }
    },
    "location": {
      "active": true,
      "address1": "Street No. 1",
      "address2": "East Wing",
      "address3": "Apt. 3",
      "address4": "Room 4",
      "city": "New Dehli",
      "countryCode": "IN",
      "externalId": "API-loc00001",
      "name": "Ganesh Rupka's address",
      "syncAdvise": {
        "ifExists": "DONT_UPDATE",
        "ifNotExists": "CREATE"
      }
    },
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "CREATE"
    }
  },
  "currencyCode": "INR",
  "dataDestInternalName": "DEST.de.metas.ordercandidate",
  "dataSourceInternalName": "SOURCE.de.metas.ordercandidate.rest.OrderCandidatesRestControllerImpl",
  "dateRequired": "2019-08-23",
  "externalHeaderId": "extHead-101",
  "externalLineId": "extLine-101",
  "invoiceDocType": {
    "docBaseType": "ARI"
  },
  "org": {
    "code": "001",
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "FAIL"
    }
  },
  "poReference": "SEO_768-04",
  "price": 6.90,
  "pricingSystemCode": 2000837,
  "product": {
    "code": "Coco_2468",
    "name": "Coconuts",
    "type": "ITEM",
    "uomCode": "PCE",
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "CREATE"
    }
  },
  "uomCode": "PCE",
  "productDescription": "I've got a lovely bunch of coconuts.",
  "qty": 5
}
```
