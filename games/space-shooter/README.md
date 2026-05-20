 # 🚀 Space Shooter

 [![Play](https://img.shields.io/badge/▶%20Play-Online-brightgreen?style=for-the-badge)](https://patrikpentikainen.github.io/space-shooter/)


A complete 2D arcade-style space shooter built with HTML5 Canvas, CSS3, and Vanilla JavaScript.
Includes a modular audio system powered by the Web Audio API with persistent volume settings.

## 🌍 English 🇬🇧

## 🎮 Overview

Space Shooter is a browser-based arcade game where the player controls a spaceship, destroys incoming enemies, and survives increasingly difficult waves.

The game features a scalable architecture, progressive difficulty, particle effects, and a fully synthesized audio system — all without external libraries.

## ✨ Features

- Smooth player movement and shooting
- Progressive difficulty (level increases every 100 points)
- Lives system with visual hit feedback
- Collision detection (AABB)
- Explosion particle effects
- Animated parallax star background
- Score & level tracking
- Game Over & Restart system
- Modular AudioManager
- Synthesized sound effects (no audio files required)
- Background music (looped pattern)
- Volume sliders (SFX + Music)
- Persistent settings via localStorage
- Clean, object-oriented ES6 code

## 🎯 Controls

| Action      | Key         |
|:------------|:-----------:|
| Move Left   | `←` or `A`  |
| Move Right  | `→` or `D`  |
| Shoot       | `Space`     |

## 🔊 Audio System

This game uses the Web Audio API to generate sounds in real time.

### Sound Effects

- Shoot
- Explosion
- Player hit
- Game over

### Music

- Lightweight looping synth pattern
- Independent volume control
- Toggle on/off

### Audio Architecture

```text
AudioContext
 └── Master Gain
      ├── SFX Gain
      └── Music Gain
```      

### Persistent Settings

The following are saved automatically:
- SFX enabled/disabled
- Music enabled/disabled
- Volume levels
- Master mute

Settings restore automatically on reload.

### Browser Audio Policy

Modern browsers block autoplay audio.
Sound activates only after a user interaction (click or keypress).
If audio is not enabled, the game runs normally in silent mode.

## 🏗️ Technical Highlights

- ES6 class-based architecture
- Modular AudioManager system
- Central CONFIG object
- requestAnimationFrame game loop
- Scalable difficulty system
- Clean separation of logic and rendering
- No external dependencies

## 📁 Project Structure

```text
space-shooter/
├── index.html
├── style.css
├── game.js
├── README.md
└── LICENSE
```

## ▶️ Running the Game

Open `index.html` directly in a modern browser.

Optional (recommended):

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 🔧 Customization

Game parameters can be adjusted inside the `CONFIG` object in `game.js`.
Audio settings and difficulty scaling can also be modified there.

## 📜 License

This project is licensed under the **MIT License**.
See the `LICENSE` file for details.

## 👤 Author

Developed by Patrik Pentikäinen

---

# 🚀 Space Shooter

[![Play](https://img.shields.io/badge/▶%20Play-Online-brightgreen?style=for-the-badge)](https://patrikpentikainen.github.io/space-shooter/)


Täydellinen 2D arcade-tyylinen avaruusräiskintäpeli, joka on rakennettu HTML5 Canvasilla, CSS3:lla ja puhtaalla (Vanilla) JavaScriptillä.
Sisältää modulaarisen äänijärjestelmän, joka hyödyntää Web Audio API:a sekä pysyvät äänenvoimakkuusasetukset.

## 🌍 Suomi 🇫🇮

## 🎮 Yleiskuvaus

Space Shooter on selainpohjainen arcade-tyylinen peli, jossa pelaaja ohjaa avaruusalusta ja tuhoaa ylhäältä saapuvia vihollisia.

Vaikeustaso kasvaa pisteiden myötä, ja peli sisältää partikkeliefektejä, modulaarisen äänijärjestelmän sekä selkeän objektiorientoidun arkkitehtuurin — ilman ulkoisia kirjastoja.

## ✨ Ominaisuudet

- Sulava liikkuminen ja ampuminen
- Progressiivinen vaikeustaso (level nousee 100 pisteen välein)
- Elämät + osumavisuaalit
- Törmäystunnistus (AABB)
- Räjähdysefektit
- Animoitu tähtitausta (parallax)
- Piste- ja level-järjestelmä
- Game Over & Restart -järjestelmä
- Modulaarinen AudioManager
- Synteettiset äänitehosteet (ei äänitiedostoja)
- Taustamusiikki
- Erilliset äänenvoimakkuussäätimet (SFX + Music)
- Asetusten tallennus localStorageen
- Siisti ES6-luokkarakenne

## 🎯 Ohjaimet

| Toiminto           | Näppäin      |
|:-------------------|:------------:|
| Liiku vasemmalle   | `←` tai `A`  |                
| Liiku oikealle     | `→` tai `D`  |
| Ammu               | `Välilyönti` |

## 🔊 Äänijärjestelmä

Peli käyttää Web Audio API:a äänten luomiseen reaaliaikaisesti.

### Äänitehosteet

- Ampuminen
- Räjähdys
- Pelaajan osuma
- Game Over

### Taustamusiikki

- Kevyt looppaava synapohjainen melodia
- Erillinen äänenvoimakkuus
- Kytkettävissä pois päältä

### Äänirakenne

```text
AudioContext
 └── Master Gain
      ├── SFX Gain
      └── Music Gain
```

### Asetusten tallennus

Seuraavat tallennetaan automaattisesti:

- SFX päällä/pois
- Musiikki päällä/pois
- Äänenvoimakkuudet
- Master mute

Asetukset palautuvat automaattisesti sivun latauksen yhteydessä.

### Selainrajoitus

Selaimet estävät automaattisen äänen.
Ääni aktivoituu vasta käyttäjän klikkauksen tai näppäinpainalluksen jälkeen.
Jos ääntä ei aktivoida, peli toimii normaalisti ilman ääntä.

## 🏗️ Tekninen rakenne

- ES6-luokkapohjainen arkkitehtuuri
- Modulaarinen AudioManager
- Keskitetty CONFIG-objekti
- requestAnimationFrame-pelilooppi
- Skaalautuva vaikeustaso
- Selkeä vastuunjako (logic vs render)
- Ei ulkoisia riippuvuuksia

## 📁 Projektin rakenne

```text
space-shooter/
├── index.html
├── style.css
├── game.js
├── README.md
└── LICENSE
```

## ▶️ Käynnistys

Avaa `index.html` selaimessa.

Suositeltava tapa:

```bash
python -m http.server 8000
```

Avaa selaimessa:

```text
http://localhost:8000
```

## 🔧 Muokattavuus

Pelinopeudet, spawn-tahti, pisteet ja muut parametrit löytyvät `CONFIG`-objektista tiedostossa `game.js`.

## 📜 Lisenssi

Tämä projekti on lisensoitu **MIT-lisenssillä**.
Katso tarkemmat ehdot `LICENSE`-tiedostosta.

## 👤 Kehittäjä

Patrik Pentikäinen

---
