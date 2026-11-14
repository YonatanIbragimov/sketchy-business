// Who's who. Sprites are the game's own art (scripts/build_art.py). Descriptions follow the game's STORY.md.
export type Role = "hero" | "villain" | "friend" | "boss" | "minion";

export interface Member {
  id: string;
  name: string;
  sprite: string;        // key in sprites.json
  alt?: string;          // second animation shown on hover
  role: Role;
  chapter?: number;
  tagline: string;
  about: string;
  tips?: string;
  spoiler?: string;      // the bit that gives the story away, hidden by default
}

export const cast: Member[] = [
  {
    id: "noggin", name: "Noggin", sprite: "noggin_idle", alt: "noggin_run", role: "hero",
    tagline: "A doodle with an unreasonably large head.",
    about: "Drawn in the margin of a sketchbook by a bored Artist, who spent ages on the head and about three seconds on the body. Noggin says nothing and is quietly brave. His googly eyes do all the acting.",
    tips: "Headbutts until he gets the Last Pencil back, then swings it like a sword. Jump on minions' heads too: it's rude, but it works.",
  },
  {
    id: "penny", name: "Penny", sprite: "penny_still", role: "hero",
    tagline: "Player 2. A ballpoint pen, and she never stops talking.",
    about: "A ballpoint-pen girl from across the gutter (the fold down the middle of the book). Where Noggin is silent, Penny is bossy, sure of herself and a planner. Ink can't be erased: she's the one thing Smudge has never managed to rub out (\"He rubbed at my arm for an hour once. I just sat there. He cried a bit\").",
    tips: "Plug in a second controller and pick Players: 2. Stand on each other's heads, then jump off one for the team jump.",
    spoiler: "A mistake in pen is forever, so she's never allowed herself one. Old Margin tells her that's what makes it hers, and after Madame Blanc she keeps the white blob on her sleeve.",
  },
  {
    id: "smudge", name: "Lord Smudge", sprite: "smudge", alt: "smudge_throw", role: "villain",
    tagline: "\"Rub-a-dub-DUB!\"",
    about: "A pompous pink eraser with a monocle, a tiny gold crown, a magnificent moustache, an ermine-trimmed cape and a gold-topped cane. Leader of the Eraser Aristocracy. He believes a blank page is a perfect page, so he stole the Last Pencil, the only thing in the sketchbook that can draw something new. He never walks anywhere: he floats about on a little cloud.",
    tips: "Catchphrases include \"Toodle-oo!\" and \"Tidy, tidy, TIDY!\"",
    spoiler: "He was once the Artist's own eraser, replaced by a shiny new one and dropped in the margin. He's wanted the book perfect ever since, so nobody could replace him again.",
  },
  {
    id: "narrator", name: "The Narrator", sprite: "", role: "villain",
    tagline: "\"That's going to leave a mark. Several, actually.\"",
    about: "Sarcastic, theatrical and unreliable. He mocks Noggin's every fall, jump and life choice. He may or may not be secretly rooting for him.",
  },
  {
    id: "dot", name: "Dot", sprite: "dot", alt: "dot_walk", role: "friend", chapter: 1,
    tagline: "A full stop who ran away from the end of a sentence",
    about: "She didn't want anything to end, so her sentences never do. She's the only one who can hear the Narrator, which he finds deeply unprofessional. Noggin saves her in chapter 1 and she tags along",
  },
  {
    id: "mayor", name: "Mayor Quill", sprite: "mayor", alt: "mayor_walk", role: "friend", chapter: 6,
    tagline: "Mayor of Inkwell Village, and a feather pen.",
    about: "His village is running out of ink, and he has opinions about it. Help him out and he'll point you to the Sharpening Works.",
  },
  {
    id: "gearsley", name: "Foreman Gearsley", sprite: "gearsley", alt: "gearsley_walk", role: "friend", chapter: 8,
    tagline: "The last worker at the Sharpening Works.",
    about: "Everyone else has gone. Half the machines need two people to run, so he's very glad to see you.",
  },
  {
    id: "margin", name: "Old Margin", sprite: "margin", alt: "margin_walk", role: "friend", chapter: 10,
    tagline: "The first doodle ever drawn in the book.",
    about: "Lives out in the Forgotten Margins. Knows things about artists and sketchbooks that nobody else remembers.",
    spoiler: "He tells Noggin that artists never leave a sketchbook, they just turn the page, and that the pencil is for drawing what happens next, not a better body.",
  },

  // mini-bosses, in chapter order
  {
    id: "pink", name: "Big Pink", sprite: "pink", alt: "pink_walk", role: "boss", chapter: 1,
    tagline: "Smudge's bouncer.", about: "A huge eraser rubbing out Margin Village, Dot's house included.",
    tips: "He paws the ground, then charges. Get out of the way so he runs into the gate, then jump on him while he's stuck.",
  },
  {
    id: "scrunch", name: "Scrunch", sprite: "scrunch", alt: "scrunch_walk", role: "boss", chapter: 2,
    tagline: "A crumpled-up early draft of Noggin.", about: "\"The head came out too small.\" Smudge promised him he'd erase all the good drawings.",
    tips: "He rolls and leaps, then lands flat for a moment. Stomp the flat sheet.",
    spoiler: "Dot tells him the Artist wasn't throwing him away, just practising. When Smudge comes back to rub out the whole field, Scrunch is the one who tells Noggin to run.",
  },
  {
    id: "binderclip", name: "The Binder Clip", sprite: "binderclip", role: "boss", chapter: 3,
    tagline: "Clamps the crossing at the spine shut.", about: "Stands between you and the far half of the book. Bites.",
  },
  {
    id: "reginald", name: "Sir Reginald Rule", sprite: "reginald", alt: "reginald_walk", role: "boss", chapter: 4,
    tagline: "Captain of the guard. A ruler, and very straight about it.", about: "Guards the throne room of Clean Slate Keep with a lance and a great deal of dignity.",
    tips: "He telegraphs every lance thrust. Dodge (roll with no direction held) and the hit goes straight through you.",
    spoiler: "After the fight he tells you why Smudge is the way he is.",
  },
  {
    id: "dogear", name: "Captain Dogear", sprite: "dogear", role: "boss", chapter: 5,
    tagline: "A paper-plane ace.", about: "Rules the air over Sticky Note Sky and does not like company up there.",
  },
  {
    id: "blotto", name: "Blotto", sprite: "blotto", alt: "blotto_walk", role: "boss", chapter: 6,
    tagline: "\"Blorp.\"", about: "The spill from the Great Inkwell, drinking the village dry. In co-op it really wants to drink Penny.",
  },
  {
    id: "protractor", name: "The Protractor", sprite: "protractor", role: "boss", chapter: 7,
    tagline: "Guards the big zip out of the pencil case.", about: "Precise to the degree.",
  },
  {
    id: "compass", name: "The Compass", sprite: "compass", alt: "compass_walk", role: "boss", chapter: 8,
    tagline: "Took over the factory floor.", about: "Spins, jumps and draws perfect circles around you. The Sharpening Works answers to it now.",
  },
  {
    id: "teabag", name: "The Tea Bag", sprite: "teabag", role: "boss", chapter: 9,
    tagline: "Swings from the desk lamp.", about: "Steeped in bad intentions.",
  },
  {
    id: "blanc", name: "Madame Blanc", sprite: "blanc", alt: "blanc_walk", role: "boss", chapter: 10,
    tagline: "Correction fluid.", about: "She doesn't erase mistakes, she covers them up. Smudge sends for her to fix \"the ink problem\" (that's Penny).",
  },

  // minions
  { id: "nub", name: "Nub", sprite: "nub", alt: "nub_walk", role: "minion", chapter: 1, tagline: "Eraser minion.", about: "Patrols back and forth. Takes 2 hits." },
  { id: "springclip", name: "Springclip", sprite: "springclip", role: "minion", chapter: 1, tagline: "Paper clip.", about: "Hops at you. 1 hit." },
  { id: "tack", name: "Tack", sprite: "tack", role: "minion", chapter: 1, tagline: "Drawing pin.", about: "Hangs under shelves and drops point-first when you pass underneath." },
  { id: "smudgeling", name: "Smudgeling", sprite: "smudgeling", role: "minion", chapter: 4, tagline: "A flying smudge.", about: "Shivers, then swoops. Move as soon as it shivers." },
  { id: "snips", name: "Snips", sprite: "snips", role: "minion", chapter: 6, tagline: "Scissors.", about: "Shakes, then charges. Jump when it shakes. 2 hits." },
];

export const byId = Object.fromEntries(cast.map((m) => [m.id, m]));
