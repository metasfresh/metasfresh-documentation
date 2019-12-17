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

Um diesen Endpunkt erfolgreich zu nutzen, benötigst Du folgende Daten:
- Datenquellname dieses Endpunktes (**dataSource**):<br> `int-SOURCE.de.metas.rest_api.ordercandidates.impl.OrderCandidatesRestControllerImpl`
- Interne Benennung des Datenziels (**dataDest**): `int-DEST.de.metas.ordercandidate`

Hierbei handelt es sich um sogenannte "Bezeichnerstrings" (ID-Zeichenfolgen), deren jeweilige Werte mit einem der entsprechenden Präfixe angegeben werden müssen:
- `int-` für die ID des Datensatzes auf der internen Plattform (`internalId`)
- `ext-` für die ID des Datensatzes auf der externen Plattform (`externalId`)
- `val-` für den Suchschlüssel des Dateneintrages in metasfresh

Wird kein Präfix angegeben, so wird der Elementwert als ID des Dateneintrages (`AD_Input_DataSource_ID` = `metasfreshId`) betrachtet.

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
      "phone": "1800-CALL-ME-NOW",
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
      "postal": "1234",
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
  "dataSource": "int-SOURCE.de.metas.rest_api.ordercandidates.impl.OrderCandidatesRestControllerImpl",
  "dataDest": "int-DEST.de.metas.ordercandidate",
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
  "pricingSystemCode": "Testpreise Kunden",
  "product": {
    "code": "Coco_2468",
    "name": "Coconuts",
    "type": "ITEM",
    "priceStd": 6.90,
    "uomCode": "PCE",
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "CREATE"
    }
  },
  "uomCode": "PCE",
  "productDescription": "I've got a lovely bunch of coconuts.",
  "qty": 5
  "salesPartnerCode": "test_42",
  "shipper": "val-DPD - Classic",
  "paymentRule": "OnCredit",
  "orderDocType": "SalesOrder"
}
```

### Nützliche Hinweise

| Element | Hinweis |
| :--- | :--- |
| `"pricingSystemCode":` | Das in der JSON-Serveranfrage angegebene [Preissystem](../../webui_collection/DE/Preissystem_anlegen) muss auf eine bestehende [Verkaufspreisliste](../../webui_collection/DE/Preisliste_anlegen) zeigen, die eine [Preislistenversion](../../webui_collection/DE/Preislistenversion_anlegen) enthält, in deren Gültigkeitszeitraum das Datum aus der Serveranfrage fällt, damit die [Produktpreise](../../webui_collection/DE/Preis_anlegen) erstellt werden. Zudem muss die besagte Preisliste mit einer **Standard-Steuerkategorie** ausgestattet sein.<br> Vergewissere Dich außerdem, dass die [Ablaufsteuerung](../../webui_collection/DE/Menu) für den Auftragskandidatenimport (`C_OLCand process to C_OrderLines`) auf *aktiv* gestellt ist. |
| `"postal":`<br>`"city":`<br>`"countryCode":` | Wenn Du **PLZ**, **Ort** und **Land** importierst, vergewissere Dich, dass die angegebene Postleitzahl auch im System vorhanden ist, anderenfalls kann sie nicht mit der entsprechenden Datenbanktabelle `C_Location` verknüpft werden und es werden lediglich die jeweiligen Felder ohne weitere [Georeferenz](../../webui_collection/DE/Geokodierung_aktualisieren) ausgefüllt. |
