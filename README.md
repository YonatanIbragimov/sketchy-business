# Sketchy Business: website

The promo page, download page and wiki for **Sketchy Business**, a hand-drawn platformer for Windows.
It's a static [Astro](https://astro.build) site, ready for Vercel.

## Run it

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

## Where the installer lives

The installer is about 240 MB, too big for git or a Vercel deployment, so it's attached to this repo's
**GitHub Releases** under a fixed name, `SketchyBusiness-Setup.exe`. Every Download button links to

```
https://github.com/YonatanIbragimov/sketchy-business/releases/latest/download/SketchyBusiness-Setup.exe
```

which always serves the newest release, so the link never needs changing.

### Shipping a new version

1. In the game project, build the game and then the installer: `python tools/make_installer.py 1.0.3`
2. Here: `npm run release -- 1.0.3` (add `--notes "what changed"` if you like). This uploads the installer as release
   `v1.0.3` and updates `src/data/release.json` (the version number, date and size the site shows).
3. Commit and push. Vercel redeploys on its own.

## Content

| What | Where |
|---|---|
| Pages | `src/pages/` (`index.astro` is the promo page; `download.astro`; `wiki/*`) |
| Wiki prose | `src/pages/wiki/*.md`: plain markdown, edit freely |
| Characters, bosses | `src/data/cast.ts` |
| Chapters | `src/data/chapters.ts` |
| Narrator lines on the front page | `src/data/narrator.ts` |
| Current version | `src/data/release.json` (written by `npm run release`) |
| Look | `src/styles/global.css` (notebook paper, the pencil "boil", buttons) |

### Art and screenshots

All art is the game's own, pulled from the game folder (`../SketchyBusiness` by default):

- `npm run art` (`scripts/build_art.py`) turns the sprite sheets into animation strips in `public/art/` and writes
  `src/data/sprites.json`. `<Sprite name="..."/>` plays them.
- `python scripts/pick_shots.py <screenshot-folder>` copies the chosen screenshots into `public/shots/` and makes the
  social preview (`public/og.jpg`) and favicon. Screenshots come from the game's autotest, e.g.
  `SketchyBusiness.exe --autotest --unlock-all --chapter=1 --part=1 --frames 2600 --shots 500,1100,1700,2500 --out <folder>/c1p1`.

## Deploying on Vercel

Import this repo in Vercel. It detects Astro on its own (build `npm run build`, output `dist`). Then set the real
domain in `astro.config.mjs` (`site:`), which is used for canonical links and the social preview image.
