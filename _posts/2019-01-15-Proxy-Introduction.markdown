---
layout: post
title: Ein täuschender Stellvertreter namens John Proxy
lang: de
description: Eine Einführung zu Proxies 
cover: assets/images/fingerprint.jpg
tags: [Proxy, Security, Network, Kotlin]
author: valentinob
categories: valentinob
subclass: 'post tag-fiction'
navigation: true
---

Lieber Leser, ich weiß dass die Überschrift auf eine spannende Geschichte hindeutet, 
indem John Proxy wahrscheinlich ein unglaublich gutaussehender Hauptprotagonist wäre, der in Wahrheit ein anderes Leben führt, als vorher angenommen. 
Ich muss dich leider enttäuschen. Es geht wirklich nur um Netzwerk Proxies. 
Es lohnt sich aber weiterzulesen, denn du kannst hier einiges lernen und langweilig wird es auch nicht. Versprochen!

## Einführung
Es kam sicher mal vor, dass du einen Inhalt aufrufen wolltest, der in deinem Land nicht verfügbar war. 
Um solch eine Sperre zu umgehen werden oft Proxies benutzt. Proxy ist ein englischer Begriff und bedeutet übersetzt Stellvertreter. 
Dieser Begriff wird in der Informatik noch den Design Patterns zugeordnet (Proxy Pattern).

### Was ist ein Proxy?
Ein Proxy ist ein Knotenpunkt im Netzwerk, der Pakete entgegennimmt und diese dann an ein Ziel weiterleitet. 
Er gibt sich somit als Stellvertreter des ursprünglichen Senders aus.
Der Empfänger sendet die Antwort zum Proxy, der wiederum das Paket zum ursprünglichen Sender schickt.

### Aufgabengebiete
Die Aufgaben eines Proxies sind vielseitig, da man recht viel damit anstellen kann.
Hier mal eine kleine Auflistung:
* Verschleierung von IP-Adressen
* Sperrung von bestimmten Webseiten innerhalb eines Netzwerkes
* Caching von Inhalten z.B. Webseite
* Abschottung mehrere Server durch einen Reverse Proxy

### Welche Arten gibt es?
Proxies werden oft im Zusammenhang mit dem Web gebracht, da man sie da recht häufig nutzt. 
Um da nochmal eine bessere Unterscheidung zu machen werde ich von Web-Proxy sprechen, 
wenn es sich um Proxies handelt die mit HTTP zu tun haben, da Proxy ein übergeordneter Begriff ist.

Im folgenden werden die verschiedenen Proxy Typen näher beschrieben.
#### Transparenter Proxy
Transparente Proxies offenbaren, dass die jeweilige Anfrage von dir versendet wurde. 
Zudem erkennt man die IP-Adresse des Senders. Diese Information findet man im HTTP Header mitunter als ``X-Forwarded-For``.

#### Anonymer Proxy
Anonyme Proxies offenbaren, dass die jeweilige Anfrage von dir versendet wurde. 
Die IP-Adresse des Senders wird allerdings nicht mit angegeben.

#### Elite Proxy
Die Königsklasse sind die Elite Proxies, denn diese kann man nicht erkennen.

#### SOCKS (SOCKetS) Proxy
Im Vergleich zu den Web-Proxies ist ein SOCKS Proxy Protokollunabhängig und kann somit für weitere Dienste genutzt werden, beispielsweise für BitTorrent.

#### Reverse Proxy
Durch die Abschottung der Server ist der Reverse Proxy der einzige Eintrittspunkt.
Die abgeschotteten Server sind somit nicht Internet erreichbar. 
Zudem kann man einen Reverse Proxy als Load Balancer nutzen, der die jeweiligen Anfragen auf verschiedenen Servern einer Applikation verteilt.

### Wie funktioniert das ganze?
Du als Client musst die IP-Adresse des Web-Proxy Server kennen.
Deine Anfragen die du über HTTP stellst, werden dann über den Proxy geleitet.  
Dieser Web-Proxy Server untersucht den HTTP Header und kann dadurch die angefragte Ressource identifizieren.
Er stellt nun die Anfrage an den entsprechenden Server und liefert dir die Antwort zurück.

## Du lügst doch. Netflix erkennt wenn ich einen Elite Proxy oder VPN Dienst benutze!!!!11
Ok du hast mich erwischt. Es war alles von Anfang an nur eine Lüge!

### Accountgebunden
Bei der Registrierung von deinem Account, hast du wahrscheinlich noch keinen Proxy oder VPN Dienst nutzt. 
Zudem hast du eine deutsche Kreditkarte, streamst Inhalte aber aus Amerika. Ziemlich auffällig, meinst du nicht auch?

### Gleiche IP
Ein VPN Anbieter hat eine Vielzahl von Servern die kunterbunt in aller Welt verteilt sind. 
Wenn mehrere Personen diesen VPN Anbieter benutzen, kann es vorkommen, dass du die gleiche IP-Adresse mit einer Person teilst. 
Beim abgleichen der Logs ist sowas recht schnell zu erkennen.

