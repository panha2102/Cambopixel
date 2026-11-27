# Angkor Vanguard: Kulen Chronicle

Desktop build of a Three.js hack-and-slash survivor set on Kulen Mountain and Angkor — Khmer warrior vs escalating waves and warlords.

> **Source note:** The original Gemini share HTML could not be recovered automatically (no `llm_shared_chat` module; share page is JS-rendered). This folder ships a **spec-faithful reconstruction** in `game/index.html`. Replace that file with your Gemini `index.html` if you have it — the Electron wrapper will load it as-is.

## Controls

| Input | Action |
|--------|--------|
| **W A S D** | Move |
| **LMB** | Light attack |
| **RMB** | Heavy attack |
| **Space** (1st / 2nd / 3rd) | Roll → dive → directional kick dodge (uses stamina) |
| **Space + WASD** | Dodge toward direction |
| **Timed Space** when enemy strikes | Perfect counter spin (AOE) |
| **1 / 2 / 3** | Pick level-up upgrade |
| **F11** | Toggle fullscreen (Electron) |

**Combos:** `L-L-L` thrust · `L-L-H` jump spin splash · `H-H-L` lightning strike · Boss finishers on kill.

## Run locally (browser)

Open `game/index.html` in a modern Chromium browser (uses vendored `./vendor/three.min.js`, no CDN).

## Run with Electron (dev)

```bash
cd angkor-vanguard
npm install
npm start
```

## Build Windows `.exe`

Build host: **Linux** (this CI/agent VM). `electron-builder` downloads the Windows Electron binary; **NSIS** may require Wine on Linux (not installed here).

```bash
cd angkor-vanguard
npm install
npm run dist:win
```

### Artifacts (`angkor-vanguard/dist/`)

| Output | Description |
|--------|-------------|
| `AngkorVanguard-KulenChronicle-1.0.0-portable.exe` | Portable Windows x64 (no install) |
| `AngkorVanguard-KulenChronicle-1.0.0-Setup.exe` | NSIS installer (if Wine/tooling available) |
| `win-unpacked/` | Unpacked app — run `Angkor Vanguard Kulen Chronicle.exe` inside |

Unpacked builds work on Linux builders without Wine; use them for smoke tests or ship the portable target when NSIS fails.

## Project layout

```
angkor-vanguard/
  electron/          # main process + preload
  game/
    index.html       # single-file game (+ script refs local Three.js)
    vendor/three.min.js
  package.json       # electron-builder config
```

## License

Apache-2.0 (same as parent Cambopixel repo).