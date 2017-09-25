---
title: Wie ändere ich den Hostnamen (URL) für die metasfresh WebUI?
layout: default
tags:
  - Installations-Paket
  - Einrichtung
lang: de
ref: installer_how_to_change_hostnames_for_webui
---

## Übersicht
Wenn Du die URL der metasfresh WebUI ändern möchtest, damit sich die Clients nicht die IP-Adresse Deines Servers merken müssen, sondern einen DNS-Eintrag Deiner Wahl benutzen können, musst Du die Datei `config.js` auf Deinem Server anpassen.

## Schritte
1. Verbinde Dich mit dem Terminal (Shell) Deines Servers und melde Dich als Nutzer `metasfresh` an.
1. Bewege Dich in folgendes Verzeichnis: `/opt/metasfresh-webui-frontend/dist/`.
1. Ändere die Datei `./config.js` und ersetze die vorhandenen URL-Einträge mit dem Hostnamen deiner Wahl.
1. Prüfe, ob die Änderungen wirksam sind, indem Du in Deinem Browser die neue URL aufrufst.

## Beispiel
Angenommen der Hostname Deines Servers lautet `myerpserver` und Du hast den DNS-Eintrag `http://myerpserver.domain.com` reserviert und möchtest, dass die WebUI darüber zu erreichen ist:

```bash
user@myerpserver:~$ sudo su metasfresh
metasfresh@myerpserver:~$ cd /opt/metasfresh-webui-frontend/dist
metasfresh@myerpserver:~$ vi ./config.js
#ersetze http://XXX.YYY.ZZZ.AAA/rest/api mit http://myerpserver.domain.com/rest/api
#ersetze http://XXX.YYY.ZZZ.AAA/stomp mit http://myerpserver.domain.com/stomp
#"XXX.YYY.ZZZ.AAA" sollte die bereits eingetragene IP-Adresse deines Servers sein
#speichere und beende den Editor
```
Öffne in Deinem Internetbrowser die neue URL: `http://myerpserver.domain.com`. Du solltest nun wie gewohnt auf die WebUI Deines Servers zugreifen können.
