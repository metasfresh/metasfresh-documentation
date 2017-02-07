---
title: Wie mache ich einen CSV Import komplett rückgängig ?
layout: default
tags:
  - Datenimport
lang: de
---

Um einen erfolgreichen Import rückgängig zu machen bleibt nur die erstellten Daten wieder zu löschen.

**ACHTUNG:** Dabei werden ALLE Daten des heutigen Tages gelöscht - auch die nicht importierten!

1. Führe diese SQL via PGAdmin auf der Datenbank aus:


## Partnerimport 

Löscht **ALLE** produktiven Partnerdaten und Importdaten des heutigen Tages:

```
delete from aD_user where created::date = now()::date; --löscht Kontakte
delete from c_bpartner_location  where created::date = now()::date; --löscht Adressenzuordnungen
delete from c_location where created::date = now()::date; --löscht Adressdaten
delete from c_bpartner where created::date = now()::date; --löscht Partner
delete from I_BPartner where created::date = now()::date;  --löscht Partnerimportdaten
```


## Produktimport 

Löscht **ALLE** produktiven Produktdaten und Importdaten des heutigen Tages:

```
delete from m_product aD_user where created::date = now()::date; --löscht Produkte
delete from I_product where created::date = now()::date;  --löscht Produktimportdaten
```