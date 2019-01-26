---
layout: post
title: Dependency Injection
lang: de
description: Eine Einführung zu Proxies 
cover: assets/images/syringe.jpg
tags: [Patterns, Programming, Kotlin]
author: valentinob
categories: valentinob
subclass: 'post tag-fiction'
navigation: true
---

In der Welt der Software Architektur sind mit der Zeit einige Muster (engl. Patterns) entstanden,
womit man komplexe Probleme meistens auf die gleiche Art und Weise lösen kann.
Vielleicht sind dir einige dieser Patterns bereits bekannt, weil du davon gelesen oder sie angewendet hast.
Heute geht es um das sagenumwobene Design Pattern Dependency Injection (DI) zu deutsch  «Abhängigkeiten injizieren».
Was es nun genau mit DI auf sich hat, lieber Leser, das werde ich dir in diesem Artikel näher bringen. 
Nun ab ans Eingemachte!

# Einführung
Dir gehen vielleicht gerade einige Fragen durch den Kopf.
* Ist es mit SQL Injection verwandt?
* Ist mit Dependency eine Library gemeint die ein Programm verwendet? 
* Kann mir eine Dependency injiziert werden?

Die Antwort auf alle drei Fragen ist **Nein**!

Das Pattern DI wird im Kontext der objektorientierten Programmierung (OOP) gesehen.

Da wir uns in der OOP Objekte aus der realen Welt modellieren, versuche ich DI mal so zu erklären.
Nehmen wir mal einen Computer. Ein Computer besteht aus vielen Bauteilen. 
Platziert werden diese Bauteile auf dem Mainboard, dessen Aufgabe ist diese zu verbinden,
damit Informationen über elektrische Signale ausgetauscht werden können. 

**Frage**: Wer liefert Strom an das Mainboard?

*Es ist das Netzteil.*
 
Es wandelt den Wechselstrom in Gleichstrom um, damit alle Teile ordnungsgemäß arbeiten können.
Das tolle an der Sache ist, dass man nicht auf ein bestimmtes Netzteil eines Herstellers angewiesen ist.
Die Leistung (Watt) muss nur gleich oder höher dem des alten Netzteils entsprechen.  
D.h man muss eine Art Vertrag einhalten. 

**Frage**: Wie hält man Verträge beim Programmieren ein?

*Mit Interfaces.*

---

Code technisch kann man es so darstellen
 
Deklaration von Interfaces
```
interface PowerSupply
interface Mainboard
```

Deklaration von Klassen
```
class EightyPLUS : PowerSupply
class ATXFormat : Mainboard
```
ohne DI
```
class ATXFormat() : Mainboard {
    val powerSupply: PowerSupply = EightyPLUS()
}
```
mit DI
```
class ATXFormat constructor(val powerSupply: PowerSupply) : Mainboard
```

Das Mainboard hat eine Abhangigkeit zum Netzteil. 
Das kann man so Ausdrücken ``Mainboard -> PowerSupply``

# Vorteile
Ja die gibt es in der Tat. Wenn du dir das obige Beispiel nochmal anschaust, 
dann wirst du festellen, dass die Dependency nicht in der ``ATXFormat`` Klasse hard coded ist.
Ich kann somit ein verschiedenes Netzteil verwenden und bin nicht auf das eine angewiesen.

