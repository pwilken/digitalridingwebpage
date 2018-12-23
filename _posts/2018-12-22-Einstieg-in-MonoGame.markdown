---
layout: post
title: Einstieg in MonoGame - Learning by Sharing 1
lang: de
description: Entwicklung eines Spiels mit MonoGame
cover: 
tags: [MonoGame, GameDev, Learning by Sharing]
author: Sergej G.
categories: Sergej G.
subclass: 'post tag-fiction'
navigation: true
---
Mit diesem Artikel führe ich eine neue Serie von mir ein: "Learning by Sharing". In dieser Serie blogge ich meine Fortschritte in einem Themengebiet in welches ich mich einarbeite.
Dabei halte ich fest, was ich getan und was ich dabei gelernt habe.

Ich freue mich, wenn du mich bei meinem Lernprozess begleitest - vielleicht lernst du auch etwas dabei.

## Vorgeschichte
Mein Interesse für Programmierung begann in der Spieleentwicklung. Doch bevor ich mich selbständig in richtige Programmiersprachen eingearbeitet habe,
bastelte ich (wie viele vermutlich) mit dem RPG Maker 2000 an kleinen Spielen.
In meiner Ausbildung erlernte ich die wunderschöne Programmiersprache C#.

Irgendwann fragte ich mich, gibt es ein Game Framework, welches C# verwendet? Google lieferte mir als Antwort drei Buchstaben: Xna.

Mein Verständnis beschränkte sich auf Grund von mangelnder Mathematik-Kenntnisse auf 2D. Die Struktur war aber leicht verstanden und nach Einarbeitung enstand ein SpaceInvaders Klon zusammen mit einem Mitschüler im Rahmen eines Schulprojekts.
So sammelte ich meine ersten Erfahrungen mit richtiger Spieleentwicklung. 

C# und dementsprechend Xna war aber damals auf Windows beschränkt und die Weiterentwicklung vom Framework wurde mit Version 4.0 leider auch eingestellt. Sie hinterließen eine große Community und vielen Fans.

Einige Jahre später erlernte ich während meines Master Studiums Kenntnisse zu Computergrafik. 
Außerdem durfte ich in einem Modul meines Studiums ein weiteres selbständiges Spiel entwickeln. Mein Interesse für Spieleentwicklung lebte immer noch und wurde dadurch aus einem jahrelangem Schlaf zu geweckt.
Deshalb entwickelte ich zusammen mit einem Kommolitonen in OpenGL und C++ ein Spiel im LowPoly Grafikstil.

Nach Fertigstellung des LowPoly Spiels hab ich Blut geleckt: "Ich entwickel noch ein Spiel!".

Da ich für XNA und C# aus früherer Zeit noch Sympathie empfinde, beschloss ich mich in MonoGame einzuarbeiten - und ihr dürft mich dabei begleiten.

## Warum MonoGame, wenn es doch Unity3d gibt?
Keine Frage: Unity3d ist klasse!

Doch, wie gesagt, meine Sympathie für Xna ist groß. Bei MonoGame wurde sich an die Struktur von Xna gehalten und weiterentwickelt.
Der Unterschied von Unity3d zu MonoGame ist, dass Unity einen mächtigen Editor und eine Physics-Engine hat.

Inspiriert durch OpenGL wollte jedoch mein akademischer Geist sich mit Kernfragen weiterhin zu beschäftigen. Ist der Kern verstanden, dann jede Engine erst recht.

## Das Setting
Entwickelt wird mit einem MacOS High Sierra und der IDE Rider von JetBrains.

Die Installation war unkompliziert. Man wählt lediglich  die passende Version und installiert diese.
Für Windows wird häufig die Visual Studio Version empfohlen, weil ein MonoGame Projekt von dort aus wie üblich erstellt werden kann.

[Download MonoGame](http://community.monogame.net/t/monogame-3-7-1-release/11173)

Für Rider hab ich folgendes Template verwendet und entsprechend Assembly, Namespace und Namen geändert.

[Download Rider Template](https://github.com/Limeoats/Monogame-Rider-Template)

### Einrichten in Rider
