---
title: Wie greife ich auf metasfresh auf einem entfernten Server zu?
layout: default
tags:
  - Systemadministration
lang: de
---

Wenn Du metasfresh nutzen möchtest, ohne dass der Server in Deinem Netzwerk ist, dann verwende einen Terminaldienst, wie z.B. X2Go.

So greifst Du mit Deinem Client auf einen X2Go Server zu:

1. Lade Dir <a href="http://wiki.x2go.org/doku.php/download:start" title="Getting X2Go | wiki.x2go.org" target="_blank">hier</a> die passende Version für Dein Betriebssystem herunter und installiere sie.
1. Starte X2Go nach der Installation.
1. Drücke die Tastenkombination `Strg` + `N`, um eine neue Verbindung anzulegen.
   1. Host: *servernamen*.
   1. Login: *Benutzernamen*.
   1. Sitzungsart: wähle LXDE aus.
1. Drücke OK, um die Sitzung zu speichern.
1. Klicke rechts auf die Verbindung, um eine Sitzung zu starten.

![X2Go](../images/de_x2go_sitzung.png)
