"""
Copies the chosen game screenshots into public/shots/ as webp, and makes the social-preview image (public/og.jpg)
and the favicon (public/favicon.png).

    python scripts/pick_shots.py <screenshot-folder> [path-to-game]

<screenshot-folder> holds one subfolder per run of the game's autotest, e.g. made with:
    SketchyBusiness.exe --autotest --unlock-all --chapter=1 --part=1 --frames 2600 --shots 500,1100,1700,2500 --out <folder>/c1p1
"""
import sys
from pathlib import Path

from PIL import Image

SITE = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1])
GAME = Path(sys.argv[2]) if len(sys.argv) > 2 else SITE.parent / "SketchyBusiness"
OUT = SITE / "public" / "shots"

PICKS = {
    "ch1": "c1p1/frame_2500.png",
    "ch2": "c2p1/frame_500.png",
    "ch3": "c3p4/frame_1700.png",
    "ch4": "c4p4/frame_1700.png",
    "ch5": "c5p4/frame_1700.png",
    "ch6": "c6p4/frame_2500.png",
    "ch7": "c7p4/frame_1700.png",
    "ch8": "c8p1/frame_500.png",
    "ch9": "c9p1/frame_1100.png",
    "ch10": "c10p4/frame_500.png",
    "coop": "coop/frame_2500.png",
    "keep": "c4p1/frame_2500.png",
    "menu": "menu/frame_110.png",
    "village": "c6p1/frame_500.png",
    "factory": "c8p2/frame_500.png",
    "dot": "c10p2/frame_500.png",
}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for name, rel in PICKS.items():
        p = SRC / rel
        if not p.exists():
            print(f"  missing {p}")
            continue
        im = Image.open(p).convert("RGB")
        im.save(OUT / f"{name}.webp", "WEBP", quality=82, method=5)
        im.resize((640, 360), Image.LANCZOS).save(OUT / f"{name}-sm.webp", "WEBP", quality=80, method=5)
    # social preview: chapter 1's cottage
    Image.open(SRC / PICKS["ch1"]).convert("RGB").resize((1200, 675), Image.LANCZOS).save(SITE / "public/og.jpg", quality=85)
    # favicon from the game's icon
    ico = Image.open(GAME / "game/sketchy.ico")
    ico.size = max(ico.ico.sizes())
    ico.convert("RGBA").resize((128, 128), Image.LANCZOS).save(SITE / "public/favicon.png")
    print(f"{len(PICKS)} shots -> {OUT}")


if __name__ == "__main__":
    main()
