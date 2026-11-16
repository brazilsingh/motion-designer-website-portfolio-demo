/* =====================================================================
   DEMO PERSONAS. Open the site with ?demo=<key> to see one, for example
   index.html?demo=3d-artist. They are fictional people.
   The sample videos are Blender Studio open movies (CC BY), shown only to
   fill the layout. Delete this file and its <script> tag when you make the
   site yours.
   ===================================================================== */
(() => {
const SAMPLE = "Sample · Blender Studio (CC BY)";
const blender = {
  bunny:   { title: "Big Buck Bunny",    meta: SAMPLE, url: "https://youtu.be/YE7VzlLtp-4" },
  sintel:  { title: "Sintel",            meta: SAMPLE, url: "https://youtu.be/eRsGyueVLvQ" },
  tears:   { title: "Tears of Steel",    meta: SAMPLE, url: "https://youtu.be/R6MlUcmOul8" },
  spring:  { title: "Spring",            meta: SAMPLE, url: "https://youtu.be/WhWc3b3KhnY" },
  agent:   { title: "Agent 327",         meta: SAMPLE, url: "https://youtu.be/mN0zPOpADL4" },
  cosmos:  { title: "Cosmos Laundromat", meta: SAMPLE, url: "https://youtu.be/Y-rmzh0PI3c" },
  charge:  { title: "Charge",            meta: SAMPLE, url: "https://youtu.be/UXqq0ZvbOnk" },
  dream:   { title: "Elephants Dream",   meta: SAMPLE, url: "https://youtu.be/TLkA0RELQ1g" },
};
const photos = (key) => ({ card: `assets/demos/${key}-front.webp`, normal: `assets/demos/${key}-front.webp`, hero: `assets/demos/${key}-reveal.webp` });

window.DEMOS = {
  "3d-artist": {
    label: "3D artist",
    accent: "#7c5cff",
    content: {
      name: "Mira Okafor",
      roles: "3D Artist · Motion Designer · Blender · Cinema 4D",
      cardRole: "3D & Motion",
      cardCode: "ID · 2026 · MO-03",
      tagline: "I build worlds you want to stay in, one frame at a time.",
      strapText: "3D ARTIST • MOTION DESIGNER • MIRA OKAFOR • ",
      tools: ["ae", "ps", "davinci"],
      skills: ["Modelling", "Lighting", "Look dev", "Simulation", "Compositing", "Rendering"],
      aboutTitle: "Worlds with weight.",
      about: "I'm Mira, a 3D artist. I model, light and animate product films, title sequences and short stories, and I comp the final frames so the light feels real.",
      strengths: ["Lighting", "World building", "Detail"],
      photos: photos("3d-artist"),
      longForm: [blender.spring, blender.cosmos, blender.charge, blender.agent],
      shorts: [blender.sintel, blender.dream, blender.bunny],
      email: "hello@example.com", whatsapp: "", whatsappDisplay: "",
    },
  },
  "yt-editor": {
    label: "YouTube editor",
    accent: "#22c55e",
    content: {
      name: "Leo Varga",
      roles: "YouTube Editor · Retention Editing · Premiere Pro",
      cardRole: "YouTube Editor",
      cardCode: "ID · 2026 · LV-07",
      tagline: "Retention first. Every cut earns the next ten seconds.",
      strapText: "YOUTUBE EDITOR • RETENTION • LEO VARGA • ",
      tools: ["pr", "ae", "ps"],
      skills: ["Hooks", "Retention", "B-roll", "Sound design", "Captions", "Thumbnails"],
      aboutTitle: "Cuts that keep them watching.",
      about: "I'm Leo, a YouTube editor. I turn long recordings into tight videos and Shorts with strong hooks, clean B-roll and sound that carries the story.",
      strengths: ["Hooks", "Pacing", "Story"],
      photos: photos("yt-editor"),
      longForm: [blender.tears, blender.agent, blender.bunny, blender.spring],
      shorts: [blender.charge, blender.cosmos, blender.dream],
      email: "hello@example.com", whatsapp: "", whatsappDisplay: "",
    },
  },
  "brand-motion": {
    label: "brand motion designer",
    accent: "#ff8a00",
    content: {
      name: "Sana Rahim",
      roles: "Brand Motion Designer · After Effects · Logo Animation",
      cardRole: "Brand Motion",
      cardCode: "ID · 2026 · SR-12",
      tagline: "Brands that move the way they sound.",
      strapText: "BRAND MOTION • LOGO ANIMATION • SANA RAHIM • ",
      tools: ["ae", "ai", "ps"],
      skills: ["Logo animation", "Kinetic type", "Brand systems", "Transitions", "Ads", "Social"],
      aboutTitle: "Motion with a brand voice.",
      about: "I'm Sana, a brand motion designer. I animate logos, type and brand systems for launches, ads and social, so a brand feels the same everywhere it moves.",
      strengths: ["Brand systems", "Typography", "Timing"],
      photos: photos("brand-motion"),
      longForm: [blender.charge, blender.dream, blender.sintel, blender.tears],
      shorts: [blender.spring, blender.agent, blender.bunny],
      email: "hello@example.com", whatsapp: "", whatsappDisplay: "",
    },
  },
};
})();
