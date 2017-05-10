---
title: Wie ändere ich den Hostnamen (URL) für die WebUI von metasfresh?
layout: default
tags:
  - Installations-Paket
  - Setup
lang: de
---

## Die URL der metasfresh WebUI ändern
Wenn du die URL, unter der die WebUI von metasfresh erreichbar ist ändern möchtest damit sich die Clients nicht die IP-Adresse deines Servers merken müssen, musst du die Datei `config.js` auf deinem Server anpassen:
1. verbinde dich mit dem Terminal (Shell) zu deinem Server und log dich als Nutzer `metasfresh` ein.
1. bewege dich in folgendes Verzeichnis: `/opt/metasfresh-webui-frontend/dist/`
1. ändere die Datei `./config.js` und ersetze die URLs
1. prüfe, ob die Änderung funktioniert hat, in dem du in deinem Browser die neue URL aufrufst

## Beispiel
Angenommen der Hostname deine Servers lautet `myerpserver` und du hast den DNS-Eintrag `http://myerpserver.domain.com` reserviert und möchtest, dass die WebUI darüber zu erreichen ist:

```bash
user@myerpserver:~$ sudo su metasfresh
metasfresh@myerpserver:~$ cd /opt/metasfresh-webui-frontend/dist
metasfresh@myerpserver:~$ vi ./config.js
#ersetze http://XXX.YYY.ZZZ.AAA/rest/api mit http://myerpserver.domain.com/rest/api
#ersetze http://XXX.YYY.ZZZ.AAA/stomp mit http://myerpserver.domain.com/stomp
#"XXX.YYY.ZZZ.AAA" sollte die bereits eingetragene IP-Adresse deines Servers sein
#speichere und beende den Editor
```
Öffne deinen Webbrowser mit der neuen URL: `http://myerpserver.domain.com`
Du solltest nun wie gewohnt auf die WebUI deines Servers zugreifen können.
