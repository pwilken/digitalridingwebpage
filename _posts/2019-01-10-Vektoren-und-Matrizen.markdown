---
layout: post
title: Vektoren und Matrizen
lang: de
description: 
cover: 
tags: []
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
---

In diesem Artikel lernst du notwendige Grundlagen für den Umgang mit 2D und 3D Objekten.

Ich setze mal voraus, dass du mal mit einem euklidschen Koordinatensystem zu tun hattest.
Dich verwirrt die bezeichnung "euklidisch"? Keine Sorge, das ist lediglich der korrekte Name für das Koordinatensystem, was du in der Schule für Graphen verwendet hast.

## Vektorraum
Mit Hilfe der Achsen (z.b. X, Y und Z) wird ein Raum aufgespannt, dessen Dimension der Anzahl der aufspannenden Achsen entspricht. Also bei X und Y ist die Dimension 2, nimmt man Z dazu ist die Dimension 3.
Möchte man allgemeine Aussagen treffen wird eine Variable $$n$$ für die Dimension verwendet und für den Vektorraum dann $$\mathbb{R}^n$$. Wenn $$n=2$$ ist, dann sprechen wir von 2D.
Alle Regeln, die wir hier behandeln gelten generell für alle Dimensionen. So können wir mit Vektorraumdimensionen arbeiten, ohne uns diese überhaupt bildlich vorstellen zu können!

Aber keine Sorge! Wir versuchen hier keine mathematischen Axiome zu beweisen und beschränken uns deshalb auf die für uns wichtigen Vektorräume 2D und 3D.
Und für die Nicht-Mathematiker unter euch: $$\mathbb{R}^2$$ bedeutet "es handelt sich um 2D mit reellen Zahlen" (also Kommazahlen, wo Pi und weitere irrationale Zahlen erlaubt sind). Dasselbe gilt dann auch für $$\mathbb{R}^3$$ für 3D.

## Vektoren
Aus der Schule kennst du Punkte. Vektoren repräsentieren Elemente aus einem Vektorraum. Ein Vektor kann dafür verwendet werden, um Punkte zu representieren, aber auch um Listen von Daten (z.b. Tabelle in der Statistik) in ein einziges Element zu verpacken. Die einzelnen Einträge eines Vektors werden entweder durch ein Komma getrennt oder untereinander geschrieben und in einfache Klammern umhüllt.

Neben Punkten sind uns Vektoren auch als Richtungspfeile nützlich.  

In der Schule wird über die Variablennamen ein Pfeil geschrieben, um zu kennzeichen, dass es sich um Vektoren handelt. Da bei uns Punkte in Form von Vektoren verwendet werden, lassen wir den Pfeil weg.

**Beispiel für Punkte:** Punkt a(1|7) und b(3|9) bilden eine Linie. Übertragen wir in die Welt der Vektoren, ändert sich im Grunde kaum etwas an der Schreibweise. Der einzige Unterschied ist, mit Vektoren dürfen wir laut Konvention viel mehr machen:
$$a=\left(\begin{array}{c} 1 \\ 7 \end{array}\right),\ b=\left(\begin{array}{c} 3 \\ 9 \end{array}\right)\in\mathbb{R}^2$$

**Beispiel für Werte:** Zum Geburtstag hat Tom von den Gästen Geld erhalten.

Gast     | Euro
-------- | -------- 
Robert   | 40  
Beate    | 20 
Kevin    | 100

Da Tom ein Spieleentwickler ist und Tabellen nicht mag, fasst er die Werte in einem Vektor zusammen:
$$g=\left(\begin{array}{c} 40 \\ 20 \\ 100 \end{array}\right)$$

## Vektorrechnung
Schön und gut! Wir schreiben die Werte in einer anderen Form auf... was nützt uns das?

Ganz einfach: für Vektoren sind in Stein gemeißelte Regeln definiert, mit denen du in der Lage sein wirst, viele Probleme die dir begegnen zu lösen.

Doch zuerst einigen wir uns auf folgende Konvention: die einzelnen Einträge eines Vektors bekommen lediglich unten rechts ein x,y und z an der jeweiligen gemeinten Achse mit. 

**Zum Beispiel**: $$a=\left(\begin{array}{c} a_x \\ a_y \end{array}\right)$$ und $$v=\left(\begin{array}{c} v_x \\ v_y \\ v_z \end{array}\right)$$

Diese Konvention ist wichtig, damit ich dir Formeln in die Hand drücken kann und du sie dann verwenden kannst.

Diese Regeln bringe ich dir bei!

