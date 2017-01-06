---
title: Was bedeuten die Systemmeldungen?
layout: default
tags:
  - Weitere Infos
  - Benutzung
lang: de
---
**Meldung:**   

    Current record was changed by another user, please ReQuery


**Erklärung:** Der Datensatz den Du gerade bearbeitest wurde in der Zwischenzeit von einem anderen Benutzer oder dem System geändert.
 
**Lösung:** Klicke auf ![img](../images/icons/Reset24.png) und dann auf ![img](../images/icons/Refresh24.png)
   

---
**Meldung:**   

    Ausnahme: In der derzeitigen Rolle können Sie auf die Informationen nicht zugreifen.

    Sie haben nicht die notwendigen Zugriffsrechte (NoAccess) 

	Rolle: Quickstart 
 
	Fenster: Lager und Lagerort (ID=139)
 
**Erklärung:** Du hast keine Rechte auf die Funktion die Du starten möchtest. In diesem Beispiel kannst Du mit der Rolle "Quickstart" nicht auf das Fenster "Lager und Lagerort" zugreifen.
  
**Lösung:** Füge die Berechtigung Deiner Rolle zu oder kontaktiere den Admin der das für Dich tun kann.

---

**Meldung:**   

    Periode geschlossen

**Erklärung:** Für das Belegdatum gibt es keine offene Periode. Dies ist vor allem nach einem Jahreswechsel der Fall wenn für das neue Jahr noch keine Perioden angelegt wurden.
 
**Lösung:** [Wie erstelle ich die Perioden für ein neues Jahr?](Wie_erstelle_ich_die_Perioden_fuer_ein_neues_Jahr)

---
**Meldung:**   
```
HasChanges
```

**Erklärung:** Die Stammdaten zu dem Datensatz, den Du gerade bearbeitest, wurden in der Zwischenzeit von einem anderen Benutzer oder dem System geändert. 

Bsp.: Die in einem Rechnungskandidaten verwendete Preisliste wurde nach Erstellen des Rechnungskandidaten verändert, weshalb die Rechnung jetzt nicht erstellt werden kann.
 
**Lösung:** Überprüfe die Stammdaten zu Deinem Datensatz auf Vollständigkeit und Fehler.

Im vorliegenden Beispiel: Überprüfe die verwendete Preisliste und die Preislistenversion! Wenn die verwendete Preisliste z.B. nicht mehr als Verkaufspreisliste gekennzeichnet ist, kann die Verkaufsrechnung nicht erstellt werden.
   

---
