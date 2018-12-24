---
layout: post
title: MonoGame Struktur
lang: de
description: 
cover: 
tags: [MonoGame, Structure]
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
---

In diesem Artikel findest du ein paar Basics, die für jedes Game Framework gelten. Zusätzlich gehe ich auf die Struktur von MonoGame ein.

## (FPS) Frames per Second
In der Computergrafik wird im Programm immer ein 2D Bild angezeigt, welches aus dem aktuellsten Zustand der 2D- oder 3D-Szene gerendet wurde. Die Objekte der Szene reagieren auf Eingaben via Controller, Maus und Tastatur. 
Werden mehrere solcher Bilder hintereinander abgespielt entsteht der Eindruck einer lebhaften Szene. 
Ein einzelnes Bild wird "Frame" genannt. Um ein flüssiges Bild zu erzeugen werden mindestens 30 Frames pro Sekunde benötigt. 
Bei Computerspielen wird häufig schnelle Reaktion gefordert, wodurch 30 FPS dann je nach Genre zu wenig sind. Deshalb ist ein guter Wert 60 FPS.

## Game Loop
Ein übliches Programm beendet, sobald die Hauptfunktion main am Ende angelangt. Deshalb ist es wichtig eine While-Schleife einzubauen, die erst beendet wird, wenn das Spiel beendet wird.


Mit einer dieser Schleife kann dann je nach Typ bestimmt werden, ob das Spiel variable oder fixe FPS hat. Je nach Einsatzgebiet hat alles seine Vor- und Nachteile.
Häufig werden zwei (oder auch drei) Schleifen gebaut, um dann zum Beispiel Spielabläufe, Rendering und Eingaben zu trennen.

In MonoGame gibt es zwei solcher "Game Loops": Update und Draw.

In Update wirst du deine Spiellogik bauen und in Draw die Renderschritte.

## Game.cs
Hier findest du ein Überblick über die Bedeutung der Methoden aus Game.cs:
1. Initialize: hier initialisierst du Komponenten und Services
2. LoadContent: für das Laden von Assets in den RAM
3. UnloadContent: für das Entladen von Assets aus dem RAM
4. Konstruktur: für das Instanziieren von Objekten, die noch vor Initialize benötigt werden
5. Update: Spiellogik
6. Draw: Renderschritte
