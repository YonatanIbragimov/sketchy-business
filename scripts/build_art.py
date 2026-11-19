"""
Turns the game's sprite sheets into the website's art: one horizontal strip per animation (public/art/<name>.webp)
that the <Sprite> component plays with CSS, plus a few still pictures. Writes src/data/sprites.json.

    python scripts/build_art.py [path-to-game]      (default: ../SketchyBusiness)

Re-run it whenever the game's art changes. Everything is read from the game folder; nothing there is changed.
"""
import json
import sys
from pathlib import Path

from PIL import Image

SITE = Path(__file__).resolve().parent.parent
GAME = Path(sys.argv[1]) if len(sys.argv) > 1 else SITE.parent / "SketchyBusiness"
OUT = SITE / "public" / "art"
DATA = SITE / "src" / "data" / "sprites.json"
HEIGHT = 220  # strip height in px (shown at up to ~110 css px tall, so it stays sharp on 2x screens)

# name -> (sheet json under assets/sprites, clip)
CAST = {
    "smudge": ("smudge.json", "idle"),
    "smudge_throw": ("smudge_throw.json", None),
}
for cid in ["dot", "pink", "scrunch", "reginald", "blotto", "compass", "blanc", "binderclip", "dogear", "protractor",
            "teabag", "mayor", "gearsley", "margin", "nub", "springclip", "tack", "smudgeling", "snips",
            "folk1", "folk2", "folk3",
            # the errand folk (1.1.1)
            "furrow", "hatch", "grist", "steve", "coil", "patch", "wobble", "turnkey", "memo", "glider", "nib",
            "blotter", "stub", "fuzz", "sprocket", "valve", "lump", "dunk", "quibble", "fray"]:
    CAST[cid] = (f"cast/{cid}.json", None)
for extra in ["pink_walk", "scrunch_walk", "reginald_walk", "reginald_attack", "blotto_walk", "blanc_walk", "dot_walk",
              "compass_walk", "nub_walk", "gearsley_walk", "margin_walk", "mayor_walk"]:
    CAST[extra] = (f"cast/{extra}.json", None)

# source sheets drawn with the head on: path under the game folder, cols x rows, fps, keep every Nth frame
# (the new Noggin and Penny design, Nov 2026; 64-frame clips are halved so a strip stays under WebP's width limit)
NEW = "art_inbox/new_hero_design"
SHEETS = {}
for who in ("noggin", "penny"):
    SHEETS.update({
        f"{who}_idle": (f"{NEW}/core_three/final/256/{who}__idle__8x8__32fps.png", 8, 8, 32, 2),
        f"{who}_run": (f"{NEW}/core_three/final/256/{who}__run__8x8__96fps.png", 8, 8, 96, 2),
        f"{who}_jump": (f"{NEW}/combat_expressive/final/256/{who}__double_jump__8x8__128fps.png", 8, 8, 128, 2),
        f"{who}_slash": (f"{NEW}/combat_expressive/final/256/{who}__slash__8x8__160fps.png", 8, 8, 160, 2),
        f"{who}_crawl": (f"{NEW}/low_three/final/256/{who}__crawl__8x8__48fps.png", 8, 8, 48, 2),
    })
STILLS = {  # (sheet, frame): the first idle frame, at full resolution
    "noggin": (f"{NEW}/core_three/final/512/noggin__idle__8x8__32fps.png", 8, 8),
    "penny": (f"{NEW}/core_three/final/512/penny__idle__8x8__32fps.png", 8, 8),
}


def strip(frames, fps, name):
    """Crop every frame to the union of their ink, scale to HEIGHT, lay them side by side."""
    box = None
    for f in frames:
        b = f.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
        if b:
            box = b if box is None else (min(box[0], b[0]), min(box[1], b[1]), max(box[2], b[2]), max(box[3], b[3]))
    if box is None:
        print(f"  {name}: empty, skipped")
        return None
    pad = 4
    box = (max(0, box[0] - pad), max(0, box[1] - pad), box[2] + pad, box[3] + pad)
    k = HEIGHT / (box[3] - box[1])
    w = max(1, round((box[2] - box[0]) * k))
    sheet = Image.new("RGBA", (w * len(frames), HEIGHT), (0, 0, 0, 0))
    for i, f in enumerate(frames):
        sheet.paste(f.crop(box).resize((w, HEIGHT), Image.LANCZOS), (i * w, 0))
    sheet.save(OUT / f"{name}.webp", "WEBP", quality=88, method=6)
    return {"src": f"/art/{name}.webp", "frames": len(frames), "fps": fps, "w": w, "h": HEIGHT}


def from_game_sheet(rel, clip):
    meta = json.loads((GAME / "assets/sprites" / rel).read_text(encoding="utf-8"))
    img = Image.open((GAME / "assets/sprites" / rel).parent / meta["image"]).convert("RGBA")
    fw, fh = meta["frameWidth"], meta["frameHeight"]
    cols = img.width // fw
    anims = meta.get("animations") or {}
    clip = clip or meta.get("clip") or next(iter(anims), None)
    a = anims.get(clip) if anims else None
    idx = a["frames"] if a else list(range(cols * (img.height // fh)))
    fps = (a or {}).get("fps") or 1000 / meta.get("frameMs", 120)
    frames = [img.crop(((i % cols) * fw, (i // cols) * fh, (i % cols + 1) * fw, (i // cols + 1) * fh)) for i in idx]
    facing = meta.get("facing", 1)
    if facing == -1:  # the site shows everyone facing right, toward the reader's reading direction
        frames = [f.transpose(Image.FLIP_LEFT_RIGHT) for f in frames]
    return frames, fps


def from_src_sheet(rel, cols, rows):
    img = Image.open(GAME / rel).convert("RGBA")
    fw, fh = img.width // cols, img.height // rows
    return [img.crop((c * fw, r * fh, (c + 1) * fw, (r + 1) * fh)) for r in range(rows) for c in range(cols)]


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    out = {}
    for name, (rel, clip) in CAST.items():
        if not (GAME / "assets/sprites" / rel).exists():
            print(f"  {name}: no sheet, skipped")
            continue
        frames, fps = from_game_sheet(rel, clip)
        if (r := strip(frames, fps, name)):
            out[name] = r
    for name, (rel, c, r, fps, step) in SHEETS.items():
        if (GAME / rel).exists() and (s := strip(from_src_sheet(rel, c, r)[::step], fps / step, name)):
            out[name] = s
    for name, (rel, c, r) in STILLS.items():
        im = from_src_sheet(rel, c, r)[0]
        im = im.crop(im.getchannel("A").getbbox())
        k = 640 / im.height
        im.resize((round(im.width * k), 640), Image.LANCZOS).save(OUT / f"{name}.webp", "WEBP", quality=90, method=6)
        out[name + "_still"] = {"src": f"/art/{name}.webp", "frames": 1, "fps": 1, "w": round(im.width * k), "h": 640}
    DATA.write_text(json.dumps(out, indent=1), encoding="utf-8")
    print(f"{len(out)} sprites -> {OUT}")


if __name__ == "__main__":
    main()
