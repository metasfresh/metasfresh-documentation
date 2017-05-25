---
title: Wie erstelle ich einen neuen Systembenutzer ?
layout: default
tags:
  - Einrichtung
  - Benutzer und Rollen
lang: en
sequence: 10
---

## Übersicht

Benutzer sind eigentlich Kontakte, die auch Anmeldeberechtigung haben. Deshalb findest du die Kontakte deiner Geschäftspartner ebenfalls im Fenester Benutzer. Du kannst somit einem Kontakt auch die Anmeldung am System ermöglichen wenn Du diesen Schritten folgst:

## Schritte

### Erstelle einen Kontakt
1. [Öffne das Fenster](Menu) "Nutzer"
1. [Lege einen neuen Datensatz an](Neuer_Datensatz_Fenster_Webui)
1. fülle die Felder **Vorname** und **Nachname** aus
1. vergebe einen **Suchschlüssel**

### Mache aus dem Kontakt einen Systembenutzer
1. Hake **Systemuser** an
1. vergebe ein **login** als Benutzernamen
1. vergebe ein **Passwort** mit mindestens 8 Zeichen

  > Hinweis: Stell bitte sicher, dass das Passwort **mindestens 8 Zeichen** hat oder der Datensatz wird nicht gespeichert.

  > Hinweis 2: Der Benutzer kann sich wahlweise mit **Login** oder **EMail** anmelden

  > Hinweis 3: Der Benutzername und das Passwort sind **case sensitive**!


### Weise eine Rolle zu
1. gehe zum Register "Rolle"
1. [Lege einen neuen Datensatz an](Neuer_Datensatz_Tab_Webui)
1. wähle die Rolle aus, die der Benutzer haben soll

> Hinweis: Der Benutzer kann auch mehrere Rollen haben. in diesem Fall wird er bei der Anmeldung nach der gewünschten Rolle gefragt.


### Beispiel

Dieses Beispiel zeigt die Anlage eines Benutzers "mf" mit der Rolle "WebUI"

![](assets/neuernutzer.gif)
