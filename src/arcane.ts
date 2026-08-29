export const RUNES = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟᛝᚣᚫᛠ";

export const sorcerer = {
  name: "Moe Kyaw Aung",
  nameMM: "မိုးကျော်အောင်",
  title: "Archmage of the Android Order",
  epithet: "Binder of Modules · Keeper of the Green Sigil",
  realm: "Tachileik 🇲🇲 ↔ Bangkok 🇹🇭 · Ley-line GMT+7",
  email: "moekyawaung@programmer.net",
  phones: ["+95 9 889 000 889", "+959 666 000 050"],
  github: "https://github.com/Dev-moe-kyawaung",
  gravatar: "https://gravatar.com/moekyawaung2026",
  avatar: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  creed: "Code is the last living magic. Cast it with care.",
  binding: "MoekyawTranslator — the Tongue-Weaving Spell",
};

export const chapters = [
  { id: "sanctum", n: "I", label: "Sanctum", rune: "ᚨ" },
  { id: "familiar", n: "II", label: "Familiar", rune: "ᚠ" },
  { id: "schools", n: "III", label: "Schools", rune: "ᛊ" },
  { id: "grimoire", n: "IV", label: "Grimoire", rune: "ᚷ" },
  { id: "incantations", n: "V", label: "Incantations", rune: "ᛁ" },
  { id: "rituals", n: "VI", label: "Rituals", rune: "ᚱ" },
  { id: "wards", n: "VII", label: "Wards", rune: "ᚹ" },
  { id: "scrying", n: "VIII", label: "Scrying", rune: "ᛇ" },
  { id: "ages", n: "IX", label: "Ages", rune: "ᚦ" },
  { id: "covenant", n: "X", label: "Covenant", rune: "ᛏ" },
];

export const powerStats = [
  { n: "10M+", l: "Souls touched", rune: "ᛗ" },
  { n: "43", l: "Spells bound", rune: "ᚷ" },
  { n: "82+", l: "Sigils earned", rune: "ᛊ" },
  { n: "99.98%", l: "Wards holding", rune: "ᚹ" },
];

/* ---------- Schools of Magic = architecture disciplines ---------- */
export const schools = [
  {
    rune: "ᛗ",
    name: "Modularization",
    school: "School of Division",
    lore: "Cleaving one monolith into two-and-forty lesser bodies, each able to live, compile and die alone.",
    effects: [
      { k: "Modules", v: "42" },
      { k: "Build time", v: "−68%" },
      { k: "Incremental", v: "< 6s" },
    ],
    mana: 92,
    color: "#7b5cff",
  },
  {
    rune: "ᚨ",
    name: "Clean Architecture",
    school: "School of Order",
    lore: "Three sacred rings — domain, data, presentation. No arrow may point inward against the law.",
    effects: [
      { k: "Layers", v: "3" },
      { k: "Coverage", v: "92%" },
      { k: "Cyclomatic", v: "≤ 6" },
    ],
    mana: 88,
    color: "#35e0d8",
  },
  {
    rune: "ᛞ",
    name: "Dependency Injection",
    school: "School of Summoning",
    lore: "Objects are not built — they are called. Hilt binds the graph at compile-time; nothing is conjured twice.",
    effects: [
      { k: "Binding", v: "Hilt/Koin" },
      { k: "Scopes", v: "Feature" },
      { k: "Startup", v: "−140ms" },
    ],
    mana: 84,
    color: "#a98bff",
  },
  {
    rune: "ᚱ",
    name: "Continuous Ritual",
    school: "School of Repetition",
    lore: "Seven rites per commit. The pipeline judges; only the worthy artifact reaches mortal hands.",
    effects: [
      { k: "Stages", v: "7" },
      { k: "Duration", v: "10m 55s" },
      { k: "Rollback", v: "0" },
    ],
    mana: 90,
    color: "#f0b64a",
  },
  {
    rune: "ᛏ",
    name: "Divination",
    school: "School of Testing",
    lore: "Five thousand four hundred prophecies, each foretelling a failure before a user ever meets it.",
    effects: [
      { k: "Unit", v: "3,200+" },
      { k: "UI", v: "480+" },
      { k: "Goldens", v: "1,100" },
    ],
    mana: 86,
    color: "#35e0d8",
  },
  {
    rune: "ᚹ",
    name: "Warding",
    school: "School of Protection",
    lore: "Six concentric wards: transport, rest, identity, bytecode, runtime, and law. MASVS L2 sealed.",
    effects: [
      { k: "MASVS", v: "L2" },
      { k: "Pinning", v: "TLS 1.3" },
      { k: "Obfuscation", v: "R8" },
    ],
    mana: 94,
    color: "#ff4d6d",
  },
  {
    rune: "ᚺ",
    name: "Haste",
    school: "School of Performance",
    lore: "Baseline profiles laid like salt lines. The app wakes in six hundred and twenty milliseconds.",
    effects: [
      { k: "Cold start", v: "620ms" },
      { k: "ANR", v: "0.02%" },
      { k: "APK", v: "−42%" },
    ],
    mana: 89,
    color: "#7b5cff",
  },
  {
    rune: "ᛇ",
    name: "Farsight",
    school: "School of Observability",
    lore: "Two hundred traces watch from the aether. Crashlytics whispers before the user complains.",
    effects: [
      { k: "Traces", v: "220+" },
      { k: "Crash-free", v: "99.98%" },
      { k: "Vigil", v: "24/7" },
    ],
    mana: 87,
    color: "#f0b64a",
  },
];

