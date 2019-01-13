---
layout: post
title: Es werde Licht
lang: de
description: 
cover: 
tags: [MonoGame, 3D, Game, Graphics, Shader, Shading, Lighting]
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
---

Ein sehr wichtiges Teilgebiet in der Computergrafik ist das Licht. Je nachdem, welches Shading verwendet wird, macht das Erzeugnis einen ganz anderen Eindruck.

In der physikalischen Welt haben wir zwei Modelle von der Funktionsweise von Licht: Einmal in Form von Photonen (Partikel) oder auch Wellen. Die Teilchenvariante erwies sich häufig als sehr nützlich. In der Theorie der Lichtfarben fliegen Photonen von der Lichtquelle auf Objekte. Ein Farbanteil wird absorbiert und der restliche reflektiert. Den reflektierten Teil wird von unserem Auge aufgenommen und vom Gehirn als eine bestimmte Farbe wahrgenommen.

Wenn das Sonnenlicht als weiße Farbe ankommt und ein Objekte die Farbe Blau und Grün absorbiert, bleibt nur Rot übrig. Deshalb ist dieses Objekt für uns rot.

Was nehmen wir aus der Theorie mit?: Lichtwahrnehmung ist lediglich ein Hantieren mit Farbwerten. Und das können wir in der Computergrafik mit Hilfe von Shadern.

## Local Illumination vs. Global Illumination
Unsere reale Welt hat eine globale Beleuchtung. Das heißt, es kann passieren, dass reflektiertes Licht von einem Objekt A Einfluss auf ein Objekt B hat. Annäherungen in diese Richtung gibt es auch in der Computergrafik, nur dass es ein komplexes Thema für sich ist. Bei lokaler Beleuchtung hat das betroffene Objekt keine Informationen über andere Ibjekte in der Szene. Es können jedoch mit "nur" lokaler Beleuchtung sehr zufriedenstellende Ergebnisse erzielt werden.

In diesem Artikel werden wir uns lediglich mit lokaler Beleuchtung beschäftigen.

## Phong Beleuchtungsmodell
Dieses Modell ist eine Approximation an die Arbeitsweise von Licht aus unser realen Welt. Da echte Lichtberechnung ziemlich Rechenintensiv wäre, nähern wir uns durch Tricks einem zufriedenstellenden Ergebnis an.

Das Phong Beleuchtungsmodell (engl. Phong Reflection Model) besagt, dass das reflektierte Licht eines Objekts aus drei Komponenten zusammengesetzt ist:

Ambient, Diffuse und Specular

Die Intensität als Formel ausgedrückt:

$$I_{out}=I_{ambient}+I_{diffuse}+I_{specular}$$

**Ambient**
Die ambiente Komponente ersetzt den globalen Part. Es nähert sich dem Umgebungslicht an.

## Raycast

## Flat Shading

## Gouraud Shading

## Phong Shading
