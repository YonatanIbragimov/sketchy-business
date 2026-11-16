// The chapters, as in the game's assets/story.json and STORY.md. Level names come from assets/levels/chN/*.json.
export interface Chapter {
  n: number;
  title: string;
  place: string;
  paper: string;
  shot: string;
  blurb: string;
  levels: string[];
  boss: string;        // cast id of the chapter's big fight
  new: string[];       // what the chapter teaches
  late?: boolean;      // later chapters: story hidden behind a spoiler
}

export const chapters: Chapter[] = [
  {
    n: 1, title: "A Questionable Start", place: "Margin Meadows", paper: "lined notebook paper", shot: "ch1", boss: "pink",
    blurb: "A bored Artist spent ages on Noggin's head and about three seconds on his body. Now the Last Pencil is on its way to the Great Sharpener, and a pompous pink eraser is waiting in the bushes.",
    levels: ["Margin Village", "The Long Way Round", "Windmill Hill", "The Great Sharpener"],
    new: ["Run, jump, slide and roll", "Headbutts (before you have the pencil)", "Your first puzzle rooms", "Meet Dot"],
  },
  {
    n: 2, title: "The Rub-Out", place: "The Crumpled Fields", paper: "crumpled sketch paper", shot: "ch2", boss: "scrunch",
    blurb: "A field of thrown-away drafts, gusts of wind, and drawing pins hanging from every shelf. Then Lord Smudge starts rubbing out the page behind you.",
    levels: ["The Drafts Field", "Paper Mountains", "The Gust", "The Rub-Out"],
    new: ["Wind gusts", "Tacks that drop point-first", "The eraser chase"],
  },
  {
    n: 3, title: "Spiral Bound", place: "The wire spiral", paper: "graph paper", shot: "ch3", boss: "binderclip",
    blurb: "Smudge escapes to the far half of the book across the notebook's wire spiral. Swing on the rings over the drop, if the Binder Clip lets you cross.",
    levels: ["The Binding", "Coil Climb", "The Ring Binder", "Across the Spine"],
    new: ["Swing rings", "Combination locks (the code is earlier in the level)", "Tic-tac-toe, and losing at it"],
  },
  {
    n: 4, title: "Clean Slate Keep", place: "Smudge's castle", paper: "graph paper", shot: "ch4", boss: "reginald",
    blurb: "Ruler ramparts, a hall of very judgmental portraits and a throne room. The captain of the guard, Sir Reginald Rule, measures twice and hits once.",
    levels: ["The Gatehouse", "Ruler Ramparts", "Hall of Portraits", "The Throne Room"],
    new: ["Smudgelings (flying smudges that shiver, then swoop)", "Two-plate doors", "Spot the difference"],
    late: true,
  },
  {
    n: 5, title: "Sticky Note Sky", place: "The sky below the keep", paper: "lined notebook paper", shot: "ch5", boss: "dogear",
    blurb: "The keep's balcony ends in thin air. The only way down is across sticky notes stuck to the sky, in the wind, on paper planes. Captain Dogear rules the air.",
    levels: ["Sticky Note Sky", "Paper Plane Pass", "The Notice Board", "Dogear Drop"],
    new: ["Page folds", "Riding the wind", "Double jumps that annoy the narrator"],
    late: true,
  },
  {
    n: 6, title: "Pencil Pushers", place: "Inkwell Village", paper: "dot-grid journal", shot: "ch6", boss: "blotto",
    blurb: "Somebody knocked over the Great Inkwell, and the spill is drinking the village's ink. Mayor Quill would like a word. Several, actually.",
    levels: ["Inkwell Village", "The Drawbridge", "Ink Sewers", "The Great Inkwell"],
    new: ["Scissors (they shake, then charge)", "Crushers", "Drawbridges you draw yourself"],
    late: true,
  },
  {
    n: 7, title: "Pencil Case Canyon", place: "A giant pencil case", paper: "dot-grid journal", shot: "ch7", boss: "protractor",
    blurb: "The road to the Sharpening Works runs straight through a pencil case full of Smudge's minions. Zip pulls work as zip-lines. The Protractor guards the big one.",
    levels: ["Pencil Case Canyon", "Crayon Cliffs", "The Ruler Bridge", "The Big Zip"],
    new: ["Zip-lines", "Spinning saws", "Mirror pages"],
    late: true,
  },
  {
    n: 8, title: "Grind", place: "The Sharpening Works", paper: "blueprint", shot: "ch8", boss: "compass",
    blurb: "Conveyor belts, crushers and the Great Grinder. Foreman Gearsley is the last worker left, and the Compass has taken over the factory floor.",
    levels: ["Factory Floor", "The Grinder Stairs", "Gearsley's Line", "The Shredder"],
    new: ["Conveyor belts", "Powered lifts", "The shredder chase"],
    late: true,
  },
  {
    n: 9, title: "Coffee Stain Marsh", place: "The Artist's desk", paper: "coffee-stained paper", shot: "ch9", boss: "teabag",
    blurb: "The shredder throws Noggin clean off the page and onto the Artist's desk: coffee puddles, a rising mug and desk toys. The Tea Bag swings from the lamp.",
    levels: ["Coffee Stain Marsh", "The Mug", "Paperweight Pass", "Back on the Page"],
    new: ["Sticky coffee", "Rising tides", "Climbing back onto the page"],
    late: true,
  },
  {
    n: 10, title: "The Crayon Kiln", place: "The Crayon Kiln", paper: "kiln brick and melted wax", shot: "kiln", boss: "wick",
    blurb: "Smudge has left a note: six of his dearest friends will see you out. The first guards the graphite core, deep in the kiln where the Artist's broken crayons are melted down. The floor is molten wax.",
    levels: ["Wax Works", "Crayon Cliffs", "The Melting Floor", "Wick's Hearth"],
    new: ["Molten wax", "Paper planks that burn under your feet", "Falling embers (watch for the glowing mark)", "Wax-rock that sinks while you stand on it", "Your first protector, and the first part of the Ultimate Pencil"],
    late: true,
  },
  {
    n: 11, title: "The Final Draft", place: "The Forgotten Margins", paper: "stained parchment", shot: "ch10", boss: "blanc",
    blurb: "Thorns, the edge of the page, and Madame Blanc's tower. If Smudge reaches the edge, he can rub out the whole sketchbook.",
    levels: ["The Thorn Margin", "Edge of the Page", "Madame Blanc's Tower", "The Final Draft"],
    new: ["Everything at once", "The hardest combat in the book"],
    late: true,
  },
];
