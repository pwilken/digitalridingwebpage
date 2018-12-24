---
layout: post
title: MonoGame 3D - Erstes Dreieck
lang: de
description: 
cover: 
tags: []
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
---
Bei 3D Spielen bewegen wir uns in einem Koordinaten System mit 3-Achsen: X, Y und Z. 2D Spiele haben mathematisch gesehen auf der Z Komponente immer den Wert 0. MonoGame bzw. Xna stellt uns Klassen zur Verfügung, um mit 2D oder 3D Koordinaten zur Verfügung: Vector2 und Vector3.

Sobald man sich mit der Entwicklung von 3D Spielen beschäftigt, kommt man nicht mehr drum herum sich ein wenig Grundlagen der Linearen Algebra anzueignen.
Die komplexeren Berechnungen mit Matrizen hat uns bereits MonoGame durch das Xna Framework abgenommen.

Ich schreibe später noch ein Artikel, in welchem ich bisher verwendete Lineare Algebra Techniken sammeln und im Detail erklären werde.

Für diesen Artikel jedoch, genügt zu wissen, dass man Vektoren auch wie Punkte in einem Koordinatensystem (wie mans aus der Schule kennt) betrachten kann.

Da Xna ein Right-handed-system verwendet haben wir also folgende Orientierung von der Ego Perspektive:
1. Vorwärts ist -Z
2. Rückwärts ist +Z
3. Rechts ist +X
4. Links ist -X
5. Hoch ist +Y
6. Runter ist -Y

## Vertex / Vertices und Faces
Ein 3D Objekt besteht aus einer Ansammlung von Knotenpunkte, die durch Kanten verbunden sind. Die Knotenpunkte sind meistens so miteinander verbunden, dass ein s.g. Face ein Dreieck ist.

In der Forschung oder auch bei CAD ist es manchmal nützlich andere "Primitiven" zu verwenden, wie zum Beispiel Quads (Rechtecke). Da Spiele aber in Echtzeit arbeiten müssen und Grafikkarten darauf ausgelegt sind effizient mit Dreiecken zu arbeiten, verwendet man hier eben Dreiecke. Außerdem können andere Formen, wie zum Beispiel ein Rechteck, aus Dreiecken konstruiert werden.

Vertices werden Informationen gegeben, die dann von der Grafikkarte ausgeführt werden. Zum Beispiel kann ein Farbwert und ein Vektor mitgegeben werden, damit die Grafikkarte weiß, wo der Knotenpunkt liegt und welche Farbe dieser hat.

## Hello World in GFX

Wie in der Anwendungsentwicklung das "Hello World" ist das erstellen eines Dreiecks das analoge Verfahren in Graphic-Frameworks.

Wer hätte es gedacht: für ein Dreieck benötigen wir 3 Vertices.