### Blacklist
Ich meine nicht die Serie (wobei die Serie ziemlich empfehlenswert ist), 
sondern eine Ansammlung von IP-Adressen die bekannt sind und von einem VPN Dienstleister kommen.
D.h man könnte wahrscheinlich einen großen Teil anhand einer Blacklist identifizieren. 
Es gibt sogar recht viele entsprechende APIs dafür.
Ich will natürlich keine Werbung machen, allerdings will ich meine Aussage nicht so stehen lassen. 
Ich habe jetzt beispielhaft zwei rausgesucht, es gibt aber noch einige mehr.
* [https://iphub.info/](https://iphub.info/)
* [https://www.neutrinoapi.com/api/ip-blocklist/](https://www.neutrinoapi.com/api/ip-blocklist/)

Es gibt sicherlich noch einige Kriterien die ich wahrscheinlich vergessen habe...

## Abgrenzung zu VPNs
*Ein Elite Proxy kostet mich doch nichts. Wieso sollte ich ein VPN Dienst nutzen?*
Berechtigte Frage. Schauen wir uns beides mal im Detail an.
 
Es gibt Applikationen an denen man einstellen kann, ob man einen Proxy verwenden möchte. 
Man kann auch im Betriebssystem selber einstellen, für welches Protokoll ein Proxy genutzt werden soll.
Das ist auch schon der erste Punkt der grundlegend anders ist, denn wir reden von einer Applikation oder einem Protokoll. 
Wenn wir von einer kompletten Verschlüsselung Gebrauch machen wollen, kommen wir um ein VPN nicht drum herum.
 
Über VPN wird im besten Fall die ganze Netzwerkkommunikation geleitet und somit **verschlüsselt**. 
Ich habe verschlüsselt fett gedruckt, da man immer bedenken muss, dass Netzwerkpakete immer adressiert sind. 
D.h die Teilstrecke ist verschlüsselt, da man ja am Ende einen Inhalt abfragen möchten. 
Der DNS Server muss ja die DNS Anfrage interpretieren können. 
Der Weg von dir zu deinem VPN Dienstleister ist auch ersichtlich nur sind die Daten von deinem ISP nicht einsehbar.
 
Wenn man VPN benutzt, dann gibt meist eine dazugehörige Applikation (auch als Smartphone App des öfteren) vom Dienstleister, 
um weitere Einstellungen vorzunehmen. Man kann z.B. auswählen welchen Server man von welcher Nation benutzen möchte, ob man in Intervallen die Server wechselt etc.

VPN ist allerdings auch kein heiliger Gral, da du dir nie sicher sein kannst, ob ein Unternehmen deinen Traffic loggt oder nicht.
Glaube nicht immer was auf deren Seite steht, denn es ist letztendlich ein Unternehmen und ist auf Gewinn aus.

>Denn wie war das nochmal? Daten sind der Rohstoff des 21. Jahrhunderts.

### Anonymität
Das ist ein sehr komplexes Thema, worüber man einige Bücher schreiben könnte.
Es ist unheimlich schwierig wahre Anonymität zu erhalten, denn dafür muss man unheimlich viele Variablen in Betracht ziehen.
Man muss sein Verhalten ändern, entsprechende Programme nutzen und ständig up to date sein. 
Es kann nämlich ziemlich schnell passieren, dass man etwas preisgibt, was man versucht hat zu verschleiern.
Beispielsweise gibt es Browser Plugins die deine IP-Adresse leaken können. 
Berühmte Vertreter waren Flash und Java, finden allerdings heute zum Glück nicht mehr viel Anwendung. 
Zudem gibt es weitere Protokolle wie WebRTC, welches auch mal eben die IP-Adresse leaken kann.

Nahezu jeder Benutzer kann schon alleine anhand eines einzigartigen Fingerabdrucks des Browsers ermittelt werden. 
Hier teste mal selbst 
[https://firstpartysimulator.net](https://firstpartysimulator.net)

Falls weiteres Interesse an dem Thema besteht, würde ich einen Artikel dazu schreiben der sich nur dem Thema widmet.

## Beispiele
### Deep Packet Inspection
Ein Bild von einem HTTP Header, der von einem transparenten Proxy gesendet wurde.
Der Eintrag ``X-Forwarded-For`` zeigt dies.
![Deep Packet Inspection](/assets/images/screenshots/proxy/deep-packet-inspection.png) 

Die folgenden Codebeispiele sind in der Sprache Kotlin geschrieben und sollen mal kurz demonstrieren,
wie man einen Proxy erkennt bzw. einen selber implementiert. Dependencies die ich benutzt habe sind: ``Javalin`` und ``khttp``

### Auslesen der Nutzer IP bei einem transparenten Proxy
```
fun extractIp(request: HttpServletRequest): String {
    return request
            .getHeaders("X-Forwarded-For")
            .toList()
            .let { if (it.isEmpty()) request.remoteAddr else it.first { ip -> ip != request.remoteAddr } }
}
```

### Bestimmung der Verwendung bei einem transparenten und anonymen Proxy
```
fun usingProxy(request: HttpServletRequest): Boolean {
    return request
            .getHeaders("X-Forwarded-For")
            .toList()
            .isNotEmpty()
}
```

### Eine sehr triviale Implementierung eines transparenten Proxies für das HTTP Verb GET
```
proxyServer.get("/*") { ctx ->
    val request = ctx.req
    val queryString = if (request.queryString.isNullOrEmpty()) "" else "?${request.queryString}"
    val response = get("${request.requestURL}$queryString")
    response.headers.forEach {name, value -> ctx.header(name, value)}
    ctx.header("X-Forwarded-For", request.remoteHost)
    ctx.result(response.text)
}
```

## Ende
Ich hoffe du hast dich nicht gelangweilt und ich konnte mein Versprechen halten. Falls ihr Themenvorschläge habt, gebt uns bitte Bescheid. :-)

Man sieht sich im nächsten Artikel der sich um **Dependency Injection** handeln wird!