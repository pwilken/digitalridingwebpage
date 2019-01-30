---
layout: post
title: Was ist DevOps?
lang: de
description: Was ist DevOps, wieso brauchen wir es plötzlich und was muss ich dafür können.
cover: assets/images/what1man.jpg
tags: [DevOps, DevOps Beginner]
author: pierrewilken
categories: pierrewilken
subclass: 'post tag-fiction'
navigation: true
comments: true
level: 1
---
Wer kennt es nicht, der Motor brummt, der Gang sitzt und das Gaspedal ist etwas mehr als von nöten Richtung Boden gedrückt.
Normalerweise würde unser Auto uns nun beim Anfahren, RED BULL ALPHA JET artig in den Rücksitz pressen.
Leider entspricht die tatsächlich auf die Straße gebrachte Leistung jedoch eher der eines Bobbycars.

Der Übeltäter ist leicht überführt, die Handbremse ist noch angezogen...

Wodrauf möchte ich genau hinnaus, was hat das mit DevOps zutun? 

Der Einsatz von <b>DevOps Denkweisen, Praktiken und Tools</b>, kann ein Lösen von solchen Handbremsen bewirken.

---
In diesem Artikel erkläre ich was DevOps ist und welche potentiellen Handbremsen gelöst werden können.

# Was ist DevOps?
Bei DevOps geht es kurzgefasst darum Services und Anwendungen möglichst einfach, schnell und hoffentlich auch sicher bereitzustellen.
Mit dem Sicherheitsaspekt beschäftigen wir uns in einem späteren Artikel ausführlicher, Stichwort DevSecOps, scheinbar hängen nicht nur die Deutschen gerne Wörter aneinander.

**Frage**: Was ist das Ziel von DevOps?

Das Ziel von DevOps ist es, ein möglichst zeiteffektives entwickeln und verbessern von Produkten zu erzielen. 
Zum einen zur besseren Bedienung der Kunden sowie Durchsetzung auf dem Markt und zum anderen zur Erleichterung des Arbeitsalltags der Entwicklungs- und Operations-Teams.

<a title="Rajiv.Pant [CC BY 3.0 (https://creativecommons.org/licenses/by/3.0)], from Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Devops.png"><img width="512" alt="Devops" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Devops.png"></a>

Die Grafik veranschaulicht relativ gut den Schnitt den DevOps bewerkstelligt. Wie Stark der Schnitt zwischen den einzelnen Bereichen ist, ist von der individuellen Situation abhängig.

## Wie funktioniert DevOps?
Es gibt verschiedenste Möglichkeiten DevOps anzuwenden, die Basis ist jedoch die Selbe.

Durch die endisolierung der Entwicklungs- und Operations-Teams wird neben der Schließung von Fach- und Kommunikationslücken ein agileres Vorgehen ermöglicht. Dieses Vorgehen kombiniert mit einer möglichst hohen Automatisierung von bisher manuellen Prozessen ermöglicht eine effektivere und autonomere Vorgehensweise.

**Frage**: Wie könnte das beispielsweise aussehen?

Wenn beispielsweise per Knopfdruck oder per Commit in einen Branch, eine realitätsnahe Testumgebung des ausgeführten Quellcodes auf den Unternehmensserven bereitgestellt wird,
dann ermöglicht dies ein effektiveres und zufriedenstellenderes Arbeiten für die Entwickler als die klassische Vorgehensweise.

Integrieren wir jetzt in diesen Ablauf automatisierte Tests, dann erhalten wir bereits vor den abschließenden manuellen Tests aussagekräftige Feedbacks. 

Das Ganze nennt sich in der Form Continuous Deployment kurz. CD und kann noch weiter aufgeführt werden, ein paar weitere Stichwörter hierzu sind: Skalierbar, Container, Quality Gates bzw. Continuous Inspection, Staging-Area, Deployment Strategien.

**Grafik**: Darstellung eines Continuous Deployment Ablaufs
<a title="Jouasse [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], from Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:DevOps_from_Integration_to_Deployment.jpg"><img width="710" alt="DevOps from Integration to Deployment" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DevOps_from_Integration_to_Deployment.jpg/1024px-DevOps_from_Integration_to_Deployment.jpg"></a>

**Frage**: In jedem Team zwingend Dev & Ops?