### Grundschulmathe "Plus, Minus, Mal, Geteilt"
Das kannst du mit Vektoren auch! Nur beim Multiplizieren und Dividieren gibt es ein paar Änderungen.

Gegeben sind die obigen Vektoren $$a=\left(\begin{array}{c} 1 \\ 7 \end{array}\right),\ b=\left(\begin{array}{c} 3 \\ 9 \end{array}\right)\in\mathbb{R}^2$$
Wenn wir beide Vektoren jetzt aufeinander Addieren oder Subtrahieren bekommen wir einen neuen Vektor.

**Addition**
$$c=a+b\\=\left(\begin{array}{c} a_x \\ a_y \end{array}\right)+\left(\begin{array}{c} b_x \\ b_y \end{array}\right)=\left(\begin{array}{c} a_x+b_x \\ a_y+b_y \end{array}\right)\\=\left(\begin{array}{c} 1 \\ 7 \end{array}\right)+\left(\begin{array}{c} 3 \\ 9 \end{array}\right)=\left(\begin{array}{c} 1+3 \\ 7+9 \end{array}\right)=\left(\begin{array}{c} 4 \\ 16 \end{array}\right)$$

Was genau ist passiert?: Wir haben die oberen Zahlen und die unteren Zahlen jeweils zusammengefügt. Dasselbe funktioniert auch für Minus.

Ab hier können wir auch für die oben erwähnten Richtungspfeile ein Beispiel anschauen:

**Beispiel für Richtungspfeile:** Unser Punkt $$p=\left(\begin{array}{c} 12 \\ 3 \end{array}\right)$$ in 2D wandert 2 Einheiten nach rechts: $$p=p+\left(\begin{array}{c} 2 \\ 0 \end{array}\right)=\left(\begin{array}{c} 12+2 \\ 3+0 \end{array}\right)=\left(\begin{array}{c} 14 \\ 3 \end{array}\right)$$

**Subtraktion**
$$d=a-b\\=\left(\begin{array}{c} a_x \\ a_y \end{array}\right)-\left(\begin{array}{c} b_x \\ b_y \end{array}\right)=\left(\begin{array}{c} a_x-b_x \\ a_y-b_y \end{array}\right)\\=\left(\begin{array}{c} 1 \\ 7 \end{array}\right)-\left(\begin{array}{c} 3 \\ 9 \end{array}\right)=\left(\begin{array}{c} 1-3 \\ 7-9 \end{array}\right)=\left(\begin{array}{c} -2 \\ -2 \end{array}\right)$$

**Richtung**

Die Vektorsubtraktion ermöglicht uns die Richtung von einem Punkt zu einem anderen zu ermitteln. Diese ist nämlich die Differenz der beiden Punkte. Dabei ist zu beachten, dass man den Startpunkt vom Ziel subtrahiert.
$$d$$ wäre der Pfeil von Punkt $$b$$ nach $$a$$.

**Multiplikation und Division**
Nun zuerst sei erwähnt, dass Division und Multiplikation im Grunde das Gleiche ist, weil eine Division im Grunde eine Multiplikation mit einem Bruch ist. Sprich, möchte man eine Zahl durch 3 teilen, dann multiplizieren wir mit $$\frac{1}{3}$$.

**Beispiel:** $$5:2=5/2=5*\frac{1}{2}=2.5$$.

Deshalb gilt alles was ich für Multiplikation sage auch für Division.

Bei Vektoren unterscheidet man zwischen **Skalar-** und **Vektor**multiplikation.

Skalar nennt man eine einfache Zahl. Es heißt so, weil es den Vektor "skaliert". Das bedeutet: mit dem Skalar 2 verdoppelt man den Vektor.

**Skalarmultiplikation**

Gegeben sind $$s\in\mathbb{R},\ v\in\mathbb{R}^2$$ mit den Werten $$s=3$$ und $$v=\left(\begin{array}{c} 9 \\ 4 \end{array}\right)$$.

Mit dem Skalar $$s$$ und Vektor $$v$$ haben wir folgendes Szenario:
$$e=s*v=s*\left(\begin{array}{c} v_x \\ v_y \end{array}\right)=\left(\begin{array}{c} s*v_x \\ s*v_y \end{array}\right)=3*\left(\begin{array}{c} 9 \\ 4 \end{array}\right)=\left(\begin{array}{c} 27 \\ 12 \end{array}\right)$$

Möchte man eine Division machen, so wird das Skalar $$s$$ einfach ein Bruch.

**Vektormultiplikation**

Die Vektormultiplikation wird auch als **Skalarprodukt** (engl. **Dot product**) bezeichnet.
Das Skalarprodukt ist ein sehr mächtiges Werkzeug und verdient ein eigenes Kapitel. Deshalb führe ich hier erst mal nur auf, wie das Skalarprodukt ausgerechnet wird.

