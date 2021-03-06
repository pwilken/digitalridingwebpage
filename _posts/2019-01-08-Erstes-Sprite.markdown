---
layout: post
title: MonoGame 2D - Erstes Sprite
lang: de
description: Erste Schritte in 2D in MonoGame Learning by Sharing
cover: assets/images/screenshots/monogame/09.png
tags: [MonoGame, 2D, Game, Platformer, Graphics]
author: sgoerzen
categories: sgoerzen
subclass: 'post tag-fiction'
navigation: true
comments: true
level: 1
---

In diesem Artikel lernst du was Sprites sind und wie man sie in MonoGame sinnvoll einbindet.

## Was sind Sprites?
Für die Entwicklung von 2D Spielen sind Spritesets das A und O. Alles, was du siehst, besteht aus Sprites. 
Sprites sind nichts anderes als Bilddateien, die für unterschiedliche Zwecke verwendet werden. 

Zum Beispiel können sie dafür verwendet werden, grafische Benutzerelemente oder um einen Charakter  darzustellen.

Da das Laden von einer (z.B. 2 MB großen) Datei schneller geht als das Laden von 100 kleinen, die in der Summe 2 MB ergeben, werden häufig s.g. Spritesets verwendet. Ein Spriteset enthält dann alle Animationframes des gewünschten Sprite, wie zum Beispiel die Charakterbewegungen.

## Wo bekomme ich Sprites her?
Sprites variieren je nach Grafikstil des Spiels. Je nachdem, was du benötigst, kannst du mit einem Grafikboard welche zeichnen oder mit der Maus pixeln. Der beste Weg für Entwickler ist sich an freien Assets zu bedienen oder welche zu kaufen.

Ich habe für unser gemeinsames Projekt eine bunte Sammlung gefunden: [hier](https://bayat.itch.io/platform-game-assets).

Auf dieser Webseite gibt es viele schöne Assets.
Und falls dir Assets gefallen, dann würde sich der Creator sicherlich über eine kleine Spende freuen.
## Sprite in MonoGame
Wie bekomme ich nun ein Sprite in mein Spiel?

Dafür benötigen wir die Content Pipeline. Was das ist kannst du in einem späteren Artikel nachlesen. In den ersten Schritten genügt es jedoch zu wissen, dass die Pipeline Dateien lädt und in eine entsprechende C#-Klasse aus MonoGame umwandelt.
In unserem Fall wird die Content Pipeline eine Bilddatei in die Klasse "Texture2D" umwandeln.

Kopiere die Datei "Platform Game Assets/Character/png/2x/Body.png" in dein MonoGame Projekt. Ich habe dafür ein Ordner "Assets/Sprites" erstellt.

### In die Pipeline importieren
Nun benötigen wir das Pipeline Tool. Das Pipeline Tool wird aus unserer PNG-Datei eine .xnb Datei machen, die dann von der Pipeline in MonoGame gelesen werden kann. (Wie bereits erwähnt, ist es an dieser Stelle nicht notwendig zu wissen, warum das wichtig ist).

In diesem Tool erstellst du eine neue Pipeline, die du in deinem Projekt speicherst und fügst dann dort einfach deine Bilddatei hinzu. Achte darauf den gewünschten Pfad einzustellen. Wie das alles geht siehst du in meinen Screenshots.
![Create Pipeline](/assets/images/screenshots/monogame/07.png) 
![Pipeline Settings](/assets/images/screenshots/monogame/08.png)

Danach musst du lediglich auf "Build" klicken, damit die xnb-Datei erstellt wird.

Um zu überprüfen, dass es funktioniert hat, kannst du in deinem Ordner "bin/Debug" (oder Release) nachschauen, ob ein "Assets/Sprites/Body.xnb" erstellt wurde.
### Textur mit Content Pipeline
Nun muss das Sprite nur noch ins Spiel geladen werden. Das machen wir mit folgenden Zeilen:
```cs
private Texture2D body;
protected override void LoadContent()
{
    spriteBatch = new SpriteBatch(GraphicsDevice);

    Content.RootDirectory = "Assets";

    body = Content.Load<Texture2D>("Sprites/Body");
}
``` 
### Textur ohne Pipeline
Falls du Schwierigkeiten mit der Content Pipeline oder andere Gründe hast, diese zu meiden, dann kannst du auch die Bilddateien so wie sie sind zur kompilierten Exe Datei kopieren (oder von der IDE kopieren lassen) und dann wie folgt laden:
```cs
private Texture2D body;
protected override void LoadContent()
{
    spriteBatch = new SpriteBatch(GraphicsDevice);
    body = Texture2D.FromStream(GraphicsDevice, new System.IO.FileStream("Assets/Sprites/body.png", System.IO.FileMode.Open));
}
```
### Sprite im Spiel anzeigen
Um nun noch etwas sinnvolles anzuzeigen, erstellen wir eine Variable für die Position und rendern unsere Textur.

```cs
private Vector2 position = Vector2.Zero;
protected override void Update(GameTime gameTime)
{
    if (GamePad.GetState(PlayerIndex.One).Buttons.Back ==
        ButtonState.Pressed || Keyboard.GetState().IsKeyDown(
            Keys.Escape))
    {
        Exit();
    }

    if (Keyboard.GetState().IsKeyDown(Keys.A))
    {
        position.X--;
    } else if (Keyboard.GetState().IsKeyDown(Keys.D))
    {
        position.X++;
    }
    
    base.Update(gameTime);
}

protected override void Draw(GameTime gameTime)
{
    GraphicsDevice.Clear(Color.Black);

    spriteBatch.Begin();
    spriteBatch.Draw(body, position, Color.White);
    spriteBatch.End();

    base.Draw(gameTime);
}
```

Mit Keyboard.GetState können wir den Status der Tastatur abrufen und somit Eingaben erfragen. In diesem Code-Snippet zeichnen wir unser Sprite an einer bestimmten Position, die wir mit A und D verändern können.

Das ist nun unser Ergebnis:
![First Sprite](/assets/images/screenshots/monogame/09.png)

Der entstandene Code kann [hier](https://github.com/SGoerzen/2dplatformer/tree/master/first-sprites) heruntergeladen werden.