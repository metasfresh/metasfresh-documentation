---
title: Wie installiere ich metasfresh mittels des Installations-Pakets?
layout: default
tags:
  - Installations-Paket
  - Installation
lang: de
sequence: 10
ref: installer_how_do_install_metasfresh_package
---

## Installation mittels des metasfresh Installations-Pakets

**Systemanforderungen:**
* Ubuntu 16.04 LTS (x86_64)

**Hardware-Anforderungen:**
* min. 4 GB freier Arbeitsspeicher
* min. 10 GB freier Festplattenspeicher

**Anwendungsgebiet:**
Diese Installation installiert metasfresh direkt auf eine virtuelle Maschine bzw. Deinen Server.
Wenn Du eine flexiblere Installation bevorzugst, probiere doch die Installation mittels [metasfresh-docker](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker) aus.


## Installation
1. Lade Dir den aktuellsten metasfresh-Server Installer [hier](https://metasfresh.com/download/) auf Deinen Server.
1. Führe ein Update der Quellen auf Deinem Ubuntu Server durch.
```bash
user@host:~/$ sudo apt update
```
1. Prüfe, ob Du den Hostnamen des Servers auf dem Server selbst sowie auf jedem Deiner Client-PCs auflösen kannst, auf denen Du den Java Swing Client oder die WebUI-Oberfläche benutzen möchtest. Sollte dies nicht der Fall sein, überprüfe Deinen DNS-Server oder Deine Host-Dateien.
1. Installiere den metasfresh-Server mithilfe des Installers.

```bash
user@host:~/$ tar xvzf ./metasfresh_5_X.tar.gz
user@host:~/$ cd metasfresh_install
user@host:~/metasfresh_install$ chmod +x ./install_metasfresh.sh
user@host:~/metasfresh_install$ sudo ./install_metasfresh.sh
```

## Zugriff

Nach erfolgreicher Installation starten sowohl der Applikations-Server als auch das WebUI-Back-End automatisch. Warte bitte ein paar Minuten, bis die Dienste vollständig gestartet sind, bevor Du auf den Applikations-Server zugreifst.

Sobald die Dienste initialisiert sind, kannst Du:
* Die URL `http://XXX.YYY.ZZZ.AAA:8080/` in Deinem Browser aufrufen, um den Java Swing Client herunterzuladen und ihn auf den Client-PCs zu installieren<br>

**oder**

* Die URL `http://XXX.YYY.ZZZ.AAA/` in Deinem Browser aufrufen, um auf die metasfresh WebUI zuzugreifen
 >**Hinweis:** XXX.YYY.ZZZ.AAA stellt die IP-Adresse Deines Servers dar. Wenn Du den Server lieber mit einem DNS-Eintrag (z.B. Hostnamen) aufrufen möchtest, richte den Server wie [hier beschrieben](installer_wie_aendere_ich_hostnamen_in_webui) ein.

Wenn Du den Status der metasfresh-Dienste überprüfen möchtest, stoppe bzw. starte sie einfach neu. Hierzu kannst Du folgende Befehle benutzen:
```bash
user@host:~/$ sudo systemctl start/stop/restart/status metasfresh_server.service
user@host:~/$ sudo /etc/init.d/metasfresh-webui-api start/stop/restart/status
```

Der Applikations-Server nutzt die Ports `8080/TCP`, `61616/TCP` als auch `5432/TCP`, um die Kommunikation mit den Java Swing Clients herzustellen. Bitte stelle sicher, dass Deine Firewall so eingestellt ist, dass jeder Client auf diese Ports Deines Servers zugreifen kann.

Um die metasfresh-WebUI per Browser aufzurufen, wird bei Standardeinstellungen der Port `80/TCP` genutzt. Stelle bitte sicher, dass alle nötigen Client-PCs, die die WebUI nutzen wollen, auf diesen Port des Servers zugreifen können.


## Häufig gestellte Fragen (FAQ)
Q: `Welche Software/Dienste werden installiert?`

A: Mit dem metasfresh Installer werden neben den metasfresh-Diensten folgende Anwendungen heruntergeladen und installiert: [PostgreSQL-Server 9.5](https://www.postgresql.org/), [Apache2](https://httpd.apache.org/), [Elasticsearch](https://www.elastic.co/) und [OpenJDK-8 JDK](http://openjdk.java.net/projects/jdk8/).

---

Q: `Wo finde ich die metasfresh Binärdateien und die Konfigurationsdateien?`

A: Sowohl die Binärdateien als auch die Konfigurationsdateien befinden sich in den entsprechenden Unterverzeichnissen im Ordner `/opt/` Deines Servers.

---

Q: `Ich möchte mir den Quellcode ansehen. Wo finde ich diesen?`

A: Du kannst Dir den Quellcode aller unserer Anwendungen auf Github anschauen und herunterladen: https://github.com/metasfresh.

---

Q: `Welche Ports werden von metasfresh genutzt?`

A:
* Port `80/TCP`(http) - WebUI
* Port `443/TCP` (https) - WebUI (optional)
* Port `8080/TCP` - Zum herunterladen des Java Swing Clients
* Port `61616/TCP` - Verbindung vom Java Client zum Applikations-Server
* Port `5432/TCP` - Verbindung vom Java Client zum Datenbank-Server

---

Q: `Wenn ich versuche, mich mittels Java Clients mit dem Server zu verbinden, bekomme ich eine Fehlermeldung, dass die "DB Connection" nicht funktioniert. Woran liegt das?`

A: Sehr wahrscheinlich kann Dein Client-PC den Hostnamen des Ubuntu-Servers nicht auflösen. Stelle bitte in Deinem DNS-Server/Router/Host-Datei sicher, dass der Hostname des Servers mitsamt seiner im Netz erreichbaren IP-Adresse eingetragen ist.
**Hinweis:** Der im Netzwerk aufgelöste Hostname muss identisch mit dem auf dem Server hinterlegten Hostnamen sein. Wenn der Hostname Deines Servers z.B. "erpserver" lautet, muss er von jedem Client als "erpserver" pingbar sein.


## Feedback

Bei Fragen oder Problemen bei der Installation, die hier nicht aufgeführt sind, kannst Du uns gerne in unserem offiziellen Forum um Unterstützung bitten: [forum.metasfresh.org](http://forum.metasfresh.org).