Seien die Vektoren $$v$$ und $$w$$ gegeben: $$v,\ w\in\mathbb{R}^2$$ mit den Werten $$v=\left(\begin{array}{c} 2 \\ 3 \end{array}\right),\ w=\left(\begin{array}{c} 6 \\ 1 \end{array}\right)$$.
Dann errechnet sich das Skalarprodukt, wie folgt:

$$p=v*w=\left(\begin{array}{c} v_x \\ v_y \end{array}\right)*\left(\begin{array}{c} w_x \\ w_y \end{array}\right)=v_x*w_x+v_y*w_y\\=\left(\begin{array}{c} 2 \\ 3 \end{array}\right)*\left(\begin{array}{c} 6 \\ 1 \end{array}\right)=2*6+3*1=12+3=15$$



## Länge eines Vektors
Die Länge eines Vektors (oder auch **Betrag**) genannt, ist die Länge des Pfeils. Als ich sagte: Vektoren können Punkte repräsentieren, hab ich verschwiegen, dass Vektoren im Grunde immer Richtungspfeile sind. Wenn wir aber sie für Punkte benutzen, so haben wir immer ein Pfeil vom Koordinatenursprung (x=0|y=0) zum gewünschten Punkt.

[Bild]

Somit können wir immer die Länge des Pfeils errechnen.

$$|a|=|\left(\begin{array}{c} a_x \\ a_y \end{array}\right)|=\sqrt{a_x^2+a_y^2}\\=|\left(\begin{array}{c} 1 \\ 7 \end{array}\right)|=\sqrt{1^2+7^2}=\sqrt{1+49}=\sqrt{50}$$

## Normalisierung
Normalisierung bei Vektors bedeutet, dass seine Länge 1 wird. Zum Beispiel ist der Vektor $$m=\left(\begin{array}{c} 1 \\ 0 \end{array}\right)$$ ist normalisiert, weil $$|m|=\sqrt{1^2+0^2}=\sqrt{1+0}=\sqrt{1}=1$$.

Um einen Vektor zu normalisieren, benötigen wir dessen Betrag. Anschließen teilen wir jeden Eintrag aus dem Vektor durch den Betrag. 

Als Formel:
$$v_{normal}=\frac{1}{|v|}*v$$

Wofür ist die Normalisierung nützlich? Wenn man zum Beispiel eine bestimmte Fahrtrichtung erhalten hat, dann ist diese nicht unbedingt normalisiert. Wenn man nun in einer ganz bestimmten Geschwindigkeit in dieselbe Richtung fahren möchte, ist das allein mit der Richtung schwierig. Deshalb skaliert man zuerst die Geschwindigkeit auf 1 runter und dann kann diese problemlos auf die gewünschte Geschwindigkeit gebracht werden (wie beim Dreisatz).

**Beispiel Normalisierung**: 
Wir haben Berlin am Standort A(10|8) und Hamburg am Standort B(4|5). Um nun von Hamburg nach Berlin zu kommen müssen wir 6 Schritte nach links und 3 Schritte nach unten machen. 

Von $$b$$ nach $$a$$:
$$d=b-a=\left(\begin{array}{c} 4 \\ 5 \end{array}\right)-\left(\begin{array}{c} 10 \\ 8 \end{array}\right)=\left(\begin{array}{c} -6 \\ -3 \end{array}\right)$$

Die Gesamtlänge der Strecke wäre dann 

$$|d|=\sqrt{(-6)^2+(-3)^2}=\sqrt{36+9}=\sqrt{45}$$

Die normalisierte Richtung 

$$d_{normal}=\frac{1}{|d|}*d=\frac{1}{\sqrt{45}}*\left(\begin{array}{c} -6 \\ -3 \end{array}\right)=\left(\begin{array}{c} -0.894427191 \\ -0.4472135955 \end{array}\right)$$

Kontrolle : 
$$|d_{normal}|=\sqrt{(−0.894427191)^2*(-0.4472135955)^2}=1$$.

Wollen wir nun in einer ganz bestimmten Geschwindigkeit dahin zum Beispiel wählen wir $$s=7$$ dann haben wir folgendes:

$$d_7=7*d_{normal}=7*\left(\begin{array}{c} -0.894427191 \\ -0.4472135955 \end{array}\right)=\left(\begin{array}{c} -6.260990337 \\ -3.130495169 \end{array}\right)$$

Du kannst ja mal raten, welche Länge der Vektor $$d_7$$ und es selbst überprüfen.