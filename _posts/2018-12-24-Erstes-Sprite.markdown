---
layout: post
title: MonoGame 2D - Erstes Sprite
lang: de
description: Erste Schritte in 2D in MonoGame Learning by Sharing
cover: 
tags: [MonoGame, 2D, Game, Platformer]
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
---

In diesem Artikel lernst du was Sprites sind und wie man sie in MonoGame sinnvoll einbindet.

## Was sind Sprites?
Für die Entwicklung von 2D Spielen sind Spritesets das A und O. Alles, was du siehst besteht aus Sprites. 
Sprites sind nichts anderes, als Bilddateien, die für unterschiedliche Zwecke verwendet werden. 

Zum Beispiel können sie dafür verwendet werden, grafische Benutzerelemente oder um einen Charakter  darzustellen.

Da das Laden von einer (z.B. 2 MB großen) Datei schneller geht, als das Laden von 100 kleinen, die zusammen so viel ergeben, werden häufig s.g. Spritesets verwendet. Ein Spriteset enthält dann nämlich alle Animationframes des gewünschten Sprite, wie zum Beispiel die Charakterbewegungen.

## Wo bekomme ich Sprites her?
Sprites variieren je nach Grafikstil des Spiels. Je nachdem, was du benötigst kannst du mit einem Grafikboard welche zeichnen oder mit der Maus pixeln. Der beste Weg für Entwickler ist es sich an freien Assets zu bedienen oder welche zu kaufen.

Ich habe für unser gemeinsames Projekt eine bunte Sammlung gefunden: [hier](https://bayat.itch.io/platform-game-assets).

Auf dieser Webseite gibt es viele schöne Assets. Falls dir eins gefällt scheue dich nicht davor dem Creator Geld zu schicken.

## Sprite in MonoGame
Wie bekomme ich nun ein Sprite in mein Spiel?

Dafür benötigen wir die Content Pipeline. Was das ist kannst du in einem anderen Artikel nachlesen. In den ersten Schritten genügt es jedoch zu wissen, dass die Pipeline Dateien lädt und in eine entsprechende C#-Klasse aus MonoGame umwandelt.

Kopiere die Datei "Platform Game Assets/Character/png/2x/Body.png" in dein MonoGame Projekt. Ich habe dafür ein Ordner "Assets/Sprites" erstellt.

https://github.com/SGoerzen/2dplatformer/tree/master/first-sprites