/* ---------- Spellbooks = projects ---------- */
export type Diagram = "flow" | "orbit" | "layers" | "mesh";

export const spellbooks = [
  {
    id: 1, sigil: "ᛊ", name: "Social Dashboard", tome: "Tome of Many Voices",
    school: "Divination", tier: "Master", mana: 92, souls: "1.2M",
    lore: "A scrying board that gathers a thousand distant voices into one still surface, refreshed by realtime streams.",
    incantation: ["Kotlin", "Compose", "Firebase", "Flow"],
    diagram: "flow" as Diagram,
    repo: "https://github.com/moekyawaung-tech/social-dashboard",
    nodes: ["Ingest", "Normalize", "Aggregate", "Surface"],
  },
  {
    id: 2, sigil: "ᛈ", name: "PWA App", tome: "Codex of the Offline Realm",
    school: "Abjuration", tier: "Adept", mana: 74, souls: "480K",
    lore: "A spell that persists when the ley-lines fail. Service workers keep the flame while the network sleeps.",
    incantation: ["Vue", "Workbox", "TypeScript"],
    diagram: "orbit" as Diagram,
    repo: "https://github.com/moekyawaung-tech/pwa-app",
    nodes: ["Shell", "Cache", "Sync", "Push"],
  },
  {
    id: 3, sigil: "ᚷ", name: "Game Collection", tome: "Grimoire of Lesser Worlds",
    school: "Illusion", tier: "Master", mana: 88, souls: "2.1M",
    lore: "Nine small worlds bound in a single binding, each with its own laws, its own leaderboard, its own dead.",
    incantation: ["Kotlin", "Compose", "Room"],
    diagram: "mesh" as Diagram,
    repo: "https://github.com/moekyawaung-tech/game-collection",
    nodes: ["Engine", "Worlds", "Scores", "Save"],
  },
  {
    id: 4, sigil: "ᛖ", name: "POS Ultimate Pro Max", tome: "Ledger of the Merchant King",
    school: "Conjuration", tier: "Archmage", mana: 97, souls: "1,200 stores",
    lore: "The flagship working. Two-and-forty modules, offline-first, terminals whispering to each other over a local mesh.",
    incantation: ["Kotlin", "Hilt", "Room", "WorkManager"],
    diagram: "layers" as Diagram,
    repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    nodes: [":app", ":feature", ":domain", ":data", ":core"],
  },
  {
    id: 5, sigil: "ᛇ", name: "Video Player", tome: "Mirror of Moving Light",
    school: "Illusion", tier: "Master", mana: 85, souls: "820K",
    lore: "Adaptive streams pulled from the void and rendered smooth, with subtitles conjured in three tongues.",
    incantation: ["ExoPlayer", "HLS", "Media3"],
    diagram: "flow" as Diagram,
    repo: "https://github.com/moekyawaung-tech/video-player",
    nodes: ["Manifest", "Buffer", "Decode", "Render"],
  },
  {
    id: 6, sigil: "ᚹ", name: "Weather", tome: "Almanac of Sky and Storm",
    school: "Divination", tier: "Adept", mana: 71, souls: "690K",
    lore: "Reads the humours of the atmosphere and warns the village before the rain arrives.",
    incantation: ["Compose", "Retrofit", "WorkManager"],
    diagram: "orbit" as Diagram,
    repo: "https://github.com/moekyawaung-tech/Weather-app",
    nodes: ["Sense", "Forecast", "Alert", "Widget"],
  },
  {
    id: 7, sigil: "ᛏ", name: "Javascript Todo", tome: "Scroll of Small Obligations",
    school: "Enchantment", tier: "Journeyman", mana: 58, souls: "1.4M",
    lore: "The humblest spell in the codex, and the most cast. Focus timers bind the wandering mind.",
    incantation: ["JavaScript", "IndexedDB"],
    diagram: "mesh" as Diagram,
    repo: "https://github.com/moekyawaung-tech/javascript-todo",
    nodes: ["Capture", "Order", "Focus", "Archive"],
  },
  {
    id: 8, sigil: "ᛚ", name: "Lens Lite", tome: "Eye of the Second Sight",
    school: "Transmutation", tier: "Master", mana: 90, souls: "38K MAU",
    lore: "Turns light into letters. On-device models read the world without ever calling home.",
    incantation: ["TFLite", "CameraX", "Kotlin"],
    diagram: "layers" as Diagram,
    repo: "https://github.com/moekyawaung-tech/Lens-lite",
    nodes: ["Capture", "OCR", "Classify", "Store"],
  },
  {
    id: 9, sigil: "ᚻ", name: "Hospital Lists", tome: "Register of Healing Houses",
    school: "Abjuration", tier: "Adept", mana: 69, souls: "220K",
    lore: "In an emergency the spell must not fail. Cached, signed, and readable with no signal at all.",
    incantation: ["Kotlin", "Room", "Maps"],
    diagram: "flow" as Diagram,
    repo: "https://github.com/Moekyawaung-cyber/Hospital-Lists",
    nodes: ["Index", "Locate", "Route", "Call"],
  },
  {
    id: 10, sigil: "ᛞ", name: "Daily Planner", tome: "Book of Days",
    school: "Enchantment", tier: "Master", mana: 78, souls: "410K",
    lore: "A habit engine disguised as a calendar. Streaks are the true enchantment.",
    incantation: ["Compose", "Room", "Alarm"],
    diagram: "orbit" as Diagram,
    repo: "https://github.com/moekyawaung-tech/Daily-planner-app",
    nodes: ["Plan", "Remind", "Streak", "Reflect"],
  },
  {
    id: 11, sigil: "ᚦ", name: "Thailand Travel", tome: "Atlas of the Southern Road",
    school: "Divination", tier: "Adept", mana: 66, souls: "180K",
    lore: "A phrasebook and a map, bound together so no traveller is ever mute or lost.",
    incantation: ["Kotlin", "Maps", "i18n"],
    diagram: "mesh" as Diagram,
    repo: "https://github.com/moekyawaung-tech/thailand-travel",
    nodes: ["Plan", "Phrase", "Navigate", "Save"],
  },
  {
    id: 12, sigil: "ᛟ", name: "MoekyawTranslator", tome: "The Tongue-Weaving Spell",
    school: "Transmutation", tier: "Forbidden", mana: 99, souls: "12K waitlist",
    lore: "The working now in progress. Burmese into English and back, half by cloud oracle, half by on-device rune.",
    incantation: ["Claude API", "TFLite", "Compose"],
    diagram: "layers" as Diagram,
    repo: "https://github.com/Dev-moe-kyawaung/",
    nodes: ["Listen", "Route", "Translate", "Speak"],
  },
];

