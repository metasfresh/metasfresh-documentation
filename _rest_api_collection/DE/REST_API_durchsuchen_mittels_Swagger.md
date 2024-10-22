---
title: Wie durchsuche ich die REST API mittels Swagger?
layout: default
tags:
  - Anfängertipps für den metasfresh Webservice
lang: de
sequence: 20
ref: how_do_i_browse_the_rest_api_using_swagger
---

## Überblick
metasfresh verwendet Swagger, um REST API-Funktionen und Endpunkte darzustellen.

Über Swagger lassen sich alle [verfügbaren Endpunkte](../../pages/rest_api/index_de) durchsuchen und nutzen.<br>
Weitere Informationen zur Verwendung der REST-API findest du in unserem [allgemeinen Guide zum metasfresh Webservice](Allgemeine_Infos_REST_API).

Abhängig von der metasfresh Build-Version kann man auf die REST-API zugreifen, indem der folgende Pfad an die persönliche Instanz/Server-URL angehängt wird, die in der Regel mit `https://<deinserver:port>` beginnt:

### Builds bis Version `5.175`
- metasfresh webui (**webapi**) REST API
    - `/swagger-ui/index.html`
    >**Hinweis:** Nützlicher Endpunkt für die Anwendung von Migrationsskripten..

- metasfresh **app**lication **server** REST API
    - `/app/swagger-ui/index.html`

### Builds ab Version `5.176` (Java 17)
Die Instanz/Server-URL dieser Build-Versionen ist immer gleich aufgebaut: `https://<yourserver:port>/swagger-ui/index.html`.<br>
Zum Durchsuchen enthalten die Swagger-Webseiten oben ein Suchfeld "**Explore**", in das der URL-Pfad eingegeben werden kann, um den gewünschten REST-API-Endpunkt zu öffnen.

- metasfresh webui (**webapi**) REST API
    - `/v3/api-docs`<br>
    <kbd><img src="../EN/assets/Swagger Explore search box - webapi.png" alt="Swagger 'Explore' box" style="max-height: 35px"></kbd>

- metasfresh **app**lication **server** REST API
    - `/app/v3/api-docs`<br>
    <kbd><img src="../EN/assets/Swagger Explore search box - app server.png" alt="Swagger 'Explore' box" style="max-height: 35px"></kbd>

## Nächste Schritte (optional)
- [Ändere die Sprache der Benutzersitzung mittels Swagger](Sprache_Benutzersitzung_via_Swagger_einstellen).
- [Aktiviere die Entwickleransicht mittels Swagger](Entwickleransicht_via_Swagger_aktivieren).
