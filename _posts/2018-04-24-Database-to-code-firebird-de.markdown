---
layout: post
title: Scaffolding - Code aus bestehender Datenbank generieren (Firebird Datenbank)
lang: de
ref: dbtocodefirebird
date: 2018-04-21 11:45:00 +0300
description: Scaffolding - Code aus bestehender Datenbank generieren (Firebird Datenbank)
cover: assets/images/scaffold.jpg
tags: [Firebird, Database to code, scaffolding, entityframework core, ASP.Net Core]
author: pierrewilken
categories: pierrewilken
subclass: 'post tag-fiction'
navigation: true
---

# Database to Code mit einer existierenden Firebird Datenbank
Generieren von Models, Controller und Views in einer "ASP.Net Core Web Applikation" anhand existierender Firebird Datenbank.

## Schritt 1: Erstelle eine ASP.Net Core Web Applikation

## Schritt 2: Füge die folgenden nuget-packages hinzu
- EntityFrameworkCore.FirebirdSql
- Microsoft.AspNetCore.All
- Microsoft.NETCore.App
- Microsoft.VisualStudio.Web.CodeGeneration.Design

## Schritt 3: Erstelle und speichere den connection string zu deiner Datenbank 
Using example values.

String for dbfilename.fdb 
```sh
"User=sysdba;Password=masterkey;Database=/firebird/data/dbfilename.fdb;DataSource=127.0.0.1;
Port=3050;Dialect=3;Charset=NONE;Role=;Connection lifetime=15;Pooling=true;MinPoolSize=0;
MaxPoolSize=50;PacketSize=8192;ServerType=0;"
```

## Schritt 4: Benutze Scaffold um dein Datenbank-Model zu reversen
Benutze den folgenden Befehl mit deinen angepassten Werten, z.B. in VisualStudio in der Paketverwaltungs-Konsole.
```sh
Scaffold-DbContext "User=sysdba;Password=masterkey;Database=/firebird/data/dbfilename.fdb;
DataSource=127.0.0.1;Port=3050;Dialect=3;Charset=NONE;Role=;Connection lifetime=15;
Pooling=true;MinPoolSize=0;MaxPoolSize=50;PacketSize=8192;ServerType=0;"
EntityFrameworkCore.FirebirdSQL -o Models
```

## Schritt 5: Generiere die Controller und Views
Rechtsklick auf Projekt -> Add -> New Scaffolded Item...
-> MVC Controller with views, using Entity Framework

![Foo](http://pierrewilken.de/assets/img/dbtocode_fb.png)

Es wird eine data context Klasse für alle Models der Datenbank generiert.

## Schritt 6: Kleine Anpassungen
Add in Startup.cs -> ConfigureServices(IServiceCollection services)
 ```sh           
services.AddDbContext<_firebird_data_dbfilename_fdbContext>(
   options => options.UseFirebird(
   Database.GetConnectionString()
 ));
```

Füge den folgenden Konstruktor in _firebird_data_dbfilename_fdbContext hinzu.
 ```sh    
public _firebird_data_dbfilename_fdbContext(DbContextOptions<_firebird_data_dbfilename_fdbContext> options) 
                                            base(options)
{            
}
```

## Schritt 7: Genieße die Resultate
Die Anwendung einfach ausführen und am ende der Url den Controller-Namen ohne "Controller" hinzufügen.
http://localhost:51710/AddContacts