/* ---------- Incantations = tech stack ---------- */
export const incantations = {
  "Primary Tongue": [
    { n: "Kotlin", c: "#7b5cff", lvl: 97 },
    { n: "Jetpack Compose", c: "#35e0d8", lvl: 95 },
    { n: "Coroutines", c: "#a98bff", lvl: 93 },
    { n: "Kotlin Flow", c: "#a98bff", lvl: 92 },
  ],
  "Structural Runes": [
    { n: "Clean Architecture", c: "#f0b64a", lvl: 96 },
    { n: "MVI / MVVM", c: "#f0b64a", lvl: 94 },
    { n: "Multi-module", c: "#7b5cff", lvl: 95 },
    { n: "Hilt / Koin", c: "#35e0d8", lvl: 91 },
  ],
  "Aether & Storage": [
    { n: "Firebase", c: "#f0b64a", lvl: 92 },
    { n: "Retrofit", c: "#35e0d8", lvl: 90 },
    { n: "Room", c: "#7b5cff", lvl: 91 },
    { n: "Ktor", c: "#a98bff", lvl: 82 },
    { n: "Python", c: "#35e0d8", lvl: 78 },
  ],
  "Forbidden Arts": [
    { n: "Ethical Hacking", c: "#ff4d6d", lvl: 84 },
    { n: "Kali Linux", c: "#ff4d6d", lvl: 80 },
    { n: "OWASP MASVS", c: "#f0b64a", lvl: 88 },
    { n: "Claude API", c: "#a98bff", lvl: 86 },
    { n: "TFLite", c: "#35e0d8", lvl: 83 },
  ],
};

