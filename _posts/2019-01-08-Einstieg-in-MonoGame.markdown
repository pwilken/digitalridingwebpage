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

Mein Nutzen dabei ist, die angewandten Methoden zu wiederholen oder neue auszuprobieren. Diese werde ich dann in Form von "Tutorials" hier festhalten. 

Bei den MonoGame Projekten wird, je nach vorgeführten Techniken, an einem 2D oder 3D Spiel entwickelt und die Codeschnipsel werden bei Github zur Verfügung gestellt.
Die Blogartikel zu 2D und 3D erscheinen vorerst abwechselnd.

Ab und zu werde ich aber auch andere Themen in der Computergrafik behandeln.

Jedes zu behandelnde Thema ist grundsätzlich für jede Game-Engine oder jedes Graphics-Frameworks gültig und können somit dort angewendet werden.

Die Intention ist also: einmal lernen und überall anwenden! 

## Meine Vorgeschichte in GameDev
Mein Interesse für Programmierung begann in der Spieleentwicklung. Doch bevor ich mich selbständig in richtige Programmiersprachen eingearbeitet habe,
bastelte ich, wie vermutlich viele andere, mit dem RPG Maker 2000 an kleinen Spielen.
In meiner Ausbildung erlernte ich die wunderschöne Programmiersprache C#.

Irgendwann fragte ich mich, gibt es ein Game Framework, welches C# verwendet? Google lieferte mir als Antwort drei Buchstaben: XNA.

Mein Verständnis beschränkte sich auf Grund von mangelnder Mathematik-Kenntnisse auf 2D. Die Struktur war aber leicht verstanden und nach Einarbeitung enstand ein SpaceInvaders Klon zusammen mit einem Mitschüler im Rahmen eines Schulprojekts.
So sammelte ich meine ersten Erfahrungen mit richtiger Spieleentwicklung. 

C# und dementsprechend XNA war aber damals auf Windows beschränkt und die Weiterentwicklung vom Framework wurde mit Version 4.0 leider auch eingestellt. Sie hinterließen eine große Community und viele Fans.

Einige Jahre später erlernte ich während meines Master Studiums Kenntnisse zur Computergrafik. 
Außerdem durfte ich in einem Modul meines Studiums ein weiteres selbständiges Spiel entwickeln. Mein Interesse für Spieleentwicklung lebte immer noch und wurde dadurch aus einem jahrelangem Schlaf geweckt.
Deshalb entwickelte ich zusammen mit einem Kommilitonen in OpenGL und C++ ein Spiel im LowPoly Grafikstil.

Nach Fertigstellung des LowPoly Spiels hab ich Blut geleckt: "Ich entwickel noch ein Spiel!".

Da ich für XNA und C# aus früherer Zeit noch Sympathie empfinde und mein Fokus auf dem Verständnis der Kerntechniken liegt, beschloss ich mich in MonoGame einzuarbeiten.

Ich würde mich sehr darüber freuen, wenn du mich dabei begleitest.

## Warum MonoGame, wenn es doch Unity3d gibt?
Keine Frage: Unity3d ist klasse!

Doch wie gesagt: meine Sympathie für XNA ist groß. Bei MonoGame wurde sich an die Struktur von XNA gehalten und weiterentwickelt.
Der wesentliche Unterschied von Unity3d zu MonoGame ist, dass Unity einen mächtigen Editor und eine Physics-Engine hat und man deshalb nicht unbedingt verstehen muss, was man dort überhaupt benutzt.

Inspiriert durch OpenGL wollte sich mein akademischer Geist jedoch weiter mit Kernfragen beschäftigen:
Welche Möglichkeiten gibt es eine Kollision zu prüfen? Was kann man alles mit einer Render Pipeline machen? Welche Transformationen benötige ich für welche Aktion?
 
Ist dieses Wissen einmal im Kopf verankert, ist jede weitere Engine ein klacks!

Jeder, der gerne codet, wird hier also sicher viel Spaß haben!

## Das Setting
Entwickelt wird mit einem MacOS High Sierra und der IDE Rider von JetBrains.

Die Installation war unkompliziert. Man wählt lediglich  die passende Version und installiert diese.

Für Windows wird Visual Studio empfohlen, weil MonoGame dort Templates anbietet und somit neue Projektmappen schnell erstellt sind. An dieser Stelle ist auch zu erwähnen, dass es auch eine VS Version für Mac gibt, die man problemlos verwenden kann.

[Hier](http://community.monogame.net/t/monogame-3-7-1-release/11173) findet du die Downloadsektion für das MonoGame Framework.

Ich verwende JetBrains Rider, weil diese IDE auf allen Betriebssystemen identisch ist. Es gibt dafür zwar kein integriertes Template, wie bei Visual Studio, man kann aber eins im Internet finden.

Es folgt die Anleitung zur Rider IDE. Anleitungen zu anderen IDEs folgenden bald und werden hier nachträglich eingetragen.

### Einrichten in Rider
An dieser Stelle sei erwähnt, dass Rider kostenpflichtig ist. Man kann sich jedoch als Schüler oder Student eine Studentlicense besorgen.
1. Klicke [hier](https://github.com/Limeoats/Monogame-Rider-Template) und downloade dir das Template 
2. Benenne die Dateien MonogameRiderTemplate.sln, MonogameRiderTemplate.csproj und den Ordner MonogameRiderTemplate in deinen gewünschten Projektnamen um ![Bild](/assets/images/screenshots/monogame/01.png "Old Names") ![Bild](/assets/images/screenshots/monogame/02.png "New names")
3. Öffne das Projekt und klick mit rechter Maustaste auf die Projektmappe und anschließend auf "Add existing project..."
4. Wähle die vorher umbenannte .csproj-Datei aus
5. Lösche im Projektbaum das Projekt MonogameRider
6. Mit rechter Maustaste auf das neu eingebundene Projekt klicken und "Properties..." auswählen.
7. In diesem Fenster änderst du dann noch "Assembly name" und "Root namespace" ![Bild](/assets/images/screenshots/monogame/03.png "Project properties")
8. Ändere ebenfalls in Datei "Properties/AssembyInfo.cs" alle gewünschten Einträge.
9. Jetzt nur noch in "Source/Game.cs" und "Source/Program.cs" den Namespace "TheVillageOfLife" auf deinen gewünschten umändern
10. Geh nun oben rechts auf "Edit Solution configurations..." und gehe sicher, dass folgende Einstellungen gesetzt sind ![Bild](/assets/images/screenshots/monogame/04.png "Project configuration 1") ![Bild](/assets/images/screenshots/monogame/05.png "Project configuration 2") 
11. Abschließend kann das Projekt durch den Play-Button gestartet werden ![Bild](/assets/images/screenshots/monogame/06.png "Game Window")

Klick hier weiter für [2D](/Erstes-Sprite) oder [3D](/Erstes-Dreieck).

Headerbild:https://www.polygon.com/2013/10/4/4801796/nintendo-bringing-monogame-framework-to-wii-u + MonoGame Logo