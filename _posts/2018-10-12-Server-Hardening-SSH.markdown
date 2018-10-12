---
layout: post
title: Server Hardening - SSH
lang: de
ref: de-lh-iek
date: 2018-10-12 18:50:00 +0300
description: Eine Anleitung um einen Server gegen unerwünschte Gäste zu schützen
cover: assets/images/shell.jpg
tags: [Server, SSH, Hardening]
author: Valentino B.
categories: Valentino B.
subclass: 'post tag-fiction'
navigation: true
---
## Einleitung
Mietest du einen Server? Wenn ja, hast du ihn so eingerichtet, dass du dir sicher sein kannst, dass nur befugte Personen zugreifen können? Was ist wenn ich dir erzähle, dass ständig jemand versucht über Brute-Force dein SSH Login zu erhalten? Das ganze kann man ganz leicht selber nachprüfen
```
$ tail -f /var/auth.log
```
und einfach mal für eine kurze Zeit beobachten.

Viele Leute scheren sich nicht das initiale Passwort zu ändern, einen neuen Benutzer anzulegen oder SSH angemessen zu konfigurieren. Wundern sollte man sich dann allerdings nicht, wenn man nach einiger Zeit nicht mehr auf den Server zugreifen kann.

## Was ist diese Secure Shell?
Es ist ein Netzwerkprotokoll, was auf TCP aufbaut. Es wird benutzt, um eine verschlüsselte Verbindung zu einem Server herzustellen. Die Shell eines entfernten Computers steht somit einem zur Verfügung. Implementiert ist das ganze als klassisches Client - Server Modell.

##  Wie es nicht sein sollte
Man bekommt von seinem Anbieter den Benutzer und das Passwort mitgeteilt, um sich über SSH anzumelden. Der Benutzer ist in der Regel root.  

Diese Anmeldeinformationen sollte man allerdings nur bei der ersten Anmeldung nutzen. 

>Das ist genauso wie, wenn man den Internet Explorer benutzt, um einen anderen Browser herunterzuladen.

## Der übermächtige root
Es ist keine gute Idee ständig als root unterwegs zu sein. Der root Benutzer hat jegliche Rechte auf dem System und so kann es mal schnell vorkommen, dass man irgendein Befehl oder Befehlskette ausführt die dir deinen Server zerschießen. 

Deshalb ist es keine schlechte Idee sich einen neuen Benutzer anzulegen!

## Ein neuer Benutzer
Da wir also nicht ständig als root unterwegs sein wollen, erstellen wir uns einen neuen Benutzer.

```
$ adduser username
 ``` 


Eben ein Passwort festlegen und voilà, der neue Benutzer existiert.

Um unseren neuen Benutzer zu ermöglichen Programme zu nutzen, die nur dem root zugeschrieben sind, muss folgendes geschehen
```
$ usermod -aG sudo username
```

Wir können nun zum neu angelegten Benutzer wechseln
```
$ su - username
```

## Schlüsselpaar Generieren

Es werden zwei Schlüssel generiert. Ein öffentlicher und ein privater Schlüssel. Der öffentliche Schlüssel befindet sich nachher auf dem Server. Der private Schlüssel befindet sich auf der Maschine, von wo du dich mit dem Server verbinden wirst. 
>An dieser Stelle sollte darauf hingewiesen werden, dass der private Schlüssel nur **dir** bekannt sein sollte.

#### Linux/Unix
Hier sollte noch was hin
```
$ ssh-keygen -b 4096
```

Mit 4096 Bit gehen wir mal auf Nummer sicher.  Im anschließenden Dialog wirst du gefragt, ob du ein Passwort festlegen möchtest. Das ist an dieser Stelle dir selbst überlassen.

#### Windows
Wenn das Windows Subsystem for Linux (WSL) aktiviert oder Cygwin installiert ist, dann läuft das Prozedere wie im Linux/Unix Abschnitt ab. Falls nicht kann ein graphisches Programm wie PuTTYgen verwendet werden.

## Keys Übertragen
Der öffentliche Schlüssel muss zum Server übertragen werden. Das kann auf zwei Arten geschehen, wovon die erste aufgezeigte komfortabler ist.

_Nr 1._
```
$ ssh-copy-id username@server_ip
```

