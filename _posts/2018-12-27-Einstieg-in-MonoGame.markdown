---
layout: post
title: Einstieg in MonoGame
lang: de
description: Entwicklung eines Spiels mit MonoGame
cover: assets/images/screenshots/monogame/head01.png
tags: [MonoGame, GameDev, C#, Graphics]
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
---
Mit diesem Artikel beginne ich meine Blogserie zur Spieleprogrammierung.
Dabei wird der Fokus auf verschiedene Techniken in Programmierung oder Computergrafik gelegt: vom einfachen Dreieck bis über zu effizienten Algorithmen oder Shader.

Mein Nutzen ist dabei, die angewandten Methoden zu wiederholen oder neue auszuprobieren. Diese werde ich dann in Form von "Tutorials" hier festhalten. 

Bei den MonoGame Projekten wird je nach vorgeführten Techniken an einem 2D oder 3D Spiel entwickelt.
Während der Entwicklung kommt eine Class Library mit nützlichen Klassen zu stande kommen, die für euch öffentlich zugänglich ist.

Die Blogartikel zu 2D und 3D erscheinen vorerst abwechselnd.

Jedes zu behandelnde Thema ist grundsätzlich für jede Game-Engine oder jedes Graphics-Frameworks gültig und können somit dort angewendet werden.

Die Intention ist also, einmal lernen und überall anwenden! 

## Meine Vorgeschichte in GameDev
Mein Interesse für Programmierung begann in der Spieleentwicklung. Doch bevor ich mich selbständig in richtige Programmiersprachen eingearbeitet habe,
bastelte ich, wie vermutlich viele andere, mit dem RPG Maker 2000 an kleinen Spielen.
In meiner Ausbildung erlernte ich die wunderschöne Programmiersprache C#.

Irgendwann fragte ich mich, gibt es ein Game Framework, welches C# verwendet? Google lieferte mir als Antwort drei Buchstaben: Xna.

Mein Verständnis beschränkte sich auf Grund von mangelnder Mathematik-Kenntnisse auf 2D. Die Struktur war aber leicht verstanden und nach Einarbeitung enstand ein SpaceInvaders Klon zusammen mit einem Mitschüler im Rahmen eines Schulprojekts.
So sammelte ich meine ersten Erfahrungen mit richtiger Spieleentwicklung. 

C# und dementsprechend Xna war aber damals auf Windows beschränkt und die Weiterentwicklung vom Framework wurde mit Version 4.0 leider auch eingestellt. Sie hinterließen eine große Community und vielen Fans.

Einige Jahre später erlernte ich während meines Master Studiums Kenntnisse zu Computergrafik. 
Außerdem durfte ich in einem Modul meines Studiums ein weiteres selbständiges Spiel entwickeln. Mein Interesse für Spieleentwicklung lebte immer noch und wurde dadurch aus einem jahrelangem Schlaf zu geweckt.
Deshalb entwickelte ich zusammen mit einem Kommolitonen in OpenGL und C++ ein Spiel im LowPoly Grafikstil.

Nach Fertigstellung des LowPoly Spiels hab ich Blut geleckt: "Ich entwickel noch ein Spiel!".

Da ich für XNA und C# aus früherer Zeit noch Sympathie empfinde, beschloss ich mich in MonoGame einzuarbeiten.

Ich würde mich sehr darüber freuen, wenn du mich dabei begleitest.

## Warum MonoGame, wenn es doch Unity3d gibt?
Keine Frage: Unity3d ist klasse!

Doch, wie gesagt: meine Sympathie für Xna ist groß. Bei MonoGame wurde sich an die Struktur von Xna gehalten und weiterentwickelt.
Der Unterschied von Unity3d zu MonoGame ist, dass Unity einen mächtigen Editor und eine Physics-Engine hat.

Inspiriert durch OpenGL wollte jedoch mein akademischer Geist sich weiter mit Kernfragen beschäftigen:
 Wie funktioniert Collision? Wie arbeitet die Render Pipeline? Wie funktionieren welche Transformationen?
 
 Ist der Kern einmal verstanden, dann ist jede Engine ein klacks!

Jeder, der gerne codet wird hier sehr sicher viel Spaß haben!

## Das Setting
Entwickelt wird mit einem MacOS High Sierra und der IDE Rider von JetBrains.

Die Installation war unkompliziert. Man wählt lediglich  die passende Version und installiert diese.

Für Windows wird Visual Studio empfohlen, weil dort ein MonoGame Projekt, wie üblich erstellt werden kann

[Download MonoGame](http://community.monogame.net/t/monogame-3-7-1-release/11173)

Ich verwende aber JetBrains Rider, weil diese IDE auf allen Betriebssystemen identisch ist. Es gibt dafür zwar kein integriertes Template, wie bei Visual Studio, man kann aber eins im Internet finden:

### Einrichten in Rider

1. Klick [hier](https://github.com/Limeoats/Monogame-Rider-Template) und downloade dir das Template 

2. Benenne die Dateien MonogameRiderTemplate.sln, MonogameRiderTemplate.csproj und den Ordner MonogameRiderTemplate in deinen gewünschten Projektnamen um ![Bild](/assets/images/screenshots/monogame/01.png "Old Names") ![Bild](/assets/images/screenshots/monogame/02.png "New names")
3. Öffne das Projekt und klick mit rechter Maustaste auf die Projektmappe und anschließend auf "Add existing project..."
4. Wähle die vorher umbenannte .csproj-Datei aus
5. Lösch im Projektbaum das Projekt MonogameRider
6. Mit rechter Maustaste auf das neu eingebundene Projekt und "Properties...".
7. In diesem Fenster änderst du dann noch "Assembly name" und "Root namespace" ![Bild](/assets/images/screenshots/monogame/03.png "Project properties")
8. Änder ebenfalls in Datei "Properties/AssembyInfo.cs" alle gewünschten Einträge.
9. Jetzt nur noch in "Source/Game.cs" und "Source/Program.cs" den Namespace "TheVillageOfLife" auf deinen gewünschten umändern
10. Geh nun oben rechts auf "Edit Solution configurations..." und nehme sicher, dass folgende Einstellungen gesetzt sind ![Bild](/assets/images/screenshots/monogame/04.png "Project configuration 1") ![Bild](/assets/images/screenshots/monogame/05.png "Project configuration 2") 
11. Abschließend kann das Projekt durch den Play-Button gestartet werden ![Bild](/assets/images/screenshots/monogame/06.png "Game Window")

Klick hier weiter für [2D](digitalriding.de) oder [3D](digitalriding.de).

Headerbild:https://www.polygon.com/2013/10/4/4801796/nintendo-bringing-monogame-framework-to-wii-u + MonoGame Logo