Ein weiterer Vorteil wird erst ersichtlich, 
nachdem der Abschnitt [Verdrahtung von Dependencies](#verdrahtung-von-dependencies) gelesen wurde.

# Brauche ich das?
Da müssen wir uns erstmal Fragen, wann es denn überhaupt sinnvoll ist irgendeine Art von Design Pattern anzuwenden.
Ich antworte mit unser aller Lieblings Antwort: **Es kommt drauf an**.
 
Oft ist es so, dass man etwas über ein Pattern liest, aber dann gar nicht weiß, ob es sinnvoll für einen selbst anwendbar ist.
Das ist auch nachvollziehbar, wenn man noch nicht an etwas größeren Projekten gearbeitet hat. 
Fakt ist aber das Software ab einer gewissen Größe unheimlich komplex wird, sowohl technisch als auch in der Domäne.
Es treten dann Probleme auf, wofür schlaue Köpfe längst eine Musterlösung parat haben.
Diese Musterlösungen wurden festgehalten und als Buch veröffentlicht. 
Für alle die es interessiert es ist das Buch "Design Patterns. Elements of Reusable Object-Oriented Software".

Sry für den kleinen Abschweif. Das soll kein Aufsatz über Design Patterns an sich werden.

Nun zurück zum wesentlichen. Wenn du ein kleines Programm schreibst, dann werden die Vorteile nicht ersichtlich sein.
Ein Objekt was du konstruiert hat entweder primitive Typen oder ein bis zwei weitere Objekte als Parameter.
Bevor man dann ins Overengineering (Aufwand ist höher als der Nutzen) kommt, kann man es auch so lassen.
Wenn du aber weißt dass in Zukunft noch einiges dran gemacht wird und das Programm wachsen wird, 
dann kann man vorsorgen und DI kann seine stärken ausspielen.

# Arten
Es gibt verschiedene Arten dieses Pattern umzusetzen.

## Setter Injection
Das läuft wie der Name es schon vermuten lässt, über eine Setter Methode.

## Field Injection
Bekannt in der Java Welt durch Annotationen.
Über eine Annotation wird die Dependency zur Laufzeit verdrahtet.

## Das einzig Wahre: Constructor Injection
Jap. Es ist nunmal so. Ich erkläre dir auch wieso.

Konstruktoren sind aus einem gewissen Grund dar. Nachdem du ein Objekt instanziiert hast, sollte es in einem konsistenten Zustand sein.
Mit Setter Methoden kann man das nicht erreichen. Man kann z.B. NullPointerExceptions bekommen, 
wenn man eine Methode aufruft, die eine Property benutzt, die noch nicht gesetzt wurde.
>Du kannst natürlich Setter Methoden anbieten, wenn du zur Laufzeit irgendwas ändern möchtest.

Ein weiterer Grund betrifft Unit Tests. 
Bei Field Injection kannst du nicht so ohne weiteres ein Platzhalter (Stub) einsetzen.
Das ist wiederum bei Settern gar kein Problem.

Wenn man das ganze betrachtet bleibt nur noch Constructor Injection übrig.

>Das habe ich übrigens auch im ersten Codebeispiel verwendet.

# Verdrahtung von Dependencies
Dependencies müssen untereinander verdrahtet werden.
Dabei können unterschiedliche Strukturen entstehen die einen Graphen repräsentieren (Dependency Graph). 
 
Dependencies unter Objekten verlaufen selten linear, so wie in dem Beispiel ``A -> B -> C``.
 
Oft ist es so, dass regelrechte Bäume entstehen
```
     B -> C
 A ->         F
     D -> E ->
              G
```
Das war jetzt nur ein simples Beispiel. In der Praxis ist sowas Standard. 

Mit dem Mantra im Sinn, das Klassen nicht allzu groß werden dürfen und somit alles aufgesplittet wird,
können regelrechte Abhängigkeits Explosionen entstehen.
Diese Strukturen von Hand zu Verdrahten ist nicht ohne.
Und zugegebenermassen, wir Informatiker sind faul. 
Da wir uns das Leben einfacher machen wollen, 
gibt es auch bereits eine Lösung dafür und zwar Inversion of Control Container.

# DI != IoC
Inversion of Control (IoC) zu Deutsch «Umkehrung der Steuerung» lässt den Benutzer in den Vordergrund treten.
Nehmen wir mal eine Konsolenprogramm welches deine Eingabe erfordert.
Das Programm steuert den Fluss deiner Interaktion. 
Zu keinem Zeitpunkt kannst du deine Adresse angeben, wenn dein Name gefordert wird.
In einer GUI sieht es anders aus, da du jedes Feld in beliebiger Reihenfolge füllen kannst. 
Da liegt die Macht in deiner Hand.

Betrachten wir das ganze eine Ebene tiefer. 
Nehmen wir mal Callbacks als Beispiel.
Wenn ein Event innerhalb deiner Applikation veroeffentlich wird oder wenn jemand auf einem Button in einer UI klickt. 
Du als Client kannst selber bestimmen, was passieren soll, nachdem diese Aktion eingetreten ist.

DI ist nichts anderes als eine Form von IoC. 
Der Client hat hier die Verantwortung die Dependencies zu verdrahten und ist recht flexibel damit, 
weil es nicht hard coded ist.
Durch die Benutzung von Interfaces können jegliche Implementierungen genutzt werden.

## IoC Container
Es gibt Libraries und Frameworks in gängigen Programmiersprachen, die solche IoC Container anbieten.
Nehmen wir mal Java als Beispiel, da ist das Spring Framework die erste Anlaufstelle.
 
Die wesentliche Aufgaben eines IoC Containers sind
* Konstruierung des Dependency Graphs
* Life Cycle Management von Objekten (Man kann sich als Client in verschiedene Zyklen eines Objekts einhaken z.B. nachdem es konstruiert wurde)
* Injizierung von Konfigurations Werten

## Let's program an IoC Container
Da wir nun über die ganze Theorie bescheid wissen, wird’s jetzt richtig spannend.

Ich habe einen simplen IoC Container in Kotlin programmiert.
Das Beispiel ist etwas länger geworden und somit habe ich ein Repository auf GitHub angelegt.
Ich habe es da auch ausgiebig beschrieben und kommentiert, allerdings in Englisch.

https://github.com/Valefant/Addict

# Ende
Ich hoffe du konntest einiges aus diesem Artikel mitnehmen.
Falls ihr weitere Vorschläge habt welche Themen wir als nächste behandeln sollen, gebt uns bitte Bescheid. :-)
 
Mach dich jedenfalls auf den nächsten Artikel gefasst, denn da nehmen wir WebSockets näher unter die Lupe.