/* ---------- Rituals = CI/CD ---------- */
export const ritual = [
  { r: "ᚨ", n: "Purification", t: "Detekt · ktlint · Android Lint", dur: "45s" },
  { r: "ᛒ", n: "Forging", t: "assembleDebug · configuration cache", dur: "2m 10s" },
  { r: "ᛏ", n: "Divination", t: "3,200 JUnit prophecies · MockK", dur: "1m 40s" },
  { r: "ᛗ", n: "Mirror Rite", t: "Paparazzi · 1,100 goldens", dur: "1m 05s" },
  { r: "ᛖ", n: "Trial by Device", t: "Espresso · Compose · API 26/30/34", dur: "3m 20s" },
  { r: "ᚷ", n: "Sealing", t: "R8 · shrinkResources · Play Signing", dur: "1m 15s" },
  { r: "ᛟ", n: "Manifestation", t: "Play Console staged rollout", dur: "40s" },
];

/* ---------- Wards = security ---------- */
export const wards = [
  { r: "ᚨ", t: "Ward of Passage", d: "TLS 1.3 · SSL pinning · Certificate Transparency" },
  { r: "ᛒ", t: "Ward of Stillness", d: "EncryptedSharedPrefs · Keystore · SQLCipher" },
  { r: "ᛖ", t: "Ward of Name", d: "OAuth2 · Biometrics · session rotation" },
  { r: "ᚷ", t: "Ward of Veiling", d: "R8 · obfuscation · anti-tamper" },
  { r: "ᛏ", t: "Ward of Vigilance", d: "Root & emulator detection · Frida guards" },
  { r: "ᛟ", t: "Ward of Law", d: "OWASP MASVS L2 · GDPR · Play data safety" },
];

export const prophecies = [
  { l: "Unit prophecies", v: "3,200+", pct: 95 },
  { l: "Integration rites", v: "620+", pct: 82 },
  { l: "Interface trials", v: "480+", pct: 74 },
  { l: "Mirror goldens", v: "1,100+", pct: 88 },
  { l: "Full pilgrimages", v: "60+", pct: 66 },
];

/* ---------- Ages = timeline ---------- */
export const ages = [
  { year: "2019", age: "Age of Kindling", d: "First sigil drawn in Java. A single app escapes into the world." },
  { year: "2020", age: "Age of the Purple Flame", d: "Kotlin adopted as mother tongue. Three workings rewritten." },
  { year: "2021", age: "Age of Composition", d: "Declarative magic. The old XML idols are put down." },
  { year: "2022", age: "Age of Rings", d: "Clean Architecture sealed. Hilt binds the summoning graph." },
  { year: "2023", age: "Age of Rites", d: "The seven-stage ritual is written. Nothing ships unjudged." },
  { year: "2024", age: "Age of the Merchant King", d: "POS Ultimate rises. Twelve hundred houses adopt the ledger." },
  { year: "2025", age: "Age of the Second Sight", d: "On-device oracles. TFLite and Claude enter the codex." },
  { year: "2026", age: "Age of Tongues", d: "The Tongue-Weaving Spell is being bound as you read this." },
];

