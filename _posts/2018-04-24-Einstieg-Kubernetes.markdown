---
layout: post
title: Einführung in den Einsatz von Kubernetes
lang: de
ref: introkuber
date: 2018-04-21 11:30:00 +0300
description: Einführung in den Einsatz von Kubernetes
cover: assets/images/delegate-red.jpg 
tags: [DevOps, Kubernetes, Microservices, LoadBalancer]
author: pierrewilken
categories: pierrewilken
subclass: 'post tag-fiction'
navigation: true
---

## Wichtigsten Begrifflichkeiten

| Begriff | Erklärung |
| ------ | ------ |
| Label | Benutzt um Ressourcen zu klassifizieren.  Zum filtern, organisieren und für massen Operationen. |
| Selector | Zum selektieren anhand von Labels. Kannst du z.B. in den YAML-Files verwenden. |
| Replication Controller | Managed die Lebenszyklen von pods. Stellt z.B. sicher das immer genug Instanzen laufen. |
| Service | Sitzt quasi über den Pods und gibt denen eine IP Adresse und DNS-Name. Ist eine Load Balancing Konfiguration. |
| Pod | Eine Gruppe von Containern and deren Storage |
| Cluster | Set von Maschinen (physikal oder virtuell) auf denen die Anwendungen gemanaged werden und laufen. |
| Deployment | Gibt Kubernetes an wie Instanzen der Anwendung erstellt und geupdatet werden. <br/> (Hat einen Selbstheilungseffekt, fällt ein Node aus, merkt dieser das automatisch und gleicht aus.) |

## Wichtigsten Befehle

| Begriff | Erklärung |
| ------ | ------ |
| kubectl get services | Alle services im Namespace |
| kubectl get pods -o wide   | Alle pods im Namespace mit mehr details |
| kubectl get deployment loginservice   | Listet das Deployment mit dem Namen loginservice auf. |
| kubectl describe services loginservice | Detailierte Informationen über den Service loginservice |
| kubectl expose deployment loginservice --type=LoadBalancer --name=loginservice | Gibt den kompletten Pod über einen externen Endpunkt frei.  |



# Beispiel Vorgang
Automated build für github -> docker einrichten <a href="https:pierrewilken.de/2018/04/21/Build-Pipeline-Docker-und-Github.html" rel="build pipeline github docker">Build Pipeline: github -> docker</a>


### In der Kubernetes-UI ein Secret für den Dockerhub-Login hinterlegen
In die Kubernetes CLI gehen
```sh
$ kubectl create secret docker-registry <SecretName> --docker-server=<your-registry-server> 
--docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>
```
Der Secret-Name muss nachher im YAML-File verwendet werden, damit dieser das Image aus dem private Repo beziehen kann.
### YAML-File erstellen
Einfach mit einem beliebigen Editor eine Datei .yaml erstellen.
```sh
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: loginservice-deployment
  labels: 
    app: loginservice
spec:
  replicas: 3
  selector:
    matchLabels:
      app: loginservice
  template:
    metadata:
      labels:
        app: loginservice
    spec:
      containers:
      - name: loginservice
        image: pierreros/loginservice:latest
        ports:
        - containerPort: 80
          name: http
      imagePullSecrets:
        - name: dockerhub
```
### YAML-File zum Deployment erzeugen verwenden
In Kubernetes rein, oben rechts auf Create klicken.
Dann "Upload a YAML or JSON file" wählen und uploaden. Sollte irgendwas am YAML-File nicht stimmen, meldet er sich.

Nun werden automatisch die Instanzen anhand des Images + der YAML-Einstellungen erstellt. Es wird immer automatisch dafür gesorgt das die Anzahl der Replicas korrekt ist, fällt also z.B. ein Node aus, erstellt er eine neue Instanz auf einem anderen Node.

Unsere Instanzen sind nun als pods auf unterschiedlichen Hosts intern ansprechbar. Von extern sind diese jedoch nicht zugänglich.

### Den erstellten loginservice nun auch von extern zugänglich machen
Hierfür müssen wir einen service erstellen, dieser bildet in unserem Fall einen öffentlichen Endpunkt für alle loginservice Instanzen ab.

 ```sh
$ kubectl expose deployment loginservice --type=LoadBalancer --name=loginservice 
```

Die Anfragen werden automatisch an die einzelnen Instanzen verteilt.
