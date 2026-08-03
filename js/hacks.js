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
  ,
  {
    id: 'foil-wifi-booster',
    title: 'Tin-foil Wi-Fi Booster',
    emoji: '📶',
    summary: 'A curved sheet of kitchen foil behind your router reflects the signal toward the rooms you actually use — a free 5-minute range boost.',
    tags: ['wifi', 'router', 'foil', 'signal', 'internet', 'diy', 'antenna', 'reflector', 'home'],
    difficulty: 'Easy',
    time: '5 min',
    updated: '2026-08-05',
    hero: 'assets/hack-wifi-hero.png',
    safety: [
      'Keep the foil a few centimetres clear of the antennas and any vents — never let it touch the router\'s ports or block its cooling.',
      'Don\'t cover the router in foil. You only want a reflector standing behind it, not a wrap around it.',
      'This shapes existing signal; it can\'t create coverage the router never had. For whole-home fixes a mesh system or repeater is still king.'
    ],
    materials: [
      'A sheet of aluminium foil (roughly A4 / letter size)',
      'A piece of thin card or an old cereal box for backing',
      'Sticky tape',
      'Scissors'
    ],
    why: [
      'Most home routers spray Wi-Fi in every direction — including out of the window and into the walls, where it\'s wasted.',
      'A metal surface reflects radio waves. Curving a foil-covered card into a gentle parabola behind the antennas catches the backward-going signal and bounces it forward, concentrating more of it toward one direction.',
      'Because you\'re redirecting signal rather than adding power, the gain shows up as steadier bars and speed in the room you aim at — often at the cost of the room directly behind the foil, which is exactly the trade you want.',
      'It\'s the same principle as a satellite dish or a torch reflector: a curved reflective surface focuses waves that would otherwise scatter.'
    ],
    steps: [
      { title: 'Cut your backing', body: 'Cut the card to roughly the height of your router\'s antennas and about twice as wide, so it can curve around behind them.' },
      { title: 'Cover it in foil', body: 'Wrap or tape a smooth layer of foil over one side of the card. The shiny, flat side will face your router — smoother foil reflects better.' },
      { title: 'Curve it into an arc', body: 'Gently bow the card into a shallow C-shape (a parabola). Tape a small tab or fold the base so it stands up on its own.' },
      { title: 'Place it behind the antennas', body: 'Stand the curved reflector directly behind the router with the foil facing the direction you want stronger signal — e.g. toward your sofa, bedroom, or desk. Keep it a few cm clear of the antennas.',
        img: 'assets/hack-wifi-hero.png' },
      { title: 'Aim and test', body: 'Run a quick speed test or watch your bars in the target room, then nudge the angle and curve until it peaks. Small adjustments make a surprising difference.' }
    ],
    sources: [
      { label: 'Research: directional "virtual" reflectors improve Wi-Fi coverage (WiPrint / Dartmouth-Columbia study)', url: 'https://en.wikipedia.org/wiki/Parabolic_reflector' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'sharpen-scissors-with-foil',
    title: 'Sharpen Scissors with Kitchen Foil',
    emoji: '✂️',
    summary: 'Bring dull scissors back to life in under a minute by cutting through folded aluminium foil — no sharpening stone needed.',
    tags: ['scissors', 'foil', 'sharpen', 'kitchen', 'diy', 'blade', 'quick', 'home'],
    difficulty: 'Easy',
    time: '2 min',
    updated: '2026-08-05',
    hero: 'assets/hack-scissors-hero.png',
    safety: [
      'Cut away from your body and keep fingers clear of the blades.',
      'The foil strips have freshly cut edges — they can be a little sharp, so bin them carefully.',
      'This tunes up a slightly dull edge; badly chipped or rusted blades need a proper sharpener.'
    ],
    materials: [
      'A sheet of aluminium foil (about 30 cm / 12 in long)',
      'The dull scissors you want to sharpen',
      'A dry cloth or paper towel'
    ],
    why: [
      'Foil is soft aluminium, so it won\'t damage steel scissor blades — but dragging the cutting edges across it does two useful things.',
      'It burnishes the very edge, smoothing away microscopic burrs and rolled spots that build up with use and make scissors feel "dull".',
      'The mild abrasion also polishes the bevel slightly, realigning the edge so the two blades shear cleanly against each other again.',
      'It won\'t restore a truly damaged edge, but for everyday bluntness it\'s astonishingly effective for the effort.'
    ],
    steps: [
      { title: 'Fold the foil', body: 'Fold your sheet of foil lengthways several times into a thick strip of 6–8 layers. More layers means more cutting edges working at once.' },
      { title: 'Make full-length cuts', body: 'Cut through the folded foil using the whole length of the blades, from base (near the pivot) to tip, not just short snips.',
        img: 'assets/hack-scissors-hero.png' },
      { title: 'Repeat 10–15 times', body: 'Keep cutting steady, full strokes — about ten to fifteen passes. You\'ll often feel the action get smoother as you go.' },
      { title: 'Wipe the blades', body: 'Wipe both blades with a dry cloth to remove any tiny foil flecks so they don\'t transfer onto whatever you cut next.' },
      { title: 'Test on paper', body: 'Cut a sheet of paper. It should now slice cleanly all the way to the tip instead of folding or chewing. If not, give it another few passes.' }
    ],
    sources: [
      { label: 'Widely-tested household method — burnishing a steel edge on soft aluminium', url: 'https://en.wikipedia.org/wiki/Sharpening' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  }
];