Es ist nicht zwingend erforderlich das jedes Team den Schnitt zwischen Entwicklung & Operations abbildet, gerade in kleineren Teams oder monolithischen Software-Architekturen kann dies uneffektiv bis nicht möglich sein. 

Hier bietet sich eventuell ein Team übergreifender DevOps-Part als die beste Möglichkeit an. 

## Kann und sollte DevOps überall eingeführt werden?
Ganz klar, nein.

Zum einen eignet sich nicht jede Unternehmensstruktur sowie nicht alle Technologien für den Einsatz von DevOps herangehensweisen und zum anderen erfordert der Einsatz von entsprechenden Denkweisen, Methodiken und Werkzeugen in der Einführung ausreichend Ressourcen. Auf lange Sicht werden jedoch wenn gut angewendet Ressourcen eingespart.

**Frage**: Woher weiß ich ob unsere Unternehmensstruktur passt?

Einfach ausgedrückt kann man sagen, desdo agiler ein Unternehmen agiert desdo geeigneter und effektiver kann die Etablierung von DevOps werden.
Das ist natürlich sehr vereinfacht ausgedrückt, die Umstellung auf DevOps entspricht einer gewissen Kulturumstellung im Unternehmen, hier ist Erfahrung und Feingefühl gefragt.

In einem dynamischen Unternehmen mit flachen Hierarchien lässt sich dies grundsätzlich einfacher umsetzen als in einem großen Konzern mit einem Wasserfallartigen Projektmanagement. Dafür ist wahrscheinlich die Anforderung der Ressourcen im zweiteren ein kleineres Problem. 

**Frage**: Was muss der Technologie-Stack erfüllen?
Folgende Punkte sind zu erfüllen:
* Einsatz einer Quellcodeverwaltung bspw. Git
* Automatisiertes Builden möglich
* Containerization / Virtualization (bspw. für gute Skalierbarkeit)
* Automatisierte Tests möglich

**Frage**: Was ist mit den Ressourcen genau gemeint?

Zum einen erfordert die Einführungsphase einen gewissen Lernprozess der Zeit kostet und zum anderen werden anfangs auch vermehrt Fehler gemacht oder Fehlentscheidungen getroffen. Zusätzlich können weitere Ressourcen für Infrastruktur und Cloud oder Lizenzkosten anfallen.

### Die potentiellen Handbremsen kurzgefasst
Weniger manuelle Abläufe, daraus folgt:
* geringerer Zeitaufwand
* transparentere Vorgänge
* schnellere und häufigere Bereitstellung
* geringere Fehleranfälligkeit und erhöhte Zuverlässigkeit

Weitere:
* Bessere Reproduzierbarkeit
* Erhöhte Autonomie von Teams
* Verbesserte Überwachung und Protokollierung
* Mehr Zusammenarbeit und weniger Kompetenz-Silos

Zusätzlich kann eine DevOps-Vorgehensweise eine effektive Skalierbarkeit ermöglichen, näheres hierzu in dem nächsten Blog-Artikel "Skalierbare Container-Infrastrukturen.

# Ende
Aus der <a href="https://digitalriding.de/DevOps%20Beginner/">DevOps für Beginner</a> Reihe.

Ich hoffe der Artikel hat dir gefallen.
Falls du Anregungen, Kritiken oder weitere Vorschläge hast welche Themen wir als nächstes behandeln sollen, geb uns bitte bescheid.
 
Der nächste Artikel aus der Reihe <a href="https://digitalriding.de/DevOps%20Beginner/">DevOps für Beginner</a> erscheint in Kürze.

---

<h2><center>Buchempfehlungen DevOps</center></h2>
<a href="https://www.amazon.de/dp/3836263858/ref=as_li_ss_il?&hvadid=310686337877&hvpos=1o2&hvnetw=g&hvrand=14313623090287937732&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044654&hvtargid=pla-562466967806&th=1&psc=1&tag=&ref=&adgrpid=63478267842&hvpone=&hvptwo=&hvadid=310686337877&hvpos=1o2&hvnetw=g&hvrand=14313623090287937732&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044654&hvtargid=pla-562466967806&linkCode=li3&tag=digitalriding-21&linkId=d95945ea9d086daf769e0403bc38ffeb&language=de_DE" target="_blank"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=3836263858&Format=_SL250_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=digitalriding-21&language=de_DE" ></a><img src="https://ir-de.amazon-adsystem.com/e/ir?t=digitalriding-21&language=de_DE&l=li3&o=3&a=3836263858" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />