---
title: Wie richte ich einen Drucker ein? (oder&#58; PDFs auf Server ablegen)
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Drucker & PDF-Routing
lang: de
sequence: 10
ref: Printing_PDF_Setup_Guide
---

## Überblick
Wenn in metasfresh von einem Drucker die Rede ist, ist in der Regel das virtuelle Drucken gemeint, d.h. das Erzeugen von PDF-Dateien und deren Speicherung auf einem Datenträger. Dies ist insbesondere dann nützlich, wenn du eine gehostete metasfresh-Instanz verwendest, die auf unseren Servern läuft und keinen Zugriff auf deine lokalen Hardware-Drucker hat, du aber dennoch in der Lage sein möchtest, deine Dokumente physisch auszudrucken.

Dies funktioniert so, dass die PDFs deiner benötigten Dokumente von der (gehosteten) metasfresh-Instanz generiert und in speziellen Ordnern ablegt ("ausdruckt") werden, welche individuell konfiguriert werden können, sowohl für Remote- als auch für On-Premise-Server. Anschließend können die digitalen Ausdrucke dann ihrem jeweiligen Verwendungszweck entsprechend den lokalen Druckern zugewiesen und darüber ausgedruckt werden.

**Profi-Tipp gefällig?** Eine bewährte Methode zur automatischen Verarbeitung eingehender Dokumente im Unternehmensumfeld ist der Einsatz <abbr title="z.B. FolderMill, e-FileWatcher">serverseitiger Anwendungen</abbr>, die die definierten Archivordner oder "Hot Folders" kontinuierlich überwachen und eingehende Dateien automatisch konvertieren oder auf einem festgelegten Drucker ausdrucken gemäß vordefinierter Regeln auf einem Server, einer Arbeitsstation oder einem Arbeitsplatzrechner.

## Voraussetzungen

### Ausgehende Belege für die Druckwarteschlange konfigurieren
Damit Dokumente automatisch an die Druckwarteschlange weitergeleitet werden, von wo aus sie dann einzeln oder als Teil von Sammeldruckaufträgen über den zugewiesenen Drucker verarbeitet werden können, müssen diese Schritte der [Anleitung für ausgehende Belege](Ausgehende_Belege_Konfig) durchgeführt werden unter Berücksichtigung der folgenden Einstellungen:
- Wähle die entsprechende **DB-Tabelle** aus, deren Belege gedruckt werden sollen.
- Setze ein Häkchen bei **In Druck-Warteschlange**, damit die Belege in die [Druckwarteschlange](Menu) aufgenommen werden.
- Wenn Belege in der Warteschlange automatisch verarbeitet, d.h. ihre PDF-Dateien im Druckerordner gespeichert werden sollen, setze ein Häkchen bei **Warteschlangen-Eintrag sofort verarbeiten**.

## Schritte

### Grundeinrichtung
1. [Konfiguriere einen logischen Drucker mit optionalen Druckerschächten](Logischer_Drucker_Einrichtung_WebUI).
1. [Konfiguriere einen PDF-Drucker mit optionalen Druckerschächten](PDF_Drucker_Konfiguration_WebUI).
    - ***Optional:*** [Aktiviere den Benutzer-Login als Host-Key](Benutzerlogin_als_HostKey_für_Drucken_aktivieren).
1. [Ordne logische und physische Drucker zu](Zuordnung_logische_und_physische_Drucker).
1. [Ordne logische und physische Druckerschächte zu, falls vorhanden](Zuordnung_logische_und_physische_Druckerschaechte).

### <a name="testdruck">Testdruck</a>
1. [Gehe ins Menü](Menu) und öffne das Fenster "Druck Warteschlange".
1. [Selektiere](AuswahlBelege) einen Eintrag in der Druckwarteschlange, der noch nicht verarbeitet wurde.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Alle drucken".
