/**
 * LIFE HACKS — content registry.
 * ────────────────────────────────────────────────────────────────────────
 * This is the ONLY file you edit to add a new life hack. Append an object to
 * the HACKS array and it appears on the site automatically (card + detail
 * page + search). No build step required.
 *
 * Hack shape:
 *   id            unique slug (lowercase-with-dashes) — used in the URL (#/hack/<id>)
 *   title         short display title
 *   emoji         one emoji shown on the card
 *   summary       one-sentence teaser for the card
 *   tags          array of keywords (also used by search)
 *   difficulty    'Easy' | 'Medium' | 'Advanced'
 *   time          human estimate, e.g. '10 min'
 *   updated       ISO date string 'YYYY-MM-DD'
 *   hero          optional image path (assets/…)
 *   safety        optional array of caution strings (rendered as a warning box)
 *   materials     optional array of strings (rendered as a checklist)
 *   why           optional array of paragraphs explaining WHY it works
 *   steps         array of { title, body, img? } — the walkthrough
 *   sources       optional array of { label, url }
 *   related       optional array of { label, url } (e.g. link back to a product)
 * ────────────────────────────────────────────────────────────────────────
 */

export const HACKS = [
  {
    id: 'diy-capacitive-stylus',
    title: 'DIY Capacitive Stylus (from a pen + a fuse)',
    emoji: '🖊️',
    summary: 'Turn an old clicky pen and a glass electronics fuse into a smooth, dry stylus for phones and tablets — perfect as an AFTERGLOW pen.',
    tags: ['stylus', 'diy', 'touchscreen', 'tablet', 'phone', 'afterglow', 'drawing', 'capacitive'],
    difficulty: 'Easy',
    time: '10–15 min',
    updated: '2026-08-04',
    hero: 'assets/hack-stylus-hero.png',
    safety: [
      'Ensure the metal end-cap of the fuse is perfectly smooth — no sharp stamps, manufacturing burrs, or solder blobs — so it never scratches your glass. Sand it lightly if needed.',
      'This works with the tiny static charge naturally in your body. Never connect a homemade stylus to any battery or power source.',
      'Handle the glass fuse gently; if it cracks, discard it and use a new one.'
    ],
    materials: [
      'A plastic clicky pen with a wide opening at the tip',
      'A glass cartridge fuse that fits snugly through the pen-tip opening',
      'A thin, uninsulated (bare) metal wire — copper or craft wire — or a strip of aluminium foil',
      'Tape or hot glue'
    ],
    why: [
      'Modern phone and tablet screens are capacitive touchscreens. They react to a conductive material with a contact area of roughly ¼ inch that can disrupt the screen\'s electrostatic field.',
      '“Having a stylus that is about ¼ inch wide will ensure that there is enough surface area to be detected.” — Make:',
      'The smooth metal end-cap of a standard glass electronics fuse is almost exactly that size and material, so it mimics a human fingertip — but without needing any moisture.',
      'That\'s why this beats a wet-sponge or foil-ball stylus: it never dries out, has a much sturdier tip for drawing, and won\'t leave water streaks on your screen.'
    ],
    steps: [
      { title: 'Disassemble the pen',
        body: 'Remove the ink reservoir, spring, and clicking mechanism. You only need the empty plastic barrel.' },
      { title: 'Inspect the fuse',
        body: 'Check the metal end-caps of your glass fuse. Make sure both are completely smooth and free of sharp stamps, burrs, or solder blobs that could scratch your screen. A few seconds with fine sandpaper fixes rough spots.' },
      { title: 'Connect the wire',
        body: 'Wrap one end of the bare wire tightly around the glass body or one of the metal caps of the fuse. If you\'re using foil instead, wrap a thin strip of foil tightly around the fuse.' },
      { title: 'Thread the pen',
        body: 'Thread the free end of the wire (or foil strip) up through the inside of the pen barrel and out through the top or the side.' },
      { title: 'Position the tip',
        body: 'Push the fuse into the front tip of the pen so one smooth metal cap sticks out like a pen nib. Lock it firmly in place with a drop of hot glue or a bit of tape around the base.',
        img: 'assets/step-diagram.png' },
      { title: 'Secure the handle',
        body: 'Wrap the remaining wire (or foil) tightly around the outside of the pen where your fingers naturally rest.' },
      { title: 'Test it',
        body: 'Hold the pen so your bare skin touches the external wire. Your body\'s natural charge travels down the wire into the metal tip, registering a smooth, dry stroke. Open AFTERGLOW and paint some light with your new pen!' }
    ],
    sources: [
      { label: 'Make: — capacitive stylus surface-area guidance', url: 'https://makezine.com/' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  }

  // ── Add your next life hack below this line ──────────────────────────────
  // , {
  //   id: 'your-next-hack',
  //   title: '...',
  //   emoji: '💡',
  //   summary: '...',
  //   tags: ['...'],
  //   difficulty: 'Easy',
  //   time: '5 min',
  //   updated: '2026-08-04',
  //   steps: [ { title: 'Step one', body: '...' } ]
  // }
];
