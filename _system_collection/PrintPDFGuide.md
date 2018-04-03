---
title: Wie konfiguriere ich einen PDF Drucker  ?
layout: default
tags:
  - Printing
  - Setup
lang: en
sequence: 20
ref: printpdfsetup

---

## Schritte 

Wichtig: Sämtliche Daten müssen auf einer Org liegen auf die der Benutzer zugreifen kann. Beispiel: Wenn der Schact des 

Wichtig: Sämtliche Daten müssen auf einer Org liegen auf die der Benutzer zugreifen kann


## Server
### enable printing 
restart app server!

eventually add to docoutbound config to have printing queue records


### enable hostkey of user

1. open user window
2. set checkbox isloginhostkey

Dadurch wird der login name des Benutzers als Hostkey genommen und nicht die Session ID.

### create pdf printer

1. open window printer
create new pdf printer
output type = PDF

### create printer allocation

create printer allocation
on hostkey of user
to pdf printer


### configure logical printer


### test print

open druckwarteschlange
select document which wasnt printed yet
prozess ausgewählter datensatz probedruck