_Nr 2._
Den Inhalt des öffentlichen Schlüssels in den Zwischenspeicher packen
```
$ ssh username@server_ip
$ nano ./ssh/authorized_keys
```
und dann am Besten ans untere Ende in einer neuen Zeile einfügen.

>Falls das Verzeichnis ``.ssh`` und die Datei ``authorized_keys`` nicht existieren, dann kann man sie per Hand anlegen.

Wenn bei der erneuten Anmeldung über SSH die Passwortabfrage entfällt, hat das ganze funktioniert.

## SSH Konfigurationsdatei
Konfigurationsdateien von Diensten befinden sich bei unixoide System im Verzeichnis ``/etc``. In unserem Falle passen wir die ``/etc/ssh/sshd.config`` an.

Bevor wir die Datei anpassen, bitte ich darum, dass eine Kopie angelegt wird.
```
$ sudo cp /etc/ssh/sshd.config /etc/ssh/sshd.config.bak
```

### Konfiguration
```
$ sudo nano /etc/ssh/sshd.conf 
```

Damit wird die neuere Version des Protokolls benutzen
```
Protocol 2
```

Als root sollte man sich nicht mehr über SSH anmelden sollen, denn das ist der naheliegendste Benutzern, den ein Angreifer benutzt, um sich einzuwählen.
```
PermitRootLogin no
```

Hat das mit den Schlüsseln funktioniert? Dann sollte auf ein Passwort verzichtet werden. Damit fällt einer der größten Angriffsvektoren raus.
```
PasswordAuthentication no 
```

Nur der Benutzer, den du im Abschnitt [Ein neuer Benutzer](#ein-neuer-benutzer) erstellt hast, darf sich über SSH einloggen.
```
AllowUser username
```

Nachdem alle Anpassungen vorgenommen werden, muss der SSH Dienst neu gestartet werden. So gehts beispielsweise unter Ubuntu
```
$ sudo systemctl reload sshd
```

## SSH Port
Der Port des SSH Servers kann geändert werden. Das geschieht ebenfalls in der Konfigurationsdatei. Man könnte an dieser Stelle denken, dass man dem Angreifer damit ein Strich durch die Rechnung macht. Allerdings muss an dieser Stelle festgehalten werden, dass das faktisch nicht viel bringt. 

Es ist trivial standardisierte Dienste  zu ermitteln und das zeigt z.B. ein einfacher Port Scan mit ``nmap``.

Wenn man sich über einen TCP Client mit einem Server verbindet, worauf ein SSH Dienst läuft, erhält man so eine Antwort.
```
$ nc sdf.org 22
$ SSH-2.0-OpenSSH_7.1
```
> Das ist der Protokoll Anfang, in dem der Server dem Client mitteilt, welche SSH Protokoll Version  benutzt wird, um im folgenden weiter zu kommunizieren.

## Zusätzliche Absicherung mit Fail2Ban
Damit kann man unerwünschte Gäste automatisch aussperren, die innerhalb eines Zeitintervalls eine Anzahl an Anmeldeversuchen überschritten haben. 

Funktionieren tut dies über logs erkennen und bannen diese IP, indem die Firewall jegliche Pakete von ihnen mehr akzeptiert.

### Installation
Unter Debian Distributionen
```
$ sudo apt install fail2ban
```

### Konfiguration
Wieder sollte eine Kopie angelegt werden, bevor wir etwas anpassen.
```
$ sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Die ``jail.local`` überschreibt jegliche Werte, die in der ``jail.conf`` definiert sind. Diese sollte verwendet werden, um Anpassungen vorzunehmen
```
$ sudo nano /etc/fail2ban/jail.local
```

Es ist existiert schon ein SSH Filter. Dieser muss nur noch aktiviert werden.
```
[sshd]
enabled=true
```

Nachdem alle Anpassungen vorgenommen werden, muss der fail2ban Dienst neu gestartet werden. So gehts beispielsweise unter Ubuntu
```
$ sudo systemctl restart fail2ban
```
Jetzt zurücklehnen und einfach beobachten
```
$ sudo tail -f /var/log/fail2ban.log
```

Vielleicht wäre es noch ganz interessant zu wissen, wie man gebannte IPs einsehen kann
```
$ sudo cat /var/log/fail2ban.log | grep Ban
```