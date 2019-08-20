---
title: Allgemeine Informationen zur Verwendung des metasfresh Webservice
layout: default
tags:
  - Anfängertipps für den metasfresh Webservice
lang: de
sequence: 10
ref: general_info_rest_api
---

## Übersicht
Über den metasfresh Webservice (REST API) kannst Du externe Daten nach metasfresh übertragen sowie bestehende Dateneinträge aus dem System abrufen, aktualisieren oder löschen. Dies erfolgt über sogenannte *API-Endpunkte*, wobei jeder Endpunkt für die Migration bestimmter Datensätze eingerichtet ist, die mittels Serveranfrage im [JSON-Format](https://www.json.org/json-de.html) an den metasfresh Application Server übermittelt werden können.
Eine Besonderheit der metasfresh REST API ist, dass Du Datenmigrationen, die im Normalfall über die einzelnen Endpunkte erfolgen würden, ebenso gut in nur einer Serveranfrage zusammenfassen kannst, im Zuge dessen gleich mehrere Dateneinträge auf einmal angelegt werden. So lässt sich z.B. bei der Migration eines Auftragskandidaten in die Auftragsdisposition von metasfresh gleichzeitig ein neuer Geschäftspartner- und Produkteintrag anlegen.

Ein Beispiel für eine Serveranfrage im JSON-Format steht für jeden Endpunkt zur Verfügung und kann an der jeweiligen Stelle (![Beispielwert](assets/example_value.png)) eingesehen, kopiert und (je nach Präferenz) in einem Texteditor Deiner Wahl mit den gewünschten Daten ergänzt werden. Eine Beschreibung des Anfrage-Modells (![Anfrage-Modell](assets/model.png)) mit Erläuterungen zu den einzelnen Elementen hilft Dir bei der Erstellung Deiner eigenen Serveranfrage.

Um den Webservice verwenden zu können, benötigst Du allerdings ein Autorisierungstoken, mit dem Du Dich erst bei der REST API authentifizieren musst, bevor Du eine Serveranfrage absenden kannst. Dieses Token erhältst Du in dem Eintrag Deines metasfresh-Nutzers.

## Schritte
1. [Halte Dein Autorisierungstoken bereit](../../webui_collection/DE/Authentifizierungstoken).
1. Erlange Zugang zur metasfresh Application Server REST API.
 >**Hinweis:** Die URL setzt sich in der Regel folgendermaßen zusammen:<br> https://`instanzname#`.metasfresh.com/app/swagger-ui.html#/

1. Öffne den Endpunkt, den Du zur Datenmigration verwenden möchtest, durch Anklicken des Endpunktnamens.
1. Klicke links unterhalb des Endpunktnamens auf die gewünschte [Anfragemethode](https://wiki.selfhtml.org/wiki/HTTP/Anfragemethoden).
1. Klicke rechts unterhalb der Anfragemethode auf ![Ausprobieren](assets/button_try_it_out.png). Die Schreibfelder **Authorization token** und **request** werden editierbar.
1. Füge in das Feld **Authorization token** Dein Autorisierungstoken ein.
1. Füge in das Feld **request** Deine vorbereitete Serveranfrage im JSON-Format ein.
1. Klicke auf ![Ausführen](assets/button_execute.png), um die Serveranfrage abzusenden.
 >**Hinweis:** Eventuelle Fehlermeldungen werden Dir im Abschnitt **Responses** unterhalb der Serveranfrage angezeigt.

## Verfügbare Endpunkte
Im Folgenden werden die derzeit verfügbaren Endpunkte aufgeführt. Klicke auf einen Endpunkt, über den Du mehr erfahren möchtest.

- [Auftragskandidaten (Auftragsdisposition)](order-candidates-rest-controller-impl)

## Beispiel
![REST API-Endpunkt: Auftragskandidaten](assets/REST_API_endpoint_example.png)