/* ---------- Scrying pool media ---------- */
export const visions = [
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779052711/Javier_Black-Dark-Ring.mp4",
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031596/Javier_Pardina_10_wttux4.mp4",
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779052704/Javier_Pardina_10_ay7iai.mp4",
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779052708/AUDI_-_Javier_Pardina_1_gavyon.mp4",
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779052732/Javier_Pardina_2_l1mtud.mp4",
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031657/COACH_-_Javier_Pardina_gdjsjg.mp4",
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031569/Javier_Pardina_8_r1lgpj.mp4",
  "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031566/Javier_Pardina_11_r5y8no.mp4",
];

export const relics = [
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795675037_heh9xk.png",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1779052645/2153-fireworks-composer_gm3e0h.jpg",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763536/preview_ls5ptn.webp",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795801/MKA_22_felevo.webp",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1779031816/Content_65_oayzj3.jpg",
  "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image-1_f6zlmk.jpg",
];

/* ---------- Guild links ---------- */
export const guilds = [
  { name: "GitHub", url: "https://github.com/Dev-moe-kyawaung", rune: "ᚷ" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1", rune: "ᛚ" },
  { name: "Gravatar", url: "https://gravatar.com/moekyawaung2026", rune: "ᚨ" },
  { name: "Bluesky", url: "https://bsky.app/profile/moekyawaung96.bsky.social", rune: "ᛒ" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG", rune: "ᚣ" },
  { name: "Vimeo", url: "https://vimeo.com/user252414232", rune: "ᚹ" },
  { name: "Tumblr", url: "https://www.tumblr.com/moekyawaung", rune: "ᛏ" },
  { name: "Flickr", url: "https://www.flickr.com/people/204037451@N06", rune: "ᚠ" },
  { name: "Slack", url: "https://moekyawaung.slack.com/", rune: "ᛊ" },
  { name: "Strikingly", url: "http://moekyawaung2026.strikingly.com", rune: "ᛋ" },
  { name: "PayPal", url: "https://www.paypal.com/paypalme/my/profile", rune: "ᛈ" },
  { name: "WordPress", url: "https://moekyawaung.wordpress.com/", rune: "ᚹ" },
];

export const outposts = [
  "https://moekyawaung-tech.github.io/", "https://moekyawaung-developer.github.io/",
  "https://moekyawaung-cyber.github.io/", "https://moekyawaung-bangkok.github.io/",
  "https://moekyawaung-senior.github.io/", "https://moekyawaung-google.github.io/",
  "https://moekyawaung-microsoft.github.io/", "https://moekyawaung-linux.github.io/",
  "https://moekyawaung-hack.github.io/", "https://moekyawaung-web.github.io/",
  "https://moekyawaung-designer.github.io/", "https://moekyawaung2026.github.io/",
  "https://moekyaw-developer.github.io/", "https://moekyawaung-edu.github.io/",
  "https://moekyawaung-creator.github.io/", "https://moekyawaung.github.io/",
];

export const scrolls = [
  "https://moekyawaung.lovable.app", "https://the-cv-palette.lovable.app",
  "https://moekyawaung-dev.lovable.app", "https://dev-moekyawaung.lovable.app",
  "https://happy-cv-creator.lovable.app", "https://moekyawaungmybio.lovable.app/",
  "https://joy-codify-life.lovable.app/", "https://app-skill-gallery.lovable.app",
  "https://moekyawaung-myanmar.lovable.app", "https://color-code-chronicles.lovable.app",
  "https://profile-persuasion-hub.lovable.app", "https://spark-coach-create.lovable.app",
];

/* ---------- Familiar knowledge ---------- */
export const familiarIntro =
  "I am Nyx, bound sprite of this codex. I have read every line my master has written. Ask, and I shall explain the magic.";

export const familiarTopics = [
  {
    key: ["module", "modular", "gradle", "build"],
    q: "How is the codebase divided?",
    a: "Two-and-forty Gradle modules, cleaved by feature and by layer. Dependencies flow downward only — :app → :feature → :domain → :data → :core. Konsist rites fail any cyclic edge in CI. The result: build time fell by sixty-eight percent, and an incremental compile now takes under six seconds.",
  },
  {
    key: ["clean", "architecture", "mvvm", "mvi", "layer"],
    q: "Explain the Clean Architecture ring.",
    a: "Three rings. The domain ring is pure Kotlin — entities and use-cases, no Android import may cross into it. The data ring implements the repository interfaces the domain declares. The presentation ring holds immutable state and reduces intents, MVI-fashion. Because the arrows only point inward, the domain can be tested with no emulator at all.",
  },
  {
    key: ["di", "hilt", "koin", "inject", "summon"],
    q: "How are dependencies summoned?",
    a: "Hilt binds the application graph at compile time, so a missing dependency is a build error rather than a midnight crash. Feature modules use scoped components; ViewModels are summoned per navigation entry. No runtime reflection, and app startup dropped by one hundred forty milliseconds.",
  },
  {
    key: ["test", "coverage", "junit", "espresso", "prophec"],
    q: "What is the testing strategy?",
    a: "A pyramid of five thousand four hundred prophecies. Three thousand two hundred unit tests with JUnit, MockK and Turbine. Six hundred twenty integration rites on Robolectric. Four hundred eighty interface trials in Espresso and Compose. Eleven hundred Paparazzi mirror-goldens. Sixty full Maestro pilgrimages on real devices. Ninety-two percent coverage overall.",
  },
  {
    key: ["ci", "cd", "pipeline", "ritual", "deploy", "actions"],
    q: "Describe the deployment ritual.",
    a: "Seven stages on GitHub Actions: purification by lint, forging by assemble, divination by unit test, the mirror rite of screenshots, trial by device across API twenty-six, thirty and thirty-four, sealing with R8, then manifestation as a staged Play Console rollout. Ten minutes fifty-five seconds end to end. Zero rollbacks to date.",
  },
  {
    key: ["security", "ward", "owasp", "encrypt", "safe"],
    q: "How is the app warded?",
    a: "Six concentric wards. TLS one-point-three with certificate pinning at the boundary. EncryptedSharedPreferences and Keystore for data at rest. OAuth2 with biometric gating for identity. R8 obfuscation over the bytecode. Root, emulator and Frida detection at runtime. And OWASP MASVS Level Two compliance as the outer law.",
  },
  {
    key: ["performance", "speed", "fast", "startup", "cold"],
    q: "How fast are the workings?",
    a: "Baseline profiles are laid before release, so the hot paths are precompiled. Cold start sits at six hundred twenty milliseconds at the ninetieth percentile. ANR rate is two hundredths of a percent. Paging three and Flow keep lists lazy, and WorkManager carries the offline sync so the main thread is never burdened.",
  },
  {
    key: ["kotlin", "compose", "language", "tongue"],
    q: "Why Kotlin and Compose?",
    a: "Kotlin because null-safety and coroutines remove two entire classes of bug from existence. Compose because declarative state is honest — the screen is a function of the state, nothing more. My master has written Kotlin as his primary tongue since the Age of the Purple Flame, in two thousand and twenty.",
  },
  {
    key: ["pos", "merchant", "flagship", "ledger"],
    q: "Tell me about the flagship working.",
    a: "The Ledger of the Merchant King — POS Ultimate Pro Max. Forty-two modules, offline-first with Room as the single source of truth, terminals gossiping over a local mesh, and the cloud treated as an eventually-consistent replica rather than a dependency. Twelve hundred merchant houses run it. Crash-free rate: ninety-nine point nine eight percent.",
  },
  {
    key: ["ai", "ml", "claude", "tflite", "translat"],
    q: "What of the AI arts?",
    a: "The Tongue-Weaving Spell — MoekyawTranslator — routes between a cloud oracle, the Claude API, and an on-device TFLite rune when the ley-lines fail. Lens Lite performs OCR entirely on device, so no image ever leaves the phone. Twelve thousand souls wait on the list.",
  },
  {
    key: ["hire", "contact", "available", "work", "cost"],
    q: "Can I summon the archmage?",
    a: "He is open to two engagements in the first quarter of this year — architecture audits, modularization migrations, MVP conjuring, or a founding-engineer covenant. Write to moekyawaung@programmer.net. He answers within a single day's turning.",
  },
  {
    key: ["who", "master", "about", "moe", "you"],
    q: "Who is your master?",
    a: "Moe Kyaw Aung — မိုးကျော်အောင် — Archmage of the Android Order, working between Tachileik and Bangkok. Eight years of practice, forty-three bound spells, eighty-two sigils earned, and roughly ten million souls who have touched his work without ever knowing his name.",
  },
];
