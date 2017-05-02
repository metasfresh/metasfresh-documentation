---
title: Wie installiere ich metasfresh mittels Installations-Paket?
layout: default
tags:
  - Installations-Paket
  - Installation
lang: de
sequence: 10
---

## Installation mit Hilfe des metasfresh Installations-Pakets

**Systemanforderungen:**
* Ubuntu 16.04 LTS (x86_64)

**Hardwareanforderungen:**
* min. 4 GB freier Arbeitsspeicher
* min. 10 GB freier Festplattenspeicher

**Anwendungsgebiet:**
Diese Installation installiert metasfresh direkt auf eine virtuelle Maschine, bzw. deinen Server.
Wenn du eine flexiblere Installation bevorzugst, probiere doch die Installation mittels [metasfresh-docker](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker) aus.


## Installation:
1. Lade dir den aktuellste metasfresh-server Installer [hier](http://metasfresh.com/download/) auf deinen Server
1. Führe ein Update der Quellen auf deinem Ubuntu server durch
```bash
user@host:~/$ sudo apt update
```
1. Prüfe, ob du den Hostnamen des Server auf dem Server selbst, sowie auf jedem deiner Client-PCs auflösen kannst. Prüfe deinen DNS-Server oder deine Hosts-Dateien, sollte dies nicht der Fall sein
1. Installiere den metasfresh-server mit Hilfe des Installers

```bash
user@host:~/$ tar xvzf ./metasfresh_5_X.tar.gz
user@host:~/$ cd metasfresh_install
user@host:~/metasfresh_install$ chmod +x ./install_metasfresh.sh
user@host:~/metasfresh_install$ sudo ./install_metasfresh.sh
```

## Zugriff

Nach erfolgreicher Installation, startet sowohl der Applikations-Server, als auch das WebUI-Backend automatisch. Warte bitte ein paar Minuten bis die Dienste vollständig gestartet sind, bevor du auf den Applikations-Server zugreifst.

Sobald die Dienste initialisiert sind, kannst du:
* die URL `http://XXX.YYY.ZZZ.AAA:8080/` in deinem Browser aufrufen, um den Java Swing Client herunterzuladen und auf den Client-PCs zu installieren
oder
* die URL `http://XXX.YYY.ZZZ.AAA/` in deinem Browser aufrufen, um die metasfresh WebUI aufzurufen (Hint: check out this TODO guide for using a hostname instead of an IP address to access the webui)
`Hinweis: XXX.YYY.ZZZ.AAA stellt die IP-Adresse deines Servers dar. Wenn du den Server lieber mit einem DNS-Eintrag (z.B. Hostnamen) aufrufen möchtest, richte den Server wie hier beschrieben ein`

Wenn du den status der metasfresh-dienste prüfen möchtest, kannst du das über folgende Befehle erreichen:
```bash
user@host:~/$ sudo systemctl start/stop/restart/status metasfresh_server.service
user@host:~/$ sudo /etc/init.d/metasfresh-webui-api start/stop/restart/status
```

Der Applikations-Server nutzt die Ports `8080/TCP`, `61616/TCP` als auch `5432/TCP` um die Kommunikation mit den Java Swing Clients herzustellen. Bitte stell sicher, dass deine Firewall so eingestellt ist, dass jeder Client auf diese Ports deines Servers zugreifen kann.

Um die metasfresh-webui per Browser aufzurufen, wird bei Standardeinstellungen der Port `80/TCP` genutzt. Stell bitte sicher, dass alle nötigen Client-PCs, die die WebUI nutzen wollen, auf diesen Port des Servers zugreifen kann.


## Häufig gestellte Fragen (FAQ)
Q: `Welche Software/Dienste werden installiert?`

A: Mit dem metasfresh Installers werden neben den metasfresh-diensten folgende Anwendungen heruntergeladen und installiert:[PostgreSQL-Server 9.5](https://www.postgresql.org/), [Apache2](https://httpd.apache.org/), [Elasticsearch](https://www.elastic.co/) und [OpenJDK-8 JDK](http://openjdk.java.net/projects/jdk8/).

Q: `Wo finde ich die metasfresh Binärdateien und die Konfigurationsdateien?`

A: Sowohl die Binärdateien als auch die Konfigurationsdateien befinden sich in den entsprechenden Unterverzeichnissen im Ordner `/opt/` deines Servers.

Q: `Ich möchte mir den Quellcode ansehen. Wo finde ich diesen?`

A: Du kannst dir den Quellcode aller unserer Anwendungen auf Github anschauen und herunterladen: https://github.com/metasfresh

Q: `Welche Ports werden von metasfresh genutzt?`

A:
* Port `80/TCP`(http) - WebUI
* Port `443/TCP` (https) - WebUI (optional)
* Port `8080/TCP` - Zum herunterladen des Java Swing Clients
* Port `61616/TCP` - Verbindung vom Java Client zum Applikations-Server
* Port `5432/TCP` - Verbindung vom Java Client zur Datenbank

Q: `Wenn ich versuche, mich mittels Java Clients zum Server zu verbinden, bekomme ich eine Fehlermeldung, dass die "DB Connection" nicht funktioniert. Woran liegt das?`

A: Sehr wahrscheinlich kann dein Client-PC den Hostnamen des Servers nicht auflösen. Stell bitte in deinem DNS-Server/Router/Hosts-Datei sicher, dass der Hostname des Servers mitsamt seiner im Netz erreichbaren IP-Adresse eingetragen ist.
Hinweis: der im Netzwerk aufgelöste Hostname muss identisch zum auf dem Server hinterlegten Hostnamen sein.
Wenn der Hostname deines Servers z.B. "erpserver" lautet, muss er von jedem Client als "erpserver" pingbar sein.


## Feedback

Wenn du Fragen oder Probleme bei der Installation hast, die hier nicht aufgeführt sind, kannst du uns im Forum nach Unterstützung fragen: [forum.metasfresh.org](http://forum.metasfresh.org)
