---
title: Wie tausche ich Dateien mit einem entfernten metasfresh X2Go-Server aus?
layout: default
tags:
  - Systemadministration
lang: de
---

Wenn Du metasfresh auf einem entfernten X2Go-Server nutzt, möchtest Du eventuell Daten mit Deinem lokalen Client austauschen.

So richtest Du einen freigegebenen Ordner auf Deinem lokalen Client ein, auf den Du über X2Go zugreifen kannst:

1. Drücke die Tastenkombination `Strg` + `E`, um die Liste der Sitzungen zu öffnen.
1. Klicke doppelt auf die Sitzung, für die Du den Datentransfer einrichten möchtest.
   1. Wechsle in das Register "freigegebene Ordner" (=> siehe Screenshot weiter unten).
   1. Klicke auf das Ordnersymbol und wähle den lokalen Ordner aus, den Du freigeben möchtest.
   1. Klicke auf "Hinzufügen".
   1. Klicke auf "automatisch verbinden", damit der Ordner direkt bei der Anmeldung an X2Go verbunden wird.
   1. Klicke OK.
1. Starte jetzt die Verbindung mit X2Go.
1. Starte metasfresh und speichere eine Datei, z.B. eine Auftragsbestätigung, als PDF ab.
1. Dein freigegebener Ordner liegt im Ordner **Desktop** => **Freigabe**.
 >**Hinweis:** Du kannst auch über die Verknüpfung "Freigabe", die auf dem Desktop liegt, auf den Ordner zugreifen.



*Screenshot Freigebener Ordner*

![X2Go](../images/de_x2go_ordnerfreigabe.png)
