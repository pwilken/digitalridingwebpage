---
layout: post
title: Aufsetzen einer Build Pipeline - Github zum Docker Hub
lang: de
ref: bp-gh-docker
date: 2018-04-21 11:00:00 +0300
description: Aufsetzen einer Build Pipeline, zum automatisierten Deployen von Docker images in der Docker Hub, aus Github heraus.
cover: assets/images/ci-cd.jpg
tags: [CI/CD, Docker, Github, Build Pipeline, Continuous Delivery, Continuous Integration, .Net Core]
author: pierrewilken
categories: pierrewilken
subclass: 'post tag-fiction'
navigation: true
---

Folgende Dinge werden für das Aufsetzen einer simplen Continues Integration und Delivery mit Github und dem Docker Hub benötigt:
+ Docker Hub Account
+ Github Account
+ Lauffähiges Projekt in Github mit Dockerfile

# Das Github Projekt mit Dockerfile
## Beispielprojekt mit Dockerfile (.Net Core)
Das Dockerfile kann selbst geschrieben oder von Visual Studio erstellt werden. 
Auf das selbst schreiben werde ich demnächst detailiert in einem weiteren Beitrag eingehen.

Ihr könnt entweder z.B. dieses Projekt 
<a href="https://github.com/pwilken/dotnetcore-webservice-demonstration" rel="pwilken/dotnetcore-webservice-demonstration">pwilken/dotnetcore-webservice-demonstration</a>
nehmen oder ein selbst erstelltes als Github Repository verwenden.

### Selbst erstellen
In Visual Studio ein neues Projekt erstellen. 
Unter .Net Core den Typ "ASP.NET Core Web Application" auswählen und mit OK bestätigen.
In dem darauffolgenden Fenster "API" wählen und "Enable Docker Support" anhaken + "OS: Linux" auswählen. 

Das Projekt könnt ihr, wenn ihr Docker lokal installiert habt und auf Linux Container gestellt habt, so schon lokal mit Docker testen.
Ihr könnt das Projekt aber auch so schon für die Build Pipeline als Repository zu Github hinzufügen. 
Für das Einrichten und Testen reicht das.

# Einrichten der Build Pipeline
## Vorzunehmende Einstellungen
<a href="https://hub.docker.com/" rel="hub.docker">hub.docker</a> -> Settings -> Linked Accounts & Services -> Link Github -> Public and Private -> Authorize docker <br/>
<a href="https://cloud.docker.com" rel="cloud.docker">cloud.docker</a> -> Open a repository -> Builds -> Configure Automated Builds
 
Bei jeder Änderung (push) des Github-Repos, wird das Image nun neu gebuilded.

## Docker Rechte in Github
Die Rechte für das Docker Hub sind auf Github sichtbar und entfernbar unter:
Settings -> Applications -> Authorized OAuth Apps
