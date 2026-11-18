---
layout: ../../layouts/Wiki.astro
title: Help & FAQ
description: Installing Sketchy Business, saves, controllers, and fixing common problems.
---

## Installing

**Windows says "Windows protected your PC". Is it safe?**
That's SmartScreen. It appears for new games from small developers that haven't bought a code-signing certificate
yet. Click **More info**, then **Run anyway**. The installer only installs the game, a shortcut or two, and (if your PC
needs it) Microsoft's own Visual C++ runtime.

**Is there a Mac or Linux version?**
Not yet. Windows 10 and 11 (64-bit) only for now.

**Do I need admin rights?**
No. Install it just for you without them. Installing for every user on the PC asks for admin.

## Saves & settings

**Where are my saves?**
In `%APPDATA%\Graphite\Sketchy Business` (paste that into File Explorer's address bar). `save.json` is your progress
and `settings.json` your settings. Updating or uninstalling the game never touches this folder.

**How do I start over?**
Pick **New game** on the main menu: it starts again from chapter 1 (chapters you've unlocked stay in the Chapters
list). To wipe everything instead, close the game and delete `save.json` from that folder.

**How does saving work?**
Every flag and every boss arena saves automatically. Pause → **Save & quit** saves and goes back to the menu.

## Controllers

**My controller doesn't work.**
Plug it in before starting the game, then check **Settings → Controls**. Xbox controllers work best; most
PlayStation and Switch Pro controllers work too.

**Can two people play on one keyboard?**
Yes. See the [two-player controls](/wiki/controls#two-players).

## Problems

**The game won't start, or the screen is black.**
Update your graphics drivers: the game needs OpenGL 3.3, which almost every PC from the last ten years has. If you
have two graphics cards (most gaming laptops), make Windows use the dedicated one for `SketchyBusiness.exe`
(Settings → System → Display → Graphics).

**It's running slowly.**
Settings → Video: lower **Quality** or **Render scale**, or turn on an **FPS limit**.

**The wobbly lines make me feel a bit sick.**
Settings → Video → **Hand-drawn wobble**: turn it down or off.

**I'm stuck on a puzzle.**
Read the [puzzle rooms](/wiki/puzzles) page for a nudge. The Narrator usually drops a hint too.

**I'm stuck on a boss.**
The [boss guide](/wiki/bosses) explains every fight. You can also turn on **assist mode** (Settings → Gameplay)
for 5 hearts.

## Uninstalling

Windows **Settings → Apps**, find Sketchy Business, then **Uninstall**.
