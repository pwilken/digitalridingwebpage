---
layout: post
title: Transformationsmatrizen
lang: de
description: 
cover: 
tags: []
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
---

In der 3D Welt wird viel mit Matrizen gearbeitet. Früher oder später sollte deshalb dieser Artikel gelesen und verstanden werden.

Grundsätzlich werden alle Objekte Weltkoordinaten, diese erhält durch das Transformieren der lokalen Koordinaten mit Hilfe einer World-Matrix.
 
Haben wir eine solche Weltmatrix $$W$$ und einen lokalen Punkt $$p_{local}$$ können wir die Position vom Punkt durch Multiplikation mit der Matrix berechnen:

$$
p_{world} = W * p_{local} \\\text{wobei } p_{world},\ p_{local}\in\mathbb{R}^4 \text{ und } W\in\mathbb{R}^{4x4}
$$

Ziemlich einfach, oder?
Wie und wieso so funktioniert das?