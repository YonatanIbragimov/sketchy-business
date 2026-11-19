// Who's who. Sprites are the game's own art (scripts/build_art.py). Descriptions follow the game's STORY.md.
export type Role = "hero" | "villain" | "friend" | "errand" | "boss" | "minion";

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
  photo?: string;        // an in-game screenshot, for characters whose art isn't drawn yet
}

export const cast: Member[] = [
  {
    id: "noggin", name: "Noggin", sprite: "noggin_idle", alt: "noggin_run", role: "hero",
    tagline: "A doodle with an unreasonably large head.",
    about: "Drawn in the margin of a sketchbook by a bored Artist, who spent ages on the head and about three seconds on the body. Noggin says nothing and is quietly brave. His face does all the acting: over twenty hand-drawn expressions, and one very handsome one.",
    tips: "Headbutts until he gets the Last Pencil back, then swings it like a sword. Jump on minions' heads too: it's rude, but it works.",
  },
  {
    id: "penny", name: "Penny", sprite: "penny_idle", alt: "penny_run", role: "hero",
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
    id: "margin", name: "Old Margin", sprite: "margin", alt: "margin_walk", role: "friend", chapter: 11,
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
    id: "blanc", name: "Madame Blanc", sprite: "blanc", alt: "blanc_walk", role: "boss", chapter: 11,
    tagline: "Correction fluid.", about: "She doesn't erase mistakes, she covers them up. Smudge sends for her to fix \"the ink problem\" (that's Penny).",
  },

  // minions
  { id: "nub", name: "Nub", sprite: "nub", alt: "nub_walk", role: "minion", chapter: 1, tagline: "Eraser minion.", about: "Patrols back and forth. Takes 2 hits." },
  { id: "springclip", name: "Springclip", sprite: "springclip", role: "minion", chapter: 1, tagline: "Paper clip.", about: "Hops at you. 1 hit." },
  { id: "tack", name: "Tack", sprite: "tack", role: "minion", chapter: 1, tagline: "Drawing pin.", about: "Hangs under shelves and drops point-first when you pass underneath." },
  { id: "smudgeling", name: "Smudgeling", sprite: "smudgeling", role: "minion", chapter: 4, tagline: "A flying smudge.", about: "Shivers, then swoops. Move as soon as it shivers." },
  { id: "snips", name: "Snips", sprite: "snips", role: "minion", chapter: 6, tagline: "Scissors.", about: "Shakes, then charges. Jump when it shakes. 2 hits." },
  // ---- the errand folk (1.1.1): each one keeps a gate shut until you do them a favour
  {
    id: "furrow", name: "Farmer Furrow", sprite: "furrow", role: "errand", chapter: 1,
    tagline: "Straw hat, overalls, and a gate he can't open.",
    about: "Runs a field in Margin Meadows. Lately the furrows keep turning up rubbed clean overnight, and he'd like to know who's doing it.",
  },
  {
    id: "hatch", name: "Mrs Hatch", sprite: "hatch", role: "errand", chapter: 1,
    tagline: "An old lady with a shawl, a crook, and opinions.",
    about: "Has lived in the meadows longer than anyone. She remembers when the Artist drew something new every day.",
  },
  {
    id: "grist", name: "Miller Grist", sprite: "grist", role: "errand", chapter: 1,
    tagline: "A dusty miller with a flour sack.",
    about: "Knows his machinery, and knows the Great Sharpener's screws didn't loosen themselves.",
    spoiler: "He's the one who explains that the Last Pencil is the only pencil that can draw anything new, and that whoever loosened the Sharpener was planning to come back for it.",
  },
  {
    id: "steve", name: "Sketchy Steve", sprite: "steve", role: "errand", chapter: 2,
    tagline: "Half drawn, and hopeful anyway.",
    about: "An unfinished draft: one arm missing, one leg still a dotted line. Smudge locked him up because \"drafts are mistakes\". Dot disagrees: nobody's finished yet.",
  },
  {
    id: "coil", name: "Grandpa Coil", sprite: "coil", role: "errand", chapter: 3,
    tagline: "The oldest spring in the notebook's binding.",
    about: "A slightly rusty wire spring with little round spectacles and a curly wire beard. He watched Smudge cross the spine, and he has an old map of the far page.",
    spoiler: "The map has Smudge's castle on it, labelled \"formerly the Artist's eraser\".",
  },
  {
    id: "patch", name: "Patch", sprite: "patch", role: "errand", chapter: 3,
    tagline: "A paper hole-reinforcer with a cheeky grin.",
    about: "Holds the binding together, one hole at a time. Talks a lot for a doughnut.",
  },
  {
    id: "wobble", name: "Wobble", sprite: "wobble", role: "errand", chapter: 4,
    tagline: "The last pencil-drawn servant in a very tidy castle.",
    about: "Shy, faded at the edges, and holding a feather duster. Smudge makes him erase himself a little \"neater\" every morning.",
    spoiler: "He used to have a nose.",
  },
  {
    id: "turnkey", name: "The Turnkey", sprite: "turnkey", role: "errand", chapter: 4,
    tagline: "A big iron key with a big moustache. Recently sacked.",
    about: "Ran Smudge's dungeons until he was replaced by something shinier. He knows his way round the keep, and he's not fond of his old boss.",
    spoiler: "The torn portrait you help find shows Smudge brand new, on the Artist's desk: he was the Artist's own eraser, until he was replaced too.",
  },
  {
    id: "memo", name: "Memo", sprite: "memo", role: "errand", chapter: 5,
    tagline: "The sky's postmistress.",
    about: "A yellow sticky note with a curled-corner bonnet and a satchel full of letters. Some of them are cries for help from Inkwell Village.",
    spoiler: "Smudge's notes in purple ink, pinned to her board, spell out his whole plan.",
  },
  {
    id: "glider", name: "Flt. Lt. Glider", sprite: "glider", role: "errand", chapter: 5,
    tagline: "A paper-plane pilot with goggles and a scarf.",
    about: "Flies for Captain Dogear, and is very particular about the Captain's orders.",
  },
  {
    id: "nib", name: "Nib", sprite: "nib", role: "errand", chapter: 6,
    tagline: "The printer's apprentice.",
    about: "A young fountain-pen nib with an inky cap and apron, keeping the presses going while the village runs dry.",
  },
  {
    id: "blotter", name: "Mrs Blotter", sprite: "blotter", role: "errand", chapter: 6,
    tagline: "Inkwell Village's lamplighter.",
    about: "A motherly pink ink-blotter who keeps the lamps lit. With the ink running out, that's getting hard.",
  },
  {
    id: "stub", name: "Stub", sprite: "stub", role: "errand", chapter: 7,
    tagline: "A retired crayon miner.",
    about: "Worn down to a stub, with a miner's helmet and a big grey moustache. He knows every tunnel in Pencil Case Canyon.",
    spoiler: "The pencil case is Smudge's barracks. Stub sends a spare sharpener blade ahead to Foreman Gearsley.",
  },
  {
    id: "fuzz", name: "Fuzz", sprite: "fuzz", role: "errand", chapter: 7,
    tagline: "A very excitable pipe cleaner.",
    about: "Bent into a little figure and never still. Fuzz has noticed the Artist stopped colouring things in.",
  },
  {
    id: "sprocket", name: "Sprocket", sprite: "sprocket", role: "errand", chapter: 8,
    tagline: "A young cog in a too-big cap.",
    about: "Works at the Sharpening Works and wants to do everything at once.",
  },
  {
    id: "valve", name: "Old Valve", sprite: "valve", role: "errand", chapter: 8,
    tagline: "The factory's oldest steam valve.",
    about: "Has seen every pencil the Works ever sharpened.",
    spoiler: "He asks the question nobody else does: once the pencil's sharp, who gets it?",
  },
  {
    id: "lump", name: "Lump", sprite: "lump", role: "errand", chapter: 9,
    tagline: "A nervous sugar cube on the Artist's desk.",
    about: "Lives off the page, next to the coffee, and is worried about everything. Mostly the coffee.",
    spoiler: "From the desk you can see the Artist: sitting over the book every evening, not drawing. The real pencil went missing into the book. The last thing the Artist drew was Noggin.",
  },
  {
    id: "dunk", name: "Dunk", sprite: "dunk", role: "errand", chapter: 9,
    tagline: "A biscuit sailor, soggy at the bottom.",
    about: "A digestive biscuit with a sailor's cap and a pipe, who's been dunked in the tea one time too many.",
  },
  {
    id: "quibble", name: "Quibble", sprite: "quibble", role: "errand", chapter: 11,
    tagline: "A note scribbled in the margin.",
    about: "A squiggle-and-asterisk with something to say about everything, mostly corrections.",
    spoiler: "Under white-out nothing's ever really gone, and a crumb of Smudge shows he's been erasing himself as he goes: an eraser afraid of being thrown away.",
  },
  {
    id: "fray", name: "Fray", sprite: "fray", role: "errand", chapter: 11,
    tagline: "The very edge of the page.",
    about: "A strip of torn paper edge with streaks of white-out on her. Tired, threadbare, and brave.",
  },
  // ---- the Crayon Kiln (1.1.3)
  {
    id: "wick", name: "Wick", sprite: "", photo: "/shots/boss_wick.webp", role: "boss", chapter: 10,
    tagline: "The first protector. A candle-smoke wraith.",
    about: "The Artist's old desk candle, who kept them company through every late night of drawing. Blown out the night the pencil vanished, and relit by somebody pink. Now he guards the graphite core, deep in the Crayon Kiln.",
    tips: "Strategy in the boss guide.",
  },
  {
    id: "ember", name: "Ember sprite", sprite: "", photo: "/shots/ember.webp", role: "minion", chapter: 10,
    tagline: "A little flying flame.",
    about: "Bobs about the Kiln, flares up bright, then dashes at you. Two hits.",
  },
];

export const byId = Object.fromEntries(cast.map((m) => [m.id, m]));
